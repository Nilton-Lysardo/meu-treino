// ========================================================
// SISTEMA DE TREINO & DIETA - HIPERTROFIA ADAPTADA
// Objetivo: 69kg -> 75kg (Massa Muscular & Definição)
// Cuidados Especiais: Adaptação segura para membros inferiores
// ========================================================

// 1. GERADOR DE ILUSTRAÇÕES SVG PARA CADA EXERCÍCIO
const SVG_ICONS = {
  // Supino
  bench_press: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Banco -->
      <rect x="40" y="115" width="120" height="12" rx="4" fill="#334155"/>
      <rect x="55" y="127" width="10" height="22" fill="#1E293B"/>
      <rect x="135" y="127" width="10" height="22" fill="#1E293B"/>
      <!-- Suporte do Supino -->
      <rect x="145" y="65" width="8" height="50" fill="#475569"/>
      <!-- Corpo Deitado -->
      <ellipse cx="65" cy="110" rx="9" ry="8" fill="#F8FAFC"/>
      <rect x="75" y="105" width="55" height="12" rx="5" fill="#64748B"/>
      <!-- Músculo Alvo: Peitoral destacado em Laranja -->
      <path d="M 85 104 Q 95 98 105 104" stroke="#FF6B00" stroke-width="6" stroke-linecap="round" fill="none"/>
      <!-- Braços segurando a barra -->
      <path d="M 90 106 L 100 80 L 110 80" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Barra e Anilhas -->
      <line x1="70" y1="78" x2="150" y2="78" stroke="#E2E8F0" stroke-width="4"/>
      <rect x="72" y="68" width="6" height="20" rx="2" fill="#FF6B00"/>
      <rect x="142" y="68" width="6" height="20" rx="2" fill="#FF6B00"/>
      <!-- Texto explicativo -->
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">SUPINO RETO</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Peitoral Maior + Tríceps</text>
    </svg>`,

  // Voador / Peck Deck
  peck_deck: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Máquina Estrutura -->
      <rect x="85" y="30" width="30" height="110" rx="6" fill="#1E293B" stroke="#334155" stroke-width="2"/>
      <rect x="75" y="95" width="50" height="10" rx="3" fill="#475569"/>
      <!-- Braços Articulados do Voador -->
      <path d="M 45 60 Q 55 90 85 85" stroke="#64748B" stroke-width="5" fill="none"/>
      <path d="M 155 60 Q 145 90 115 85" stroke="#64748B" stroke-width="5" fill="none"/>
      <!-- Almofadas / Pegadores -->
      <rect x="40" y="55" width="10" height="35" rx="4" fill="#FF6B00"/>
      <rect x="150" y="55" width="10" height="35" rx="4" fill="#FF6B00"/>
      <!-- Setas de contração peitoral -->
      <path d="M 58 72 L 78 72" stroke="#00D2FF" stroke-width="2.5" marker-end="url(#arrow)" stroke-dasharray="3,2"/>
      <path d="M 142 72 L 122 72" stroke="#00D2FF" stroke-width="2.5" stroke-dasharray="3,2"/>
      <!-- Praticante sentado -->
      <circle cx="100" cy="65" r="9" fill="#F8FAFC"/>
      <rect x="92" y="75" width="16" height="24" rx="4" fill="#FF6B00"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">VOADOR (PECK DECK)</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Isolamento de Peitoral</text>
    </svg>`,

  // Chest Press Máquina
  chest_press: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Máquina sentada -->
      <rect x="130" y="40" width="16" height="100" rx="4" fill="#1E293B"/>
      <!-- Assento e Encosto com ângulo -->
      <rect x="110" y="60" width="12" height="45" rx="3" fill="#334155" transform="rotate(-10 110 60)"/>
      <rect x="85" y="105" width="40" height="10" rx="3" fill="#334155"/>
      <!-- Boneco sentado empurrando para frente -->
      <circle cx="108" cy="56" r="8" fill="#F8FAFC"/>
      <rect x="100" y="65" width="14" height="36" rx="4" fill="#FF6B00"/>
      <!-- Braço estendendo alavanca -->
      <path d="M 103 72 L 75 75 L 50 73" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Alavanca do Chest Press -->
      <line x1="50" y1="45" x2="50" y2="105" stroke="#64748B" stroke-width="6" stroke-linecap="round"/>
      <circle cx="50" cy="73" r="6" fill="#FF6B00"/>
      <!-- Seta de empurrar -->
      <path d="M 68 62 L 40 62" stroke="#00D2FF" stroke-width="2" stroke-linecap="round"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">CHEST PRESS MÁQUINA</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Empurrar Guiado Seguro</text>
    </svg>`,

  // Pulley Tríceps / Tríceps Corda
  triceps_pulley: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Coluna da Polia -->
      <rect x="40" y="25" width="14" height="120" rx="3" fill="#1E293B"/>
      <!-- Roldana no topo -->
      <circle cx="65" cy="35" r="9" fill="#475569" stroke="#64748B" stroke-width="2"/>
      <!-- Cabo descendo -->
      <path d="M 47 40 L 65 35 L 85 70" stroke="#94A3B8" stroke-width="2" fill="none"/>
      <!-- Barra/Corda no cabo -->
      <rect x="80" y="70" width="16" height="5" rx="2" fill="#FF6B00"/>
      <!-- Praticante em pé -->
      <circle cx="115" cy="50" r="8" fill="#F8FAFC"/>
      <rect x="108" y="60" width="14" height="38" rx="4" fill="#475569"/>
      <!-- Braço: Cotovelo colado no tronco, antebraço descendo -->
      <!-- Destaque do Tríceps em Laranja -->
      <path d="M 112 65 L 105 78" stroke="#FF6B00" stroke-width="6" stroke-linecap="round"/>
      <path d="M 105 78 L 88 72" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <!-- Seta indicando extensão para baixo -->
      <path d="M 88 82 L 88 102" stroke="#00D2FF" stroke-width="2.5" stroke-linecap="round"/>
      <text x="100" y="20" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">TRÍCEPS PULLEY / CORDA</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Braços Firmes + Cotovelo Fixo</text>
    </svg>`,

  // Tríceps Máquina
  triceps_machine: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="140" y="35" width="20" height="105" rx="4" fill="#1E293B"/>
      <!-- Banco da Máquina -->
      <rect x="80" y="90" width="45" height="10" rx="3" fill="#334155"/>
      <rect x="115" y="55" width="10" height="40" rx="3" fill="#334155"/>
      <!-- Alavancas laterais de empurrar para baixo (estilo mergulho) -->
      <path d="M 70 85 L 70 115" stroke="#64748B" stroke-width="6" stroke-linecap="round"/>
      <circle cx="70" cy="85" r="5" fill="#FF6B00"/>
      <!-- Boneco sentado empurrando -->
      <circle cx="105" cy="52" r="8" fill="#F8FAFC"/>
      <rect x="98" y="62" width="14" height="34" rx="4" fill="#475569"/>
      <path d="M 104 65 L 94 75" stroke="#FF6B00" stroke-width="6" stroke-linecap="round"/>
      <path d="M 94 75 L 72 85" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">TRÍCEPS MÁQUINA (DIP)</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Mergulho Guiado Estável</text>
    </svg>`,

  // Lat Pulldown / Puxada Alta
  lat_pulldown: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Torre da Máquina -->
      <rect x="30" y="20" width="15" height="125" rx="3" fill="#1E293B"/>
      <!-- Haste superior -->
      <path d="M 37 30 L 105 30" stroke="#334155" stroke-width="6"/>
      <circle cx="105" cy="30" r="7" fill="#475569"/>
      <!-- Barra longa curvada -->
      <path d="M 75 55 Q 105 50 135 55" stroke="#FF6B00" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Cabo conectando a barra -->
      <line x1="105" y1="30" x2="105" y2="52" stroke="#CBD5E1" stroke-width="2"/>
      <!-- Praticante sentado puxando para o peito -->
      <rect x="90" y="105" width="30" height="10" rx="3" fill="#334155"/>
      <circle cx="105" cy="72" r="8" fill="#F8FAFC"/>
      <!-- Dorsais destacados em Laranja/Ciano -->
      <path d="M 98 82 Q 105 84 112 82 L 110 105 L 100 105 Z" fill="#00D2FF"/>
      <!-- Braços em V segurando a barra -->
      <path d="M 105 80 L 85 57" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M 105 80 L 125 57" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round"/>
      <text x="100" y="18" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">LAT PULLDOWN (PUXADA)</text>
      <text x="100" y="150" fill="#00D2FF" font-size="9" font-weight="bold" text-anchor="middle">Grande Dorsal (Costas Largas)</text>
    </svg>`,

  // Remada Sentada / Seated Row
  seated_row: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Base e Apoio dos pés -->
      <rect x="40" y="125" width="120" height="10" rx="3" fill="#1E293B"/>
      <rect x="48" y="100" width="8" height="25" rx="2" fill="#475569"/>
      <!-- Polia baixa -->
      <circle cx="50" cy="95" r="7" fill="#64748B"/>
      <!-- Assento -->
      <rect x="110" y="115" width="35" height="10" rx="3" fill="#334155"/>
      <!-- Praticante sentado ereto -->
      <circle cx="125" cy="75" r="8" fill="#F8FAFC"/>
      <!-- Tronco e Costas destacadas -->
      <rect x="120" y="84" width="12" height="32" rx="3" fill="#00D2FF"/>
      <!-- Braço puxando o triângulo/cabo para o abdômen -->
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
      <!-- Praticante em pé -->
      <circle cx="100" cy="40" r="9" fill="#F8FAFC"/>
      <rect x="92" y="51" width="16" height="45" rx="4" fill="#334155"/>
      <!-- Braço com flexão de cotovelo -->
      <path d="M 98 55 L 94 80" stroke="#475569" stroke-width="4" stroke-linecap="round"/>
      <!-- Destaque do Bíceps -->
      <ellipse cx="94" cy="74" rx="6" ry="8" fill="#FF6B00"/>
      <!-- Antebraço subindo -->
      <path d="M 94 80 L 115 65" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <!-- Barra W e anilhas nas mãos -->
      <circle cx="115" cy="65" r="4" fill="#CBD5E1"/>
      <line x1="95" y1="65" x2="135" y2="65" stroke="#E2E8F0" stroke-width="4"/>
      <rect x="92" y="58" width="5" height="14" rx="2" fill="#FF6B00"/>
      <rect x="133" y="58" width="5" height="14" rx="2" fill="#FF6B00"/>
      <!-- Seta indicando movimento para cima -->
      <path d="M 125 82 Q 130 73 125 68" stroke="#00D2FF" stroke-width="2" fill="none" stroke-dasharray="2,2"/>
      <text x="100" y="20" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">ROSCA BÍCEPS BARRA</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Hipertrofia de Bíceps Braquial</text>
    </svg>`,

  // Elevação Ombro Máquina / Shoulder Press
  shoulder_press: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Banco Vertical -->
      <rect x="95" y="50" width="10" height="60" rx="2" fill="#334155"/>
      <rect x="80" y="105" width="40" height="10" rx="2" fill="#334155"/>
      <!-- Praticante sentado -->
      <circle cx="100" cy="46" r="8" fill="#F8FAFC"/>
      <rect x="94" y="55" width="12" height="35" rx="3" fill="#475569"/>
      <!-- Ombros destacados em Laranja -->
      <circle cx="88" cy="58" r="5" fill="#FF6B00"/>
      <circle cx="112" cy="58" r="5" fill="#FF6B00"/>
      <!-- Braços empurrando para cima -->
      <path d="M 88 58 L 74 46 L 75 32" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <path d="M 112 58 L 126 46 L 125 32" stroke="#CBD5E1" stroke-width="3.5" stroke-linecap="round" fill="none"/>
      <!-- Pegadas da máquina no alto -->
      <rect x="68" y="28" width="14" height="6" rx="2" fill="#FF6B00"/>
      <rect x="118" y="28" width="14" height="6" rx="2" fill="#FF6B00"/>
      <!-- Setas para cima -->
      <path d="M 75 42 L 75 30" stroke="#00D2FF" stroke-width="2"/>
      <path d="M 125 42 L 125 30" stroke="#00D2FF" stroke-width="2"/>
      <text x="100" y="18" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">SHOULDER PRESS (DESENVOLVIMENTO)</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Ombros Largos e Fortes</text>
    </svg>`,

  // Elevação Lateral (Novo)
  lateral_raise: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Praticante em pé -->
      <circle cx="100" cy="38" r="8" fill="#F8FAFC"/>
      <rect x="92" y="48" width="16" height="50" rx="4" fill="#334155"/>
      <!-- Ombros laterais em destaque -->
      <circle cx="88" cy="50" r="5" fill="#FF6B00"/>
      <circle cx="112" cy="50" r="5" fill="#FF6B00"/>
      <!-- Braços abrindo lateralmente até a altura dos ombros -->
      <path d="M 88 51 Q 65 52 48 55" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" fill="none"/>
      <path d="M 112 51 Q 135 52 152 55" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round" fill="none"/>
      <!-- Halteres nas pontas -->
      <rect x="42" y="47" width="7" height="16" rx="2" fill="#FF6B00"/>
      <rect x="151" y="47" width="7" height="16" rx="2" fill="#FF6B00"/>
      <!-- Arco de movimento -->
      <path d="M 70 80 Q 55 70 52 62" stroke="#00D2FF" stroke-width="2" fill="none" stroke-dasharray="2,2"/>
      <path d="M 130 80 Q 145 70 148 62" stroke="#00D2FF" stroke-width="2" fill="none" stroke-dasharray="2,2"/>
      <text x="100" y="18" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">ELEVAÇÃO LATERAL (HALT/CABO)</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Deltoide Lateral (Ombro em V)</text>
    </svg>`,

  // Costas Voador Invertido / Crucifixo Invertido
  reverse_fly: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Máquina Peck Deck Invertida -->
      <rect x="90" y="40" width="20" height="95" rx="3" fill="#1E293B"/>
      <!-- Praticante sentado de frente para o encosto -->
      <circle cx="100" cy="55" r="8" fill="#F8FAFC"/>
      <rect x="93" y="65" width="14" height="35" rx="3" fill="#334155"/>
      <!-- Deltoide posterior destacado -->
      <ellipse cx="100" cy="70" rx="10" ry="5" fill="#00D2FF"/>
      <!-- Braços abrindo para trás -->
      <path d="M 100 68 L 55 75" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <path d="M 100 68 L 145 75" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <!-- Pegadores -->
      <circle cx="55" cy="75" r="5" fill="#FF6B00"/>
      <circle cx="145" cy="75" r="5" fill="#FF6B00"/>
      <!-- Setas de abertura para trás -->
      <path d="M 75 62 L 58 68" stroke="#00D2FF" stroke-width="2"/>
      <path d="M 125 62 L 142 68" stroke="#00D2FF" stroke-width="2"/>
      <text x="100" y="22" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">VOADOR INVERTIDO (COSTAS)</text>
      <text x="100" y="150" fill="#00D2FF" font-size="9" font-weight="bold" text-anchor="middle">Deltoide Posterior + Postura</text>
    </svg>`,

  // Rosca Martelo (Novo)
  hammer_curl: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <circle cx="100" cy="40" r="9" fill="#F8FAFC"/>
      <rect x="92" y="51" width="16" height="46" rx="4" fill="#334155"/>
      <!-- Braquial / Braquiorradial destacado -->
      <path d="M 98 56 L 94 78" stroke="#475569" stroke-width="4"/>
      <rect x="90" y="70" width="8" height="14" rx="3" fill="#FF6B00"/>
      <!-- Antebraço e Halter na pegada neutra (em pé) -->
      <path d="M 94 78 L 112 66" stroke="#CBD5E1" stroke-width="4" stroke-linecap="round"/>
      <rect x="110" y="55" width="8" height="24" rx="3" fill="#FF6B00"/>
      <line x1="106" y1="67" x2="122" y2="67" stroke="#CBD5E1" stroke-width="4"/>
      <text x="100" y="20" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">ROSCA MARTELO (HALT)</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Braquial + Espessura do Braço</text>
    </svg>`,

  // Leg Press (Exercício de perna com adaptação)
  leg_press: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Trilho do Leg Press a 45 graus -->
      <line x1="45" y1="135" x2="155" y2="45" stroke="#334155" stroke-width="6"/>
      <!-- Banco Inclinado com Apoio Lombar Perfeito -->
      <rect x="45" y="90" width="45" height="12" rx="3" fill="#1E293B" transform="rotate(-40 45 90)"/>
      <!-- Praticante Acomodado com apoio total da coluna -->
      <circle cx="58" cy="80" r="8" fill="#F8FAFC"/>
      <rect x="65" y="85" width="28" height="12" rx="4" fill="#334155" transform="rotate(-35 65 85)"/>
      <!-- Pernas empurrando a plataforma -->
      <path d="M 85 105 L 110 85 L 130 65" stroke="#10B981" stroke-width="5" stroke-linecap="round" fill="none"/>
      <!-- Plataforma com Anilhas -->
      <rect x="125" y="45" width="30" height="8" rx="2" fill="#E2E8F0" transform="rotate(45 125 45)"/>
      <circle cx="140" cy="55" r="10" fill="#FF6B00"/>
      <!-- Selo de Cuidado Adaptado -->
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="130" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">LEG PRESS</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Pés Firmes + Amplitude Segura</text>
    </svg>`,

  // Cadeira Extensora (Novo - Foco seguro)
  leg_extension: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Banco com encosto vertical de apoio -->
      <rect x="75" y="55" width="10" height="45" rx="2" fill="#334155"/>
      <rect x="75" y="95" width="38" height="10" rx="2" fill="#334155"/>
      <!-- Praticante sentado -->
      <circle cx="82" cy="50" r="8" fill="#F8FAFC"/>
      <rect x="80" y="60" width="12" height="34" rx="3" fill="#475569"/>
      <!-- Quadríceps Destacado em Verde -->
      <rect x="85" y="92" width="28" height="8" rx="3" fill="#10B981"/>
      <!-- Perna estendendo o rolinho acolchoado -->
      <path d="M 112 96 L 138 96" stroke="#10B981" stroke-width="5" stroke-linecap="round"/>
      <circle cx="135" cy="96" r="6" fill="#FF6B00"/>
      <!-- Movimento guiado -->
      <path d="M 125 120 Q 135 115 137 100" stroke="#00D2FF" stroke-width="2" fill="none" stroke-dasharray="2,2"/>
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="135" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">CADEIRA EXTENSORA</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Quadríceps com Apoio Total</text>
    </svg>`,

  // Cadeira Flexora Sentada (Novo - Posterior com apoio)
  leg_curl: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Máquina com trava de coxas e encosto -->
      <rect x="75" y="55" width="10" height="45" rx="2" fill="#334155"/>
      <rect x="75" y="95" width="38" height="10" rx="2" fill="#334155"/>
      <!-- Trava sobre a coxa -->
      <rect x="90" y="85" width="22" height="6" rx="2" fill="#E2E8F0"/>
      <circle cx="82" cy="50" r="8" fill="#F8FAFC"/>
      <rect x="80" y="60" width="12" height="34" rx="3" fill="#475569"/>
      <!-- Posterior da coxa destacado -->
      <rect x="85" y="97" width="25" height="7" rx="2" fill="#10B981"/>
      <!-- Perna flexionando para baixo -->
      <path d="M 112 98 L 115 125" stroke="#10B981" stroke-width="5" stroke-linecap="round"/>
      <circle cx="115" cy="122" r="6" fill="#FF6B00"/>
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="135" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">CADEIRA FLEXORA</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Isquiotibiais (Posterior de Coxa)</text>
    </svg>`,

  // Cadeira Abdutora (Novo - Estabilidade Pélvica)
  abductor: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <!-- Vista frontal superior do banco -->
      <rect x="85" y="45" width="30" height="40" rx="4" fill="#334155"/>
      <circle cx="100" cy="50" r="9" fill="#F8FAFC"/>
      <!-- Joelhos abrindo contra as almofadas laterais -->
      <ellipse cx="65" cy="85" rx="8" ry="12" fill="#10B981"/>
      <ellipse cx="135" cy="85" rx="8" ry="12" fill="#10B981"/>
      <!-- Almofadas da máquina -->
      <rect x="52" y="75" width="8" height="20" rx="2" fill="#FF6B00"/>
      <rect x="140" y="75" width="8" height="20" rx="2" fill="#FF6B00"/>
      <!-- Setas de abertura lateral -->
      <path d="M 75 85 L 60 85" stroke="#00D2FF" stroke-width="3" stroke-linecap="round"/>
      <path d="M 125 85 L 140 85" stroke="#00D2FF" stroke-width="3" stroke-linecap="round"/>
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="135" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">CADEIRA ABDUTORA</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Estabilidade do Quadril & Marcha</text>
    </svg>`,

  // Panturrilha Sentado
  calf_raise: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="70" y="55" width="10" height="45" rx="2" fill="#334155"/>
      <rect x="70" y="95" width="38" height="10" rx="2" fill="#334155"/>
      <!-- Almofada sobre a coxa/joelho -->
      <rect x="105" y="85" width="20" height="8" rx="2" fill="#E2E8F0"/>
      <circle cx="78" cy="50" r="8" fill="#F8FAFC"/>
      <!-- Panturrilha destacada em Verde -->
      <path d="M 112 95 L 115 125" stroke="#475569" stroke-width="4"/>
      <ellipse cx="118" cy="115" rx="6" ry="10" fill="#10B981"/>
      <!-- Calcanhar elevando na ponta do pé -->
      <circle cx="116" cy="130" r="4" fill="#FF6B00"/>
      <path d="M 128 128 L 128 116" stroke="#00D2FF" stroke-width="2"/>
      <rect x="12" y="12" width="60" height="18" rx="4" fill="#10B981"/>
      <text x="42" y="24" fill="#000" font-size="8" font-weight="900" text-anchor="middle">ADAPTADO</text>
      <text x="135" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">PANTURRILHA SENTADO</text>
      <text x="100" y="150" fill="#10B981" font-size="9" font-weight="bold" text-anchor="middle">Segurança e Apoio nos Pés</text>
    </svg>`,

  // Abdominal Máquina / Core
  abs_machine: `
    <svg viewBox="0 0 200 160" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <rect width="200" height="160" fill="#141820" rx="10"/>
      <rect x="80" y="95" width="40" height="10" rx="2" fill="#334155"/>
      <circle cx="95" cy="55" r="8" fill="#F8FAFC"/>
      <!-- Abdômen contraindo em Laranja -->
      <rect x="90" y="65" width="14" height="28" rx="3" fill="#FF6B00"/>
      <!-- Braços segurando o cabo/suporte superior flexionando o tronco -->
      <path d="M 95 68 Q 110 75 105 92" stroke="#CBD5E1" stroke-width="4" fill="none"/>
      <circle cx="110" cy="72" r="5" fill="#00D2FF"/>
      <text x="100" y="24" fill="#94A3B8" font-size="11" font-weight="bold" text-anchor="middle">ABDOMINAL MÁQUINA / CORE</text>
      <text x="100" y="150" fill="#FF6B00" font-size="9" font-weight="bold" text-anchor="middle">Proteção da Coluna e Definição</text>
    </svg>`
};

