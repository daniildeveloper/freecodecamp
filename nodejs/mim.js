var mim = require("./make-it-modular.js");

var callback = function (err, list) {
    if (err) throw err;
    list.forEach(function (file) {
        console.log(file);
    });
};

mim(process.argv[2], process.argv[3], callback);