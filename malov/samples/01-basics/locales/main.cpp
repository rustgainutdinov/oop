#include <iostream>
#include <string>
#include <windows.h>
#include <corecrt_io.h>
#include <fcntl.h>


using namespace std;

int main()
{
	SetConsoleOutputCP(1251);
	SetConsoleCP(1251);
	{
		string name;
		cout << "������� ���� ���> ";
		getline(cin, name);
		cout << "������, " << name << endl;
	}

	_setmode(_fileno(stdout), _O_U16TEXT);
	_setmode(_fileno(stdin), _O_U16TEXT);
	{
		wstring name;
		wcout << L"������� ���� ���> ";
		getline(wcin, name);
		wcout << L"������, " << name << endl;

	}
	return 0;
}