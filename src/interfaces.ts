/*
    Interface:
    - Define um contrato (pré-requisitos) que uma classe ou objeto deve seguir.
    - Não gera código JavaScript em tempo de execução, serve apenas para tipagem no TypeScript.
*/
interface PersonInterface {
    firstName: string;
    lastName: string;
    age: number;
}

/*
    Função que recebe um objeto que implemente PersonInterface
    e retorna uma string formatada.
*/
const getPerson = (person: PersonInterface): string => {
    return `Nome: ${person.firstName} ${person.lastName}, Idade: ${person.age}`;
}

// ===== Exemplo com objeto literal =====
const person: PersonInterface = {
    firstName: 'Abraão',
    lastName: 'Ribeiro',
    age: 23,
}
console.log(getPerson(person));


/*
    Classe que implementa a interface.
    - A classe é obrigada a possuir as propriedades definidas em PersonInterface.
*/
class Person implements PersonInterface {
    public firstName: string;
    public lastName: string;
    public age: number;

    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

// ===== Exemplo com classe =====
const person2 = new Person('Abraaão', 'Ribeiro', 23);
console.log(getPerson(person2));