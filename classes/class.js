class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }
}

class Manager extends Employee {
    constructor(name, salary, department, bonus) {
        super(name, salary);
        this.department = department;
        this.bonus = bonus;
    }

    getAnnualSalary() {
        return (this.salary * 12) + this.bonus;
    }
}

const manager1 = new Manager('Alice', 5000, 'Sales', 10000);
const manager2 = new Manager('Bob', 6000, 'Marketing', 12000);

console.log(`Годовая зарплата ${manager1.name}: $${manager1.getAnnualSalary()}`);
console.log(`Годовая зарплата ${manager2.name}: $${manager2.getAnnualSalary()}`);
