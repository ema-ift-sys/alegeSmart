"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import * as jwt from "jsonwebtoken";


const IconBox = () => <span style={{ marginRight: '10px' }}>📦</span>;
const IconUsers = () => <span style={{ marginRight: '10px' }}>👥</span>;
const IconChart = () => <span style={{ marginRight: '10px' }}>📊</span>;
const IconExit = () => <span style={{ marginRight: '10px' }}>🚪</span>;

export default function AdminPanel() {
    const router = useRouter();
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState("produse");

    const [produse, setProduse] = useState([
        { id: 1, nume: "iPhone 15 Pro", pret: "5200", categorie: "Electronice" },
        { id: 2, nume: "Frigider Samsung", pret: "3200", categorie: "Electrocasnice" }
    ]);
    
    const [utilizatori] = useState([
        { id: 1, nume: "Roxana Admin", email: "roxanaiftimieema@gmail.com", rol: "admin" },
        { id: 2, nume: "Andrei Popescu", email: "andrei@test.ro", rol: "user" },
        { id: 3, nume: "Elena Ionescu", email: "elena@yahoo.com", rol: "user" }
    ]);

    const [formData, setFormData] = useState({ nume: "", pret: "", categorie: "Electronice" });

    useEffect(() => {
        const access_token = localStorage.getItem("access_token");
        if (!access_token) { router.push("/login"); return; }
        try {
            const decoded = jwt.decode(access_token);
            if (!decoded?.roles?.includes("admin")) { router.push("/"); return; }
            setUser(decoded);
        } catch (e) { router.push("/login"); }
    }, [router]);

    const adaugaProdus = (e) => {
        e.preventDefault();
        setProduse([...produse, { ...formData, id: Date.now() }]);
        setFormData({ nume: "", pret: "", categorie: "Electronice" });
    };

    if (!user) return null;

    return (
        <div style={adminLayout}>
            {/* SIDEBAR */}
            <aside style={sidebarStyle}>
                <h2 style={logoStyle}>AlegeSmart</h2>
                <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    <button 
                        onClick={() => setActiveTab("produse")} 
                        style={activeTab === "produse" ? navBtnActive : navBtn}>
                        <IconBox /> Produse
                    </button>
                    <button 
                        onClick={() => setActiveTab("utilizatori")} 
                        style={activeTab === "utilizatori" ? navBtnActive : navBtn}>
                        <IconUsers /> Utilizatori
                    </button>
                    <button 
                        onClick={() => setActiveTab("statistici")} 
                        style={activeTab === "statistici" ? navBtnActive : navBtn}>
                        <IconChart /> Statistici
                    </button>
                    
                    <div style={{ marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '15px' }}>
                        <button 
                            onClick={() => { localStorage.removeItem("access_token"); router.push("/login"); }} 
                            style={logoutBtn}>
                            <IconExit /> Deconectare
                        </button>
                    </div>
                </nav>
            </aside>

            {/* MAIN CONTENT */}
            <main style={mainContentStyle}>
                {activeTab === "produse" && (
                    <>
                        <h1 style={titleStyle}>Gestiune Produse</h1>
                        <div style={cardStyle}>
                            <h3 style={{ marginBottom: '15px' }}>Adaugă Produs Nou</h3>
                            <form onSubmit={adaugaProdus} style={formStyle}>
                                <input type="text" placeholder="Nume" value={formData.nume} onChange={(e) => setFormData({...formData, nume: e.target.value})} style={inputStyle} required />
                                <input type="number" placeholder="Preț" value={formData.pret} onChange={(e) => setFormData({...formData, pret: e.target.value})} style={inputStyle} required />
                                <button type="submit" style={saveBtn}>+ Adaugă</button>
                            </form>
                        </div>
                        <div style={{ ...cardStyle, marginTop: '25px' }}>
                            <table style={tableStyle}>
                                <thead>
                                    <tr>
                                        <th style={thStyle}>ID</th>
                                        <th style={thStyle}>Nume Produs</th>
                                        <th style={thStyle}>Preț Unitar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {produse.map(p => (
                                        <tr key={p.id} style={trStyle}>
                                            <td style={tdStyle}>#{p.id.toString().slice(-3)}</td>
                                            <td style={tdStyle}>{p.nume}</td>
                                            <td style={{ ...tdStyle, fontWeight: 'bold', color: '#2563eb' }}>{p.pret} RON</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {activeTab === "utilizatori" && (
                    <>
                        <h1 style={titleStyle}>Utilizatori Sistem</h1>
                        <div style={cardStyle}>
                            <table style={tableStyle}>
                                <thead>
                                    <tr>
                                        <th style={thStyle}>Nume Complet</th>
                                        <th style={thStyle}>Adresa Email</th>
                                        <th style={thStyle}>Rol Sistem</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {utilizatori.map(u => (
                                        <tr key={u.id} style={trStyle}>
                                            <td style={tdStyle}>{u.nume}</td>
                                            <td style={tdStyle}>{u.email}</td>
                                            <td style={tdStyle}><span style={badgeStyle}>{u.rol}</span></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </>
                )}

                {activeTab === "statistici" && (
                    <>
                        <h1 style={titleStyle}>Performanță Magazin</h1>
                        <div style={statsGrid}>
                            <div style={{ ...statsCard, borderLeft: '4px solid #2563eb' }}>
                                <p style={statsLabel}>Venit Estimativ</p>
                                <h2 style={statsValue}>14.500 RON</h2>
                            </div>
                            <div style={{ ...statsCard, borderLeft: '4px solid #10b981' }}>
                                <p style={statsLabel}>Comenzi Procesate</p>
                                <h2 style={statsValue}>12</h2>
                            </div>
                            <div style={{ ...statsCard, borderLeft: '4px solid #facc15' }}>
                                <p style={statsLabel}>Sesiuni Active</p>
                                <h2 style={statsValue}>154</h2>
                            </div>
                        </div>
                    </>
                )}
            </main>
        </div>
    );
}


const adminLayout = { display: 'flex', height: '100vh', backgroundColor: '#f1f5f9', fontFamily: 'Arial, sans-serif' };

const sidebarStyle = { 
    width: '260px', 
    backgroundColor: '#0f172a',
    padding: '30px 20px', 
    display: 'flex', 
    flexDirection: 'column',
    boxShadow: '4px 0 10px rgba(0,0,0,0.1)'
};

const logoStyle = { color: 'white', marginBottom: '40px', fontSize: '1.6rem', fontWeight: '800', textAlign: 'center' };

const navBtn = { 
    padding: '12px 16px', 
    textAlign: 'left', 
    backgroundColor: '#0f172a', 
    color: '#94a3b8', 
    border: 'none', 
    cursor: 'pointer', 
    borderRadius: '10px', 
    transition: 'all 0.2s',
    fontSize: '15px',
    fontWeight: '500',
    outline: 'none', 
    width: '100%'
};

const navBtnActive = { 
    ...navBtn, 
    backgroundColor: '#2563eb', 
    color: 'white',
    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)'
};

const logoutBtn = { 
    ...navBtn, 
    backgroundColor: '#0f172a', 
    color: '#f87171' 
};

const mainContentStyle = { flex: 1, padding: '40px', overflowY: 'auto' };
const titleStyle = { fontSize: '1.8rem', fontWeight: '700', color: '#1e293b', marginBottom: '25px' };
const cardStyle = { backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' };
const formStyle = { display: 'flex', gap: '12px' };
const inputStyle = { padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0', flex: 1, outline: 'none' };
const saveBtn = { padding: '12px 24px', backgroundColor: '#10b981', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: '600' };
const tableStyle = { width: '100%', borderCollapse: 'collapse' };
const thStyle = { textAlign: 'left', padding: '12px', color: '#64748b', fontSize: '0.75rem', textTransform: 'uppercase' };
const tdStyle = { padding: '16px 12px', fontSize: '14px', color: '#334155' };
const trStyle = { borderBottom: '1px solid #f1f5f9' };
const badgeStyle = { backgroundColor: '#e2e8f0', color: '#475569', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: '700' };
const statsGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' };
const statsCard = { backgroundColor: 'white', padding: '24px', borderRadius: '16px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' };
const statsLabel = { color: '#64748b', fontSize: '14px' };
const statsValue = { color: '#1e293b', fontSize: '1.8rem', fontWeight: '700' };