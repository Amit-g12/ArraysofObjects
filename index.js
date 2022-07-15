
let studentRecords = [
    {name: 'John', id: 123, marks : 98 },
    {name: 'Baba', id: 101, marks : 23 },
    {name: 'yaga', id: 200, marks : 45 },
    {name: 'Wick', id: 115, marks : 75 }]

//Q1. We are interested in retrieving only the name of the students and all the names should be in caps.
//Output : ['JOHN', 'BABA', 'YAGA', 'WICK'];

let newName = [];
let S = studentRecords.length;
for (let i = 0; i < S; i++)
{
    newName.push(studentRecords[i].name.toUpperCase());
}
console.log(newName);


// Qs 2: Suppose we have the same dataset as above but this time we want to get the details of students who scored more than 50 marks.

let toppers = studentRecords.filter(item => item.marks >= 50);
console.log(toppers);

// Question 3: Retrieve the details of students who scored more than 50 marks and have id greater than 120.

let studentId = [];
for(let i in studentRecords){
    if(studentRecords[i].marks > 50 && studentRecords[i].id > 120){
        studentId.push(studentRecords[i]);
    }
}
console.log(studentId);


// Question 4: Consider the same scenario we have discussed above, but this time we would like to know the sum total of the marks of the students.

// let sum = studentRecords.reduce((acc,curr) => acc += curr ,0);
let sum = 0;
for(let i=0;i<studentRecords.length;i++)
{

    sum += studentRecords[i].marks;
}
console.log(sum);

//Question5. This time we want to get only the names of the students who scored more than 50 marks from the same dataset used above.

let studentNames = studentRecords.filter(item => item.marks > 50).map(item => item.name);
console.log(studentNames);


//Qs 6: This time we are required to print the sum of marks of the students with id > 120.

let totalMarks = 0,
x = 0;

while(x < studentRecords.length){
    if(studentRecords[x].id > 120){
        totalMarks += studentRecords[x].marks;
    }
    x++;
}
console.log(totalMarks);


// Question 7: This time we are required to print the total marks of the students with marks greater than 50 after a grace of 15 marks has been added to those students who scored less than 50.

let graceAdded = 0;
for(let i in studentRecords){
    if(studentRecords[i].marks < 50){
        graceAdded += studentRecords[i].marks + 15;
    }
}
console.log(graceAdded);



//Q8. Create 6 objects,each object will have name, class, roll no as properties. Store these objects in an array of objects.

function Student(studentName, studentClass, studentRollno)
{
    this.studentName = studentName,
    this.studentClass = studentClass,
    this.studentRollno = studentRollno
}

const student1 = new Student('Gayathri',11,23);
console.log(student1);

const student2 = new Student('Iswarya',12,21);
console.log(student2);

const student3 = new Student('Sindhu',10,20);
console.log(student3);

const student4 = new Student('Arshiya',12,22);
console.log(student4);

const student5 = new Student('Ellen',11,22);
console.log(student5);

const student6 = new Student('Abhishek',11,20);
console.log(student6);