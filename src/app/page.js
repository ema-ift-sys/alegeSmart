"use client";

import { useState, useEffect, } from 'react';

import { useRouter } from 'next/navigation';

const IconSearch = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>;
const IconHeart = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>;
const IconCart = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>;
const IconUser = ({ color = "#2563eb" }) => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>;
const Chevron = ({ up }) => <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '5px' }}><path d={up ? "m18 15-6-6-6 6" : "m6 9 6 6 6-6"}/></svg>;
const IconRobot = () => <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4M8 16h.01M16 16h.01"/></svg>;

const slides = [
  { url: 'https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000', titlu: 'iPhone 15 Pro - Reduceri de Primăvară' },
  { url: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1000', titlu: 'Electrocasnice Premium pentru Bucătărie' },
  { url: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1000', titlu: 'MacBook Air M3 - Putere și Eleganță' }
];


const toateProdusele = [
  // --- ELECTRONICE ---
  { id: 1, nume: "Smartphone Apple iPhone 15 Pro, 128GB, 5G, Natural Titanium", pret: "5200 RON", imagine: "https://s13emagst.akamaized.net/products/60458/60457155/images/res_4f32400ed4b4e50c33453c7b2d552785.jpg?width=720&height=720&hash=247A891A4200E28E2711CA7B3EB10F0F", tip: "Electronice" },
  { id: 2, nume: "Casti Audio Sony WH-1000XM5, Noise Cancelling, Wireless, Silver", pret: "1200 RON", imagine: "https://s13emagst.akamaized.net/products/45775/45774175/images/res_611e95c37550f7d429489b0650ec33ec.jpg?width=720&height=720&hash=BE1C5320D0F8EB3CCD3E63C637356FD3", tip: "Electronice" },
  { id: 3, nume: "Laptop Apple MacBook Air 13 cu procesor M3, 8GB RAM, 256GB SSD", pret: "6500 RON", imagine: "https://s13emagst.akamaized.net/products/68011/68010289/images/res_128e6cfd7ee0770e5a01e6cdae92045b.jpg?width=720&height=720&hash=44EE93DDA2BDA87473DD12E3BC6B1DAA", tip: "Electronice" },
  { id: 4, nume: "Televizor LG OLED Evo C3, 139 cm, Smart, 4K Ultra HD, 100Hz", pret: "2500 RON", imagine: "https://s13emagst.akamaized.net/products/91151/91150898/images/res_c9b677ee9bdd573bf5e858b6bf4446fe.jpg?width=720&height=720&hash=4CBFC262B15E09B18D9919F51EE24381", tip: "Electronice" },
  { id: 5, nume: "Tableta Apple iPad Pro 11, 4th Gen, M2, 128GB, Wi-Fi, Space Grey", pret: "4300 RON", imagine: "https://s13emagst.akamaized.net/products/49825/49824113/images/res_b129aff8ae3bfb7d45ca0c11c9797bd8.jpg?width=720&height=720&hash=FB63BBC81E16DDBAD0E23F882EEBBD29", tip: "Electronice" },
  { id: 6, nume: "Consola PlayStation 5 (PS5) Digital Edition, 825GB SSD, White", pret: "2400 RON", imagine: "https://s13emagst.akamaized.net/products/77820/77819005/images/res_c6805f12331c88d43c215c6610b57337.jpg?width=720&height=720&hash=7DB887726EF0C1E76BD6E597A469F2FE", tip: "Electronice" },
  { id: 7, nume: "Boxa Portabila JBL Flip 6, Bluetooth, IP67, Waterproof, Black", pret: "550 RON", imagine: "https://lcdn.altex.ro/media/catalog/product/B/o/Boxa_portabila_JBL_Flip_6_Bluetooth_30W_Waterproof_negru_2_.jpg", tip: "Electronice" },
  { id: 8, nume: "Smartwatch Apple Watch Series 9, GPS, Midnight Aluminum Case", pret: "1900 RON", imagine: "https://s13emagst.akamaized.net/products/60442/60441066/images/res_108a7442cae751d28cde925295f18cc7.jpg?width=720&height=720&hash=665F9B7BE554077753E9090E9C0A124D", tip: "Electronice" },
  { id: 9, nume: "Smartphone Samsung Galaxy S24 Ultra, 256GB, 5G, Titanium Gray", pret: "5800 RON", imagine: "https://s13emagst.akamaized.net/products/64817/64816454/images/res_77def1f199ad6f0779f5c7e562f97e5b.jpg?width=720&height=720&hash=2E68EDA83FEBED8DBF9177EF2F7481BE", tip: "Electronice" },
  { id: 10, nume: "Camera Foto Mirrorless Sony Alpha A7 IV, 33MP, Full-Frame", pret: "11500 RON", imagine: "https://s13emagst.akamaized.net/products/41291/41290328/images/res_c4d7ddf5aab8b92fc9c18f2284fff5a9.jpg?width=720&height=720&hash=F768A90EA66D205121D31D69855776BA", tip: "Electronice" },
  { id: 11, nume: "Mouse Gaming Wireless Razer DeathAdder V3 Pro, Black", pret: "680 RON", imagine: "https://s13emagst.akamaized.net/products/53059/53058880/images/res_1555b39049f57d0beee344a68b34d5fb.jpg?width=720&height=720&hash=12D10B9EBE0EA8CF087FBAEF247363C8", tip: "Electronice" },
  { id: 12, nume: "Monitor Gaming ASUS ROG Swift 27 inch, IPS, 144Hz, 1ms", pret: "2300 RON", imagine: "https://s13emagst.akamaized.net/products/111813/111812642/images/res_b2d12f5269df142a9074fde60a0be05c.jpg?width=720&height=720&hash=566EF046BCBE533145A44B67824C4A09", tip: "Electronice" },

  // --- ELECTROCASNICE ---
  { id: 13, nume: "Frigider Side-by-Side Samsung, 634L, Full No Frost, Clasa E", pret: "3200 RON", imagine: "https://s13emagst.akamaized.net/products/56334/56333575/images/res_5ccb821cfd48d70bb437f390f09432fb.jpg?width=720&height=720&hash=FD46396B33F225E424FC759A812173F4", tip: "Electrocasnice" },
  { id: 14, nume: "Masina de spalat rufe LG, 9kg, AI DD, Motor Inverter, Clasa A", pret: "1800 RON", imagine: "https://s13emagst.akamaized.net/products/60039/60038551/images/res_c85608c52a19cfafb4146232dcec4da2.jpg?width=720&height=720&hash=BEBB03146CEAF7AA789E4ECCDB5E005B", tip: "Electrocasnice" },
  { id: 15, nume: "Cuptor cu microunde incorporabil Bosch, 20L, 800W, Grill, Inox", pret: "600 RON", imagine: "https://s13emagst.akamaized.net/products/14336/14335517/images/res_cf647c623ee5cd63b5efe2b5ec777c8c.jpg?width=720&height=720&hash=39CC732B339A4C99FC638F00097B80ED", tip: "Electrocasnice" },
  { id: 16, nume: "Aspirator robot Roborock S8, Mop integrat, 6000Pa, LiDAR", pret: "1400 RON", imagine: "https://s13emagst.akamaized.net/products/102928/102927694/images/res_d67b2a00b55e3dc84b2c00e81f4b1ee5.jpg?width=720&height=720&hash=6005ED57CC85769B4AFE42A65430648F", tip: "Electrocasnice" },
  { id: 17, nume: "Espressor Cafea Automat Philips LatteGo, Sistem lapte, 15 bar", pret: "2100 RON", imagine: "https://s13emagst.akamaized.net/products/101109/101108377/images/res_a4583b993891448372bdf9918d0e0e77.jpg?width=720&height=720&hash=05B9F20FBEA05AFB5A157BF354C7A6FD", tip: "Electrocasnice" },
  { id: 18, nume: "Mixer Vertical Tefal Quickchef, 1000W, 20 Viteze, Pahar 0.8L", pret: "250 RON", imagine: "https://s13emagst.akamaized.net/products/75863/75862961/images/res_3ed9c88fbc6f346768bb22c80bcb765b.jpg?width=720&height=720&hash=DFEF39DC3DED0D487D6FA72EBE06BD7F", tip: "Electrocasnice" },
  { id: 19, nume: "Friteuza cu aer cald Ninja Air Fryer AF100, 3.8L, 1550W, Grey", pret: "450 RON", imagine: "https://s13emagst.akamaized.net/products/42806/42805921/images/res_847006338bf509b5433881f9c312f8a6.jpg?width=720&height=720&hash=49B1C5C61DC4A2D4655627A152AAE5F4", tip: "Electrocasnice" },
  { id: 20, nume: "Purificator de Aer Xiaomi Smart Air Purifier 4, Filtru HEPA", pret: "900 RON", imagine: "https://s13emagst.akamaized.net/products/48600/48599753/images/res_30995848fb4615de3a25663ab8e6c162.jpg?width=720&height=720&hash=8FA0EAB014F9438C08D10CB25C284961", tip: "Electrocasnice" },
  { id: 21, nume: "Masina de spalat vase Beko Incorporabila, 13 seturi, 6 programe", pret: "1550 RON", imagine: "https://s13emagst.akamaized.net/products/40915/40914442/images/res_28196f759338eba16366ca34e06a2b82.jpg?width=720&height=720&hash=89273F3E7EBA114DFA3FCC41AADEE571", tip: "Electrocasnice" },
  { id: 22, nume: "Statie de calcat Tefal Pro Express Ultimate, 8 bar, Jet abur 650g", pret: "1200 RON", imagine: "https://s13emagst.akamaized.net/products/78496/78495878/images/res_42cf11c648c73f66dd324b363bdc3a72.jpg?width=720&height=720&hash=76229A0A71E05108FDA87D95CE30278D", tip: "Electrocasnice" },
  { id: 23, nume: "Robot de bucatarie KitchenAid Artisan, 4.8L, 300W, Empire Red", pret: "2800 RON", imagine: "https://s13emagst.akamaized.net/products/33080/33079604/images/res_6d11578adda2440f1d64288ad7c9d0f8.jpg?width=720&height=720&hash=A597171D8DD84EEA4C5743D07ED9F369", tip: "Electrocasnice" },
  { id: 24, nume: "Umidificator Philips, Tehnologie NanoCloud, Mod Noapte, 2L", pret: "550 RON", imagine: "https://s13emagst.akamaized.net/products/34134/34133702/images/res_cfcd50f7f8af7685e42f480a07754fc7.jpg?width=720&height=720&hash=E5A67CBD46CEFF9739AF6FAB1F91D276", tip: "Electrocasnice" },
];

const categoriiDetalii = {
  "Telefoane, Tablete": [
    { titlu: "Telefoane", branduri: ["iPhone", "Samsung", "Motorola", "Honor"] },
    { titlu: "Tablete", branduri: ["iPad", "Samsung Galaxy", "Lenovo"] }
  ],
  "Laptop, Desktop, IT": [
    { titlu: "Laptopuri", branduri: ["MacBook", "Asus", "Lenovo"] },
    { titlu: "Desktop", branduri: ["Gaming PC", "Monitoare"] }
  ],
  "Gaming, Jocuri": [
    { titlu: "Console", branduri: ["PS5", "Xbox", "Nintendo"] },
    { titlu: "Accesorii", branduri: ["Controllere", "Căști"] }
  ],
  "TV, Aparate Foto": [
    { titlu: "Televizoare", branduri: ["OLED", "QLED", "Smart TV"] },
    { titlu: "Foto", branduri: ["Canon", "Sony", "Nikon"] }
  ],
  "Electrocasnice mari": [
    { titlu: "Frigidere", branduri: ["Beko", "Samsung", "LG"] },
    { titlu: "Mașini de spălat", branduri: ["Whirlpool", "Bosch"] }
  ],
  "Electrocasnice mici": [
    { titlu: "Bucătărie", branduri: ["Espressoare", "Mixere"] },
    { titlu: "Curățenie", branduri: ["Aspiratoare", "Fiare călcat"] }
  ]
};

const listCategorii = Object.keys(categoriiDetalii);

export default function HomePage() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [categorieActiva, setCategorieActiva] = useState('Electronice');
  const [showCategories, setShowCategories] = useState(false);
  const [categorieHover, setCategorieHover] = useState(listCategorii[0]);
  
  const [showAI, setShowAI] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [messages, setMessages] = useState([{ role: 'ai', text: 'Bună! Sunt asistentul tău AlegeSmart. Ce produs cauți astăzi?' }]);

useEffect(() => {
  const objDiv = document.getElementById("chatMessagesContainer");
  if (objDiv) objDiv.scrollTop = objDiv.scrollHeight;
}, [messages]);

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    if (token) setIsLoggedIn(true);
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const handleAIChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    const userMessage = { role: 'user', text: chatInput };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setChatInput('');

    setTimeout(() => {
        const confirmare = { role: 'ai', text: "Imediat verific stocul pentru tine... 🔍" };
        setMessages(prev => [...prev, confirmare]);

        setTimeout(() => {
            let recomandare = "Avem câteva modele superbe la promoție chiar acum!";
            const lowInput = chatInput.toLowerCase();

            if (lowInput.includes("telefon") || lowInput.includes("iphone")) {
                recomandare = "Dacă vrei ceva premium, iPhone 15 Pro este vedeta noastră. Dar și Samsung S24 Ultra se vinde foarte bine!";
            } else if (lowInput.includes("laptop") || lowInput.includes("macbook")) {
                recomandare = "MacBook Air M3 este ideal pentru viteză, dar avem și modele de gaming Asus ROG dacă te interesează performanța brută.";
            } else if (lowInput.includes("frigider") || lowInput.includes("electrocasnice")) {
                recomandare = "La electrocasnice mari avem reduceri de până la 20% la brandurile Samsung și LG. Merită să arunci o privire!";
            }

            const recommendationMessage = { role: 'ai', text: recomandare };
            setMessages(prev => [...prev, recommendationMessage]);

            setTimeout(() => {
                const final = { role: 'ai', text: "Vrei să te ajut să compari prețurile pentru unul dintre ele? 😊" };
                setMessages(prev => [...prev, final]);
            }, 1500); 

        }, 2000); 

    }, 500); 
};

  const produseFiltrate = toateProdusele.filter(p => p.tip === categorieActiva);

  return (
    <div style={{ backgroundColor: '#fff', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
      
      {/* 1. TOP BAR */}
      <div style={topBarStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', width: '100%', gap: '15px' }}>
            {isLoggedIn ? (
              <>
                <div onClick={() => router.push('/admin')} style={profileTriggerStyle}>
                  <div style={avatarStyle}><IconUser color="#10b981" /></div>
                  <span style={{ fontSize: '12px', fontWeight: 'bold', color: '#10b981' }}>Contul meu</span>
                </div>
                <button onClick={() => {localStorage.removeItem("access_token"); window.location.reload();}} style={logoutMiniBtn}>Deconectează-te</button>
              </>
            ) : (
              <div onClick={() => router.push('/login')} style={profileTriggerStyle}>
                <div style={avatarStyle}><IconUser color="#2563eb" /></div>
                <span style={{ fontSize: '12px', fontWeight: 'bold' }}>Loghează-te</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* 2. HEADER */}
      <header style={headerStyle}>
        <div style={containerStyle}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
            <div style={{ fontSize: '26px', fontWeight: 'bold', color: '#2563eb', cursor: 'pointer' }} onClick={() => router.push('/')}>AlegeSmart</div>
            
            <div style={{ position: 'relative' }} onMouseLeave={() => setShowCategories(false)}>
              <div style={searchContainer}> 
                <button onMouseEnter={() => setShowCategories(true)} style={categoriesBtnStyle}>
                  Categorii <Chevron up={showCategories} />
                </button>
                <input type="text" placeholder="Caută cel mai mic preț..." style={inputSearchStyle} />
                <button style={searchBtn}><IconSearch /></button>
              </div>

              {showCategories && (
                <div style={megaMenuStyle}>
                  <div style={megaSidebarStyle}>
                    {listCategorii.map((cat, index) => (
                      <div key={index} onMouseEnter={() => setCategorieHover(cat)} style={{...megaNavItemStyle, backgroundColor: categorieHover === cat ? '#f0f7ff' : '#fff', color: categorieHover === cat ? '#2563eb' : '#333'}}>
                        {cat} <span style={{ color: '#ccc', fontSize: '10px' }}>❯</span>
                      </div>
                    ))}
                  </div>
                  <div style={megaContentStyle}>
                    {categoriiDetalii[categorieHover]?.map((sectiune, sIdx) => (
                      <div key={sIdx}>
                        <h4 style={megaTitleStyle}>{sectiune.titlu}</h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                          {sectiune.branduri.map((brand, bIdx) => <li key={bIdx} style={megaBrandLinkStyle}>{brand}</li>)}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '25px', color: '#2563eb', position: 'relative', zIndex: 1100 }}>
              <button onClick={() => router.push('/wishlist')} style={iconButtonStyle} title="Favorite"><IconHeart /></button>
              <button onClick={() => router.push('/cart')} style={iconButtonStyle} title="Coș"><IconCart /></button>
              <button onClick={() => setShowAI(!showAI)} style={{...iconButtonStyle, position: 'relative'}} title="Asistent AI">
                <IconRobot />
                <span style={aiBadge}>AI</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* CHATBOX AI */}
      {showAI && (
        <div style={chatWindow}>
          <div style={chatHeader}><span>Asistent AI</span><button onClick={() => setShowAI(false)} style={{background:'none', border:'none', color:'white', cursor:'pointer'}}>✕</button></div>
          <div style={chatMessages}>{messages.map((m, i) => (<div key={i} style={{...msgStyle, alignSelf: m.role === 'ai' ? 'flex-start' : 'flex-end', backgroundColor: m.role === 'ai' ? '#f1f5f9' : '#2563eb', color: m.role === 'ai' ? '#333' : '#fff'}}>{m.text}</div>))}</div>
          <form onSubmit={handleAIChat} style={chatInputArea}><input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Scrie-i robotului..." style={chatInputField} /><button type="submit" style={chatSendBtn}>❯</button></form>
        </div>
      )}

      <main style={containerStyle}>
        {/* 3. HERO BANNER CU SĂGEȚI */}
        <div style={{ ...heroBannerStyle, backgroundImage: `url(${slides[currentSlide].url})` }}>
          <div style={sliderOverlay}>
            <h2 style={sliderTitle}>{slides[currentSlide].titlu}</h2>
            <button onClick={prevSlide} style={arrowLeft}>❮</button>
            <button onClick={nextSlide} style={arrowRight}>❯</button>
            <div style={dotContainer}>
              {slides.map((_, i) => <span key={i} onClick={() => setCurrentSlide(i)} style={{ ...dot, backgroundColor: i === currentSlide ? '#fff' : 'rgba(255,255,255,0.5)', width: i === currentSlide ? '30px' : '10px' }}></span>)}
            </div>
          </div>
        </div>

        {/* 4. SELECTOR CATEGORII */}
        <div style={{ marginTop: '40px', width: '100%' }}>
          <div style={segmentedControlWrapper}>
            <button onClick={() => setCategorieActiva('Electronice')} style={{ ...segmentedButtonStyle, backgroundColor: categorieActiva === 'Electronice' ? '#2563eb' : 'white', color: categorieActiva === 'Electronice' ? 'white' : '#333' }}>Electronice</button>
            <button onClick={() => setCategorieActiva('Electrocasnice')} style={{ ...segmentedButtonStyle, backgroundColor: categorieActiva === 'Electrocasnice' ? '#2563eb' : 'white', color: categorieActiva === 'Electrocasnice' ? 'white' : '#333' }}>Electrocasnice</button>
          </div>
          <div style={infoBarStyle}>🔥 Reduceri exclusive la categoria: <b>{categorieActiva}</b></div>
        </div>

        {/* 5. GRID PRODUSE */}
        <div style={gridStyle}>
          {produseFiltrate.map((p) => (
            <div key={p.id} style={productBoxStyle}>
              <div style={tipLabel}>{p.tip}</div>
              <div style={imgContainerStyle}><img src={p.imagine} alt={p.nume} style={imgStyle} /></div>
              <h3 style={{ fontSize: '15px', margin: '10px 0', height: '45px', overflow: 'hidden'}}>{p.nume}</h3>
              <p style={{ color: '#2563eb', fontWeight: 'bold', fontSize: '20px' }}>{p.pret}</p>
              <button style={btnStyleSmall}>Compară prețuri</button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}


const arrowStyleBase = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', width: '50px', height: '50px', borderRadius: '50%', border: 'none', backgroundColor: 'rgba(255,255,255,0.4)', color: 'white', fontSize: '24px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 };
const arrowLeft = { ...arrowStyleBase, left: '20px' };
const arrowRight = { ...arrowStyleBase, right: '20px' };
const aiBadge = { position: 'absolute', top: '-8px', right: '-8px', backgroundColor: '#10b981', color: 'white', fontSize: '9px', padding: '2px 5px', borderRadius: '10px', fontWeight: 'bold' };
const chatWindow = { position: 'fixed', bottom: '20px', right: '20px', width: '320px', height: '450px', backgroundColor: '#fff', boxShadow: '0 10px 40px rgba(0,0,0,0.2)', borderRadius: '15px', zIndex: 2000, display: 'flex', flexDirection: 'column', overflow: 'hidden' };
const chatHeader = { backgroundColor: '#2563eb', color: 'white', padding: '15px', display: 'flex', justifyContent: 'space-between', fontWeight: 'bold' };
const chatMessages = { flex: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px' };
const msgStyle = { padding: '10px 14px', borderRadius: '12px', fontSize: '13px', maxWidth: '80%' };
const chatInputArea = { padding: '10px', borderTop: '1px solid #eee', display: 'flex', gap: '5px' };
const chatInputField = { flex: 1, padding: '8px', border: '1px solid #ddd', borderRadius: '8px', outline: 'none' };
const chatSendBtn = { backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '8px', width: '35px', cursor: 'pointer' };
const searchContainerWidth = '550px';
const searchContainer = { display: 'flex', border: '2px solid #2563eb', borderRadius: '6px', height: '45px', width: searchContainerWidth, backgroundColor: '#fff', position: 'relative', zIndex: 1050 };
const megaMenuStyle = { position: 'absolute', top: '47px', left: 0, width: searchContainerWidth, backgroundColor: '#fff', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', borderRadius: '0 0 8px 8px', zIndex: 1000, border: '1px solid #ddd', height: 'auto', overflow: 'hidden', display: 'flex' };
const megaSidebarStyle = { width: '200px', borderRight: '1px solid #f0f0f0', backgroundColor: '#fff' };
const megaContentStyle = { flex: 1, padding: '20px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' };
const megaNavItemStyle = { padding: '12px 15px', fontSize: '13px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f9f9f9' };
const megaTitleStyle = { fontSize: '14px', fontWeight: 'bold', color: '#2563eb', marginBottom: '8px' };
const megaBrandLinkStyle = { fontSize: '12px', color: '#666', padding: '3px 0' };
const containerStyle = { maxWidth: '1200px', margin: '0 auto', padding: '0 20px' };
const topBarStyle = { borderBottom: '1px solid #ddd', padding: '8px 0', backgroundColor: '#f9f9f9' };
const profileTriggerStyle = { display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' };
const avatarStyle = { width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#eee', display: 'flex', justifyContent: 'center', alignItems: 'center' };
const headerStyle = { borderBottom: '1px solid #ddd', padding: '15px 0', position: 'sticky', top: 0, backgroundColor: 'white', zIndex: 100 };
const inputSearchStyle = { border: 'none', flex: 1, padding: '0 15px', outline: 'none' };
const categoriesBtnStyle = { border: 'none', background: '#f0f7ff', padding: '0 15px', cursor: 'pointer', fontWeight: 'bold', color: '#2563eb', display: 'flex', alignItems: 'center' };
const searchBtn = { border: 'none', background: '#2563eb', color: 'white', padding: '0 20px', cursor: 'pointer', display: 'flex', alignItems: 'center' };
const logoutMiniBtn = { backgroundColor: '#fee2e2', color: '#ef4444', border: 'none', padding: '5px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' };
const iconButtonStyle = { background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center' };
const heroBannerStyle = { width: '100%', height: '450px', borderRadius: '25px', marginTop: '20px', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative', overflow: 'hidden' };
const sliderOverlay = { backgroundColor: 'rgba(0,0,0,0.2)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' };
const sliderTitle = { color: 'white', fontSize: '42px', textAlign: 'center', padding: '0 60px' };
const dotContainer = { position: 'absolute', bottom: '20px', display: 'flex', gap: '10px' };
const dot = { height: '10px', borderRadius: '10px', cursor: 'pointer', transition: '0.3s' };
const segmentedControlWrapper = { display: 'flex', width: '100%', maxWidth: '600px', backgroundColor: '#f1f1f1', borderRadius: '12px 12px 0 0', padding: '4px', border: '1px solid #ddd', borderBottom: 'none', margin: '0 auto' };
const segmentedButtonStyle = { flex: 1, padding: '15px 0', border: 'none', borderRadius: '10px 10px 0 0', cursor: 'pointer', fontWeight: 'bold', fontSize: '18px', transition: '0.2s' };
const infoBarStyle = { width: '100%', padding: '20px', backgroundColor: '#eff6ff', border: '1px solid #2563eb', textAlign: 'center', color: '#2563eb', borderRadius: '8px', fontSize: '18px', boxSizing: 'border-box' };
const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '25px', marginTop: '30px' };
const productBoxStyle = { border: '1px solid #e5e7eb', borderRadius: '20px', padding: '20px', textAlign: 'center', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', transition: '0.3s' };
const tipLabel = { textAlign: 'left', fontSize: '11px', color: '#2563eb', fontWeight: 'bold', textTransform: 'uppercase' };
const imgContainerStyle = { width: '100%', height: '180px', margin: '15px 0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' };
const imgStyle = { maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' };
const btnStyleSmall = { width: '100%', backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '14px', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold', marginTop: 'auto' };