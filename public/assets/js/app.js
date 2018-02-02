// app.js

// Scrape Button
$("#scrape").on("click", function () {
    $.ajax({
        method: "GET",
        url: "/scrape",
    }).done(function (data) {
        console.log(data)
        window.location = "/"
    })
});

// set click nav option to active
$(".navbar-nav li").click(function () {
    $(".navbar-nav li").removeClass("active");
    $(this).addClass("active");
});


//  handle Save Article button
$(".save").on("click", function () {



});

//  handle Delete Article button
$(".delete").on("click", function () {





});



//  handle Save Note button
$(".saveNote").on("click", function () {






});



//  handle Delete Note button
$(".deleteNote").on("click", function () {






});





// EXTRA //

//  handle response options on comments

//  handle selection of horoscope

//  handle more info on selected horoscope