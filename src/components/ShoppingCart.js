import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { 
  incrementQuantity, 
  decrementQuantity, 
  removeItem 
} from '../redux/actions';

function ShoppingCart() {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <div>
      <h2>Your Cart</h2>
      
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} style={{
              display: 'flex',
              alignItems: 'center',
              margin: '10px 0',
              padding: '10px',
              border: '1px solid #ddd'
            }}>
              <img src={item.image} alt={item.name} width="50"/>
              <div style={{flexGrow: 1, marginLeft: '10px'}}>
                <h4>{item.name}</h4>
                <p>${item.price} each</p>
              </div>
              <div>
                <button onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                <span style={{margin: '0 10px'}}>{item.quantity}</span>
                <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                <button 
                  onClick={() => dispatch(removeItem(item.id))}
                  style={{marginLeft: '10px', color: 'red'}}
                >
                  ×
                </button>
              </div>
            </div>
          ))}

          <div style={{marginTop: '20px'}}>
            <p><strong>Total Items:</strong> {totalItems}</p>
            <p><strong>Total Price:</strong> ${totalPrice.toFixed(2)}</p>
          </div>

          <div style={{marginTop: '20px'}}>
            <button onClick={() => alert('Checkout feature coming soon!')}>
              Proceed to Checkout
            </button>
            <Link to="/products" style={{marginLeft: '10px'}}>
              <button>Continue Shopping</button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
}