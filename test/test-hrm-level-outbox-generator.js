var generator = require('../index.js');

exports.test1 = function (test) {
    var outbox = generator.generate(1, [ 1, 9, 4 ]);

    test.deepEqual(outbox, [ 1, 9, 4 ]);
    test.done();
};

exports.test2 = function (test) {
    var outbox = generator.generate(2, [ 'B', 'O', 'O', 'T', 'S', 'E', 'Q' ]);

    test.deepEqual(outbox, [ 'B', 'O', 'O', 'T', 'S', 'E', 'Q' ]);
    test.done();
};

exports.test3 = function (test) {
    var outbox = generator.generate(3, [ -99, -99, -99, -99 ]);

    test.deepEqual(outbox, [ 'B', 'U', 'G' ]);
    test.done();
};

exports.test6 = function (test) {
    var outbox = generator.generate(6, [ 3, 3, 1, 4, -3, 5, 0, -1 ]);

    test.deepEqual(outbox, [ 6, 5, 2, -1 ]);
    test.done();
};

exports.test7 = function (test) {
    var outbox = generator.generate(7, [ 8, 0, -4, 'A', 0, 0, 9, 0 ]);

    test.deepEqual(outbox, [ 8, -4, 'A', 9 ]);
    test.done();
};

exports.test8 = function (test) {
    var outbox = generator.generate(8, [ 7, -5, 5, 0 ]);

    test.deepEqual(outbox, [ 21, -15, 15, 0 ]);
    test.done();
};

exports.test9 = function (test) {
    var outbox = generator.generate(9, [ 2, 0, 1, 'B', 0, 0, 6, 0 ]);

    test.deepEqual(outbox, [ 0, 0, 0, 0 ]);
    test.done();
};

exports.test10 = function (test) {
    var outbox = generator.generate(10, [ 2, -1, 3, 0 ]);

    test.deepEqual(outbox, [ 16, -8, 24, 0 ]);
    test.done();
};

exports.test11 = function (test) {
    var outbox = generator.generate(11, [ 4, 5, 8, 4, -9, -9, 5, -3 ]);

    test.deepEqual(outbox, [ 1, -1, -4, 4, 0, 0, -8, 8 ]);
    test.done();
};

exports.test12 = function (test) {
    var outbox = generator.generate(12, [ 2, -6, 5, 0 ]);

    test.deepEqual(outbox, [ 80, -240, 200, 0 ]);
    test.done();
};

exports.test14 = function (test) {
    var outbox = generator.generate(14, [ 4, 9, -8, -4, 9, 9, -6, -3 ]);

    test.deepEqual(outbox, [ 9, -4, 9, -3 ]);
    test.done();
};

exports.test29 = function (test) {
    var outbox = generator.generate(29, [ 7, 3, 3, 8, 8 ]);

    test.deepEqual(outbox, [ 'L', 'E', 'E', 'Y', 'Y' ]);
    test.done();
};

exports.test40 = function (test) {
    var outbox = generator.generate(40, [ 13, 18, 11 ]);

    test.deepEqual(outbox, [ 13, 2, 3, 3, 11 ]);
    test.done();
};
