import React from 'react';
import { createRoot } from 'react-dom/client';
import { MapPin, Phone, Star, Clock, Utensils, Bike, Users, Home, Fish, Flame, Coffee, Menu as MenuIcon, Leaf, IndianRupee, Navigation, Heart } from 'lucide-react';
import './styles.css';

const phone = '+918861747391';
const displayPhone = '+91 88617 47391';
const address = '39, Varamuneshwara Temple Rd, Chandra Reddy Layout, S T Bed Layout, Ejipura, Bengaluru, Karnataka 560095';
const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`;

const menuItems = [
  { name: 'Kerala Meals', price: 'from ₹90', badge: 'Bestseller', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80', desc: 'Homestyle rice with sambar, thoran, pickle, curd and the day\'s specials, served the way home does it.' },
  { name: 'Fish Curry Meals', price: 'from ₹130', badge: 'Bestseller', img: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=900&q=80', desc: 'Tangy Kerala-style fish curry simmered in coconut and spice, paired with rice and everyday sides.' },
  { name: 'Chicken Curry', price: 'from ₹120', img: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80', desc: 'Slow-cooked chicken in a rich, homely masala, comforting and full of flavour.' },
  { name: 'Sardine Fry / Curry', price: 'ask today', img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=80', desc: 'Fresh mathi done coastal-style, either crisp fry or spicy curry depending on the day\'s kitchen.' },
  { name: 'Biryani', price: 'from ₹110', img: 'https://images.unsplash.com/photo-1563379091339-03246963d7d3?auto=format&fit=crop&w=900&q=80', desc: 'Fragrant long-grain rice layered with tender meat and warm Kerala spices.' },
  { name: 'Kebab', price: 'from ₹100', img: 'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=900&q=80', desc: 'Juicy, char-grilled kebabs that work beautifully as an evening plate with chai on the side.' },
  { name: 'Breakfast Tiffin', price: 'from ₹40', img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=900&q=80', desc: 'Dosa, idli, appam, puttu and other warm starts for a busy Ejipura morning.' },
  { name: 'Tea / Snacks', price: 'from ₹15', img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?auto=format&fit=crop&w=900&q=80', desc: 'Hot tea and everyday snacks to break up a long Bengaluru day.' },
];

const whyItems = [
  { icon: Home, title: 'Homestyle taste', text: 'Fish curry, sardine, chicken and Kerala meals cooked with the comfort of family food.' },
  { icon: IndianRupee, title: 'Everyday pricing', text: 'Affordable meals that stay easy on the wallet for students, office-goers and families.' },
  { icon: Flame, title: 'Quick meals', text: 'Built for real lunch breaks: walk in, eat well, and get back to your day without fuss.' },
  { icon: Bike, title: 'Easy takeaway', text: 'Packing to go? Call ahead and pick up your meal on the way home.' },
  { icon: Users, title: 'Indoor seating', text: 'A casual space that works for solo meals, colleagues, friends or the whole family.' },
];

const publicHighlights = [
  ['Ejipura regular', 'Homestyle Kerala meals that taste close to home cooking, with fish curry often called out as a favourite.'],
  ['Nearby office-goer', 'Affordable, filling and quick enough for a proper lunch break without stretching the budget.'],
  ['Local diner', 'Simple, peaceful and no-fuss, with helpful service and a dependable neighbourhood feel.'],
  ['Koramangala resident', 'Good biryani, consistent meals and easy takeaway when sitting in is not the plan.'],
];

function App() {
  return (
    <div id="top" className="site-shell">
      <header className="header">
        <a className="brand" href="#top" aria-label="Kerala Mess. SIJI's MESS home">
          <span className="brand-icon"><Leaf size={22} /></span>
          <span><strong>SIJI\'s MESS</strong><em>Kerala Mess</em></span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#why">Why Visit</a>
          <a href="#location">Location</a>
        </nav>
        <a className="call-pill" href={`tel:${phone}`}><Phone size={17} /> Call Now</a>
        <button className="menu-button" aria-label="Toggle menu"><MenuIcon /></button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-content">
            <div className="rating-row">
              <span className="rating"><Star size={16} fill="currentColor" /> 4.2</span>
              <span>803 Google reviews</span>
            </div>
            <p className="eyebrow">Authentic Kerala Kitchen · Ejipura</p>
            <h1>Homestyle Kerala meals, right in your neighbourhood.</h1>
            <p className="hero-copy">A no-fuss Kerala mess in Ejipura serving fish curry, chicken curry, sardine, biryani, kebab and everyday breakfast to dinner. Affordable meals that taste like home.</p>
            <div className="hero-actions">
              <a className="primary-btn" href={`tel:${phone}`}><Phone size={19} /> Call Now · {displayPhone}</a>
              <a className="secondary-btn" href={mapsUrl} target="_blank" rel="noreferrer"><Navigation size={19} /> Get Directions</a>
            </div>
            <div className="trust-strip">
              <span><Utensils size={18} /> Dine-in · Takeaway · Group-friendly</span>
              <span><Clock size={18} /> Open daily · call to confirm today\'s timings</span>
            </div>
          </div>
          <div className="hero-card">
            <img src="https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1100&q=85" alt="Traditional Kerala banana-leaf meal" />
            <div className="floating-card">
              <Fish size={24} />
              <div><strong>Fish curry, meals & biryani</strong><span>Kerala comfort food in Ejipura</span></div>
            </div>
          </div>
        </section>

        <section id="about" className="section about-grid">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2>A neighbourhood mess you can trust, meal after meal.</h2>
            <p>SIJI\'s MESS brings honest, homestyle Kerala cooking to Ejipura, Koramangala side, Bengaluru, at prices that make sense for everyday eating. No frills, no fancy promises, just food made with the warmth and directness of a local kitchen.</p>
            <p>From morning tiffin to a filling lunch plate or an evening kebab-and-tea stop, the kitchen keeps things fresh, familiar and consistent. Office-goers, students and families around Varamuneshwara Temple Road use it as part of their routine, and that is exactly what a good mess should be.</p>
            <div className="mini-stats">
              <span><Heart /> Homestyle<br /><small>Comforting Kerala food</small></span>
              <span><Star /> Reliable<br /><small>4.2★ public rating</small></span>
              <span><MapPin /> Local<br /><small>Varamuneshwara Temple Rd</small></span>
            </div>
          </div>
          <img className="about-img" src="https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85" alt="Warm casual Kerala mess dining" />
        </section>

        <section id="menu" className="section menu-section">
          <div className="section-head">
            <p className="eyebrow">Our Favourites</p>
            <h2>What the neighbourhood loves ordering.</h2>
            <p>Prices are indicative starting points. Daily specials and portions can vary, so call to ask for today\'s fresh catch and kitchen specials.</p>
          </div>
          <div className="menu-grid">
            {menuItems.map((item) => (
              <article className="menu-card" key={item.name}>
                <div className="menu-image">
                  <img src={item.img} alt={item.name} />
                  {item.badge && <span>{item.badge}</span>}
                </div>
                <div className="menu-body">
                  <div><h3>{item.name}</h3><strong>{item.price}</strong></div>
                  <p>{item.desc}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="callout"><span>Ask for today\'s special or place a takeaway order.</span><a href={`tel:${phone}`}><Phone size={18} /> Call {displayPhone}</a></div>
        </section>

        <section id="why" className="section why-section">
          <div className="section-head compact">
            <p className="eyebrow">Why Locals Visit</p>
            <h2>Small reasons that keep people coming back.</h2>
          </div>
          <div className="why-grid">
            {whyItems.map(({ icon: Icon, title, text }) => <div className="why-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="section highlights">
          <div className="highlight-top">
            <div><p className="eyebrow">Public Highlights</p><h2>What people say around Ejipura.</h2></div>
            <div className="score"><strong>4.2</strong><span><Star fill="currentColor" /> 803 Google reviews</span></div>
          </div>
          <div className="highlight-grid">
            {publicHighlights.map(([person, quote]) => <figure key={person}><div className="stars">★★★★★</div><blockquote>“{quote}”</blockquote><figcaption>{person}<small>Paraphrased from public listing signals</small></figcaption></figure>)}
          </div>
          <p className="fineprint">Highlights are paraphrased from public listing signals and are not verbatim named reviews.</p>
        </section>

        <section id="location" className="section location-section">
          <div className="location-card">
            <p className="eyebrow">Visit Us</p>
            <h2>Find us in Ejipura.</h2>
            <div className="contact-list">
              <p><MapPin /> <span>{address}</span></p>
              <p><Clock /> <span>Open daily, commonly listed around 8:00 AM – 11:00 PM. Call to confirm today\'s timings.</span></p>
              <p><Phone /> <a href={`tel:${phone}`}>{displayPhone}</a></p>
            </div>
            <div className="hero-actions"><a className="primary-btn" href={mapsUrl} target="_blank" rel="noreferrer"><Navigation size={19} /> Get Directions</a><a className="secondary-btn" href={`tel:${phone}`}><Phone size={19} /> Call to Confirm</a></div>
          </div>
          <iframe title="Kerala Mess. SIJI's MESS map" loading="lazy" src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}></iframe>
        </section>
      </main>

      <footer>
        <div className="footer-grid">
          <div><div className="footer-brand"><Leaf /> <strong>SIJI\'s MESS</strong></div><p>Kerala Restaurant & Neighbourhood Mess in Ejipura, Koramangala side, Bengaluru. Homestyle meals, everyday prices.</p></div>
          <div><strong>Quick Links</strong><a href="#about">About</a><a href="#menu">Menu</a><a href="#why">Why Visit</a><a href="#location">Location</a></div>
          <div><strong>Reach Us</strong><a href={`tel:${phone}`}><Phone size={16} /> {displayPhone}</a><a href={mapsUrl} target="_blank" rel="noreferrer"><MapPin size={16} /> {address}</a></div>
        </div>
        <div className="footer-bottom"><span>SIJI\'s MESS</span><span>© 2026 Kerala Mess · SIJI\'s MESS. All rights reserved.</span></div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />);
