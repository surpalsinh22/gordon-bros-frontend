import React, { useState, useEffect } from 'react';
import bannerImg from '../assets/slide.webp';
import ct1 from '../assets/ct1.webp';
import ct2 from '../assets/ct2.webp';
import ct3 from '../assets/ct3.webp';
import ct5 from '../assets/ct5.webp';
import bb1 from '../assets/bb1.webp';
import products from '../datas/products';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const productSections = [
    { title: 'Boots', product: products.boots[0] },
    { title: 'Sandals', product: products.sandals[0] },
    { title: 'Formal', product: products.formal[0] },
    { title: 'Sneakers', product: products.sneakers[0] },
  ];

  const categories = [
    { title: 'Sandals', image: ct1, route: '/Shoes/Sandals' },
    { title: 'Formal', image: ct2, route: '/Shoes/Formal' },
    { title: 'Boots', image: ct3, route: '/Shoes/Boots' },
    { title: 'Sneakers', image: ct5, route: '/Shoes/Sneakers' },
  ];

  return (
    <div className="pt-12 bg-white">

      {/* HERO */}
      <div className="relative h-screen overflow-hidden">
        <img
          src={bannerImg}
          alt="Banner"
          className="w-full h-full object-cover"
          style={{ transform: loaded ? 'scale(1)' : 'scale(1.05)', transition: 'transform 2000ms ease-out' }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p
            className="text-xs tracking-[0.35em] uppercase text-amber-300 mb-4"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(16px)', transition: 'all 700ms 300ms' }}
          >
            Handcrafted Since 1987
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-5"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 700ms 500ms' }}
          >
            Shoes That <span className="italic font-light">Speak</span> For You
          </h1>
          <p
            className="text-white/70 text-sm md:text-base mb-10 max-w-md"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 700ms 700ms' }}
          >
            Premium leather footwear crafted with German precision &amp; Indian soul.
          </p>
          <div
            className="flex gap-4 flex-wrap justify-center"
            style={{ opacity: loaded ? 1 : 0, transform: loaded ? 'translateY(0)' : 'translateY(20px)', transition: 'all 700ms 900ms' }}
          >
            <Link to="/Shoes" onClick={() => window.scrollTo(0, 0)}
              className="bg-white text-neutral-900 px-9 py-3 text-xs font-bold tracking-widest uppercase hover:bg-amber-400 hover:text-white transition-colors duration-300">
              Shop Now
            </Link>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}
              className="border border-white text-white px-9 py-3 text-xs font-bold tracking-widest uppercase hover:border-amber-400 hover:text-amber-400 transition-colors duration-300">
              Our Story
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <div className="w-px h-10 bg-white/40 animate-pulse" />
          <p className="text-white/40 text-[10px] tracking-[0.25em] uppercase">Scroll</p>
        </div>
      </div>

      {/* STRIP */}
      <div className="bg-neutral-900 text-white text-center py-3 text-[11px] tracking-[0.25em] uppercase">
        Free Shipping &nbsp;·&nbsp; Premium Leather &nbsp;·&nbsp; Handcrafted Quality
      </div>

      {/* BEST SELLERS */}
      <div className="py-20 px-4 bg-neutral-50">
        <p className="text-center text-[11px] tracking-[0.3em] uppercase text-amber-500 mb-2">Top Picks</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-800">Best Sellers</h2>
        <div className="w-10 h-0.5 bg-amber-400 mx-auto mt-3 mb-12" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {productSections.map((section, i) => (
            <div key={i}>
              <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-400 mb-3 text-center">
                {section.title}
              </p>
              <ProductCard product={section.product} />
            </div>
          ))}
        </div>
      </div>

      {/* CATEGORIES */}
      <div className="bg-white">
        <div className="py-16 text-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-amber-500 mb-2">Collections</p>
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-800">Shop by Category</h2>
          <div className="w-10 h-0.5 bg-amber-400 mx-auto mt-3" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 pb-20">
          {categories.map((cat, idx) => (
            <Link to={cat.route} key={idx} onClick={() => window.scrollTo(0, 0)}
              className="relative overflow-hidden group block">
              <img src={cat.image} alt={cat.title}
                className="w-full h-72 md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
              <div className="absolute bottom-5 left-0 right-0 text-center">
                <p className="text-white font-semibold tracking-widest uppercase text-sm">{cat.title}</p>
                <p className="text-amber-300 text-xs tracking-wider mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Explore →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* ABOUT */}
      <div className="bg-neutral-900 text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 items-center">
          <img src={bb1} alt="Craftsmanship" className="w-full h-72 md:h-[500px] object-cover" />
          <div className="px-10 py-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-3">Who We Are</p>
            <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-4">
              Timeless Elegance<br />Meets German Precision
            </h2>
            <div className="w-8 h-0.5 bg-amber-400 mb-6" />
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              At Gordon &amp; Bros, we craft leather shoes that stand as a testament
              to German precision and artisanal expertise. Our shoes are more than
              fashion — they're an embodiment of sophistication. When you choose
              us, you choose unparalleled craftsmanship.
            </p>
            <Link to="/about" onClick={() => window.scrollTo(0, 0)}
              className="inline-block border-b border-amber-400 text-amber-400 pb-0.5 text-xs font-bold tracking-widest uppercase hover:text-amber-300 hover:border-amber-300 transition-colors duration-300">
              Read Our Story →
            </Link>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-amber-400 py-14 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { num: '37+', label: 'Years of Craft' },
            { num: '50K+', label: 'Happy Customers' },
            { num: '200+', label: 'Designs' },
            { num: '100%', label: 'Genuine Leather' },
          ].map((s, i) => (
            <div key={i}>
              <p className="text-4xl font-bold text-neutral-900">{s.num}</p>
              <div className="w-6 h-0.5 bg-neutral-900/30 mx-auto my-2" />
              <p className="text-[11px] font-semibold tracking-widest uppercase text-neutral-800">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* WHY US */}
      <div className="bg-neutral-50 py-20 px-4">
        <p className="text-center text-[11px] tracking-[0.3em] uppercase text-amber-500 mb-2">Why Gordon &amp; Bros</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-800">Built Different</h2>
        <div className="w-10 h-0.5 bg-amber-400 mx-auto mt-3 mb-12" />
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: 'https://cdn-icons-png.flaticon.com/512/9693/9693983.png', title: 'Finest Leather', desc: 'Premium hides for comfort and durability.' },
            { icon: 'https://cdn-icons-png.flaticon.com/512/197/197419.png', title: 'Made in India', desc: 'Indian craftsmanship with a modern edge.' },
            { icon: 'https://cdn-icons-png.flaticon.com/512/190/190411.png', title: 'Handcrafted', desc: 'Skilled artisans perfect every pair.' },
            { icon: 'https://cdn-icons-png.flaticon.com/512/8083/8083703.png', title: 'Free Shipping', desc: 'Fast delivery on every order.' },
          ].map((f, i) => (
            <div key={i} className="bg-white border border-neutral-200 p-7 text-center hover:border-amber-300 hover:shadow-sm transition-all duration-300">
              <div className="w-14 h-14 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <img src={f.icon} alt={f.title} className="w-7 h-7 opacity-80" />
              </div>
              <p className="text-[11px] font-bold tracking-widest uppercase text-neutral-800 mb-2">{f.title}</p>
              <p className="text-neutral-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* REVIEWS */}
      <div className="bg-white py-20 px-4">
        <p className="text-center text-[11px] tracking-[0.3em] uppercase text-amber-500 mb-2">Customer Reviews</p>
        <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-800">What People Say</h2>
        <div className="w-10 h-0.5 bg-amber-400 mx-auto mt-3 mb-12" />
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          {[
            { text: 'Quality, comfort, and style in one package. Highly recommended.', name: 'Sarah M.', role: 'Verified Buyer' },
            { text: 'Wear them daily and they still look brand new. Worth every penny!', name: 'John D.', role: 'Verified Buyer' },
            { text: 'Perfect fit and super stylish. Comfort meets elegance perfectly.', name: 'Emily R.', role: 'Verified Buyer' },
          ].map((r, i) => (
            <div key={i} className="bg-neutral-50 border border-neutral-200 p-7 hover:border-amber-300 hover:bg-white transition-all duration-300">
              <div className="text-amber-400 text-sm tracking-widest mb-4">★★★★★</div>
              <p className="text-neutral-700 text-sm leading-relaxed mb-6">"{r.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-amber-100 flex items-center justify-center text-amber-700 text-xs font-bold">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-neutral-800">{r.name}</p>
                  <p className="text-[11px] text-neutral-400">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BOTTOM CTA */}
      <div className="bg-neutral-900 text-white py-24 px-4 text-center">
        <p className="text-[11px] tracking-[0.3em] uppercase text-amber-400 mb-4">New Arrivals Are Here</p>
        <h2 className="text-2xl md:text-4xl font-bold mb-4">Find Your Perfect Pair</h2>
        <p className="text-neutral-400 text-sm mb-10 max-w-sm mx-auto leading-relaxed">
          Browse our full collection of handcrafted leather shoes made for every occasion.
        </p>
        <Link to="/Shoes" onClick={() => window.scrollTo(0, 0)}
          className="inline-block bg-amber-400 text-neutral-900 px-12 py-4 text-xs font-bold tracking-widest uppercase hover:bg-amber-300 transition-colors duration-300">
          Shop the Collection
        </Link>
      </div>

    </div>
  );
}
