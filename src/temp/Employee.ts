import Person from "./Person";

export default class Employee extends Person {

    setAge(age: number) {
        if (age < 18) throw new Error("A pessoa deve ser maior de 18 anos");
        super.setAge(age);
    }
}