// Establecer la comunicación

let socket = io();
socket.on('connect', function() {
    console.log('Conectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Se perdio la conexión con el servidor');
});


let searchParams = new URLSearchParams(window.location.search);

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw new Error('El escritorio es necesario');
}

let escritorio = searchParams.get('escritorio');
let label = $('#lblAtendiendoTicket');

$('#lblEscritorio').text('Escritorio: ' + escritorio);

$('button').on('click', function() {

    socket.emit('atenderTicket', { escritorio: escritorio }, function(resp) {
        console.log(resp);
        if (resp !== 'No hay tickets') {
            label.text('ticket ' + resp.numero);
        } else {
            alert(resp);
            label.text(resp);
        }

    });

});