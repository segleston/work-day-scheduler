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
        console.log(currentHour)
        // grabs class for the time blocks and stores in timeBlocks var
        let timeBlocks = $('.time-block')
        console.log(timeBlocks)

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
                $(this).removeClass('past')
                $(this).removeClass('present')
                $(this).addclass('future')
            }
            

        })
    }
    // Calls the update hour function
    updateHour()
    // interval to update every hour
    setInterval(updateHour, 15000)


    // Event listener to save buttons

    $('.saveBtn').click(function (){
        // grab values of the text areas (class of descripton)
        // Save to local storage using id's as keys and the 
        // values of the text areas for the values

    })

    // load any saved data from local storage









})