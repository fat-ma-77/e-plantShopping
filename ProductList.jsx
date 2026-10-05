import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './CartSlice';

export const plants = [
  { id: 't1', name: 'Golden Pothos', category: 'Air Purifying', price: 18, emoji: '🌿', description: 'A resilient trailing vine that brightens every room.' },
  { id: 't2', name: 'Snake Plant', category: 'Air Purifying', price: 24, emoji: '🪴', description: 'Sculptural, low-maintenance greenery for beginners.' },
  { id: 't3', name: 'Peace Lily', category: 'Air Purifying', price: 28, emoji: '🌱', description: 'Elegant leaves and delicate white blooms.' },
  { id: 't4', name: 'Boston Fern', category: 'Air Purifying', price: 22, emoji: '🌿', description: 'Lush, feathery fronds with a soft tropical feel.' },
  { id: 't5', name: 'Rubber Plant', category: 'Air Purifying', price: 32, emoji: '🍃', description: 'Glossy leaves and a bold upright silhouette.' },
  { id: 't6', name: 'Areca Palm', category: 'Air Purifying', price: 36, emoji: '🌴', description: 'A graceful palm that adds instant resort style.' },
  { id: 's1', name: 'Monstera Deliciosa', category: 'Tropical', price: 34, emoji: '🌿', description: 'Iconic split leaves for a statement corner.' },
  { id: 's2', name: 'Calathea Orbifolia', category: 'Tropical', price: 30, emoji: '🌱', description: 'Striped, silvery leaves with tropical character.' },
  { id: 's3', name: 'Bird of Paradise', category: 'Tropical', price: 42, emoji: '🌴', description: 'Large dramatic leaves for sunny spaces.' },
  { id: 's4', name: 'Alocasia Polly', category: 'Tropical', price: 27, emoji: '🍃', description: 'Arrow-shaped leaves with striking veins.' },
  { id: 's5', name: 'Philodendron Brasil', category: 'Tropical', price: 21, emoji: '🌿', description: 'Heart-shaped leaves brushed with golden green.' },
  { id: 's6', name: 'Anthurium', category: 'Tropical', price: 26, emoji: '🌺', description: 'Glossy foliage and cheerful long-lasting flowers.' },
  { id: 'c1', name: 'Haworthia', category: 'Succulents', price: 14, emoji: '🌵', description: 'Compact striped rosettes for a sunny desk.' },
  { id: 'c2', name: 'Echeveria', category: 'Succulents', price: 13, emoji: '🪷', description: 'Pastel rosettes that love bright light.' },
  { id: 'c3', name: 'Aloe Vera', category: 'Succulents', price: 16, emoji: '🌵', description: 'A useful, architectural plant for your windowsill.' },
  { id: 'c4', name: 'String of Pearls', category: 'Succulents', price: 20, emoji: '🟢', description: 'Playful bead-like vines that spill beautifully.' },
  { id: 'c5', name: 'Jade Plant', category: 'Succulents', price: 19, emoji: '🍀', description: 'A classic glossy-leaved good-luck plant.' },
  { id: 'c6', name: 'Zebra Cactus', category: 'Succulents', price: 15, emoji: '🌵', description: 'Bold white stripes in a tiny easy-care package.' }
];

export default function ProductList() { const dispatch = useDispatch(); const items = useSelector((s) => s.cart.items); const categories = [...new Set(plants.map((p) => p.category))]; return <main className="catalog" id="plants">{categories.map((category) => <section className="category" key={category}><div className="section-heading"><div><p className="eyebrow">SHOP THE COLLECTION</p><h2>{category}</h2></div><span>{plants.filter((p) => p.category === category).length} plants</span></div><div className="product-grid">{plants.filter((p) => p.category === category).map((plant) => { const inCart = items.some((item) => item.id === plant.id); return <article className="product-card" key={plant.id}><div className="plant-art">{plant.emoji}</div><div className="product-info"><span className="tag">{category}</span><h3>{plant.name}</h3><p>{plant.description}</p><div className="product-footer"><strong>${plant.price.toFixed(2)}</strong><button onClick={() => dispatch(addToCart(plant))} disabled={inCart}>{inCart ? 'Added ✓' : 'Add to cart'}</button></div></div></article>; })}</div></section>)}</main>; }
