var b = require('bonescript');
b.analogRead('P9_36', printStatus);
function printStatus(x) {
    console.log('x.value = ' + x.value);
    console.log('x.err = ' + x.err);
    console.log('voltage='+(x.value*1800)+' mV');
    console.log('that is '+(x.value*1800/10-50)+' Celsius');
}
