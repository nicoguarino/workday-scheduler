# Workday Scheduler

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Code Sample](#code-sample)
- [Acknowledgement](#acknowledgement)
- [Contributing](#contributing)
- [License](#license)

## About <a name = "about"></a>

Workday Scheduler is designed to help one to manage their schedule effectively. It tells one where they are at in their workday by color to show one what hours have past, what is the current hour, and what is left in the work day.

## Getting Started <a name = "getting-started"></a>

* [Git Hub Pull](https://github.com/nicoguarino/workday-scheduler.git)
* [Code Quiz Website](https://nicoguarino.github.io/workday-scheduler/)

## Code Sample <a name = "code-sample"></a>

![Sample Code](https://github.com/nicoguarino/codequiz/blob/main/assets/image/code_sampel.png "Sample Code")

### Sample Code
```HTML Sample
<main class="main-section">
    <main class="container col-12 col-lg-9 d-flex flex-column">
      <!-- Timeblocks go here -->
      <div class=" row justify-content-around">

        <div class="col-xl-12 col-md-12 col-sm-12 row">

          <div class="col-2 time-block hour">
            <span>9am</span>
          </div>
          
          
            <textarea  id="9" cols="136" class="col-9 description textarea hour row"></textarea>
          

          <div class="col-1 row saveContainer">
            <button class="saveBtn"><span class="oi oi-book"></span></button>
          </div>
        </div>
```

```CSS Sample
.jumbotron {
  text-align: center;
  background-color: transparent;
  color: black;
  border-radius: 0;
  border-bottom: 10px solid black;
}

.description{
  white-space: pre-wrap;
}

.time-block{
  text-align: center;
  border-radius: 15px;
}

.row {
  white-space: pre-wrap;
  height: 80px;
  border-top: 1px solid white;;
}
```
```JavaScript Sample
// Funtion that checks for right answer
 function checkAnswer(e) {
    if(e.target.value !== questions[currentQuestion].correctAnswer){  
        seconds -= 5;
    } 

    if (currentQuestion <= 9) {
    currentQuestion++;
    selectedQuestion.innerHTML = questions[currentQuestion].quizQ;
    answerA.innerHTML = questions[currentQuestion].optionA;
    answerB.innerHTML = questions[currentQuestion].optionB;
    answerC.innerHTML = questions[currentQuestion].optionC;
    answerD.innerHTML = questions[currentQuestion].optionD;

    } else {
        stopGame();
     }
};

// function to load quiz questions and starts the for loop
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
```

## Authors and acknowledgement <a name = "acknowledgement"></a>

Nico (Filipu) Guarino

Work Scheduler Design team

## Contributing <a name = "contributing"></a>

Work Scheduler website is open for contrubiting, however check with the creator first before making any permanent changes. The creator is opening to creative ideas and tweeking of design, but it must be approved first.

## License <a name = "license">

(c) 2021 Work Scheduler

