// Current day is displayed at the top of the calendar
var todaysDate = document.querySelector("#currentDay");
todaysDate.textContent = moment().format('dddd, MMMM Do');



// when I scroll down i am presented with time blocks for standard buisness hours 9 - 5

//each time block is color-coded to indicate whether it is in the past present or future

//when a time block is clicked you can enter an event (input)

// when you click the saved button for the time block the event is saved to local storage 

// when refreshed the page data is presistent