import { CategoriesService } from "../../services/categories";

export const ACT_FETCH_CATEGORIES = 'ACT_FETCH_CATEGORIES';

export function actFetchCategories({
  categories = []
}) {
  return {
    type: ACT_FETCH_CATEGORIES,
    payload: {
      categories
    }
  }
}

export const actFetchCategoriesAsync = ({
  page = 1,
  per_page = 100
} = {}) => {
  return async dispatch => {
    try {
      const response = await CategoriesService.getList({
        page,
        per_page
      });

      const categories = response.data;

      dispatch(actFetchCategories({
        categories
      }))

    } catch(e) {

    }
  }
}