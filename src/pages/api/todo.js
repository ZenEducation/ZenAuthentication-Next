import { DataStore } from "aws-amplify";
import { Todo } from "../../models";

export const fetchTodo = async () => {
  const todos = await DataStore.query(Todo);
  return todos;
};
export const createTodo = async (data) => {
  const todo = await DataStore.save(new Todo(data));
  return todo;
};
