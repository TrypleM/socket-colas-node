// Comando para establecer la conexion
let socket = io();

let label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexión con el servidor');
});

$('button').on('click', function() {
    console.log('Click');
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});

socket.on('estadoActual', function(resp) {
    label.text(resp.actual);
});