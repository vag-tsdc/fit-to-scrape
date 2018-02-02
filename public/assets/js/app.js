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

// Handle the Read More on click
$(".more").click(function () {
    console.log(this);
        $(".more").removeClass("active");
        $(this).addClass("active");
});


//  handle Save Article button
$(".save").on("click", function () {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/save/" + thisId
    }).done(function(data) {
        window.location = "/"
    })
});

//  handle Delete Article button
$(".delete").on("click", function () {
    var thisId = $(this).attr("data-id");
    $.ajax({
        method: "POST",
        url: "/articles/delete/" + thisId
    }).done(function(data) {
        window.location = "/saved"
    })
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