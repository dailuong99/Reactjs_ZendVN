import { ACT_FETCH_CATEGORIES } from "./actions";

const initCategoriesState = {
  categoriesLists: []
}

function reducer(categoriesState = initCategoriesState, action) {
  switch (action.type) {
    case ACT_FETCH_CATEGORIES:
      return {
        ...categoriesState,
        categoriesLists: action.payload.categories
      }
    default:
      return categoriesState;
  }
}

export default reducer;