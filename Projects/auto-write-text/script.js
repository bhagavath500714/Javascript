const content = document.getElementById('container');
const text = 'My viewers text swithch...';

let index = 0;

function writeText() {
    content.innerText = text.slice(0, index);

    index++;

    if (index > text.length) {
        index = 0;
    }
}

setInterval(writeText, 200);