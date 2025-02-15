

$(document).ready(function() {

    console.log("added");
    //the others
    var loadCont = $('#load-page');
    var optionsPage = $('#options-page');

    //buttons
    var runny = $('#runny-button');
    var soft = $('#soft-button')
    var hard = $('#hard-button');



    //booelans
    let allowSelect = false;
    
    
    loadCont.on("mouseup", activate);
    runny.on("mouseup", eggSelected());

    // soft.on("click", eggSelected(2));
    // hard.on("click", eggSelected(3));
    //options buttons


    function startApp() {
        
        console.log(loadCont);

        // setTimeout(function() {
        //     loadCont.removeClass('active').addClass('inactive');
        //     console.log("time out");

        //     console.log(loadCont);
        // }, 3000)

    }

    function activate(){
        
        //take away loading/welcome
        loadCont.removeClass('active').addClass('inactive');
        optionsPage.removeClass('inactive').addClass('active');


        setTimeout(function() {
            allowSelect = true;
            console.log('allowed');
        }, 3000)
    }





    //functions to outline

    function eggSelected(){
        if (allowSelect){
            console.log(parseInt(1));

            console.log('allowed');
        }
        

        //set new page things, switch to page

        //start the timer based on the egg

    }
    

    //set and start timer







    startApp();
});
