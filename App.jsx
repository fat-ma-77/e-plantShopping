import { useState } from 'react';
import { useSelector } from 'react-redux';
import AboutUs from './AboutUs';
import ProductList from './ProductList';
import CartItem, { calculateTotalAmount } from './CartItem';

export default function App() {
  const [view, setView] = useState('home');
  const [notice, setNotice] = useState('');

  const items = useSelector((state) => state.cart.items);
  const count = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = calculateTotalAmount(items);

  const go = (nextView) => {
    setView(nextView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const checkout = () => {
    setNotice('Coming Soon — checkout will be available shortly!');
  };

  return (
    <>
      <nav>
        <button className="brand" onClick={() => go('home')}>
          Paradise <span>Nursery</span>
        </button>

        <div className="nav-links">
          <button onClick={() => go('home')}>Home</button>
          <button onClick={() => go('plants')}>Plants</button>
          <button onClick={() => go('about')}>About Us</button>
          <button className="cart-link" onClick={() => go('cart')}>
            Cart <b>{count}</b>
          </button>
        </div>
      </nav>

      {view === 'home' && (
        <>
          <header className="hero">
            <div className="hero-copy">
              <p className="eyebrow">BRING NATURE HOME</p>

              <h1>Welcome to Paradise Nursery</h1>

              <p>
                Discover beautiful houseplants selected to make your space feel
                alive, calm, and completely yours.
              </p>

              <button className="primary" onClick={() => go('plants')}>
                Get Started <span>→</span>
              </button>
            </div>

            <div className="hero-orb">
              🌿
              <small>
                GROW
                <br />
                WITH JOY
              </small>
            </div>
          </header>

          <AboutUs />
          <ProductList />
        </>
      )}

      {view === 'plants' && (
        <>
          <div className="page-intro">
            <p className="eyebrow">FIND YOUR FAVORITE</p>
            <h1>Plant happiness starts here.</h1>
          </div>
          <ProductList />
        </>
      )}

      {view === 'about' && (
        <>
          <div className="page-intro">
            <p className="eyebrow">OUR STORY</p>
            <h1>Rooted in good things.</h1>
          </div>
          <AboutUs />
        </>
      )}

      {view === 'cart' && (
        <section className="cart-page">
          <div className="page-intro">
            <p className="eyebrow">YOUR COLLECTION</p>
            <h1>Shopping Cart</h1>
          </div>

          {notice && <div className="notice">{notice}</div>}

          {items.length === 0 ? (
            <div className="empty">
              <span>🪴</span>
              <h2>Your cart is ready to grow.</h2>
              <p>Choose a plant and start creating your indoor paradise.</p>
              <button className="primary" onClick={() => go('plants')}>
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="cart-layout">
              <ul className="cart-list">
                {items.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </ul>

              <aside className="summary">
                <h2>Order Summary</h2>

                <div>
                  <span>Items ({count})</span>
                  <strong>${total.toFixed(2)}</strong>
                </div>

                <div className="summary-total">
                  <span>Total Cart Amount</span>
                  <strong>${total.toFixed(2)}</strong>
                </div>

                <button className="primary checkout" onClick={checkout}>
                  Checkout
                </button>

                <button className="continue" onClick={() => go('plants')}>
                  ← Continue Shopping
                </button>
              </aside>
            </div>
          )}
        </section>
      )}

      <footer>
        © 2026 Paradise Nursery · Made with care for plant people.
      </footer>
    </>
  );
}
