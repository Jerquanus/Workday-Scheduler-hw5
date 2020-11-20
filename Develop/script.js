var timeDisplay = $('#currentDay')

function currentTime() {
    var today = moment();
    timeDisplay.text(today.format('MMM DD, YYYY [at] hh:mm:ss a'));
    var timeRightNow = today.hours()

    console.log

    for(var i = 9; i <= 17; i++) {
        var hourEl = document.getElementById(i.toString());
        var id = parseInt(hourEl.id)

        // hourEl.classList.add('past')

        // less than, equal to or greater than
        if(id < timeRightNow) {
            hourEl.classList.add('past')
        }
    
        
        // console.log(id,timeRightNow)
        
    }


}






currentTime()










// localStorage.setItem();

