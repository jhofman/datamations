# specs are generated as expected

    Code
      spec$x$spec
    Output
      [
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Initial data"
          },
          "data": {
            "values": [
              {
                "n": 100
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "axis": null
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by Degree"
          },
          "data": {
            "values": [
              {
                "Degree": "Masters",
                "n": 72
              },
              {
                "Degree": "PhD",
                "n": 28
              }
            ]
          },
          "facet": {
            "column": {
              "field": "Degree",
              "type": "ordinal",
              "title": "Degree"
            }
          },
          "spec": {
            "height": 300,
            "width": 150,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "jitter",
            "axes": true,
            "description": "Plot Salary within each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "Degree": "Masters",
                "x": 1,
                "y": 81.9445013836958
              },
              {
                "gemini_id": 2,
                "Degree": "Masters",
                "x": 1,
                "y": 82.8953005648218
              },
              {
                "gemini_id": 3,
                "Degree": "Masters",
                "x": 1,
                "y": 83.2656172472052
              },
              {
                "gemini_id": 4,
                "Degree": "Masters",
                "x": 1,
                "y": 82.899547266541
              },
              {
                "gemini_id": 5,
                "Degree": "Masters",
                "x": 1,
                "y": 90.1877911367919
              },
              {
                "gemini_id": 6,
                "Degree": "Masters",
                "x": 1,
                "y": 90.3138903337531
              },
              {
                "gemini_id": 7,
                "Degree": "Masters",
                "x": 1,
                "y": 90.3365755749401
              },
              {
                "gemini_id": 8,
                "Degree": "Masters",
                "x": 1,
                "y": 89.6885157823563
              },
              {
                "gemini_id": 9,
                "Degree": "Masters",
                "x": 1,
                "y": 89.657391943736
              },
              {
                "gemini_id": 10,
                "Degree": "Masters",
                "x": 1,
                "y": 89.8103184474166
              },
              {
                "gemini_id": 11,
                "Degree": "Masters",
                "x": 1,
                "y": 90.1445505130105
              },
              {
                "gemini_id": 12,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2597002927214
              },
              {
                "gemini_id": 13,
                "Degree": "Masters",
                "x": 1,
                "y": 89.5807276440319
              },
              {
                "gemini_id": 14,
                "Degree": "Masters",
                "x": 1,
                "y": 91.4775695463177
              },
              {
                "gemini_id": 15,
                "Degree": "Masters",
                "x": 1,
                "y": 90.5421400056221
              },
              {
                "gemini_id": 16,
                "Degree": "Masters",
                "x": 1,
                "y": 90.9508253019303
              },
              {
                "gemini_id": 17,
                "Degree": "Masters",
                "x": 1,
                "y": 84.3256172758993
              },
              {
                "gemini_id": 18,
                "Degree": "Masters",
                "x": 1,
                "y": 90.7608228451572
              },
              {
                "gemini_id": 19,
                "Degree": "Masters",
                "x": 1,
                "y": 91.2149588565808
              },
              {
                "gemini_id": 20,
                "Degree": "Masters",
                "x": 1,
                "y": 91.4811559985392
              },
              {
                "gemini_id": 21,
                "Degree": "Masters",
                "x": 1,
                "y": 91.203505871119
              },
              {
                "gemini_id": 22,
                "Degree": "Masters",
                "x": 1,
                "y": 84.1406831252389
              },
              {
                "gemini_id": 23,
                "Degree": "Masters",
                "x": 1,
                "y": 90.900099467719
              },
              {
                "gemini_id": 24,
                "Degree": "Masters",
                "x": 1,
                "y": 91.3447520111222
              },
              {
                "gemini_id": 25,
                "Degree": "Masters",
                "x": 1,
                "y": 90.6169246234931
              },
              {
                "gemini_id": 26,
                "Degree": "Masters",
                "x": 1,
                "y": 91.1798533124384
              },
              {
                "gemini_id": 27,
                "Degree": "Masters",
                "x": 1,
                "y": 91.2493746823166
              },
              {
                "gemini_id": 28,
                "Degree": "Masters",
                "x": 1,
                "y": 91.4049337708857
              },
              {
                "gemini_id": 29,
                "Degree": "Masters",
                "x": 1,
                "y": 91.1165353488177
              },
              {
                "gemini_id": 30,
                "Degree": "Masters",
                "x": 1,
                "y": 91.1068642993923
              },
              {
                "gemini_id": 31,
                "Degree": "Masters",
                "x": 1,
                "y": 90.6704280367121
              },
              {
                "gemini_id": 32,
                "Degree": "Masters",
                "x": 1,
                "y": 91.4698466714472
              },
              {
                "gemini_id": 33,
                "Degree": "Masters",
                "x": 1,
                "y": 91.0579056167044
              },
              {
                "gemini_id": 34,
                "Degree": "Masters",
                "x": 1,
                "y": 90.9434416298755
              },
              {
                "gemini_id": 35,
                "Degree": "Masters",
                "x": 1,
                "y": 91.1740557027515
              },
              {
                "gemini_id": 36,
                "Degree": "Masters",
                "x": 1,
                "y": 91.2401522365399
              },
              {
                "gemini_id": 37,
                "Degree": "Masters",
                "x": 1,
                "y": 90.5011388328858
              },
              {
                "gemini_id": 38,
                "Degree": "Masters",
                "x": 1,
                "y": 85.3303201349918
              },
              {
                "gemini_id": 39,
                "Degree": "Masters",
                "x": 1,
                "y": 90.6040293425322
              },
              {
                "gemini_id": 40,
                "Degree": "Masters",
                "x": 1,
                "y": 85.4951418309938
              },
              {
                "gemini_id": 41,
                "Degree": "Masters",
                "x": 1,
                "y": 91.4005046924576
              },
              {
                "gemini_id": 42,
                "Degree": "Masters",
                "x": 1,
                "y": 91.1476999609731
              },
              {
                "gemini_id": 43,
                "Degree": "Masters",
                "x": 1,
                "y": 90.7045878821518
              },
              {
                "gemini_id": 44,
                "Degree": "Masters",
                "x": 1,
                "y": 90.6188371984754
              },
              {
                "gemini_id": 45,
                "Degree": "Masters",
                "x": 1,
                "y": 90.5633510330226
              },
              {
                "gemini_id": 46,
                "Degree": "Masters",
                "x": 1,
                "y": 90.5981954357121
              },
              {
                "gemini_id": 47,
                "Degree": "Masters",
                "x": 1,
                "y": 91.1700340267271
              },
              {
                "gemini_id": 48,
                "Degree": "Masters",
                "x": 1,
                "y": 90.7472879537381
              },
              {
                "gemini_id": 49,
                "Degree": "Masters",
                "x": 1,
                "y": 92.0161147855688
              },
              {
                "gemini_id": 50,
                "Degree": "Masters",
                "x": 1,
                "y": 92.2819435379934
              },
              {
                "gemini_id": 51,
                "Degree": "Masters",
                "x": 1,
                "y": 91.5201518230606
              },
              {
                "gemini_id": 52,
                "Degree": "Masters",
                "x": 1,
                "y": 92.2406232669018
              },
              {
                "gemini_id": 53,
                "Degree": "Masters",
                "x": 1,
                "y": 84.5408536496107
              },
              {
                "gemini_id": 54,
                "Degree": "Masters",
                "x": 1,
                "y": 91.6161431246437
              },
              {
                "gemini_id": 55,
                "Degree": "Masters",
                "x": 1,
                "y": 92.0414693744387
              },
              {
                "gemini_id": 56,
                "Degree": "Masters",
                "x": 1,
                "y": 92.2921498068608
              },
              {
                "gemini_id": 57,
                "Degree": "Masters",
                "x": 1,
                "y": 91.6981512298808
              },
              {
                "gemini_id": 58,
                "Degree": "Masters",
                "x": 1,
                "y": 91.8960476492066
              },
              {
                "gemini_id": 59,
                "Degree": "Masters",
                "x": 1,
                "y": 92.4187721665949
              },
              {
                "gemini_id": 60,
                "Degree": "Masters",
                "x": 1,
                "y": 91.8766731780488
              },
              {
                "gemini_id": 61,
                "Degree": "Masters",
                "x": 1,
                "y": 92.3804325407837
              },
              {
                "gemini_id": 62,
                "Degree": "Masters",
                "x": 1,
                "y": 92.1729675922543
              },
              {
                "gemini_id": 63,
                "Degree": "Masters",
                "x": 1,
                "y": 92.1522822889965
              },
              {
                "gemini_id": 64,
                "Degree": "Masters",
                "x": 1,
                "y": 85.4612494898029
              },
              {
                "gemini_id": 65,
                "Degree": "Masters",
                "x": 1,
                "y": 92.1945560907479
              },
              {
                "gemini_id": 66,
                "Degree": "Masters",
                "x": 1,
                "y": 91.5597189620603
              },
              {
                "gemini_id": 67,
                "Degree": "Masters",
                "x": 1,
                "y": 91.992212592857
              },
              {
                "gemini_id": 68,
                "Degree": "Masters",
                "x": 1,
                "y": 92.4685412924737
              },
              {
                "gemini_id": 69,
                "Degree": "Masters",
                "x": 1,
                "y": 91.9892992568202
              },
              {
                "gemini_id": 70,
                "Degree": "Masters",
                "x": 1,
                "y": 91.9956347632688
              },
              {
                "gemini_id": 71,
                "Degree": "Masters",
                "x": 1,
                "y": 92.3084856946953
              },
              {
                "gemini_id": 72,
                "Degree": "Masters",
                "x": 1,
                "y": 91.7435715948232
              },
              {
                "gemini_id": 73,
                "Degree": "PhD",
                "x": 1,
                "y": 84.4868333523627
              },
              {
                "gemini_id": 74,
                "Degree": "PhD",
                "x": 1,
                "y": 83.8469139884692
              },
              {
                "gemini_id": 75,
                "Degree": "PhD",
                "x": 1,
                "y": 83.7531382157467
              },
              {
                "gemini_id": 76,
                "Degree": "PhD",
                "x": 1,
                "y": 85.2683244312648
              },
              {
                "gemini_id": 77,
                "Degree": "PhD",
                "x": 1,
                "y": 91.4052118111867
              },
              {
                "gemini_id": 78,
                "Degree": "PhD",
                "x": 1,
                "y": 85.3309176496696
              },
              {
                "gemini_id": 79,
                "Degree": "PhD",
                "x": 1,
                "y": 92.3489408034366
              },
              {
                "gemini_id": 80,
                "Degree": "PhD",
                "x": 1,
                "y": 84.7384647994768
              },
              {
                "gemini_id": 81,
                "Degree": "PhD",
                "x": 1,
                "y": 85.0068552203011
              },
              {
                "gemini_id": 82,
                "Degree": "PhD",
                "x": 1,
                "y": 85.1630066898651
              },
              {
                "gemini_id": 83,
                "Degree": "PhD",
                "x": 1,
                "y": 85.3773716066498
              },
              {
                "gemini_id": 84,
                "Degree": "PhD",
                "x": 1,
                "y": 85.0828845105134
              },
              {
                "gemini_id": 85,
                "Degree": "PhD",
                "x": 1,
                "y": 86.0538539250847
              },
              {
                "gemini_id": 86,
                "Degree": "PhD",
                "x": 1,
                "y": 93.1602621641941
              },
              {
                "gemini_id": 87,
                "Degree": "PhD",
                "x": 1,
                "y": 85.9106459924951
              },
              {
                "gemini_id": 88,
                "Degree": "PhD",
                "x": 1,
                "y": 93.4098555028904
              },
              {
                "gemini_id": 89,
                "Degree": "PhD",
                "x": 1,
                "y": 86.0406335154548
              },
              {
                "gemini_id": 90,
                "Degree": "PhD",
                "x": 1,
                "y": 93.0570627038833
              },
              {
                "gemini_id": 91,
                "Degree": "PhD",
                "x": 1,
                "y": 86.4447282091714
              },
              {
                "gemini_id": 92,
                "Degree": "PhD",
                "x": 1,
                "y": 92.7338204937987
              },
              {
                "gemini_id": 93,
                "Degree": "PhD",
                "x": 1,
                "y": 86.3678887020797
              },
              {
                "gemini_id": 94,
                "Degree": "PhD",
                "x": 1,
                "y": 87.049029128626
              },
              {
                "gemini_id": 95,
                "Degree": "PhD",
                "x": 1,
                "y": 93.1600916916505
              },
              {
                "gemini_id": 96,
                "Degree": "PhD",
                "x": 1,
                "y": 86.6827135430649
              },
              {
                "gemini_id": 97,
                "Degree": "PhD",
                "x": 1,
                "y": 93.7030599385034
              },
              {
                "gemini_id": 98,
                "Degree": "PhD",
                "x": 1,
                "y": 87.4391794742551
              },
              {
                "gemini_id": 99,
                "Degree": "PhD",
                "x": 1,
                "y": 93.833772216225
              },
              {
                "gemini_id": 100,
                "Degree": "PhD",
                "x": 1,
                "y": 94.0215112566948
              }
            ]
          },
          "facet": {
            "column": {
              "field": "Degree",
              "type": "ordinal",
              "title": "Degree"
            }
          },
          "spec": {
            "height": 300,
            "width": 150,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "Salary",
                "scale": {
                  "domain": [81.9445013836958, 94.0215112566948]
                }
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "axes": true,
            "description": "Plot mean Salary of each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 2,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 3,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 4,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 5,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 6,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 7,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 8,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 9,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 10,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 11,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 12,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 13,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 14,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 15,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 16,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 17,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 18,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 19,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 20,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 21,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 22,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 23,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 24,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 25,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 26,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 27,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 28,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 29,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 30,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 31,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 32,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 33,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 34,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 35,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 36,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 37,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 38,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 39,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 40,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 41,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 42,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 43,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 44,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 45,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 46,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 47,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 48,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 49,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 50,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 51,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 52,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 53,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 54,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 55,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 56,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 57,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 58,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 59,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 60,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 61,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 62,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 63,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 64,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 65,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 66,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 67,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 68,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 69,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 70,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 71,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 72,
                "Degree": "Masters",
                "x": 1,
                "y": 90.2263340061763
              },
              {
                "gemini_id": 73,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 74,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 75,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 76,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 77,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 78,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 79,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 80,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 81,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 82,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 83,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 84,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 85,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 86,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 87,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 88,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 89,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 90,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 91,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 92,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 93,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 94,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 95,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 96,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 97,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 98,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 99,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              },
              {
                "gemini_id": 100,
                "Degree": "PhD",
                "x": 1,
                "y": 88.2456061263219
              }
            ]
          },
          "facet": {
            "column": {
              "field": "Degree",
              "type": "ordinal",
              "title": "Degree"
            }
          },
          "spec": {
            "height": 300,
            "width": 150,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "Salary",
                "scale": {
                  "domain": [81.9445013836958, 94.0215112566948]
                }
              }
            }
          }
        }
      ] 

---

    Code
      spec$x$spec
    Output
      [
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Initial data"
          },
          "data": {
            "values": [
              {
                "n": 100
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "axis": null
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by Degree"
          },
          "data": {
            "values": [
              {
                "Degree": "Masters",
                "n": 72
              },
              {
                "Degree": "PhD",
                "n": 28
              }
            ]
          },
          "facet": {
            "column": {
              "field": "Degree",
              "type": "ordinal",
              "title": "Degree"
            }
          },
          "spec": {
            "height": 300,
            "width": 150,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by Degree, Work"
          },
          "data": {
            "values": [
              {
                "Degree": "Masters",
                "Work": "Academia",
                "n": 10
              },
              {
                "Degree": "Masters",
                "Work": "Industry",
                "n": 62
              },
              {
                "Degree": "PhD",
                "Work": "Academia",
                "n": 18
              },
              {
                "Degree": "PhD",
                "Work": "Industry",
                "n": 10
              }
            ]
          },
          "facet": {
            "column": {
              "field": "Degree",
              "type": "ordinal",
              "title": "Degree"
            },
            "row": {
              "field": "Work",
              "type": "ordinal",
              "title": "Work"
            }
          },
          "spec": {
            "height": 150,
            "width": 150,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "jitter",
            "axes": true,
            "description": "Plot Salary within each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 81.9445013836958
              },
              {
                "gemini_id": 2,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 82.8953005648218
              },
              {
                "gemini_id": 3,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 83.2656172472052
              },
              {
                "gemini_id": 4,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 82.899547266541
              },
              {
                "gemini_id": 5,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.3256172758993
              },
              {
                "gemini_id": 6,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.1406831252389
              },
              {
                "gemini_id": 7,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 85.3303201349918
              },
              {
                "gemini_id": 8,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 85.4951418309938
              },
              {
                "gemini_id": 9,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.5408536496107
              },
              {
                "gemini_id": 10,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 85.4612494898029
              },
              {
                "gemini_id": 11,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.1877911367919
              },
              {
                "gemini_id": 12,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.3138903337531
              },
              {
                "gemini_id": 13,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.3365755749401
              },
              {
                "gemini_id": 14,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 89.6885157823563
              },
              {
                "gemini_id": 15,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 89.657391943736
              },
              {
                "gemini_id": 16,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 89.8103184474166
              },
              {
                "gemini_id": 17,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.1445505130105
              },
              {
                "gemini_id": 18,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.2597002927214
              },
              {
                "gemini_id": 19,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 89.5807276440319
              },
              {
                "gemini_id": 20,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.4775695463177
              },
              {
                "gemini_id": 21,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.5421400056221
              },
              {
                "gemini_id": 22,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.9508253019303
              },
              {
                "gemini_id": 23,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.7608228451572
              },
              {
                "gemini_id": 24,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2149588565808
              },
              {
                "gemini_id": 25,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.4811559985392
              },
              {
                "gemini_id": 26,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.203505871119
              },
              {
                "gemini_id": 27,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.900099467719
              },
              {
                "gemini_id": 28,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.3447520111222
              },
              {
                "gemini_id": 29,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.6169246234931
              },
              {
                "gemini_id": 30,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.1798533124384
              },
              {
                "gemini_id": 31,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2493746823166
              },
              {
                "gemini_id": 32,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.4049337708857
              },
              {
                "gemini_id": 33,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.1165353488177
              },
              {
                "gemini_id": 34,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.1068642993923
              },
              {
                "gemini_id": 35,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.6704280367121
              },
              {
                "gemini_id": 36,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.4698466714472
              },
              {
                "gemini_id": 37,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.0579056167044
              },
              {
                "gemini_id": 38,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.9434416298755
              },
              {
                "gemini_id": 39,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.1740557027515
              },
              {
                "gemini_id": 40,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2401522365399
              },
              {
                "gemini_id": 41,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.5011388328858
              },
              {
                "gemini_id": 42,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.6040293425322
              },
              {
                "gemini_id": 43,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.4005046924576
              },
              {
                "gemini_id": 44,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.1476999609731
              },
              {
                "gemini_id": 45,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.7045878821518
              },
              {
                "gemini_id": 46,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.6188371984754
              },
              {
                "gemini_id": 47,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.5633510330226
              },
              {
                "gemini_id": 48,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.5981954357121
              },
              {
                "gemini_id": 49,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.1700340267271
              },
              {
                "gemini_id": 50,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 90.7472879537381
              },
              {
                "gemini_id": 51,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.0161147855688
              },
              {
                "gemini_id": 52,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.2819435379934
              },
              {
                "gemini_id": 53,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.5201518230606
              },
              {
                "gemini_id": 54,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.2406232669018
              },
              {
                "gemini_id": 55,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.6161431246437
              },
              {
                "gemini_id": 56,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.0414693744387
              },
              {
                "gemini_id": 57,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.2921498068608
              },
              {
                "gemini_id": 58,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.6981512298808
              },
              {
                "gemini_id": 59,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.8960476492066
              },
              {
                "gemini_id": 60,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.4187721665949
              },
              {
                "gemini_id": 61,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.8766731780488
              },
              {
                "gemini_id": 62,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.3804325407837
              },
              {
                "gemini_id": 63,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.1729675922543
              },
              {
                "gemini_id": 64,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.1522822889965
              },
              {
                "gemini_id": 65,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.1945560907479
              },
              {
                "gemini_id": 66,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.5597189620603
              },
              {
                "gemini_id": 67,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.992212592857
              },
              {
                "gemini_id": 68,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.4685412924737
              },
              {
                "gemini_id": 69,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.9892992568202
              },
              {
                "gemini_id": 70,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.9956347632688
              },
              {
                "gemini_id": 71,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 92.3084856946953
              },
              {
                "gemini_id": 72,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.7435715948232
              },
              {
                "gemini_id": 73,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 84.4868333523627
              },
              {
                "gemini_id": 74,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 83.8469139884692
              },
              {
                "gemini_id": 75,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 83.7531382157467
              },
              {
                "gemini_id": 76,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.2683244312648
              },
              {
                "gemini_id": 77,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.3309176496696
              },
              {
                "gemini_id": 78,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 84.7384647994768
              },
              {
                "gemini_id": 79,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.0068552203011
              },
              {
                "gemini_id": 80,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.1630066898651
              },
              {
                "gemini_id": 81,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.3773716066498
              },
              {
                "gemini_id": 82,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.0828845105134
              },
              {
                "gemini_id": 83,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 86.0538539250847
              },
              {
                "gemini_id": 84,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.9106459924951
              },
              {
                "gemini_id": 85,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 86.0406335154548
              },
              {
                "gemini_id": 86,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 86.4447282091714
              },
              {
                "gemini_id": 87,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 86.3678887020797
              },
              {
                "gemini_id": 88,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 87.049029128626
              },
              {
                "gemini_id": 89,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 86.6827135430649
              },
              {
                "gemini_id": 90,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 87.4391794742551
              },
              {
                "gemini_id": 91,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 91.4052118111867
              },
              {
                "gemini_id": 92,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 92.3489408034366
              },
              {
                "gemini_id": 93,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.1602621641941
              },
              {
                "gemini_id": 94,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.4098555028904
              },
              {
                "gemini_id": 95,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0570627038833
              },
              {
                "gemini_id": 96,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 92.7338204937987
              },
              {
                "gemini_id": 97,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.1600916916505
              },
              {
                "gemini_id": 98,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.7030599385034
              },
              {
                "gemini_id": 99,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.833772216225
              },
              {
                "gemini_id": 100,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 94.0215112566948
              }
            ]
          },
          "facet": {
            "column": {
              "field": "Degree",
              "type": "ordinal",
              "title": "Degree"
            },
            "row": {
              "field": "Work",
              "type": "ordinal",
              "title": "Work"
            }
          },
          "spec": {
            "height": 150,
            "width": 150,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "Salary",
                "scale": {
                  "domain": [81.9445013836958, 94.0215112566948]
                }
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "axes": true,
            "description": "Plot mean Salary of each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 2,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 3,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 4,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 5,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 6,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 7,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 8,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 9,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 10,
                "Degree": "Masters",
                "Work": "Academia",
                "x": 1,
                "y": 84.0298831968801
              },
              {
                "gemini_id": 11,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 12,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 13,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 14,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 15,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 16,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 17,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 18,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 19,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 20,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 21,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 22,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 23,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 24,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 25,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 26,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 27,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 28,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 29,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 30,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 31,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 32,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 33,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 34,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 35,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 36,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 37,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 38,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 39,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 40,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 41,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 42,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 43,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 44,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 45,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 46,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 47,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 48,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 49,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 50,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 51,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 52,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 53,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 54,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 55,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 56,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 57,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 58,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 59,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 60,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 61,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 62,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 63,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 64,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 65,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 66,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 67,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 68,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 69,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 70,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 71,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 72,
                "Degree": "Masters",
                "Work": "Industry",
                "x": 1,
                "y": 91.2257615560628
              },
              {
                "gemini_id": 73,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 74,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 75,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 76,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 77,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 78,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 79,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 80,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 81,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 82,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 83,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 84,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 85,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 86,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 87,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 88,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 89,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 90,
                "Degree": "PhD",
                "Work": "Academia",
                "x": 1,
                "y": 85.5579657196973
              },
              {
                "gemini_id": 91,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              },
              {
                "gemini_id": 92,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              },
              {
                "gemini_id": 93,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              },
              {
                "gemini_id": 94,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              },
              {
                "gemini_id": 95,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              },
              {
                "gemini_id": 96,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              },
              {
                "gemini_id": 97,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              },
              {
                "gemini_id": 98,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              },
              {
                "gemini_id": 99,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              },
              {
                "gemini_id": 100,
                "Degree": "PhD",
                "Work": "Industry",
                "x": 1,
                "y": 93.0833588582464
              }
            ]
          },
          "facet": {
            "column": {
              "field": "Degree",
              "type": "ordinal",
              "title": "Degree"
            },
            "row": {
              "field": "Work",
              "type": "ordinal",
              "title": "Work"
            }
          },
          "spec": {
            "height": 150,
            "width": 150,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "Salary",
                "scale": {
                  "domain": [81.9445013836958, 94.0215112566948]
                }
              }
            }
          }
        }
      ] 

