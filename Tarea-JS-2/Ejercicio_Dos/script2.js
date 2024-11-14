document.getElementById('texto').addEventListener('keyup', caracteres);

function caracteres(){
    let cantidad = document.getElementById('texto').value.length;
    let usados = 0 + parseInt(cantidad);
    document.getElementById('caracteres').innerHTML = usados;
    if (cantidad == 40) {
        alert(`${cantidad}`);
    }
}