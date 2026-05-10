"use client";

import { useState } from 'react';
import Link from 'next/link';
import { useForgotPassword } from '@/api-calls/auth/useForgotPassword';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const { mutate: sendLink, isPending } = useForgotPassword();

  const handleReset = (e) => {
    e.preventDefault();
    
    sendLink({ email }, {
      onSuccess: () => {
        alert(`Un link de resetare a fost trimis la adresa: ${email}`);
      },
      onError: (error) => {
        alert(error.message);
      }
    });
  };

  return (
    <div style={containerStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <h1 style={{ color: '#2563eb', fontSize: '3rem', marginBottom: '20px' }}>AlegeSmart</h1>
        
        <div style={cardStyle}>
          <h2 style={{ marginBottom: '10px' }}>Recuperare Parolă</h2>
          <p style={{ fontSize: '14px', color: '#666', marginBottom: '20px' }}>
            Introdu e-mailul tău și îți vom trimite un link pentru a-ți reseta parola.
          </p>
          
          <form onSubmit={handleReset}>
            <input 
              type="email" 
              placeholder="Adresa de email" 
              style={inputStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button 
              type="submit" 
              style={{...buttonStyle, opacity: isPending ? 0.7 : 1}}
              disabled={isPending}
            >
              {isPending ? "Se trimite..." : "Trimite link-ul"}
            </button>
          </form>

          <div style={{ marginTop: '20px' }}>
            <Link href="/login" style={linkStyle}>
              Înapoi la Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- STILURILE (Rămân neschimbate) ---
const containerStyle = { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100vw', fontFamily: 'Arial, sans-serif', backgroundColor: '#fff', margin: 0, overflow: 'hidden' };
const cardStyle = { padding: '30px', border: '1px solid #eee', borderRadius: '15px', textAlign: 'center', width: '350px', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' };
const inputStyle = { width: '100%', padding: '12px', margin: '15px 0', boxSizing: 'border-box', borderRadius: '8px', border: '1px solid #ddd', outline: 'none' };
const buttonStyle = { width: '100%', padding: '12px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px' };
const linkStyle = { color: '#2563eb', fontSize: '14px', textDecoration: 'none', fontWeight: '500' };