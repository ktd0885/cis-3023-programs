var $ = function (id) 
{
    return document.getElementById(id);
}

var calculate_click = function () 
{
    var floatHwPts, floatMidPts, floatFinPts, intGradeOption, stringFinalGrade,floatTotalPts;

    floatHwPts = parseFloat($("hw_pts").value);
    floatMidPts = parseFloat ($("Mid_Pts").value);
    floatFinPts = parseFloat ($("Fin_Pts").value);
    intGradeOption = parseInt ($("grade_option).value);
    floatTotalPts = parseFloat (floatHwPts + floatMidPts + floatFinPts);
    $("Total_Pts").value);

(intGradeOption===1)
{
    if (floatTotalPts >= 80)
    {
      stringFinalGrade = "Pass";
    }
       else
       {
        stringFinalGrade ="Fail";
       
}

window.onload = function () 
{
    $("final_grade").value = stringFinalGrade; //blanks the final grade text box upon page load
    $("calculate").onclick = calculate_click; //activates main method when the button is clicked 
    $("hw_pts").focus(); //puts the cursor on the first DOM text input box
    $("Mid_Pts").value = "";
    $("Fin_Pts").value = "";
};
