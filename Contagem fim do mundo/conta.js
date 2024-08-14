while (true) {
    let contador = prompt('Escolha um número menor que 10 para subir até 10');
    if (contador > 10) {
        alert('Faz o negócio certo seu pamonha')
    }

    while (contador <= 10) {
        alert(`O contador está em ${contador}`);
        contador++;

    }
    
}