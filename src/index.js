import './styles.css';

import { Todo, TodoList } from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

// todoList.todos.forEach( todo => crearTodoHtml( todo ) ); Esto es lo mismo que lo de abajo solo que abajo esta resumido.
todoList.todos.forEach( crearTodoHtml );

console.log('todo', todoList.todos)
