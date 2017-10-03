
  //Final project stuff
  var i = 0,
  todo = document.getElementsByClassName('todo'),
  wrapper = document.getElementById('wrapper'),
  body = document.getElementsByTagName("body")[0],
  listItem,
  allEditButtons,
  allDeleteButtons,
  thisClass = 'todo-' + i++,
  allListItems = document.getElementsByTagName('li');
  
  var editTodo = function() {
    var todoToEdit = document.getElementById('todo-input').value;
    console.log(todoToEdit, 'element');
  };

  var removeTodo = function() {
    console.log('element');
  };

  var createNewLi = function() {
    var newTodoText = document.getElementById('todo-input').value;
    if(newTodoText) {
      var todoList = document.getElementById('todo-list');
      listItem = document.createElement('LI');
      listItem.setAttribute('id', Math.random());            
      var para = document.createElement('p');
      para.setAttribute('class', listItem.id);      
      para.appendChild(document.createTextNode(newTodoText));
      listItem.appendChild(para);
      createEditBtn();
      createDeleteBtn();
      createSaveBtn();
      todoList.appendChild(listItem);
      document.getElementById('todo-input').value = '';  
    } else {
      alert('Please enter a todo item.');
      return
    }
  };

  var createEditBtn = function() {
    var editBtn = document.createElement('BUTTON');
    editBtn.classList.add("edit-btn", "btn", "btn-warning");
    editBtn.setAttribute('id', thisClass);
    editBtn.innerHTML = 'Edit Todo';
    editBtn.addEventListener("click", editTasks, false);
    listItem.appendChild(editBtn);        
  };

  var createDeleteBtn = function() {
    var deleteBtn = document.createElement('BUTTON');
    deleteBtn.classList.add("delete-btn", "btn", "btn-danger");
    deleteBtn.setAttribute('id', thisClass);
    deleteBtn.innerHTML = 'Delete Todo';
    deleteBtn.addEventListener("click", removeTask, false);
    listItem.appendChild(deleteBtn);            
  }

  var createSaveBtn = function() {
    var saveBtn = document.createElement('BUTTON');
    saveBtn.classList.add("save-btn", "btn", "btn-info", "hide");
    saveBtn.innerHTML = 'Update Todo';
    saveBtn.addEventListener("click", updateTask, false);
    listItem.appendChild(saveBtn);            
  }
  //TODO: Need to figure out how to grab edit btns dynamically
  if(document.getElementById('edit-btn')) {
    document.getElementById('edit-btn').addEventListener('click', function(e) {
      var edit;
      console.log(e);
    });
  };

  var initializeRemovals = function() {
    allDeleteButtons = wrapper.getElementsByClassName("delete-btn");    
    for (let i = 0; i < allDeleteButtons.length; i++) {
      allDeleteButtons[i].addEventListener("click", removeTask, false);
    };
  };

  var initializeEdits = function() {
    allEditButtons = wrapper.getElementsByClassName("edit-btn");    
    for (let i = 0; i < allEditButtons.length; i++) {
      allEditButtons[i].addEventListener("click", editTasks, false);
    };
  };

  var removeTask = function() {
    // initializeRemovals();    
    console.log('yep');
    var deleteTask = this.parentNode,
    confirmRemoval = confirm("Are you sure?");    
    deleteTask.outerHTML = "";
};

var editTasks = function() {
  var listItem = this.parentNode; 
  var para = document.getElementsByClassName(listItem.id)[0];
  var containsClass = listItem.classList.contains("editMode");
  var thisEditBtn = listItem.querySelector('.edit-btn');
  var thisUpdateBtn = listItem.querySelector('.save-btn');
  if(containsClass){
    label.innerText = editInput.value;
  } else {
    para.classList.add('hide');
    thisEditBtn.classList.add('hide');
    thisUpdateBtn.classList.remove('hide');
    var editInput = document.createElement('input');
    var contents = para["innerText" in para ? "innerText" : "textContent"];
    editInput.value = contents;    
    listItem.appendChild(editInput);	
  }
    listItem.classList.toggle("editMode");
};

var grabBtns = function() {
  allEditButtons = wrapper.getElementsByClassName("edit-btn");
  allDeleteButtons = wrapper.getElementsByClassName("delete-btn");
  console.log(allEditButtons, allDeleteButtons);
};

var updateTask = function() {
  console.log('things');
  return;
}

document.getElementById('add-btn').addEventListener('click', createNewLi);

  