set program="%~1"

%program% > %temp%\hello.txt 
if ERRORLEVEL 1 goto err
fc.exe %temp%\hello.txt expected-output.txt
if ERRORLEVEL 1 goto err

rem ���� ������� � ������ ������
echo Program testing succeeded
rem �������� ���������� ��������� (Visual Studio) �� ������
exit /B 0

rem ���� ������� � ������ ������
err:
echo Program testing failed
rem �������� ���������� ��������� (Visual Studio) � �������
exit /B 1