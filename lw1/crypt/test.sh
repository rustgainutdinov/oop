npm run build

./crypt crypt files/test.txt > files/argumentsTest.txt
if cmp files/argumentsTest.txt files/argumentsTestResult.txt ;
then
    echo "Success arguments num"
else
    echo "Error arguments num"; exit 1
fi

./crypt crypt files/test.txt files/testCrypt.txt 126
./crypt decrypt files/testCrypt.txt files/testDeCrypt.txt 126
if cmp files/test.txt files/testDeCrypt.txt ;
then
    echo "Success decrypt test"
else
    echo "Error decrypt test"; exit 1
fi

./crypt decrypt ./files/google.bin ./files/googleDeCrypt.jpg 463 > files/keyTest.txt
if cmp files/keyTest.txt files/keyTestResult.txt ;
then
    echo "Success decrypt test"
else
    echo "Error decrypt test"; exit 1
fi



./crypt crypt files/google.png files/google.bin 63
./crypt decrypt files/google.bin files/googleDeCrypt.jpg 63
if cmp files/test.txt files/testDeCrypt.txt ;
then
    echo "Success decrypt test"
else
    echo "Error decrypt test"; exit 1
fi
