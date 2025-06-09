const fnB = require("./index.js");

function fnA(n) {
    const $ = new Set(n),
        o = (f, z) => z.has(f - 1);
    let __ = 0;

    function __$(a, b) {
        let $$ = a,
            $$$ = 1;
        (function () {
            while (b.has($$ + 1)) $$++, $$$++;
        })();
        return $$$;
    }

    [...$].forEach((_) => {
        __ = !o(_, $) ? Math.max(__, __$(_, $)) : __;
    });

    return __;
}

const testArrays = [
    [100, 4, 200, 1, 3, 2],
    [1, 2, 0, 1],
    [9, 1, 4, 7, 3, -1, 2, 0, 8, 6],
    [5, 2, 99, 100, 3, 4, 1, 98],
    [10, 5, 11, 20, 3, 12, 4, 13],
    [15, 14, 1, 13, 12, 10, 11],
    [1, 3, 5, 7, 9, 2, 4, 6, 8],
    [50, 51, 52, 53, 54, 55, 56],
    [100, 102, 101, 105, 104, 103],
    [5, 5, 3, 1, 2, 4, 6],
    [-1, -2, -3, -4, -5, -6],
    [10, 11, 12, 15, 16, 17, 13, 14, 18],
    [1, 9, 3, 10, 2, 4, 20, 19, 18, 17, 5],
    [100, 101, 102, 1, 2, 3, 4, 0],
    [0, 1, -1, -2, 10, 12, 11, -3, -4],
];

function $v() {
    const exit = (m) => (console.log(m), process.exit(0));
    const cErr = (i, e, a) =>
        console.error(
            "\n" +
                `Input: ${i}` +
                "\n" +
                `Expected: ${e}` +
                "\n" +
                `Actual: ${a}`,
        );

    let failedTests = [];

    (() => {
        for (const _ of testArrays) {
            const fA = fnA(_),
                fB = fnB(_);
            if (fB !== fA) {
                failedTests.push({
                    input: _,
                    expected: fA,
                    actual: fB
                });
            }
        }
    })();

    if (failedTests.length > 0) {
        console.error(`\nFound ${failedTests.length} failing test(s):`);
        failedTests.forEach(test => {
            cErr(test.input.toString(), test.expected, String(test.actual));
        });
        exit("Tests failed.");
    }
    
    exit("All tests passed!");
}

$v();
