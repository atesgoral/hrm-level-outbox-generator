var generator = require('../index.js'),
    levels = require('hrm-level-data');

levels.forEach(function (level) {
    exports['test' + level.number] = function (test) {
        var outbox = generator.generate(level.number, level.expect[0].inbox);

        if (outbox) { // @todo Temporary, until all generators are ready
            test.deepEqual(outbox, level.expect[0].outbox);
        }
        test.done();
    };
});
