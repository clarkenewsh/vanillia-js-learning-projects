
// // Event listener - Get form value & fire addToDo function
// document.getElementById('add').addEventListener('click', addToDo);


// function removeItem(event){
//   let entry = document.querySelector('#todo');
  
//     entry.parentNode.removeChild(entry);
   
// };
  

// function addToDo(){
// // If text exists within the input field, add to the todo list
// let value = document.getElementById('value').value;
// // Add new todo value to todo list
// let add = document.getElementById('newToDo');
//   // if the input isn't empty
//   if(value) {
//     add.innerHTML += '<div class="to-do" id="todo">'+
//                         '<p id="toDo-description">' +value+
//                         '</p>'+
//                         '<img src="img/remove.png" id="delete" alt="Rubbish bin icon">'+
//                         '<hr class="vertical-rule"></hr>'+
//                         '<img src="img/success.png" id="complete" alt="Complete task icon">'+
//                       '</div>';


//   }

//   // add click event to remove item
//   document.getElementById('delete').addEventListener('click', removeItem);
// };

document.getElementById('add').addEventListener('click', function(){
  const value = document.getElementById('value').value;

  // if value exsists then add new item to todo
  if(value) {
    addToDo(value); 
  }
});


function addToDo(text) {
  
}
