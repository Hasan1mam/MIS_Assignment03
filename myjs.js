function showFees ()  {
  var courses = parseInt( document.getElementById('totalCourses').value ) ; 
  var fees = parseInt (document.getElementById('feesPerCourse').value)  ;

  var total = courses * fees; 
  var discount ; 

  if (total > 50000) {
     discount = total * .20 ;
  }
 else if (total > 25000) {
     discount = total * .10;
 }
 else {
    discount = 0; 
  }
 var payable = total - discount; 
 document.getElementById('heading-style').style.visibility='visible';
 document.getElementById('show').innerText = "Total payable tuition fees: " + payable ; 

 }

 function show_grade(){
  var name = document.getElementById('name').value;
  var mark = parseInt (document.getElementById('marks').value);


  if (mark>= 90 && mark<=100){
    document.getElementById('Display').innerText = name + " ,You got an A";
  }
  else if (mark>= 85 && mark<=89){
    document.getElementById('Display').innerText = name + " ,You got an A-";
  }
  else if (mark>= 80 && mark<=84){
    document.getElementById('Display').innerText = name + " ,You got an B+";
  }
  else if (mark>= 75 && mark<=79){
    document.getElementById('Display').innerText = name + " ,You got an B";
  }
  else if (mark>= 70 && mark<=74){
    document.getElementById('Display').innerText = name + " ,You got an B-";
  }
  else if (mark>= 65 && mark<=69){
    document.getElementById('Display').innerText = name + " ,You got an C+";
  }
  else if (mark>= 60 && mark<=64){
    document.getElementById('Display').innerText = name + " ,You got an C";
  }
  else if (mark>= 55 && mark<=59){
    document.getElementById('Display').innerText = name + " ,You got an C-";
  }
  else if (mark>= 50 && mark<=54){
    document.getElementById('Display').innerText = name + " ,You got an D+";
  }
  else if (mark>= 45 && mark<=49){
    document.getElementById('Display').innerText = name + " ,You got an D";
  }
  else if (mark>= 0 && mark<=44){
    document.getElementById('Display').innerText = name + " ,You got an F";
  }


}
function Grade(){
  var Student_Name = document.getElementById('Name').value;
  var Student_Marks = parseFloat (document.getElementById('Mark').value);
  var grade;


  if (Student_Marks>= 90 && Student_Marks<=100){
    grade="A";
  }
  else if (Student_Marks>= 85 && Student_Marks<= 89){
    grade="A-";
  }
  else if (Student_Marks>= 80 && Student_Marks<=84){
    grade="B+";
  }
  else if (Student_Marks>= 75 && Student_Marks<=79){
    grade="B";
  }
  else if (Student_Marks>= 70 && Student_Marks<=74){
    grade="B-";
  }
  else if (Student_Marks>= 65 && Student_Marks<=69){
    grade="C+";
  }
  else if (Student_Marks>= 60 && Student_Marks<=64){
    grade="C";
  }
  else if (Student_Marks>= 55 && Student_Marks<=59){
    grade= "C-";
  }
  else if (Student_Marks>= 50 && Student_Marks<=54){
    grade="D+";
  }
  else if (Student_Marks>= 45 && Student_Marks<=49){
    grade="D";
  }
  else if (Student_Marks>= 0 && Student_Marks<=44){
    grade="F";
  }

  document.getElementById('Show').innerText = Student_Name + ", your grade is: "+grade;


}
function Discount(){
  var Student_Name =document.getElementById('Name').value;
  var Student_CGPA = parseFloat (document.getElementById('Grade').value);
  var Completed_Credit = parseInt (document.getElementById('Credit').value);
  var Discount=0;

if (Student_CGPA>3.5 && Completed_Credit>50){
  Discount=200*Completed_Credit;
}
else if (Student_CGPA>3.2 && Completed_Credit>40){
  Discount=150*Completed_Credit;
}
else if (Student_CGPA>3 && Completed_Credit>25){
  Discount=100*Completed_Credit;
}
else {
  Discount=0;
}

document.getElementById('Show').innerText =" Discount ammount is:" + Discount;

  
}
function TuitionFees(){
  var Course_Taken = parseInt (document.getElementById( 'CourseTaken').value);
  var Tuition_Fees = parseInt (document.getElementById('TuitionFess').value);
  var Sum= Course_Taken*Tuition_Fees;
  var Waiver =0;
  var Payable_Fees=0;

  if (Sum>60000 || Course_Taken>5){
      Waiver=Sum*.20;
      Waiver=Waiver+1000;
  }
  else if (Sum>50000 || Course_Taken>4){
    Waiver=Sum*.15;
    Waiver=Waiver+2000;
  }
  else if (Sum>40000 || Course_Taken>3){
    Waiver=Sum*.10;
    Waiver=Waiver+3000;
  }
  else {
    Waiver=Sum*.05;
    Waiver=Waiver+4000;
  }
  Payable_Fees=Sum-Waiver;

  document.getElementById('Show').innerText = "Payable Tuition Fees:" + Payable_Fees;

}