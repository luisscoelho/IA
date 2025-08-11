const nomes = ["Arthur", "aldric I", "Balduino III", "Eamon II", "Leontius I", "Theodoro I", "Gabriel"];

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)