// ========================================================
// SISTEMA DE TREINO & DIETA - PERSONALIZÁVEL & ADAPTADO
// Desenvolvido para Nilton Lysardo
// Suporte a CRUD completo: Adicionar, Editar, Excluir exercícios
// Personalização de Metas, Nutrição, Backup e Funcionamento Offline
// ========================================================

// 1. GERADOR DE ILUSTRAÇÕES SVG
const SVG_ICONS = {
  // Supino
  bench_press: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="40" y="115" width="120" height="12" rx="4" fill="#334155"/>
      <rect x="55" y="127" width="10" height="22" fill="#1E293B"/>
      <rect x="135" y="127" width="10" height="22" fill="#1E293B"/>
      <rect x="145" y="65" width="8" height="50" fill="#475569"/>
      <ellipse cx="65" cy="110" rx="9" ry="8" fill="#F8FAFC"/>
      <rect x="75" y="105" width="55" height="12" rx="5" fill="#64748B"/>
      <path d="M 85 104 Q 95 98 105 104" stroke="#FF6B00" stroke-width="6" stroke-linecap="round" fill="none"/>
      <path d="M 90 106 L 100 80 L 110 80" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" fill="none"/>
      <line x1="70" y1="78" x2="150" y2="78" stroke="#E2E8F0" stroke-width="4"/>
      <rect x="72" y="68" width="6" height="20" rx="2" fill="#FF6B00"/>
      <rect x="142" y="68" width="6" height="20" rx="2" fill="#FF6B00"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">SUPINO RETO</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Peitoral Maior + Tríceps</text>
    </svg>`,

  // Voador / Peck Deck
  peck_deck: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="85" y="30" width="30" height="110" rx="6" fill="#1E293B" stroke="#334155" stroke-width="2"/>
      <rect x="75" y="95" width="50" height="10" rx="3" fill="#475569"/>
      <path d="M 45 60 Q 55 90 85 85" stroke="#64748B" stroke-width="5" fill="none"/>
      <path d="M 155 60 Q 145 90 115 85" stroke="#64748B" stroke-width="5" fill="none"/>
      <rect x="40" y="55" width="10" height="35" rx="4" fill="#FF6B00"/>
      <rect x="150" y="55" width="10" height="35" rx="4" fill="#FF6B00"/>
      <circle cx="100" cy="65" r="9" fill="#F8FAFC"/>
      <rect x="92" y="75" width="16" height="24" rx="4" fill="#FF6B00"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">VOADOR (PECK DECK)</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Isolamento de Peitoral</text>
    </svg>`,

  // Chest Press Máquina
  chest_press: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="130" y="40" width="16" height="100" rx="4" fill="#1E293B"/>
      <rect x="110" y="60" width="12" height="45" rx="3" fill="#334155" transform="rotate(-10 110 60)"/>
      <rect x="85" y="105" width="40" height="10" rx="3" fill="#334155"/>
      <circle cx="108" cy="56" r="8" fill="#F8FAFC"/>
      <rect x="100" y="65" width="14" height="36" rx="4" fill="#FF6B00"/>
      <path d="M 103 72 L 75 75 L 50 73" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" fill="none"/>
      <line x1="50" y1="45" x2="50" y2="105" stroke="#64748B" stroke-width="6" stroke-linecap="round"/>
      <circle cx="50" cy="73" r="6" fill="#FF6B00"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">CHEST PRESS MÁQUINA</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Empurrar Guiado Seguro</text>
    </svg>`,

  // Pulley Tríceps / Corda
  triceps_pulley: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="40" y="25" width="14" height="120" rx="3" fill="#1E293B"/>
      <circle cx="65" cy="35" r="9" fill="#475569" stroke="#64748B" stroke-width="2"/>
      <path d="M 47 40 L 65 35 L 85 70" stroke="#94A3B8" stroke-width="2" fill="none"/>
      <rect x="80" y="70" width="16" height="5" rx="2" fill="#FF6B00"/>
      <circle cx="115" cy="50" r="8" fill="#F8FAFC"/>
      <rect x="108" y="60" width="14" height="38" rx="4" fill="#475569"/>
      <path d="M 112 65 L 105 78" stroke="#FF6B00" stroke-width="6" stroke-linecap="round"/>
      <path d="M 105 78 L 88 72" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <text x="100" y="20" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">TRÍCEPS PULLEY / CORDA</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Braços Firmes + Cotovelo Fixo</text>
    </svg>`,

  // Tríceps Máquina
  triceps_machine: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="140" y="35" width="20" height="105" rx="4" fill="#1E293B"/>
      <rect x="80" y="90" width="45" height="10" rx="3" fill="#334155"/>
      <rect x="115" y="55" width="10" height="40" rx="3" fill="#334155"/>
      <path d="M 70 85 L 70 115" stroke="#64748B" stroke-width="6" stroke-linecap="round"/>
      <circle cx="70" cy="85" r="5" fill="#FF6B00"/>
      <circle cx="105" cy="52" r="8" fill="#F8FAFC"/>
      <rect x="98" y="62" width="14" height="34" rx="4" fill="#475569"/>
      <path d="M 104 65 L 94 75" stroke="#FF6B00" stroke-width="6" stroke-linecap="round"/>
      <path d="M 94 75 L 72 85" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">TRÍCEPS MÁQUINA (DIP)</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Mergulho Guiado Estável</text>
    </svg>`,

  // Lat Pulldown / Puxada
  lat_pulldown: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="30" y="20" width="15" height="125" rx="3" fill="#1E293B"/>
      <path d="M 37 30 L 105 30" stroke="#334155" stroke-width="6"/>
      <circle cx="105" cy="30" r="7" fill="#475569"/>
      <path d="M 75 55 Q 105 50 135 55" stroke="#FF6B00" stroke-width="5" stroke-linecap="round" fill="none"/>
      <line x1="105" y1="30" x2="105" y2="52" stroke="#CBD5E1" stroke-width="2"/>
      <rect x="90" y="105" width="30" height="10" rx="3" fill="#334155"/>
      <circle cx="105" cy="72" r="8" fill="#F8FAFC"/>
      <path d="M 98 82 Q 105 84 112 82 L 110 105 L 100 105 Z" fill="#00D2FF"/>
      <path d="M 105 80 L 85 57" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M 105 80 L 125 57" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round"/>
      <text x="100" y="18" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">LAT PULLDOWN (PUXADA)</text>
      <text x="100" y="150" fill="#00D2FF" font-size="9" font-weight="bold" text-anchor="middle">Grande Dorsal (Costas Largas)</text>
    </svg>`,

  // Remada Sentada
  seated_row: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="40" y="125" width="120" height="10" rx="3" fill="#1E293B"/>
      <rect x="48" y="100" width="8" height="25" rx="2" fill="#475569"/>
      <circle cx="50" cy="95" r="7" fill="#64748B"/>
      <rect x="110" y="115" width="35" height="10" rx="3" fill="#334155"/>
      <circle cx="125" cy="75" r="8" fill="#F8FAFC"/>
      <rect x="120" y="84" width="12" height="32" rx="3" fill="#00D2FF"/>
      <line x1="52" y1="95" x2="105" y2="92" stroke="#94A3B8" stroke-width="2"/>
      <path d="M 124 88 L 135 94 L 110 93" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" fill="none"/>
      <polygon points="106,90 106,96 112,93" fill="#FF6B00"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">REMADA SENTADA (CABO/MÁQ)</text>
      <text x="100" y="150" fill="#00D2FF" font-size="9" font-weight="bold" text-anchor="middle">Espessura de Costas e Romboides</text>
    </svg>`,

  // Bíceps Barra
  biceps_curl: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <circle cx="100" cy="40" r="9" fill="#F8FAFC"/>
      <rect x="92" y="51" width="16" height="45" rx="4" fill="#334155"/>
      <path d="M 98 55 L 94 80" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
      <ellipse cx="94" cy="74" rx="6" ry="8" fill="#FF6B00"/>
      <path d="M 94 80 L 115 65" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <circle cx="115" cy="65" r="4" fill="#CBD5E1"/>
      <line x1="95" y1="65" x2="135" y2="65" stroke="#E2E8F0" stroke-width="4"/>
      <rect x="92" y="58" width="5" height="14" rx="2" fill="#FF6B00"/>
      <rect x="133" y="58" width="5" height="14" rx="2" fill="#FF6B00"/>
      <text x="100" y="20" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">ROSCA BÍCEPS BARRA</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Hipertrofia de Bíceps Braquial</text>
    </svg>`,

  // Shoulder Press
  shoulder_press: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="95" y="50" width="10" height="60" rx="2" fill="#334155"/>
      <rect x="80" y="105" width="40" height="10" rx="2" fill="#334155"/>
      <circle cx="100" cy="46" r="8" fill="#F8FAFC"/>
      <rect x="94" y="55" width="12" height="35" rx="3" fill="#475569"/>
      <circle cx="88" cy="58" r="5" fill="#FF6B00"/>
      <circle cx="112" cy="58" r="5" fill="#FF6B00"/>
      <path d="M 88 58 L 74 46 L 75 32" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M 112 58 L 126 46 L 125 32" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <rect x="68" y="28" width="14" height="6" rx="2" fill="#FF6B00"/>
      <rect x="118" y="28" width="14" height="6" rx="2" fill="#FF6B00"/>
      <text x="100" y="18" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">SHOULDER PRESS (DESENVOLVIMENTO)</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Ombros Largos e Fortes</text>
    </svg>`,

  // Elevação Lateral
  lateral_raise: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <circle cx="100" cy="38" r="8" fill="#F8FAFC"/>
      <rect x="92" y="48" width="16" height="50" rx="4" fill="#334155"/>
      <circle cx="88" cy="50" r="5" fill="#FF6B00"/>
      <circle cx="112" cy="50" r="5" fill="#FF6B00"/>
      <path d="M 88 51 Q 65 52 48 55" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M 112 51 Q 135 52 152 55" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" fill="none"/>
      <rect x="42" y="47" width="7" height="16" rx="2" fill="#FF6B00"/>
      <rect x="151" y="47" width="7" height="16" rx="2" fill="#FF6B00"/>
      <text x="100" y="18" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">ELEVAÇÃO LATERAL</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Deltoide Lateral (Ombro em V)</text>
    </svg>`,

  // Voador Invertido
  reverse_fly: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="90" y="40" width="20" height="95" rx="3" fill="#1E293B"/>
      <circle cx="100" cy="55" r="8" fill="#F8FAFC"/>
      <rect x="93" y="65" width="14" height="35" rx="3" fill="#334155"/>
      <ellipse cx="100" cy="70" rx="10" ry="5" fill="#00D2FF"/>
      <path d="M 100 68 L 55 75" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <path d="M 100 68 L 145 75" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <circle cx="55" cy="75" r="5" fill="#FF6B00"/>
      <circle cx="145" cy="75" r="5" fill="#FF6B00"/>
      <text x="100" y="22" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">VOADOR INVERTIDO (COSTAS)</text>
      <text x="100" y="150" fill="#00D2FF" font-size="9" font-weight="bold" text-anchor="middle">Deltoide Posterior + Postura</text>
    </svg>`,

  // Rosca Martelo
  hammer_curl: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <circle cx="100" cy="40" r="9" fill="#F8FAFC"/>
      <rect x="92" y="51" width="16" height="46" rx="4" fill="#334155"/>
      <path d="M 98 56 L 94 78" stroke="#475569" stroke-width="4"/>
      <rect x="90" y="70" width="8" height="14" rx="3" fill="#FF6B00"/>
      <path d="M 94 78 L 112 66" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <rect x="110" y="55" width="8" height="24" rx="3" fill="#FF6B00"/>
      <line x1="106" y1="67" x2="122" y2="67" stroke="#CBD5E1" stroke-width="4"/>
      <text x="100" y="20" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">ROSCA MARTELO</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Braquial + Espessura do Braço</text>
    </svg>`,

  // Leg Press (Adaptado)
  leg_press: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <line x1="45" y1="135" x2="155" y2="45" stroke="#334155" stroke-width="6"/>
      <rect x="45" y="90" width="45" height="12" rx="3" fill="#1E293B" transform="rotate(-40 45 90)"/>
      <circle cx="58" cy="80" r="8" fill="#F8FAFC"/>
      <rect x="65" y="85" width="28" height="12" rx="4" fill="#334155" transform="rotate(-35 65 85)"/>
      <path d="M 85 105 L 110 85 L 130 65" stroke="#10B981" stroke-width="5" stroke-linecap="round" fill="none"/>
      <rect x="125" y="45" width="30" height="8" rx="2" fill="#E2E8F0" transform="rotate(45 125 45)"/>
      <circle cx="140" cy="55" r="10" fill="#FF6B00"/>
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="130" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">LEG PRESS</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Pés Firmes + Amplitude Segura</text>
    </svg>`,

  // Cadeira Extensora
  leg_extension: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="75" y="55" width="10" height="45" rx="2" fill="#334155"/>
      <rect x="75" y="95" width="38" height="10" rx="2" fill="#334155"/>
      <circle cx="82" cy="50" r="8" fill="#F8FAFC"/>
      <rect x="80" y="60" width="12" height="34" rx="3" fill="#475569"/>
      <rect x="85" y="92" width="28" height="8" rx="3" fill="#10B981"/>
      <path d="M 112 96 L 138 96" stroke="#10B981" stroke-width="5" stroke-linecap="round"/>
      <circle cx="135" cy="96" r="6" fill="#FF6B00"/>
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="135" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">CADEIRA EXTENSORA</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Quadríceps com Apoio Total</text>
    </svg>`,

  // Cadeira Flexora
  leg_curl: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="75" y="55" width="10" height="45" rx="2" fill="#334155"/>
      <rect x="75" y="95" width="38" height="10" rx="2" fill="#334155"/>
      <rect x="90" y="85" width="22" height="6" rx="2" fill="#E2E8F0"/>
      <circle cx="82" cy="50" r="8" fill="#F8FAFC"/>
      <rect x="80" y="60" width="12" height="34" rx="3" fill="#475569"/>
      <rect x="85" y="97" width="25" height="7" rx="2" fill="#10B981"/>
      <path d="M 112 98 L 115 125" stroke="#10B981" stroke-width="5" stroke-linecap="round"/>
      <circle cx="115" cy="122" r="6" fill="#FF6B00"/>
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="135" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">CADEIRA FLEXORA</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Isquiotibiais (Posterior de Coxa)</text>
    </svg>`,

  // Cadeira Abdutora
  abductor: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="85" y="45" width="30" height="40" rx="4" fill="#334155"/>
      <circle cx="100" cy="50" r="9" fill="#F8FAFC"/>
      <ellipse cx="65" cy="85" rx="8" ry="12" fill="#10B981"/>
      <ellipse cx="135" cy="85" rx="8" ry="12" fill="#10B981"/>
      <rect x="52" y="75" width="8" height="20" rx="2" fill="#FF6B00"/>
      <rect x="140" y="75" width="8" height="20" rx="2" fill="#FF6B00"/>
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="135" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">CADEIRA ABDUTORA</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Estabilidade do Quadril</text>
    </svg>`,

  // Panturrilha Sentado
  calf_raise: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="70" y="55" width="10" height="45" rx="2" fill="#334155"/>
      <rect x="70" y="95" width="38" height="10" rx="2" fill="#334155"/>
      <rect x="105" y="85" width="20" height="8" rx="2" fill="#E2E8F0"/>
      <circle cx="78" cy="50" r="8" fill="#F8FAFC"/>
      <path d="M 112 95 L 115 125" stroke="#475569" stroke-width="4"/>
      <ellipse cx="118" cy="115" rx="6" ry="10" fill="#10B981"/>
      <circle cx="116" cy="130" r="4" fill="#FF6B00"/>
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="135" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">PANTURRILHA SENTADO</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Segurança e Apoio nos Pés</text>
    </svg>`,

  // Abdominal Máquina
  abs_machine: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="80" y="95" width="40" height="10" rx="2" fill="#334155"/>
      <circle cx="95" cy="55" r="8" fill="#F8FAFC"/>
      <rect x="90" y="65" width="14" height="28" rx="3" fill="#FF6B00"/>
      <path d="M 95 68 Q 110 75 105 92" stroke="#CBD5E1" stroke-width="4" fill="none"/>
      <circle cx="110" cy="72" r="5" fill="#00D2FF"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">ABDOMINAL / CORE</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Proteção da Coluna e Definição</text>
    </svg>`,

  // Ícone Genérico para Exercícios Adicionados pelo Usuário
  generic_gym: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <g transform="translate(100,80) rotate(-45) translate(-100,-80)">
        <rect x="50" y="74" width="100" height="12" rx="6" fill="#FFFFFF"/>
        <rect x="35" y="60" width="14" height="40" rx="4" fill="#FF6B00"/>
        <rect x="22" y="66" width="10" height="28" rx="3" fill="#CBD5E1"/>
        <rect x="151" y="60" width="14" height="40" rx="4" fill="#FF6B00"/>
        <rect x="168" y="66" width="10" height="28" rx="3" fill="#CBD5E1"/>
      </g>
      <circle cx="100" cy="40" r="8" fill="#FF6B00"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">EXERCÍCIO PERSONALIZADO</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Hipertrofia & Força</text>
    </svg>`,

  // Abdução Horizontal de Ombro na Polia
  abducao_horizontal_ombro_polia: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <circle cx="100" cy="38" r="8" fill="#F8FAFC"/>
      <rect x="94" y="48" width="12" height="48" rx="3" fill="#334155"/>
      <circle cx="88" cy="50" r="5" fill="#FF6B00"/>
      <circle cx="112" cy="50" r="5" fill="#FF6B00"/>
      <line x1="88" y1="50" x2="40" y2="50" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <line x1="112" y1="50" x2="160" y2="50" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <line x1="40" y1="50" x2="160" y2="120" stroke="#00D2FF" stroke-width="1.5" stroke-dasharray="3,2"/>
      <line x1="160" y1="50" x2="40" y2="120" stroke="#00D2FF" stroke-width="1.5" stroke-dasharray="3,2"/>
      <text x="100" y="20" fill="#94A3B8" font-size="10" font-weight="bold" text-anchor="middle">ABDUÇÃO HORIZONTAL NA POLIA</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Deltoide Posterior + Costas</text>
    </svg>`
};

