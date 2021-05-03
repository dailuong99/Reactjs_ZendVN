import { api } from './api';

export const CategoriesService = {
  getList({ 
    page = 1, 
    per_page = 3,
    ...restParams // { search: '' }
  } = {}) {
    return api.call().get('/wp/v2/categories', {
      params: {
        page,
        per_page,
        lang: 'vi', // TODO
        ...restParams
      }
    })
  }
}
