import { ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, UPDATE_WISHLIST_ITEM } from "../types";

export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product,
});

export const removeFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId,
});

export const updateWishlistItem = (id, quantity) => {
  return {
    type: UPDATE_WISHLIST_ITEM,
    payload: { id, quantity },
  };
};
