

var buttonID  = document.getElementById('create-review-button');

function handleToggleModal (event){
	console.log("The button was clicked");
	var modal = document.getElementById('create-review-modal');
	modal.classList.toggle('hidden');
  var modalBack = document.getElementById('modal-backdrop');
  modalBack.classList.toggle('hidden');
  var modalTwitText = modal.querySelector('.modal-body .review-input-element #review-text-input');
  var modalTwitAuthor = modal.querySelector('.modal-body .review-input-element #review-attribution-input');
  modalTwitText.value = '';
  modalTwitAuthor.value = '';
};

buttonID.addEventListener('click', handleToggleModal);
var xOutModal = document.getElementsByClassName('modal-close-button');
var cancelModal = document.getElementsByClassName('modal-cancel-button');
xOutModal[0].addEventListener('click', handleToggleModal);
cancelModal[0].addEventListener('click', handleToggleModal);



var searchBar = document.getElementById('nav-search-input');


function handleSearchInput(event){
	var reviews = document.querySelectorAll('.review');
	var container = document.getElementsByClassName('review-container');
	var input = document.getElementById('nav-search-input').value;
	var reviewText;//= document.getElementsByClassName('twit-text');
	var reviewContent;
	for(i = 0; i < reviews.length; i++){
  	reviewText = reviews[i].getElementsByClassName('review-text');
  	reviewContent = reviewText[0].textContent;
  	if(!reviewContent.includes(input)){
  	  // container[0].removeChild(twits[i]);
  	  // twits[i].parentNode.removeChild(twits[i]);
      reviews[i].setAttribute('style', 'display:none;');
  	  // reviewText[i].parentNode.parentNode.setAttribute('style', 'display:none;');
  	}
  	else{
  	  // reviewText[i].parentNode.parentNode.setAttribute('style', 'display:flex;');
      reviews[i].setAttribute('style', 'display:block;');
  	}
	}
}

searchBar.addEventListener('input', handleSearchInput);

var searchBarButton = document.getElementById('nav-search-button');
searchBarButton.addEventListener('click', handleSearchInput);



var createBtn = document.getElementsByClassName('modal-accept-button');

function get

function handleCreateReview(event){
  var modal = document.getElementById('create-review-modal');
  var modalReviewText = modal.querySelector('.modal-body .review-input-element #review-text-input');
  var modalReviewAuthor = modal.querySelector('.modal-body .review-input-element #review-attribution-input');
  if(modalReviewText.value == ''){
    alert('You cannot create an empty review');
    return;
  }
  if(modalReviewAuthor.value == ''){
    alert('Every review must have an author');
    return;
  }

	var request = new NMLHttpRequest();
	var personID = getPersonIdFromURL();

	/*
  var newReview = document.createElement('article');
  newReview.setAttribute('class', 'review');

  console.log(modalReviewText.value);
  console.log(modalReviewAuthor.value);
  // var iconDiv = document.createElement('div');
  // iconDiv.setAttribute('class', 'review-icon');
  // var icon = document.createElement('i');
  // icon.setAttribute('class', 'fas fa-bullhorn');
  // iconDiv.appendChild(icon);


  var textDiv = document.createElement('div');
  textDiv.setAttribute('class', 'review-content');

  var text = document.createElement('p');
  text.setAttribute('class', 'review-text');
  text.textContent = modalReviewText.value;
  textDiv.appendChild(text);

  var author = document.createElement('p');
  author.setAttribute('class', 'review-author');
  // var authorRef = document.createElement('a');
  // authorRef.setAttribute('href', '#');
  author.textContent = modalReviewAuthor.value;
  // author.appendChild(authorRef);

  textDiv.appendChild(text);
  textDiv.appendChild(author);

  // newTwit.appendChild(iconDiv);
  newReview.appendChild(textDiv);

  var container = document.querySelector('.review-container');

  container.appendChild(newReview);


  // var twitContainer = document.querySelector('main.twit-container');
  // // twitContainer.appendChild(twitElem);

  // var twitTemplate = Handlebars.templates.twit;
  // var newTwitHTML = twitTemplate({
  //   text: twitText,
  //   author: twitAuthor
  // });

  // twitContainer.insertAdjacentHTML('beforeend', newTwitHTML);


*/
  handleToggleModal();
}

createBtn[0].addEventListener('click', handleCreateReview);
