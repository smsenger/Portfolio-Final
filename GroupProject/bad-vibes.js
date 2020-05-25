
///Sets sad image api to card

function getSadImages() {
$.get('https://api.unsplash.com/search/photos?page=1&per_page=30&query=sad&client_id=yE582Cx8y-xmBPW0X_zUDPFAaJ0KYPUQqmVOZ1cgEfY')
    .then(function (data3) {
      const img = document.getElementsByTagName('img')[1];
      // console.log('data =', data3)
      img.setAttribute('src', data3.results[Math.floor(Math.random() * Math.floor(data3.results.length))].urls.small)
    });
};

///Sets joke card api
function getDadJokes() {
  $.get('https://official-joke-api.appspot.com/random_ten') 
  .then(function (data4) {
    const randomJoke = document.querySelector('.jokeSetup');
    const punchLine = document.querySelector('.jokePunchline');
    console.log('data4 =', data4);
    randomJoke.textContent = (`${data4[0].setup}`);
    punchLine.textContent = (`${data4[0].punchline}`);
  });
}

$('#click-quote2').click(function () {
  getSadImages();
  getDadJokes();
});











// const randomImage = document.querySelector('.random-images');

// const dadJokes = "https://official-joke-api.appspot.com/random_ten";
// $('#click-joke') .click(function(){
//   $.get(dadJokes) 
//   .then(response => {
//       randomJoke.textContent = (`${response[0].setup} ${response[0].punchline}`);
//       console.log(response);
  
  
//   })});



// document.addEventListener('DOMContentLoaded', function() {

//   $.get('https://api.unsplash.com/search/photos?page=1&per_page=30&query=sad&client_id=yE582Cx8y-xmBPW0X_zUDPFAaJ0KYPUQqmVOZ1cgEfY')
//     .then(function(data3) {
//       const generatedImage = document.createElement('img');
//       console.log('data =', data3)
//       setInterval(function() {
//         randomImage.innerHTML = '';
//         generatedImage.setAttribute('src', data3.results[Math.floor(Math.random() * Math.floor(data3.results.length))].urls.small)
//         randomImage.appendChild(generatedImage)
//       }, 3000);
//     }); 
// });