// 2. BANCO DE DADOS DOS EXERCÍCIOS (EXISTENTES + SUGESTÕES NOVAS)
const DEFAULT_EXERCISES = [
  // --- TREINO A: PEITO, OMBROS E TRÍCEPS ---
  {
    id: "supino",
    name: "Supino Reto (Barra / Halteres)",
    category: "A",
    group: "Peitoral",
    defaultWeight: "15 kg",
    sets: "3 a 4 séries de 8 a 12 reps",
    iconKey: "bench_press",
    isNew: false,
    tip: "Mantenha as escápulas aduzidas (ombros para trás e para baixo colados no banco). Desça a barra controladamente até o meio do peitoral sem deixar bater no peito.",
    caution: "Não trave os cotovelos bruscamente no topo para proteger a articulação."
  },
  {
    id: "voador",
    name: "Voador (Peck Deck Máquina)",
    category: "A",
    group: "Peitoral",
    defaultWeight: "65 kg",
    sets: "3 a 4 séries de 10 a 12 reps",
    iconKey: "peck_deck",
    isNew: false,
    tip: "Concentre a força no peito, fechando os braços com os cotovelos levemente flexionados. Aperte 1 segundo no pico de contração.",
    caution: "Ajuste a altura do banco para que as mãos fiquem na linha do meio do peito, não na altura do pescoço."
  },
  {
    id: "chest_press",
    name: "Chest Press Máquina",
    category: "A",
    group: "Peitoral",
    defaultWeight: "39 kg",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "chest_press",
    isNew: false,
    tip: "Apoie bem a lombar e a cabeça no encosto. Excelente exercício por ter trajetória guiada e estabilidade perfeita.",
    caution: "Evite empurrar projetando os ombros para a frente no final do movimento."
  },
  {
    id: "shoulder_press",
    name: "Elevação Ombro Máquina (Shoulder Press)",
    category: "A",
    group: "Ombros",
    defaultWeight: "24 kg",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "shoulder_press",
    isNew: false,
    tip: "Empurre para o alto mantendo os cotovelos alinhados ligeiramente à frente do corpo (plano escapular), sem jogar a cabeça para a frente.",
    caution: "Não estenda os cotovelos a ponto de perder a tensão muscular nos ombros."
  },
  {
    id: "lateral_raise",
    name: "Elevação Lateral (Halteres / Polia)",
    category: "A",
    group: "Ombros",
    defaultWeight: "5 a 7 kg",
    sets: "3 a 4 séries de 12 a 15 reps",
    iconKey: "lateral_raise",
    isNew: true,
    tip: "SUGESTÃO NOVA: Essencial para deixar o ombro largo e com aspecto definido ('ombro cebola'). Eleve os braços até a linha dos ombros com o abdômen contraído.",
    caution: "Use carga controlada sem dar tranco com o corpo."
  },
  {
    id: "pulley_triceps",
    name: "Pulley Tríceps (Barra / Cabo)",
    category: "A",
    group: "Tríceps",
    defaultWeight: "45.5 kg",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "triceps_pulley",
    isNew: false,
    tip: "Mantenha os cotovelos 'colados' na lateral do corpo durante todo o movimento. Apenas o antebraço se move.",
    caution: "Não balance o tronco para ajudar a empurrar o peso."
  },
  {
    id: "triceps_corda",
    name: "Tríceps Corda no Pulley",
    category: "A",
    group: "Tríceps",
    defaultWeight: "42 kg",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "triceps_pulley",
    isNew: false,
    tip: "No final da descida, abra as pontas da corda para fora para máxima contração da cabeça lateral do tríceps.",
    caution: "Segure 1 segundo embaixo antes de subir devagar."
  },
  {
    id: "triceps_maquina",
    name: "Tríceps Máquina Sentado (Dip)",
    category: "A",
    group: "Tríceps",
    defaultWeight: "50 kg",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "triceps_machine",
    isNew: false,
    tip: "Ótimo exercício sentado com estabilidade total. Empurre as alavancas para baixo estendendo os braços.",
    caution: "Ajuste o cinto ou o apoio se houver, mantendo a postura reta."
  },

  // --- TREINO B: COSTAS, POSTERIOR DE OMBRO E BÍCEPS ---
  {
    id: "lat_pulldown",
    name: "Lat Pulldown (Puxada Alta Frontal)",
    category: "B",
    group: "Costas",
    defaultWeight: "40 kg",
    sets: "3 a 4 séries de 10 a 12 reps",
    iconKey: "lat_pulldown",
    isNew: false,
    tip: "Puxe a barra em direção à parte superior do peito, estufando o peito e puxando com os cotovelos.",
    caution: "Nunca puxe a barra por trás do pescoço; sempre pela frente para não lesionar o manguito rotador."
  },
  {
    id: "remada_maquina",
    name: "Remada Máquina / Sentado Puxada",
    category: "B",
    group: "Costas",
    defaultWeight: "45.5 kg",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "seated_row",
    isNew: false,
    tip: "Apoie o peito no apoio da máquina (se houver) ou mantenha a coluna reta. Puxe trazendo as escápulas para trás.",
    caution: "Não curve a lombar ao puxar a carga."
  },
  {
    id: "seated_row_barra",
    name: "Seated Row (Costas com Barra / Cabo)",
    category: "B",
    group: "Costas",
    defaultWeight: "45.5 kg",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "seated_row",
    isNew: false,
    tip: "Pés bem firmes no apoio frontal. Puxe a barra em direção ao umbigo mantendo os cotovelos próximos às costelas.",
    caution: "Mantenha os joelhos ligeiramente destravados para estabilidade."
  },
  {
    id: "iso_lateral_pulldown",
    name: "Iso Lateral Cross Lat Pulldown",
    category: "B",
    group: "Costas",
    defaultWeight: "15 kg cada lado anilha",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "lat_pulldown",
    isNew: false,
    tip: "Aparelho articulado independente. Permite trabalhar cada lado das costas com igual intensidade, corrigindo desequilíbrios.",
    caution: "Puxe os dois braços juntos ou alternados com ritmo cadenciado."
  },
  {
    id: "t_bar_row",
    name: "T-Bar Row Unilateral / Remada Cavalinho",
    category: "B",
    group: "Costas",
    defaultWeight: "5 kg cada lado anilha",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "seated_row",
    isNew: false,
    tip: "Puxe concentrando na asa das costas (dorsal). Mantenha o abdômen travado.",
    caution: "Se fizer apoiado no banco com peito encostado, a proteção da coluna é 100% garantida."
  },
  {
    id: "costas_voador",
    name: "Costas Voador (Crucifixo Invertido Máq)",
    category: "B",
    group: "Costas e Ombros",
    defaultWeight: "19.5 kg",
    sets: "3 séries de 12 a 15 reps",
    iconKey: "reverse_fly",
    isNew: false,
    tip: "Sentado de frente para o encosto do voador, abra os braços para trás contraindo a parte de trás dos ombros.",
    caution: "Mantenha os cotovelos na altura dos ombros durante a abertura."
  },
  {
    id: "high_pulley_ombros",
    name: "High Pulley Ombros Máquina",
    category: "B",
    group: "Ombros e Trapézio",
    defaultWeight: "42 kg",
    sets: "3 séries de 12 reps",
    iconKey: "shoulder_press",
    isNew: false,
    tip: "Puxada alta focada na parte superior das costas e trapézio. Ajuda na postura ereta.",
    caution: "Faça sem pressa, sentindo o músculo trabalhar."
  },
  {
    id: "biceps_barra",
    name: "Bíceps Barra (Rosca Direta)",
    category: "B",
    group: "Bíceps",
    defaultWeight: "5 kg cada lado",
    sets: "3 a 4 séries de 10 a 12 reps",
    iconKey: "biceps_curl",
    isNew: false,
    tip: "Mantenha os cotovelos fixos ao lado das costelas. Flexione os antebraços até a altura do peito e desça segurando o peso.",
    caution: "Não balance o quadril ou as costas para erguer a barra."
  },
  {
    id: "hammer_curl",
    name: "Rosca Martelo com Halteres",
    category: "B",
    group: "Bíceps e Antebraço",
    defaultWeight: "6 a 8 kg cada halter",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "hammer_curl",
    isNew: true,
    tip: "SUGESTÃO NOVA: As palmas das mãos ficam viradas uma para a outra (como segurando um martelo). Constrói o músculo braquial, deixando o braço muito mais grosso e denso.",
    caution: "Pode ser feito sentado em banco com encosto para maior estabilidade."
  },

  // --- TREINO C: MEMBROS INFERIORES ADAPTADOS & CORE ---
  {
    id: "leg_press",
    name: "Leg Press 45° ou Horizontal",
    category: "C",
    group: "Pernas (Adaptado)",
    defaultWeight: "26 kg",
    sets: "3 séries de 10 a 12 reps",
    iconKey: "leg_press",
    isNew: false,
    tip: "ADAPTAÇÃO SEGURA: Apoie os dois pés firmes na plataforma na largura dos ombros. Desça até um ângulo confortável de ~90° nos joelhos sem tirar a lombar do encosto.",
    caution: "CUIDADO: Nunca estenda totalmente os joelhos (não dê tranco nas articulações). Deixe os joelhos levemente destravados no final."
  },
  {
    id: "leg_extension",
    name: "Cadeira Extensora (Foco Seguro)",
    category: "C",
    group: "Quadríceps (Adaptado)",
    defaultWeight: "10 a 15 kg (ajustar suave)",
    sets: "3 séries de 12 a 15 reps",
    iconKey: "leg_extension",
    isNew: true,
    tip: "SUGESTÃO NOVA: Máquina com apoio total para as costas. Pode ser feita com as duas pernas juntas ou de forma unilateral bem leve para respeitar a perna com limitação.",
    caution: "Segure nas manoplas laterais do banco para manter a bacia bem firme. Suba controladamente."
  },
  {
    id: "leg_curl",
    name: "Cadeira Flexora Sentada",
    category: "C",
    group: "Posterior de Coxa",
    defaultWeight: "15 a 20 kg",
    sets: "3 séries de 12 reps",
    iconKey: "leg_curl",
    isNew: true,
    tip: "SUGESTÃO NOVA: Trabalha a parte de trás da coxa enquanto você fica sentado confortavelmente com a coxa travada pela almofada. Zero risco de desequilíbrio.",
    caution: "Ajuste o rolinho para ficar logo acima dos calcanhares."
  },
  {
    id: "abductor",
    name: "Cadeira Abdutora (Quadril & Estabilidade)",
    category: "C",
    group: "Glúteos & Estabilidade",
    defaultWeight: "20 a 30 kg",
    sets: "3 séries de 15 reps",
    iconKey: "abductor",
    isNew: true,
    tip: "SUGESTÃO NOVA FUNDAMENTAL: Fortalece o glúteo médio e os músculos laterais do quadril. Isso melhora drasticamente a estabilidade ao andar e a firmeza da bacia.",
    caution: "Abra as pernas devagar, segure 1 segundo no ponto de abertura máxima e retorne controlando."
  },
  {
    id: "calf_raise",
    name: "Panturrilha Sentado (Gêmeos)",
    category: "C",
    group: "Panturrilhas",
    defaultWeight: "15 a 20 kg",
    sets: "3 séries de 15 reps",
    iconKey: "calf_raise",
    isNew: true,
    tip: "SUGESTÃO NOVA: Feito totalmente sentado com almofada sobre os joelhos. Eleve os calcanhares na ponta dos pés o máximo que puder e desça alongando.",
    caution: "Movimento cadenciado sem rebote."
  },
  {
    id: "abs_machine",
    name: "Abdominal Máquina ou Crunch Solo",
    category: "C",
    group: "Abdômen & Core",
    defaultWeight: "Peso corporal ou 15kg máq",
    sets: "3 séries de 15 a 20 reps",
    iconKey: "abs_machine",
    isNew: true,
    tip: "SUGESTÃO NOVA: Um abdômen forte é o segredo para manter a coluna protegida, além de trazer a definição estética desejada.",
    caution: "Concentre a força no abdômen, soltando o ar pela boca ao flexionar o tronco."
  }
];

