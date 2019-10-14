@echo off
:: ��� ������� ������� ���� �������� bat-����� ���� � ����������� ���������

:: � ���������� PROGRAM ������� ���� � ���������
set PROGRAM="%~1"


:: ���� � ����� � ��������� ������� ���������
set OUT="%TEMP%\out.txt"

:: ��������� ��� �� ������ �����
%PROGRAM% < "%~dp0Boris.txt" > %OUT% || goto err
:: ���������� ���������� ����� � ������� ��������� � ������
:: ���� ��� �� �����, ��������� �� ������ err
fc %OUT% "%~dp0Boris-out.txt" || goto err

:: ��������� ��� �� ���������� ����
%PROGRAM% < "%~dp0HarryPotter.txt" > %OUT% || goto err
fc %OUT% "%~dp0HarryPotter-out.txt" || goto err

:: ��������� ������ ���
%PROGRAM% < "%~dp0Empty.txt" > %OUT% || goto err
fc %OUT% "%~dp0Empty-out.txt" || goto err

echo All tests passed
exit /B 0

:err
echo Program testing failed
exit /B 1
