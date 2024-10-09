function getData() {
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').textContent = JSON.stringify(data, null, 2);
        })
    document.getElementById('div').style.height = '85vh'
}

function getHometown() {
    fetch('https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json')
        .then(response => response.json())
        .then(Object => {
            document.getElementById('output').textContent = "Cidade Natal: " + Object.Hometown;
        })
}