function foo() {
    let a = 2

    function bar() {
        let b = 4
        function baz() {
            let c = 6
            console.log(a, b, c);
        }
        baz()
        console.log(a, b);
    }
    bar()
    console.log(a);
}
foo()