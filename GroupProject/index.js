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
  $.get('https://api.nasa.gov/planetary/apod?api_key=yhAGByOoN03Qq1qHf4S1IBX070g1Of5dMIrzjLdf')
    .then(function (data2) {
      const img = document.getElementsByTagName('img')[3];
      console.log('data =', data2)
      img.setAttribute('src', data2.url)
    });
};

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




