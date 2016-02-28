'use strict';

// Get our artist and album data from the Spotify API
getArtistData();
getAlbumData();

// Function taht will get album data from the Spotify API
function getAlbumData() {
    $.ajax({
      url: "https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj"
    }).done(function(albumData) {
        console.log('Album Data:', albumData);

        // Parse our data so we can write it to the DOM
        var albumNameText = albumData.name;
        var releaseDateText = albumData.release_date;
        var albumTracksArr = albumData.tracks.items;
        var imageUrl = albumData.images[1].url;

        var tracksArray = albumData.tracks.items;
        console.log('tracks: ', tracksArray);

        // loop through tracks and apppend to DOM
        for (var i = 0; i < tracksArray.length; i++) {
            var trackInfo = tracksArray[i];
            var trackListItem = '<li>' + trackInfo.name + '</li>';

            $('ul').append(trackListItem);
            console.log(trackInfo.name);
        };

        $('img#album-cover').attr({src: imageUrl});


    }).fail(function() {
        alert('ERROR IN THE RESPONSE!'); // Alert error message if we get a sever error
    });
}

// Function that will get artist data from the Spotify API
function getArtistData() {
    $.ajax({
      url: "https://api.spotify.com/v1/artists/2BTZIqw0ntH9MvilQ3ewNY",
      context: document.body
    }).done(function(artistData) {
      console.log('Artist Data: ', artistData);

      // Parse our data so we can write it to the DOM
      var avatarUrl = artistData.images[2].url;
      var artistNameText = artistData.name;
      var genresText = artistData.genres;
      var followersText = artistData.followers.total;
      var openLinkUrl = artistData.external_urls.spotify;

      // Take our parsed data and write it to the DOM
      $('#artist-name').text(artistNameText);
      $('#followers').text(followersText);
      $('#genres > li').text(genresText);
      $('img#avatar').attr({src: avatarUrl});
      $('a').attr({href: openLinkUrl});

      $('.btn').on('click', getTextInput);

    }).fail(function() {
        alert('ERROR IN THE RESPONSE!'); // Alert error message if we get a sever error
    });
}

// Function that will get data from the text input
function getTextInput() {
    var $inputValue = $('input').val();
    // TODO: Add logic to search Spotify

    console.log($inputValue);
};

console.log('spotify.js loaded');
console.log(MyMath);


// Get all p elements on the page
var ps = document.getElementsByTagName('p');

// loop through all the p elments and long their inner HTML
for (var i = 0; i < ps.length; i++) {
    if (ps[i].innerHTML.charAt(0) !== ps[i].innerHTML.charAt(0).toUpperCase()) {
        ps[i].innerHTML = ps[i].innerHTML.substring(0, 1).toUpperCase() + ps[i].innerHTML.substring(1);
    }
}
