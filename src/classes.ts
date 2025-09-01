/*
    Modificadores de acesso:
    - public    => pode ser acessado de qualquer lugar (dentro da classe, em classes que herdam dela e também fora dela).
    - protected => pode ser acessado somente dentro da própria classe e em classes filhas (que a estendem).
    - private   => pode ser acessado somente dentro da própria classe (nem mesmo classes filhas têm acesso).
*/

/*
    Se for importar essa classe em outro arquivo, deve ser utilizado:
    export class User {}
*/
class User {
    /*
        readonly:
        - não permite que a propriedade seja alterada após definida no construtor.
    */
    public readonly firstName: string;
    public readonly lastName: string;
    public age: number;

    /*
        constructor:
        - recebe e inicializa as propriedades da classe.
        - O TypeScript permite simplificar a declaração das propriedades
          diretamente no construtor:
            constructor(public firstName: string, public lastName: string, public age: number) {}
          Mas neste exemplo, vamos manter a forma explícita.
    */
    constructor(firstName: string, lastName: string, age: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    /*
        Metodo público da classe para recuperar o nome completo.
    */
    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}
const user = new User('Abraão', 'Ribeiro', 23);
console.log('User: ' + user.getFullName());

/*
    Herança:
    - Definindo a classe Admin que estende de User.
    - As propriedades e o construtor são herdados de User.
*/
class Admin extends User {
    /*
         Sobrescrevendo o metodo getFullName para adicionar o prefixo 'Admin'.
         Aqui utilizamos o metodo da classe pai (User) com o super.
     */
   public getFullName(): string {
       return 'Admin. ' + super.getFullName();
   }
}

const admin = new Admin('Abraão', 'Ribeiro', 23);
console.log(admin.getFullName());