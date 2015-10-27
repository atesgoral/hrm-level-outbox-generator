var pf = require('quick-primefactors'),
    levels = require('hrm-level-data');

var tilesForLevel = {};

levels.forEach(function (level) {
    tilesForLevel[level.number] = level.floor && level.floor.tiles;
});

var generators = {
    /*** Mail Room ***/
    '1': function (inbox) {
        // Direct copy
        return inbox.slice(0);
    },
    /*** Busy Mail Room ***/
    '2': function (inbox) {
        // Direct copy
        return inbox.slice(0);
    },
    /*** Copy Floor ***/
    '3': function () {
        // Hard-coded
        return [ "B", "U", "G" ];
    },
    /*** Scrambler Handler ***/
    '4': function (inbox) {
        // Output each pair with the items sorted in reverse order
        var outbox = [];

        for (var i = 0; i < inbox.length; i += 2) {
            Array.prototype.push.apply(outbox, [ inbox[i], inbox[i + 1] ].sort(function (a, b) {
                return a === b
                    ? 0
                    : a < b
                        ? 1
                        : -1;
            }));
        }

        return outbox;
    },
    /*** Rainy Summer ***/
    '6': function (inbox) {
        // Output the sum of each pair
        var outbox = [];

        for (var i = 0; i < inbox.length; i += 2) {
            outbox.push(inbox[i] + inbox[i + 1]);
        }

        return outbox;
    },
    /*** Zero Exterminator ***/
    '7': function (inbox) {
        // Filter out zeros
        return inbox.filter(function (item) {
            return item !== 0;
        });
    },
    /*** Tripler Room ***/
    '8': function (inbox) {
        // Multiply the numbers by 3
        return inbox.map(function (item) {
            return item * 3;
        });
    },
    /*** Zero Preservation Initiative ***/
    '9': function (inbox) {
        // Preserve zeros
        return inbox.filter(function (item) {
            return item === 0;
        });
    },
    /*** Octoplier Suite ***/
    '10': function (inbox) {
        // Multiply the numbers by 8
        return inbox.map(function (item) {
            return item * 8;
        });
    },
    /*** Sub Hallway ***/
    '11': function (inbox) {
        // Output difference of each pair, both ways
        var outbox = [];

        for (var i = 0; i < inbox.length; i += 2) {
            outbox.push(inbox[i + 1] - inbox[i], inbox[i] - inbox[i + 1]);
        }

        return outbox;
    },
    /*** Tetracontiplier ***/
    '12': function (inbox) {
        // Multiply the numbers by 40
        return inbox.map(function (item) {
            return item * 40;
        });
    },
    /*** Equalization Room ***/
    '13': function (inbox) {
        // Output one of equal pairs
        var outbox = [];

        for (var i = 0; i < inbox.length; i += 2) {
            if (inbox[i] === inbox[i + 1]) {
                outbox.push(inbox[i]);
            }
        }

        return outbox;
    },
    /*** Maximization Room ***/
    '14': function (inbox) {
        // Output the maximum of each pair
        var outbox = [];

        for (var i = 0; i < inbox.length; i += 2) {
            outbox.push(Math.max(inbox[i], inbox[i + 1]));
        }

        return outbox;
    },
    /*** Absolute Positivity ***/
    '16': function (inbox) {
        // Output absolute values
        return inbox.map(Math.abs);
    },
    /*** Exclusive Lounge ***/
    '17': function (inbox) {
        // For each pair, output 1 if the signs are the same, 0 if different
        var outbox = [];

        for (var i = 0; i < inbox.length; i += 2) {
            outbox.push(inbox[i] * inbox[i + 1] < 0 ? 1 : 0);
        }

        return outbox;
    },
    /*** Countdown ***/
    '19': undefined,
    /*** Multiplication Workshop ***/
    '20': undefined,
    /*** Zero Terminated Sum ***/
    '21': undefined,
    /*** Fibonacci Visitor ***/
    '22': undefined,
    /*** The Littlest Number ***/
    '23': undefined,
    /*** Mod Module ***/
    '24': undefined,
    /*** Cumulative Countdown ***/
    '25': undefined,
    /*** Small Divide ***/
    '26': undefined,
    /*** Three Sort ***/
    '28': undefined,
    /*** Storage Floor ***/
    '29': function (inbox) {
        var tiles = tilesForLevel[29];

        // Lookup floor tiles
        return inbox.map(function (item) {
            return tiles[item];
        });
    },
    /*** String Storage Floor ***/
    '30': undefined,
    /*** String Reverse ***/
    '31': undefined,
    /*** Inventory Report ***/
    '32': undefined,
    /*** Vowel Incinerator ***/
    '34': undefined,
    /*** Duplicate Removal ***/
    '35': undefined,
    /*** Alphabetizer ***/
    '36': undefined,
    /*** Scavenger Chain ***/
    '37': undefined,
    /*** Digit Exploder ***/
    '38': undefined,
    /*** Re-Coordinator ***/
    '39': undefined,
    /*** Prime Factory ***/
    '40': function (inbox) {
        // Output prime factors smallest to largest of each number
        var outbox = [];

        inbox.forEach(function (item) {
            Array.prototype.push.apply(outbox, pf(item));
        });

        return outbox;
    },
    /*** Sorting Floor ***/
    '41': undefined
};

exports.generate = function (levelNumber, inbox) {
    var generator = generators[levelNumber];

    if (!generator) {
        return null;
    }

    return generator(inbox);
};
