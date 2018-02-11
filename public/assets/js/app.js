// app.js
$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').modal();
  });


    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    // $('.modal').click(function () {
    //     console.log(this);
    // });

    // $('.modal-trigger').click(function () {
    //     console.log(this.class);
    // });

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
        url: "/articles/save/"  + thisId
    }).done(function(data) {
        window.location = "/"
    })
    console.log("Saved : " + this.title)
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
$(".saveNote").on("click", function() {
    var thisId = $(this).attr("data-id");
    if (!$("#noteText" + thisId).val()) {
        alert("please enter a note to save")
    }else {
      $.ajax({
            method: "POST",
            url: "/notes/save/" + thisId,
            data: {
              text: $("#noteText" + thisId).val()
            }
          }).done(function(data) {
              // Log the response
              console.log(data);
              // Empty the notes section
              $("#noteText" + thisId).val("");
              $(".modalNote").modal("hide");
              window.location = "/saved"
          });
    }
});




//  handle Delete Note button
$(".deleteNote").on("click", function () {






});





// EXTRA //

//  handle response options on comments

//  handle selection of horoscope

//  handle more info on selected horoscope