// 3. PLANO ALIMENTAR HIPERTROFIA LIMPA (69kg -> 75kg)
const NUTRITION_PLAN = {
  summary: {
    calories: "2.650 kcal",
    protein: "145 g (~2.1g/kg)",
    carbs: "330 g",
    fats: "65 g",
    waterGoal: "3.000 ml"
  },
  meals: [
    {
      name: "Café da Manhã Anabólico",
      time: "07:00 - 08:00",
      calories: "~580 kcal",
      items: [
        { name: "Ovos inteiros mexidos ou cozidos", portion: "3 unidades" },
        { name: "Pão integral ou tapioca com queijo branco", portion: "2 fatias (50g)" },
        { name: "Banana com aveia em flocos", portion: "1 banana + 2 colheres sopa (30g) aveia" },
        { name: "Café preto ou chá", portion: "1 xícara (sem açúcar ou adoçante suave)" }
      ],
      tip: "Fornece proteínas de alto valor biológico e carboidratos de absorção gradual para começar o dia energizado."
    },
    {
      name: "Almoço dos Campeões (Construção Muscular)",
      time: "12:00 - 13:00",
      calories: "~720 kcal",
      items: [
        { name: "Peito de frango grelhado ou patinho moído", portion: "150g a 160g" },
        { name: "Arroz branco ou integral", portion: "5 a 6 colheres de sopa cheias (180g)" },
        { name: "Feijão carioca ou preto", portion: "1 concha média (100g)" },
        { name: "Azeite de oliva extra virgem", portion: "1 colher de sobremesa (fio generoso)" },
        { name: "Salada colorida à vontade (alface, tomate, cenoura)", portion: "Prato cheio com fibras" }
      ],
      tip: "A combinação clássica de arroz + feijão + frango garante todos os aminoácidos essenciais para a hipertrofia."
    },
    {
      name: "Lanche da Tarde / Pré-Treino de Força",
      time: "16:00 - 16:30",
      calories: "~460 kcal",
      items: [
        { name: "Iogurte natural ou desnatado", portion: "1 pote (170g)" },
        { name: "Aveia em flocos ou granola sem açúcar", portion: "3 colheres de sopa (40g)" },
        { name: "Fruta (maçã, banana ou mamão)", portion: "1 unidade média" },
        { name: "Pasta de amendoim integral", portion: "1 colher de sopa (15g)" }
      ],
      tip: "Refeição perfeita cerca de 1h30 a 2h antes de ir para a academia para garantir muita energia nas cargas."
    },
    {
      name: "Jantar / Pós-Treino Recuperador",
      time: "19:30 - 20:30",
      calories: "~650 kcal",
      items: [
        { name: "Filé de frango, peixe (tilápia) ou carne magra", portion: "150g" },
        { name: "Batata inglesa, batata doce ou macarrão", portion: "200g cozido" },
        { name: "Legumes cozidos no vapor (brócolis, abobrinha)", portion: "1 prato de sobremesa" },
        { name: "Fio de azeite extra virgem", portion: "1 colher de chá" }
      ],
      tip: "Momento chave onde os músculos absorvem os nutrientes como uma esponja para recuperar e crescer durante a noite."
    },
    {
      name: "Ceia Noturna Leve (Síntese Proteica Noturna)",
      time: "22:00 - 22:30",
      calories: "~240 kcal",
      items: [
        { name: "Leite desnatado morno ou iogurte", portion: "200ml" },
        { name: "Canela em pó + 1 colher sopa de aveia ou semente de chia", portion: "15g" },
        { name: "Castanhas do Pará ou nozes", portion: "2 unidades (gordura boa para hormônios)" }
      ],
      tip: "Evita o catabolismo muscular durante o sono profundo e melhora a produção natural de GH e testosterona."
    }
  ]
};

