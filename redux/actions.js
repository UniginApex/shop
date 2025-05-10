// These are like messages you send about what happened
export const addToCart = (plant) => ({
    type: 'ADD_TO_CART',
    payload: plant // The plant being added
  });
  
  export const removeFromCart = (plantId) => ({
    type: 'REMOVE_FROM_CART',
    payload: plantId // ID of plant to remove
  });
  
  export const updateQuantity = (plantId, change) => ({
    type: 'UPDATE_QUANTITY',
    payload: { plantId, change } // +1 or -1
  });