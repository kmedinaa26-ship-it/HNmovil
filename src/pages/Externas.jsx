import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoGlobeOutline, IoAddCircleOutline, IoMedkitOutline, IoCarOutline, IoTimeOutline } from 'react-icons/io5';

export default function Externas() {
  const navigate = useNavigate();
  const [traslados] = useState([
    { id: '1', hospital: 'Hospital San Martín', paciente: 'Carlos Ruiz', estado: 'Ambulancia en camino', tiempo: '10 min' },
  ]);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f8f8' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 24px', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(227,234,234,0.5)', zIndex: 10 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 16, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10 }}>
          <IoChevronBackOutline size={24} color="#0E2430" />
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#0E2430', display: 'flex', alignItems: 'center', gap: 8 }}>
          <IoGlobeOutline size={22} color="#DD5B47" /> Derivaciones Externas
        </h2>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <button onClick={() => navigate('/triage')} style={{ flex: 1, height: 55, backgroundColor: '#DD5B47', color: 'white', border: 'none', borderRadius: 16, fontSize: 14, fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
            <IoAddCircleOutline size={20} /> Solicitar
          </button>
          <button onClick={() => navigate('/hospitals')} style={{ flex: 1, height: 55, backgroundColor: 'transparent', color: '#DD5B47', border: '2px solid #DD5B47', borderRadius: 16, fontSize: 14, fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, cursor: 'pointer' }}>
            <IoMedkitOutline size={20} /> Buscar Hospital
          </button>
        </div>

        <h4 style={{ margin: '0 0 16px 0', fontSize: 14, fontWeight: 700, color: '#5D7480', textTransform: 'uppercase', letterSpacing: 1 }}>Traslados Externos Activos</h4>
        
        {traslados.map((t) => (
          <div key={t.id} style={{ background: '#fff', borderRadius: 20, padding: 20, marginBottom: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.03)', borderLeft: '6px solid #DD5B47' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <strong style={{ fontSize: 16, color: '#0E2430' }}>{t.paciente}</strong>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, padding: '6px 12px', borderRadius: 20, fontSize: 12, fontWeight: 700, backgroundColor: '#FBE7E2', color: '#DD5B47' }}>
                <IoCarOutline size={16} /> {t.estado}
              </span>
            </div>
            <div style={{ fontSize: 13, color: '#5D7480', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><IoMedkitOutline size={16} color="#DD5B47" /> Destino: {t.hospital}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><IoTimeOutline size={16} color="#DD5B47" /> Tiempo est. llegada: {t.tiempo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}