// 2. BANCO DE DADOS DOS EXERCÍCIOS INICIAIS (DIVISÃO OFICIAL DE 5 DIAS)
const DEFAULT_EXERCISES = [
  // ==========================================
  // TREINO A: PEITORAL & TRÍCEPS (Push Focus)
  // ==========================================
  { id: "supino", name: "Supino Reto (Barra / Halteres)", category: "A", group: "Peitoral", defaultWeight: "15 kg cada lado", sets: "3 a 4 séries de 8 a 12 reps", iconKey: "bench_press", isNew: false, tip: "Mantenha as escápulas aduzidas e peito estufado. Desça a barra controladamente até o peitoral.", caution: "Não trave os cotovelos bruscamente no topo." },
  { id: "chest_press", name: "Chest Press Máquina", category: "A", group: "Peitoral", defaultWeight: "39 kg", sets: "3 séries de 10 a 12 reps", iconKey: "chest_press", isNew: false, tip: "Apoie bem a lombar no encosto. Trajetória guiada muito segura para hipertrofia com carga constante.", caution: "Evite empurrar projetando os ombros para frente." },
  { id: "voador", name: "Voador (Peck Deck Máquina)", category: "A", group: "Peitoral", defaultWeight: "65 kg", sets: "3 a 4 séries de 10 a 12 reps", iconKey: "peck_deck", isNew: false, tip: "Feche os braços com cotovelos levemente flexionados, apertando o centro do peitoral por 1 segundo.", caution: "Ajuste a altura do banco para que as mãos fiquem alinhadas ao meio do peito." },
  { id: "pulley_triceps", name: "Pulley Tríceps (Barra Reta / Cabo)", category: "A", group: "Tríceps", defaultWeight: "45.5 kg", sets: "3 séries de 10 a 12 reps", iconKey: "triceps_pulley", isNew: false, tip: "Cotovelos colados ao lado do corpo, estenda totalmente o antebraço para baixo.", caution: "Não projete os ombros ou balance o tronco durante a execução." },
  { id: "triceps_corda", name: "Tríceps Corda no Pulley", category: "A", group: "Tríceps", defaultWeight: "42 kg", sets: "3 séries de 10 a 12 reps", iconKey: "triceps_pulley", isNew: false, tip: "Abra bem a ponta da corda embaixo para máxima contração da cabeça lateral do tríceps.", caution: "Segure 1 segundo no ponto de máxima extensão." },
  { id: "triceps_maquina", name: "Tríceps Máquina Sentado (Dip)", category: "A", group: "Tríceps", defaultWeight: "50 kg", sets: "3 séries de 10 a 12 reps", iconKey: "triceps_machine", isNew: false, tip: "Mergulho sentado com estabilidade total. Excelente para volume do braço.", caution: "Mantenha a coluna firme contra o encosto." },

  // ==========================================
  // TREINO B: COSTAS & PUXADAS (Pull Focus)
  // ==========================================
  { id: "puxada_frontal", name: "Puxada Frontal na Polia (Lat Pulldown)", category: "B", group: "Costas", defaultWeight: "40 kg", sets: "3 a 4 séries de 10 a 12 reps", iconKey: "lat_pulldown", isNew: false, tip: "Puxe a barra em direção à parte superior do peitoral com cotovelos apontando para baixo.", caution: "Nunca puxe por trás do pescoço; incline levemente o tronco para trás." },
  { id: "pulley_articulado", name: "Pulley Articulado (Puxada Convergente)", category: "B", group: "Costas", defaultWeight: "20 kg cada lado", sets: "3 séries de 10 a 12 reps", iconKey: "pulley_articulado", isNew: true, tip: "Puxada em máquina articulada com movimento convergente que maximiza a amplitude das dorsais.", caution: "Desça de forma simétrica sem dar tranco com o corpo." },
  { id: "puxada_graviton", name: "Puxada no Graviton (Barra Fixa Assistida)", category: "B", group: "Costas & Dorsal", defaultWeight: "Placas de alívio (ex: 35 kg)", sets: "3 séries de 8 a 10 reps", iconKey: "puxada_graviton", isNew: true, tip: "Apoie os joelhos na plataforma móvel. Realize a subida puxando o peito em direção à barra.", caution: "Controle a descida lentamente sem esticar o ombro abruptamente." },
  { id: "remada_maquina", name: "Remada Máquina / Sentado", category: "B", group: "Costas", defaultWeight: "45.5 kg", sets: "3 séries de 10 a 12 reps", iconKey: "seated_row", isNew: false, tip: "Apoie o peito ou mantenha a postura ereta puxando com força nas escápulas.", caution: "Não curve a lombar." },
  { id: "t_bar_row", name: "T-Bar Row Cavalinho (Apoiado)", category: "B", group: "Costas", defaultWeight: "15 kg anilha", sets: "3 séries de 10 a 12 reps", iconKey: "seated_row", isNew: false, tip: "Concentre na contração da asa das costas e espessura do meio das costas.", caution: "Apoie o tronco no banco acolchoado para segurança lombar." },
  { id: "seated_row_barra", name: "Seated Row (Costas com Barra / Cabo)", category: "B", group: "Costas", defaultWeight: "45.5 kg", sets: "3 séries de 10 a 12 reps", iconKey: "seated_row", isNew: false, tip: "Pés firmes na plataforma, puxe a barra na altura do umbigo estufando o peito.", caution: "Mantenha os joelhos ligeiramente destravados." },
  { id: "high_pulley_ombros", name: "High Pulley Ombros Máquina (Trapézio)", category: "B", group: "Costas e Trapézio", defaultWeight: "42 kg", sets: "3 séries de 12 a 15 reps", iconKey: "high_pulley_ombros", isNew: false, tip: "Puxada alta para trapézio e postura ereta, ajudando no alinhamento dos ombros.", caution: "Cadência controlada sem pressa." },

  // ==========================================
  // TREINO C: PERNAS (Adaptado & Seguro) & ABDÔMEN
  // ==========================================
  { id: "leg_press", name: "Leg Press 45° ou Horizontal", category: "C", group: "Pernas (Adaptado)", defaultWeight: "26 kg", sets: "3 séries de 10 a 12 reps", iconKey: "leg_press", isNew: false, tip: "Apoie os dois pés firmes na plataforma. Desça até ~90° sem desgrudar a lombar do assento.", caution: "Nunca estenda totalmente os joelhos (não trave no topo)." },
  { id: "leg_extension", name: "Cadeira Extensora (Foco Seguro)", category: "C", group: "Quadríceps (Adaptado)", defaultWeight: "10 a 15 kg", sets: "3 séries de 12 a 15 reps", iconKey: "leg_extension", isNew: true, tip: "Coluna totalmente apoiada no encosto. Pode ser feito bilateral ou unilateral com carga leve.", caution: "Segure firme nas manoplas laterais para estabilidade." },
  { id: "leg_curl", name: "Cadeira Flexora Sentada", category: "C", group: "Posterior de Coxa", defaultWeight: "15 a 20 kg", sets: "3 séries de 12 reps", iconKey: "leg_curl", isNew: true, tip: "Apoio total sentado com coxa travada pela almofada. Zero risco de desequilíbrio.", caution: "Ajuste o rolo logo acima dos calcanhares." },
  { id: "abductor", name: "Cadeira Abdutora (Quadril & Estabilidade)", category: "C", group: "Glúteos & Estabilidade", defaultWeight: "20 a 30 kg", sets: "3 séries de 15 reps", iconKey: "abductor", isNew: true, tip: "MUITO IMPORTANTE: Fortalece o glúteo médio, essencial para estabilidade pélvica e marcha equilibrada.", caution: "Abra controlando o peso e segure 1 segundo na abertura máxima." },
  { id: "calf_raise", name: "Panturrilha Sentado na Máquina (Gêmeos)", category: "C", group: "Panturrilhas", defaultWeight: "15 a 20 kg", sets: "3 séries de 15 a 20 reps", iconKey: "calf_raise", isNew: true, tip: "Totalmente sentado com almofada sobre os joelhos. Eleve ao máximo e desça alongando.", caution: "Faça movimento amplo sem rebote rápido." },
  { id: "abs_machine", name: "Abdominal Máquina ou Crunch Solo", category: "C", group: "Abdômen & Core", defaultWeight: "Peso corporal ou 15 kg", sets: "3 séries de 15 a 20 reps", iconKey: "abs_machine", isNew: true, tip: "Fortalece o core, protege a coluna lombar e define o abdômen.", caution: "Solte o ar pela boca ao flexionar o tronco." },

  // ==========================================
  // TREINO D: OMBROS 3D & POSTURA (Deltoides Completo)
  // ==========================================
  { id: "shoulder_press", name: "Elevação Ombro Máquina (Shoulder Press)", category: "D", group: "Ombros (Anterior/Lateral)", defaultWeight: "24 kg", sets: "3 séries de 10 a 12 reps", iconKey: "shoulder_press", isNew: false, tip: "Empurre para o alto mantendo os cotovelos no plano escapular (levemente à frente do corpo).", caution: "Não jogue o queixo ou o tronco para frente." },
  { id: "lateral_raise", name: "Elevação Lateral (Halteres / Polia)", category: "D", group: "Ombros (Lateral)", defaultWeight: "5 a 7 kg", sets: "3 a 4 séries de 12 a 15 reps", iconKey: "lateral_raise", isNew: true, tip: "Essencial para ombro largo em formato 'V' e aspecto 3D atlético.", caution: "Use carga moderada sem impulso do quadril." },
  { id: "abducao_horizontal_ombro_polia", name: "Abdução Horizontal de Ombro na Polia", category: "D", group: "Ombros (Posterior)", defaultWeight: "10 a 15 kg", sets: "3 séries de 12 a 15 reps", iconKey: "abducao_horizontal_ombro_polia", isNew: true, tip: "Fique em pé com uma mão apoiada atrás do quadril, ajuste a polia na altura do peito/ombro. Puxe o cabo abrindo o braço lateralmente na horizontal até a linha do ombro, focando na contração do deltoide posterior.", caution: "Mantenha o braço livre apoiado atrás da lombar para estabilizar a postura." },
  { id: "crucifixo_invertido", name: "Crucifixo Invertido (Peck Deck Invertido)", category: "D", group: "Ombros (Posterior) & Escápulas", defaultWeight: "19.5 kg", sets: "3 séries de 12 a 15 reps", iconKey: "crucifixo_invertido", isNew: false, tip: "Sentado de frente para o banco do voador, abra os braços para trás na linha dos ombros.", caution: "Concentre o esforço na parte de trás dos ombros e adução das escápulas." },
  { id: "elevacao_frontal_polia", name: "Elevação Frontal na Polia Baixa", category: "D", group: "Ombros (Anterior)", defaultWeight: "10 kg", sets: "3 séries de 12 reps", iconKey: "elevacao_frontal_polia", isNew: true, tip: "Suba o cabo com a pegada pronada até a altura dos olhos, descendo controladamente.", caution: "Mantenha o tronco firme sem inclinar para trás." },

  // ==========================================
  // TREINO E: BRAÇOS COMPLETOS (Bíceps, Tríceps & Antebraço)
  // ==========================================
  { id: "rosca_barra_w", name: "Rosca com Barra W (Bíceps)", category: "E", group: "Bíceps", defaultWeight: "7 a 10 kg cada lado", sets: "3 a 4 séries de 10 a 12 reps", iconKey: "rosca_barra_w", isNew: true, tip: "A curvatura anatômica da barra W poupa os punhos e permite contrair os bíceps com máxima força.", caution: "Mantenha os cotovelos fixos ao lado das costelas." },
  { id: "rosca_inclinada", name: "Rosca com Halteres Inclinada no Banco", category: "E", group: "Bíceps (Cabeça Longa)", defaultWeight: "7 a 9 kg cada halter", sets: "3 séries de 10 a 12 reps", iconKey: "rosca_inclinada", isNew: true, tip: "Banco inclinado a ~60°. Proporciona um alongamento inicial profundo na cabeça longa do bíceps, criando pico.", caution: "Não levante os ombros do encosto do banco." },
  { id: "rosca_corda_polia", name: "Rosca com Corda na Polia Baixa", category: "E", group: "Bíceps & Braquial", defaultWeight: "15 a 20 kg", sets: "3 séries de 12 reps", iconKey: "rosca_corda_polia", isNew: true, tip: "Pegada neutra na corda com polia no chão. No topo da subida, afaste as pontas da corda para pico de tensão.", caution: "Controle a volta sem deixar os pesos baterem na pilha." },
  { id: "rosca_concentrada", name: "Rosca Concentrada com Halter Sentado", category: "E", group: "Bíceps (Pico)", defaultWeight: "8 a 10 kg", sets: "3 séries de 10 a 12 reps", iconKey: "rosca_concentrada", isNew: true, tip: "Apoie o cotovelo na parte interna da coxa. Isole o bíceps com zero ajuda de impulso corporal.", caution: "Suba girando a palma da mão para fora (supinação máxima)." },
  { id: "hammer_curl", name: "Rosca Martelo com Halteres", category: "E", group: "Bíceps e Antebraço", defaultWeight: "8 a 10 kg cada halter", sets: "3 séries de 10 a 12 reps", iconKey: "hammer_curl", isNew: true, tip: "Palmas viradas para dentro (pegada neutra). Constrói o músculo braquial e antebraço espesso.", caution: "Faça sentado com apoio de tronco para manter a técnica perfeita." },
  { id: "biceps_barra", name: "Bíceps Barra (Rosca Direta Clássica)", category: "E", group: "Bíceps", defaultWeight: "5 a 8 kg cada lado", sets: "3 séries de 10 a 12 reps", iconKey: "biceps_curl", isNew: false, tip: "Pegada tradicional com pegada supinada para espessura geral do bíceps.", caution: "Não balance as costas para jogar o peso." },
  { id: "pulley_triceps_e", name: "Pulley Tríceps Unilateral / Cabo", category: "E", group: "Tríceps", defaultWeight: "15 a 20 kg", sets: "3 séries de 12 a 15 reps", iconKey: "triceps_pulley", isNew: true, tip: "Execução com foco no equilíbrio muscular e isolamento de cada braço.", caution: "Estenda o cotovelo totalmente sem mexer o ombro." }
];

