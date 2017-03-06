//FRAMEWORK 7 JAVASCRIPT
// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});

// Init slider and store its instance in mySwiper variable
var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination',
    paginationClickable: true
});

var slide = {prevSlideID:"", prevSlideIndex:0};

function changeClass(ID) {
    if (document.getElementsByClassName('toolbar-inner')[0].getElementsByClassName('active')[0] != undefined) {
        slide.prevSlideID = document.getElementsByClassName('toolbar-inner')[0].getElementsByClassName('active')[0].id;
        console.log(mySwiper.activeIndex);
        slide.prevSlideIndex = mySwiper.activeIndex
        document.getElementsByClassName('toolbar-inner')[0].getElementsByClassName('active')[0].className = "link";
    }
    document.getElementById(ID).className = 'active';
}

document.getElementById('back').addEventListener('click', function () {
    mySwiper.slideTo(slide.prevSlideIndex, 500, false);
    console.log('back to slide no ' + slide.prevSlideIndex + " slideID is " + slide.prevSlideID);
    changeClass(slide.prevSlideID);
})

document.getElementById('about').addEventListener('click', function () {
    changeClass('about');
    mySwiper.slideTo(3, 500, false);
})

document.getElementById('slide-0').addEventListener('click', function () {
    changeClass('slide-0');
    mySwiper.slideTo(0, 500, false);
})

document.getElementById('slide-1').addEventListener('click', function () {
    changeClass('slide-1');
    mySwiper.slideTo(1, 500, false);
})

document.getElementById('slide-2').addEventListener('click', function () {
    changeClass('slide-2');
    document.getElementById('slide-2').className = 'active';
    mySwiper.slideTo(2, 500, false);
})

document.getElementById('slide-3').addEventListener('click', function () {
    changeClass('slide-3');
    mySwiper.slideTo(3, 500, false);
})
//END FRAMEWORK 7 JAVASCRIPT



//DEVICE READY JAVASCRIPT
document.addEventListener('deviceready', function() {
    /* Javascript here... */
    console.log('\n-------------\nDEVICE READY');

    //example function
    function changeSomeText() {
        document.getElementById('change').innerHTML = "this text WAS changed by javascript";
    }

    //run the example function
    changeSomeText();
});