// 4. ESTADO DO APLICATIVO
let appState = {
  currentTab: 'workouts',
  currentWorkoutCategory: 'A',
  exercises: [],
  completedSets: {},
  customWeights: {},
  waterIntake: 0,
  weightHistory: [
    { date: "Hoje (Início)", weight: 69.0 }
  ]
};

// Carregar dados salvos no celular (LocalStorage)
function loadFromStorage() {
  const savedExercises = localStorage.getItem('gym_exercises');
  if (savedExercises) {
    appState.exercises = JSON.parse(savedExercises);
  } else {
    appState.exercises = DEFAULT_EXERCISES;
    saveToStorage('gym_exercises', appState.exercises);
  }

  const savedWeights = localStorage.getItem('gym_weights');
  if (savedWeights) appState.customWeights = JSON.parse(savedWeights);

  const savedCompleted = localStorage.getItem('gym_completed_sets');
  if (savedCompleted) appState.completedSets = JSON.parse(savedCompleted);

  const savedWater = localStorage.getItem('gym_water');
  if (savedWater) appState.waterIntake = parseInt(savedWater, 10);

  const savedWeightHistory = localStorage.getItem('gym_weight_history');
  if (savedWeightHistory) appState.weightHistory = JSON.parse(savedWeightHistory);
}