// 3. ESTADO GLOBAL DO APLICATIVO (PERSONALIZÁVEL)
let appState = {
  currentTab: 'workouts',
  currentWorkoutCategory: 'A',
  exercises: [],
  completedSets: {},
  customWeights: {},
  waterIntake: 0,
  weightHistory: [
    { date: "Início", weight: 69.0 }
  ],
  userGoals: {
    startWeight: 69.0,
    targetWeight: 75.0,
    calories: 2650,
    protein: 145,
    carbs: 330,
    fats: 65,
    waterGoal: 3000
  }
};

// 4. IDENTIFICADOR INTELIGENTE DE IMAGENS DOS EXERCÍCIOS
function getExerciseImagePath(ex) {
  if (!ex) return 'images/supino.png';
  const id = (ex.id || '').toLowerCase();
  const icon = (ex.iconKey || '').toLowerCase();
  const norm = (ex.name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  // 1. Puxada no Graviton / Barra Fixa Assistida
  if (id.includes('graviton') || icon.includes('graviton') || norm.includes('graviton') || (norm.includes('barra') && norm.includes('assistid'))) {
    return 'images/puxada_graviton.png';
  }

  // 2. Rosca Concentrada
  if (id.includes('concentrad') || icon.includes('concentrad') || norm.includes('concentrad')) {
    return 'images/rosca_concentrada.png';
  }

  // 3. Rosca com Halteres Inclinada / Banco Inclinado
  if (id.includes('inclinad') || icon.includes('inclinad') || norm.includes('inclinad')) {
    return 'images/rosca_inclinada.png';
  }

  // 4. Rosca com Corda na Polia Baixa
  if (id.includes('corda_polia') || norm.includes('corda na polia') || (norm.includes('corda') && norm.includes('polia')) || (norm.includes('rosca') && norm.includes('corda'))) {
    return 'images/rosca_corda_polia.png';
  }

  // 5. Rosca com Barra W / EZ Bar
  if (id.includes('barra_w') || norm.includes('barra w') || norm.includes('barra ez') || norm.includes('rosca w')) {
    return 'images/rosca_barra_w.png';
  }

  // 6. Abdução Horizontal de Ombro na Polia
  if (id === 'abducao_horizontal_ombro_polia' || icon === 'abducao_horizontal_ombro_polia' || 
      ((norm.includes('abduc') || norm.includes('abert')) && (norm.includes('horizontal') || norm.includes('polia')) && norm.includes('ombro'))) {
    return 'images/abducao_horizontal_ombro_polia.png';
  }

  // 7. Crucifixo Invertido / Voador Invertido / Costas Voador
  if (id.includes('crucifixo_invertido') || id.includes('costas_voador') || norm.includes('crucifixo invertido') || norm.includes('voador invertido') || norm.includes('costas voador') || (norm.includes('invertid') && (norm.includes('crucifixo') || norm.includes('voador')))) {
    return 'images/crucifixo_invertido.png';
  }

  // 8. Pulley Articulado / Puxada Articulada
  if (id.includes('articulad') || norm.includes('articulad')) {
    return 'images/pulley_articulado.png';
  }

  // 9. Puxada Frontal / Lat Pulldown
  if (id.includes('lat_pulldown') || id.includes('puxada_frontal') || norm.includes('puxada frontal') || norm.includes('puxada alta') || norm.includes('lat pulldown')) {
    return 'images/lat_pulldown.png';
  }

  // 10. Elevação Frontal na Polia
  if (id.includes('elevacao_frontal') || norm.includes('elevacao frontal') || (norm.includes('frontal') && norm.includes('polia'))) {
    return 'images/elevacao_frontal_polia.png';
  }

  // 11. Elevação Lateral
  if (id.includes('lateral_raise') || norm.includes('elevacao lateral') || norm.includes('lateral')) {
    return 'images/lateral_raise.png';
  }

  // 12. Supino Reto
  if (id.includes('supino') || norm.includes('supino')) {
    return 'images/supino.png';
  }

  // 13. Chest Press
  if (id.includes('chest_press') || norm.includes('chest press')) {
    return 'images/chest_press.png';
  }

  // 14. Voador / Peck Deck
  if (id === 'voador' || norm.includes('peck deck') || (norm.includes('voador') && !norm.includes('invertid'))) {
    return 'images/voador.png';
  }

  // 15. Shoulder Press / Desenvolvimento
  if (id.includes('shoulder_press') || norm.includes('shoulder press') || norm.includes('desenvolvimento') || (norm.includes('elevacao') && norm.includes('ombro'))) {
    return 'images/shoulder_press.png';
  }

  // 16. Tríceps Corda
  if (id.includes('triceps_corda') || (norm.includes('triceps') && norm.includes('corda'))) {
    return 'images/triceps_corda.png';
  }

  // 17. Tríceps Máquina / Dip
  if (id.includes('triceps_maquina') || norm.includes('triceps maquina') || norm.includes('mergulho')) {
    return 'images/triceps_maquina.png';
  }

  // 18. Pulley Tríceps / Tríceps Barra
  if (id.includes('pulley_triceps') || (norm.includes('triceps') && (norm.includes('pulley') || norm.includes('barra') || norm.includes('cabo')))) {
    return 'images/pulley_triceps.png';
  }

  // 19. Rosca Martelo
  if (id.includes('hammer') || norm.includes('martelo') || norm.includes('hammer')) {
    return 'images/hammer_curl.png';
  }

  // 20. Bíceps Barra / Rosca Direta
  if (id.includes('biceps_barra') || norm.includes('rosca direta') || (norm.includes('biceps') && norm.includes('barra'))) {
    return 'images/biceps_barra.png';
  }

  // 21. Remada Máquina
  if (id.includes('remada_maquina') || (norm.includes('remada') && norm.includes('maquina'))) {
    return 'images/remada_maquina.png';
  }

  // 22. T-Bar Row / Cavalinho
  if (id.includes('t_bar') || norm.includes('cavalinho') || norm.includes('t-bar') || norm.includes('t bar')) {
    return 'images/t_bar_row.png';
  }

  // 23. Seated Row com Barra
  if (id.includes('seated_row') || norm.includes('seated row')) {
    return 'images/seated_row_barra.png';
  }

  // 24. High Pulley / Trapézio
  if (id.includes('high_pulley') || norm.includes('high pulley') || norm.includes('encolhimento')) {
    return 'images/high_pulley_ombros.png';
  }

  // 25. Leg Press
  if (id.includes('leg_press') || norm.includes('leg press')) {
    return 'images/leg_press.png';
  }

  // 26. Cadeira Extensora
  if (id.includes('leg_extension') || norm.includes('extensora')) {
    return 'images/leg_extension.png';
  }

  // 27. Cadeira Flexora
  if (id.includes('leg_curl') || norm.includes('flexora')) {
    return 'images/leg_curl.png';
  }

  // 28. Cadeira Abdutora
  if (id.includes('abductor') || norm.includes('abdutora')) {
    return 'images/abductor.png';
  }

  // 29. Panturrilha
  if (id.includes('calf') || norm.includes('panturrilha') || norm.includes('gemeos')) {
    return 'images/calf_raise.png';
  }

  // 30. Abdominal / Core
  if (id.includes('abs') || norm.includes('abdominal') || norm.includes('crunch')) {
    return 'images/abs_machine.png';
  }

  return `images/${ex.id}.png`;
}

// 5. CARREGAR E SALVAR DADOS NO LOCALSTORAGE COM MIGRAÇÃO INTELIGENTE
function mergeTo5DaySplit(userExercises) {
  if (!Array.isArray(userExercises) || userExercises.length === 0) {
    return [...DEFAULT_EXERCISES];
  }

  const defaultById = new Map();
  const defaultByNormName = new Map();

  DEFAULT_EXERCISES.forEach(def => {
    defaultById.set(def.id, def);
    const n = (def.name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    defaultByNormName.set(n, def);
  });

  const merged = [];
  const handledDefaultIds = new Set();

  userExercises.forEach(uex => {
    const norm = (uex.name || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    let matchedDef = null;

    if (defaultById.has(uex.id)) {
      matchedDef = defaultById.get(uex.id);
    } else {
      for (const [defNorm, def] of defaultByNormName.entries()) {
        if (norm.includes(defNorm) || defNorm.includes(norm) ||
            (norm.includes('graviton') && defNorm.includes('graviton')) ||
            (norm.includes('concentrad') && defNorm.includes('concentrad')) ||
            (norm.includes('inclinad') && defNorm.includes('inclinad')) ||
            (norm.includes('corda') && norm.includes('polia') && defNorm.includes('corda') && defNorm.includes('polia')) ||
            (norm.includes('barra w') && defNorm.includes('barra w')) ||
            (norm.includes('crucifixo') && norm.includes('invertid') && defNorm.includes('crucifixo')) ||
            (norm.includes('articulad') && defNorm.includes('articulad')) ||
            (norm.includes('puxada') && norm.includes('frontal') && defNorm.includes('frontal')) ||
            (norm.includes('abduc') && norm.includes('horizontal') && defNorm.includes('abduc'))) {
          matchedDef = def;
          break;
        }
      }
    }

    if (matchedDef) {
      handledDefaultIds.add(matchedDef.id);
      merged.push({
        ...matchedDef,
        id: matchedDef.id,
        name: uex.name || matchedDef.name,
        category: matchedDef.category,
        defaultWeight: uex.defaultWeight || matchedDef.defaultWeight,
        sets: uex.sets || matchedDef.sets,
        tip: uex.tip || matchedDef.tip,
        caution: uex.caution || matchedDef.caution
      });
    } else {
      merged.push(uex);
    }
  });

  // Acrescenta exercícios padrão do plano de 5 dias que ainda não constem
  DEFAULT_EXERCISES.forEach(def => {
    if (!handledDefaultIds.has(def.id)) {
      merged.push({ ...def });
      handledDefaultIds.add(def.id);
    }
  });

  return merged;
}

function loadFromStorage() {
  const savedExercises = localStorage.getItem('gym_exercises');
  if (savedExercises) {
    try {
      const parsed = JSON.parse(savedExercises);
      if (Array.isArray(parsed) && parsed.length > 0) {
        appState.exercises = mergeTo5DaySplit(parsed);
      } else {
        appState.exercises = [...DEFAULT_EXERCISES];
      }
    } catch(e) {
      appState.exercises = [...DEFAULT_EXERCISES];
    }
  } else {
    appState.exercises = [...DEFAULT_EXERCISES];
  }
  saveToStorage('gym_exercises', appState.exercises);

  const savedWeights = localStorage.getItem('gym_weights');
  if (savedWeights) appState.customWeights = JSON.parse(savedWeights);

  const savedCompleted = localStorage.getItem('gym_completed_sets');
  if (savedCompleted) appState.completedSets = JSON.parse(savedCompleted);

  const savedWater = localStorage.getItem('gym_water');
  if (savedWater) appState.waterIntake = parseInt(savedWater, 10);

  const savedWeightHistory = localStorage.getItem('gym_weight_history');
  if (savedWeightHistory) appState.weightHistory = JSON.parse(savedWeightHistory);

  const savedGoals = localStorage.getItem('gym_user_goals');
  if (savedGoals) appState.userGoals = JSON.parse(savedGoals);
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// 5. RENDERIZAÇÃO DA LISTA DE EXERCÍCIOS
function renderExerciseList() {
  const container = document.getElementById('exercise-list-container');
  if (!container) return;

  const category = appState.currentWorkoutCategory;
  const searchTerm = (document.getElementById('search-input')?.value || '').toLowerCase();

  let filtered = appState.exercises;
  if (category !== 'ALL') {
    filtered = filtered.filter(ex => ex.category === category);
  }

  if (searchTerm.trim() !== '') {
    filtered = filtered.filter(ex => 
      ex.name.toLowerCase().includes(searchTerm) || 
      ex.group.toLowerCase().includes(searchTerm)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align:center; padding: 40px 20px; color: var(--text-muted); background:var(--bg-card); border-radius:14px; border:1px solid var(--border-color);">
        <p style="font-size: 1.1rem; font-weight:700;">Nenhum exercício neste treino</p>
        <p style="font-size: 0.85rem; margin: 8px 0 16px;">Toque no botão abaixo para adicionar um exercício.</p>
        <button class="btn-primary-action" style="max-width:220px; margin:0 auto;" onclick="openExerciseFormModal(null, '${category !== 'ALL' ? category : 'A'}')">
          + Adicionar Exercício
        </button>
      </div>`;
    updateWorkoutSummary();
    return;
  }

  let html = '';
  filtered.forEach(ex => {
    const isCompleted = !!appState.completedSets[ex.id];
    const currentWeight = appState.customWeights[ex.id] || ex.defaultWeight;
    const svgIcon = SVG_ICONS[ex.iconKey] || SVG_ICONS['generic_gym'];

    const imagePath = getExerciseImagePath(ex);
    html += `
      <div class="exercise-card ${isCompleted ? 'completed' : ''}" id="card-${ex.id}">
        <div class="exercise-header">
          <div class="exercise-thumb" onclick="openExerciseModal('${ex.id}')" title="Toque para ampliar e ver a técnica">
            <img src="${imagePath}" class="exercise-img" alt="${ex.name}" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
            <div style="display:none; width:100%; height:100%;">${svgIcon}</div>
            <span class="exercise-thumb-zoom">🔍 Zoom</span>
          </div>
          <div class="exercise-info">
            <div class="exercise-title-row">
              <h3 class="exercise-title">${ex.name}</h3>
              <div class="card-quick-actions">
                <button class="btn-card-small" onclick="openExerciseFormModal('${ex.id}')" title="Editar exercício">✏️</button>
                <button class="btn-card-small delete" onclick="deleteExercise('${ex.id}')" title="Excluir exercício">🗑️</button>
              </div>
            </div>
            <div class="exercise-target">🎯 ${ex.group}</div>
            <div class="exercise-tags">
              <span class="badge ${ex.category === 'C' ? 'badge-green' : 'badge-orange'}">Treino ${ex.category}</span>
              ${ex.isNew ? '<span class="badge badge-new">★ Sugestão Nova</span>' : ''}
              ${ex.category === 'C' ? '<span class="badge badge-cyan">Seguro / Adaptado</span>' : ''}
            </div>
          </div>
        </div>

        <div class="exercise-metrics">
          <div class="metric-item">
            <span class="metric-label">SÉRIES RECOMENDADAS</span>
            <span class="metric-value" style="font-size:0.82rem; color:#CBD5E1;">${ex.sets}</span>
          </div>
          <div class="metric-input-wrap">
            <div class="metric-item" style="align-items:flex-end;">
              <span class="metric-label">SUA CARGA</span>
              <input type="text" class="metric-input" value="${currentWeight}" 
                onchange="updateExerciseWeight('${ex.id}', this.value)" 
                placeholder="Ex: 20kg" />
            </div>
            <button class="btn-check-set ${isCompleted ? 'checked' : ''}" 
              onclick="toggleSetCompleted('${ex.id}')" 
              title="Marcar exercício como concluído hoje">
              ${isCompleted ? '✓' : '○'}
            </button>
          </div>
        </div>

        <button class="exercise-details-toggle" onclick="toggleDetails('${ex.id}')">
          <span>ℹ️ Instruções de postura & cuidados</span>
        </button>

        <div class="exercise-expandable-info" id="details-${ex.id}">
          <p><strong>Como executar:</strong> ${ex.tip}</p>
          ${ex.caution ? `<div class="exercise-caution-box"><strong>⚠️ Cuidado & Postura:</strong> ${ex.caution}</div>` : ''}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateWorkoutSummary();
}

// 6. RESUMO DO TREINO
function updateWorkoutSummary() {
  const summaryEl = document.getElementById('workout-summary-content');
  if (!summaryEl) return;

  const cat = appState.currentWorkoutCategory;
  let title = "Treino A: Peitoral & Tríceps";
  let desc = "Foco em força de empurrar, densidade peitoral e definição de tríceps.";

  if (cat === 'B') {
    title = "Treino B: Costas & Puxadas";
    desc = "Foco em largura, espessura e força em puxadas e remadas.";
  } else if (cat === 'C') {
    title = "Treino C: Pernas Seguras & Abdômen (Core)";
    desc = "Exercícios adaptados 100% em máquinas seguras com apoio lombar total.";
  } else if (cat === 'D') {
    title = "Treino D: Ombros 3D & Postura";
    desc = "Deltoides completo: anterior, lateral, posterior e trapézio na polia.";
  } else if (cat === 'E') {
    title = "Treino E: Braços Completos (Bíceps & Tríceps)";
    desc = "Superfoco em bíceps isolado (banco inclinado, polia, barra W) e tríceps.";
  } else if (cat === 'ALL') {
    title = "Todos os Exercícios da Sua Rotina";
    desc = "Catálogo completo com cargas salvas e instruções ilustradas.";
  }

  const categoryExercises = cat === 'ALL' 
    ? appState.exercises 
    : appState.exercises.filter(e => e.category === cat);

  const total = categoryExercises.length;
  const completed = categoryExercises.filter(e => appState.completedSets[e.id]).length;

  summaryEl.innerHTML = `
    <div>
      <div class="info-title">${title}</div>
      <div class="info-sub">${desc}</div>
    </div>
    <div style="text-align:right;">
      <span class="badge ${completed === total && total > 0 ? 'badge-green' : 'badge-orange'}" style="font-size:0.85rem; padding:6px 10px;">
        ${completed} / ${total} feitos
      </span>
    </div>
  `;
}

// 7. CRUD DE EXERCÍCIOS (ADICIONAR, EDITAR, EXCLUIR)
function openExerciseFormModal(id = null, defaultCategory = null) {
  const modal = document.getElementById('exercise-form-modal');
  const title = document.getElementById('form-modal-title');
  const formId = document.getElementById('form-exercise-id');
  const formName = document.getElementById('form-exercise-name');
  const formCategory = document.getElementById('form-exercise-category');
  const formGroup = document.getElementById('form-exercise-group');
  const formWeight = document.getElementById('form-exercise-weight');
  const formSets = document.getElementById('form-exercise-sets');
  const formTip = document.getElementById('form-exercise-tip');
  const formCaution = document.getElementById('form-exercise-caution');
  const formIcon = document.getElementById('form-exercise-icon');

  if (id) {
    const ex = appState.exercises.find(e => e.id === id);
    if (!ex) return;
    title.innerText = "Editar Exercício";
    formId.value = ex.id;
    formName.value = ex.name;
    formCategory.value = ex.category;
    formGroup.value = ex.group;
    formWeight.value = appState.customWeights[ex.id] || ex.defaultWeight;
    formSets.value = ex.sets;
    formTip.value = ex.tip || "";
    formCaution.value = ex.caution || "";
    formIcon.value = ex.iconKey || "generic_gym";
  } else {
    title.innerText = "Novo Exercício";
    formId.value = "";
    formName.value = "";
    formCategory.value = defaultCategory || (appState.currentWorkoutCategory !== 'ALL' ? appState.currentWorkoutCategory : 'A');
    formGroup.value = "Peitoral";
    formWeight.value = "10 kg";
    formSets.value = "3 séries de 10 a 12 reps";
    formTip.value = "Execute o movimento de forma controlada.";
    formCaution.value = "";
    formIcon.value = "generic_gym";
  }

  modal.classList.add('open');
}

function closeExerciseFormModal() {
  const modal = document.getElementById('exercise-form-modal');
  if (modal) modal.classList.remove('open');
}

function saveExerciseFromForm(e) {
  if (e) e.preventDefault();

  const id = document.getElementById('form-exercise-id').value;
  const name = document.getElementById('form-exercise-name').value.trim();
  const category = document.getElementById('form-exercise-category').value;
  const group = document.getElementById('form-exercise-group').value;
  const weight = document.getElementById('form-exercise-weight').value.trim();
  const sets = document.getElementById('form-exercise-sets').value.trim();
  const tip = document.getElementById('form-exercise-tip').value.trim();
  const caution = document.getElementById('form-exercise-caution').value.trim();
  const iconKey = document.getElementById('form-exercise-icon').value;

  if (!name) {
    alert("Por favor, digite o nome do exercício.");
    return;
  }

  if (id) {
    // Edição
    const index = appState.exercises.findIndex(e => e.id === id);
    if (index !== -1) {
      appState.exercises[index].name = name;
      appState.exercises[index].category = category;
      appState.exercises[index].group = group;
      appState.exercises[index].sets = sets;
      appState.exercises[index].tip = tip;
      appState.exercises[index].caution = caution;
      appState.exercises[index].iconKey = iconKey;
      appState.customWeights[id] = weight;
    }
  } else {
    // Novo
    const newId = 'ex_' + Date.now();
    const newExercise = {
      id: newId,
      name: name,
      category: category,
      group: group,
      defaultWeight: weight,
      sets: sets,
      iconKey: iconKey,
      isNew: true,
      tip: tip || "Execute com boa postura e controle.",
      caution: caution
    };
    appState.exercises.push(newExercise);
    appState.customWeights[newId] = weight;
  }

  saveToStorage('gym_exercises', appState.exercises);
  saveToStorage('gym_weights', appState.customWeights);
  closeExerciseFormModal();
  renderExerciseList();
  alert(id ? "Exercício atualizado com sucesso!" : "Novo exercício adicionado com sucesso!");
}

function deleteExercise(id) {
  const ex = appState.exercises.find(e => e.id === id);
  if (!ex) return;

  if (confirm(`Tem certeza que deseja excluir o exercício "${ex.name}"?`)) {
    appState.exercises = appState.exercises.filter(e => e.id !== id);
    delete appState.customWeights[id];
    delete appState.completedSets[id];

    saveToStorage('gym_exercises', appState.exercises);
    saveToStorage('gym_weights', appState.customWeights);
    saveToStorage('gym_completed_sets', appState.completedSets);

    renderExerciseList();
  }
}

// 8. PERSONALIZAÇÃO DE METAS E PERFIL (PESO, CALORIAS, MACROS)
function openGoalsModal() {
  const modal = document.getElementById('goals-modal');
  if (!modal) return;

  document.getElementById('goal-start-weight').value = appState.userGoals.startWeight;
  document.getElementById('goal-target-weight').value = appState.userGoals.targetWeight;
  document.getElementById('goal-calories').value = appState.userGoals.calories;
  document.getElementById('goal-protein').value = appState.userGoals.protein;
  document.getElementById('goal-carbs').value = appState.userGoals.carbs;
  document.getElementById('goal-fats').value = appState.userGoals.fats;
  document.getElementById('goal-water').value = appState.userGoals.waterGoal;

  modal.classList.add('open');
}

function closeGoalsModal() {
  const modal = document.getElementById('goals-modal');
  if (modal) modal.classList.remove('open');
}

function saveGoalsFromForm(e) {
  if (e) e.preventDefault();

  appState.userGoals.startWeight = parseFloat(document.getElementById('goal-start-weight').value) || 69.0;
  appState.userGoals.targetWeight = parseFloat(document.getElementById('goal-target-weight').value) || 75.0;
  appState.userGoals.calories = parseInt(document.getElementById('goal-calories').value) || 2650;
  appState.userGoals.protein = parseInt(document.getElementById('goal-protein').value) || 145;
  appState.userGoals.carbs = parseInt(document.getElementById('goal-carbs').value) || 330;
  appState.userGoals.fats = parseInt(document.getElementById('goal-fats').value) || 65;
  appState.userGoals.waterGoal = parseInt(document.getElementById('goal-water').value) || 3000;

  saveToStorage('gym_user_goals', appState.userGoals);
  closeGoalsModal();
  renderWeightProgress();
  renderNutrition();
  alert("Metas e objetivos atualizados com sucesso!");
}

// 9. BACKUP E RESTAURAÇÃO (EXPORTAR / IMPORTAR DADOS)
function exportBackup() {
  const backupData = {
    exercises: appState.exercises,
    customWeights: appState.customWeights,
    weightHistory: appState.weightHistory,
    userGoals: appState.userGoals,
    exportDate: new Date().toISOString()
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `meu_treino_backup_${new Date().toISOString().slice(0,10)}.json`);
  dlAnchor.click();
}

function triggerImportBackup() {
  const fileInput = document.getElementById('backup-file-input');
  if (fileInput) fileInput.click();
}

function handleImportBackup(e) {
  const file = e.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(event) {
    try {
      const data = JSON.parse(event.target.result);
      if (data.exercises && Array.isArray(data.exercises)) {
        appState.exercises = data.exercises;
        if (data.customWeights) appState.customWeights = data.customWeights;
        if (data.weightHistory) appState.weightHistory = data.weightHistory;
        if (data.userGoals) appState.userGoals = data.userGoals;

        saveToStorage('gym_exercises', appState.exercises);
        saveToStorage('gym_weights', appState.customWeights);
        saveToStorage('gym_weight_history', appState.weightHistory);
        saveToStorage('gym_user_goals', appState.userGoals);

        renderExerciseList();
        renderWeightProgress();
        renderNutrition();
        alert("Backup restaurado com sucesso no seu aplicativo!");
      } else {
        alert("Arquivo de backup inválido.");
      }
    } catch(err) {
      alert("Erro ao ler o arquivo de backup.");
    }
  };
  reader.readAsText(file);
}

// 10. DETALHES, CARGAS E INTERATIVIDADE
function toggleDetails(id) {
  const el = document.getElementById(`details-${id}`);
  if (el) el.classList.toggle('open');
}

function toggleSetCompleted(id) {
  appState.completedSets[id] = !appState.completedSets[id];
  saveToStorage('gym_completed_sets', appState.completedSets);
  renderExerciseList();
  if (navigator.vibrate) navigator.vibrate(60);
}

function updateExerciseWeight(id, newWeight) {
  appState.customWeights[id] = newWeight;
  saveToStorage('gym_weights', appState.customWeights);
}

function switchWorkoutTab(category) {
  appState.currentWorkoutCategory = category;
  document.querySelectorAll('.workout-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  
  const polioAlert = document.getElementById('polio-safe-alert');
  if (polioAlert) {
    polioAlert.style.display = (category === 'C' || category === 'ALL') ? 'flex' : 'none';
  }

  renderExerciseList();
}

function openExerciseModal(id) {
  const ex = appState.exercises.find(e => e.id === id);
  if (!ex) return;

  const modal = document.getElementById('exercise-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');

  const imagePath = getExerciseImagePath(ex);
  modalTitle.innerText = ex.name;
  modalImg.innerHTML = `
    <img src="${imagePath}" class="modal-exercise-img" alt="${ex.name}" onerror="this.parentElement.innerHTML=\`${(SVG_ICONS[ex.iconKey] || SVG_ICONS['generic_gym']).replace(/`/g, '\\`')}\`">
  `;
  modalDesc.innerHTML = `
    <div style="margin-bottom:12px;">
      <span class="badge badge-orange">${ex.group}</span>
      <span class="badge badge-cyan">${ex.sets}</span>
    </div>
    <p style="margin-bottom:10px; line-height:1.5;"><strong>Execução Técnica:</strong><br>${ex.tip}</p>
    ${ex.caution ? `<div class="exercise-caution-box"><strong>Cuidados Anatômicos:</strong><br>${ex.caution}</div>` : ''}
    <div style="margin-top:14px; padding:10px; background:var(--bg-secondary); border-radius:8px;">
      <strong>Carga Atual Registrada:</strong> <span style="color:var(--accent-primary); font-weight:800;">${appState.customWeights[ex.id] || ex.defaultWeight}</span>
    </div>
  `;

  modal.classList.add('open');
}

function closeExerciseModal() {
  const modal = document.getElementById('exercise-modal');
  if (modal) modal.classList.remove('open');
}

// 11. DIETA E MACROS (DINÂMICOS CONFORME AS METAS DO USUÁRIO)
function renderNutrition() {
  const container = document.getElementById('nutrition-meals-container');
  if (!container) return;

  const goals = appState.userGoals;

  // Atualiza os valores dos blocos de macros
  const calEl = document.getElementById('macro-calories-val');
  const protEl = document.getElementById('macro-protein-val');
  const carbEl = document.getElementById('macro-carbs-val');
  const fatEl = document.getElementById('macro-fats-val');

  if (calEl) calEl.innerText = goals.calories.toLocaleString('pt-BR');
  if (protEl) protEl.innerText = `${goals.protein}g`;
  if (carbEl) carbEl.innerText = `${goals.carbs}g`;
  if (fatEl) fatEl.innerText = `${goals.fats}g`;

  const defaultMeals = [
    {
      name: "Café da Manhã Anabólico", time: "07:00 - 08:00", calories: "~580 kcal",
      items: [
        { name: "Ovos inteiros mexidos ou cozidos", portion: "3 unidades" },
        { name: "Pão integral ou tapioca com queijo branco", portion: "2 fatias (50g)" },
        { name: "Banana com aveia em flocos", portion: "1 banana + 2 colheres sopa (30g) aveia" },
        { name: "Café preto ou chá", portion: "1 xícara" }
      ],
      tip: "Proteínas de alto valor biológico e carboidratos de absorção gradual."
    },
    {
      name: "Almoço dos Campeões (Construção Muscular)", time: "12:00 - 13:00", calories: "~720 kcal",
      items: [
        { name: "Peito de frango grelhado ou patinho moído", portion: "150g a 160g" },
        { name: "Arroz branco ou integral", portion: "5 a 6 colheres de sopa cheias (180g)" },
        { name: "Feijão carioca ou preto", portion: "1 concha média (100g)" },
        { name: "Azeite de oliva extra virgem", portion: "1 colher de sobremesa" },
        { name: "Salada colorida à vontade", portion: "Prato cheio com fibras" }
      ],
      tip: "Combinação clássica que garante todos os aminoácidos essenciais."
    },
    {
      name: "Lanche da Tarde / Pré-Treino de Força", time: "16:00 - 16:30", calories: "~460 kcal",
      items: [
        { name: "Iogurte natural ou desnatado", portion: "1 pote (170g)" },
        { name: "Aveia em flocos ou granola sem açúcar", portion: "3 colheres de sopa (40g)" },
        { name: "Fruta (maçã ou banana)", portion: "1 unidade média" },
        { name: "Pasta de amendoim integral", portion: "1 colher de sopa (15g)" }
      ],
      tip: "Energia sustentada cerca de 1h30 a 2h antes de treinar pesado."
    },
    {
      name: "Jantar / Pós-Treino Recuperador", time: "19:30 - 20:30", calories: "~650 kcal",
      items: [
        { name: "Filé de frango, peixe ou carne magra", portion: "150g" },
        { name: "Batata inglesa, doce ou macarrão", portion: "200g cozido" },
        { name: "Legumes cozidos no vapor", portion: "1 prato de sobremesa" },
        { name: "Fio de azeite extra virgem", portion: "1 colher de chá" }
      ],
      tip: "Músculos absorvem nutrientes para recuperar e crescer durante a noite."
    },
    {
      name: "Ceia Noturna Leve", time: "22:00 - 22:30", calories: "~240 kcal",
      items: [
        { name: "Leite desnatado morno ou iogurte", portion: "200ml" },
        { name: "Aveia em flocos ou semente de chia", portion: "1 colher de sopa" },
        { name: "Castanhas do Pará ou nozes", portion: "2 unidades (gorduras para síntese hormonal)" }
      ],
      tip: "Evita o catabolismo muscular durante o sono profundo."
    }
  ];

  let html = '';
  defaultMeals.forEach(meal => {
    html += `
      <div class="meal-card">
        <div class="meal-header">
          <div class="meal-title"><span>🍽️ ${meal.name}</span></div>
          <span class="meal-time">🕒 ${meal.time}</span>
        </div>
        <div class="meal-body">
          <div style="margin-bottom: 8px; font-size: 0.78rem; color: var(--accent-yellow); font-weight:700;">
            Calorias Estimadas: ${meal.calories}
          </div>
          ${meal.items.map(item => `
            <div class="food-item">
              <span class="food-name">✓ ${item.name}</span>
              <span class="food-portion">${item.portion}</span>
            </div>
          `).join('')}
          <div class="meal-tip">💡 <em>${meal.tip}</em></div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateWaterDisplay();
}

function addWater(amount) {
  appState.waterIntake = Math.min(6000, appState.waterIntake + amount);
  saveToStorage('gym_water', appState.waterIntake);
  updateWaterDisplay();
  if (navigator.vibrate) navigator.vibrate(40);
}

function resetWater() {
  appState.waterIntake = 0;
  saveToStorage('gym_water', 0);
  updateWaterDisplay();
}

function updateWaterDisplay() {
  const waterCount = document.getElementById('water-count');
  if (waterCount) {
    const goal = appState.userGoals.waterGoal || 3000;
    waterCount.innerText = `${appState.waterIntake} ml / ${goal.toLocaleString('pt-BR')} ml`;
  }
}

// 12. EVOLUÇÃO E METAS DE PESO CORPORAL
function renderWeightProgress() {
  const current = appState.weightHistory[appState.weightHistory.length - 1]?.weight || appState.userGoals.startWeight;
  const target = appState.userGoals.targetWeight;
  const start = appState.userGoals.startWeight;

  const totalDiff = target - start;
  const currentDiff = current - start;
  let progressPercent = 5;
  if (totalDiff > 0) {
    progressPercent = Math.min(100, Math.max(5, (currentDiff / totalDiff) * 100));
  }

  const currentEl = document.getElementById('current-weight-val');
  const targetEl = document.getElementById('target-weight-val');
  const startEl = document.getElementById('start-weight-val');
  const progressFill = document.getElementById('weight-progress-fill');
  const percentText = document.getElementById('weight-percent-text');

  if (startEl) startEl.innerText = `${start.toFixed(1)} kg`;
  if (currentEl) currentEl.innerText = `${current.toFixed(1)} kg`;
  if (targetEl) targetEl.innerText = `${target.toFixed(1)} kg`;
  if (progressFill) progressFill.style.width = `${progressPercent}%`;

  const remaining = (target - current).toFixed(1);
  if (percentText) {
    if (remaining > 0) {
      percentText.innerText = `${progressPercent.toFixed(0)}% concluído (Faltam ${remaining} kg para a meta de ${target} kg)`;
    } else {
      percentText.innerText = `🎉 Meta de ${target} kg alcançada! Parabéns!`;
    }
  }

  const listEl = document.getElementById('weight-history-list');
  if (listEl) {
    listEl.innerHTML = appState.weightHistory.slice().reverse().map((item, idx) => `
      <div class="weight-history-item">
        <span style="color:var(--text-secondary);">${item.date}</span>
        <span style="font-weight:800; color:var(--accent-primary);">${item.weight.toFixed(1)} kg</span>
      </div>
    `).join('');
  }
}

function addNewWeight() {
  const input = document.getElementById('new-weight-input');
  if (!input || !input.value) return;

  const val = parseFloat(input.value.replace(',', '.'));
  if (isNaN(val) || val < 30 || val > 200) {
    alert("Por favor, digite um peso válido (ex: 69.8)");
    return;
  }

  const today = new Date().toLocaleDateString('pt-BR');
  appState.weightHistory.push({ date: today, weight: val });
  saveToStorage('gym_weight_history', appState.weightHistory);
  input.value = '';
  renderWeightProgress();
  alert(`Peso de ${val.toFixed(1)} kg registrado com sucesso!`);
}

// 13. CRONÔMETRO DE DESCANSO
let timerInterval = null;
let timerSecondsRemaining = 60;
let timerIsRunning = false;

function setTimerPreset(seconds) {
  stopTimer();
  timerSecondsRemaining = seconds;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const display = document.getElementById('timer-display-val');
  if (!display) return;
  const mins = Math.floor(timerSecondsRemaining / 60);
  const secs = timerSecondsRemaining % 60;
  display.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function toggleTimer() {
  if (timerIsRunning) stopTimer();
  else startTimer();
}

function startTimer() {
  if (timerSecondsRemaining <= 0) timerSecondsRemaining = 60;
  timerIsRunning = true;
  const btn = document.getElementById('timer-toggle-btn');
  if (btn) btn.innerText = "Pausar";

  timerInterval = setInterval(() => {
    timerSecondsRemaining--;
    updateTimerDisplay();

    if (timerSecondsRemaining === 3 || timerSecondsRemaining === 2 || timerSecondsRemaining === 1) {
      playBeep(440, 0.1);
    }

    if (timerSecondsRemaining <= 0) {
      stopTimer();
      playBeep(880, 0.4);
      if (navigator.vibrate) navigator.vibrate([200, 100, 200, 100, 300]);
      alert("⏱️ Fim do descanso! Hora da próxima série com tudo!");
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
  timerIsRunning = false;
  const btn = document.getElementById('timer-toggle-btn');
  if (btn) btn.innerText = "Iniciar";
}

function playBeep(freq, duration) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
    osc.start();
    osc.stop(audioCtx.currentTime + duration);
  } catch(e) {}
}

// 14. NAVEGAÇÃO ENTRE ABAS
function navigateToTab(tabId) {
  appState.currentTab = tabId;

  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.add('active');

  if (tabId === 'workouts') renderExerciseList();
  else if (tabId === 'nutrition') renderNutrition();
  else if (tabId === 'progress') renderWeightProgress();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetWorkoutCheckmarks() {
  if (confirm("Deseja desmarcar todos os exercícios para iniciar um novo treino?")) {
    appState.completedSets = {};
    saveToStorage('gym_completed_sets', {});
    renderExerciseList();
  }
}

function resetToDefault5DayPlan() {
  if (confirm("Deseja carregar a divisão completa de 5 Dias (ABCDE)?\n\nIsso reorganizará todos os 31 exercícios ilustrados nas categorias A (Peito/Tríceps), B (Costas/Puxadas), C (Pernas Adaptadas), D (Ombros 3D) e E (Braços Completos). Suas cargas personalizadas serão mantidas!")) {
    appState.exercises = JSON.parse(JSON.stringify(DEFAULT_EXERCISES));
    saveToStorage('gym_exercises', appState.exercises);
    renderExerciseList();
    alert("Rotina de 5 Dias (ABCDE) atualizada com sucesso!");
  }
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  renderExerciseList();
  renderNutrition();
  renderWeightProgress();
  updateTimerDisplay();

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').then((reg) => {
      reg.update();
    }).catch(() => {});
  }
});
