function StudentDetails(name, roll_no, className, section, marks) {
    this.name = name;
    this.roll_no = roll_no;
    this.class = className;
    this.section = section;
    this.marks = marks;
  }

   // Example usage:
   var student = new StudentDetails(
    "Himanshu",
     111,
    "10th",
    "A",
    {
      science: 90,
      maths: 70,
      social_science: 80,
      hindi: 70,
      english: 85,
    }
  );

  student.printTop3Subjects = function() {
    var sortedSubjects = Object.keys(this.marks).sort(function(a, b) {
      return this.marks[b] - this.marks[a];
    }.bind(this));
  
    var top3Subjects = sortedSubjects.slice(0, 3);
  
    console.log("Top three subjects:");
    top3Subjects.forEach(function(subject) {
      console.log(subject);
    });
  };

  student.printReportCard = function() {
    console.log("+--------------------+");
    console.log("|     REPORT CARD    |")
    console.log("|Name     - ", this.name +"|");
    console.log("|Roll no. - ", this.roll_no +"|");
    console.log("|Class    - ", this.class+"|");
    console.log("|Section  - ", this.section+"|");
    console.log("Marks:"+"|");
    for (var subject in this.marks) {
      console.log("|"+subject + " - ", this.marks[subject]+"|");
    }
  
    var totalMarks = Object.values(this.marks).reduce(function(acc, curr) {
      return acc + curr;
    }, 0);
    var percentage = (totalMarks / (Object.keys(this.marks).length * 100)) * 100;
  
    console.log("|Percentage - ", percentage.toFixed(2) + "%"+"|");
  };
  
   

  
  student.printTop3Subjects();
  student.printReportCard();
