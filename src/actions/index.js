/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO';

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action creators
 */

export function addTodo(title, text, image) {
  return { type: ADD_TODO, title, text, image  };
}