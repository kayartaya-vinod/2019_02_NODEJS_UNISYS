class Person {

    constructor(name, city = 'Bangalore') {
        this.name = name;
        this.city = city;
    }

    print() {
        console.log('Name = ', this.name);
        console.log('City = ', this.city);
    }

    toString() {
        return `${this.name} lives in ${this.city}.`;
    }
}

let p1 = new Person();
let p2 = new Person('Vinod');
let p3 = new Person('John', 'Dallas');

[p1, p2, p3].forEach(p => p.print());
[p1, p2, p3].forEach(p => console.log('' + p));


class Employee extends Person {

    constructor(id, name, city, salary = 25000) {
        // must call super class constructor
        super(name, city);
        this.id = id;
        this.salary = salary;
    }

    print() {
        console.log('Id = ', this.id);
        super.print();
        console.log('Salary = Rs.', this.salary)
    }
}

console.log('--------------------------');

let e1 = new Employee(7788, 'Shyam', 'Bangalore');
e1.print();