function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

// 5. RENDERIZAÇÃO DA INTERFACE

// Renderiza a lista de exercícios da categoria ativa
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
      <div style="text-align:center; padding: 40px 20px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; font-weight:700;">Nenhum exercício encontrado</p>
        <p style="font-size: 0.85rem; margin-top: 6px;">Tente buscar por outro termo.</p>
      </div>`;
    return;
  }

  let html = '';
  filtered.forEach(ex => {
    const isCompleted = !!appState.completedSets[ex.id];
    const currentWeight = appState.customWeights[ex.id] || ex.defaultWeight;
    const svgIcon = SVG_ICONS[ex.iconKey] || SVG_ICONS['bench_press'];

    html += `
      <div class="exercise-card ${isCompleted ? 'completed' : ''}" id="card-${ex.id}">
        <div class="exercise-header">
          <div class="exercise-thumb" onclick="openExerciseModal('${ex.id}')" title="Toque para ampliar e ver a técnica">
            ${svgIcon}
            <span class="exercise-thumb-zoom">🔍 Zoom</span>
          </div>
          <div class="exercise-info">
            <div class="exercise-title-row">
              <h3 class="exercise-title">${ex.name}</h3>
            </div>
            <div class="exercise-target">🎯 ${ex.group}</div>
            <div class="exercise-tags">
              <span class="badge ${ex.category === 'C' ? 'badge-green' : 'badge-orange'}">Treino ${ex.category}</span>
              ${ex.isNew ? '<span class="badge badge-new">★ Sugestão Nova</span>' : ''}
              ${ex.category === 'C' ? '<span class="badge badge-cyan">Seguro / Adaptado</span>' : ''}
            </div>
          </div>
        </div>

        <!-- Carga e Séries Interativas -->
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

        <!-- Botão para ver instruções -->
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

