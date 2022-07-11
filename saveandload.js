function save() { 
    localStorage.setItem('poin', JSON.stringify(poin));
    localStorage.setItem('bensin', JSON.stringify(bensin));
}

function load() {
    poins = JSON.parse(localStorage.getItem('poin'));
    bensin = JSON.parse(localStorage.getItem('bensin'));
}