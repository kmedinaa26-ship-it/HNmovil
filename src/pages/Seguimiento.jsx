import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoAnalyticsOutline, IoLocationOutline, IoTimeOutline } from 'react-icons/io5';

export default function Seguimiento() {
  const navigate = useNavigate();
  const [pacientes] = useState([
    { id: '1', nombre: 'Juan Pérez', ubicacion: 'Sala 3', tiempo: '45 min', estado: 'En observación' },
    { id: '2', nombre: 'Ana Torres', ubicacion: 'Traslado a UCI', tiempo: '10 min', estado: 'En movimiento' },
  ]);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f8f8' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 24px', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(227,234,234,0.5)', zIndex: 10 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 16, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10 }}>
          <IoChevronBackOutline size={24} color="#0E2430" />
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#0E2430', display: 'flex', alignItems: 'center', gap: 8 }}>
          <IoAnalyticsOutline size={22} color="#C98A2C" /> Seguimiento
        </h2>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{ background: 'linear-gradient(135deg, #C98A2C, #D6A04A)', borderRadius: 24, padding: 20, marginBottom: 24, color: 'white', display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 10px 20px rgba(201,138,44,0.2)' }}>
          <IoLocationOutline size={32} />
          <div>
            <h3 style={{ margin: '0 0 4px 0', fontSize: 16 }}>Ruta en Tiempo Real</h3>
            <p style={{ margin: 0, fontSize: 13, opacity: 0.9 }}>Visualización del recorrido del paciente.</p>
          </div>
        </div>

        <h4 style={{ margin: '0 0 16px 0', fontSize: 14, fontWeight: 700, color: '#5D7480', textTransform: 'uppercase', letterSpacing: 1 }}>Pacientes Activos</h4>
        
        {pacientes.map((p) => (
          <div key={p.id} style={{ background: '#fff', borderRadius: 20, padding: 20, marginBottom: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <strong style={{ fontSize: 16, color: '#0E2430' }}>{p.nombre}</strong>
              <span style={{ padding: '6px 12px', borderRadius: 20, fontSize: 11, fontWeight: 700, backgroundColor: p.estado === 'En movimiento' ? '#FBE7E2' : '#E4F3EF', color: p.estado === 'En movimiento' ? '#DD5B47' : '#0A5C57' }}>{p.estado}</span>
            </div>
            <div style={{ fontSize: 13, color: '#5D7480', display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><IoLocationOutline size={16} color="#C98A2C" /> {p.ubicacion}</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><IoTimeOutline size={16} color="#C98A2C" /> {p.tiempo}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}