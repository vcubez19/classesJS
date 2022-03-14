function load() {


    class User {
        constructor(firstName, lastName, age, occupation) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.occupation = occupation;
        }
        userInfo() {
            return `${this.firstName} ${this.lastName}'s age is ${this.age}. Their occupation is ${this.occupation}`;
        }
    }


    let userOne = new User("Isabel", "Nutella", 19, "Student");
    let userTwo = new User("Vincent", "Cubit", 20, "Student");
    let userThree = new User("Ben", "Hill", 20, "Commercial sign installer");
    let userFour = new User("Jessica", "Neum", 21, "Student");


    document.getElementById("p1").innerText = userOne.userInfo();
    document.getElementById("p2").innerText = userTwo.userInfo();
    document.getElementById("p3").innerText = userThree.userInfo();
    document.getElementById("p4").innerText = userFour.userInfo();


}

