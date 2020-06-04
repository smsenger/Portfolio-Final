const settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://type.fit/api/quotes",
  "method": "GET"
}

let quotes = [];

///Returns random quotes from api
function getRandomIndex(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

///Sets space images from nasa api
function getSpace() {
  $.get('https://api.nasa.gov/planetary/apod?api_key=QwweL5wp7rhdhr0ZBx0qddvzMvy2l14gk6EfryqL')
    .then(function (data2) {
      const vid = document.getElementById('space-video');
      const img = document.getElementsByTagName('img')[3];
      console.log('data =', data2)
      if (data2.media_type === "video") {
        vid.setAttribute('src', data2.url);
        vid.style.display = "inline"
        img.style.display = "none"
      }
      else {
        img.setAttribute('src', data2.url);
      }
    });
};

/* 

{date: "2020-06-03", explanation: "very time Venus passes the Earth, it shows the sam…ll humanity first discover extraterrestrial life?", media_type: "video", service_version: "v1", title: "The Dance of Venus and Earth", …}
date: "2020-06-03"
explanation: "very time Venus passes the Earth, it shows the same face.  This remarkable fact has been known for only about 50 years, ever since radio telescopes have been able to peer beneath Venus' thick clouds and track its slowly rotating surface.  This inferior conjunction -- when Venus and Earth are the closest -- occurs today.  The featured animation shows the positions of the Sun, Venus and Earth between 2010-2023 based on NASA-downloaded data, while a mock yellow 'arm' has been fixed to the ground on Venus to indicate rotation.  The reason for this unusual 1.6-year resonance is the gravitational influence that Earth has on Venus, which surprisingly dominates the Sun's tidal effect.  If Venus could be seen through the Sun's glare today, it would show just a very slight sliver of a crescent. Although previously visible in the evening sky, starting tomorrow, Venus will appear in the morning sky -- on the other side of the Sun as viewed from Earth.   Experts Debate: How will humanity first discover extraterrestrial life?"
media_type: "video"
service_version: "v1"
title: "The Dance of Venus and Earth"
url: "https://www.youtube.com/embed/Cd5a5KdPxQc?rel=0"
__proto__: Object
*/

///Sets cat image api attached to random quote card
function getCats() {
  $.get('https://aws.random.cat/meow')
    .then(function (data2) {
      const img = document.getElementsByTagName('img')[1];
      console.log('data =', data2)
      img.setAttribute('src', data2.file)
    });
};

///Quotes that have no author will now print as Unknown instead of null
function renderQuote(quoteData) {
  $('#affirmation').text(quoteData.text)
  if (quoteData.author == null) {
    $("#author").text("Unknown");
  }
  else {
    $('#author').text(quoteData.author)

  };
  console.log(quoteData)
}

///Adds click function to quotes
const getFoxyQuote = function () {
  $('#click-quote').html('Get me another!')
  let random = quotes[getRandomIndex(quotes.length)]
  renderQuote(random);
}

///Adds Yoga translation to random quote api in the center card
function quoteYoda() {
  $('#click-quote').html('Try more you will!')
  $.get(`https://api.funtranslations.com/translate/yoda.json?text=${document.getElementById('affirmation').textContent}`)
    .then(function (response3) {
      console.log(response3);
      console.log('this')
      $('#yoda-text').text(response3.contents.translated)
    })
}

///line 70 filters out a particular author from the available authors
$(document).ready(() => {
    const removeTrump = data.filter(settingObj => settingObj.author != 'Donald Trump');
    console.log(data);
    quotes = removeTrump
    console.log(quotes);     

  $('#click-quote').click(function () {
    getFoxyQuote();
    getCats();
    quoteYoda();
  });

  $('#space-quote').click(function () {
    getSpace()
  });

  // chuck norris quote generator
  let chuckNorris = "https://api.icndb.com/jokes/random";
  $("#click-chuck").on("click", function () {
    $("click-chuck").html("Chun Kuk Do!");
    $.getJSON(chuckNorris, function (json) {
      $("#chuck-text").html("<em>\"" + json.value.joke + "\"</em>").addClass("animated bounceIn");
    });
  });

})




