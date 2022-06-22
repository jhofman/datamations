import assert from 'assert'
import * as d3 from 'd3'
import { generateGrid } from '../scripts/layout.js'

import fs from 'fs'
import chai from 'chai'
import * as datamations from '../scripts/datamation-sanddance.js'

// set d3 globally. The functions expect d3 to be globally set
global.d3 = d3

const epsilon = 0.0001

let data = []
let raw_spec = []
let min_spec = []
let max_spec = []
let min_spec_two_column = []
let max_spec_two_column = []
let sum_specs = []
let sum_specs_two_columns = []
let penguins = []
let medians = []
let products = []
let groupby_degree_work = []
let prod_specs = []
let prod_specs_two_columns = []

const gridSpecInput = {
  height: 300,
  width: 300,
  $schema: 'https://vega.github.io/schema/vega-lite/v4.json',
  meta: {
    parse: 'grid',
    description: 'Initial data'
  },
  data: {
    values: [
      {
        n: 100,
        gemini_ids: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
      }
    ]
  },
  mark: {
    type: 'point',
    filled: true,
    size: 20
  },
  encoding: {
    x: {
      field: 'datamations_x',
      type: 'quantitative',
      axis: null
    },
    y: {
      field: 'datamations_y',
      type: 'quantitative',
      axis: null
    }
  }
}

function compare_specs_with_file (specs, raw_spec) {
  for (let i = 0; i < specs.length; i++) {
    for (const key of Object.keys(specs[i])) {
      if (key === 'data') {
        for (var j = 0; j < specs[i][key].values.length; j++) {
          for (const field of Object.keys(specs[i][key].values[j])) {
            if (field.startsWith('datamations_y') || field === 'Lower' || field === 'Upper') {
              chai
                .expect(specs[i][key].values[j][field])
                .to.be.approximately(
                  raw_spec[i][key].values[j][field],
                  epsilon,
                  'spec#' + i + ', gemini_id: ' + specs[i][key].values[j].gemini_id + ', approx field: ' + field
                )
            } else {
              chai
                .expect(specs[i][key].values[j][field])
                .to.deep.equal(
                  raw_spec[i][key].values[j][field],
                  'spec#' + i + ', gemini_id: ' + raw_spec[i][key].values[j].gemini_id + ', failed data: ' + field
                )
            }
          }
        }
      } else {
        if (key === 'layer') {
          for (j = 0; j < specs[i][key].length; j++) {
            chai
              .expect(specs[i][key][j].encoding.y.scale.domain[0])
              .to.be.approximately(raw_spec[i][key][j].encoding.y.scale.domain[0], epsilon)
            chai
              .expect(specs[i][key][j].encoding.y.scale.domain[1])
              .to.be.approximately(raw_spec[i][key][j].encoding.y.scale.domain[1], epsilon)

            specs[i][key][j].encoding.y.scale.domain =
              raw_spec[i][key][j].encoding.y.scale.domain
          }
          chai.expect(specs[i][key]).to.deep.equal(raw_spec[i][key], 'failed layer#' + j)
        } else if (key === 'spec' && specs[i][key].layer) {
          for (j = 0; j < specs[i][key].layer.length; j++) {
            chai
              .expect(specs[i][key].layer[j].encoding.y.scale.domain[0])
              .to.be.approximately(raw_spec[i][key].layer[j].encoding.y.scale.domain[0], epsilon)
            chai
              .expect(specs[i][key].layer[j].encoding.y.scale.domain[1])
              .to.be.approximately(raw_spec[i][key].layer[j].encoding.y.scale.domain[1], epsilon)

            specs[i][key].layer[j].encoding.y.scale.domain =
              raw_spec[i][key].layer[j].encoding.y.scale.domain
          }
          chai.expect(specs[i][key]).to.deep.equal(raw_spec[i][key], 'failed spec#' + i)
        } else {
          if (key === 'encoding' && specs[i][key].y.scale) {
            chai
              .expect(specs[i][key].y.scale.domain[0])
              .to.be.approximately(raw_spec[i][key].y.scale.domain[0], epsilon)
            chai
              .expect(specs[i][key].y.scale.domain[1])
              .to.be.approximately(raw_spec[i][key].y.scale.domain[1], epsilon)

            specs[i][key].y.scale.domain = raw_spec[i][key].y.scale.domain
          }
          else if (key === 'spec' && specs[i][key].encoding.y.scale) {
            chai
              .expect(specs[i][key].encoding.y.scale.domain[0])
              .to.be.approximately(raw_spec[i][key].encoding.y.scale.domain[0], epsilon)
            chai
              .expect(specs[i][key].encoding.y.scale.domain[1])
              .to.be.approximately(raw_spec[i][key].encoding.y.scale.domain[1], epsilon)

            specs[i][key].encoding.y.scale.domain = raw_spec[i][key].encoding.y.scale.domain
          }
          chai.expect(specs[i][key]).to.deep.equal(raw_spec[i][key], 'failed spec#' + i + ', key=' + key)
        }
      }
    }
  }
}

