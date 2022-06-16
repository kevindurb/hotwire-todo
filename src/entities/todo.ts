import * as yup from 'yup';

export interface Todo {
  id: number;
  description?: string;
  done?: boolean;
}

export const createTodoValidator = yup.object({
  description: yup.string().optional(),
  done: yup.boolean().optional(),
});
