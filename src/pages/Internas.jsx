import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoSwapHorizontalOutline, IoAddCircleOutline, IoLocationOutline, IoPersonOutline, IoNotificationsOutline } from 'react-icons/io5';

export default function Internas() {
  const navigate = useNavigate();
  const [derivaciones] = useState([
    { id: '1', patient: 'Juan Pérez', area: 'UCI', responsable: 'Dr. Gómez', estado: 'En traslado' },
    { id: '2', patient: 'María López', area: 'Traumatología', responsable: 'Dra. Pérez', estado: 'Confirmado' },
  ]);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f8f8' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 24px', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(227,234,234,0.5)', zIndex: 10 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 16, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10 }}>
          <IoChevronBackOutline size={24} color="#0E2430" />
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#0E2430', display: 'flex', alignItems: 'center', gap: 8 }}>
          <IoSwapHorizontalOutline size={22} color="#0E7C74" /> Derivaciones Internas
        </h2>
      </div>

      <div style={{ padding: '24px' }}>
        <button onClick={() => navigate('/triage')} style={{ width: '100%', height: 55, backgroundColor: '#0E7C74', color: 'white', border: 'none', borderRadius: 16, fontSize: 16, fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, cursor: 'pointer', boxShadow: '0 8px 20px rgba(14,124,116,0.3)', marginBottom: 24 }}>
          <IoAddCircleOutline size={24} /> Nueva Derivación
        </button>

        <h4 style={{ margin: '0 0 16px 0', fontSize: 14, fontWeight: 700, color: '#5D7480', textTransform: 'uppercase', letterSpacing: 1 }}>Traslados en Curso</h4>
        
        {derivaciones.map((d) => (
          <div key={d.id} style={{ background: '#fff', borderRadius: 20, padding: 20, marginBottom: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <strong style={{ fontSize: 16, color: '#0E2430' }}>{d.patient}</strong>
              <span style={{ padding: '6px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700, backgroundColor: d.estado === 'Confirmado' ? '#E4F3EF' : '#FAEDDA', color: d.estado === 'Confirmado' ? '#0A5C57' : '#C98A2C' }}>{d.estado}</span>
            </div>
            <div style={{ fontSize: 13, color: '#5D7480', display: 'flex', flexDirection: 'column', gap: 6 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><IoLocationOutline size={16} color="#0E7C74" /> Área: {d.area}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><IoPersonOutline size={16} color="#0E7C74" /> Responsable: {d.responsable}</span>
            </div>
            <button style={{ width: '100%', marginTop: 16, padding: 10, backgroundColor: '#F5F8F8', color: '#0A5C57', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
              <IoNotificationsOutline size={18} /> Confirmar Recepción
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}