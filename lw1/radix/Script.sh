npm run build

./replace $(cat tests/testIn1.txt) > tests/testOut1.txt
if cmp tests/testOut1.txt tests/testResult1.txt ;
then
    echo "Success arguments num"; exit 1
else
    echo "Error arguments num"
fi
