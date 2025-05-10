import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div style={{ 
      backgroundImage: "url('/images/plant-bg.jpg')",
      backgroundSize: 'cover',
      height: '100vh',
      textAlign: 'center',
      paddingTop: '20%'
    }}>
      <h1 style={{color: 'white'}}>GreenThumb Plants</h1>
      <p style={{color: 'white', fontSize: '1.2rem'}}>
        Bringing nature indoors with our premium houseplants
      </p>
      <Link to="/products">
        <button style={{
          padding: '10px 20px',
          fontSize: '1rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px'
        }}>
          Get Started
        </button>
      </Link>
    </div>
  );
}