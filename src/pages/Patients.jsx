import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoPeopleOutline, IoAlertCircleOutline, IoTimeOutline, IoCheckmarkCircle } from 'react-icons/io5';

export default function Patients() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch('http://localhost:3000/api/patients');
        const data = await res.json();
        setPatients(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchPatients();
  }, []);

  const getIcon = (level) => level === 'red' ? <IoAlertCircleOutline size={18} color="#DC2626" /> : level === 'yellow' ? <IoTimeOutline size={18} color="#F59E0B" /> : level === 'green' ? <IoCheckmarkCircle size={18} color="#16A34A" /> : null;
  const getColor = (level) => level === 'red' ? '#DC2626' : level === 'yellow' ? '#F59E0B' : level === 'green' ? '#16A34A' : '#E3EAEA';
  const getLabel = (level) => level === 'red' ? 'Crítico' : level === 'yellow' ? 'Urgente' : level === 'green' ? 'Leve' : 'Sin clasificar';

  return (
    <div style={{ minHeight: '100vh', background: '#f5f8f8' }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 24px', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(227,234,234,0.5)', zIndex: 10 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 16, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10 }}>
          <IoChevronBackOutline size={24} color="#0E2430" />
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#0E2430', display: 'flex', alignItems: 'center', gap: 8 }}>
          <IoPeopleOutline size={22} color="#0E7C74" /> Pacientes Ingresados
        </h2>
      </div>

      <div style={{ padding: '24px' }}>
        {patients.length === 0 ? (
          <div style={{ textAlign: 'center', marginTop: 50, color: '#5D7480' }}>
            <IoPeopleOutline size={60} color="#E3EAEA" />
            <p style={{ marginTop: 16, fontWeight: 600 }}>No hay pacientes registrados todavía.</p>
          </div>
        ) : (
          patients.map((p) => (
            <div key={p._id} style={{ background: '#fff', borderRadius: 20, padding: 20, marginBottom: 16, borderLeft: `6px solid ${getColor(p.triageLevel)}`, boxShadow: '0 4px 12px rgba(0,0,0,0.03)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                <strong style={{ fontSize: 17, color: '#0E2430' }}>{p.name}</strong>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '6px 12px', borderRadius: 20, fontSize: 12, fontWeight: 700, backgroundColor: getColor(p.triageLevel) + '15', color: getColor(p.triageLevel) }}>
                  {getIcon(p.triageLevel)} {getLabel(p.triageLevel)}
                </span>
              </div>
              <div style={{ fontSize: 13, color: '#5D7480', display: 'flex', gap: 24 }}>
                <span>Edad: {p.age} años</span>
              </div>
              {p.reason && <div style={{ fontSize: 13, color: '#5D7480', marginTop: 8, background: '#f5f8f8', padding: 10, borderRadius: 8 }}>{p.reason}</div>}
            </div>
          ))
        )}
        <button onClick={() => navigate('/')} style={{ width: '100%', height: 55, backgroundColor: 'transparent', color: '#0E7C74', border: '2px solid #0E7C74', borderRadius: 16, fontSize: 16, fontWeight: 700, marginTop: 24, cursor: 'pointer' }}>
          Volver al Dashboard
        </button>
      </div>
    </div>
  );
}