// Atualiza o resumo no topo da tela de treinos
function updateWorkoutSummary() {
  const summaryEl = document.getElementById('workout-summary-content');
  if (!summaryEl) return;

  const cat = appState.currentWorkoutCategory;
  let title = "Treino A: Peito, Ombros e Tríceps";
  let desc = "Foco em força de empurrar e definição de braços e peitoral.";

  if (cat === 'B') {
    title = "Treino B: Costas, Ombros Posterior e Bíceps";
    desc = "Foco em puxadas, espessura de costas e expansão de bíceps.";
  } else if (cat === 'C') {
    title = "Treino C: Pernas Seguras & Abdômen (Core)";
    desc = "Exercícios adaptados 100% em máquinas seguras com apoio lombar total.";
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

// Alterna os detalhes expansíveis de cada exercício
function toggleDetails(id) {
  const el = document.getElementById(`details-${id}`);
  if (el) {
    el.classList.toggle('open');
  }
}

// Marca como concluído
function toggleSetCompleted(id) {
  appState.completedSets[id] = !appState.completedSets[id];
  saveToStorage('gym_completed_sets', appState.completedSets);
  renderExerciseList();
  
  // Feedback tátil no celular se suportado
  if (navigator.vibrate) {
    navigator.vibrate(60);
  }
}

// Salva carga personalizada
function updateExerciseWeight(id, newWeight) {
  appState.customWeights[id] = newWeight;
  saveToStorage('gym_weights', appState.customWeights);
}

// Troca de categoria de treino (A, B, C, ALL)
function switchWorkoutTab(category) {
  appState.currentWorkoutCategory = category;
  document.querySelectorAll('.workout-tab-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });
  
  // Mostrar ou esconder o banner especial da pólio se for treino C
  const polioAlert = document.getElementById('polio-safe-alert');
  if (polioAlert) {
    polioAlert.style.display = (category === 'C' || category === 'ALL') ? 'flex' : 'none';
  }

  renderExerciseList();
}

// Modal com imagem grande e técnica detalhada
function openExerciseModal(id) {
  const ex = appState.exercises.find(e => e.id === id);
  if (!ex) return;

  const modal = document.getElementById('exercise-modal');
  const modalImg = document.getElementById('modal-img');
  const modalTitle = document.getElementById('modal-title');
  const modalDesc = document.getElementById('modal-desc');

  modalTitle.innerText = ex.name;
  modalImg.innerHTML = SVG_ICONS[ex.iconKey] || '';
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

// 6. RENDERIZAÇÃO DA DIETA
function renderNutrition() {
  const container = document.getElementById('nutrition-meals-container');
  if (!container) return;

  let html = '';
  NUTRITION_PLAN.meals.forEach((meal, idx) => {
    html += `
      <div class="meal-card">
        <div class="meal-header">
          <div class="meal-title">
            <span>🍽️ ${meal.name}</span>
          </div>
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
          <div class="meal-tip">
            💡 <em>${meal.tip}</em>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateWaterDisplay();
}

// Controle de Água
function addWater(amount) {
  appState.waterIntake = Math.min(5000, appState.waterIntake + amount);
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
    waterCount.innerText = `${appState.waterIntake} ml / 3.000 ml`;
  }
}

// 7. EVOLUÇÃO E PESO CORPORAL (69kg -> 75kg)
function renderWeightProgress() {
  const current = appState.weightHistory[appState.weightHistory.length - 1]?.weight || 69.0;
  const target = 75.0;
  const start = 69.0;

  // Cálculo da porcentagem de progresso de 69 até 75
  const progressPercent = Math.min(100, Math.max(5, ((current - start) / (target - start)) * 100));

  const currentEl = document.getElementById('current-weight-val');
  const targetEl = document.getElementById('target-weight-val');
  const progressFill = document.getElementById('weight-progress-fill');
  const percentText = document.getElementById('weight-percent-text');

  if (currentEl) currentEl.innerText = `${current.toFixed(1)} kg`;
  if (targetEl) targetEl.innerText = `${target.toFixed(1)} kg`;
  if (progressFill) progressFill.style.width = `${progressPercent}%`;
  if (percentText) percentText.innerText = `${progressPercent.toFixed(0)}% concluído (Faltam ${(target - current).toFixed(1)} kg)`;

  // Lista do histórico
  const listEl = document.getElementById('weight-history-list');
  if (listEl) {
    listEl.innerHTML = appState.weightHistory.slice().reverse().map(item => `
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
  if (isNaN(val) || val < 40 || val > 150) {
    alert("Por favor, digite um peso válido (ex: 69.5)");
    return;
  }

  const today = new Date().toLocaleDateString('pt-BR');
  appState.weightHistory.push({
    date: today,
    weight: val
  });

  saveToStorage('gym_weight_history', appState.weightHistory);
  input.value = '';
  renderWeightProgress();
  alert(`Peso de ${val.toFixed(1)} kg registrado com sucesso!`);
}

// 8. CRONÔMETRO DE DESCANSO ENTRE SÉRIES (COM ÁUDIO & VIBRAÇÃO)
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
  if (timerIsRunning) {
    stopTimer();
  } else {
    startTimer();
  }
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
      playBeep(440, 0.1); // Beep de aviso
    }

    if (timerSecondsRemaining <= 0) {
      stopTimer();
      playBeep(880, 0.4); // Beep final agudo
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

// Som via Web Audio API (funciona sem arquivos de áudio externos)
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
  } catch(e) {
    console.log("Audio not supported or blocked");
  }
}

// 9. NAVEGAÇÃO ENTRE ABAS PRINCIPAIS (TREINOS, DIETA, PESO, AJUDA)
function navigateToTab(tabId) {
  appState.currentTab = tabId;

  // Atualizar botões do rodapé
  document.querySelectorAll('.nav-item').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tabId);
  });

  // Atualizar views
  document.querySelectorAll('.view-section').forEach(sec => {
    sec.classList.remove('active');
  });

  const targetView = document.getElementById(`view-${tabId}`);
  if (targetView) targetView.classList.add('active');

  // Renderizar o conteúdo correspondente
  if (tabId === 'workouts') {
    renderExerciseList();
  } else if (tabId === 'nutrition') {
    renderNutrition();
  } else if (tabId === 'progress') {
    renderWeightProgress();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Reset diário das séries concluídas (para um novo treino)
function resetWorkoutCheckmarks() {
  if (confirm("Deseja desmarcar todos os exercícios para iniciar um novo treino?")) {
    appState.completedSets = {};
    saveToStorage('gym_completed_sets', {});
    renderExerciseList();
  }
}

// INICIALIZAÇÃO
document.addEventListener('DOMContentLoaded', () => {
  loadFromStorage();
  renderExerciseList();
  renderNutrition();
  renderWeightProgress();
  updateTimerDisplay();

  // Registrar Service Worker para PWA
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.log('SW registration error:', err);
    });
  }
});
