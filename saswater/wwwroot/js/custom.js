//$(document).ready(function () {

//    $('.selectpicker').multiselect({
//        allSelectedText: 'All',
//        maxHeight: 400,
//        includeSelectAllOption: true
//    });

//});

$('#ReportPeriod').change(function () {
    selection = $(this).val();
    switch (selection) {
        case 'Weekly':
            console.log("weekly");
            $('#week').removeClass("hide")
            $('#SelectedWeeks').removeAttr("disabled", true)
            $('#SelectedMonths').attr("disabled", true)
            $('#month').addClass("hide")
            break;
        case 'Monthly':
            $('#month').removeClass("hide")
            $('#SelectedMonths').removeAttr("disabled", true)
            $('#SelectedWeeks').attr("disabled", true)
            $('#week').addClass("hide")
            break;
        default:

    }
});
$('#ReportStyle').change(function () {
    document.getElementById("SelectedWeeks").selectedIndex = -1;
    document.getElementById("SelectedMonths").selectedIndex = -1;
    document.getElementById("SelectedYears").selectedIndex = -1;
    document.getElementById("SelectedGroups").selectedIndex = -1;
    console.log('test');
    $('#SelectedWeeks').selectpicker('refresh');
    $('#SelectedMonths').selectpicker('refresh');
    $('#SelectedYears').selectpicker('refresh');
    $('#SelectedGroups').selectpicker('refresh');

    perform = $(this).val();
    switch (perform) {
        case '1':
        case '2':
        case '3':
            $('#week').addClass("hide")
            $('#SelectedWeeks').removeAttr("disabled", false)
            $('#SelectedMonths').attr("disabled", false)
            $('#month').addClass("hide")
            $('#reportPeriod').removeClass("hide")
            $('#SelectedGroups').removeClass("hide")
            $('#ReportPeriod').attr("disabled", false)
            $('.SelectedGroups').selectpicker('deselectAll');
            document.getElementById("ReportPeriod").selectedIndex = -1;
            $('#ReportPeriod').selectpicker('refresh');
            $('#SelectedWeeks').selectpicker({
                maxOptions: 12                              // if the performance report is selected set the maximum weeks to 13 
            });
            $('#submit').removeAttr('disabled');
            break;
        case '4':

          
            $('.SelectedGroups').selectpicker('selectAll');
            $('#SelectedMonths').addClass("hide");
            $('.SelectedGroups').selectpicker('selectAll');
            $('#SelectedWeeks').removeAttr("disabled", true);
            $('#SelectedMonths').attr("disabled", true);
            $('#reportPeriod').addClass("hide");
            $('#ReportPeriod').attr("disabled", true);
            $('#SelectedWeeks').selectpicker({
                maxOptions: 13                               // if the performance report is selected set the maximum weeks to 13 
            });
            $('#week').removeClass("hide");
            $('#month').addClass("hide");
            $('#submit').attr('disabled', 'disabled');      
            break;
        default:
            
    }

});


$('#SelectedWeeks').change(function () {
    if ($('#ReportStyle').val() == 4) {
        var weeksSelected = [];
        var temp = 0;
        $.each($("#SelectedWeeks option:selected"), function () {                   // whenever a new week is selected its index value is put in array 
            weeksSelected.push($(this).index());
            $('#submit').attr('disabled', 'disabled');
        });
        console.log(weeksSelected);
        for (var i = 0; i < weeksSelected.length; i++) {                        // sort array in ascending order 
            for (var j = i + 1; j < weeksSelected.length; j++) {
                if (weeksSelected[i] > weeksSelected[j]) {
                    temp = weeksSelected[i];
                    weeksSelected[i] = weeksSelected[j];
                    weeksSelected[j] = temp;
                }

            }



        }
        console.log(weeksSelected);
        if (weeksSelected.length == 13) {      // check the number of selections, if its not 13 then there is another alert 
            if (weeksSelected[12] - weeksSelected[0] == 12) {
                console.log(weeksSelected.length);
                $("#submit").attr("disabled", false);
            }
            else
                alert("Select 13 consecutive weeks");

        }
        else if (weeksSelected != 13) {

            console.log("Performance Report maps over 3 month period ( quarter) ");
        }
    }
    


});


