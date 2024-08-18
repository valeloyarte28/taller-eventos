document.getElementById('miDiv').addEventListener('click', function() {
    alert('¡Hola! Soy el div');
});

document.querySelector('button').addEventListener('click', function(event) {
    event.stopPropagation();
    alert('¡Hola!');
});