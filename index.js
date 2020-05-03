'use strict';

function getDogImage(dogs) {
    fetch(`https://dog.ceo/api/breeds/image/random/${dogs}`)
    .then(response => response.json())
    .then(responseJson => displayResults(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
  }

function displayResults(responseJson){
  
    //1. log results in console
    console.log(responseJson);    

    //2. display images on window
      const dogsURLs = responseJson.message;
      $('.results img').remove();
      for(let i = 0; i < dogsURLs.length; i++){
        $('.results').append(
        `<img class="results-img" alt="Cute dog picture" src="${dogsURLs[i]}"></img>`
        )
      }

      $('.results').removeClass('hidden');
}


function watchForm(){
    $('form').on('submit', event => {
        event.preventDefault();
        const numberOfDogs = document.getElementById('number-dogs').value;
        if(numberOfDogs > 0 && numberOfDogs <=50){
            getDogImage(numberOfDogs);
        }else{
            alert('Enter a number from 1-50');
        }
    }); 
}

$(function(){
   watchForm();
});