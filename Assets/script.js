// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(document).ready(function () {
    // TODO: Add code to display the current date in the header of the page.
    //displays date in currentDay div
  var currentTime = dayjs().hour();
  var currentDate = dayjs().format("MMMM D, YYYY");
  var formattedDate = currentDate.toString();
  $("#currentDay").text(formattedDate);
},

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?

$(".saveBtn").on("click", function () {
  var description = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  localStorage.setItem(time, description);
}),

// function for each time block to load correct class for time and get localstorage 
$(".time-block").each(function () {
    // to get localstorage on page load
    const time = $(this).attr("id");
    const savedDescription = localStorage.getItem(time);
    console.log(time)
    console.log(savedDescription)
    
    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    if (savedDescription !== null) {
        $(this).find(".description").val(savedDescription);
    }
    
    
    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    const currentTime = dayjs().hour();
    const divHour = parseInt($(this).attr("id").split("hour-")[1]);
    if(currentTime > divHour) {
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    } else if (currentTime < divHour) {
        $(this).addClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    } else {
        $(this).addClass("present");
        $(this).removeClass("future");
        $(this).removeClass("past");
    }
})


);





;

