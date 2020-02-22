function test(x) {
    return x*x;
}

document.write(test(10));

function test_two(y) {
    alert(y*y*y);
}

test_two(test(4));