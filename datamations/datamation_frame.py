# Create a DatamationFrame
#
# Create a subclass from a pandas DataFrame.
#
import time
import pandas as pd
from . import datamation_groupby
from . import utils

import json
from IPython.core.display import display, Javascript

# A class to return the final results
class Datamation:
    def __init__(self, states, operations, output):
        self.states = states
        self.operations = operations
        self.output = output

    def __str__(self):
        return self.output.to_json()

# The subclass of pandas DataFrame 
class DatamationFrame(pd.DataFrame):
    @property
    def _constructor(self):
        return DatamationFrame._internal_ctor

    _by = []
    _states = []
    _operations = []

    @classmethod
    def _internal_ctor(cls, *args, **kwargs):
        return cls(*args, **kwargs)

    def __init__(self, data, index=None, columns=None, dtype=None, copy=True):
        super(DatamationFrame, self).__init__(data=data,
                                      index=index,
                                      columns=columns,
                                      dtype=dtype,
                                      copy=copy)
        self._states = []
        self._states.append(data)
        self._operations = []

    @property
    def states(self):
        return self._states

    @property
    def operations(self):
        return self._operations

    # Override the 'groupby' function
    def groupby(self, by):
        self._by = [by]
        self._operations.append('groupby')
        df = super(DatamationFrame, self).groupby(by=by)
        return datamation_groupby.DatamationGroupBy(self, by)

    # The second spec in the json to show initial points divided into groups.
    def prep_specs_group_by(self, width=300, height=300):
        x_encoding = { 'field': utils.X_FIELD_CHR, 'type':  "quantitative", 'axis': None }
        y_encoding = { 'field': utils.Y_FIELD_CHR, 'type': "quantitative", 'axis': None }

        by = ','.join(self._by)

        spec_encoding = {
            'x': x_encoding,
            'y': y_encoding ,
            "color": {
                "field": None,
                "type": "nominal"
            },
            "tooltip": [
                {
                "field": by,
                "type": "nominal"
                }
            ]
        }
        
        data = list(map(lambda key: { by: key, 'n': len(self.states[1].groups[key])}, self.states[1].groups.keys()))

        meta = { 
                'parse': "grid",
                'description': "Group by " + by,
                "splitField": by,
                "axes": False
        }

        specs_list = []
        spec = utils.generate_vega_specs(data, meta, spec_encoding)

        specs_list.append(spec)
        return specs_list

    # The first spec in the json to layout all the points in one frame.
    def prep_specs_data(self, width=300, height=300):
        x_encoding = { 'field': utils.X_FIELD_CHR, 'type':  "quantitative", 'axis': None }
        y_encoding = { 'field': utils.Y_FIELD_CHR, 'type': "quantitative", 'axis': None }

        spec_encoding = { 'x': x_encoding, 'y': y_encoding }

        data = [
            {
                "n": len(self.states[0])
            }
        ]
        
        meta =  { 
            'parse': "grid",
            'description': "Initial data"
        }

        specs_list = []
        spec = utils.generate_vega_specs(data, meta, spec_encoding)

        specs_list.append(spec)
        return specs_list

    def specs(self):
        specs = self.prep_specs_data() + self.prep_specs_group_by() 
        return specs + self.states[1].prep_specs_summarize()

    def datamation_sanddance(self):
        # Generate a unique id using time in milliseconds
        app = 'app' + str(int(time.time() * 1000.0))

        # Replace all the instances of app id
        # The Vega specs json is passed to the client
        # The chart gets rendered in the jupyter cell.
        display(Javascript("""
            require.config({ 
                paths: { 
                d3: 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/d3/d3',
                vega: 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/vega/vega',
                'vega-util': 'https://cdn.jsdelivr.net/gh/chisingh/datamations@main/inst/htmlwidgets/vega-util/vega-util',
                'vega-lite': 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/vega-lite/vega-lite',
                'vega-embed': 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/vega-embed/vega-embed',
                gemini: 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/gemini/gemini.web',
                config: 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/js/config',
                utils: 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/js/utils',
                layout: 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/js/layout',
                'hack-facet-view': 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/js/hack-facet-view',
                app: 'https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/js/app'
            }});

            (function(element) {
                element.append($('<div>').html(`
                <link href="https://cdn.jsdelivr.net/gh/microsoft/datamations@main/inst/htmlwidgets/css/datamationSandDance.css" rel="stylesheet" type="text/css">
                <style type="text/css">
                    .vega-vis-wrapper > div {
                        position: relative;
                    }
                </style>
                <div class="flex-wrap">
                <div id="%s">
                    <div class="controls-wrapper">
                    <div class="control-bar">
                        <div class="button-wrapper">
                        <button onclick="window.%s.play('%s')">Replay</button>
                        </div>
                        <div class="slider-wrapper">
                        <input
                            class="slider"
                            type="range"
                            min="0"
                            value="0"
                            onchange="window.%s.onSlide('%s')"
                        />
                        </div>
                    </div>
                    <div class="description"></div>
                    </div>
                    
                    <div class="vega-vis-wrapper">
                    <div class="vega-for-axis"></div>
                    <div class="vega-other-layers"></div>
                    <div class="vega-vis"></div>
                    </div>
                </div>
                </div>
                `));

                require(['d3', 'vega', 'vega-util', 'vega-lite', 'vega-embed', 'gemini', 'app', 'utils', 'layout', 'config', 'hack-facet-view'], function(d3, vega, vegaUtil, vegaLite, vegaEmbed, gemini, app, utils, layout, config, hackFacetView) {
                    window.d3 = d3
                    window.vegaEmbed = vegaEmbed
                    window.gemini = gemini
                    window.%s = App("%s", {specs: %s, autoPlay: true});
                });            
            })(element);
        """ % (app, app, app, app, app, app, app, json.dumps(self.specs()))))

        # returns an object with the final output along with the internal states and operations
        return Datamation(self._states, self._operations, self)
