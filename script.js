
const input = `3
3
100 80 90
4
100 120 30 50
4
100 90 30 25
`.split("\n")

const gets = () => input.shift()

let totalClientes,senhas,filaOriginal,filaOrdenada,x, contador
var totalCasos = gets();
for (let i = 0; i < totalCasos; i++) {

    totalClientes = gets();
    senhas = gets();
    /*as senhas serão separadas e armazenadas em um array*/
    filaOriginal = senhas.split(" ");

    /*as senhas serão ordenadas em ordem crescente (uso do sort()) e 
    depois  listado em ordem decrescente (uso do reverse())*/
    filaOrdenada = senhas.split(" ").sort((a, b) => a - b).reverse();

    /*o loop é para verificar os clientes que nao precisaram trocar de lugar mesmo após a fila ser reordenada*/
    x = 0;
    contador = 0;
    while (x < totalClientes) {
        if (filaOriginal[x] == filaOrdenada[x]) contador++;
        x++;
    }
    console.log(contador);
}