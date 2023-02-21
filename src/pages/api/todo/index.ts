// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { TODO_LIST } from './data';
import type { NextApiRequest, NextApiResponse } from 'next';

export type Todo = {
  id: string;
  text: string;
  done?: boolean;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<Todo[]>) {
  res.status(200).json(TODO_LIST);
}

export const getTodoList = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/todo`);
  const data: Todo[] = await res.json();
  return data;
};
