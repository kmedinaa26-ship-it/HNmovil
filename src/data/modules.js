export const modulesData = [
  {
    path: 'triage',
    title: 'Triage',
    icon: 'medkit',
    color: '#0E7C74',
    bgColor: '#E4F3EF',
    features: [
      { icon: 'people', title: 'Pacientes en espera', route: '/patients' },
      { icon: 'alert', title: 'Prioridades críticas', route: '/patients' },
      { icon: 'pulse', title: 'Valoración rápida', route: '/triage' },
      { icon: 'camera', title: 'Escanear paciente' },
      { icon: 'stats', title: 'Actualizar prioridad', route: '/triage' },
      { icon: 'warning', title: 'Alertas de deterioro', route: '/patients' },
    ],
    special: { icon: 'alert', title: 'Alerta automática de prioridad', desc: 'El sistema asigna color automáticamente según signos vitales.' }
  },
  {
    path: 'internas',
    title: 'Derivaciones Internas',
    icon: 'swap',
    color: '#0E7C74',
    bgColor: '#E4F3EF',
    features: [
      { icon: 'add', title: 'Nueva derivación', route: '/triage' },
      { icon: 'location', title: 'Ubicación del paciente', route: '/patients' },
      { icon: 'medkit', title: 'Área destino' },
      { icon: 'person', title: 'Responsable' },
      { icon: 'walk', title: 'Estado del traslado', route: '/patients' },
      { icon: 'notifications', title: 'Confirmar recepción' },
    ],
    special: { icon: 'location', title: '“Voy en camino”', desc: 'Notificación en tiempo real al área de destino.' }
  },
  {
    path: 'externas',
    title: 'Derivaciones Externas',
    icon: 'globe',
    color: '#DD5B47',
    bgColor: '#FBE7E2',
    features: [
      { icon: 'add', title: 'Solicitar traslado', route: '/triage' },
      { icon: 'medkit', title: 'Buscar hospital', route: '/hospitals' },
      { icon: 'bed', title: 'Consultar disponibilidad', route: '/hospitals' },
      { icon: 'ambulance', title: 'Solicitar ambulancia' },
      { icon: 'clipboard', title: 'Enviar referencia', route: '/triage' },
      { icon: 'location', title: 'Rastrear traslado', route: '/patients' },
    ],
    special: { icon: 'ambulance', title: 'Seguimiento del traslado', desc: 'GPS en tiempo real de la ambulancia y paciente.' }
  },
  {
    path: 'hospitales',
    title: 'Hospitales',
    icon: 'location',
    color: '#DD5B47',
    bgColor: '#FBE7E2',
    features: [
      { icon: 'map', title: 'Mapa de hospitales', route: '/hospitals' },
      { icon: 'location', title: 'Hospitales cercanos', route: '/hospitals' },
      { icon: 'bed', title: 'Camas disponibles', route: '/hospitals' },
      { icon: 'heart', title: 'UCI disponible', route: '/hospitals' },
      { icon: 'pulse', title: 'Especialidades' },
      { icon: 'star', title: 'Hospitales compatibles', route: '/hospitals' },
    ],
    special: { icon: 'star', title: 'Hospital recomendado', desc: 'IA que sugiere el mejor hospital según necesidad y disponibilidad.' }
  },
  {
    path: 'seguimiento',
    title: 'Seguimiento',
    icon: 'analytics',
    color: '#C98A2C',
    bgColor: '#FAEDDA',
    features: [
      { icon: 'people', title: 'Pacientes activos', route: '/patients' },
      { icon: 'ambulance', title: 'Traslados en curso', route: '/patients' },
      { icon: 'location', title: 'Ubicación actual', route: '/patients' },
      { icon: 'time', title: 'Tiempo transcurrido', route: '/patients' },
      { icon: 'notifications', title: 'Cambios recientes', route: '/patients' },
      { icon: 'list', title: 'Línea de tiempo', route: '/patients' },
    ],
    special: { icon: 'location', title: 'Ruta en tiempo real', desc: 'Visualización del recorrido del paciente en el mapa.' }
  },
  {
    path: 'auditoria',
    title: 'Auditoría',
    icon: 'clipboard',
    color: '#C98A2C',
    bgColor: '#FAEDDA',
    features: [
      { icon: 'people', title: 'Actividad de usuarios', route: '/patients' },
      { icon: 'time', title: 'Historial de acciones', route: '/patients' },
      { icon: 'lock', title: 'Cambios importantes' },
      { icon: 'warning', title: 'Eventos críticos' },
      { icon: 'search', title: 'Buscar evento', route: '/patients' },
      { icon: 'calendar', title: 'Filtrar por fecha' },
    ],
    special: { icon: 'lock', title: 'Registro inmediato', desc: 'Toda acción crítica queda guardada de forma inmutable.' }
  }
];