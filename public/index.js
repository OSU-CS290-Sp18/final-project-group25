

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

if(buttonID != null){
  buttonID.addEventListener('click', handleToggleModal);
}
var xOutModal = document.getElementsByClassName('modal-close-button');
var cancelModal = document.getElementsByClassName('modal-cancel-button');
if(xOutModal[0] != null){
  xOutModal[0].addEventListener('click', handleToggleModal);
}
if(cancelModal[0] != null){
  cancelModal[0].addEventListener('click', handleToggleModal);
}



var searchBar = document.getElementById('nav-search-input');


function handleSearchInput(event){
	var reviews = document.querySelectorAll('.review');
	var container = document.getElementsByClassName('review-container');
	var input = document.getElementById('nav-search-input').value;
	var reviewText;//= document.getElementsByClassName('twit-text');
	var reviewContent;
	for(i = 0; i < reviews.length; i++){
  	reviewText = reviews[i].getElementsByClassName('review-text');
  	reviewContent = reviewText[0].textContent.toLowerCase();
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

function getPersonIdFromURL(){
	var path = window.location.pathname;
	var pathParts = path.split('/');
	if(pathParts[1] === "items"){
		return pathParts[2];
	}else{
		return null;
	}
}

function handleCreateReview(event){
  var modal = document.getElementById('create-review-modal');
  var modalReviewText = modal.querySelector('.modal-body .review-input-element #review-text-input').value.trim();
  var modalReviewAuthor = modal.querySelector('.modal-body .review-input-element #review-attribution-input').value.trim();
  if(modalReviewText == '' || modalReviewAuthor == ''){
    alert('Both fields must be filled in');
    return;
  }else{

	 var request = new XMLHttpRequest();
	 var itemID = getPersonIdFromURL();
	 var url = "/items/" + itemID + '/addReview';
	 request.open("POST", url);

	 var requestBody = JSON.stringify({
		 reviewContent: modalReviewText,
		 author: modalReviewAuthor
	 });

	 request.addEventListener('load', function(event){
		 if(event.target.status === 200){
			 var reviewTemplate = Handlebars.templates.review;
			 var newReviewHTML = reviewTemplate({
				 reviewContent: modalReviewText,
				 author: modalReviewAuthor
			 });
			 var reviewContainer = document.querySelector('.review-container');
			 reviewContainer.insertAdjacentHTML('beforeend', newReviewHTML);
		 }else{
			 alert("Error storing Review: " + event.target.response);
		 }
	 });

	 request.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
	 request.send(requestBody);

   handleToggleModal();

	}
}

if(createBtn[0] != null){
  createBtn[0].addEventListener('click', handleCreateReview);
}
