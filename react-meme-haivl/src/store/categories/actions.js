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

}={})=> {
  return async dispatch => {
    try {
      const response = await CategoriesService.getList();

      const shortdata = response.data;
      const categories = shortdata.categories;

      dispatch(actFetchCategories({
        categories
      }))
      
    } catch (e) {

    }
  }
}