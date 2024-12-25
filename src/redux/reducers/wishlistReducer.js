const initialState = {
    wishlistItems: [],
  };
  
  export const wishlistReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_WISHLIST':
        return {
          ...state,
          wishlistItems: [...state.wishlistItems, action.payload],
        };
  
      case 'REMOVE_FROM_WISHLIST':
        return {
          ...state,
          wishlistItems: state.wishlistItems.filter(
            (item) => item.id !== action.payload
          ),
        };
  
      case 'UPDATE_WISHLIST_ITEM':
        return {
          ...state,
          wishlistItems: state.wishlistItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
  
      default:
        return state;
    }
  };
  