import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import { IoMenu, IoNotificationsOutline, IoShieldCheckmark, IoSparkles, IoBusiness, IoPeople, IoWarning, IoAlertCircle, IoPulse, IoTrendingUp, IoTrendingDown, IoMedkitOutline, IoSwapHorizontalOutline, IoGlobeOutline, IoLocationOutline, IoAnalyticsOutline, IoClipboardOutline } from 'react-icons/io5';
import Triage from './pages/Triage';
import Patients from './pages/Patients';
import Hospitals from './pages/Hospitals';
import Internas from './pages/Internas';
import Externas from './pages/Externas';
import Seguimiento from './pages/Seguimiento';
import Auditoria from './pages/Auditoria';
import './App.css';

const colors = { background: '#F5F8F8', card: '#FFFFFF', text: '#0E2430', subText: '#5D7480', faintText: '#8DA0A9', teal: '#0E7C74', tealDeep: '#0A5C57', mint: '#E4F3EF', coral: '#DD5B47', coralTint: '#FBE7E2', amber: '#C98A2C', amberTint: '#FAEDDA', line: '#E3EAEA', heroFrom: '#0A5C57', heroTo: '#22A89C' };

const MODULES = [
  { id: 1, title: 'Triage', path: '/triage', icon: 'medkit', accent: 'blue', tag: 'Acceso rápido', desc: 'Clasificación de pacientes' },
  { id: 2, title: 'Derivaciones internas', path: '/internas', icon: 'swap', accent: 'blue', tag: 'Gestión eficiente', desc: 'Internas y externas' },
  { id: 3, title: 'Derivaciones externas', path: '/externas', icon: 'globe', accent: 'coral', tag: 'Conectando', desc: 'Traslados y referencias' },
  { id: 4, title: 'Hospitales', path: '/hospitals', icon: 'location', accent: 'coral', tag: 'Más opciones', desc: 'Cercanos y camas' },
  { id: 5, title: 'Seguimiento', path: '/seguimiento', icon: 'analytics', accent: 'amber', tag: 'Tiempo real', desc: 'Estado de pacientes' },
  { id: 6, title: 'Auditoría', path: '/auditoria', icon: 'clipboard', accent: 'amber', tag: 'Transparencia', desc: 'Bitácora del sistema' },
];

export default function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/triage" element={<Triage />} />
          <Route path="/patients" element={<Patients />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/internas" element={<Internas />} />
          <Route path="/externas" element={<Externas />} />
          <Route path="/seguimiento" element={<Seguimiento />} />
          <Route path="/auditoria" element={<Auditoria />} />
        </Routes>
        
        {/* BOTÓN DE EMERGENCIA FLOTANTE */}
        <button className="emergency-btn" onClick={() => alert('🚨 Código de Emergencia Activado. Se ha notificado a UCI, Médico de Guardia y Seguridad.')}>
          <IoPulse size={28} color="#FFFFFF" />
        </button>
      </div>
    </BrowserRouter>
  );
}

