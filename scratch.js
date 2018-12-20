var todoList = {
  todos: [],
  displayTodos: function() {
    //if there are no todos
    if(this.todos.length === 0) {
      //console log your todo list is empty
      console.log('Your Todo List is Empty!');
    } else {
       //print todos as normal
      console.log('My Todos: ');
      for (var i = 0; i < this.todos.length; i++) {
        //check if completed is true
        if(this.todos[i].completed === true) {
          //print with (x)
          console.log("(x)", this.todos[i].todoText);
       } else {
          //print with ()
          console.log("( )", this.todos[i].todoText);
        }
      }
    }
  },
  addTodo: function(todoText) {
    this.todos.push({
      todoText: todoText,
      completed:false
    });
    this.displayTodos();
  },
  changeTodo: function(position, todoText) {
    this.todos[position].todoText = todoText
    this.displayTodos();
  },
  deleteTodo: function(position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  toggleCompleted: function(position) {
    var todo = this.todos[position];
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  toggleAll: function() {
    var totalTodos = this.todos.length;
    var completedTodos = 0;

    //get number of completed todos
    for (var i = 0; i < totalTodos; i++) {
      if(this.todos[i].completed === true) {
        completedTodos++;
      }
    }
    //case 1: if everything is true, make everything false
    if (completedTodos === totalTodos) {
      for(var i = 0; i < totalTodos; i++) {
        this.todos[i].completed = false;
      }
      // case 2: otherwise, make everything true
    } else {
      for(var i = 0; i < totalTodos; i++) {
       this.todos[i].completed = true;
      }
    }
    this.displayTodos();
  }
};

// we want to get access to displayTodos button
var displayTodosButton = document.getElementById("displayTodosButton");
console.log(displayTodosButton);

// we want to run displayTodos method when someone
// clicks display todos button
displayTodosButton.addEventListener('click', function(){
  todoList.displayTodos();
});