import * as actionTypes from "./action";

const initialState = {
  ingredients: {
    salad: 0,
    meat: 0,
    bacon: 0,
    cheese: 0
  },
  totalPrice:0
};

const INGRIEDIENT_PRICES = {
  salad: 15,
  meat: 45,
  cheese: 30,
  bacon: 40
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredientname]: state.ingredients[action.ingredientname] + 1
        },
        totalPrice: state.totalPrice + INGRIEDIENT_PRICES[action.ingredientname]
      };
    case actionTypes.REMOVE_INGREDIENT:
      if (state.ingredients[action.ingredientname] > 0) {
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.ingredientname]:
              state.ingredients[action.ingredientname] - 1
          },
          totalPrice:
            state.totalPrice - INGRIEDIENT_PRICES[action.ingredientname]
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

export default reducer;