---

    Code
      spec$x$spec
    Output
      [
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Initial data"
          },
          "data": {
            "values": [
              {
                "n": 100
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "axis": null
            }
          }
        },
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "jitter",
            "axes": false,
            "description": "Plot Salary within each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "x": 1,
                "y": 81.9445013836958
              },
              {
                "gemini_id": 2,
                "x": 1,
                "y": 84.4868333523627
              },
              {
                "gemini_id": 3,
                "x": 1,
                "y": 82.8953005648218
              },
              {
                "gemini_id": 4,
                "x": 1,
                "y": 83.8469139884692
              },
              {
                "gemini_id": 5,
                "x": 1,
                "y": 83.7531382157467
              },
              {
                "gemini_id": 6,
                "x": 1,
                "y": 85.2683244312648
              },
              {
                "gemini_id": 7,
                "x": 1,
                "y": 91.4052118111867
              },
              {
                "gemini_id": 8,
                "x": 1,
                "y": 85.3309176496696
              },
              {
                "gemini_id": 9,
                "x": 1,
                "y": 83.2656172472052
              },
              {
                "gemini_id": 10,
                "x": 1,
                "y": 92.3489408034366
              },
              {
                "gemini_id": 11,
                "x": 1,
                "y": 82.899547266541
              },
              {
                "gemini_id": 12,
                "x": 1,
                "y": 84.7384647994768
              },
              {
                "gemini_id": 13,
                "x": 1,
                "y": 90.1877911367919
              },
              {
                "gemini_id": 14,
                "x": 1,
                "y": 90.3138903337531
              },
              {
                "gemini_id": 15,
                "x": 1,
                "y": 90.3365755749401
              },
              {
                "gemini_id": 16,
                "x": 1,
                "y": 89.6885157823563
              },
              {
                "gemini_id": 17,
                "x": 1,
                "y": 89.657391943736
              },
              {
                "gemini_id": 18,
                "x": 1,
                "y": 89.8103184474166
              },
              {
                "gemini_id": 19,
                "x": 1,
                "y": 85.0068552203011
              },
              {
                "gemini_id": 20,
                "x": 1,
                "y": 90.1445505130105
              },
              {
                "gemini_id": 21,
                "x": 1,
                "y": 90.2597002927214
              },
              {
                "gemini_id": 22,
                "x": 1,
                "y": 85.1630066898651
              },
              {
                "gemini_id": 23,
                "x": 1,
                "y": 89.5807276440319
              },
              {
                "gemini_id": 24,
                "x": 1,
                "y": 85.3773716066498
              },
              {
                "gemini_id": 25,
                "x": 1,
                "y": 85.0828845105134
              },
              {
                "gemini_id": 26,
                "x": 1,
                "y": 91.4775695463177
              },
              {
                "gemini_id": 27,
                "x": 1,
                "y": 90.5421400056221
              },
              {
                "gemini_id": 28,
                "x": 1,
                "y": 90.9508253019303
              },
              {
                "gemini_id": 29,
                "x": 1,
                "y": 84.3256172758993
              },
              {
                "gemini_id": 30,
                "x": 1,
                "y": 90.7608228451572
              },
              {
                "gemini_id": 31,
                "x": 1,
                "y": 91.2149588565808
              },
              {
                "gemini_id": 32,
                "x": 1,
                "y": 91.4811559985392
              },
              {
                "gemini_id": 33,
                "x": 1,
                "y": 91.203505871119
              },
              {
                "gemini_id": 34,
                "x": 1,
                "y": 84.1406831252389
              },
              {
                "gemini_id": 35,
                "x": 1,
                "y": 90.900099467719
              },
              {
                "gemini_id": 36,
                "x": 1,
                "y": 91.3447520111222
              },
              {
                "gemini_id": 37,
                "x": 1,
                "y": 90.6169246234931
              },
              {
                "gemini_id": 38,
                "x": 1,
                "y": 91.1798533124384
              },
              {
                "gemini_id": 39,
                "x": 1,
                "y": 91.2493746823166
              },
              {
                "gemini_id": 40,
                "x": 1,
                "y": 91.4049337708857
              },
              {
                "gemini_id": 41,
                "x": 1,
                "y": 91.1165353488177
              },
              {
                "gemini_id": 42,
                "x": 1,
                "y": 91.1068642993923
              },
              {
                "gemini_id": 43,
                "x": 1,
                "y": 86.0538539250847
              },
              {
                "gemini_id": 44,
                "x": 1,
                "y": 90.6704280367121
              },
              {
                "gemini_id": 45,
                "x": 1,
                "y": 91.4698466714472
              },
              {
                "gemini_id": 46,
                "x": 1,
                "y": 91.0579056167044
              },
              {
                "gemini_id": 47,
                "x": 1,
                "y": 93.1602621641941
              },
              {
                "gemini_id": 48,
                "x": 1,
                "y": 85.9106459924951
              },
              {
                "gemini_id": 49,
                "x": 1,
                "y": 93.4098555028904
              },
              {
                "gemini_id": 50,
                "x": 1,
                "y": 90.9434416298755
              },
              {
                "gemini_id": 51,
                "x": 1,
                "y": 91.1740557027515
              },
              {
                "gemini_id": 52,
                "x": 1,
                "y": 86.0406335154548
              },
              {
                "gemini_id": 53,
                "x": 1,
                "y": 93.0570627038833
              },
              {
                "gemini_id": 54,
                "x": 1,
                "y": 91.2401522365399
              },
              {
                "gemini_id": 55,
                "x": 1,
                "y": 90.5011388328858
              },
              {
                "gemini_id": 56,
                "x": 1,
                "y": 85.3303201349918
              },
              {
                "gemini_id": 57,
                "x": 1,
                "y": 90.6040293425322
              },
              {
                "gemini_id": 58,
                "x": 1,
                "y": 85.4951418309938
              },
              {
                "gemini_id": 59,
                "x": 1,
                "y": 91.4005046924576
              },
              {
                "gemini_id": 60,
                "x": 1,
                "y": 91.1476999609731
              },
              {
                "gemini_id": 61,
                "x": 1,
                "y": 90.7045878821518
              },
              {
                "gemini_id": 62,
                "x": 1,
                "y": 90.6188371984754
              },
              {
                "gemini_id": 63,
                "x": 1,
                "y": 90.5633510330226
              },
              {
                "gemini_id": 64,
                "x": 1,
                "y": 90.5981954357121
              },
              {
                "gemini_id": 65,
                "x": 1,
                "y": 91.1700340267271
              },
              {
                "gemini_id": 66,
                "x": 1,
                "y": 90.7472879537381
              },
              {
                "gemini_id": 67,
                "x": 1,
                "y": 86.4447282091714
              },
              {
                "gemini_id": 68,
                "x": 1,
                "y": 92.0161147855688
              },
              {
                "gemini_id": 69,
                "x": 1,
                "y": 92.2819435379934
              },
              {
                "gemini_id": 70,
                "x": 1,
                "y": 91.5201518230606
              },
              {
                "gemini_id": 71,
                "x": 1,
                "y": 92.2406232669018
              },
              {
                "gemini_id": 72,
                "x": 1,
                "y": 92.7338204937987
              },
              {
                "gemini_id": 73,
                "x": 1,
                "y": 86.3678887020797
              },
              {
                "gemini_id": 74,
                "x": 1,
                "y": 84.5408536496107
              },
              {
                "gemini_id": 75,
                "x": 1,
                "y": 91.6161431246437
              },
              {
                "gemini_id": 76,
                "x": 1,
                "y": 92.0414693744387
              },
              {
                "gemini_id": 77,
                "x": 1,
                "y": 92.2921498068608
              },
              {
                "gemini_id": 78,
                "x": 1,
                "y": 91.6981512298808
              },
              {
                "gemini_id": 79,
                "x": 1,
                "y": 91.8960476492066
              },
              {
                "gemini_id": 80,
                "x": 1,
                "y": 92.4187721665949
              },
              {
                "gemini_id": 81,
                "x": 1,
                "y": 87.049029128626
              },
              {
                "gemini_id": 82,
                "x": 1,
                "y": 91.8766731780488
              },
              {
                "gemini_id": 83,
                "x": 1,
                "y": 92.3804325407837
              },
              {
                "gemini_id": 84,
                "x": 1,
                "y": 92.1729675922543
              },
              {
                "gemini_id": 85,
                "x": 1,
                "y": 93.1600916916505
              },
              {
                "gemini_id": 86,
                "x": 1,
                "y": 92.1522822889965
              },
              {
                "gemini_id": 87,
                "x": 1,
                "y": 85.4612494898029
              },
              {
                "gemini_id": 88,
                "x": 1,
                "y": 92.1945560907479
              },
              {
                "gemini_id": 89,
                "x": 1,
                "y": 86.6827135430649
              },
              {
                "gemini_id": 90,
                "x": 1,
                "y": 91.5597189620603
              },
              {
                "gemini_id": 91,
                "x": 1,
                "y": 91.992212592857
              },
              {
                "gemini_id": 92,
                "x": 1,
                "y": 92.4685412924737
              },
              {
                "gemini_id": 93,
                "x": 1,
                "y": 93.7030599385034
              },
              {
                "gemini_id": 94,
                "x": 1,
                "y": 87.4391794742551
              },
              {
                "gemini_id": 95,
                "x": 1,
                "y": 91.9892992568202
              },
              {
                "gemini_id": 96,
                "x": 1,
                "y": 91.9956347632688
              },
              {
                "gemini_id": 97,
                "x": 1,
                "y": 92.3084856946953
              },
              {
                "gemini_id": 98,
                "x": 1,
                "y": 91.7435715948232
              },
              {
                "gemini_id": 99,
                "x": 1,
                "y": 93.833772216225
              },
              {
                "gemini_id": 100,
                "x": 1,
                "y": 94.0215112566948
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": {
                "values": [1, 1],
                "labelExpr": ""
              },
              "title": "",
              "scale": {
                "domain": [0.5, 1.5]
              }
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "title": "Salary",
              "scale": {
                "domain": [81.9445013836958, 94.0215112566948]
              }
            }
          }
        },
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "axes": false,
            "description": "Plot mean Salary of each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 2,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 3,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 4,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 5,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 6,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 7,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 8,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 9,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 10,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 11,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 12,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 13,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 14,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 15,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 16,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 17,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 18,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 19,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 20,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 21,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 22,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 23,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 24,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 25,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 26,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 27,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 28,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 29,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 30,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 31,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 32,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 33,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 34,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 35,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 36,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 37,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 38,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 39,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 40,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 41,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 42,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 43,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 44,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 45,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 46,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 47,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 48,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 49,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 50,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 51,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 52,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 53,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 54,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 55,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 56,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 57,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 58,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 59,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 60,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 61,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 62,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 63,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 64,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 65,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 66,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 67,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 68,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 69,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 70,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 71,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 72,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 73,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 74,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 75,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 76,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 77,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 78,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 79,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 80,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 81,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 82,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 83,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 84,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 85,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 86,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 87,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 88,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 89,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 90,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 91,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 92,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 93,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 94,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 95,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 96,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 97,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 98,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 99,
                "x": 1,
                "y": 89.6717301998171
              },
              {
                "gemini_id": 100,
                "x": 1,
                "y": 89.6717301998171
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": {
                "values": [1, 1],
                "labelExpr": ""
              },
              "title": "",
              "scale": {
                "domain": [0.5, 1.5]
              }
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "title": "Salary",
              "scale": {
                "domain": [81.9445013836958, 94.0215112566948]
              }
            }
          }
        }
      ] 

