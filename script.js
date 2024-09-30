const personForm = document.getElementById('personForm');
const personTable = document.getElementById('personTable').getElementsByTagName('tbody')[0];

document.getElementById('addPerson').addEventListener('click', function() {

    var nome = document.getElementById('nome').value;
    var cognome = document.getElementById('cognome').value;
    var email = document.getElementById('email').value;
    var dataNascita = document.getElementById('dataNascita').value;
    var telefono = document.getElementById('telefono').value;
    var paese = document.getElementById('paese').value;
    var provincia = document.getElementById('provincia').value;

    if (!nome && !cognome && !email && !dataNascita && !telefono && !paese && !provincia) {
        alert('Compila tutti i campi!');
    } else {
        const newRow = personTable.insertRow()
        
        nome.insertCell(0).innerHTML = nome;
        cognome.insertCell(1).innerHTML = cognome;
        email.insertCell(2).innerHTML = email;
        dataNascita.insertCell(3).innerHTML = dataNascita;
        telefono.insertCell(4).innerHTML = telefono;
        paese.insertCell(5).innerHTML = paese;
        provincia.insertCell(6).innerHTML = provincia;        
    }
});
