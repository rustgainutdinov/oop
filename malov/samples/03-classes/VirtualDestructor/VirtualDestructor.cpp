// VirtualDestructor.cpp : This file contains the 'main' function. Program execution begins and ends there.
//

#include "pch.h"
#include <iostream>
#include <memory>

using namespace std;

class Bad
{
	// ��� �� �������� ����������, ���������� ����������� ���
	// �� ���, ��� ���� �� ����� �������������
};

class BadChild : public Bad
{
public:
	~BadChild()
	{
		cout << "BadChild is destroyed\n";
	}
};

class Good
{
public:
	virtual ~Good() = default;
};

class GoodChild : public Good
{
public:
	// ��� ��� ������������� ��������� ���������� ����������,
	// �.�. �� ��� �������� ����������� � ������� ������
	~GoodChild()
	{
		cout << "GoodChild is destroyed\n";
	}
};

class GoodChild1 : public Good
{
	// ���� ��� � ��� ����������� ���� ���������, 
	// ���������� ����������� ��� �� ���, ��� ���� �� �����
	// ����������� (�.�. ���������� ������ Good �����������)
};

class NotSoGood : public Good
{
public:
	// �� �� ��������� �������������� ���������� ����� �����������
	// � ��� ���������� ������� ������������ �� ������ ������
	~NotSoGood() final
	{

	}
};


// �� ��������������, �.�. ���������� �� ������
// �������������� ��������� ���������� �������� ������
/*
class NotSoGoodChild : public NotSoGood
{

};
*/



class IDrawable
{
public:
	virtual void Draw() const = 0;

protected:
	~IDrawable() = default;
};

class Cat : public IDrawable
{
public:
	void Draw() const override
	{
		cout << "Cat is drawn\n";
	}
};

void DrawSomething(IDrawable* drawable)
{
	drawable->Draw();
	
	// Won't compile
	//delete drawable;
}

class NonInheritable final
{

};

// Won't compile because NonInheritable is final
/* 
class CantInheritFromNonInheritable : public NonInheritable
{

};
*/

int main()
{
	unique_ptr<Bad> bad(new BadChild());
	cout << "----\n";
	unique_ptr<Good> good(new GoodChild());

	Cat cat;
	DrawSomething(&cat);
}
