alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = parseInt(Math.random()* 100 + 1 );
console.log(numeroSecreto);
let chute;
let tentativas = 1;

//enquanto o chute não for igual a numero secreto//
while (chute != numeroSecreto) {
    chute = prompt('Escolha um número entre 1 e 100');
    //se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O numero secreto é menor que ${chute}`);
        } else {
            alert(`O numero secreto é maior que ${chute}`);
        }
        // tentativas = tentativas + 1;
        tentativas++
    }
}
let palavraTentativa = tentativas > 1? 'tentativas': 'tentativa';
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);
// if (tentativas > 1) {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
// } else {
//     alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
// }

//shift + alt + f arruma o código//

//acabamos de usar um precesso para concatenar, que é quando juntar algo a uma string, como uma váriavel ou outra string//

// Ctrl + K e depois Ctrl + C tranforma em texto, se quiser mudar de volta é Ctrl + K e depois Ctrl U