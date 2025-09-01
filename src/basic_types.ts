// Number (inteiros/flutuantes)
let teste_number: number = 1;
teste_number = 1.5;

console.log('Number: ' + teste_number);

// String
let firstName: string = 'Abraão';
let lastName: string = 'Ribeiro';
let fullName: string = `${firstName} ${lastName}`;

console.log('String: ' + fullName);

// Boolean (verdadeiro/falso)
let active: boolean = true;

console.log('Boolean: ' + active);

// Enum
enum ROLES {
    MANAGER,
    ADMIN,
    CEO
}

console.log('Enum: ' + ROLES.ADMIN);

// Array
let dados1: Array<string> = ['A', 'B', 'C', 'D'];
let dados2: Array<number> = [1, 2, 3, 4, 5];
let dados3: Array<any> = [1, 'A', true, 1.5];

console.log('=== Arrays ===')
console.log(dados1);
console.log(dados2);
console.log(dados3);
