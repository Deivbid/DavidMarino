import { PAGINATOR } from './types';

export const PaginatorRedux = (number) => {
  return {
    type: PAGINATOR,
    payload: number,
  }
}