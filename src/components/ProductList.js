import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions';

function ProductList() {
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  // Group by category
  const categories = [...new Set(products.map(p => p.category))];

  return (
    <div>
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>
          <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {products
              .filter(p => p.category === category)
              .map(plant => (
                <div key={plant.id} style={{margin: '10px', padding: '10px', border: '1px solid #ddd'}}>
                  <img src={plant.image} alt={plant.name} width="100"/>
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>
                  <button 
                    onClick={() => dispatch(addToCart(plant))}
                    disabled={cart.some(item => item.id === plant.id)}
                  >
                    {cart.some(item => item.id === plant.id) ? 'Added' : 'Add to Cart'}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}