describe('Layout Functions', function () {
  describe('#generateGrid()', function () {
    const { gridValues } = generateGrid(gridSpecInput)

    it('should return correct number of points', function () {
      assert.equal(gridSpecInput.data.values[0].n, gridValues.length)
    })

    it('should correctly set gemini id', function () {
      const gemini_id_not_matched = gridValues.filter((d, i) => {
        return gridSpecInput.data.values[0].gemini_ids[i] !== d.gemini_id
      })
      assert.equal(gemini_id_not_matched.length, 0)
    })

    it('should have datamations_x, datamations_y, gemini_id', function () {
      const invalid = gridValues.filter((d) => {
        return d.datamations_x === undefined || d.datamations_x === null ||
               d.datamations_y === undefined || d.datamations_y === null ||
               d.gemini_id === undefined || d.gemini_id === null
      })
      assert.equal(invalid.length, 0)
    })
  })
})

describe('products rating', function () {
  before(function (done) {
    fs.readFile('../../../../data-raw/products.csv', 'utf8', function (err, fileContents) {
      if (err) throw err
      const lines = fileContents.split(/\r?\n/)
      data = []
      for (const line of lines) {
        if (line.trim()) {
          const parts = line.split(',')
          data.push(parts)
        }
      }
      fs.readFile('../../../../sandbox/products_mean_rating.json', 'utf8', function (err, fileContents) {
        if (err) throw err
        products = JSON.parse(fileContents)
        done()
      })
    })
  })
  context('group by two columns, mean', function () {
    it('should match', function () {
      const specs = datamations.specs({ values: data }, ['Year', 'Category'], 'Average of Rating', {
        2015: {
          Accessories: 0.631666666666667,
          Bikes: 0.3875,
          Clothing: 0.34625,
          Components: 0.495714285714286
        },
        2016: {
          Accessories: 0.875,
          Bikes: 0.3675,
          Clothing: 0.48375,
          Components: 0.424285714285714
        },
        2017: {
          Accessories: 0.936666666666667,
          Bikes: 0.4825,
          Clothing: 0.56,
          Components: 0.501428571428571
        }
      })
      // compare_specs_with_file(specs, products);
    })
  })
})

describe('palmer penguins', function () {
  before(function (done) {
    fs.readFile('../../../../data-raw/penguins.csv', 'utf8', function (err, fileContents) {
      if (err) throw err
      const lines = fileContents.split(/\r?\n/)
      data = []
      for (const line of lines) {
        if (line.trim()) {
          const parts = line.split(',')
          data.push(parts)
        }
      }
      fs.readFile('../../../../sandbox/penguins_three_groups.json', 'utf8', function (err, fileContents) {
        if (err) throw err
        penguins = JSON.parse(fileContents)
        fs.readFile('../../../../sandbox/penguins_median_specs.json', 'utf8', function (err, fileContents) {
          if (err) throw err
          medians = JSON.parse(fileContents)
          done()
        })
      })
    })
  })
  context('group by three columns, mean', function () {
    it('should match', function () {
      const specs = datamations.specs({ values: data }, ['species', 'island', 'sex'], 'Average of bill_length_mm', {
        Adelie: {
          Biscoe: { female: 37.35909091, male: 40.59090909 },
          Dream: { female: 36.91111111, male: 40.07142857, NA: 37.5 },
          Torgersen: { female: 37.55416667, male: 40.58695652, NA: 37.925 }
        },
        Chinstrap: {
          Dream: { female: 46.57352941, male: 51.09411765 }
        },
        Gentoo: {
          Biscoe: { female: 45.5637931, male: 49.47377049, NA: 45.625 }
        }
      })
      compare_specs_with_file(specs, penguins)
    })
  })
  context('group by three columns, median', function () {
    it('should match', function () {
      const specs = datamations.specs({ values: data }, ['species', 'island', 'sex'], 'Median of bill_depth_mm', {
        Adelie: {
          Biscoe: { female: 17.7, male: 18.9 },
          Dream: { female: 17.8, male: 18.65, NA: 18.9 },
          Torgersen: { female: 17.45, male: 19.2, NA: 17.7 }
        },
        Chinstrap: {
          Dream: { female: 17.65, male: 19.3 }
        },
        Gentoo: {
          Biscoe: { female: 14.25, male: 15.7, NA: 14.35 }
        }
      })
      compare_specs_with_file(specs, medians)
    })
  })
})

