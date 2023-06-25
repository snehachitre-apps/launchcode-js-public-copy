function gradeLabs(labs) {
  for (let i = 0; i < labs.length; i++) {
    let lab = labs[i];
    let result = '';
    try {
      result = lab.runLab(3);
      console.log(`${lab.student} code worked: ${result === 27}`);
    }
    catch (err) {
      result = "Error thrown";
      console.log(`${result}`);
      console.log(`For object ${lab.student} is throwing error as above: \n ${err}. Please check object properties.`);

    }

  }
}

let studentLabs = [
  {
    student: 'Carly',
    runLab: function(num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Erica',
    runLab: function(num) {
      return num * num;
    }
  }
];

let studentLabs2 = [
  {
    student: 'Blake',
    myCode: function(num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Jessica',
    runLab: function(num) {
      return Math.pow(num, num);
    }
  },
  {
    student: 'Mya',
    runLab: function(num) {
      return num * num;
    }
  }
];


gradeLabs(studentLabs);
gradeLabs(studentLabs2);