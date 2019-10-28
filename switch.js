//Declare variables intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade
//Get user input to determine grade
//Calculate floatTotalPts (sum of HW and exam pts)
//Get user input on whether the course is audit pass/fail (1) or letter grade (2)
//If the grade option is audit, evaluate total score based upon 80% cutoff scorefor pass/fail
//Else determine letter grade based upon the typical A = 90%, B - 80%, etc.
//Output stringFinalGrade

var intGradeOption, floatTotalPts, floatHwPts, floatMidPts, floatFinPts, stringFinalGrade;

floatHwPts = parseFloat(prompt("Please enter final HW points (0-30):"));

floatMidPts = parseFloat (prompt("Please enter midterm points (0-35):"));

floatFinPts = parseFloat (prompt("Please enter final exam points (0-35):"));

floatTotalPts = parseFloat (floatHwPts + floatMidPts + floatFinPts);

intGradeOption = parseInt (prompt("Please enter \"1\" for pass/fail or \"2\" for letter grade:"));

if (intGradeOption===1)
{
    if (floatTotalPts >= 80)
    {
            stringFinalGrade = "Pass";
    }
    else
    {
            stringFinalGrade ="Fail";
    }
}    
else
{
   switch (intGradeOption ===2)
   {
      case floatTotalPts >=90:
         stringFinalGrade = "A";
         break;
      case floatTotalPts>=80&&floatTotalPts<90:
         stringFinalGrade = "B";
         break;
      case floatTotalPts>=70&&floatTotalPts<80:
         stringFinalGrade = "C";
         break;
      case floatTotalPts>=60&&floatTotalPts<70:
         stringFinalGrade = "D";
         break;
      case floatTotalPts<60:
         stringFinalGrade = "F";
         break;
   }
}   
   