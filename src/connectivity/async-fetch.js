import { getGIFsByFilter } from '../helpers/api';

export default async function asyncFetch(searchText) {
  return await getGIFsByFilter(searchText);
}