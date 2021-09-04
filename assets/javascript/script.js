// Current day is displayed at the top of the calendar
var currentDay = moment().format('dddd, MMMM Do');
document.getElementById('currentDay').innerHTML = currentDay;






// when you click the saved button for the time block the event is saved to local storage 
$(".saveContainer").on("click", function(){
    var saveBtnEl = $(this).prev().attr('id');
    var textContentEl = $(this).prev().val();

    localStorage.setItem(saveBtnEl, textContentEl);

});

// when refreshed the page data is presistent

function setupPage() {
    for (let i = 9; i <= 17; i++) {
        var textBlock = $('#' + i);
        var checkHour = parseInt(moment().format('H'));

        //compare i with you numerical hour check with moment and apply classes
        
        //each time block is color-coded to indicate whether it is in the past present or future
        if ( i < checkHour) {
            textBlock.addClass("past");
        } else if ( i === checkHour) {
            textBlock.addClass('present');
        } else {
            textBlock.addClass('future');
        }

        //get items from loccal storage using i to select local storage key values
        var savedTaskEl = localStorage.getItem(i);
        textBlock.val(savedTaskEl);
    }
};

setupPage();