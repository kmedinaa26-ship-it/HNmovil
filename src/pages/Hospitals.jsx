import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoLocationOutline, IoBedOutline, IoCarOutline, IoCheckmarkCircle, IoTicketOutline } from 'react-icons/io5';

const HOSPITALS = [
  { id: '1', name: 'Hospital General Central', beds: 12, distance: '1.2 km' },
  { id: '2', name: 'Clínica San Rafael', beds: 0, distance: '2.5 km' },
  { id: '3', name: 'Centro Médico Norte', beds: 5, distance: '3.8 km' },
];

export default function Hospitals() {
  const navigate = useNavigate();
  const [ticket, setTicket] = useState(null);

  const handleRefer = (name, beds) => {
    if (beds === 0) { alert('Sin camas disponibles.'); return; }
    const id = `DER-${Math.floor(1000 + Math.random() * 9000)}`;
    const date = new Date().toLocaleString('es-ES');
    setTicket({ id, name, date });
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f8f8' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 24px', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(227,234,234,0.5)', zIndex: 10 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 16, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10 }}>
          <IoChevronBackOutline size={24} color="#0E2430" />
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#0E2430', display: 'flex', alignItems: 'center', gap: 8 }}>
          <IoLocationOutline size={22} color="#DD5B47" /> Hospitales Cercanos
        </h2>
      </div>

      <div style={{ padding: '24px' }}>
        {HOSPITALS.map((h) => (
          <div key={h.id} style={{ background: '#fff', borderRadius: 20, padding: 20, marginBottom: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.03)', borderLeft: `6px solid ${h.beds > 0 ? '#16A34A' : '#DC2626'}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong style={{ fontSize: 16, color: '#0E2430' }}>{h.name}</strong>
                <div style={{ fontSize: 13, color: '#5D7480', marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <IoLocationOutline size={14} /> {h.distance}
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: 13, color: h.beds > 0 ? '#16A34A' : '#DC2626', fontWeight: 700, display: 'flex', alignItems: 'center', gap: 4, justifyContent: 'flex-end' }}>
                  <IoBedOutline size={16} /> {h.beds} Camas
                </div>
              </div>
            </div>
            
            <button onClick={() => handleRefer(h.name, h.beds)} disabled={h.beds === 0} style={{ width: '100%', marginTop: 16, padding: 12, backgroundColor: h.beds > 0 ? '#0E7C74' : '#E3EAEA', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
              {h.beds > 0 ? <><IoCarOutline size={20} /> Derivar Paciente</> : 'Sin Disponibilidad'}
            </button>
          </div>
        ))}
      </div>

      {ticket && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9999, padding: 24 }}>
          <div style={{ width: '100%', background: '#fff', borderRadius: 24, overflow: 'hidden', maxWidth: 400 }}>
            <div style={{ background: 'linear-gradient(135deg, #0A5C57, #22A89C)', padding: 24, textAlign: 'center', color: 'white' }}>
              <IoTicketOutline size={40} />
              <h3 style={{ margin: '8px 0 0 0', fontSize: 22, fontWeight: 800 }}>PASE DE SALIDA</h3>
            </div>
            <div style={{ padding: 24 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0', borderBottom: '1px solid #E3EAEA', paddingBottom: 8 }}><span style={{ color: '#5D7480' }}>Ticket No:</span><strong>{ticket.id}</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0', borderBottom: '1px solid #E3EAEA', paddingBottom: 8 }}><span style={{ color: '#5D7480' }}>Hospital:</span><strong style={{ textAlign: 'right' }}>{ticket.name}</strong></div>
              <div style={{ display: 'flex', justifyContent: 'space-between', margin: '8px 0', borderBottom: '1px solid #E3EAEA', paddingBottom: 8 }}><span style={{ color: '#5D7480' }}>Fecha:</span><strong>{ticket.date}</strong></div>
              <p style={{ color: '#DD5B47', fontSize: 12, textAlign: 'center', margin: '16px 0' }}>Presente este ticket en recepción del hospital de destino.</p>
              <button onClick={() => { setTicket(null); navigate('/'); }} style={{ width: '100%', height: 50, background: '#0E7C74', color: 'white', border: 'none', borderRadius: 12, fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8 }}>
                <IoCheckmarkCircle size={20} /> Entendido
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}