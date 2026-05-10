"use client";
import Link from 'next/link';

const IconHeartEmpty = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '20px auto' }}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
  </svg>
);

export default function WishlistPage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2563eb', display: 'flex', alignItems: 'center', gap: '10px' }}>
        Produse Favorite
      </h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: '50px', background: '#f9f9f9', borderRadius: '20px', border: '1px dashed #ddd' }}>
          <IconHeartEmpty />
          <p style={{ fontSize: '18px', color: '#666', marginBottom: '20px' }}>Nu ai salvat niciun produs încă.</p>
          <Link href="/" style={{ color: '#2563eb', fontWeight: 'bold', textDecoration: 'none', borderBottom: '2px solid #2563eb' }}>
            Explorează Electronice și Electrocasnice
          </Link>
        </div>
      </div>
    </div>
  );
}