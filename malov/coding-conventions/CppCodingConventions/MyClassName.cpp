#include "stdafx.h"
#include "MyClassName.h"


// ���������� ������������ ������
CMyClassName::CMyClassName()
	:m_memberVariable(10)// ��� ������������� ����� ������ � ������������ ������������ ������ �������������
{
}

// ���������� ����������� ������
CMyClassName::~CMyClassName()
{
}

void CMyClassName::DoSomething(int parameterName, int someAnotherMethodName)
{
	m_memberVariable += parameterName + someAnotherMethodName * 2;
}

int CMyClassName::SomeProtectedMethod(int someParameter)const
{
	return m_memberVariable + someParameter;
}
