import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoChevronBackOutline, IoPersonOutline, IoCalendarNumberOutline, IoDocumentTextOutline, IoCheckmarkCircle, IoAlertCircleOutline, IoTimeOutline, IoSaveOutline, IoCloseCircleOutline } from 'react-icons/io5';

export default function Triage() {
  const navigate = useNavigate();
  const [patientName, setPatientName] = useState('');
  const [age, setAge] = useState('');
  const [reason, setReason] = useState('');
  const [triageLevel, setTriageLevel] = useState(null);
  const [loading, setLoading] = useState(false);

  const triageLevels = [
    { id: 'red', label: 'Crítico', color: '#DC2626', icon: 'alert', desc: 'Atención inmediata' },
    { id: 'yellow', label: 'Urgente', color: '#F59E0B', icon: 'time', desc: '15 min espera' },
    { id: 'green', label: 'Leve', color: '#16A34A', icon: 'check', desc: '60 min espera' },
  ];

  const handleRegister = async () => {
    if (!patientName || !triageLevel) {
      alert('Por favor ingresa el nombre y selecciona un nivel de triage.');
      return;
    }
    setLoading(true);
    try {
      await fetch('http://localhost:3000/api/patients', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: patientName, age: Number(age) || 0, reason, triageLevel }),
      });
      alert('Paciente guardado correctamente en la base de datos.');
      navigate('/');
    } catch (error) {
      alert('Error de red. Asegúrate de que el backend esté corriendo.');
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = { width: '100%', height: 50, borderWidth: 1, borderStyle: 'solid', borderColor: '#E3EAEA', borderRadius: 12, padding: '0 15px', fontSize: 15, marginTop: 8, boxSizing: 'border-box', background: '#fff' };
  const labelStyle = { fontSize: 13, fontWeight: 600, color: '#5D7480', display: 'flex', alignItems: 'center', gap: 6 };

  return (
    <div style={{ minHeight: '100vh', background: '#f5f8f8', paddingBottom: 40 }}>
      <div style={{ display: 'flex', alignItems: 'center', padding: '20px 24px', position: 'sticky', top: 0, background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(227,234,234,0.5)', zIndex: 10 }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 16, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10 }}>
          <IoChevronBackOutline size={24} color="#0E2430" />
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#0E2430' }}>Nuevo Triage</h2>
      </div>

      <div style={{ padding: '24px' }}>
        <div style={{ background: '#fff', borderRadius: 24, padding: 24, boxShadow: '0 4px 12px rgba(0,0,0,0.03)', marginBottom: 24 }}>
          <label style={labelStyle}><IoPersonOutline size={16} /> Nombre del Paciente</label>
          <input type="text" value={patientName} onChange={(e) => setPatientName(e.target.value)} placeholder="Ej: Juan Pérez" style={inputStyle} />

          <label style={{ ...labelStyle, marginTop: 20 }}><IoCalendarNumberOutline size={16} /> Edad</label>
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Ej: 45" style={inputStyle} />

          <label style={{ ...labelStyle, marginTop: 20 }}><IoDocumentTextOutline size={16} /> Motivo de Consulta</label>
          <textarea value={reason} onChange={(e) => setReason(e.target.value)} placeholder="Describe los síntomas..." style={{ ...inputStyle, minHeight: 100, paddingTop: 15, resize: 'none' }} />
        </div>

        <h4 style={{ margin: '0 0 16px 0', fontSize: 14, fontWeight: 700, color: '#5D7480', textTransform: 'uppercase', letterSpacing: 1 }}>Clasificación de Triage</h4>
        <div style={{ display: 'flex', gap: 10, marginBottom: 32 }}>
          {triageLevels.map((level) => (
            <button key={level.id} onClick={() => setTriageLevel(level.id)} style={{
              flex: 1, padding: '16px 10px', borderRadius: 16, borderWidth: 2, borderStyle: 'solid', cursor: 'pointer',
              borderColor: triageLevel === level.id ? level.color : '#E3EAEA',
              backgroundColor: triageLevel === level.id ? level.color + '15' : '#fff',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
            }}>
              {level.icon === 'alert' && <IoAlertCircleOutline size={24} color={level.color} />}
              {level.icon === 'time' && <IoTimeOutline size={24} color={level.color} />}
              {level.icon === 'check' && <IoCheckmarkCircle size={24} color={level.color} />}
              <strong style={{ fontSize: 13, color: '#0E2430' }}>{level.label}</strong>
              <span style={{ fontSize: 10, color: '#5D7480' }}>{level.desc}</span>
            </button>
          ))}
        </div>

        <button onClick={handleRegister} disabled={loading} style={{ width: '100%', height: 55, backgroundColor: '#0E7C74', color: 'white', border: 'none', borderRadius: 16, fontSize: 16, fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, cursor: 'pointer', boxShadow: '0 8px 20px rgba(14,124,116,0.3)' }}>
          {loading ? 'Guardando...' : <><IoSaveOutline size={20} /> Registrar Paciente</>}
        </button>
        <button onClick={() => navigate('/')} style={{ width: '100%', height: 55, backgroundColor: 'transparent', color: '#DD5B47', border: '2px solid #DD5B47', borderRadius: 16, fontSize: 16, fontWeight: 700, marginTop: 12, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
          <IoCloseCircleOutline size={20} /> Cancelar
        </button>
      </div>
    </div>
  );
}