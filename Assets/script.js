// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(document).ready(function () {
    var currentTime = dayjs().hour()
    var currentDate = dayjs().format('MMMM D, YYYY');
    var formattedDate = currentDate.toString();
    $('#currentDay').text(formattedDate);



    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?



    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?
    if(currentTime === 9) {
        $('#hour-9').addClass('present')
        $('#hour-10').addClass('future')
        $('#hour-11').addClass('future')
        $('#hour-12').addClass('future')
        $('#hour-1').addClass('future')
        $('#hour-2').addClass('future')
        $('#hour-3').addClass('future')
        $('#hour-4').addClass('future')
        $('#hour-5').addClass('future')
    } else if (currentTime === 10) {
        $('#hour-9').addClass('past')
        $('#hour-10').addClass('present')
        $('#hour-11').addClass('future')
        $('#hour-12').addClass('future')
        $('#hour-1').addClass('future')
        $('#hour-2').addClass('future')
        $('#hour-3').addClass('future')
        $('#hour-4').addClass('future')
        $('#hour-5').addClass('future')
    } else if (currentTime === 11) {
        $('#hour-9').addClass('past')
        $('#hour-10').addClass('past')
        $('#hour-11').addClass('present')
        $('#hour-12').addClass('future')
        $('#hour-1').addClass('future')
        $('#hour-2').addClass('future')
        $('#hour-3').addClass('future')
        $('#hour-4').addClass('future')
        $('#hour-5').addClass('future')
    } else if (currentTime === 12) {
        $('#hour-9').addClass('past')
        $('#hour-10').addClass('past')
        $('#hour-11').addClass('past')
        $('#hour-12').addClass('present')
        $('#hour-1').addClass('future')
        $('#hour-2').addClass('future')
        $('#hour-3').addClass('future')
        $('#hour-4').addClass('future')
        $('#hour-5').addClass('future')
    }else if (currentTime === 13) {
        $('#hour-9').addClass('past')
        $('#hour-10').addClass('past')
        $('#hour-11').addClass('past')
        $('#hour-12').addClass('past')
        $('#hour-1').addClass('present')
        $('#hour-2').addClass('future')
        $('#hour-3').addClass('future')
        $('#hour-4').addClass('future')
        $('#hour-5').addClass('future')
    } else if (currentTime === 14) {
        $('#hour-9').addClass('past')
        $('#hour-10').addClass('past')
        $('#hour-11').addClass('past')
        $('#hour-12').addClass('past')
        $('#hour-1').addClass('past')
        $('#hour-2').addClass('present')
        $('#hour-3').addClass('future')
        $('#hour-4').addClass('future')
        $('#hour-5').addClass('future')
    } else if (currentTime === 15) {
        $('#hour-9').addClass('past')
        $('#hour-10').addClass('past')
        $('#hour-11').addClass('past')
        $('#hour-12').addClass('past')
        $('#hour-1').addClass('past')
        $('#hour-2').addClass('past')
        $('#hour-3').addClass('present')
        $('#hour-4').addClass('future')
        $('#hour-5').addClass('future')
    } else if (currentTime === 16) {
        $('#hour-9').addClass('past')
        $('#hour-10').addClass('past')
        $('#hour-11').addClass('past')
        $('#hour-12').addClass('past')
        $('#hour-1').addClass('past')
        $('#hour-2').addClass('past')
        $('#hour-3').addClass('past')
        $('#hour-4').addClass('present')
        $('#hour-5').addClass('future')
    } else if (currentTime === 17) {
        $('#hour-9').addClass('past')
        $('#hour-10').addClass('past')
        $('#hour-11').addClass('past')
        $('#hour-12').addClass('past')
        $('#hour-1').addClass('past')
        $('#hour-2').addClass('past')
        $('#hour-3').addClass('past')
        $('#hour-4').addClass('past')
        $('#hour-5').addClass('present')
    } else if (currentTime < 9) {
        $('#hour-9').addClass('future')
        $('#hour-10').addClass('future')
        $('#hour-11').addClass('future')
        $('#hour-12').addClass('future')
        $('#hour-1').addClass('future')
        $('#hour-2').addClass('future')
        $('#hour-3').addClass('future')
        $('#hour-4').addClass('future')
        $('#hour-5').addClass('future')
    } else if (currentTime > 17) {
        $('#hour-9').addClass('past')
        $('#hour-10').addClass('past')
        $('#hour-11').addClass('past')
        $('#hour-12').addClass('past')
        $('#hour-1').addClass('past')
        $('#hour-2').addClass('past')
        $('#hour-3').addClass('past')
        $('#hour-4').addClass('past')
        $('#hour-5').addClass('past')
    }



    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?
    //
    // TODO: Add code to display the current date in the header of the page.
  });

