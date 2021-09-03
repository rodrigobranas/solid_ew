export default class Person {
    age: number;

    constructor () {
        this.age = 0;
    }

    setAge(age: number) {
        if (age < 0) throw new Error("Idade inválida, a idade deve ser maior que zero");
        this.age = age;
    }
}