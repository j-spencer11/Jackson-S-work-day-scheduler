//local storage

var saveBtn = $("[class=saveBtn");
var allNotes = [];

saveBtn.on('click', function() {
    console.log($(this));

    $(".textBox").each( function(){
        console.log( $(this).val() );
        // add each value to the allNotes array
    })



    // localStorage.setItem("plannerText", plannerText.val());
    console.log("clicked");
});