//Listner for form submit
document.getElementById('myForm').addEventListener('submit', saveBookmark);
//save book mark
function saveBookmark(e){
  //get form values
  var siteName = document.getElementById('siteName').value;
  var siteUrl = document.getElementById('siteUrl').value;

  //save site name and url as an object to be saved in local storage
  var bookmark = {
    name: siteName,
    url: siteUrl
  }

   /*
  //local storage test (local storage only stores strings)
  localStorage.setItem('test', 'Hello World');
  console.log(localStorage.getItem('test'));
  localStorage.removeItem('test');
  console.log(localStorage.getItem('test'));
  */


  if(localStorage.getItem('bookmarks') === null){
    //Initiate array
    var bookmarks = [];
    //Add to array
    bookmarks.push(bookmark);
    //Set to local localStorage
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  } else{
      //get bookmarks from local storage
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      //Add bookmark to array
      bookmarks.push(bookmark);
      //re-set back to local storage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  }

  //re fetch bookmarks
  fetchBookmarks();


  //prevent the form from submitting
  e.preventDefault();
}

//delete bookmarks
function deleteBookmark(url){
  //get bookmarks from local storage
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  //loop through bookmarks
  for(var i = 0;i < bookmarks.length; i++){
    if(bookmarks[i].url == url){
      //remove from array
      bookmarks.splice(i, 1);

    }
  }
  //re-set back to local storage
  localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

  //re fetch bookmarks
  fetchBookmarks();

}


//fetch bookmarks
function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));

  //get outout id
  var bookmarksResults = document.getElementById('bookmarksResults');

  //build output
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;

    bookmarksResults.innerHTML += '<div class="card  bg-light">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-info" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';


  }
}
