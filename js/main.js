 
let performers = $('.performers h3'); // select all h3 in the performers (event details) section

let days = $('#days');
let hours = $('#hours');
let mins = $('#mins');
let secs = $('#secs');
let messageBox = $('#message');
let numOfChar = $('#numOfChar');
let openBtn = $('.open-btn');
let sideNav = $('.side-nav');
let exitNav = $('#exit-btn');


/* ---------------------  animate the performers section   ---------------------------- */ 
performers.click(function(e){   
    let x= e.target ;
    
    $(x).next().slideDown(500);            // select the next element (p next to h3) slide it 
    $(x).next().nextAll('p').slideUp(500); 
    $(x).prevAll('p').slideUp(500);
    
})



/**********          counter section           **********/

// set event date ...
const EventDate = new Date("Jan 5, 2024 15:37:25").getTime();

// function to calculate the time diff and display it 
function displayCounter(){
    
const current = new Date().getTime();

let diff = EventDate - current ;

let daysDiff = Math.floor(diff / (1000 * 60 * 60 * 24));
let hoursDiff = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minDiff = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
let secDiff = Math.floor((diff % (1000 * 60)) / 1000);

days.html(daysDiff);
hours.html(hoursDiff);
mins.html(minDiff);
secs.html(secDiff);

}

// init call to view the time diff once load the page
displayCounter();


// interval to call the function each sec 
setInterval( function(){
    
displayCounter();

} ,1000)

/*---------------------------------------------------------*/

// message box section 

messageBox.keydown(function (e) { 
    let lengthOfMessage = e.target.value.length;
    numOfChar.html(`${100-lengthOfMessage}`);
    if(100-lengthOfMessage <=  0)
    {
        numOfChar.html(`No`);
        numOfChar.addClass('text-danger');
    }else
    {
        numOfChar.removeClass('text-danger');
    }

});


/*------------------ nav section  ----------------------*/

openBtn.click(function(){
    let dis = openBtn.position().left;
    if(dis==0)
    {
        openBtn.animate({left:'200px'},500);
        sideNav.animate({left:'0'},500);
    }else
    {
        openBtn.animate({left:'0px'},500);
        sideNav.animate({left:'-200'},500);
    }
   
});

exitNav.click(function(){
    openBtn.animate({left:'0px'},500);
    sideNav.animate({left:'-200'},500);
});






