$(document).ready(function () {
    let currentDateElement = $("#currentDay");
    let currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    console.log(currentTime);
    let currentHour = moment().format('h');
    console.log(currentHour);
    currentDateElement.text(currentTime);
    let textArea = $("textarea");
    
    
    
    displayTask();

    

    function timeDisplay() {
        if ($(".time") === currentTime) {
            textArea.attr("class", "present");
        } else if ($(".time") < currentTime) {
            textArea.attr("class", "future");
        } else if ($(".time") > currentTime) {
            textArea.attr("class", "past");
        };
    };

    timeDisplay();
    

    
    function displayTask () {
        let oldTask = localStorage.getItem("savedData");
        console.log(oldTask);
        textArea.append(oldTask);
        


    };


    
    



    $(document).on("click", ".saveBtn", function (e) {
        e.preventDefault();
        let button = e.target;
        console.log(button);
        
        let savedData = textArea.val();
        let dataNumber = $("textarea").data("number");

        console.log(savedData);
        localStorage.setItem("savedData", savedData);
        localStorage.setItem("dataNumber", dataNumber);
        



    });
    

    
    


    // function displayTimeCards () {
    //     var timeblockElement = $("<div>");
    //     timeblockElement.attr("class", "time-block");
    //     $(".container").append(timeblockElement);
    //     var hourRows = $("<div>");
    //     hourRows.attr("class", "row");
    //     var hourBox = $("<div>");
    //     hourBox.text(currentHour);
    //     hourRows.append(hourBox);






    // }

    // displayTimeCards();




});

