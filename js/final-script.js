var todos = [];
var list = document.getElementById('todo-list');

function Todo(item, time) {
  this.item = item;
  this.time = time;
};

function makeTodo() {
  let todo = document.getElementById('todo-input');
  let time = document.getElementById('todo-time-input');
  var newTodo = new Todo(todo, time);
  todos.push(newTodo);
  for(let i = 0; i <= todos.length; i++) {
    var li = document.createElement('li');
    for(let v in todos[i]) {
      li.innerText += ` ${todos[i][v].value}`;
      list.appendChild(li);
      // console.log(li, 'the li');
    }
  }
};
