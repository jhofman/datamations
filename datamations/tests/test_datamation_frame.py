# Copyright (c) Microsoft Corporation
# 
import os, json
from datamations import *
from pytest import approx

def test_datamation_frame_groupby():
    df = small_salary().df
    df = DatamationFrame(df)

    grouped = df.groupby('Work')

    assert 'groupby' in grouped.operations
    assert df.equals(grouped.states[0])
    

def test_datamation_frame_specs():
    df = small_salary().df
    df = DatamationFrame(df)

    specs = df.groupby('Degree').mean().specs()

    script_dir = os.path.dirname( __file__ )
    specs_file = open(os.path.join(script_dir, 'specs/raw_spec.json'), 'r')

    for i, spec in enumerate(json.load(specs_file)):
        for key in spec:
            if key == 'data':
                for j, val in enumerate(spec['data']['values']):
                    assert val == approx(specs[i]['data']['values'][j])
            else:
                if  key == 'layer':
                    for j, encoding in enumerate(spec["layer"]):
                        for field in encoding:
                            if field == 'encoding':
                                for val in encoding[field]:
                                    print(val)
                                    assert encoding[field][val] == specs[i][key][j][field][val]
                            else:
                                assert encoding[field] == specs[i][key][j][field]
                else:                    
                    assert spec[key] == specs[i][key] 

def test_datamation_frame_datamation_sanddance():
    df = small_salary().df
    df = DatamationFrame(df)

    datamation = df.groupby('Work').mean().datamation_sanddance()

    assert len(datamation.states) == 2
    assert len(datamation.operations) == 2
    
    assert df.equals(datamation.states[0])
    assert isinstance(datamation.states[1], DatamationGroupBy)

    assert 'groupby' == datamation.operations[0]
    assert 'mean' == datamation.operations[1]

    assert isinstance(datamation.output, DatamationFrame)

    assert datamation.output.Salary.Academia == 85.01222196154829
    assert datamation.output.Salary.Industry == 91.48376118136609

    assert 'Salary' in str(datamation)
    