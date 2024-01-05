$(document).ready(function () {


    function displayTime() {
        $('#currentDay').text(dayjs().format
            ('dddd, MMMM D, YYYY'))
        $('#currentTime').text(dayjs().format
        ('h:mm:ss'))
    }

    setInterval(displayTime, 1000)

    function updateHour() {
        let currentHour = dayjs().hour()
        console.log(currentHour)
        let timeBlocks = $('.time-block')
        console.log(timeBlocks)

        timeBlocks.each(function() {
            let blockHour = parseInt($(this).attr('id'))
            console.log(blockHour)
            
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

    updateHour()

    setInterval(updateHour, 15000)


    // Event listener to save buttons

    $('.saveBtn').click(function (){
        // grab values of the text areas (class of descripton)
        // Save to local storage using id's as keys and the 
        // values of the text areas for the values

    })

    // load any saved data from local storage









})