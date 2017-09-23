
  //Final project stuff
  var i = 0;
  var todo = document.getElementsByClassName('todo');
  var wrapper = document.getElementById('wrapper');
  var editTodo = function() {
    var todoToEdit = document.getElementById('todo-input').value;
    console.log(todoToEdit, 'element');
  };

  var removeTodo = function() {
    console.log('element');
  };

  var addTodo = function() {
    var newTodo = document.createElement('INPUT');
    newTodo.className = 'todo';
    newTodo.id = 'todo' + i++;
    wrapper.appendChild(newTodo);
  };