---

    Code
      spec$x$spec
    Output
      [
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Initial data"
          },
          "data": {
            "values": [
              {
                "n": 344
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "axis": null
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by species"
          },
          "data": {
            "values": [
              {
                "species": "Adelie",
                "n": 152
              },
              {
                "species": "Chinstrap",
                "n": 68
              },
              {
                "species": "Gentoo",
                "n": 124
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            }
          },
          "spec": {
            "height": 300,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by species, island"
          },
          "data": {
            "values": [
              {
                "species": "Adelie",
                "island": "Biscoe",
                "n": 44
              },
              {
                "species": "Adelie",
                "island": "Dream",
                "n": 56
              },
              {
                "species": "Adelie",
                "island": "Torgersen",
                "n": 52
              },
              {
                "species": "Chinstrap",
                "island": "Dream",
                "n": 68
              },
              {
                "species": "Gentoo",
                "island": "Biscoe",
                "n": 124
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "island",
              "type": "ordinal",
              "title": "island"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by species, island, sex"
          },
          "data": {
            "values": [
              {
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "n": 22
              },
              {
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "n": 22
              },
              {
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "n": 27
              },
              {
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "n": 28
              },
              {
                "species": "Adelie",
                "island": "Dream",
                "sex": "NA",
                "n": 1
              },
              {
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "n": 24
              },
              {
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "n": 23
              },
              {
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "NA",
                "n": 5
              },
              {
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "n": 34
              },
              {
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "n": 34
              },
              {
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "n": 58
              },
              {
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "n": 61
              },
              {
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "NA",
                "n": 5
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "island",
              "type": "ordinal",
              "title": "island"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              },
              "color": {
                "field": "sex",
                "type": "nominal",
                "legend": {
                  "values": ["female", "male", "NA"]
                }
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "jitter",
            "axes": true,
            "description": "Plot bill_length_mm within each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 2,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 3,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 35.3
              },
              {
                "gemini_id": 4,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 5,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 6,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 7,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 8,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 34.5
              },
              {
                "gemini_id": 9,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 10,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 11,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 12,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 13,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 14,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 15,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 16,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 17,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 18,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 19,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 20,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 21,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 22,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 23,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 37.7
              },
              {
                "gemini_id": 24,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 38.2
              },
              {
                "gemini_id": 25,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 38.8
              },
              {
                "gemini_id": 26,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.6
              },
              {
                "gemini_id": 27,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5
              },
              {
                "gemini_id": 28,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.1
              },
              {
                "gemini_id": 29,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 42
              },
              {
                "gemini_id": 30,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 41.4
              },
              {
                "gemini_id": 31,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.6
              },
              {
                "gemini_id": 32,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 37.6
              },
              {
                "gemini_id": 33,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 41.3
              },
              {
                "gemini_id": 34,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 41.1
              },
              {
                "gemini_id": 35,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 41.6
              },
              {
                "gemini_id": 36,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 41.1
              },
              {
                "gemini_id": 37,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 41
              },
              {
                "gemini_id": 38,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 37.8
              },
              {
                "gemini_id": 39,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 39.7
              },
              {
                "gemini_id": 40,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 38.2
              },
              {
                "gemini_id": 41,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 43.2
              },
              {
                "gemini_id": 42,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 45.6
              },
              {
                "gemini_id": 43,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 42.2
              },
              {
                "gemini_id": 44,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 42.7
              },
              {
                "gemini_id": 45,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 46,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 47,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 48,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 49,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 50,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 51,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 52,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 53,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 54,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 55,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9
              },
              {
                "gemini_id": 56,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 57,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 58,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 34
              },
              {
                "gemini_id": 59,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 60,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 61,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 33.1
              },
              {
                "gemini_id": 62,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.8
              },
              {
                "gemini_id": 63,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 64,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 35.6
              },
              {
                "gemini_id": 65,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 66,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 67,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 32.1
              },
              {
                "gemini_id": 68,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 69,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 70,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 71,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 72,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 37.2
              },
              {
                "gemini_id": 73,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.9
              },
              {
                "gemini_id": 74,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 39.2
              },
              {
                "gemini_id": 75,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 38.8
              },
              {
                "gemini_id": 76,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 39.8
              },
              {
                "gemini_id": 77,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.8
              },
              {
                "gemini_id": 78,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 44.1
              },
              {
                "gemini_id": 79,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 39.6
              },
              {
                "gemini_id": 80,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 41.1
              },
              {
                "gemini_id": 81,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 42.3
              },
              {
                "gemini_id": 82,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 41.3
              },
              {
                "gemini_id": 83,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 36.3
              },
              {
                "gemini_id": 84,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 38.3
              },
              {
                "gemini_id": 85,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 41.1
              },
              {
                "gemini_id": 86,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 39.6
              },
              {
                "gemini_id": 87,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.8
              },
              {
                "gemini_id": 88,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.3
              },
              {
                "gemini_id": 89,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 43.2
              },
              {
                "gemini_id": 90,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 37.5
              },
              {
                "gemini_id": 91,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 41.1
              },
              {
                "gemini_id": 92,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.2
              },
              {
                "gemini_id": 93,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 39.7
              },
              {
                "gemini_id": 94,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.6
              },
              {
                "gemini_id": 95,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.7
              },
              {
                "gemini_id": 96,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 39
              },
              {
                "gemini_id": 97,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 39.2
              },
              {
                "gemini_id": 98,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 37.8
              },
              {
                "gemini_id": 99,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 41.5
              },
              {
                "gemini_id": 100,
                "species": "Adelie",
                "island": "Dream",
                "sex": "NA",
                "x": 3,
                "y": 37.5
              },
              {
                "gemini_id": 101,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 102,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 40.3
              },
              {
                "gemini_id": 103,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 104,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 105,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 106,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 107,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 38.7
              },
              {
                "gemini_id": 108,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 34.4
              },
              {
                "gemini_id": 109,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 110,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 33.5
              },
              {
                "gemini_id": 111,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 112,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 113,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 114,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 115,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 34.6
              },
              {
                "gemini_id": 116,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 117,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 118,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 119,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 120,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 121,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 35.2
              },
              {
                "gemini_id": 122,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 123,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 124,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 38.5
              },
              {
                "gemini_id": 125,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 39.1
              },
              {
                "gemini_id": 126,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 39.3
              },
              {
                "gemini_id": 127,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 39.2
              },
              {
                "gemini_id": 128,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 38.6
              },
              {
                "gemini_id": 129,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 34.6
              },
              {
                "gemini_id": 130,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 42.5
              },
              {
                "gemini_id": 131,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 46
              },
              {
                "gemini_id": 132,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 41.8
              },
              {
                "gemini_id": 133,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 39.7
              },
              {
                "gemini_id": 134,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 45.8
              },
              {
                "gemini_id": 135,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 42.8
              },
              {
                "gemini_id": 136,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 37.2
              },
              {
                "gemini_id": 137,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 42.1
              },
              {
                "gemini_id": 138,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 42.9
              },
              {
                "gemini_id": 139,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 35.1
              },
              {
                "gemini_id": 140,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 37.3
              },
              {
                "gemini_id": 141,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 41.1
              },
              {
                "gemini_id": 142,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 37.7
              },
              {
                "gemini_id": 143,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 41.4
              },
              {
                "gemini_id": 144,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.6
              },
              {
                "gemini_id": 145,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 41.5
              },
              {
                "gemini_id": 146,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 44.1
              },
              {
                "gemini_id": 147,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 43.1
              },
              {
                "gemini_id": 149,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "NA",
                "x": 3,
                "y": 34.1
              },
              {
                "gemini_id": 150,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "NA",
                "x": 3,
                "y": 42
              },
              {
                "gemini_id": 151,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "NA",
                "x": 3,
                "y": 37.8
              },
              {
                "gemini_id": 152,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "NA",
                "x": 3,
                "y": 37.8
              },
              {
                "gemini_id": 153,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 154,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 155,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 156,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 157,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46
              },
              {
                "gemini_id": 158,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 159,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 47
              },
              {
                "gemini_id": 160,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 45.9
              },
              {
                "gemini_id": 161,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 58
              },
              {
                "gemini_id": 162,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 163,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 42.4
              },
              {
                "gemini_id": 164,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 165,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 166,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 167,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 168,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 169,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 170,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 171,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 172,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 173,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 174,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 175,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 50.9
              },
              {
                "gemini_id": 176,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 177,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 178,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 179,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 180,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 181,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 182,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 183,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 184,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 185,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 186,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 187,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 50
              },
              {
                "gemini_id": 188,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.3
              },
              {
                "gemini_id": 189,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 52.7
              },
              {
                "gemini_id": 190,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.3
              },
              {
                "gemini_id": 191,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.3
              },
              {
                "gemini_id": 192,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.7
              },
              {
                "gemini_id": 193,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 52
              },
              {
                "gemini_id": 194,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 50.5
              },
              {
                "gemini_id": 195,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 50.3
              },
              {
                "gemini_id": 196,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 49.2
              },
              {
                "gemini_id": 197,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 48.5
              },
              {
                "gemini_id": 198,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 50.6
              },
              {
                "gemini_id": 199,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 52
              },
              {
                "gemini_id": 200,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 49.5
              },
              {
                "gemini_id": 201,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 52.8
              },
              {
                "gemini_id": 202,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 54.2
              },
              {
                "gemini_id": 203,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51
              },
              {
                "gemini_id": 204,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 49.7
              },
              {
                "gemini_id": 205,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 52
              },
              {
                "gemini_id": 206,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 53.5
              },
              {
                "gemini_id": 207,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 49
              },
              {
                "gemini_id": 208,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 50.9
              },
              {
                "gemini_id": 209,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 50.8
              },
              {
                "gemini_id": 210,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 49
              },
              {
                "gemini_id": 211,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.5
              },
              {
                "gemini_id": 212,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.4
              },
              {
                "gemini_id": 213,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 50.7
              },
              {
                "gemini_id": 214,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 52.2
              },
              {
                "gemini_id": 215,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 49.3
              },
              {
                "gemini_id": 216,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 50.2
              },
              {
                "gemini_id": 217,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.9
              },
              {
                "gemini_id": 218,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 55.8
              },
              {
                "gemini_id": 219,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 49.6
              },
              {
                "gemini_id": 220,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 50.8
              },
              {
                "gemini_id": 221,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 222,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 223,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 224,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 225,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 226,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 227,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 228,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 229,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 230,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 231,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 232,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 233,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 234,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 235,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 236,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 237,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 238,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 42.6
              },
              {
                "gemini_id": 239,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 44
              },
              {
                "gemini_id": 240,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 241,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 242,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 43.6
              },
              {
                "gemini_id": 243,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 244,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 245,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 246,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 247,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 248,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 43.8
              },
              {
                "gemini_id": 249,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 250,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 251,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 252,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 253,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 254,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 47.7
              },
              {
                "gemini_id": 255,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 256,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 257,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 258,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 259,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 260,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 47.4
              },
              {
                "gemini_id": 261,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 262,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 43.4
              },
              {
                "gemini_id": 263,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 264,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 265,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 266,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 267,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 268,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 269,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 270,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 271,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 41.7
              },
              {
                "gemini_id": 272,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 273,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 274,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 275,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 276,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 277,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 278,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 279,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50
              },
              {
                "gemini_id": 280,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50
              },
              {
                "gemini_id": 281,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 47.6
              },
              {
                "gemini_id": 282,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 46.7
              },
              {
                "gemini_id": 283,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 46.8
              },
              {
                "gemini_id": 284,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49
              },
              {
                "gemini_id": 285,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 48.4
              },
              {
                "gemini_id": 286,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.3
              },
              {
                "gemini_id": 287,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.2
              },
              {
                "gemini_id": 288,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 48.7
              },
              {
                "gemini_id": 289,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50.2
              },
              {
                "gemini_id": 290,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 46.3
              },
              {
                "gemini_id": 291,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 46.1
              },
              {
                "gemini_id": 292,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 47.8
              },
              {
                "gemini_id": 293,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50
              },
              {
                "gemini_id": 294,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 47.3
              },
              {
                "gemini_id": 295,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 59.6
              },
              {
                "gemini_id": 296,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 48.4
              },
              {
                "gemini_id": 297,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 44.4
              },
              {
                "gemini_id": 298,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 48.7
              },
              {
                "gemini_id": 299,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.6
              },
              {
                "gemini_id": 300,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.6
              },
              {
                "gemini_id": 301,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50.5
              },
              {
                "gemini_id": 302,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50.5
              },
              {
                "gemini_id": 303,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 45.2
              },
              {
                "gemini_id": 304,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 48.5
              },
              {
                "gemini_id": 305,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50.1
              },
              {
                "gemini_id": 306,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 45
              },
              {
                "gemini_id": 307,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 45.5
              },
              {
                "gemini_id": 308,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50.4
              },
              {
                "gemini_id": 309,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 46.2
              },
              {
                "gemini_id": 310,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 54.3
              },
              {
                "gemini_id": 311,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.8
              },
              {
                "gemini_id": 312,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.5
              },
              {
                "gemini_id": 313,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50.7
              },
              {
                "gemini_id": 314,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 46.4
              },
              {
                "gemini_id": 315,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 48.2
              },
              {
                "gemini_id": 316,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 48.6
              },
              {
                "gemini_id": 317,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 51.1
              },
              {
                "gemini_id": 318,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 45.2
              },
              {
                "gemini_id": 319,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 52.5
              },
              {
                "gemini_id": 320,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50
              },
              {
                "gemini_id": 321,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50.8
              },
              {
                "gemini_id": 322,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 51.3
              },
              {
                "gemini_id": 323,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 52.1
              },
              {
                "gemini_id": 324,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 52.2
              },
              {
                "gemini_id": 325,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.5
              },
              {
                "gemini_id": 326,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50.8
              },
              {
                "gemini_id": 327,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4
              },
              {
                "gemini_id": 328,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 51.1
              },
              {
                "gemini_id": 329,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 55.9
              },
              {
                "gemini_id": 330,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.1
              },
              {
                "gemini_id": 331,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 46.8
              },
              {
                "gemini_id": 332,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 53.4
              },
              {
                "gemini_id": 333,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 48.1
              },
              {
                "gemini_id": 334,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.8
              },
              {
                "gemini_id": 335,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 51.5
              },
              {
                "gemini_id": 336,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 55.1
              },
              {
                "gemini_id": 337,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 48.8
              },
              {
                "gemini_id": 338,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 50.4
              },
              {
                "gemini_id": 339,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.9
              },
              {
                "gemini_id": 340,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "NA",
                "x": 3,
                "y": 44.5
              },
              {
                "gemini_id": 341,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "NA",
                "x": 3,
                "y": 46.2
              },
              {
                "gemini_id": 342,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "NA",
                "x": 3,
                "y": 47.3
              },
              {
                "gemini_id": 343,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "NA",
                "x": 3,
                "y": 44.5
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "island",
              "type": "ordinal",
              "title": "island"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 2, 3],
                  "labelExpr": "round(datum.label) == 1 ? 'female' : round(datum.label) == 2 ? 'male' : 'NA'"
                },
                "title": "sex",
                "scale": {
                  "domain": [0.5, 3.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              },
              "color": {
                "field": "sex",
                "type": "nominal",
                "legend": {
                  "values": ["female", "male", "NA"]
                }
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "axes": true,
            "description": "Plot mean bill_length_mm of each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 2,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 3,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 4,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 5,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 6,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 7,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 8,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 9,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 10,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 11,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 12,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 13,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 14,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 15,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 16,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 17,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 18,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 19,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 20,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 21,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 22,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 23,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 24,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 25,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 26,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 27,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 28,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 29,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 30,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 31,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 32,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 33,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 34,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 35,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 36,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 37,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 38,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 39,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 40,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 41,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 42,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 43,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 44,
                "species": "Adelie",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 45,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 46,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 47,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 48,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 49,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 50,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 51,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 52,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 53,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 54,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 55,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 56,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 57,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 58,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 59,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 60,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 61,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 62,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 63,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 64,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 65,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 66,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 67,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 68,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 69,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 70,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 71,
                "species": "Adelie",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 72,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 73,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 74,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 75,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 76,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 77,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 78,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 79,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 80,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 81,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 82,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 83,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 84,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 85,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 86,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 87,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 88,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 89,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 90,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 91,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 92,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 93,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 94,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 95,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 96,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 97,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 98,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 99,
                "species": "Adelie",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 100,
                "species": "Adelie",
                "island": "Dream",
                "sex": "NA",
                "x": 3,
                "y": 37.5
              },
              {
                "gemini_id": 101,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 102,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 103,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 104,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 105,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 106,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 107,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 108,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 109,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 110,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 111,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 112,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 113,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 114,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 115,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 116,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 117,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 118,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 119,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 120,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 121,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 122,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 123,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 124,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "female",
                "x": 1,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 125,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 126,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 127,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 128,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 129,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 130,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 131,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 132,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 133,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 134,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 135,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 136,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 137,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 138,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 139,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 140,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 141,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 142,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 143,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 144,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 145,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 146,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 147,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "male",
                "x": 2,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 149,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "NA",
                "x": 3,
                "y": 37.925
              },
              {
                "gemini_id": 150,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "NA",
                "x": 3,
                "y": 37.925
              },
              {
                "gemini_id": 151,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "NA",
                "x": 3,
                "y": 37.925
              },
              {
                "gemini_id": 152,
                "species": "Adelie",
                "island": "Torgersen",
                "sex": "NA",
                "x": 3,
                "y": 37.925
              },
              {
                "gemini_id": 153,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 154,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 155,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 156,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 157,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 158,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 159,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 160,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 161,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 162,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 163,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 164,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 165,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 166,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 167,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 168,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 169,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 170,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 171,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 172,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 173,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 174,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 175,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 176,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 177,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 178,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 179,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 180,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 181,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 182,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 183,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 184,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 185,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 186,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "female",
                "x": 1,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 187,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 188,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 189,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 190,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 191,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 192,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 193,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 194,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 195,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 196,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 197,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 198,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 199,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 200,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 201,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 202,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 203,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 204,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 205,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 206,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 207,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 208,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 209,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 210,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 211,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 212,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 213,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 214,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 215,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 216,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 217,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 218,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 219,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 220,
                "species": "Chinstrap",
                "island": "Dream",
                "sex": "male",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 221,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 222,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 223,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 224,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 225,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 226,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 227,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 228,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 229,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 230,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 231,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 232,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 233,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 234,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 235,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 236,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 237,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 238,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 239,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 240,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 241,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 242,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 243,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 244,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 245,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 246,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 247,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 248,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 249,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 250,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 251,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 252,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 253,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 254,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 255,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 256,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 257,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 258,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 259,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 260,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 261,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 262,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 263,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 264,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 265,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 266,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 267,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 268,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 269,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 270,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 271,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 272,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 273,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 274,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 275,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 276,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 277,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 278,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "female",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 279,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 280,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 281,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 282,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 283,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 284,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 285,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 286,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 287,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 288,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 289,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 290,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 291,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 292,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 293,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 294,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 295,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 296,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 297,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 298,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 299,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 300,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 301,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 302,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 303,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 304,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 305,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 306,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 307,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 308,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 309,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 310,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 311,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 312,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 313,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 314,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 315,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 316,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 317,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 318,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 319,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 320,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 321,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 322,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 323,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 324,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 325,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 326,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 327,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 328,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 329,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 330,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 331,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 332,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 333,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 334,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 335,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 336,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 337,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 338,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 339,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "male",
                "x": 2,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 340,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "NA",
                "x": 3,
                "y": 45.625
              },
              {
                "gemini_id": 341,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "NA",
                "x": 3,
                "y": 45.625
              },
              {
                "gemini_id": 342,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "NA",
                "x": 3,
                "y": 45.625
              },
              {
                "gemini_id": 343,
                "species": "Gentoo",
                "island": "Biscoe",
                "sex": "NA",
                "x": 3,
                "y": 45.625
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "island",
              "type": "ordinal",
              "title": "island"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 2, 3],
                  "labelExpr": "round(datum.label) == 1 ? 'female' : round(datum.label) == 2 ? 'male' : 'NA'"
                },
                "title": "sex",
                "scale": {
                  "domain": [0.5, 3.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              },
              "color": {
                "field": "sex",
                "type": "nominal",
                "legend": {
                  "values": ["female", "male", "NA"]
                }
              }
            }
          }
        }
      ] 

---

    Code
      spec$x$spec
    Output
      [
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Initial data"
          },
          "data": {
            "values": [
              {
                "n": 344
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "axis": null
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by species"
          },
          "data": {
            "values": [
              {
                "species": "Adelie",
                "n": 152
              },
              {
                "species": "Chinstrap",
                "n": 68
              },
              {
                "species": "Gentoo",
                "n": 124
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            }
          },
          "spec": {
            "height": 300,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by species, island"
          },
          "data": {
            "values": [
              {
                "species": "Adelie",
                "island": "Biscoe",
                "n": 44
              },
              {
                "species": "Adelie",
                "island": "Dream",
                "n": 56
              },
              {
                "species": "Adelie",
                "island": "Torgersen",
                "n": 52
              },
              {
                "species": "Chinstrap",
                "island": "Dream",
                "n": 68
              },
              {
                "species": "Gentoo",
                "island": "Biscoe",
                "n": 124
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "island",
              "type": "ordinal",
              "title": "island"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "jitter",
            "axes": true,
            "description": "Plot bill_length_mm within each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 2,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 3,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 4,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 5,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 6,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 35.3
              },
              {
                "gemini_id": 7,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 8,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 9,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 10,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 11,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 12,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 40.1
              },
              {
                "gemini_id": 13,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 14,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 15,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 34.5
              },
              {
                "gemini_id": 16,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 41.4
              },
              {
                "gemini_id": 17,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 18,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 19,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 20,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 21,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 22,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 23,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 24,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 25,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 26,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 41.6
              },
              {
                "gemini_id": 27,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 28,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 29,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 30,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 41
              },
              {
                "gemini_id": 31,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 32,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 33,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 34,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 35,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 36,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 37,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 38,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 39,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 40,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 41,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 42,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 43,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 44,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 45,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 46,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 37.2
              },
              {
                "gemini_id": 47,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 48,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 49,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 50,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 51,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 52,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 53,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 54,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 39.8
              },
              {
                "gemini_id": 55,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 56,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 40.8
              },
              {
                "gemini_id": 57,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 58,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 44.1
              },
              {
                "gemini_id": 59,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 60,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 61,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 62,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 37.5
              },
              {
                "gemini_id": 63,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 64,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 42.3
              },
              {
                "gemini_id": 65,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 66,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 67,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36.3
              },
              {
                "gemini_id": 68,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36.9
              },
              {
                "gemini_id": 69,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.3
              },
              {
                "gemini_id": 70,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 71,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 72,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 73,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 34
              },
              {
                "gemini_id": 74,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 75,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 76,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 40.8
              },
              {
                "gemini_id": 77,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 78,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 40.3
              },
              {
                "gemini_id": 79,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 33.1
              },
              {
                "gemini_id": 80,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 81,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36.8
              },
              {
                "gemini_id": 82,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 37.5
              },
              {
                "gemini_id": 83,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 84,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 85,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 35.6
              },
              {
                "gemini_id": 86,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 87,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 88,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 89,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 90,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 91,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 32.1
              },
              {
                "gemini_id": 92,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 40.7
              },
              {
                "gemini_id": 93,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 94,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 95,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 96,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 97,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 98,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 99,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 100,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 41.5
              },
              {
                "gemini_id": 101,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 39.1
              },
              {
                "gemini_id": 102,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 103,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 40.3
              },
              {
                "gemini_id": 105,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 106,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 39.3
              },
              {
                "gemini_id": 107,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 108,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 109,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 34.1
              },
              {
                "gemini_id": 110,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 111,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 112,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 113,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 114,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 115,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 34.6
              },
              {
                "gemini_id": 116,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 117,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.7
              },
              {
                "gemini_id": 118,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 119,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 34.4
              },
              {
                "gemini_id": 120,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 46
              },
              {
                "gemini_id": 121,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 122,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 41.8
              },
              {
                "gemini_id": 123,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 33.5
              },
              {
                "gemini_id": 124,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 125,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 126,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 127,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 128,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 129,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 130,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 37.2
              },
              {
                "gemini_id": 131,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 132,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 42.1
              },
              {
                "gemini_id": 133,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 34.6
              },
              {
                "gemini_id": 134,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 135,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 136,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 35.1
              },
              {
                "gemini_id": 137,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 138,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 139,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 140,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 141,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 142,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 143,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 144,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 41.4
              },
              {
                "gemini_id": 145,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 35.2
              },
              {
                "gemini_id": 146,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 147,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 148,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 41.5
              },
              {
                "gemini_id": 149,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 150,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 44.1
              },
              {
                "gemini_id": 151,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.5
              },
              {
                "gemini_id": 152,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 43.1
              },
              {
                "gemini_id": 153,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 154,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 155,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 156,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 157,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 52.7
              },
              {
                "gemini_id": 158,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 159,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 160,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 161,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46
              },
              {
                "gemini_id": 162,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 163,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 164,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 51.7
              },
              {
                "gemini_id": 165,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 47
              },
              {
                "gemini_id": 166,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 167,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 45.9
              },
              {
                "gemini_id": 168,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 169,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.3
              },
              {
                "gemini_id": 170,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 58
              },
              {
                "gemini_id": 171,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 172,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 49.2
              },
              {
                "gemini_id": 173,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 42.4
              },
              {
                "gemini_id": 174,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 175,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 176,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.6
              },
              {
                "gemini_id": 177,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 178,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 179,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 180,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 181,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 182,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 52.8
              },
              {
                "gemini_id": 183,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 184,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 54.2
              },
              {
                "gemini_id": 185,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 186,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 51
              },
              {
                "gemini_id": 187,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 49.7
              },
              {
                "gemini_id": 188,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 189,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 190,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 191,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 192,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 53.5
              },
              {
                "gemini_id": 193,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 194,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 195,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.9
              },
              {
                "gemini_id": 196,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 197,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.9
              },
              {
                "gemini_id": 198,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 199,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 200,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 201,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 51.5
              },
              {
                "gemini_id": 202,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 203,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 204,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 51.4
              },
              {
                "gemini_id": 205,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 206,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.7
              },
              {
                "gemini_id": 207,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 208,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 52.2
              },
              {
                "gemini_id": 209,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 210,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 49.3
              },
              {
                "gemini_id": 211,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 212,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 213,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 51.9
              },
              {
                "gemini_id": 214,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 215,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 216,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 55.8
              },
              {
                "gemini_id": 217,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 218,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 219,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 220,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 221,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 222,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 223,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 224,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 225,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 226,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 227,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 228,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 229,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 230,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 231,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 232,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 233,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 234,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 235,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 236,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.3
              },
              {
                "gemini_id": 237,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 238,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.2
              },
              {
                "gemini_id": 239,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 240,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 241,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 242,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 243,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 244,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.3
              },
              {
                "gemini_id": 245,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 246,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 247,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 248,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.8
              },
              {
                "gemini_id": 249,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 250,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 251,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 252,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 253,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 254,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 59.6
              },
              {
                "gemini_id": 255,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 256,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 257,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 42.6
              },
              {
                "gemini_id": 258,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 44.4
              },
              {
                "gemini_id": 259,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 44
              },
              {
                "gemini_id": 260,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 261,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 262,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 263,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 264,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 265,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 266,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 43.6
              },
              {
                "gemini_id": 267,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 268,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 269,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 270,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 271,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 272,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 273,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 274,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 275,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 276,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45
              },
              {
                "gemini_id": 277,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 43.8
              },
              {
                "gemini_id": 278,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 279,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 280,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 281,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 282,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 283,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 284,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 54.3
              },
              {
                "gemini_id": 285,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 286,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 287,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 288,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 289,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 290,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.7
              },
              {
                "gemini_id": 291,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.7
              },
              {
                "gemini_id": 292,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 293,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 294,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 295,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 296,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.6
              },
              {
                "gemini_id": 297,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 298,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 299,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 300,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 301,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 302,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 52.5
              },
              {
                "gemini_id": 303,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.4
              },
              {
                "gemini_id": 304,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 305,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 306,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 307,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 43.4
              },
              {
                "gemini_id": 308,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 309,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 310,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 52.1
              },
              {
                "gemini_id": 311,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 312,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 52.2
              },
              {
                "gemini_id": 313,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 314,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 315,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 316,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 317,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4
              },
              {
                "gemini_id": 318,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 319,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 320,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 321,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 322,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 55.9
              },
              {
                "gemini_id": 323,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 324,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 325,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 326,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 327,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 41.7
              },
              {
                "gemini_id": 328,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 53.4
              },
              {
                "gemini_id": 329,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 330,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 331,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 332,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 333,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 334,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 51.5
              },
              {
                "gemini_id": 335,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 336,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 55.1
              },
              {
                "gemini_id": 337,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 338,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 48.8
              },
              {
                "gemini_id": 339,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 341,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 342,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 343,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 344,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 49.9
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "island",
              "type": "ordinal",
              "title": "island"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "axes": true,
            "description": "Plot mean bill_length_mm of each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 2,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 3,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 4,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 5,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 6,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 7,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 8,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 9,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 10,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 11,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 12,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 13,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 14,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 15,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 16,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 17,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 18,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 19,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 20,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 21,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 22,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 23,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 24,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 25,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 26,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 27,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 28,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 29,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 30,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 31,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 32,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 33,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 34,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 35,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 36,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 37,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 38,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 39,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 40,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 41,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 42,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 43,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 44,
                "species": "Adelie",
                "island": "Biscoe",
                "x": 1,
                "y": 38.975
              },
              {
                "gemini_id": 45,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 46,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 47,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 48,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 49,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 50,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 51,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 52,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 53,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 54,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 55,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 56,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 57,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 58,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 59,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 60,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 61,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 62,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 63,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 64,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 65,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 66,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 67,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 68,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 69,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 70,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 71,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 72,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 73,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 74,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 75,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 76,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 77,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 78,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 79,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 80,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 81,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 82,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 83,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 84,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 85,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 86,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 87,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 88,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 89,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 90,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 91,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 92,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 93,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 94,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 95,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 96,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 97,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 98,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 99,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 100,
                "species": "Adelie",
                "island": "Dream",
                "x": 1,
                "y": 38.5017857142857
              },
              {
                "gemini_id": 101,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 102,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 103,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 105,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 106,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 107,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 108,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 109,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 110,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 111,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 112,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 113,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 114,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 115,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 116,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 117,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 118,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 119,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 120,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 121,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 122,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 123,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 124,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 125,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 126,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 127,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 128,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 129,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 130,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 131,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 132,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 133,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 134,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 135,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 136,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 137,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 138,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 139,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 140,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 141,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 142,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 143,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 144,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 145,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 146,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 147,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 148,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 149,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 150,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 151,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 152,
                "species": "Adelie",
                "island": "Torgersen",
                "x": 1,
                "y": 38.9509803921569
              },
              {
                "gemini_id": 153,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 154,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 155,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 156,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 157,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 158,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 159,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 160,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 161,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 162,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 163,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 164,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 165,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 166,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 167,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 168,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 169,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 170,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 171,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 172,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 173,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 174,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 175,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 176,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 177,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 178,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 179,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 180,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 181,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 182,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 183,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 184,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 185,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 186,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 187,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 188,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 189,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 190,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 191,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 192,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 193,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 194,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 195,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 196,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 197,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 198,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 199,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 200,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 201,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 202,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 203,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 204,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 205,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 206,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 207,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 208,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 209,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 210,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 211,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 212,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 213,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 214,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 215,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 216,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 217,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 218,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 219,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 220,
                "species": "Chinstrap",
                "island": "Dream",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 221,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 222,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 223,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 224,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 225,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 226,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 227,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 228,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 229,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 230,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 231,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 232,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 233,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 234,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 235,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 236,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 237,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 238,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 239,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 240,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 241,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 242,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 243,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 244,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 245,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 246,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 247,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 248,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 249,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 250,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 251,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 252,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 253,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 254,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 255,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 256,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 257,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 258,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 259,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 260,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 261,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 262,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 263,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 264,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 265,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 266,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 267,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 268,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 269,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 270,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 271,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 272,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 273,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 274,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 275,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 276,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 277,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 278,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 279,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 280,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 281,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 282,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 283,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 284,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 285,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 286,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 287,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 288,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 289,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 290,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 291,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 292,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 293,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 294,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 295,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 296,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 297,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 298,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 299,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 300,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 301,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 302,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 303,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 304,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 305,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 306,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 307,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 308,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 309,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 310,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 311,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 312,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 313,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 314,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 315,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 316,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 317,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 318,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 319,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 320,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 321,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 322,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 323,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 324,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 325,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 326,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 327,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 328,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 329,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 330,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 331,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 332,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 333,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 334,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 335,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 336,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 337,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 338,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 339,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 341,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 342,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 343,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 344,
                "species": "Gentoo",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5048780487805
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "island",
              "type": "ordinal",
              "title": "island"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              }
            }
          }
        }
      ] 

---

    Code
      spec$x$spec
    Output
      [
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Initial data"
          },
          "data": {
            "values": [
              {
                "n": 344
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "axis": null
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by species"
          },
          "data": {
            "values": [
              {
                "species": "Adelie",
                "n": 152
              },
              {
                "species": "Chinstrap",
                "n": 68
              },
              {
                "species": "Gentoo",
                "n": 124
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            }
          },
          "spec": {
            "height": 300,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "jitter",
            "axes": true,
            "description": "Plot bill_length_mm within each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "species": "Adelie",
                "x": 1,
                "y": 39.1
              },
              {
                "gemini_id": 2,
                "species": "Adelie",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 3,
                "species": "Adelie",
                "x": 1,
                "y": 40.3
              },
              {
                "gemini_id": 5,
                "species": "Adelie",
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 6,
                "species": "Adelie",
                "x": 1,
                "y": 39.3
              },
              {
                "gemini_id": 7,
                "species": "Adelie",
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 8,
                "species": "Adelie",
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 9,
                "species": "Adelie",
                "x": 1,
                "y": 34.1
              },
              {
                "gemini_id": 10,
                "species": "Adelie",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 11,
                "species": "Adelie",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 12,
                "species": "Adelie",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 13,
                "species": "Adelie",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 14,
                "species": "Adelie",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 15,
                "species": "Adelie",
                "x": 1,
                "y": 34.6
              },
              {
                "gemini_id": 16,
                "species": "Adelie",
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 17,
                "species": "Adelie",
                "x": 1,
                "y": 38.7
              },
              {
                "gemini_id": 18,
                "species": "Adelie",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 19,
                "species": "Adelie",
                "x": 1,
                "y": 34.4
              },
              {
                "gemini_id": 20,
                "species": "Adelie",
                "x": 1,
                "y": 46
              },
              {
                "gemini_id": 21,
                "species": "Adelie",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 22,
                "species": "Adelie",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 23,
                "species": "Adelie",
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 24,
                "species": "Adelie",
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 25,
                "species": "Adelie",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 26,
                "species": "Adelie",
                "x": 1,
                "y": 35.3
              },
              {
                "gemini_id": 27,
                "species": "Adelie",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 28,
                "species": "Adelie",
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 29,
                "species": "Adelie",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 30,
                "species": "Adelie",
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 31,
                "species": "Adelie",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 32,
                "species": "Adelie",
                "x": 1,
                "y": 37.2
              },
              {
                "gemini_id": 33,
                "species": "Adelie",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 34,
                "species": "Adelie",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 35,
                "species": "Adelie",
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 36,
                "species": "Adelie",
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 37,
                "species": "Adelie",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 38,
                "species": "Adelie",
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 39,
                "species": "Adelie",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 40,
                "species": "Adelie",
                "x": 1,
                "y": 39.8
              },
              {
                "gemini_id": 41,
                "species": "Adelie",
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 42,
                "species": "Adelie",
                "x": 1,
                "y": 40.8
              },
              {
                "gemini_id": 43,
                "species": "Adelie",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 44,
                "species": "Adelie",
                "x": 1,
                "y": 44.1
              },
              {
                "gemini_id": 45,
                "species": "Adelie",
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 46,
                "species": "Adelie",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 47,
                "species": "Adelie",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 48,
                "species": "Adelie",
                "x": 1,
                "y": 37.5
              },
              {
                "gemini_id": 49,
                "species": "Adelie",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 50,
                "species": "Adelie",
                "x": 1,
                "y": 42.3
              },
              {
                "gemini_id": 51,
                "species": "Adelie",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 52,
                "species": "Adelie",
                "x": 1,
                "y": 40.1
              },
              {
                "gemini_id": 53,
                "species": "Adelie",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 54,
                "species": "Adelie",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 55,
                "species": "Adelie",
                "x": 1,
                "y": 34.5
              },
              {
                "gemini_id": 56,
                "species": "Adelie",
                "x": 1,
                "y": 41.4
              },
              {
                "gemini_id": 57,
                "species": "Adelie",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 58,
                "species": "Adelie",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 59,
                "species": "Adelie",
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 60,
                "species": "Adelie",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 61,
                "species": "Adelie",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 62,
                "species": "Adelie",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 63,
                "species": "Adelie",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 64,
                "species": "Adelie",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 65,
                "species": "Adelie",
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 66,
                "species": "Adelie",
                "x": 1,
                "y": 41.6
              },
              {
                "gemini_id": 67,
                "species": "Adelie",
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 68,
                "species": "Adelie",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 69,
                "species": "Adelie",
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 70,
                "species": "Adelie",
                "x": 1,
                "y": 41.8
              },
              {
                "gemini_id": 71,
                "species": "Adelie",
                "x": 1,
                "y": 33.5
              },
              {
                "gemini_id": 72,
                "species": "Adelie",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 73,
                "species": "Adelie",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 74,
                "species": "Adelie",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 75,
                "species": "Adelie",
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 76,
                "species": "Adelie",
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 77,
                "species": "Adelie",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 78,
                "species": "Adelie",
                "x": 1,
                "y": 37.2
              },
              {
                "gemini_id": 79,
                "species": "Adelie",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 80,
                "species": "Adelie",
                "x": 1,
                "y": 42.1
              },
              {
                "gemini_id": 81,
                "species": "Adelie",
                "x": 1,
                "y": 34.6
              },
              {
                "gemini_id": 82,
                "species": "Adelie",
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 83,
                "species": "Adelie",
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 84,
                "species": "Adelie",
                "x": 1,
                "y": 35.1
              },
              {
                "gemini_id": 85,
                "species": "Adelie",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 86,
                "species": "Adelie",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 87,
                "species": "Adelie",
                "x": 1,
                "y": 36.3
              },
              {
                "gemini_id": 88,
                "species": "Adelie",
                "x": 1,
                "y": 36.9
              },
              {
                "gemini_id": 89,
                "species": "Adelie",
                "x": 1,
                "y": 38.3
              },
              {
                "gemini_id": 90,
                "species": "Adelie",
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 91,
                "species": "Adelie",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 92,
                "species": "Adelie",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 93,
                "species": "Adelie",
                "x": 1,
                "y": 34
              },
              {
                "gemini_id": 94,
                "species": "Adelie",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 95,
                "species": "Adelie",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 96,
                "species": "Adelie",
                "x": 1,
                "y": 40.8
              },
              {
                "gemini_id": 97,
                "species": "Adelie",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 98,
                "species": "Adelie",
                "x": 1,
                "y": 40.3
              },
              {
                "gemini_id": 99,
                "species": "Adelie",
                "x": 1,
                "y": 33.1
              },
              {
                "gemini_id": 100,
                "species": "Adelie",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 101,
                "species": "Adelie",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 102,
                "species": "Adelie",
                "x": 1,
                "y": 41
              },
              {
                "gemini_id": 103,
                "species": "Adelie",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 104,
                "species": "Adelie",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 105,
                "species": "Adelie",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 106,
                "species": "Adelie",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 107,
                "species": "Adelie",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 108,
                "species": "Adelie",
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 109,
                "species": "Adelie",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 110,
                "species": "Adelie",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 111,
                "species": "Adelie",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 112,
                "species": "Adelie",
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 113,
                "species": "Adelie",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 114,
                "species": "Adelie",
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 115,
                "species": "Adelie",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 116,
                "species": "Adelie",
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 117,
                "species": "Adelie",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 118,
                "species": "Adelie",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 119,
                "species": "Adelie",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 120,
                "species": "Adelie",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 121,
                "species": "Adelie",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 122,
                "species": "Adelie",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 123,
                "species": "Adelie",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 124,
                "species": "Adelie",
                "x": 1,
                "y": 41.4
              },
              {
                "gemini_id": 125,
                "species": "Adelie",
                "x": 1,
                "y": 35.2
              },
              {
                "gemini_id": 126,
                "species": "Adelie",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 127,
                "species": "Adelie",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 128,
                "species": "Adelie",
                "x": 1,
                "y": 41.5
              },
              {
                "gemini_id": 129,
                "species": "Adelie",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 130,
                "species": "Adelie",
                "x": 1,
                "y": 44.1
              },
              {
                "gemini_id": 131,
                "species": "Adelie",
                "x": 1,
                "y": 38.5
              },
              {
                "gemini_id": 132,
                "species": "Adelie",
                "x": 1,
                "y": 43.1
              },
              {
                "gemini_id": 133,
                "species": "Adelie",
                "x": 1,
                "y": 36.8
              },
              {
                "gemini_id": 134,
                "species": "Adelie",
                "x": 1,
                "y": 37.5
              },
              {
                "gemini_id": 135,
                "species": "Adelie",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 136,
                "species": "Adelie",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 137,
                "species": "Adelie",
                "x": 1,
                "y": 35.6
              },
              {
                "gemini_id": 138,
                "species": "Adelie",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 139,
                "species": "Adelie",
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 140,
                "species": "Adelie",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 141,
                "species": "Adelie",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 142,
                "species": "Adelie",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 143,
                "species": "Adelie",
                "x": 1,
                "y": 32.1
              },
              {
                "gemini_id": 144,
                "species": "Adelie",
                "x": 1,
                "y": 40.7
              },
              {
                "gemini_id": 145,
                "species": "Adelie",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 146,
                "species": "Adelie",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 147,
                "species": "Adelie",
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 148,
                "species": "Adelie",
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 149,
                "species": "Adelie",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 150,
                "species": "Adelie",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 151,
                "species": "Adelie",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 152,
                "species": "Adelie",
                "x": 1,
                "y": 41.5
              },
              {
                "gemini_id": 153,
                "species": "Chinstrap",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 154,
                "species": "Chinstrap",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 155,
                "species": "Chinstrap",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 156,
                "species": "Chinstrap",
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 157,
                "species": "Chinstrap",
                "x": 1,
                "y": 52.7
              },
              {
                "gemini_id": 158,
                "species": "Chinstrap",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 159,
                "species": "Chinstrap",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 160,
                "species": "Chinstrap",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 161,
                "species": "Chinstrap",
                "x": 1,
                "y": 46
              },
              {
                "gemini_id": 162,
                "species": "Chinstrap",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 163,
                "species": "Chinstrap",
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 164,
                "species": "Chinstrap",
                "x": 1,
                "y": 51.7
              },
              {
                "gemini_id": 165,
                "species": "Chinstrap",
                "x": 1,
                "y": 47
              },
              {
                "gemini_id": 166,
                "species": "Chinstrap",
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 167,
                "species": "Chinstrap",
                "x": 1,
                "y": 45.9
              },
              {
                "gemini_id": 168,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 169,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.3
              },
              {
                "gemini_id": 170,
                "species": "Chinstrap",
                "x": 1,
                "y": 58
              },
              {
                "gemini_id": 171,
                "species": "Chinstrap",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 172,
                "species": "Chinstrap",
                "x": 1,
                "y": 49.2
              },
              {
                "gemini_id": 173,
                "species": "Chinstrap",
                "x": 1,
                "y": 42.4
              },
              {
                "gemini_id": 174,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 175,
                "species": "Chinstrap",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 176,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.6
              },
              {
                "gemini_id": 177,
                "species": "Chinstrap",
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 178,
                "species": "Chinstrap",
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 179,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 180,
                "species": "Chinstrap",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 181,
                "species": "Chinstrap",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 182,
                "species": "Chinstrap",
                "x": 1,
                "y": 52.8
              },
              {
                "gemini_id": 183,
                "species": "Chinstrap",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 184,
                "species": "Chinstrap",
                "x": 1,
                "y": 54.2
              },
              {
                "gemini_id": 185,
                "species": "Chinstrap",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 186,
                "species": "Chinstrap",
                "x": 1,
                "y": 51
              },
              {
                "gemini_id": 187,
                "species": "Chinstrap",
                "x": 1,
                "y": 49.7
              },
              {
                "gemini_id": 188,
                "species": "Chinstrap",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 189,
                "species": "Chinstrap",
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 190,
                "species": "Chinstrap",
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 191,
                "species": "Chinstrap",
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 192,
                "species": "Chinstrap",
                "x": 1,
                "y": 53.5
              },
              {
                "gemini_id": 193,
                "species": "Chinstrap",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 194,
                "species": "Chinstrap",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 195,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.9
              },
              {
                "gemini_id": 196,
                "species": "Chinstrap",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 197,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.9
              },
              {
                "gemini_id": 198,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 199,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 200,
                "species": "Chinstrap",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 201,
                "species": "Chinstrap",
                "x": 1,
                "y": 51.5
              },
              {
                "gemini_id": 202,
                "species": "Chinstrap",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 203,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 204,
                "species": "Chinstrap",
                "x": 1,
                "y": 51.4
              },
              {
                "gemini_id": 205,
                "species": "Chinstrap",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 206,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.7
              },
              {
                "gemini_id": 207,
                "species": "Chinstrap",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 208,
                "species": "Chinstrap",
                "x": 1,
                "y": 52.2
              },
              {
                "gemini_id": 209,
                "species": "Chinstrap",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 210,
                "species": "Chinstrap",
                "x": 1,
                "y": 49.3
              },
              {
                "gemini_id": 211,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 212,
                "species": "Chinstrap",
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 213,
                "species": "Chinstrap",
                "x": 1,
                "y": 51.9
              },
              {
                "gemini_id": 214,
                "species": "Chinstrap",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 215,
                "species": "Chinstrap",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 216,
                "species": "Chinstrap",
                "x": 1,
                "y": 55.8
              },
              {
                "gemini_id": 217,
                "species": "Chinstrap",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 218,
                "species": "Chinstrap",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 219,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 220,
                "species": "Chinstrap",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 221,
                "species": "Gentoo",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 222,
                "species": "Gentoo",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 223,
                "species": "Gentoo",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 224,
                "species": "Gentoo",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 225,
                "species": "Gentoo",
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 226,
                "species": "Gentoo",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 227,
                "species": "Gentoo",
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 228,
                "species": "Gentoo",
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 229,
                "species": "Gentoo",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 230,
                "species": "Gentoo",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 231,
                "species": "Gentoo",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 232,
                "species": "Gentoo",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 233,
                "species": "Gentoo",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 234,
                "species": "Gentoo",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 235,
                "species": "Gentoo",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 236,
                "species": "Gentoo",
                "x": 1,
                "y": 49.3
              },
              {
                "gemini_id": 237,
                "species": "Gentoo",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 238,
                "species": "Gentoo",
                "x": 1,
                "y": 49.2
              },
              {
                "gemini_id": 239,
                "species": "Gentoo",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 240,
                "species": "Gentoo",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 241,
                "species": "Gentoo",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 242,
                "species": "Gentoo",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 243,
                "species": "Gentoo",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 244,
                "species": "Gentoo",
                "x": 1,
                "y": 46.3
              },
              {
                "gemini_id": 245,
                "species": "Gentoo",
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 246,
                "species": "Gentoo",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 247,
                "species": "Gentoo",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 248,
                "species": "Gentoo",
                "x": 1,
                "y": 47.8
              },
              {
                "gemini_id": 249,
                "species": "Gentoo",
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 250,
                "species": "Gentoo",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 251,
                "species": "Gentoo",
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 252,
                "species": "Gentoo",
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 253,
                "species": "Gentoo",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 254,
                "species": "Gentoo",
                "x": 1,
                "y": 59.6
              },
              {
                "gemini_id": 255,
                "species": "Gentoo",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 256,
                "species": "Gentoo",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 257,
                "species": "Gentoo",
                "x": 1,
                "y": 42.6
              },
              {
                "gemini_id": 258,
                "species": "Gentoo",
                "x": 1,
                "y": 44.4
              },
              {
                "gemini_id": 259,
                "species": "Gentoo",
                "x": 1,
                "y": 44
              },
              {
                "gemini_id": 260,
                "species": "Gentoo",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 261,
                "species": "Gentoo",
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 262,
                "species": "Gentoo",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 263,
                "species": "Gentoo",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 264,
                "species": "Gentoo",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 265,
                "species": "Gentoo",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 266,
                "species": "Gentoo",
                "x": 1,
                "y": 43.6
              },
              {
                "gemini_id": 267,
                "species": "Gentoo",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 268,
                "species": "Gentoo",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 269,
                "species": "Gentoo",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 270,
                "species": "Gentoo",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 271,
                "species": "Gentoo",
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 272,
                "species": "Gentoo",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 273,
                "species": "Gentoo",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 274,
                "species": "Gentoo",
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 275,
                "species": "Gentoo",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 276,
                "species": "Gentoo",
                "x": 1,
                "y": 45
              },
              {
                "gemini_id": 277,
                "species": "Gentoo",
                "x": 1,
                "y": 43.8
              },
              {
                "gemini_id": 278,
                "species": "Gentoo",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 279,
                "species": "Gentoo",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 280,
                "species": "Gentoo",
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 281,
                "species": "Gentoo",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 282,
                "species": "Gentoo",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 283,
                "species": "Gentoo",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 284,
                "species": "Gentoo",
                "x": 1,
                "y": 54.3
              },
              {
                "gemini_id": 285,
                "species": "Gentoo",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 286,
                "species": "Gentoo",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 287,
                "species": "Gentoo",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 288,
                "species": "Gentoo",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 289,
                "species": "Gentoo",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 290,
                "species": "Gentoo",
                "x": 1,
                "y": 50.7
              },
              {
                "gemini_id": 291,
                "species": "Gentoo",
                "x": 1,
                "y": 47.7
              },
              {
                "gemini_id": 292,
                "species": "Gentoo",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 293,
                "species": "Gentoo",
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 294,
                "species": "Gentoo",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 295,
                "species": "Gentoo",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 296,
                "species": "Gentoo",
                "x": 1,
                "y": 48.6
              },
              {
                "gemini_id": 297,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 298,
                "species": "Gentoo",
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 299,
                "species": "Gentoo",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 300,
                "species": "Gentoo",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 301,
                "species": "Gentoo",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 302,
                "species": "Gentoo",
                "x": 1,
                "y": 52.5
              },
              {
                "gemini_id": 303,
                "species": "Gentoo",
                "x": 1,
                "y": 47.4
              },
              {
                "gemini_id": 304,
                "species": "Gentoo",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 305,
                "species": "Gentoo",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 306,
                "species": "Gentoo",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 307,
                "species": "Gentoo",
                "x": 1,
                "y": 43.4
              },
              {
                "gemini_id": 308,
                "species": "Gentoo",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 309,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 310,
                "species": "Gentoo",
                "x": 1,
                "y": 52.1
              },
              {
                "gemini_id": 311,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 312,
                "species": "Gentoo",
                "x": 1,
                "y": 52.2
              },
              {
                "gemini_id": 313,
                "species": "Gentoo",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 314,
                "species": "Gentoo",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 315,
                "species": "Gentoo",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 316,
                "species": "Gentoo",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 317,
                "species": "Gentoo",
                "x": 1,
                "y": 49.4
              },
              {
                "gemini_id": 318,
                "species": "Gentoo",
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 319,
                "species": "Gentoo",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 320,
                "species": "Gentoo",
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 321,
                "species": "Gentoo",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 322,
                "species": "Gentoo",
                "x": 1,
                "y": 55.9
              },
              {
                "gemini_id": 323,
                "species": "Gentoo",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 324,
                "species": "Gentoo",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 325,
                "species": "Gentoo",
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 326,
                "species": "Gentoo",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 327,
                "species": "Gentoo",
                "x": 1,
                "y": 41.7
              },
              {
                "gemini_id": 328,
                "species": "Gentoo",
                "x": 1,
                "y": 53.4
              },
              {
                "gemini_id": 329,
                "species": "Gentoo",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 330,
                "species": "Gentoo",
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 331,
                "species": "Gentoo",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 332,
                "species": "Gentoo",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 333,
                "species": "Gentoo",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 334,
                "species": "Gentoo",
                "x": 1,
                "y": 51.5
              },
              {
                "gemini_id": 335,
                "species": "Gentoo",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 336,
                "species": "Gentoo",
                "x": 1,
                "y": 55.1
              },
              {
                "gemini_id": 337,
                "species": "Gentoo",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 338,
                "species": "Gentoo",
                "x": 1,
                "y": 48.8
              },
              {
                "gemini_id": 339,
                "species": "Gentoo",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 341,
                "species": "Gentoo",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 342,
                "species": "Gentoo",
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 343,
                "species": "Gentoo",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 344,
                "species": "Gentoo",
                "x": 1,
                "y": 49.9
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            }
          },
          "spec": {
            "height": 300,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "axes": true,
            "description": "Plot mean bill_length_mm of each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 2,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 3,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 5,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 6,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 7,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 8,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 9,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 10,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 11,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 12,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 13,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 14,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 15,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 16,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 17,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 18,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 19,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 20,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 21,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 22,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 23,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 24,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 25,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 26,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 27,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 28,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 29,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 30,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 31,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 32,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 33,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 34,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 35,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 36,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 37,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 38,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 39,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 40,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 41,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 42,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 43,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 44,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 45,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 46,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 47,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 48,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 49,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 50,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 51,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 52,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 53,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 54,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 55,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 56,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 57,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 58,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 59,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 60,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 61,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 62,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 63,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 64,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 65,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 66,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 67,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 68,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 69,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 70,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 71,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 72,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 73,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 74,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 75,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 76,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 77,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 78,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 79,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 80,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 81,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 82,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 83,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 84,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 85,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 86,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 87,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 88,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 89,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 90,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 91,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 92,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 93,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 94,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 95,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 96,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 97,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 98,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 99,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 100,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 101,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 102,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 103,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 104,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 105,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 106,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 107,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 108,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 109,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 110,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 111,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 112,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 113,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 114,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 115,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 116,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 117,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 118,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 119,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 120,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 121,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 122,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 123,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 124,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 125,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 126,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 127,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 128,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 129,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 130,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 131,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 132,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 133,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 134,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 135,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 136,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 137,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 138,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 139,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 140,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 141,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 142,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 143,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 144,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 145,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 146,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 147,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 148,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 149,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 150,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 151,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 152,
                "species": "Adelie",
                "x": 1,
                "y": 38.7913907284768
              },
              {
                "gemini_id": 153,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 154,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 155,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 156,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 157,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 158,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 159,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 160,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 161,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 162,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 163,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 164,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 165,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 166,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 167,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 168,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 169,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 170,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 171,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 172,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 173,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 174,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 175,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 176,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 177,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 178,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 179,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 180,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 181,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 182,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 183,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 184,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 185,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 186,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 187,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 188,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 189,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 190,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 191,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 192,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 193,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 194,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 195,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 196,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 197,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 198,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 199,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 200,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 201,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 202,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 203,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 204,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 205,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 206,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 207,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 208,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 209,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 210,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 211,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 212,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 213,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 214,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 215,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 216,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 217,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 218,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 219,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 220,
                "species": "Chinstrap",
                "x": 1,
                "y": 48.8338235294118
              },
              {
                "gemini_id": 221,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 222,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 223,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 224,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 225,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 226,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 227,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 228,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 229,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 230,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 231,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 232,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 233,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 234,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 235,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 236,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 237,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 238,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 239,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 240,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 241,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 242,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 243,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 244,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 245,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 246,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 247,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 248,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 249,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 250,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 251,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 252,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 253,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 254,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 255,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 256,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 257,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 258,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 259,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 260,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 261,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 262,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 263,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 264,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 265,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 266,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 267,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 268,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 269,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 270,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 271,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 272,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 273,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 274,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 275,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 276,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 277,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 278,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 279,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 280,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 281,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 282,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 283,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 284,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 285,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 286,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 287,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 288,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 289,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 290,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 291,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 292,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 293,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 294,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 295,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 296,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 297,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 298,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 299,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 300,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 301,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 302,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 303,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 304,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 305,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 306,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 307,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 308,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 309,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 310,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 311,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 312,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 313,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 314,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 315,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 316,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 317,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 318,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 319,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 320,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 321,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 322,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 323,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 324,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 325,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 326,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 327,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 328,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 329,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 330,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 331,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 332,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 333,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 334,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 335,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 336,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 337,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 338,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 339,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 341,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 342,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 343,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              },
              {
                "gemini_id": 344,
                "species": "Gentoo",
                "x": 1,
                "y": 47.5048780487805
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            }
          },
          "spec": {
            "height": 300,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              }
            }
          }
        }
      ] 

---

    Code
      spec$x$spec
    Output
      [
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Initial data"
          },
          "data": {
            "values": [
              {
                "n": 344
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "axis": null
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by species"
          },
          "data": {
            "values": [
              {
                "species": "Adelie",
                "n": 152
              },
              {
                "species": "Chinstrap",
                "n": 68
              },
              {
                "species": "Gentoo",
                "n": 124
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            }
          },
          "spec": {
            "height": 300,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by species, sex"
          },
          "data": {
            "values": [
              {
                "species": "Adelie",
                "sex": "female",
                "n": 73
              },
              {
                "species": "Adelie",
                "sex": "male",
                "n": 73
              },
              {
                "species": "Adelie",
                "sex": "NA",
                "n": 6
              },
              {
                "species": "Chinstrap",
                "sex": "female",
                "n": 34
              },
              {
                "species": "Chinstrap",
                "sex": "male",
                "n": 34
              },
              {
                "species": "Gentoo",
                "sex": "female",
                "n": 58
              },
              {
                "species": "Gentoo",
                "sex": "male",
                "n": 61
              },
              {
                "species": "Gentoo",
                "sex": "NA",
                "n": 5
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "sex",
              "type": "ordinal",
              "title": "sex"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by species, sex, island"
          },
          "data": {
            "values": [
              {
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "n": 22
              },
              {
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "n": 27
              },
              {
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "n": 24
              },
              {
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "n": 22
              },
              {
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "n": 28
              },
              {
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "n": 23
              },
              {
                "species": "Adelie",
                "sex": "NA",
                "island": "Dream",
                "n": 1
              },
              {
                "species": "Adelie",
                "sex": "NA",
                "island": "Torgersen",
                "n": 5
              },
              {
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "n": 34
              },
              {
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "n": 34
              },
              {
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "n": 58
              },
              {
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "n": 61
              },
              {
                "species": "Gentoo",
                "sex": "NA",
                "island": "Biscoe",
                "n": 5
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "sex",
              "type": "ordinal",
              "title": "sex"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              },
              "color": {
                "field": "island",
                "type": "nominal",
                "legend": {
                  "values": ["Biscoe", "Dream", "Torgersen"]
                }
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "jitter",
            "axes": true,
            "description": "Plot bill_length_mm within each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 2,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 3,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 35.3
              },
              {
                "gemini_id": 4,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 5,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 6,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 7,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 8,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 34.5
              },
              {
                "gemini_id": 9,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 10,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 11,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 12,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 13,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 14,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 15,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 16,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 17,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 18,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 19,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 20,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 21,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 22,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 23,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 39.5
              },
              {
                "gemini_id": 24,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 39.5
              },
              {
                "gemini_id": 25,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.4
              },
              {
                "gemini_id": 26,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 42.2
              },
              {
                "gemini_id": 27,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 37.6
              },
              {
                "gemini_id": 28,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.5
              },
              {
                "gemini_id": 29,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36
              },
              {
                "gemini_id": 30,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 37
              },
              {
                "gemini_id": 31,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36
              },
              {
                "gemini_id": 32,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 37.3
              },
              {
                "gemini_id": 33,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9
              },
              {
                "gemini_id": 34,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 38.9
              },
              {
                "gemini_id": 35,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 35.7
              },
              {
                "gemini_id": 36,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 34
              },
              {
                "gemini_id": 37,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.2
              },
              {
                "gemini_id": 38,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 38.1
              },
              {
                "gemini_id": 39,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 33.1
              },
              {
                "gemini_id": 40,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.8
              },
              {
                "gemini_id": 41,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 38.1
              },
              {
                "gemini_id": 42,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 35.6
              },
              {
                "gemini_id": 43,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 37
              },
              {
                "gemini_id": 44,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 40.2
              },
              {
                "gemini_id": 45,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 32.1
              },
              {
                "gemini_id": 46,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 37.3
              },
              {
                "gemini_id": 47,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.6
              },
              {
                "gemini_id": 48,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36
              },
              {
                "gemini_id": 49,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36
              },
              {
                "gemini_id": 50,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 39.5
              },
              {
                "gemini_id": 51,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 40.3
              },
              {
                "gemini_id": 52,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 36.7
              },
              {
                "gemini_id": 53,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 38.9
              },
              {
                "gemini_id": 54,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 41.1
              },
              {
                "gemini_id": 55,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 36.6
              },
              {
                "gemini_id": 56,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 38.7
              },
              {
                "gemini_id": 57,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 34.4
              },
              {
                "gemini_id": 58,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 35.9
              },
              {
                "gemini_id": 59,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 33.5
              },
              {
                "gemini_id": 60,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 39.6
              },
              {
                "gemini_id": 61,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 35.5
              },
              {
                "gemini_id": 62,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 40.9
              },
              {
                "gemini_id": 63,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 36.2
              },
              {
                "gemini_id": 64,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 34.6
              },
              {
                "gemini_id": 65,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 36.7
              },
              {
                "gemini_id": 66,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 38.6
              },
              {
                "gemini_id": 67,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 35.7
              },
              {
                "gemini_id": 68,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 36.2
              },
              {
                "gemini_id": 69,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 40.2
              },
              {
                "gemini_id": 70,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 35.2
              },
              {
                "gemini_id": 71,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 38.8
              },
              {
                "gemini_id": 72,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 39
              },
              {
                "gemini_id": 73,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 38.5
              },
              {
                "gemini_id": 74,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 75,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 76,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 77,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 78,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 79,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.1
              },
              {
                "gemini_id": 80,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 81,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 41.4
              },
              {
                "gemini_id": 82,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 83,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 84,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 85,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 86,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 41.6
              },
              {
                "gemini_id": 87,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 88,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 41
              },
              {
                "gemini_id": 89,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 90,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 91,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 92,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 93,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 94,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 95,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 96,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 37.2
              },
              {
                "gemini_id": 97,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.9
              },
              {
                "gemini_id": 98,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 39.2
              },
              {
                "gemini_id": 99,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 38.8
              },
              {
                "gemini_id": 100,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 39.8
              },
              {
                "gemini_id": 101,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.8
              },
              {
                "gemini_id": 102,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 44.1
              },
              {
                "gemini_id": 103,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 39.6
              },
              {
                "gemini_id": 104,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 41.1
              },
              {
                "gemini_id": 105,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 42.3
              },
              {
                "gemini_id": 106,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 41.3
              },
              {
                "gemini_id": 107,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 36.3
              },
              {
                "gemini_id": 108,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 38.3
              },
              {
                "gemini_id": 109,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 41.1
              },
              {
                "gemini_id": 110,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 39.6
              },
              {
                "gemini_id": 111,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.8
              },
              {
                "gemini_id": 112,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.3
              },
              {
                "gemini_id": 113,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 43.2
              },
              {
                "gemini_id": 114,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 37.5
              },
              {
                "gemini_id": 115,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 41.1
              },
              {
                "gemini_id": 116,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.2
              },
              {
                "gemini_id": 117,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 39.7
              },
              {
                "gemini_id": 118,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.6
              },
              {
                "gemini_id": 119,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.7
              },
              {
                "gemini_id": 120,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 39
              },
              {
                "gemini_id": 121,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 39.2
              },
              {
                "gemini_id": 122,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 37.8
              },
              {
                "gemini_id": 123,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 41.5
              },
              {
                "gemini_id": 124,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 39.1
              },
              {
                "gemini_id": 125,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 39.3
              },
              {
                "gemini_id": 126,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 39.2
              },
              {
                "gemini_id": 127,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 38.6
              },
              {
                "gemini_id": 128,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 34.6
              },
              {
                "gemini_id": 129,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 42.5
              },
              {
                "gemini_id": 130,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 46
              },
              {
                "gemini_id": 131,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 41.8
              },
              {
                "gemini_id": 132,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 39.7
              },
              {
                "gemini_id": 133,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 45.8
              },
              {
                "gemini_id": 134,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 42.8
              },
              {
                "gemini_id": 135,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 37.2
              },
              {
                "gemini_id": 136,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 42.1
              },
              {
                "gemini_id": 137,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 42.9
              },
              {
                "gemini_id": 138,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 35.1
              },
              {
                "gemini_id": 139,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 37.3
              },
              {
                "gemini_id": 140,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 41.1
              },
              {
                "gemini_id": 141,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 37.7
              },
              {
                "gemini_id": 142,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 41.4
              },
              {
                "gemini_id": 143,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.6
              },
              {
                "gemini_id": 144,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 41.5
              },
              {
                "gemini_id": 145,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 44.1
              },
              {
                "gemini_id": 146,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 43.1
              },
              {
                "gemini_id": 147,
                "species": "Adelie",
                "sex": "NA",
                "island": "Dream",
                "x": 2,
                "y": 37.5
              },
              {
                "gemini_id": 149,
                "species": "Adelie",
                "sex": "NA",
                "island": "Torgersen",
                "x": 3,
                "y": 34.1
              },
              {
                "gemini_id": 150,
                "species": "Adelie",
                "sex": "NA",
                "island": "Torgersen",
                "x": 3,
                "y": 42
              },
              {
                "gemini_id": 151,
                "species": "Adelie",
                "sex": "NA",
                "island": "Torgersen",
                "x": 3,
                "y": 37.8
              },
              {
                "gemini_id": 152,
                "species": "Adelie",
                "sex": "NA",
                "island": "Torgersen",
                "x": 3,
                "y": 37.8
              },
              {
                "gemini_id": 153,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5
              },
              {
                "gemini_id": 154,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 45.4
              },
              {
                "gemini_id": 155,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 45.2
              },
              {
                "gemini_id": 156,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.1
              },
              {
                "gemini_id": 157,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46
              },
              {
                "gemini_id": 158,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.6
              },
              {
                "gemini_id": 159,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 47
              },
              {
                "gemini_id": 160,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 45.9
              },
              {
                "gemini_id": 161,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 58
              },
              {
                "gemini_id": 162,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.4
              },
              {
                "gemini_id": 163,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 42.4
              },
              {
                "gemini_id": 164,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 43.2
              },
              {
                "gemini_id": 165,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.7
              },
              {
                "gemini_id": 166,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 50.5
              },
              {
                "gemini_id": 167,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.4
              },
              {
                "gemini_id": 168,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 40.9
              },
              {
                "gemini_id": 169,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 42.5
              },
              {
                "gemini_id": 170,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 47.5
              },
              {
                "gemini_id": 171,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 47.6
              },
              {
                "gemini_id": 172,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.9
              },
              {
                "gemini_id": 173,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.2
              },
              {
                "gemini_id": 174,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 45.5
              },
              {
                "gemini_id": 175,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 50.9
              },
              {
                "gemini_id": 176,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 50.1
              },
              {
                "gemini_id": 177,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 49.8
              },
              {
                "gemini_id": 178,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 48.1
              },
              {
                "gemini_id": 179,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 45.7
              },
              {
                "gemini_id": 180,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 42.5
              },
              {
                "gemini_id": 181,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 45.2
              },
              {
                "gemini_id": 182,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 45.6
              },
              {
                "gemini_id": 183,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.8
              },
              {
                "gemini_id": 184,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 45.7
              },
              {
                "gemini_id": 185,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 43.5
              },
              {
                "gemini_id": 186,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 50.2
              },
              {
                "gemini_id": 187,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 50
              },
              {
                "gemini_id": 188,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.3
              },
              {
                "gemini_id": 189,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 52.7
              },
              {
                "gemini_id": 190,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.3
              },
              {
                "gemini_id": 191,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.3
              },
              {
                "gemini_id": 192,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.7
              },
              {
                "gemini_id": 193,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 52
              },
              {
                "gemini_id": 194,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 50.5
              },
              {
                "gemini_id": 195,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 50.3
              },
              {
                "gemini_id": 196,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 49.2
              },
              {
                "gemini_id": 197,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 48.5
              },
              {
                "gemini_id": 198,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 50.6
              },
              {
                "gemini_id": 199,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 52
              },
              {
                "gemini_id": 200,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 49.5
              },
              {
                "gemini_id": 201,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 52.8
              },
              {
                "gemini_id": 202,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 54.2
              },
              {
                "gemini_id": 203,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51
              },
              {
                "gemini_id": 204,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 49.7
              },
              {
                "gemini_id": 205,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 52
              },
              {
                "gemini_id": 206,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 53.5
              },
              {
                "gemini_id": 207,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 49
              },
              {
                "gemini_id": 208,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 50.9
              },
              {
                "gemini_id": 209,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 50.8
              },
              {
                "gemini_id": 210,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 49
              },
              {
                "gemini_id": 211,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.5
              },
              {
                "gemini_id": 212,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.4
              },
              {
                "gemini_id": 213,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 50.7
              },
              {
                "gemini_id": 214,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 52.2
              },
              {
                "gemini_id": 215,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 49.3
              },
              {
                "gemini_id": 216,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 50.2
              },
              {
                "gemini_id": 217,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.9
              },
              {
                "gemini_id": 218,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 55.8
              },
              {
                "gemini_id": 219,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 49.6
              },
              {
                "gemini_id": 220,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 50.8
              },
              {
                "gemini_id": 221,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 222,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 223,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 224,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 225,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 226,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 227,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 228,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 229,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 230,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 231,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 232,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 233,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 234,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 235,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 236,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 237,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 238,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 42.6
              },
              {
                "gemini_id": 239,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 44
              },
              {
                "gemini_id": 240,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 241,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 242,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 43.6
              },
              {
                "gemini_id": 243,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 244,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 245,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 246,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 247,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 248,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 43.8
              },
              {
                "gemini_id": 249,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 250,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 251,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 252,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 253,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 254,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 47.7
              },
              {
                "gemini_id": 255,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 256,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 257,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 258,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 259,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 260,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 47.4
              },
              {
                "gemini_id": 261,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 262,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 43.4
              },
              {
                "gemini_id": 263,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 264,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 265,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 266,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 267,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 268,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 269,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 270,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 271,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 41.7
              },
              {
                "gemini_id": 272,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 273,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 274,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 275,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 276,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 277,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 278,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 279,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 280,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 281,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 282,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 283,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 284,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 285,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 286,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.3
              },
              {
                "gemini_id": 287,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.2
              },
              {
                "gemini_id": 288,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 289,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 290,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 46.3
              },
              {
                "gemini_id": 291,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 292,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 47.8
              },
              {
                "gemini_id": 293,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 294,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 295,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 59.6
              },
              {
                "gemini_id": 296,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 297,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 44.4
              },
              {
                "gemini_id": 298,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 299,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 300,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 301,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 302,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 303,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 304,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 305,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 306,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 45
              },
              {
                "gemini_id": 307,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 308,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 309,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 310,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 54.3
              },
              {
                "gemini_id": 311,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 312,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 313,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50.7
              },
              {
                "gemini_id": 314,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 315,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 316,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 48.6
              },
              {
                "gemini_id": 317,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 318,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 319,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 52.5
              },
              {
                "gemini_id": 320,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 321,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 322,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 323,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 52.1
              },
              {
                "gemini_id": 324,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 52.2
              },
              {
                "gemini_id": 325,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 326,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 327,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4
              },
              {
                "gemini_id": 328,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 329,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 55.9
              },
              {
                "gemini_id": 330,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 331,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 332,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 53.4
              },
              {
                "gemini_id": 333,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 334,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 335,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 51.5
              },
              {
                "gemini_id": 336,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 55.1
              },
              {
                "gemini_id": 337,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 48.8
              },
              {
                "gemini_id": 338,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 339,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.9
              },
              {
                "gemini_id": 340,
                "species": "Gentoo",
                "sex": "NA",
                "island": "Biscoe",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 341,
                "species": "Gentoo",
                "sex": "NA",
                "island": "Biscoe",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 342,
                "species": "Gentoo",
                "sex": "NA",
                "island": "Biscoe",
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 343,
                "species": "Gentoo",
                "sex": "NA",
                "island": "Biscoe",
                "x": 1,
                "y": 44.5
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "sex",
              "type": "ordinal",
              "title": "sex"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 2, 3],
                  "labelExpr": "round(datum.label) == 1 ? 'Biscoe' : round(datum.label) == 2 ? 'Dream' : 'Torgersen'"
                },
                "title": "island",
                "scale": {
                  "domain": [0.5, 3.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              },
              "color": {
                "field": "island",
                "type": "nominal",
                "legend": {
                  "values": ["Biscoe", "Dream", "Torgersen"]
                }
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "axes": true,
            "description": "Plot mean bill_length_mm of each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 2,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 3,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 4,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 5,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 6,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 7,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 8,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 9,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 10,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 11,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 12,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 13,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 14,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 15,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 16,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 17,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 18,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 19,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 20,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 21,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 22,
                "species": "Adelie",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 37.3590909090909
              },
              {
                "gemini_id": 23,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 24,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 25,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 26,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 27,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 28,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 29,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 30,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 31,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 32,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 33,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 34,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 35,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 36,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 37,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 38,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 39,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 40,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 41,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 42,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 43,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 44,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 45,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 46,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 47,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 48,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 49,
                "species": "Adelie",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 36.9111111111111
              },
              {
                "gemini_id": 50,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 51,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 52,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 53,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 54,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 55,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 56,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 57,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 58,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 59,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 60,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 61,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 62,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 63,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 64,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 65,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 66,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 67,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 68,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 69,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 70,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 71,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 72,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 73,
                "species": "Adelie",
                "sex": "female",
                "island": "Torgersen",
                "x": 3,
                "y": 37.5541666666667
              },
              {
                "gemini_id": 74,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 75,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 76,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 77,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 78,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 79,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 80,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 81,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 82,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 83,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 84,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 85,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 86,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 87,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 88,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 89,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 90,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 91,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 92,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 93,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 94,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 95,
                "species": "Adelie",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 40.5909090909091
              },
              {
                "gemini_id": 96,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 97,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 98,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 99,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 100,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 101,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 102,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 103,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 104,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 105,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 106,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 107,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 108,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 109,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 110,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 111,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 112,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 113,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 114,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 115,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 116,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 117,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 118,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 119,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 120,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 121,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 122,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 123,
                "species": "Adelie",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 40.0714285714286
              },
              {
                "gemini_id": 124,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 125,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 126,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 127,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 128,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 129,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 130,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 131,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 132,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 133,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 134,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 135,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 136,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 137,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 138,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 139,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 140,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 141,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 142,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 143,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 144,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 145,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 146,
                "species": "Adelie",
                "sex": "male",
                "island": "Torgersen",
                "x": 3,
                "y": 40.5869565217391
              },
              {
                "gemini_id": 147,
                "species": "Adelie",
                "sex": "NA",
                "island": "Dream",
                "x": 2,
                "y": 37.5
              },
              {
                "gemini_id": 149,
                "species": "Adelie",
                "sex": "NA",
                "island": "Torgersen",
                "x": 3,
                "y": 37.925
              },
              {
                "gemini_id": 150,
                "species": "Adelie",
                "sex": "NA",
                "island": "Torgersen",
                "x": 3,
                "y": 37.925
              },
              {
                "gemini_id": 151,
                "species": "Adelie",
                "sex": "NA",
                "island": "Torgersen",
                "x": 3,
                "y": 37.925
              },
              {
                "gemini_id": 152,
                "species": "Adelie",
                "sex": "NA",
                "island": "Torgersen",
                "x": 3,
                "y": 37.925
              },
              {
                "gemini_id": 153,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 154,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 155,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 156,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 157,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 158,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 159,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 160,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 161,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 162,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 163,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 164,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 165,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 166,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 167,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 168,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 169,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 170,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 171,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 172,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 173,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 174,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 175,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 176,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 177,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 178,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 179,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 180,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 181,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 182,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 183,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 184,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 185,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 186,
                "species": "Chinstrap",
                "sex": "female",
                "island": "Dream",
                "x": 2,
                "y": 46.5735294117647
              },
              {
                "gemini_id": 187,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 188,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 189,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 190,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 191,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 192,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 193,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 194,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 195,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 196,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 197,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 198,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 199,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 200,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 201,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 202,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 203,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 204,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 205,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 206,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 207,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 208,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 209,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 210,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 211,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 212,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 213,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 214,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 215,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 216,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 217,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 218,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 219,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 220,
                "species": "Chinstrap",
                "sex": "male",
                "island": "Dream",
                "x": 2,
                "y": 51.0941176470588
              },
              {
                "gemini_id": 221,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 222,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 223,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 224,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 225,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 226,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 227,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 228,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 229,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 230,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 231,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 232,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 233,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 234,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 235,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 236,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 237,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 238,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 239,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 240,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 241,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 242,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 243,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 244,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 245,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 246,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 247,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 248,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 249,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 250,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 251,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 252,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 253,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 254,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 255,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 256,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 257,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 258,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 259,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 260,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 261,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 262,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 263,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 264,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 265,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 266,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 267,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 268,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 269,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 270,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 271,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 272,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 273,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 274,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 275,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 276,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 277,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 278,
                "species": "Gentoo",
                "sex": "female",
                "island": "Biscoe",
                "x": 1,
                "y": 45.5637931034483
              },
              {
                "gemini_id": 279,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 280,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 281,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 282,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 283,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 284,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 285,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 286,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 287,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 288,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 289,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 290,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 291,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 292,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 293,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 294,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 295,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 296,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 297,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 298,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 299,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 300,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 301,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 302,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 303,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 304,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 305,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 306,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 307,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 308,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 309,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 310,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 311,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 312,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 313,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 314,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 315,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 316,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 317,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 318,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 319,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 320,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 321,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 322,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 323,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 324,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 325,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 326,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 327,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 328,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 329,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 330,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 331,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 332,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 333,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 334,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 335,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 336,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 337,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 338,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 339,
                "species": "Gentoo",
                "sex": "male",
                "island": "Biscoe",
                "x": 1,
                "y": 49.4737704918033
              },
              {
                "gemini_id": 340,
                "species": "Gentoo",
                "sex": "NA",
                "island": "Biscoe",
                "x": 1,
                "y": 45.625
              },
              {
                "gemini_id": 341,
                "species": "Gentoo",
                "sex": "NA",
                "island": "Biscoe",
                "x": 1,
                "y": 45.625
              },
              {
                "gemini_id": 342,
                "species": "Gentoo",
                "sex": "NA",
                "island": "Biscoe",
                "x": 1,
                "y": 45.625
              },
              {
                "gemini_id": 343,
                "species": "Gentoo",
                "sex": "NA",
                "island": "Biscoe",
                "x": 1,
                "y": 45.625
              }
            ]
          },
          "facet": {
            "column": {
              "field": "species",
              "type": "ordinal",
              "title": "species"
            },
            "row": {
              "field": "sex",
              "type": "ordinal",
              "title": "sex"
            }
          },
          "spec": {
            "height": 100,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 2, 3],
                  "labelExpr": "round(datum.label) == 1 ? 'Biscoe' : round(datum.label) == 2 ? 'Dream' : 'Torgersen'"
                },
                "title": "island",
                "scale": {
                  "domain": [0.5, 3.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              },
              "color": {
                "field": "island",
                "type": "nominal",
                "legend": {
                  "values": ["Biscoe", "Dream", "Torgersen"]
                }
              }
            }
          }
        }
      ] 

---

    Code
      spec$x$spec
    Output
      [
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Initial data"
          },
          "data": {
            "values": [
              {
                "n": 344
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "axis": null
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Group by sex"
          },
          "data": {
            "values": [
              {
                "sex": "female",
                "n": 165
              },
              {
                "sex": "male",
                "n": 168
              },
              {
                "sex": "NA",
                "n": 11
              }
            ]
          },
          "facet": {
            "column": {
              "field": "sex",
              "type": "ordinal",
              "title": "sex"
            }
          },
          "spec": {
            "height": 300,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": null
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "axis": null
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "jitter",
            "axes": true,
            "description": "Plot bill_length_mm within each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "sex": "female",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 2,
                "sex": "female",
                "x": 1,
                "y": 40.3
              },
              {
                "gemini_id": 3,
                "sex": "female",
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 4,
                "sex": "female",
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 5,
                "sex": "female",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 6,
                "sex": "female",
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 7,
                "sex": "female",
                "x": 1,
                "y": 38.7
              },
              {
                "gemini_id": 8,
                "sex": "female",
                "x": 1,
                "y": 34.4
              },
              {
                "gemini_id": 9,
                "sex": "female",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 10,
                "sex": "female",
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 11,
                "sex": "female",
                "x": 1,
                "y": 35.3
              },
              {
                "gemini_id": 12,
                "sex": "female",
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 13,
                "sex": "female",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 14,
                "sex": "female",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 15,
                "sex": "female",
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 16,
                "sex": "female",
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 17,
                "sex": "female",
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 18,
                "sex": "female",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 19,
                "sex": "female",
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 20,
                "sex": "female",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 21,
                "sex": "female",
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 22,
                "sex": "female",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 23,
                "sex": "female",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 24,
                "sex": "female",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 25,
                "sex": "female",
                "x": 1,
                "y": 34.5
              },
              {
                "gemini_id": 26,
                "sex": "female",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 27,
                "sex": "female",
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 28,
                "sex": "female",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 29,
                "sex": "female",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 30,
                "sex": "female",
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 31,
                "sex": "female",
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 32,
                "sex": "female",
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 33,
                "sex": "female",
                "x": 1,
                "y": 33.5
              },
              {
                "gemini_id": 34,
                "sex": "female",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 35,
                "sex": "female",
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 36,
                "sex": "female",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 37,
                "sex": "female",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 38,
                "sex": "female",
                "x": 1,
                "y": 34.6
              },
              {
                "gemini_id": 39,
                "sex": "female",
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 40,
                "sex": "female",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 41,
                "sex": "female",
                "x": 1,
                "y": 36.9
              },
              {
                "gemini_id": 42,
                "sex": "female",
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 43,
                "sex": "female",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 44,
                "sex": "female",
                "x": 1,
                "y": 34
              },
              {
                "gemini_id": 45,
                "sex": "female",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 46,
                "sex": "female",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 47,
                "sex": "female",
                "x": 1,
                "y": 33.1
              },
              {
                "gemini_id": 48,
                "sex": "female",
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 49,
                "sex": "female",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 50,
                "sex": "female",
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 51,
                "sex": "female",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 52,
                "sex": "female",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 53,
                "sex": "female",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 54,
                "sex": "female",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 55,
                "sex": "female",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 56,
                "sex": "female",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 57,
                "sex": "female",
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 58,
                "sex": "female",
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 59,
                "sex": "female",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 60,
                "sex": "female",
                "x": 1,
                "y": 35.2
              },
              {
                "gemini_id": 61,
                "sex": "female",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 62,
                "sex": "female",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 63,
                "sex": "female",
                "x": 1,
                "y": 38.5
              },
              {
                "gemini_id": 64,
                "sex": "female",
                "x": 1,
                "y": 36.8
              },
              {
                "gemini_id": 65,
                "sex": "female",
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 66,
                "sex": "female",
                "x": 1,
                "y": 35.6
              },
              {
                "gemini_id": 67,
                "sex": "female",
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 68,
                "sex": "female",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 69,
                "sex": "female",
                "x": 1,
                "y": 32.1
              },
              {
                "gemini_id": 70,
                "sex": "female",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 71,
                "sex": "female",
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 72,
                "sex": "female",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 73,
                "sex": "female",
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 74,
                "sex": "female",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 75,
                "sex": "female",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 76,
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 77,
                "sex": "female",
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 78,
                "sex": "female",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 79,
                "sex": "female",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 80,
                "sex": "female",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 81,
                "sex": "female",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 82,
                "sex": "female",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 83,
                "sex": "female",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 84,
                "sex": "female",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 85,
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 86,
                "sex": "female",
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 87,
                "sex": "female",
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 88,
                "sex": "female",
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 89,
                "sex": "female",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 90,
                "sex": "female",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 91,
                "sex": "female",
                "x": 1,
                "y": 42.6
              },
              {
                "gemini_id": 92,
                "sex": "female",
                "x": 1,
                "y": 44
              },
              {
                "gemini_id": 93,
                "sex": "female",
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 94,
                "sex": "female",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 95,
                "sex": "female",
                "x": 1,
                "y": 43.6
              },
              {
                "gemini_id": 96,
                "sex": "female",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 97,
                "sex": "female",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 98,
                "sex": "female",
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 99,
                "sex": "female",
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 100,
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 101,
                "sex": "female",
                "x": 1,
                "y": 43.8
              },
              {
                "gemini_id": 102,
                "sex": "female",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 103,
                "sex": "female",
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 104,
                "sex": "female",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 105,
                "sex": "female",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 106,
                "sex": "female",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 107,
                "sex": "female",
                "x": 1,
                "y": 47.7
              },
              {
                "gemini_id": 108,
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 109,
                "sex": "female",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 110,
                "sex": "female",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 111,
                "sex": "female",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 112,
                "sex": "female",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 113,
                "sex": "female",
                "x": 1,
                "y": 47.4
              },
              {
                "gemini_id": 114,
                "sex": "female",
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 115,
                "sex": "female",
                "x": 1,
                "y": 43.4
              },
              {
                "gemini_id": 116,
                "sex": "female",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 117,
                "sex": "female",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 118,
                "sex": "female",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 119,
                "sex": "female",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 120,
                "sex": "female",
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 121,
                "sex": "female",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 122,
                "sex": "female",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 123,
                "sex": "female",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 124,
                "sex": "female",
                "x": 1,
                "y": 41.7
              },
              {
                "gemini_id": 125,
                "sex": "female",
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 126,
                "sex": "female",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 127,
                "sex": "female",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 128,
                "sex": "female",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 129,
                "sex": "female",
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 130,
                "sex": "female",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 131,
                "sex": "female",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 132,
                "sex": "female",
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 133,
                "sex": "female",
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 134,
                "sex": "female",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 135,
                "sex": "female",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 136,
                "sex": "female",
                "x": 1,
                "y": 46
              },
              {
                "gemini_id": 137,
                "sex": "female",
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 138,
                "sex": "female",
                "x": 1,
                "y": 47
              },
              {
                "gemini_id": 139,
                "sex": "female",
                "x": 1,
                "y": 45.9
              },
              {
                "gemini_id": 140,
                "sex": "female",
                "x": 1,
                "y": 58
              },
              {
                "gemini_id": 141,
                "sex": "female",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 142,
                "sex": "female",
                "x": 1,
                "y": 42.4
              },
              {
                "gemini_id": 143,
                "sex": "female",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 144,
                "sex": "female",
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 145,
                "sex": "female",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 146,
                "sex": "female",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 147,
                "sex": "female",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 148,
                "sex": "female",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 149,
                "sex": "female",
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 150,
                "sex": "female",
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 151,
                "sex": "female",
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 152,
                "sex": "female",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 153,
                "sex": "female",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 154,
                "sex": "female",
                "x": 1,
                "y": 50.9
              },
              {
                "gemini_id": 155,
                "sex": "female",
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 156,
                "sex": "female",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 157,
                "sex": "female",
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 158,
                "sex": "female",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 159,
                "sex": "female",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 160,
                "sex": "female",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 161,
                "sex": "female",
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 162,
                "sex": "female",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 163,
                "sex": "female",
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 164,
                "sex": "female",
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 165,
                "sex": "female",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 166,
                "sex": "male",
                "x": 1,
                "y": 39.1
              },
              {
                "gemini_id": 167,
                "sex": "male",
                "x": 1,
                "y": 39.3
              },
              {
                "gemini_id": 168,
                "sex": "male",
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 169,
                "sex": "male",
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 170,
                "sex": "male",
                "x": 1,
                "y": 34.6
              },
              {
                "gemini_id": 171,
                "sex": "male",
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 172,
                "sex": "male",
                "x": 1,
                "y": 46
              },
              {
                "gemini_id": 173,
                "sex": "male",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 174,
                "sex": "male",
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 175,
                "sex": "male",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 176,
                "sex": "male",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 177,
                "sex": "male",
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 178,
                "sex": "male",
                "x": 1,
                "y": 37.2
              },
              {
                "gemini_id": 179,
                "sex": "male",
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 180,
                "sex": "male",
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 181,
                "sex": "male",
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 182,
                "sex": "male",
                "x": 1,
                "y": 39.8
              },
              {
                "gemini_id": 183,
                "sex": "male",
                "x": 1,
                "y": 40.8
              },
              {
                "gemini_id": 184,
                "sex": "male",
                "x": 1,
                "y": 44.1
              },
              {
                "gemini_id": 185,
                "sex": "male",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 186,
                "sex": "male",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 187,
                "sex": "male",
                "x": 1,
                "y": 42.3
              },
              {
                "gemini_id": 188,
                "sex": "male",
                "x": 1,
                "y": 40.1
              },
              {
                "gemini_id": 189,
                "sex": "male",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 190,
                "sex": "male",
                "x": 1,
                "y": 41.4
              },
              {
                "gemini_id": 191,
                "sex": "male",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 192,
                "sex": "male",
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 193,
                "sex": "male",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 194,
                "sex": "male",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 195,
                "sex": "male",
                "x": 1,
                "y": 41.6
              },
              {
                "gemini_id": 196,
                "sex": "male",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 197,
                "sex": "male",
                "x": 1,
                "y": 41.8
              },
              {
                "gemini_id": 198,
                "sex": "male",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 199,
                "sex": "male",
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 200,
                "sex": "male",
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 201,
                "sex": "male",
                "x": 1,
                "y": 37.2
              },
              {
                "gemini_id": 202,
                "sex": "male",
                "x": 1,
                "y": 42.1
              },
              {
                "gemini_id": 203,
                "sex": "male",
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 204,
                "sex": "male",
                "x": 1,
                "y": 35.1
              },
              {
                "gemini_id": 205,
                "sex": "male",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 206,
                "sex": "male",
                "x": 1,
                "y": 36.3
              },
              {
                "gemini_id": 207,
                "sex": "male",
                "x": 1,
                "y": 38.3
              },
              {
                "gemini_id": 208,
                "sex": "male",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 209,
                "sex": "male",
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 210,
                "sex": "male",
                "x": 1,
                "y": 40.8
              },
              {
                "gemini_id": 211,
                "sex": "male",
                "x": 1,
                "y": 40.3
              },
              {
                "gemini_id": 212,
                "sex": "male",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 213,
                "sex": "male",
                "x": 1,
                "y": 41
              },
              {
                "gemini_id": 214,
                "sex": "male",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 215,
                "sex": "male",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 216,
                "sex": "male",
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 217,
                "sex": "male",
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 218,
                "sex": "male",
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 219,
                "sex": "male",
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 220,
                "sex": "male",
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 221,
                "sex": "male",
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 222,
                "sex": "male",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 223,
                "sex": "male",
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 224,
                "sex": "male",
                "x": 1,
                "y": 41.4
              },
              {
                "gemini_id": 225,
                "sex": "male",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 226,
                "sex": "male",
                "x": 1,
                "y": 41.5
              },
              {
                "gemini_id": 227,
                "sex": "male",
                "x": 1,
                "y": 44.1
              },
              {
                "gemini_id": 228,
                "sex": "male",
                "x": 1,
                "y": 43.1
              },
              {
                "gemini_id": 229,
                "sex": "male",
                "x": 1,
                "y": 37.5
              },
              {
                "gemini_id": 230,
                "sex": "male",
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 231,
                "sex": "male",
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 232,
                "sex": "male",
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 233,
                "sex": "male",
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 234,
                "sex": "male",
                "x": 1,
                "y": 40.7
              },
              {
                "gemini_id": 235,
                "sex": "male",
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 236,
                "sex": "male",
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 237,
                "sex": "male",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 238,
                "sex": "male",
                "x": 1,
                "y": 41.5
              },
              {
                "gemini_id": 239,
                "sex": "male",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 240,
                "sex": "male",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 241,
                "sex": "male",
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 242,
                "sex": "male",
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 243,
                "sex": "male",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 244,
                "sex": "male",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 245,
                "sex": "male",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 246,
                "sex": "male",
                "x": 1,
                "y": 49.3
              },
              {
                "gemini_id": 247,
                "sex": "male",
                "x": 1,
                "y": 49.2
              },
              {
                "gemini_id": 248,
                "sex": "male",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 249,
                "sex": "male",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 250,
                "sex": "male",
                "x": 1,
                "y": 46.3
              },
              {
                "gemini_id": 251,
                "sex": "male",
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 252,
                "sex": "male",
                "x": 1,
                "y": 47.8
              },
              {
                "gemini_id": 253,
                "sex": "male",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 254,
                "sex": "male",
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 255,
                "sex": "male",
                "x": 1,
                "y": 59.6
              },
              {
                "gemini_id": 256,
                "sex": "male",
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 257,
                "sex": "male",
                "x": 1,
                "y": 44.4
              },
              {
                "gemini_id": 258,
                "sex": "male",
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 259,
                "sex": "male",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 260,
                "sex": "male",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 261,
                "sex": "male",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 262,
                "sex": "male",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 263,
                "sex": "male",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 264,
                "sex": "male",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 265,
                "sex": "male",
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 266,
                "sex": "male",
                "x": 1,
                "y": 45
              },
              {
                "gemini_id": 267,
                "sex": "male",
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 268,
                "sex": "male",
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 269,
                "sex": "male",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 270,
                "sex": "male",
                "x": 1,
                "y": 54.3
              },
              {
                "gemini_id": 271,
                "sex": "male",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 272,
                "sex": "male",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 273,
                "sex": "male",
                "x": 1,
                "y": 50.7
              },
              {
                "gemini_id": 274,
                "sex": "male",
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 275,
                "sex": "male",
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 276,
                "sex": "male",
                "x": 1,
                "y": 48.6
              },
              {
                "gemini_id": 277,
                "sex": "male",
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 278,
                "sex": "male",
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 279,
                "sex": "male",
                "x": 1,
                "y": 52.5
              },
              {
                "gemini_id": 280,
                "sex": "male",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 281,
                "sex": "male",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 282,
                "sex": "male",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 283,
                "sex": "male",
                "x": 1,
                "y": 52.1
              },
              {
                "gemini_id": 284,
                "sex": "male",
                "x": 1,
                "y": 52.2
              },
              {
                "gemini_id": 285,
                "sex": "male",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 286,
                "sex": "male",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 287,
                "sex": "male",
                "x": 1,
                "y": 49.4
              },
              {
                "gemini_id": 288,
                "sex": "male",
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 289,
                "sex": "male",
                "x": 1,
                "y": 55.9
              },
              {
                "gemini_id": 290,
                "sex": "male",
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 291,
                "sex": "male",
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 292,
                "sex": "male",
                "x": 1,
                "y": 53.4
              },
              {
                "gemini_id": 293,
                "sex": "male",
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 294,
                "sex": "male",
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 295,
                "sex": "male",
                "x": 1,
                "y": 51.5
              },
              {
                "gemini_id": 296,
                "sex": "male",
                "x": 1,
                "y": 55.1
              },
              {
                "gemini_id": 297,
                "sex": "male",
                "x": 1,
                "y": 48.8
              },
              {
                "gemini_id": 298,
                "sex": "male",
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 299,
                "sex": "male",
                "x": 1,
                "y": 49.9
              },
              {
                "gemini_id": 300,
                "sex": "male",
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 301,
                "sex": "male",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 302,
                "sex": "male",
                "x": 1,
                "y": 52.7
              },
              {
                "gemini_id": 303,
                "sex": "male",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 304,
                "sex": "male",
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 305,
                "sex": "male",
                "x": 1,
                "y": 51.7
              },
              {
                "gemini_id": 306,
                "sex": "male",
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 307,
                "sex": "male",
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 308,
                "sex": "male",
                "x": 1,
                "y": 50.3
              },
              {
                "gemini_id": 309,
                "sex": "male",
                "x": 1,
                "y": 49.2
              },
              {
                "gemini_id": 310,
                "sex": "male",
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 311,
                "sex": "male",
                "x": 1,
                "y": 50.6
              },
              {
                "gemini_id": 312,
                "sex": "male",
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 313,
                "sex": "male",
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 314,
                "sex": "male",
                "x": 1,
                "y": 52.8
              },
              {
                "gemini_id": 315,
                "sex": "male",
                "x": 1,
                "y": 54.2
              },
              {
                "gemini_id": 316,
                "sex": "male",
                "x": 1,
                "y": 51
              },
              {
                "gemini_id": 317,
                "sex": "male",
                "x": 1,
                "y": 49.7
              },
              {
                "gemini_id": 318,
                "sex": "male",
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 319,
                "sex": "male",
                "x": 1,
                "y": 53.5
              },
              {
                "gemini_id": 320,
                "sex": "male",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 321,
                "sex": "male",
                "x": 1,
                "y": 50.9
              },
              {
                "gemini_id": 322,
                "sex": "male",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 323,
                "sex": "male",
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 324,
                "sex": "male",
                "x": 1,
                "y": 51.5
              },
              {
                "gemini_id": 325,
                "sex": "male",
                "x": 1,
                "y": 51.4
              },
              {
                "gemini_id": 326,
                "sex": "male",
                "x": 1,
                "y": 50.7
              },
              {
                "gemini_id": 327,
                "sex": "male",
                "x": 1,
                "y": 52.2
              },
              {
                "gemini_id": 328,
                "sex": "male",
                "x": 1,
                "y": 49.3
              },
              {
                "gemini_id": 329,
                "sex": "male",
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 330,
                "sex": "male",
                "x": 1,
                "y": 51.9
              },
              {
                "gemini_id": 331,
                "sex": "male",
                "x": 1,
                "y": 55.8
              },
              {
                "gemini_id": 332,
                "sex": "male",
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 333,
                "sex": "male",
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 335,
                "sex": "NA",
                "x": 1,
                "y": 34.1
              },
              {
                "gemini_id": 336,
                "sex": "NA",
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 337,
                "sex": "NA",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 338,
                "sex": "NA",
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 339,
                "sex": "NA",
                "x": 1,
                "y": 37.5
              },
              {
                "gemini_id": 340,
                "sex": "NA",
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 341,
                "sex": "NA",
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 342,
                "sex": "NA",
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 343,
                "sex": "NA",
                "x": 1,
                "y": 44.5
              }
            ]
          },
          "facet": {
            "column": {
              "field": "sex",
              "type": "ordinal",
              "title": "sex"
            }
          },
          "spec": {
            "height": 300,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              }
            }
          }
        },
        {
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "axes": true,
            "description": "Plot mean bill_length_mm of each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 2,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 3,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 4,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 5,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 6,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 7,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 8,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 9,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 10,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 11,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 12,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 13,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 14,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 15,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 16,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 17,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 18,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 19,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 20,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 21,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 22,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 23,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 24,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 25,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 26,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 27,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 28,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 29,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 30,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 31,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 32,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 33,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 34,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 35,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 36,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 37,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 38,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 39,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 40,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 41,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 42,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 43,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 44,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 45,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 46,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 47,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 48,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 49,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 50,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 51,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 52,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 53,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 54,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 55,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 56,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 57,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 58,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 59,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 60,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 61,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 62,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 63,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 64,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 65,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 66,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 67,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 68,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 69,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 70,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 71,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 72,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 73,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 74,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 75,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 76,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 77,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 78,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 79,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 80,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 81,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 82,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 83,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 84,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 85,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 86,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 87,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 88,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 89,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 90,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 91,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 92,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 93,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 94,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 95,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 96,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 97,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 98,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 99,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 100,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 101,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 102,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 103,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 104,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 105,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 106,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 107,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 108,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 109,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 110,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 111,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 112,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 113,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 114,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 115,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 116,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 117,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 118,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 119,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 120,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 121,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 122,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 123,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 124,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 125,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 126,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 127,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 128,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 129,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 130,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 131,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 132,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 133,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 134,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 135,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 136,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 137,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 138,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 139,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 140,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 141,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 142,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 143,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 144,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 145,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 146,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 147,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 148,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 149,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 150,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 151,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 152,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 153,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 154,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 155,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 156,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 157,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 158,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 159,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 160,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 161,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 162,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 163,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 164,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 165,
                "sex": "female",
                "x": 1,
                "y": 42.0969696969697
              },
              {
                "gemini_id": 166,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 167,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 168,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 169,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 170,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 171,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 172,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 173,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 174,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 175,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 176,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 177,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 178,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 179,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 180,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 181,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 182,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 183,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 184,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 185,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 186,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 187,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 188,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 189,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 190,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 191,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 192,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 193,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 194,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 195,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 196,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 197,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 198,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 199,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 200,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 201,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 202,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 203,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 204,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 205,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 206,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 207,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 208,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 209,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 210,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 211,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 212,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 213,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 214,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 215,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 216,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 217,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 218,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 219,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 220,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 221,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 222,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 223,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 224,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 225,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 226,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 227,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 228,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 229,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 230,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 231,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 232,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 233,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 234,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 235,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 236,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 237,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 238,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 239,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 240,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 241,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 242,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 243,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 244,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 245,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 246,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 247,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 248,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 249,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 250,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 251,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 252,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 253,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 254,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 255,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 256,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 257,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 258,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 259,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 260,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 261,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 262,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 263,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 264,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 265,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 266,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 267,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 268,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 269,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 270,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 271,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 272,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 273,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 274,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 275,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 276,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 277,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 278,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 279,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 280,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 281,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 282,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 283,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 284,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 285,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 286,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 287,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 288,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 289,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 290,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 291,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 292,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 293,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 294,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 295,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 296,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 297,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 298,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 299,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 300,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 301,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 302,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 303,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 304,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 305,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 306,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 307,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 308,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 309,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 310,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 311,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 312,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 313,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 314,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 315,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 316,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 317,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 318,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 319,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 320,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 321,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 322,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 323,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 324,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 325,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 326,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 327,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 328,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 329,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 330,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 331,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 332,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 333,
                "sex": "male",
                "x": 1,
                "y": 45.8547619047619
              },
              {
                "gemini_id": 335,
                "sex": "NA",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 336,
                "sex": "NA",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 337,
                "sex": "NA",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 338,
                "sex": "NA",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 339,
                "sex": "NA",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 340,
                "sex": "NA",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 341,
                "sex": "NA",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 342,
                "sex": "NA",
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 343,
                "sex": "NA",
                "x": 1,
                "y": 41.3
              }
            ]
          },
          "facet": {
            "column": {
              "field": "sex",
              "type": "ordinal",
              "title": "sex"
            }
          },
          "spec": {
            "height": 300,
            "width": 100,
            "mark": {
              "type": "point",
              "filled": true
            },
            "encoding": {
              "x": {
                "field": "x",
                "type": "quantitative",
                "axis": {
                  "values": [1, 1],
                  "labelExpr": ""
                },
                "title": "",
                "scale": {
                  "domain": [0.5, 1.5]
                }
              },
              "y": {
                "field": "y",
                "type": "quantitative",
                "title": "bill_length_mm",
                "scale": {
                  "domain": [32.1, 59.6]
                }
              }
            }
          }
        }
      ] 

