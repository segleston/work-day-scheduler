$(document).ready(function () {


    function displayTime() {

        // adds text for current day
        $('#currentDay').text(dayjs().format
            ('dddd, MMMM D, YYYY'))
        $('#currentTime').text(dayjs().format
            ('h:mm:ss'))
    }

    // interval to display the time and update every second
    setInterval(displayTime, 1000)

    function updateHour() {
        // current hour of the day
        let currentHour = dayjs().hour()
        // grabs class for the time blocks and stores in timeBlocks var
        let timeBlocks = $('.time-block')

        timeBlocks.each(function() {
            // parse the id for each time block and compare the block hour to the current time
            let blockHour = parseInt($(this).attr('id'))
            console.log(blockHour)
            // adds specific class based on if its past/future/present
            if (currentHour > blockHour) {
                $(this).addClass('past')
            } else if(currentHour === blockHour) {
                $(this).removeClass('past')
                $(this).addClass('present')
            } else {
                $(this).removeClass('past present')
                // $(this).removeClass('present')
                $(this).addClass('future')
            }


        })
    }
    // Calls the update hour function
    updateHour()
    // interval to update every hour
    setInterval(updateHour, 15000)


    // Event listener to save buttons

    $('.saveBtn').click(function () {
        // grab values of the text areas (class of descripton)
        // let entry = $(this).siblings().find('.hour')
        let hour = $(this).parent().attr('id');
        let text = $(this).parent().children('.description').val();
        console.log(text)

        // let savedData = JSON.parse(localStorage.getItem('savedData')) || {};
        // savedData[hour] = text;
    
        localStorage.setItem(hour, text);
    })

    // load any saved data from local storage
    function populateTextAreas() {
        // let savedData = JSON.parse(localStorage.getItem('savedData'));
        for (i = 8; i <= 20; i++) {
        let value = localStorage.getItem(i)
        let hour = $('#' + i)
        hour.children('.description').val(value)
        }
        // if (savedData) {
        //   Object.keys(savedData).forEach(function(key) {
        //     $('#' + key).find('.description').val(savedData[key]);
        //   });
        // }
    }
    populateTextAreas();
});