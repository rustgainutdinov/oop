npm run build

./invert > tests/out1.txt
if cmp tests/out1.txt tests/result1.txt ;
then
    echo "Success arguments num"
else
    echo "Error arguments num"; exit 1
fi

./invert tests/matrix.txt > tests/out2.txt
if cmp tests/out2.txt tests/result2.txt ;
then
    echo "Success matrix test"
else
    echo "Error matrix test"; exit 1
fi

./invert tests/matrix1.txt > tests/out3.txt
if cmp tests/out3.txt tests/result3.txt ;
then
    echo "Success matrix test"
else
    echo "Error matrix test"; exit 1
fi

./invert tests/matrix3.txt > tests/out4.txt
if cmp tests/out4.txt tests/result4.txt ;
then
    echo "Success matrix test"
else
    echo "Error matrix test"; exit 1
fi

./invert tests/matrix4.txt > tests/out5.txt
if cmp tests/out5.txt tests/result5.txt ;
then
    echo "Success matrix test"
else
    echo "Error matrix te"; exit 1
fi

./invert tests/matrix2.txt > tests/out6.txt
if cmp tests/out6.txt tests/result6.txt ;
then
    echo "Success matrix test"
else
    echo "Error matrix test"; exit 1
fi
