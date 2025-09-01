// ========
// Formas de definir funções
// ========

function somar(a: number, b: number): number {
    return a + b;
}

const somar2 = (a: number, b: number): number => a + b;

console.log(somar(1, 4));
console.log(somar2(1, 4));