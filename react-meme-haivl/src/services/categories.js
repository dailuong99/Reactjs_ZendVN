import { api } from './apilogin';

export const CategoriesService = {
  getList() {
    return api.call().get('/categories/index.php')
  }
}

