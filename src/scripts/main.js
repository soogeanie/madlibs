var startups = ['Uber', 'Google', 'Amazon', 'Apple', 'Facebook', 'Twitter', 'Instacart', 'Favor', 'Twilio', 'Ride Austin', 'Doughbies', 'Braintree'];
var ideas = ['Kittens', 'Cars', 'Clowns', 'Insurance', 'Clothes', 'Food', 'Hipsters', 'Rubberbands', 'Balloons', 'Puppies', 'Fried Chicken', 'Coffee'];
var favoriteStartups = JSON.parse(localStorage.getItem('favoriteStartups')) || [];

var createBtn = document.getElementById('create-btn');
var favBtn = document.getElementById('fav-btn');
var printFavBtn = document.getElementById('print-btn');
var resultContent = document.getElementById('result-content');
var favoriteContainer = document.getElementById('fav-list');
var favoriteContent = document.getElementById('fav-list-content');
var currentStartup = null;

function createRandomStartup(event) {
  var random1 = Math.floor((Math.random() * startups.length)),
      random2 = Math.floor((Math.random() * ideas.length));

  currentStartup = 'A startup that is ' + startups[random1] + ' but for ' + ideas[random2] + '.';

  resultContent.innerHTML = '';
  resultContent.appendChild(document.createTextNode(currentStartup));
}

function saveCreatedStartup(event) {
  if(currentStartup != null) {
    favoriteStartups.push(currentStartup);

    localStorage.setItem('favoriteStartups', JSON.stringify(favoriteStartups));

    window.alert('You have successfully saved "' + currentStartup + '" to your favorites.');
  } else {
    window.alert('You must first create a startup before you can save a favorite!');
  }
}

function printFavoriteStartups(event) {
  var favorites = JSON.parse(localStorage.getItem('favoriteStartups'));

  favoriteContent.innerHTML = '';

  for(i = 0; i < favorites.length; i++) {
    var favoriteItem = document.createElement('li');

    favoriteItem.appendChild(document.createTextNode(favorites[i]));

    favoriteContent.appendChild(favoriteItem);
  }

  favoriteContainer.style.display = 'block';
}

createBtn.addEventListener('click', createRandomStartup, false);
favBtn.addEventListener('click', saveCreatedStartup, false);
printFavBtn.addEventListener('click', printFavoriteStartups, false);
