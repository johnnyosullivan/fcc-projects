
// My original attempt at generating a random image - which worked but the image wasn't stable. 
// function getImage() {
//   $("#image").attr("src", "https://source.unsplash.com/random?sig=" + Math.random());
// }

// Each click of the image button should yield a new image.
var imageUrl = "https://api.unsplash.com/photos/random?client_id=94f133fe3e07fd44998bc2bf4d3e62105a8200370044a025a88a4017179eb1a0"

function getImage() {
  $.getJSON(imageUrl, function(unsplashResponse) {
    $("#image").attr("src", unsplashResponse.urls.regular);
    $("#photographer").html(unsplashResponse.user.name);
    $("#portfolio").attr("href", unsplashResponse.user.links.html + "?utm_source=Juxtapose&utm_medium=referral&utm_campaign=api-credit");
    $("#cardImage").attr("content", unsplashResponse.urls.regular);
    // console.log(unsplashResponse.user);
  });
}

getImage();

$("#imageButton").on("click", function(){
  getImage();
});



// Each click of the quote button should yield a new qoute.
var quoteUrl = "https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";

$("#quoteButton").on("click", function(){
  getQuote();
});


function getQuote() {
  $.getJSON(quoteUrl, function(forismaticResponse) {
    $("#quote").html(forismaticResponse.quoteText);
    if (forismaticResponse.quoteAuthor == "") {
      $("#author").html("- Anonymous");
    } else {
      $("#author").html("- " + forismaticResponse.quoteAuthor); 
    }
    console.log(forismaticResponse);
  });
}

getQuote();


// Each click of the Tweet Button should bring up the an opportunity to tweet #textandimage.
// $.getJSON(quoteUrl, function(quoteResponse){
//   var cardQuote = quoteResponse.quoteText + " - " + quoteResponse.quoteAuthor;
//   $("#tweetButton").on("click", function() {
//     $("#tweetContent").attr("href", "https://twitter.com/intent/tweet?text=" + cardQuote);
//     console.log(cardQuote);
//   });
// })

// $.getJSON(imageUrl, function(imageResponse){
//   var cardImage = imageResponse.urls.regular;
//   $("#tweetButton").on("click", function() {
//     $("#tweetContent").attr("href", unsplashResponse.user.links.html + "?utm_source=Juxtapose&utm_medium=referral&utm_campaign=api-credit" + cardImage);
//     console.log(cardImage);
//   });
// });