describe('small salary', function () {
  before(function (done) {
    fs.readFile('../../../../data-raw/small_salary.csv', 'utf8', function (err, fileContents) {
      if (err) throw err
      const lines = fileContents.split(/\r?\n/)
      data = []
      for (const line of lines) {
        if (line.trim()) {
          const parts = line.split(',')
          data.push(parts)
        }
      }
      fs.readFile('../../../../inst/specs/raw_spec.json', 'utf8', function (err, fileContents) {
        if (err) throw err
        raw_spec = JSON.parse(fileContents)
        fs.readFile('../../../../inst/specs/groupby_degree_work.json', 'utf8', function (err, fileContents) {
          if (err) throw err
          groupby_degree_work = JSON.parse(fileContents)
          fs.readFile('../../../../sandbox/custom_animations/custom-animations-min-R.json', 'utf8', function (err, fileContents) {
            if (err) throw err
            min_spec = JSON.parse(fileContents)
            fs.readFile('../../../../sandbox/custom_animations/custom-animations-max-R.json', 'utf8', function (err, fileContents) {
              if (err) throw err
              max_spec = JSON.parse(fileContents)
              fs.readFile('../../../../inst/specs/min_specs_two_columns.json', 'utf8', function (err, fileContents) {
                if (err) throw err
                min_spec_two_column = JSON.parse(fileContents)
                fs.readFile('../../../../inst/specs/max_specs_two_columns.json', 'utf8', function (err, fileContents) {
                  if (err) throw err
                  max_spec_two_column = JSON.parse(fileContents)
                  fs.readFile('../../../../inst/specs/sum_specs.json', 'utf8', function (err, fileContents) {
                    if (err) throw err
                    sum_specs = JSON.parse(fileContents)
                    fs.readFile('../../../../inst/specs/sum_specs_two_columns.json', 'utf8', function (err, fileContents) {
                      if (err) throw err
                      sum_specs_two_columns = JSON.parse(fileContents)
                      fs.readFile('../../../../inst/specs/prod_specs.json', 'utf8', function (err, fileContents) {
                        if (err) throw err
                        prod_specs = JSON.parse(fileContents)
                        fs.readFile('../../../../inst/specs/prod_specs_two_columns.json', 'utf8', function (err, fileContents) {
                          if (err) throw err
                          prod_specs_two_columns = JSON.parse(fileContents)
                          done()
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })

  context('group by single column', function () {
    it('should match', function () {
      const specs = datamations.specs({ values: data }, ['Degree'], 'Average of Salary', {
        Masters: 90.22633401,
        PhD: 88.24560613
      })
      compare_specs_with_file(specs, raw_spec)
    })
  })
  context('group by two columns', function () {
    it('should match', function () {
      const specs = datamations.specs({ values: data }, ['Degree', 'Work'], 'Average of Salary', {
        Masters: { Academia: 84.029883, Industry: 91.225762 },
        PhD: { Academia: 85.557966, Industry: 93.083359 }
      })
      compare_specs_with_file(specs, groupby_degree_work)
    })
  })
  context('group by single min', function () {
    it('should match', function () {
      const specs = datamations.specs({ values: data }, ['Degree'], 'Min of Salary', {
        Masters: 81.9445013836957,
        PhD: 83.7531382157467
      })
      compare_specs_with_file(specs, min_spec)
    })
  })
  context('group by single max', function () {
    it('should match', function () {
      const specs = datamations.specs({ values: data }, ['Degree'], 'Max of Salary', {
        Masters: 92.4685412924736,
        PhD: 94.0215112566947
      })
      compare_specs_with_file(specs, max_spec)
    })
  })
  context('group by two columns min', function () {
    it('should match', function () {
      const specs = datamations.specs({ values: data }, ['Degree', 'Work'], 'Min of Salary', {
        Masters: { Academia: 81.9445013836957, Industry: 89.5807276440318 },
        PhD: { Academia: 83.7531382157467, Industry: 91.4052118111867 }
      })
      compare_specs_with_file(specs, min_spec_two_column)
    })
  })
  context('group by two columns max', function () {
    it('should match', function () {
      const specs = datamations.specs({ values: data }, ['Degree', 'Work'], 'Max of Salary', {
        Masters: { Academia: 85.4951418309938, Industry: 92.4685412924736 },
        PhD: { Academia: 87.439179474255, Industry: 94.0215112566947 }
      })
      compare_specs_with_file(specs, max_spec_two_column)
    })
    context('group by single column and summarize by sum', function () {
      it('should match', function () {
        const specs = datamations.specs({ values: data }, ['Degree'], 'Sum of Salary', {
          Masters: 6496.296048,
          PhD: 2470.876972
        })
        compare_specs_with_file(specs, sum_specs)
      })
    })
    context('group by two columns and summarize by sum', function () {
      it('should match', function () {
        const specs = datamations.specs({ values: data }, ['Degree', 'Work'], 'Sum of Salary', {
          Masters: { Academia: 840.298832, Industry: 5655.997216 },
          PhD: { Academia: 1540.043383, Industry: 930.8335886 }
        })
        compare_specs_with_file(specs, sum_specs_two_columns)
      })
    })
    context('group by single column and summarize by product', function () {
      it('should match', function () {
        const specs = datamations.specs({ values: data }, ['Degree'], 'Product of Salary', {
          Masters: 5.89224682818428e+140,
          PhD: 2.94265906927814e+54
        })
        compare_specs_with_file(specs, prod_specs)
      })
    })
    context('group by two columns and summarize by product', function () {
      it('should match', function () {
        const specs = datamations.specs({ values: data }, ['Degree', 'Work'], 'Product of Salary', {
          Masters: { Academia: 17535325577809800000, Industry: 3.36021524210573e+121 },
          PhD: { Academia: 6.02776193570217e+34, Industry: 48818435443657800000 }
        })
        compare_specs_with_file(specs, prod_specs_two_columns)
      })
    })
  })
})
