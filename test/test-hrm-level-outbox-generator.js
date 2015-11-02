var generator = require('../index.js'),
    levels = require('hrm-level-data');

levels.forEach(function (level) {
    exports['test' + level.number] = function (test) {
        if (!level.cutscene) {
            var outbox = generator.generate(level.number, level.examples[0].inbox);

            test.deepEqual(outbox, level.examples[0].outbox);
        }

        test.done();
    };
});
