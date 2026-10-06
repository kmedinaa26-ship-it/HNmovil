import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoClipboardOutline, IoTimeOutline, IoWarningOutline, IoSearchOutline, IoCalendarOutline, IoChevronForwardOutline } from 'react-icons/io5';

export default function Auditoria() {
  const navigate = useNavigate();
  const [logs] = useState([
    { id: '1', user: 'Dr. Gómez', action: 'Modificó prioridad de paciente', time: '10:45 AM', critical: false },
    { id: '2', user: 'Admin', action: 'Eliminó registro de paciente', time: '09:30 AM', critical: true },
    { id: '3', user: 'Dra. Pérez', action: 'Derivó paciente a UCI', time: '08:15 AM', critical: false },
  ]);

  return (
    <div style={{ minHeight: '100vh', background: '#f5f8f8' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 24px', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(227,234,234,0.5)', zIndex: 10 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 16, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10 }}>
          <IoChevronBackOutline size={24} color="#0E2430" />
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#0E2430', display: 'flex', alignItems: 'center', gap: 8 }}>
          <IoClipboardOutline size={22} color="#C98A2C" /> Auditoría
        </h2>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <IoSearchOutline style={{ position: 'absolute', left: 15, top: 15, color: '#5D7480' }} size={20} />
            <input placeholder="Buscar evento..." style={{ width: '100%', height: 45, borderWidth: 1, borderStyle: 'solid', borderColor: '#E3EAEA', borderRadius: 12, padding: '0 15px 0 40px', fontSize: 14, boxSizing: 'border-box', background: '#fff' }} />
          </div>
          <button style={{ width: 45, height: 45, backgroundColor: '#fff', border: '1px solid #E3EAEA', borderRadius: 12, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IoCalendarOutline size={20} color="#5D7480" />
          </button>
        </div>

        <h4 style={{ margin: '0 0 16px 0', fontSize: 14, fontWeight: 700, color: '#5D7480', textTransform: 'uppercase', letterSpacing: 1 }}>Historial de Acciones</h4>
        
        {logs.map((log) => (
          <div key={log.id} style={{ background: '#fff', borderRadius: 16, padding: 16, marginBottom: 12, display: 'flex', alignItems: 'center', gap: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.03)', cursor: 'pointer' }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: log.critical ? '#FBE7E2' : '#FAEDDA', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {log.critical ? <IoWarningOutline size={20} color="#DD5B47" /> : <IoTimeOutline size={20} color="#C98A2C" />}
            </div>
            <div style={{ flex: 1 }}>
              <strong style={{ fontSize: 14, color: '#0E2430' }}>{log.action}</strong>
              <div style={{ fontSize: 12, color: '#5D7480', marginTop: 2 }}>{log.user} · {log.time}</div>
            </div>
            <IoChevronForwardOutline size={18} color="#5D7480" />
          </div>
        ))}
      </div>
    </div>
  );
}