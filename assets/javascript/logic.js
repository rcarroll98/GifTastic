var buttonArray = [ "Cat", "Dog", "Giraffe", "Lion", "Monkey", 

"Lizard", "Tarantula" ];







//when clicked, the button sends a request to giphy api with ajax

function generateButtons() {
    $("#top-buttons").empty();

    
    

    for (i = 0; i < buttonArray.length; i++) {
        var a = $("<button>");
        a.addClass("animal-button");
        a.attr("data-name", buttonArray[i]);
        a.text(buttonArray[i]);
        $("#top-buttons").append(a);
    }

};
generateButtons();
$("#top-buttons").on("click", function() {
    //set a var to the data-name attribute on jquery 
    
    var gifVar = $(this).attr("data-name");
    console.log(gifVar);
    gifVar = "tarantula"


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    gifVar + "&api_key=dc6zaTOxFJmzC&limit=10";

    $.ajax({
    url: queryURL,
    method: "GET"
    }).then(function(response) {
    console.log(response);
        console.log(queryURL);
        var results = response.data
       

            for (var i = 0; i < results.length; i++) {
            
                var gifDiv = $("<div>");

                var p = $("<p>").text("Rating: " + results[i].rating );

                var gifImage = $("<img>");

                gifImage.attr("src", results[i].images.  fixed_height.url);

                gifDiv.append(p);

                gifDiv.append(gifImage);

                $("#gifs").prepend(gifDiv);

        }}
    );
});

$("#add-gif").on("click", function(event){
    
    event.preventDefault();

    var addGif = $("#gif-input").val().trim();

    buttonArray.push(addGif);

    generateButtons();


});











//TODO make the addGif onclick take the data from the gif-input 
// change the name property to the way its done in the dynamic elements thing