import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo.js';

const TodoList = ({ todos, filter, onTodoClick }) => {

  if (todos.length > 0) {
    return (
      <div className="todolist">
        <ol className="todolist-list">
          {todos.map(todo => (
            <Todo key={todo.id} {...todo} onClick={() => onTodoClick(todo.id)} />
          ))}
        </ol>
        {filter === "SHOW_COMPLETED"}
      </div>
    );
  }

  let filterName ='';

  if (filter === 'SHOW_ACTIVE') {
    filterName = "No data found.";
  } else if (filter === 'SHOW_COMPLETED') {
    filterName = "No completed todos.";
  } else {
    filterName = "No todos yet. Add one in text area above."
  }

  return (
    <div className="todolist notodos">
      <ul className="todolist-list">
        <p>{filterName}</p>
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
