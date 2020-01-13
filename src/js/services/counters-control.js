const counterUp = require('counterup2').default;

const counters = document.getElementsByClassName('counter');

for (let i = 0; i < counters.length; i++) {
    counterUp(counters[i], {
        duration: 2000,
        delay: 16
    });
}
