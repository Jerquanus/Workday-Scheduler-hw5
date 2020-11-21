


// when this page loads the data loads go to local store
window.onload = function() {
    console.log('localStorage');
    var allData= localStorage;
    console.log('allData', allData);
    var allInputs = document.getElementsByClassName('allInputs')
    console.log(allInputs[0].name)
for (let i = 0; i < allInputs.length; i++) {
      $(allInputs[i]).val (allData[allInputs[i].name])

}
};

var timeDisplay = $('#currentDay')


function currentTime() {
    var today = moment();
    timeDisplay.text(today.format('MMM DD, YYYY [at] hh:mm:ss a'));
    // var timeRightNow = today.hours('h')


    for(var i = 9; i <= 17; i++) {
        var hourEl = document.getElementById(i.toString());
        var id = parseInt(hourEl.id)

        if (id < timeRightNow ) {
            hourEl.classList.add('past');
        } else if (id === timeRightNow) {
            hourEl.classList.add('present');
        }   else (id > timeRightNow) 
        {   hourEl.classList.add('future');
            }

        // less than, equal to or greater than
        // if(id < timeRightNow) {
        //     hourEl.classList.add('past')
        // }

        // }; 
    }


}




// put inputs into an array
var saveButton =document.getElementsByClassName('saveBtn')
var allInputs = document.getElementsByClassName('allInputs')
for (let i = 0; i < allInputs.length; i++) {
  
    // adding event listen to do whatever it needs
  $(allInputs[i]).change((event) => {
   
    console.log(i, event)
    var word = event.target.value
      $(allInputs[i]).val(word)
      localStorage.setItem(event.target.name, word)
  })
  $(saveButton[i].click((event)=>{
    $(allInputs[i]).val('')
  }))
}

currentTime()












