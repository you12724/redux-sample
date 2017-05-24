import * as Todo from '../constants/Todo';

const initialState = {
  todoList: [],
  id: 0,
  didCount: 0,
};

export default function todo(state = initialState, action) {
  const todoList = [].concat(state.todoList);
  const actionId = action.id;

  switch (action.type) {
    case Todo.ADD_TODO:
      const { name, dueTo } = action.todo;
      const stateId = state.id + 1;
      todoList.push({stateId, name, dueTo, did: false});
      return Object.assign({}, state, {
        todoList,
        id: stateId
      });
      break;
    default:

  }
}
