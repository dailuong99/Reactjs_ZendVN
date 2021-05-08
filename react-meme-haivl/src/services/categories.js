import { api } from './api';

export const CategoriesService = {
  getList() {
    return api.call().get('/categories/index.php')
  }
}

