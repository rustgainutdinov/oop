npm run build

./radix $(cat tests/testIn1.txt) > tests/testOut1.txt
if cmp tests/testOut1.txt tests/testResult1.txt ;
then
    echo "Success arguments num"
else
    echo "Error arguments num"; exit 1
fi

./radix $(cat tests/testIn2.txt) > tests/testOut2.txt
if cmp tests/testOut2.txt tests/testResult2.txt ;
then
    echo "Success test"
else
    echo "Error test"; exit 1
fi

./radix $(cat tests/testIn3.txt) > tests/testOut3.txt
if cmp tests/testOut3.txt tests/testResult3.txt ;
then
    echo "Success test"
else
    echo "Error test"; exit 1
fi

./radix $(cat tests/testIn4.txt) > tests/testOut4.txt
if cmp tests/testOut4.txt tests/testResult4.txt ;
then
    echo "Success max val test"
else
    echo "Error max val test"; exit 1
fi

./radix $(cat tests/testIn5.txt) > tests/testOut5.txt
if cmp tests/testOut5.txt tests/testResult5.txt ;
then
    echo "Success zero test"
else
    echo "Error zero test"; exit 1
fi

./radix $(cat tests/testIn6.txt) > tests/testOut6.txt
if cmp tests/testOut6.txt tests/testResult6.txt ;
then
    echo "Success max val test"
else
    echo "Error max val test"; exit 1
fi

./radix $(cat tests/testIn7.txt) > tests/testOut7.txt
if cmp tests/testOut7.txt tests/testResult7.txt ;
then
    echo "Success negative number test"
else
    echo "Error negative number test"; exit 1
fi
