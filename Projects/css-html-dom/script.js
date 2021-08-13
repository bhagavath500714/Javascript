const paragraph = document.getElementById('text');

function myFunction() {
    let font = document.getElementById('select').value;

    switch(font) {
        case 'arial':
            paragraph.style.fontFamily='arial';
        break;
        case 'monnspace':
            paragraph.style.fontFamily='monnspace';
        break;
        case 'georiga':
            paragraph.style.fontFamily='georiga';
        break;
        case 'default':
            paragraph.style.fontFamily='';
        break;
    }
}

const yellow = document.getElementById('yellow');

yellow.addEventListener('click', function() {
    paragraph.style.color='yellow';
})