---

    Code
      spec$x$spec
    Output
      [
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "grid",
            "description": "Initial data"
          },
          "data": {
            "values": [
              {
                "n": 344
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": null
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "axis": null
            }
          }
        },
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "parse": "jitter",
            "axes": false,
            "description": "Plot bill_length_mm within each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "x": 1,
                "y": 39.1
              },
              {
                "gemini_id": 2,
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 3,
                "x": 1,
                "y": 40.3
              },
              {
                "gemini_id": 5,
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 6,
                "x": 1,
                "y": 39.3
              },
              {
                "gemini_id": 7,
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 8,
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 9,
                "x": 1,
                "y": 34.1
              },
              {
                "gemini_id": 10,
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 11,
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 12,
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 13,
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 14,
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 15,
                "x": 1,
                "y": 34.6
              },
              {
                "gemini_id": 16,
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 17,
                "x": 1,
                "y": 38.7
              },
              {
                "gemini_id": 18,
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 19,
                "x": 1,
                "y": 34.4
              },
              {
                "gemini_id": 20,
                "x": 1,
                "y": 46
              },
              {
                "gemini_id": 21,
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 22,
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 23,
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 24,
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 25,
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 26,
                "x": 1,
                "y": 35.3
              },
              {
                "gemini_id": 27,
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 28,
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 29,
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 30,
                "x": 1,
                "y": 40.5
              },
              {
                "gemini_id": 31,
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 32,
                "x": 1,
                "y": 37.2
              },
              {
                "gemini_id": 33,
                "x": 1,
                "y": 39.5
              },
              {
                "gemini_id": 34,
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 35,
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 36,
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 37,
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 38,
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 39,
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 40,
                "x": 1,
                "y": 39.8
              },
              {
                "gemini_id": 41,
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 42,
                "x": 1,
                "y": 40.8
              },
              {
                "gemini_id": 43,
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 44,
                "x": 1,
                "y": 44.1
              },
              {
                "gemini_id": 45,
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 46,
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 47,
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 48,
                "x": 1,
                "y": 37.5
              },
              {
                "gemini_id": 49,
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 50,
                "x": 1,
                "y": 42.3
              },
              {
                "gemini_id": 51,
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 52,
                "x": 1,
                "y": 40.1
              },
              {
                "gemini_id": 53,
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 54,
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 55,
                "x": 1,
                "y": 34.5
              },
              {
                "gemini_id": 56,
                "x": 1,
                "y": 41.4
              },
              {
                "gemini_id": 57,
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 58,
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 59,
                "x": 1,
                "y": 36.5
              },
              {
                "gemini_id": 60,
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 61,
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 62,
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 63,
                "x": 1,
                "y": 37.6
              },
              {
                "gemini_id": 64,
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 65,
                "x": 1,
                "y": 36.4
              },
              {
                "gemini_id": 66,
                "x": 1,
                "y": 41.6
              },
              {
                "gemini_id": 67,
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 68,
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 69,
                "x": 1,
                "y": 35.9
              },
              {
                "gemini_id": 70,
                "x": 1,
                "y": 41.8
              },
              {
                "gemini_id": 71,
                "x": 1,
                "y": 33.5
              },
              {
                "gemini_id": 72,
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 73,
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 74,
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 75,
                "x": 1,
                "y": 35.5
              },
              {
                "gemini_id": 76,
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 77,
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 78,
                "x": 1,
                "y": 37.2
              },
              {
                "gemini_id": 79,
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 80,
                "x": 1,
                "y": 42.1
              },
              {
                "gemini_id": 81,
                "x": 1,
                "y": 34.6
              },
              {
                "gemini_id": 82,
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 83,
                "x": 1,
                "y": 36.7
              },
              {
                "gemini_id": 84,
                "x": 1,
                "y": 35.1
              },
              {
                "gemini_id": 85,
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 86,
                "x": 1,
                "y": 41.3
              },
              {
                "gemini_id": 87,
                "x": 1,
                "y": 36.3
              },
              {
                "gemini_id": 88,
                "x": 1,
                "y": 36.9
              },
              {
                "gemini_id": 89,
                "x": 1,
                "y": 38.3
              },
              {
                "gemini_id": 90,
                "x": 1,
                "y": 38.9
              },
              {
                "gemini_id": 91,
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 92,
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 93,
                "x": 1,
                "y": 34
              },
              {
                "gemini_id": 94,
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 95,
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 96,
                "x": 1,
                "y": 40.8
              },
              {
                "gemini_id": 97,
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 98,
                "x": 1,
                "y": 40.3
              },
              {
                "gemini_id": 99,
                "x": 1,
                "y": 33.1
              },
              {
                "gemini_id": 100,
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 101,
                "x": 1,
                "y": 35
              },
              {
                "gemini_id": 102,
                "x": 1,
                "y": 41
              },
              {
                "gemini_id": 103,
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 104,
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 105,
                "x": 1,
                "y": 37.9
              },
              {
                "gemini_id": 106,
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 107,
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 108,
                "x": 1,
                "y": 38.2
              },
              {
                "gemini_id": 109,
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 110,
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 111,
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 112,
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 113,
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 114,
                "x": 1,
                "y": 42.2
              },
              {
                "gemini_id": 115,
                "x": 1,
                "y": 39.6
              },
              {
                "gemini_id": 116,
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 117,
                "x": 1,
                "y": 38.6
              },
              {
                "gemini_id": 118,
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 119,
                "x": 1,
                "y": 35.7
              },
              {
                "gemini_id": 120,
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 121,
                "x": 1,
                "y": 36.2
              },
              {
                "gemini_id": 122,
                "x": 1,
                "y": 37.7
              },
              {
                "gemini_id": 123,
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 124,
                "x": 1,
                "y": 41.4
              },
              {
                "gemini_id": 125,
                "x": 1,
                "y": 35.2
              },
              {
                "gemini_id": 126,
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 127,
                "x": 1,
                "y": 38.8
              },
              {
                "gemini_id": 128,
                "x": 1,
                "y": 41.5
              },
              {
                "gemini_id": 129,
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 130,
                "x": 1,
                "y": 44.1
              },
              {
                "gemini_id": 131,
                "x": 1,
                "y": 38.5
              },
              {
                "gemini_id": 132,
                "x": 1,
                "y": 43.1
              },
              {
                "gemini_id": 133,
                "x": 1,
                "y": 36.8
              },
              {
                "gemini_id": 134,
                "x": 1,
                "y": 37.5
              },
              {
                "gemini_id": 135,
                "x": 1,
                "y": 38.1
              },
              {
                "gemini_id": 136,
                "x": 1,
                "y": 41.1
              },
              {
                "gemini_id": 137,
                "x": 1,
                "y": 35.6
              },
              {
                "gemini_id": 138,
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 139,
                "x": 1,
                "y": 37
              },
              {
                "gemini_id": 140,
                "x": 1,
                "y": 39.7
              },
              {
                "gemini_id": 141,
                "x": 1,
                "y": 40.2
              },
              {
                "gemini_id": 142,
                "x": 1,
                "y": 40.6
              },
              {
                "gemini_id": 143,
                "x": 1,
                "y": 32.1
              },
              {
                "gemini_id": 144,
                "x": 1,
                "y": 40.7
              },
              {
                "gemini_id": 145,
                "x": 1,
                "y": 37.3
              },
              {
                "gemini_id": 146,
                "x": 1,
                "y": 39
              },
              {
                "gemini_id": 147,
                "x": 1,
                "y": 39.2
              },
              {
                "gemini_id": 148,
                "x": 1,
                "y": 36.6
              },
              {
                "gemini_id": 149,
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 150,
                "x": 1,
                "y": 37.8
              },
              {
                "gemini_id": 151,
                "x": 1,
                "y": 36
              },
              {
                "gemini_id": 152,
                "x": 1,
                "y": 41.5
              },
              {
                "gemini_id": 153,
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 154,
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 155,
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 156,
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 157,
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 158,
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 159,
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 160,
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 161,
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 162,
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 163,
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 164,
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 165,
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 166,
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 167,
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 168,
                "x": 1,
                "y": 49.3
              },
              {
                "gemini_id": 169,
                "x": 1,
                "y": 42
              },
              {
                "gemini_id": 170,
                "x": 1,
                "y": 49.2
              },
              {
                "gemini_id": 171,
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 172,
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 173,
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 174,
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 175,
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 176,
                "x": 1,
                "y": 46.3
              },
              {
                "gemini_id": 177,
                "x": 1,
                "y": 42.9
              },
              {
                "gemini_id": 178,
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 179,
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 180,
                "x": 1,
                "y": 47.8
              },
              {
                "gemini_id": 181,
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 182,
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 183,
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 184,
                "x": 1,
                "y": 42.8
              },
              {
                "gemini_id": 185,
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 186,
                "x": 1,
                "y": 59.6
              },
              {
                "gemini_id": 187,
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 188,
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 189,
                "x": 1,
                "y": 42.6
              },
              {
                "gemini_id": 190,
                "x": 1,
                "y": 44.4
              },
              {
                "gemini_id": 191,
                "x": 1,
                "y": 44
              },
              {
                "gemini_id": 192,
                "x": 1,
                "y": 48.7
              },
              {
                "gemini_id": 193,
                "x": 1,
                "y": 42.7
              },
              {
                "gemini_id": 194,
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 195,
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 196,
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 197,
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 198,
                "x": 1,
                "y": 43.6
              },
              {
                "gemini_id": 199,
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 200,
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 201,
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 202,
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 203,
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 204,
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 205,
                "x": 1,
                "y": 45.1
              },
              {
                "gemini_id": 206,
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 207,
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 208,
                "x": 1,
                "y": 45
              },
              {
                "gemini_id": 209,
                "x": 1,
                "y": 43.8
              },
              {
                "gemini_id": 210,
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 211,
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 212,
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 213,
                "x": 1,
                "y": 45.3
              },
              {
                "gemini_id": 214,
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 215,
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 216,
                "x": 1,
                "y": 54.3
              },
              {
                "gemini_id": 217,
                "x": 1,
                "y": 45.8
              },
              {
                "gemini_id": 218,
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 219,
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 220,
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 221,
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 222,
                "x": 1,
                "y": 50.7
              },
              {
                "gemini_id": 223,
                "x": 1,
                "y": 47.7
              },
              {
                "gemini_id": 224,
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 225,
                "x": 1,
                "y": 48.2
              },
              {
                "gemini_id": 226,
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 227,
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 228,
                "x": 1,
                "y": 48.6
              },
              {
                "gemini_id": 229,
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 230,
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 231,
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 232,
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 233,
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 234,
                "x": 1,
                "y": 52.5
              },
              {
                "gemini_id": 235,
                "x": 1,
                "y": 47.4
              },
              {
                "gemini_id": 236,
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 237,
                "x": 1,
                "y": 44.9
              },
              {
                "gemini_id": 238,
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 239,
                "x": 1,
                "y": 43.4
              },
              {
                "gemini_id": 240,
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 241,
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 242,
                "x": 1,
                "y": 52.1
              },
              {
                "gemini_id": 243,
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 244,
                "x": 1,
                "y": 52.2
              },
              {
                "gemini_id": 245,
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 246,
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 247,
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 248,
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 249,
                "x": 1,
                "y": 49.4
              },
              {
                "gemini_id": 250,
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 251,
                "x": 1,
                "y": 48.4
              },
              {
                "gemini_id": 252,
                "x": 1,
                "y": 51.1
              },
              {
                "gemini_id": 253,
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 254,
                "x": 1,
                "y": 55.9
              },
              {
                "gemini_id": 255,
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 256,
                "x": 1,
                "y": 49.1
              },
              {
                "gemini_id": 257,
                "x": 1,
                "y": 47.3
              },
              {
                "gemini_id": 258,
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 259,
                "x": 1,
                "y": 41.7
              },
              {
                "gemini_id": 260,
                "x": 1,
                "y": 53.4
              },
              {
                "gemini_id": 261,
                "x": 1,
                "y": 43.3
              },
              {
                "gemini_id": 262,
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 263,
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 264,
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 265,
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 266,
                "x": 1,
                "y": 51.5
              },
              {
                "gemini_id": 267,
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 268,
                "x": 1,
                "y": 55.1
              },
              {
                "gemini_id": 269,
                "x": 1,
                "y": 44.5
              },
              {
                "gemini_id": 270,
                "x": 1,
                "y": 48.8
              },
              {
                "gemini_id": 271,
                "x": 1,
                "y": 47.2
              },
              {
                "gemini_id": 273,
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 274,
                "x": 1,
                "y": 50.4
              },
              {
                "gemini_id": 275,
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 276,
                "x": 1,
                "y": 49.9
              },
              {
                "gemini_id": 277,
                "x": 1,
                "y": 46.5
              },
              {
                "gemini_id": 278,
                "x": 1,
                "y": 50
              },
              {
                "gemini_id": 279,
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 280,
                "x": 1,
                "y": 45.4
              },
              {
                "gemini_id": 281,
                "x": 1,
                "y": 52.7
              },
              {
                "gemini_id": 282,
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 283,
                "x": 1,
                "y": 46.1
              },
              {
                "gemini_id": 284,
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 285,
                "x": 1,
                "y": 46
              },
              {
                "gemini_id": 286,
                "x": 1,
                "y": 51.3
              },
              {
                "gemini_id": 287,
                "x": 1,
                "y": 46.6
              },
              {
                "gemini_id": 288,
                "x": 1,
                "y": 51.7
              },
              {
                "gemini_id": 289,
                "x": 1,
                "y": 47
              },
              {
                "gemini_id": 290,
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 291,
                "x": 1,
                "y": 45.9
              },
              {
                "gemini_id": 292,
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 293,
                "x": 1,
                "y": 50.3
              },
              {
                "gemini_id": 294,
                "x": 1,
                "y": 58
              },
              {
                "gemini_id": 295,
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 296,
                "x": 1,
                "y": 49.2
              },
              {
                "gemini_id": 297,
                "x": 1,
                "y": 42.4
              },
              {
                "gemini_id": 298,
                "x": 1,
                "y": 48.5
              },
              {
                "gemini_id": 299,
                "x": 1,
                "y": 43.2
              },
              {
                "gemini_id": 300,
                "x": 1,
                "y": 50.6
              },
              {
                "gemini_id": 301,
                "x": 1,
                "y": 46.7
              },
              {
                "gemini_id": 302,
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 303,
                "x": 1,
                "y": 50.5
              },
              {
                "gemini_id": 304,
                "x": 1,
                "y": 49.5
              },
              {
                "gemini_id": 305,
                "x": 1,
                "y": 46.4
              },
              {
                "gemini_id": 306,
                "x": 1,
                "y": 52.8
              },
              {
                "gemini_id": 307,
                "x": 1,
                "y": 40.9
              },
              {
                "gemini_id": 308,
                "x": 1,
                "y": 54.2
              },
              {
                "gemini_id": 309,
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 310,
                "x": 1,
                "y": 51
              },
              {
                "gemini_id": 311,
                "x": 1,
                "y": 49.7
              },
              {
                "gemini_id": 312,
                "x": 1,
                "y": 47.5
              },
              {
                "gemini_id": 313,
                "x": 1,
                "y": 47.6
              },
              {
                "gemini_id": 314,
                "x": 1,
                "y": 52
              },
              {
                "gemini_id": 315,
                "x": 1,
                "y": 46.9
              },
              {
                "gemini_id": 316,
                "x": 1,
                "y": 53.5
              },
              {
                "gemini_id": 317,
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 318,
                "x": 1,
                "y": 46.2
              },
              {
                "gemini_id": 319,
                "x": 1,
                "y": 50.9
              },
              {
                "gemini_id": 320,
                "x": 1,
                "y": 45.5
              },
              {
                "gemini_id": 321,
                "x": 1,
                "y": 50.9
              },
              {
                "gemini_id": 322,
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 323,
                "x": 1,
                "y": 50.1
              },
              {
                "gemini_id": 324,
                "x": 1,
                "y": 49
              },
              {
                "gemini_id": 325,
                "x": 1,
                "y": 51.5
              },
              {
                "gemini_id": 326,
                "x": 1,
                "y": 49.8
              },
              {
                "gemini_id": 327,
                "x": 1,
                "y": 48.1
              },
              {
                "gemini_id": 328,
                "x": 1,
                "y": 51.4
              },
              {
                "gemini_id": 329,
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 330,
                "x": 1,
                "y": 50.7
              },
              {
                "gemini_id": 331,
                "x": 1,
                "y": 42.5
              },
              {
                "gemini_id": 332,
                "x": 1,
                "y": 52.2
              },
              {
                "gemini_id": 333,
                "x": 1,
                "y": 45.2
              },
              {
                "gemini_id": 334,
                "x": 1,
                "y": 49.3
              },
              {
                "gemini_id": 335,
                "x": 1,
                "y": 50.2
              },
              {
                "gemini_id": 336,
                "x": 1,
                "y": 45.6
              },
              {
                "gemini_id": 337,
                "x": 1,
                "y": 51.9
              },
              {
                "gemini_id": 338,
                "x": 1,
                "y": 46.8
              },
              {
                "gemini_id": 339,
                "x": 1,
                "y": 45.7
              },
              {
                "gemini_id": 340,
                "x": 1,
                "y": 55.8
              },
              {
                "gemini_id": 341,
                "x": 1,
                "y": 43.5
              },
              {
                "gemini_id": 342,
                "x": 1,
                "y": 49.6
              },
              {
                "gemini_id": 343,
                "x": 1,
                "y": 50.8
              },
              {
                "gemini_id": 344,
                "x": 1,
                "y": 50.2
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": {
                "values": [1, 1],
                "labelExpr": ""
              },
              "title": "",
              "scale": {
                "domain": [0.5, 1.5]
              }
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "title": "bill_length_mm",
              "scale": {
                "domain": [32.1, 59.6]
              }
            }
          }
        },
        {
          "height": 300,
          "width": 300,
          "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
          "meta": {
            "axes": false,
            "description": "Plot mean bill_length_mm of each group"
          },
          "data": {
            "values": [
              {
                "gemini_id": 1,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 2,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 3,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 5,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 6,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 7,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 8,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 9,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 10,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 11,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 12,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 13,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 14,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 15,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 16,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 17,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 18,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 19,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 20,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 21,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 22,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 23,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 24,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 25,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 26,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 27,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 28,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 29,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 30,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 31,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 32,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 33,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 34,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 35,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 36,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 37,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 38,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 39,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 40,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 41,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 42,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 43,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 44,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 45,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 46,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 47,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 48,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 49,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 50,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 51,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 52,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 53,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 54,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 55,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 56,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 57,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 58,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 59,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 60,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 61,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 62,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 63,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 64,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 65,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 66,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 67,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 68,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 69,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 70,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 71,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 72,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 73,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 74,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 75,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 76,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 77,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 78,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 79,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 80,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 81,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 82,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 83,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 84,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 85,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 86,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 87,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 88,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 89,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 90,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 91,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 92,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 93,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 94,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 95,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 96,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 97,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 98,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 99,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 100,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 101,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 102,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 103,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 104,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 105,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 106,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 107,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 108,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 109,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 110,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 111,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 112,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 113,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 114,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 115,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 116,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 117,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 118,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 119,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 120,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 121,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 122,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 123,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 124,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 125,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 126,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 127,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 128,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 129,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 130,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 131,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 132,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 133,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 134,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 135,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 136,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 137,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 138,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 139,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 140,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 141,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 142,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 143,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 144,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 145,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 146,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 147,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 148,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 149,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 150,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 151,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 152,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 153,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 154,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 155,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 156,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 157,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 158,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 159,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 160,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 161,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 162,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 163,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 164,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 165,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 166,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 167,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 168,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 169,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 170,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 171,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 172,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 173,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 174,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 175,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 176,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 177,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 178,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 179,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 180,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 181,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 182,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 183,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 184,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 185,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 186,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 187,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 188,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 189,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 190,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 191,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 192,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 193,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 194,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 195,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 196,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 197,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 198,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 199,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 200,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 201,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 202,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 203,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 204,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 205,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 206,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 207,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 208,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 209,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 210,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 211,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 212,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 213,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 214,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 215,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 216,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 217,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 218,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 219,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 220,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 221,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 222,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 223,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 224,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 225,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 226,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 227,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 228,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 229,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 230,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 231,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 232,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 233,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 234,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 235,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 236,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 237,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 238,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 239,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 240,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 241,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 242,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 243,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 244,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 245,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 246,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 247,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 248,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 249,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 250,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 251,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 252,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 253,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 254,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 255,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 256,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 257,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 258,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 259,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 260,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 261,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 262,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 263,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 264,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 265,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 266,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 267,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 268,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 269,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 270,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 271,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 273,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 274,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 275,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 276,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 277,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 278,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 279,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 280,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 281,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 282,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 283,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 284,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 285,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 286,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 287,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 288,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 289,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 290,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 291,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 292,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 293,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 294,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 295,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 296,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 297,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 298,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 299,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 300,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 301,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 302,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 303,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 304,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 305,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 306,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 307,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 308,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 309,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 310,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 311,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 312,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 313,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 314,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 315,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 316,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 317,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 318,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 319,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 320,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 321,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 322,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 323,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 324,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 325,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 326,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 327,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 328,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 329,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 330,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 331,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 332,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 333,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 334,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 335,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 336,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 337,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 338,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 339,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 340,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 341,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 342,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 343,
                "x": 1,
                "y": 43.9219298245614
              },
              {
                "gemini_id": 344,
                "x": 1,
                "y": 43.9219298245614
              }
            ]
          },
          "mark": {
            "type": "point",
            "filled": true
          },
          "encoding": {
            "x": {
              "field": "x",
              "type": "quantitative",
              "axis": {
                "values": [1, 1],
                "labelExpr": ""
              },
              "title": "",
              "scale": {
                "domain": [0.5, 1.5]
              }
            },
            "y": {
              "field": "y",
              "type": "quantitative",
              "title": "bill_length_mm",
              "scale": {
                "domain": [32.1, 59.6]
              }
            }
          }
        }
      ] 
