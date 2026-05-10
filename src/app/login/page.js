"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSignIn } from '../../api-calls/auth/useSignIn'; 

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const { mutate: signIn, isPending } = useSignIn();

  const handleLogin = (e) => {
    e.preventDefault(); 

    if (email === '' || password === '') {
      alert('Te rugăm să completezi toate câmpurile!');
      return;
    }

    signIn(
      { email, password },
      {
        onSuccess: (data) => {
          localStorage.setItem("access_token", data.access_token); 
          alert("Te-ai logat cu succes!");
          router.push('/admin'); 
        },
        onError: (error) => {
          alert("Eroare la autentificare. Verifică datele introduse.");
        },
      }
    );
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#2563eb', fontSize: '3rem', marginBottom: '20px' }}>AlegeSmart</h1>
      
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center', color: '#333' }}>Autentificare</h2>
        
        <form onSubmit={handleLogin}>
          <input 
            type="email" 
            placeholder="Email" 
            style={inputStyle} 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          
          <input 
            type="password" 
            placeholder="Parolă" 
            style={inputStyle} 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button 
            type="submit" 
            style={{...buttonStyle, opacity: isPending ? 0.7 : 1}}
            disabled={isPending}
          >
            {isPending ? "Se verifică..." : "Intră în cont"}
          </button>
        </form>

        <div style={{ marginTop: '20px' }}>
          <Link href="/forgot-password" style={forgotPasswordStyle}>
            Ai uitat parola?
          </Link>
          
          <div style={registerContainerStyle}>
            <span>Nu ai cont?</span>
            <Link href="/register" style={registerLinkStyle}>
              Înregistrează-te
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- STILURI ---
const containerStyle = { 
  display: 'flex', 
  flexDirection: 'column', 
  justifyContent: 'center', 
  alignItems: 'center', 
  height: '100vh', 
  fontFamily: 'Arial, sans-serif',
  backgroundColor: '#f8fafc' 
};

const cardStyle = { 
  maxWidth: '350px', 
  width: '100%', 
  padding: '35px', 
  border: '1px solid #eee', 
  borderRadius: '15px', 
  boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
  backgroundColor: '#fff'
};

const inputStyle = { 
  width: '100%', 
  padding: '12px', 
  margin: '10px 0', 
  boxSizing: 'border-box', 
  borderRadius: '8px', 
  border: '1px solid #ddd', 
  outline: 'none',
  fontSize: '14px'
};

const buttonStyle = { 
  width: '100%', 
  padding: '12px', 
  backgroundColor: '#2563eb', 
  color: 'white', 
  border: 'none', 
  borderRadius: '8px', 
  cursor: 'pointer', 
  fontWeight: 'bold', 
  fontSize: '16px', 
  marginTop: '10px',
  transition: '0.2s'
};

const forgotPasswordStyle = { 
  color: '#2563eb', 
  display: 'block', 
  marginBottom: '15px', 
  textDecoration: 'none', 
  fontSize: '14px',
  fontWeight: '500',
  textAlign: 'center' 
};

const registerContainerStyle = { 
  fontSize: '14px', 
  color: '#666',
  display: 'flex',
  justifyContent: 'center',
  gap: '5px'
};

const registerLinkStyle = { 
  color: '#2563eb', 
  textDecoration: 'none'
};