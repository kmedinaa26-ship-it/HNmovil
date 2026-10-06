import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modulesData } from '../data/modules';
import { 
  IoMedkitOutline, IoPeopleOutline, IoAlertCircleOutline, IoPulse, IoCameraOutline, 
  IoStatsChartOutline, IoWarningOutline, IoSwapHorizontalOutline, IoGlobeOutline, 
  IoLocationOutline, IoBedOutline, IoCarOutline, IoHeartOutline, IoStarOutline, 
  IoAnalyticsOutline, IoClipboardOutline, IoTimeOutline, IoLockClosedOutline, 
  IoSearchOutline, IoCalendarOutline, IoPersonOutline, IoWalkOutline, IoNotificationsOutline,
  IoAddCircleOutline, IoMapOutline, IoListOutline, IoChevronBackOutline, IoChevronForwardOutline
} from 'react-icons/io5';

const Icon = ({ name, size, color }) => {
  const icons = {
    medkit: <IoMedkitOutline size={size} color={color} />,
    people: <IoPeopleOutline size={size} color={color} />,
    alert: <IoAlertCircleOutline size={size} color={color} />,
    pulse: <IoPulse size={size} color={color} />,
    camera: <IoCameraOutline size={size} color={color} />,
    stats: <IoStatsChartOutline size={size} color={color} />,
    warning: <IoWarningOutline size={size} color={color} />,
    swap: <IoSwapHorizontalOutline size={size} color={color} />,
    globe: <IoGlobeOutline size={size} color={color} />,
    location: <IoLocationOutline size={size} color={color} />,
    bed: <IoBedOutline size={size} color={color} />,
    ambulance: <IoCarOutline size={size} color={color} />,
    heart: <IoHeartOutline size={size} color={color} />,
    star: <IoStarOutline size={size} color={color} />,
    analytics: <IoAnalyticsOutline size={size} color={color} />,
    clipboard: <IoClipboardOutline size={size} color={color} />,
    time: <IoTimeOutline size={size} color={color} />,
    lock: <IoLockClosedOutline size={size} color={color} />,
    search: <IoSearchOutline size={size} color={color} />,
    calendar: <IoCalendarOutline size={size} color={color} />,
    person: <IoPersonOutline size={size} color={color} />,
    walk: <IoWalkOutline size={size} color={color} />,
    notifications: <IoNotificationsOutline size={size} color={color} />,
    add: <IoAddCircleOutline size={size} color={color} />,
    map: <IoMapOutline size={size} color={color} />,
    list: <IoListOutline size={size} color={color} />,
  };
  return icons[name] || null;
};

export default function ModulePage() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const data = modulesData.find(m => m.path === moduleId);

  if (!data) {
    return <div style={{ padding: 20, textAlign: 'center', marginTop: 50 }}>Módulo no encontrado. <button onClick={() => navigate('/')}>Volver</button></div>;
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f5f8f8', paddingBottom: 40 }}>
      {/* Header con efecto vidrio */}
      <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        padding: '20px 24px', 
        position: 'sticky', 
        top: 0, 
        background: 'rgba(255,255,255,0.8)', 
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(227,234,234,0.5)',
        zIndex: 10 
      }}>
        <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', cursor: 'pointer', marginRight: 16, display: 'flex', alignItems: 'center', padding: 8, borderRadius: 10 }}>
          <IoChevronBackOutline size={24} color="#0E2430" />
        </button>
        <h2 style={{ margin: 0, fontSize: 20, fontWeight: 800, color: '#0E2430', display: 'flex', alignItems: 'center', gap: 10 }}>
          <Icon name={data.icon} size={22} color={data.color} />
          {data.title}
        </h2>
      </div>

      {/* Función Especial (Hero) */}
      <div style={{ margin: '24px', padding: '24px', borderRadius: '24px', background: `linear-gradient(135deg, ${data.color}, ${data.color}E0)`, color: 'white', boxShadow: `0 15px 30px -10px ${data.color}50` }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div style={{ width: 50, height: 50, background: 'rgba(255,255,255,0.2)', borderRadius: 16, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Icon name={data.special.icon} size={28} color="#FFFFFF" />
          </div>
          <div>
            <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, opacity: 0.8 }}>Función Diferencial</div>
            <h3 style={{ margin: '4px 0 0 0', fontSize: 18, fontWeight: 800 }}>{data.special.title}</h3>
          </div>
        </div>
        <p style={{ margin: '16px 0 0 0', fontSize: 13, opacity: 0.9, lineHeight: 1.5 }}>{data.special.desc}</p>
      </div>

      {/* Título de Sección */}
      <div style={{ padding: '0 24px', marginBottom: 16 }}>
        <h4 style={{ margin: 0, fontSize: 14, fontWeight: 700, color: '#5D7480', textTransform: 'uppercase', letterSpacing: 1 }}>Opciones del Módulo</h4>
      </div>

      {/* Grid de Características */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, padding: '0 24px' }}>
        {data.features.map((feat, idx) => (
          <div 
            key={idx} 
            style={{ 
              width: 'calc(50% - 6px)', 
              background: '#fff', 
              borderRadius: 20, 
              padding: '20px 16px', 
              boxSizing: 'border-box', 
              boxShadow: '0 4px 12px rgba(0,0,0,0.03)', 
              cursor: 'pointer', 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center', 
              textAlign: 'center',
              border: '1px solid rgba(227,234,234,0.3)',
              transition: 'all 0.2s ease'
            }}
            onClick={() => feat.route ? navigate(feat.route) : alert('Módulo en construcción')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.06)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.03)';
            }}
          >
            <div style={{ width: 44, height: 44, borderRadius: 14, backgroundColor: data.bgColor, display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 12 }}>
              <Icon name={feat.icon} size={22} color={data.color} />
            </div>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#0E2430' }}>{feat.title}</span>
            {feat.route && <IoChevronForwardOutline size={12} color={data.color} style={{ marginTop: 8, opacity: 0.5 }} />}
          </div>
        ))}
      </div>
    </div>
  );
}