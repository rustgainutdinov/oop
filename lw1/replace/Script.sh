npm run build

./replace $(cat tests/errorArgumentsNum.txt) > tests/test1.txt
if cmp tests/test1.txt tests/correctOut.txt ;
then
    echo "Error test arguments num"; exit 1
else
    echo "Success test arguments num"
fi

./replace $(cat tests/errorInFile.txt) > tests/test2.txt
if cmp tests/test2.txt tests/correctOut.txt ;
then
    echo "Error test in file"; exit 1
else
    echo "Success test in file"
fi

./replace $(cat tests/correctIn.txt) > tests/test3.txt
if cmp tests/test3.txt tests/correctOut.txt ;
then
    echo "Success test correct in"
else
    echo "Error test correct in"; exit 1
fi

./replace $(cat tests/correctIn1.txt) > tests/test4.txt
if cmp tests/test4.txt tests/correctOut.txt ;
then
    echo "Success test correct in"
else
    echo "Error test correct in"; exit 1
fi
