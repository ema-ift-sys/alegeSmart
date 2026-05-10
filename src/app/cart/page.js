"use client";
import Link from 'next/link';

const IconCartEmpty = () => (
  <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '20px auto' }}>
    <circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/>
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>
  </svg>
);

export default function CartPage() {
  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ color: '#2563eb', marginBottom: '30px' }}>Coșul tău AlegeSmart</h1>
      
      <div style={{ border: '1px solid #eee', padding: '40px', borderRadius: '20px', textAlign: 'center', backgroundColor: '#fff', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' }}>
        <IconCartEmpty />
        <p style={{ fontSize: '18px', color: '#666', marginBottom: '25px' }}>Coșul tău este gol momentan.</p>
        <Link href="/">
          <button style={{ padding: '14px 30px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', transition: '0.2s' }}>
            Înapoi la cumpărături
          </button>
        </Link>
      </div>
      
      
      <div style={{ marginTop: '40px', borderTop: '2px solid #f0f0f0', paddingTop: '20px' }}>
        <h3 style={{ marginBottom: '15px' }}>Sumar Comandă</h3>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#666' }}>
          <span>Produse:</span> <span>0 RON</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px', color: '#666' }}>
          <span>Livrare:</span> <span>0 RON</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '22px', marginTop: '10px', color: '#000' }}>
          <span>Total:</span> <span style={{ color: '#2563eb' }}>0 RON</span>
        </div>
      </div>
    </div>
  );
}