# Copyright (c) Microsoft Corporation
#

from datamations import small_salary

def test_small_salary(capsys):
    df = small_salary().df
    print(df.groupby('Work').mean(numeric_only=True))
    captured = capsys.readouterr()

    assert "Work" in captured.out
    assert "Salary" in captured.out
    assert "Academia" in captured.out
    assert "Industry" in captured.out
    assert "85.012222" in captured.out
    assert "91.483761" in captured.out
    