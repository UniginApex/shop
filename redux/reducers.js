// Starting point (empty cart)
const initialState = {
    cart: [],
    products: [
      { id: 1, name: "Snake Plant", price: 25, image: "/snake.jpg" },
      { id: 2, name: "Monstera", price: 35, image: "/monstera.jpg" },
      // Add 4 more plants...
    ]
  };
  
  // How the memory should change
  export default function plantReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_TO_CART':
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }]
        };
  
      case 'REMOVE_FROM_CART':
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
        };
  
      case 'UPDATE_QUANTITY':
        return {
          ...state,
          cart: state.cart.map(item => 
            item.id === action.payload.plantId
              ? { ...item, 
                  quantity: Math.max(1, item.quantity + action.payload.change) }
              : item
          )
        };
  
      default:
        return state;
    }
  }