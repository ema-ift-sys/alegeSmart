"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useSignUp } from '@/api-calls/auth/useSignUp';

export default function RegisterPage() {
  const router = useRouter();
  const { mutate: signUp, isPending } = useSignUp();

  
  const [formData, setFormData] = useState({
    nume: '',
    prenume: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Parolele nu coincid!");
      return;
    }

   
    signUp(formData, {
      onSuccess: () => {
        alert("Cont creat cu succes!");
        router.push('/login');
      },
      onError: (error) => {
        alert("Eroare: " + error.message);
      }
    });
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ color: '#2563eb', fontSize: '3rem', marginBottom: '20px' }}>AlegeSmart</h1>
      
      <div style={cardStyle}>
        <h2 style={{ marginBottom: '20px', textAlign: 'center' }}>Creează un cont nou</h2>
        
        <form onSubmit={handleRegister} style={formStyle}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <input name="nume" type="text" placeholder="Nume" style={{...inputStyle, flex: 1}} onChange={handleChange} required />
            <input name="prenume" type="text" placeholder="Prenume" style={{...inputStyle, flex: 1}} onChange={handleChange} required />
          </div>
          <input name="email" type="email" placeholder="Email" style={inputStyle} onChange={handleChange} required />
          <input name="password" type="password" placeholder="Parolă" style={inputStyle} onChange={handleChange} required />
          <input name="confirmPassword" type="password" placeholder="Confirmă Parola" style={inputStyle} onChange={handleChange} required />
          
          <button 
            type="submit" 
            style={{...buttonStyle, opacity: isPending ? 0.7 : 1}}
            disabled={isPending}
          >
            {isPending ? "Se procesează..." : "Înregistrare"}
          </button>
        </form>

        <div style={loginContainerStyle}>
          <span>Ai deja cont?</span>
          <Link href="/login" style={loginLinkStyle}>
            Loghează-te aici
          </Link>
        </div>
      </div>
    </div>
  );
}


const containerStyle = { 
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center', 
  alignItems: 'center',  
  height: '100vh',        
  width: '100vw',         
  backgroundColor: '#fff',
  margin: 0,
  padding: 0,
  overflow: 'hidden',       
  fontFamily: 'Arial, sans-serif'
};

const cardStyle = { 
  maxWidth: '400px', 
  width: '90%',             
  padding: '30px', 
  border: '1px solid #eee', 
  borderRadius: '15px', 
  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
  backgroundColor: '#fff'
};

const formStyle = { display: 'flex', flexDirection: 'column', gap: '12px' };
const inputStyle = { width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #ddd', fontSize: '16px', outline: 'none', boxSizing: 'border-box' };
const buttonStyle = { padding: '14px', background: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '16px', marginTop: '10px' };
const loginContainerStyle = { marginTop: '20px', fontSize: '14px', color: '#666', display: 'flex', justifyContent: 'center', gap: '5px' };
const loginLinkStyle = { color: '#2563eb', textDecoration: 'none'};