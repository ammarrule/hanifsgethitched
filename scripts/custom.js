$( document ).ready(function() {

    $('body').click(function(){
        $('#navbarNav').removeClass('show');
    });
    
    $('.form-check-input').on('change', function(){
        value = $(this).val();
        
        //Attending / Not attending
        
        if(value == "attending"){
            $('#plus1Box').removeClass('hidden');
            $('#restrictions').removeClass('hidden');
        } else if (value == "Not attending"){
            $('#plus1Box').addClass('hidden');
            $('#plus1Name').addClass('hidden');
            $('#restrictions').addClass('hidden');
            $('#restrictionsDetails').addClass('hidden');
        };

        if(value == "Plus 1 yes"){
            $('#plus1Name').removeClass('hidden');
        } else if(value == "Plus 1 no"){
            $('#plus1Name').addClass('hidden');
        };

        if(value == "Dietary Restrictions"){
            $('#restrictionsDetails').removeClass('hidden');
        } else if (value == "No Dietary Restrictions"){
            $('#restrictionsDetails').addClass('hidden');
        }

    });

    $('.carousel-indicators li').click(function(){
        $('#timerSmall').removeClass('hidden');
        console.log("working");
    });

    // mobile hide show //

    $('#homeButton').click(function(){
        $('#menuGridMobile').removeClass('hidden');
        $('#coupleMobile').addClass('hidden');
        $('#crewMobile').addClass('hidden');
        $('#parentsMobile').addClass('hidden');
        $('#venueMobile').addClass('hidden');
        $('#itineraryMobile').addClass('hidden');
    });

    $('#coupleButton, #coupleGridButton').click(function(){
        $('#menuGridMobile').addClass('hidden');
        $('#crewMobile').addClass('hidden');
        $('#parentsMobile').addClass('hidden');
        $('#venueMobile').addClass('hidden');
        $('#itineraryMobile').addClass('hidden');
        $('#coupleMobile').removeClass('hidden');
    });

    $('#crewButton, #crewGridButton').click(function(){
        $('#menuGridMobile').addClass('hidden');
        $('#coupleMobile').addClass('hidden');
        $('#parentsMobile').addClass('hidden');
        $('#venueMobile').addClass('hidden');
        $('#itineraryMobile').addClass('hidden');
        $('#crewMobile').removeClass('hidden');
    });

    $('#parentsButton, #parentsGridButton').click(function(){
        $('#menuGridMobile').addClass('hidden');
        $('#coupleMobile').addClass('hidden');
        $('#crewMobile').addClass('hidden');
        $('#venueMobile').addClass('hidden');
        $('#itineraryMobile').addClass('hidden');
        $('#parentsMobile').removeClass('hidden');
    });

    $('#venueButton, #venueGridButton').click(function(){
        $('#menuGridMobile').addClass('hidden');
        $('#coupleMobile').addClass('hidden');
        $('#crewMobile').addClass('hidden');
        $('#parentsMobile').addClass('hidden');
        $('#itineraryMobile').addClass('hidden');
        $('#venueMobile').removeClass('hidden');
    });

    $('#itineraryButton, #itineraryGridButton').click(function(){
        $('#menuGridMobile').addClass('hidden');
        $('#coupleMobile').addClass('hidden');
        $('#crewMobile').addClass('hidden');
        $('#parentsMobile').addClass('hidden');
        $('#venueMobile').addClass('hidden');
        $('#itineraryMobile').removeClass('hidden');
    });
// countdown timer

// Set the date we're counting down to
var countDownDate = new Date("Apr 20, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timer").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer").innerHTML = "EXPIRED";
    }
}, 1000);

// countdown timer small 

// Set the date we're counting down to
var countDownDate = new Date("Apr 20, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timerSmall").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timerSmall").innerHTML = "EXPIRED";
    }
}, 1000);

// countdown timer mobile 

// Set the date we're counting down to
var countDownDate = new Date("Apr 20, 2019 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("timerMobile").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timerMobile").innerHTML = "EXPIRED";
    }
}, 1000);
        
});

// map 

var map;

function initMap() {
    var myLatLng = {lat: 43.194620, lng: -79.822670};
    map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 8
    });

    var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!'
    });

}





