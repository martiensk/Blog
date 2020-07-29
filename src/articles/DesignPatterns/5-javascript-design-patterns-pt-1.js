import { type as Type, lang } from '../types';

export const FiveDesignPatternsPt1 = [
    {
        type: Type.Heading,
        heading: '5 JavaScript Design Patterns',
        subheading:
            'Every developer wants to write clean, structured and maintainable code.'
    },
    {
        type: Type.Paragraph,
        text:
            'Luckily for us, developers in the past have already overcome the problem and developed patterns we can adopt to structure our code in a way that is scalable and maintainable. Design patterns provide us with the combined experience of many previous developers and proves to be a crucial solution to the problem.' +
            ' Below you will find five design patterns explained to help you choose a pattern for future projects:'
    },
    {
        type: Type.List,
        items: [
            'Module Pattern',
            'Singleton Pattern',
            'Constructor Pattern',
            'Prototype Pattern',
            'Observer Pattern'
        ]
    },
    {
        type: Type.Heading,
        heading: 'Modular Pattern'
    },
    {
        type: Type.Paragraph,
        text: `As one of the most common design patterns in JavaScript today, the modular approach enables us to keep particular bits of code independent from the rest of the 
application. This is a similar approach to classes, for those familiar with OOP.`
    },
    {
        type: Type.Code,
        text: `const totalTracker = (function () {
 let total = 0;

 function add(amount) {
     total += amount;
 }

 function subtract(amount) {
     total -= amount;
 }

 function getTotal() {
     return total;
 }

 return {
     add,
     subtract,
     getTotal
 };
 })();

 totalTracker.add(10); // Adds 10

 totalTracker.subtract(7); // Subtracts 7

 totalTracker.getTotal(); // Returns 3`,
        language: lang.JavaScript
    },
    {
        type: Type.Paragraph,
        text:
            'In the above example a simple module is created to keep track of a number.'
    },
    {
        type: Type.Heading,
        heading: 'Singleton Pattern'
    },
    {
        type: Type.Paragraph,
        text: `A singleton pattern dictates that an object or class can only be instantiated once. If the object is not yet instantiated, it will create an instance of 
itself, thereafter returning a reference to the instance whenever it is called. Singletons are used whe a single service is required to service multiple endpoints, 
such as a database connection.`
    },
    {
        type: Type.Code,
        text: `class DatabaseConnection {
     constructor(data) {
         if (DatabaseConnection.exists) {
             return DatabaseConnection.instance;
         }

         DatabaseConnection.instance = this;
         DatabaseConnection.exists = true;
         this._data = data;
         return this;
     }

     getData() {
         return this._data;
     }

     close() {
         DatabaseConnection.instance = null;
     }
 }

 const database = DatabaseConnection('adapter');
 database.getData(); // Gets data
 database.close(); // Closes database`,
        language: lang.JavaScript
    },
    {
        type: Type.Heading,
        heading: 'Constructor Pattern'
    },
    {
        type: Type.Paragraph,
        text: `This pattern is one of the most commonly used patterns in the JavaScript world, and is designed to resemble Object Orientated Programming (OOP). It works
by defining an object with properties (attributes) and functions, and then instantiating the object via invoking a constructor function with the 'new' keyword.
As of ES6 JavaScript has support for classes, making this pattern even easier.`
    },
    {
        type: Type.Code,
        language: lang.JavaScript,
        text: `function Movie(title, director, rating) {
     this.title = title;
     this.director = director;
     this.rating = rating;
        
     this.getMovie = function () {
         return \`\${ title }, directed by \${ director }, has a rating of \${ rating }.\`;
     };
 }
        
 const shining = new Movie('The Shining', 'Stanley Kubrick', 5);
 const jurassic = new Movie('Jurassic Park', 'Steven Spielberg', 4.7);
        
 console.log(shining.getMovie()); // The Shining, directed by Stanley Kubrick, has a rating of 5.
 console.log(jurassic.getMovie()); // Jurassic Park, directed by Steven Spielberg, has a rating of 4.7.`
    },
    {
        type: Type.Heading,
        heading: 'Prototype Pattern'
    },
    {
        type: Type.Paragraph,
        text: `Here we use an existing object as a prototype for a new object that we create via cloning. This uses prototypical inheritance rather than object-orientated inheritance,
 and is particularly good for JavaScript due to JavaScript being a functional programming language. Prototypical inheritance is natively supported.`
    },
    {
        type: Type.Code,
        language: lang.JavaScript,
        text: `const animal = {
     type: 'mammal',
     sleep() {
         return 'sleeping';
     },
     eat() {
         return 'eating';
     }
 };

 const bear = Object.create(animal, { species: { value: 'bear' } });

 console.log(bear.__proto__ === animal); // true`
    },
    {
        type: Type.Heading,
        heading: 'Observer Pattern'
    },
    {
        type: Type.Paragraph,
        text: `The observer pattern relies on a series of one-to-many relationships between objects. One object, a publisher, will change it's state and thereby notify
 other objects, known as subscribers, of this change and they are thus updated. This pattern is generally data driven and in line with the MVC (Model-View-Controller)
  architecture. AngularJS and Vue are two popular libraries that rely on this pattern.`
    },
    {
        type: Type.Code,
        language: lang.JavaScript,
        text: `class Subject {
 constructor() {
     this.observers = [];
 }

 // Add an observer to this.observers.
 addObserver(observer) {
     this.observers.push(observer);
 }

 // Remove an observer from this.observers.
 removeObserver(observer) {
     const removeIndex = this.observers.findIndex((obs) => {
         return observer === obs;
     }); 

     if (removeIndex !== -1) {
         this.observers = this.observers.slice(removeIndex, 1);
     }
 }

 // Loops over this.observers and calls the update method on each observer.
 // The state object will call this method everytime it is updated.
 notify(data) {
     if (this.observers.length > 0) {
         this.observers.forEach((observer) => observer.update(data));
     }
 }`
    }
];