function Dashboard() {
  const [stats, setStats] = useState({ totalPatients: 0, redCount: 0, yellowCount: 0, greenCount: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/stats');
        const data = await response.json();
        setStats(data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, []);

  const getIcon = (iconName) => {
    const icons = { medkit: <IoMedkitOutline size={21} />, swap: <IoSwapHorizontalOutline size={21} />, globe: <IoGlobeOutline size={21} />, location: <IoLocationOutline size={21} />, analytics: <IoAnalyticsOutline size={21} />, clipboard: <IoClipboardOutline size={21} /> };
    return icons[iconName];
  };

  const accentColor = (accent) => accent === 'blue' ? colors.teal : accent === 'coral' ? colors.coral : colors.amber;
  const accentTint = (accent) => accent === 'blue' ? colors.mint : accent === 'coral' ? colors.coralTint : colors.amberTint;

  const today = new Date();
  const formattedDate = today.toLocaleDateString('es-ES', { day: 'numeric', month: 'short', year: 'numeric' });

  return (
    <div className="dashboard">
      <div className="topHeader">
        <button className="iconBtn"><IoMenu size={24} color={colors.text} /></button>
        <div className="appTitle">
          <span style={{ color: colors.text }}>Health</span>
          <span style={{ color: colors.tealDeep }}>Nexus</span>
        </div>
        <div className="rightIcons">
          <div className="bellContainer">
            <div className="bellBg">
              <IoNotificationsOutline size={18} color={colors.subText} />
            </div>
            <div className="notificationDot">3</div>
          </div>
        </div>
      </div>

      <div className="heroBanner" style={{ background: `linear-gradient(135deg, ${colors.heroFrom}, ${colors.heroTo})` }}>
        <div className="heroWelcome">BIENVENIDO A</div>
        <div className="heroTitle">HealthNexus</div>
        <div className="heroSubtitle">Tu salud, nuestra prioridad.</div>
        <div className="heroPillsRow">
          <div className="heroPill">
            <IoShieldCheckmark size={16} color="#FFFFFF" />
            <div className="pillTextContainer">
              <div className="heroPillTitle">Sistema certificado</div>
              <div className="heroPillSub">ISO 27001 · 27799</div>
            </div>
          </div>
          <button className="heroPill heroPillAction">
            <IoSparkles size={16} color={colors.tealDeep} />
            <div className="pillTextContainer">
              <div className="heroPillTitle" style={{ color: colors.tealDeep }}>Asistente virtual</div>
              <div className="heroPillSub" style={{ color: colors.subText }}>¿En qué ayudo?</div>
            </div>
          </button>
        </div>
        <IoBusiness size={64} color="rgba(255,255,255,0.18)" className="heroWatermark" />
      </div>

      <div className="sectionHead">
        <div className="sectionTitle" style={{ color: colors.text }}>Módulos</div>
      </div>
      <div className="grid">
        {MODULES.map((mod) => (
          <button 
            key={mod.id} 
            className="moduleCard" 
            style={{ borderColor: colors.line }} 
            onClick={() => navigate(mod.path)}
          >
            <div className="moduleIconContainer" style={{ backgroundColor: accentTint(mod.accent), color: accentColor(mod.accent) }}>
              {getIcon(mod.icon)}
            </div>
            <div className="moduleTitle" style={{ color: colors.text }}>{mod.title}</div>
            <div className="moduleDesc" style={{ color: colors.subText }}>{mod.desc}</div>
            <div className="moduleFoot">
              <div className="moduleTag" style={{ backgroundColor: accentTint(mod.accent), color: accentColor(mod.accent) }}>{mod.tag}</div>
            </div>
          </button>
        ))}
      </div>

      <div className="sectionHead">
        <div className="sectionTitle" style={{ color: colors.text }}>Resumen del día</div>
        <div className="sectionDate" style={{ color: colors.faintText }}>{formattedDate}</div>
      </div>
      <div className="statsCard">
        <div className="statRow">
          <div className="statIconBg" style={{ backgroundColor: colors.mint, color: colors.tealDeep }}><IoPeople size={18} /></div>
          <div className="statBody"><div className="statLabel" style={{ color: colors.subText }}>Pacientes totales</div><div className="statValue" style={{ color: colors.text }}>{stats.totalPatients}</div></div>
          <div className="trendChip" style={{ backgroundColor: colors.mint, color: colors.tealDeep }}><IoTrendingUp size={12} /> Registrados</div>
        </div>
        <div className="statRow">
          <div className="statIconBg" style={{ backgroundColor: colors.amberTint, color: colors.amber }}><IoWarning size={18} /></div>
          <div className="statBody"><div className="statLabel" style={{ color: colors.subText }}>Casos Urgentes</div><div className="statValue" style={{ color: colors.text }}>{stats.yellowCount}</div></div>
          <div className="trendChip" style={{ backgroundColor: colors.amberTint, color: colors.amber }}>Amarillo</div>
        </div>
        <div className="statRow last">
          <div className="statIconBg" style={{ backgroundColor: colors.coralTint, color: colors.coral }}><IoAlertCircle size={18} /></div>
          <div className="statBody"><div className="statLabel" style={{ color: colors.subText }}>Casos Críticos</div><div className="statValue" style={{ color: colors.text }}>{stats.redCount}</div></div>
          <div className="trendChip" style={{ backgroundColor: colors.coralTint, color: colors.coral }}><IoTrendingDown size={12} /> Rojo</div>
        </div>
      </div>

      <div className="quoteCard">
        <IoPulse size={22} color="rgba(255,255,255,0.55)" />
        <div className="quoteText">La salud también se gestiona con tecnología</div>
        <div className="quoteByline">Panel actualizado en tiempo real</div>
      </div>
    </div>
  );
}