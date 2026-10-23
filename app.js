let currentLang = localStorage.getItem('mk_guide_lang') || 'es';
let activeRoutineTab = 'feeding';
let activeHazardCategory = 'all';
let esaExpandOpen = false;
let currentActiveSection = '#top';

const photoMode = {
  hero: 'anime',
  mikorin: 'anime',
  killua: 'anime'
};

const checklistState = JSON.parse(localStorage.getItem('mk_checklist_state') || '{}');
const pledgeState = JSON.parse(
  localStorage.getItem('mk_pledge_state') ||
    '{"p1":false,"p2":false,"p3":false,"p4":false,"guestName":""}'
);

/* 8 Whimsical Frieren-Style Chibi Cat Face, Expression & Botanical SVG Stickers */
function getCatStickerSVG(type, size = 44) {
  if (type === 'mikorin') {
    return `
      <span class="cat-sticker" style="width:${size}px;height:${size}px;transform:rotate(-4deg);" title="Mikorin (=ω=)">
        <svg viewBox="0 0 64 64" width="${size - 6}" height="${size - 6}">
          <circle cx="32" cy="32" r="29" fill="#FAF2E1"/>
          <path d="M8 36 Q4 32 9 28 Q5 24 12 23 L14 10 L25 18 Q32 16 39 18 L50 10 L52 23 Q59 24 55 28 Q60 32 56 36 Q52 50 32 52 Q12 50 8 36 Z" fill="#E8C382" stroke="#6E5239" stroke-width="2" stroke-linejoin="round"/>
          <polygon points="16,14 22,19 16,22" fill="#F2B6B6"/>
          <polygon points="48,14 42,19 48,22" fill="#F2B6B6"/>
          <path d="M25 22 L28 26 L32 23 L36 26 L39 22" fill="none" stroke="#8C6239" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <ellipse cx="32" cy="42" rx="13" ry="8" fill="#FFFDF9"/>
          <ellipse cx="22" cy="33" rx="4.6" ry="5" fill="#3D9E8C" stroke="#4A3831" stroke-width="1.8"/>
          <ellipse cx="42" cy="33" rx="4.6" ry="5" fill="#3D9E8C" stroke="#4A3831" stroke-width="1.8"/>
          <circle cx="20.5" cy="31.5" r="1.6" fill="#FFFFFF"/>
          <circle cx="40.5" cy="31.5" r="1.6" fill="#FFFFFF"/>
          <ellipse cx="15" cy="38" rx="3.5" ry="2" fill="#F4A2B0" opacity="0.7"/>
          <ellipse cx="49" cy="38" rx="3.5" ry="2" fill="#F4A2B0" opacity="0.7"/>
          <polygon points="30,37 34,37 32,39.5" fill="#E88B9C"/>
          <path d="M27 41.5 Q29.5 44 32 41 Q34.5 44 37 41.5" fill="none" stroke="#5C4338" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </span>
    `;
  }
  if (type === 'mikorin_wink') {
    return `
      <span class="cat-sticker" style="width:${size}px;height:${size}px;transform:rotate(4deg);" title="Mikorin Wink (^ω<)">
        <svg viewBox="0 0 64 64" width="${size - 6}" height="${size - 6}">
          <circle cx="32" cy="32" r="29" fill="#FCEEEF"/>
          <path d="M8 36 Q4 32 9 28 Q5 24 12 23 L14 10 L25 18 Q32 16 39 18 L50 10 L52 23 Q59 24 55 28 Q60 32 56 36 Q52 50 32 52 Q12 50 8 36 Z" fill="#E8C382" stroke="#6E5239" stroke-width="2" stroke-linejoin="round"/>
          <polygon points="16,14 22,19 16,22" fill="#F2B6B6"/>
          <polygon points="48,14 42,19 48,22" fill="#F2B6B6"/>
          <path d="M25 22 L28 26 L32 23 L36 26 L39 22" fill="none" stroke="#8C6239" stroke-width="2" stroke-linecap="round"/>
          <ellipse cx="32" cy="42" rx="13" ry="8" fill="#FFFDF9"/>
          <ellipse cx="22" cy="33" rx="4.5" ry="4.8" fill="#3D9E8C" stroke="#4A3831" stroke-width="1.8"/>
          <circle cx="20.5" cy="31.5" r="1.5" fill="#FFFFFF"/>
          <path d="M38 33 Q42 29 46 33" fill="none" stroke="#4A3831" stroke-width="2.4" stroke-linecap="round"/>
          <ellipse cx="15" cy="38" rx="3.8" ry="2.2" fill="#F4A2B0" opacity="0.8"/>
          <ellipse cx="49" cy="38" rx="3.8" ry="2.2" fill="#F4A2B0" opacity="0.8"/>
          <polygon points="30,37 34,37 32,39.5" fill="#E88B9C"/>
          <path d="M27 41.5 Q29.5 44.5 32 41 Q34.5 44.5 37 41.5" fill="none" stroke="#5C4338" stroke-width="2" stroke-linecap="round"/>
          <path d="M51 14 L53 18 L57 19 L53 21 L51 25 L49 21 L45 19 L49 18 Z" fill="#D98292"/>
        </svg>
      </span>
    `;
  }
  if (type === 'mikorin_sleepy') {
    return `
      <span class="cat-sticker" style="width:${size}px;height:${size}px;transform:rotate(-3deg);" title="Mikorin Sleeping (-ω-)">
        <svg viewBox="0 0 64 64" width="${size - 6}" height="${size - 6}">
          <circle cx="32" cy="32" r="29" fill="#ECEEF9"/>
          <path d="M8 36 Q4 32 9 28 Q5 24 12 23 L14 10 L25 18 Q32 16 39 18 L50 10 L52 23 Q59 24 55 28 Q60 32 56 36 Q52 50 32 52 Q12 50 8 36 Z" fill="#E8C382" stroke="#6E5239" stroke-width="2" stroke-linejoin="round"/>
          <polygon points="16,14 22,19 16,22" fill="#F2B6B6"/>
          <polygon points="48,14 42,19 48,22" fill="#F2B6B6"/>
          <ellipse cx="32" cy="42" rx="13" ry="8" fill="#FFFDF9"/>
          <path d="M18 33 Q22 36.5 26 33" fill="none" stroke="#4A3831" stroke-width="2.2" stroke-linecap="round"/>
          <path d="M38 33 Q42 36.5 46 33" fill="none" stroke="#4A3831" stroke-width="2.2" stroke-linecap="round"/>
          <ellipse cx="15" cy="38" rx="3.5" ry="2" fill="#F4A2B0" opacity="0.7"/>
          <ellipse cx="49" cy="38" rx="3.5" ry="2" fill="#F4A2B0" opacity="0.7"/>
          <polygon points="30,37 34,37 32,39.5" fill="#E88B9C"/>
          <path d="M28 41.5 Q30 43.5 32 41 Q34 43.5 36 41.5" fill="none" stroke="#5C4338" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="49" cy="24" r="4.5" fill="#E4F2EE" stroke="#64998A" stroke-width="1.4"/>
        </svg>
      </span>
    `;
  }
  if (type === 'killua') {
    return `
      <span class="cat-sticker" style="width:${size}px;height:${size}px;transform:rotate(5deg);" title="Killua (^ω^)">
        <svg viewBox="0 0 64 64" width="${size - 6}" height="${size - 6}">
          <circle cx="32" cy="32" r="29" fill="#ECEEF9"/>
          <path d="M13 34 L14 11 L26 19 Q32 17 38 19 L50 11 L51 34 Q50 50 32 51 Q14 50 13 34 Z" fill="#8C735B" stroke="#4A3831" stroke-width="2" stroke-linejoin="round"/>
          <polygon points="16,14 23,19 16,23" fill="#D99B9B"/>
          <polygon points="48,14 41,19 48,23" fill="#D99B9B"/>
          <path d="M24 21 L28 26 L32 22 L36 26 L40 21" fill="none" stroke="#3B2E28" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M14 35 L19 35 M14 39 L18 38 M50 35 L45 35 M50 39 L46 38" stroke="#3B2E28" stroke-width="1.8" stroke-linecap="round"/>
          <ellipse cx="22" cy="33" rx="4.8" ry="5.2" fill="#C5D15A" stroke="#3B2E28" stroke-width="1.8"/>
          <ellipse cx="42" cy="33" rx="4.8" ry="5.2" fill="#C5D15A" stroke="#3B2E28" stroke-width="1.8"/>
          <ellipse cx="22" cy="33" rx="1.4" ry="3.5" fill="#2B211D"/>
          <ellipse cx="42" cy="33" rx="1.4" ry="3.5" fill="#2B211D"/>
          <circle cx="20.2" cy="31" r="1.6" fill="#FFFFFF"/>
          <circle cx="40.2" cy="31" r="1.6" fill="#FFFFFF"/>
          <ellipse cx="16" cy="39" rx="3.2" ry="1.8" fill="#F296A6" opacity="0.65"/>
          <ellipse cx="48" cy="39" rx="3.2" ry="1.8" fill="#F296A6" opacity="0.65"/>
          <polygon points="30,37 34,37 32,39.2" fill="#D17566"/>
          <path d="M28 41.5 Q32 45.5 36 41.5 Z" fill="#F296A6" stroke="#3B2E28" stroke-width="1.6"/>
        </svg>
      </span>
    `;
  }
  if (type === 'killua_curious') {
    return `
      <span class="cat-sticker" style="width:${size}px;height:${size}px;transform:rotate(-4deg);" title="Killua Curious (OωO)">
        <svg viewBox="0 0 64 64" width="${size - 6}" height="${size - 6}">
          <circle cx="32" cy="32" r="29" fill="#EAF2EE"/>
          <path d="M13 34 L14 11 L26 19 Q32 17 38 19 L50 11 L51 34 Q50 50 32 51 Q14 50 13 34 Z" fill="#8C735B" stroke="#4A3831" stroke-width="2" stroke-linejoin="round"/>
          <polygon points="16,14 23,19 16,23" fill="#D99B9B"/>
          <polygon points="48,14 41,19 48,23" fill="#D99B9B"/>
          <path d="M24 21 L28 26 L32 22 L36 26 L40 21" fill="none" stroke="#3B2E28" stroke-width="2.2" stroke-linecap="round"/>
          <circle cx="22" cy="33" r="5.3" fill="#C5D15A" stroke="#3B2E28" stroke-width="1.8"/>
          <circle cx="42" cy="33" r="5.3" fill="#C5D15A" stroke="#3B2E28" stroke-width="1.8"/>
          <circle cx="22" cy="33" r="2.8" fill="#2B211D"/>
          <circle cx="42" cy="33" r="2.8" fill="#2B211D"/>
          <circle cx="20.2" cy="31" r="1.7" fill="#FFFFFF"/>
          <circle cx="40.2" cy="31" r="1.7" fill="#FFFFFF"/>
          <polygon points="30,37.5 34,37.5 32,39.8" fill="#D17566"/>
          <path d="M27.5 42 Q29.8 44 32 41.5 Q34.2 44 36.5 42" fill="none" stroke="#3B2E28" stroke-width="1.9" stroke-linecap="round"/>
        </svg>
      </span>
    `;
  }
  if (type === 'killua_shy') {
    return `
      <span class="cat-sticker" style="width:${size}px;height:${size}px;transform:rotate(3deg);" title="Killua Shy">
        <svg viewBox="0 0 64 64" width="${size - 6}" height="${size - 6}">
          <circle cx="32" cy="32" r="29" fill="#FBF1DF"/>
          <path d="M13 36 L12 14 L25 20 Q32 18 39 20 L52 14 L51 36 Q50 50 32 51 Q14 50 13 36 Z" fill="#8C735B" stroke="#4A3831" stroke-width="2" stroke-linejoin="round"/>
          <ellipse cx="22" cy="34" rx="4.5" ry="4.8" fill="#C5D15A" stroke="#3B2E28" stroke-width="1.8"/>
          <ellipse cx="42" cy="34" rx="4.5" ry="4.8" fill="#C5D15A" stroke="#3B2E28" stroke-width="1.8"/>
          <circle cx="21" cy="32.5" r="1.6" fill="#FFFFFF"/>
          <circle cx="41" cy="32.5" r="1.6" fill="#FFFFFF"/>
          <ellipse cx="15" cy="40" rx="4" ry="2.2" fill="#F296A6" opacity="0.8"/>
          <ellipse cx="49" cy="40" rx="4" ry="2.2" fill="#F296A6" opacity="0.8"/>
          <path d="M10 45 Q32 39 54 45 L54 56 L10 56 Z" fill="#E4F2EE" stroke="#64998A" stroke-width="1.8"/>
        </svg>
      </span>
    `;
  }
  if (type === 'bluemoon') {
    return `
      <span class="cat-sticker" style="width:${size}px;height:${size}px;" title="Blue-Moon Weed Flower">
        <svg viewBox="0 0 64 64" width="${size - 8}" height="${size - 8}">
          <circle cx="32" cy="32" r="28" fill="#ECEEF9"/>
          <g fill="#9BA8E5" stroke="#534682" stroke-width="1.5">
            <ellipse cx="32" cy="17" rx="5.5" ry="10"/>
            <ellipse cx="32" cy="47" rx="5.5" ry="10"/>
            <ellipse cx="17" cy="32" rx="10" ry="5.5"/>
            <ellipse cx="47" cy="32" rx="10" ry="5.5"/>
            <ellipse cx="21" cy="21" rx="5" ry="9" transform="rotate(-45 21 21)"/>
            <ellipse cx="43" cy="21" rx="5" ry="9" transform="rotate(45 43 21)"/>
            <ellipse cx="21" cy="43" rx="5" ry="9" transform="rotate(45 21 43)"/>
            <ellipse cx="43" cy="43" rx="5" ry="9" transform="rotate(-45 43 43)"/>
          </g>
          <circle cx="32" cy="32" r="6" fill="#FDF5E6" stroke="#C89B57" stroke-width="1.8"/>
        </svg>
      </span>
    `;
  }
  return `
    <span class="cat-sticker" style="width:${size}px;height:${size}px;" title="Paw Sticker">
      <svg viewBox="0 0 64 64" width="${size - 8}" height="${size - 8}">
        <circle cx="32" cy="32" r="28" fill="#EAF2EE"/>
        <ellipse cx="32" cy="39" rx="11" ry="9" fill="#D98292"/>
        <circle cx="18" cy="27" r="4.5" fill="#D98292"/>
        <circle cx="27" cy="21" r="4.5" fill="#D98292"/>
        <circle cx="37" cy="21" r="4.5" fill="#D98292"/>
        <circle cx="46" cy="27" r="4.5" fill="#D98292"/>
      </svg>
    </span>
  `;
}

const i18n = {
  es: {
    brandSub: 'Guía de Convivencia en Casa',
    nav: [
      { href: '#top', label: '🏡 Bienvenida' },
      { href: '#cats-section', label: '🐱 Convivencia' },
      { href: '#routine-section', label: '🕒 Rutina Diaria' },
      { href: '#locator-section', label: '🗺️ Mapa' },
      { href: '#hazards-section', label: '🛡️ Prevención' },
      { href: '#emergency', label: '🩺 Salud y Vet' },
      { href: '#pledge-section', label: '💌 Confirmar' }
    ],
    globalArtBtnToReal: '📸 Ver Fotos Reales',
    globalArtBtnToAnime: '✨ Ver Arte Frieren',
    emergencyNav: '🚨 SOS Vet',

    welcomeStickers: [
      { type: 'mikorin', label: 'Mikorin (6 años • Esponjosita)' },
      { type: 'killua', label: 'Killua (4 años • Pelo corto)' },
      { type: 'bluemoon', label: 'Bienvenidos a casa' }
    ],
    welcomeTitle: '¡Bienvenidos a <span>Nuestra Casa!</span>',
    welcomeLead:
      'Nos da muchísimo gusto recibirte en nuestro hogar y esperamos que disfrutes mucho tu estancia. Aquí viven con nosotros dos integrantes muy especiales de nuestra familia: nuestras gatitas Mikorin y Killua.',
    guidePurposeTitle: '📖 Una guía pensada para convivir en armonía',
    guidePurposeText:
      'Preparamos esta página interactiva para presentarte a nuestras gatitas, compartirte los acuerdos básicos de convivencia en casa, explicar cómo funcionan sus rutinas diarias y mostrarte dónde está cada cosa.',
    generalInfoPills: [
      '🐾 Mikorin (6 años) y Killua (4 años)',
      '💉 Vacunas al día (Febrero 2026)',
      '🩺 Exámenes completos al día (Febrero 2026)'
    ],
    welcomePrimaryBtn: '🐱 Conocer a las Gatitas y Reglas de Casa',
    welcomeSecondaryBtn: '🕒 Ver Rutina Diaria',
    heroCaptionAnime: '🏡 Ilustración acuarela estilo Frieren: Mikorin y Killua en casa',
    heroCaptionReal: '📸 Foto real: Mikorin (derecha) y Killua (izquierda) descansando juntas',
    toggleToReal: '📸 Ver Foto Real',
    toggleToAnime: '✨ Ver Arte Frieren',

    scopeTitle: '✨ Explora la Guía de un Vistazo',
    scopeObjective: 'Haz clic en cualquier tarjeta para ir directamente a esa sección.',
    scopeCards: [
      { href: '#cats-section', title: '1. Mikorin y Killua', sub: 'Personalidades, salud y trato' },
      { href: '#cohabitationRulesBox', title: '2. Cómo Convivir', sub: 'Independencia, sueño y puertas' },
      { href: '#routine-section', title: '3. Rutina Diaria', sub: 'Comedor Gordon, agua y arenero' },
      { href: '#locator-section', title: '4. Mapa Rápido', sub: 'Ubicaciones y escondites' },
      { href: '#hazards-section', title: '5. Prevención', sub: 'Ligas, cables, plásticos y tóxicos' },
      { href: '#emergency', title: '6. Salud y Vet', sub: 'Señales de alerta y Dra. Brida' }
    ],

    /* Section 2: Meet the Cats (Focused ONLY on Personality, Health/Diet & Interaction — Zero Duplication of Hazards/Sleeping) */
    catsEyebrow: '🐾 Nuestras Anfitrionas Felinas',
    catsTitle: 'Conoce a Mikorin y Killua',
    catsSubtitle:
      'Cada hermana tiene su propio carácter y cuidados particulares. Puedes alternar entre su retrato acuarela estilo Frieren y su foto real.',
    catsData: [
      {
        id: 'mikorin',
        name: 'Mikorin',
        age: '6 años • Hembra esterilizada',
        stickerType: 'mikorin_wink',
        stickerText: '✨ La más esponjosita (=ω=)',
        animeImg: 'assets/mikorin-frieren-sq.jpg',
        realImg: 'assets/mikorin-real-sq.jpg',
        traits: ['🌼 Atigrada rubia de gran volumen', '💎 Ojos verde turquesa', '🤫 Dócil, serena y silenciosa'],
        alertType: 'medical',
        alertTitle: '🏥 Condición Médica: Síndrome Intestinal (IBD) y Caderas Delicadas',
        alertText:
          'Su dieta es estrictamente médica: solo puede comer sus croquetas hidrolizadas (cualquier otro alimento le provoca vómito y cólicos). Además, por el desgaste en sus caderas, agradecemos ayudarla con suavidad si desea bajar del comedor o de algún lugar alto.',
        details: [
          '<strong>Salud al día (Febrero 2026):</strong> Vacunas (antirrábica y triple felina), desparasitación y exámenes completos al día.',
          '<strong>Personalidad:</strong> Muy dulce, pacífica y silenciosa (casi nunca maúlla). Sus uñas son más gruesas que filosas.',
          '<strong>Cómo interactuar con ella:</strong> Disfruta la calma; si se acerca por iniciativa propia, agradece una caricia breve y suave en la cabecita.',
          '<strong>Cepillado y corte de uñas:</strong> Exclusivamente a cargo de sus dueños.'
        ],
        touchTitle: 'Guía Rápida de Trato con Mikorin',
        touchOk: '✅ Caricia suave en la cabeza si ella se acerca sola',
        touchNo: '❌ Evitar tocar su panza o patitas • Cero comida extra'
      },
      {
        id: 'killua',
        name: 'Killua',
        age: '4 años • Hembra esterilizada',
        stickerType: 'killua_curious',
        stickerText: '🌿 Pelo corto y platicadora (^ω^)',
        animeImg: 'assets/killua-frieren-sq.jpg',
        realImg: 'assets/killua-real-sq.jpg',
        traits: ['🍃 Atigrada café/olivo con negro', '🌟 Ojos amarillo-verdosos', '🗣️ Tímida, sensible y expresiva'],
        alertType: 'sound',
        alertTitle: '🔊 Carácter Tímido: Sensible a Ruidos y Movimientos Rápidos',
        alertText:
          'Los ruidos fuertes, voces elevadas, carcajadas o movimientos bruscos la asustan con facilidad. Cuando busca refugio, prefiere observar desde sus escondites seguros hasta sentirse en confianza.',
        details: [
          '<strong>Salud al día (Febrero 2026):</strong> Vacunas (antirrábica y triple felina), desparasitación y exámenes completos al día. Sin condición médica.',
          '<strong>Dieta solidaria (¡por justicia! 😄):</strong> Aunque está sana, <strong>tampoco debe probar comida humana ni premios extra</strong>, tanto por su salud como por pura justicia con su hermana Mikorin.',
          '<strong>Su afición por "Gordon" (el comedor):</strong> Es de muy buen diente y suele maullar cerca del comedor automático. <em>Tip:</em> Si la notas muy ansiosa, puedes poner <strong>4 croquetas extra en cada plato</strong> (para que ambas coman).',
          '<strong>Cepillado y corte de uñas:</strong> Exclusivamente a cargo de sus dueños.'
        ],
        touchTitle: 'Guía Rápida de Trato con Killua',
        touchOk: '✅ Voz suave y dejarla tranquila cuando busca refugio',
        touchNo: '❌ Evitar ruidos fuertes • Cero comida extra (¡por justicia!)'
      }
    ],

    /* Cohabitation Rules: Single Source of Truth for Independence, Bedtime, Doors & Table Food */
    cohabBadge: '🏡 Convivencia en Armonía',
    cohabTitle: 'Cómo Convivir en Casa',
    cohabSub: 'Cuatro principios sencillos para que tanto tú como las gatitas disfruten de una estancia cómoda, tranquila y segura:',
    cohabRules: [
      {
        sticker: 'mikorin',
        tag: '1. Naturaleza Felina',
        title: 'Espíritus independientes: déjalas ser a su ritmo',
        text: 'A diferencia de los perros, los gatos son independientes y no siguen órdenes. La mejor muestra de cariño es no forzar la interacción ni tomarlas en brazos, sino simplemente dejarlas ser —incluso si eligen esconderse— para que se sientan en confianza.'
      },
      {
        sticker: 'mikorin_sleepy',
        tag: '2. Hora de Dormir',
        title: 'Por su seguridad, duermen únicamente con nosotros',
        text: 'Ambas descansan toda la noche en nuestra recámara principal, dentro de sus cobijas en forma de "cuencos". Antes de irte a dormir, por favor revisa que no estén en tu cuarto —o avísanos si alguna entró para sacarla con cuidado— antes de cerrar tu puerta.'
      },
      {
        sticker: 'killua_shy',
        tag: '3. Puertas y Habitaciones',
        title: 'Un vistazo rápido antes de cerrar cualquier puerta',
        text: 'Como caminan en silencio y a Killua le gusta meterse debajo de las camas, en el clóset o en la oficina, te pedimos revisar siempre cualquier habitación o baño antes de cerrar la puerta para evitar que alguna se quede encerrada.'
      },
      {
        sticker: 'killua',
        tag: '4. En la Mesa',
        title: 'Cero probaditas para ambas (por salud y por justicia)',
        text: 'Ninguna de las dos puede probar comida humana: Mikorin se enferma gravemente por su condición intestinal (IBD), y a Killua tampoco le damos nada fuera de sus croquetas por solidaridad y justicia con su hermana.'
      }
    ],
    cohabScenes: [
      {
        img: 'assets/frieren-cats-nap.jpg',
        sticker: 'mikorin_sleepy',
        caption: 'Descanso nocturno en sus cobijas con forma de "cuencos" en la recámara principal'
      },
      {
        img: 'assets/frieren-safe-home.jpg',
        sticker: 'bluemoon',
        caption: 'Un hogar sereno donde ellas exploran y descansan a su propio ritmo'
      }
    ],

    /* Polished, Professional Third-Person Explanation of Emotional Support Animals */
    esaNoteBadge: '💜 Un Vínculo Especial • Animales de Apoyo Emocional',
    esaNoteTitle: 'Más que Mascotas: El Vínculo de un Animal de Apoyo Emocional',
    esaNoteText:
      'Además de ser parte de nuestra familia, Mikorin y Killua son Animales de Apoyo Emocional (ESA). A diferencia de una mascota convencional, los animales de apoyo emocional mantienen un lazo de apego y regulación mutua profundamente sensible con sus dueños. Tratarlas como mascotas comunes —por ejemplo, intentando retenerlas, cargarlas o alterar sus costumbres de descanso— rompe su sensación de refugio, puede causarles malestar físico y generar aflicción emocional en su hogar.',
    esaNoteBullets: [
      '<strong>Un lazo de confianza exclusivo con sus dueños:</strong> Es natural ver que con sus dueños busquen brazos o cercanía constante, pues representan su figura de seguridad. Con los visitantes, en cambio, una presencia tranquila y sin contacto forzado es lo que las mantiene en paz.',
      '<strong>Bienestar físico y emocional unidos:</strong> En gatitas sensibles, los cambios en su entorno o el contacto no solicitado generan estrés silencioso que impacta directamente en su salud y tranquilidad.',
      '<strong>Saludo amable a su iniciativa:</strong> Si alguna se acerca por sí sola y frota suavemente su mejilla en tu mano, corresponder con una caricia breve en su cabecita es la manera perfecta de saludarla.'
    ],
    esaExpandBtnClosed: '📖 Conocer más sobre los Animales de Apoyo Emocional y hacer un Mini-Test (Opcional)',
    esaExpandBtnOpen: '🔼 Ocultar información adicional y Mini-Test',
    esaMiniCards: [
      {
        title: '🧠 Apego Seguro y Estabilidad',
        text: 'Los Animales de Apoyo Emocional brindan calma y equilibrio a través de su presencia cotidiana y su cercanía con sus dueños. Respetar sus rutinas cuida tanto la paz de las gatitas como la armonía emocional en casa.'
      },
      {
        title: '🐾 La Belleza de Darles Espacio',
        text: 'Los gatos se sienten más seguros cuando tienen autonomía sobre su entorno. Cuando un invitado convive con serenidad sin invadir su espacio, ellas perciben que su hogar sigue siendo un refugio seguro.'
      },
      {
        title: '🩺 Sensibilidad y Salud',
        text: 'Mantener un ambiente predecible y libre de estrés protege directamente la salud digestiva de Mikorin y la tranquilidad emocional de Killua.'
      }
    ],
    quizIntro: '✨ Repaso Rápido de Convivencia (Haz clic en una opción):',
    quizQuestions: [
      {
        q: '1. Antes de irte a dormir, notas que una de las gatitas está en tu habitación. ¿Qué es lo ideal hacer?',
        options: [
          { text: 'Dejarla dentro y cerrar la puerta para que duerma ahí.', correct: false },
          { text: 'Avisarnos para sacarla con cuidado antes de cerrar tu puerta, ya que por su seguridad duermen únicamente con nosotros.', correct: true }
        ],
        feedbackCorrect: '¡Exacto! Por su seguridad y bienestar, siempre duermen en la recámara principal con nosotros.',
        feedbackWrong: 'Recuerda: por su seguridad duermen únicamente con nosotros. Avísanos siempre si alguna está en tu cuarto para sacarla antes de que cierres tu puerta.'
      },
      {
        q: '2. ¿Cuál es la mejor manera de interactuar con Mikorin y Killua durante tu visita?',
        options: [
          { text: 'Respetar su independencia felina: dejarlas ser a su ritmo y acariciar su cabecita solo si ellas se acercan primero.', correct: true },
          { text: 'Llamarlas, seguirlas o tomarlas en brazos como si fueran perritos.', correct: false }
        ],
        feedbackCorrect: '¡Muy bien! Al ser independientes y sensibles, dejarlas ser sin forzar el contacto es la mejor forma de que se sientan tranquilas.',
        feedbackWrong: 'A diferencia de los perros, los gatos son independientes y se estresan si se les fuerza. Lo mejor es dejarlas ser a su propio ritmo.'
      },
      {
        q: '3. Si estás comiendo y Killua se acerca con curiosidad, ¿puedes darle un pedacito ya que ella no tiene IBD?',
        options: [
          { text: 'No; ninguna come alimentos fuera de sus croquetas (Mikorin por salud y Killua por cuidado y pura justicia con su hermana).', correct: true },
          { text: 'Sí, a Killua sí se le puede dar comida humana.', correct: false }
        ],
        feedbackCorrect: '¡Correcto! Cero comida humana para ambas: cuidamos la salud de Mikorin y mantenemos la justicia entre hermanas.',
        feedbackWrong: '¡Nada de probaditas para ninguna! Así protegemos a Mikorin y somos justos con ambas.'
      }
    ],

    /* Section 3: Daily Routine */
    routineEyebrow: '🕒 Cuidados del Día a Día',
    routineTitle: 'Rutina Diaria',
    routineSubtitle: 'Cómo funcionan su alimentación automática, sus estaciones de agua, el arenero y sus momentos de juego y descanso.',
    routineBannerTitle: 'Su rincón diario con "Gordon" y sus fuentes de agua',
    routineBannerText:
      'Sus horarios de comida están automatizados y cuentan con dos estaciones de agua fresca en casa. Si nos apoyas cuidándolas durante nuestra ausencia, aquí tienes cada paso explicado de forma sencilla.',
    routineTabs: [
      { id: 'feeding', label: '🍽️ Alimentación ("Gordon")' },
      { id: 'water', label: '💧 Agua' },
      { id: 'litter', label: '🧹 Arenero' },
      { id: 'comfort', label: '🧸 Juego y "Cuencos"' }
    ],
    routineContent: {
      feeding: {
        title: '🍽️ Alimentación Automática con "Gordon"',
        items: [
          'Sus raciones caen automáticamente en horarios programados desde <strong>"Gordon"</strong> (su comedor automático).',
          'El contenedor superior se rellena al <strong>70% una vez por semana</strong> (únicamente con sus croquetas hidrolizadas).',
          '<strong>Platitos metálicos:</strong> lavarlos una vez por semana.',
          '<strong>Tip para Killua:</strong> Si maúlla muy ansiosa junto a Gordon, puedes poner <strong>4 croquetas extra en cada plato</strong>.',
          '<strong>⚡ En caso de apagón:</strong> Gordon tiene baterías de respaldo, pero conviene revisar que las porciones sigan cayendo.'
        ],
        gordonBoxTitle: '🤖 Porción Manual en "Gordon" (En Caso de Apagón)',
        gordonBoxText: 'Si notas que no cayó comida durante un apagón, dispensa una ración manual haciendo un DOBLE CLIC RÁPIDO en el primer botón (de izquierda a derecha).',
        gordonBtnLabel: '🔘 Probar Doble Clic Rápido (1er Botón Izq → Der)',
        gordonSuccessMsg: '✅ ¡Ración manual activada! Recuerda: doble clic rápido en el primer botón de izquierda a derecha.'
      },
      water: {
        title: '💧 Agua Fresca Todos los Días',
        items: [
          '<strong>Rellenar a diario</strong> ambas estaciones de agua (junto a Gordon y en la sala).',
          '<strong>Cambiar toda el agua por completo</strong> al menos <strong>cada 2 días</strong>.',
          '<strong>Lavar los platos y la jarra/bote</strong> una vez por semana.'
        ]
      },
      litter: {
        title: '🧹 Limpieza del Arenero',
        items: [
          '<strong>Frecuencia:</strong> Limpiar el arenero (en la oficina) como máximo <strong>cada 2 días</strong>.',
          '<strong>Desecho:</strong> Cerrar bien la bolsita usada y tirarla en el <strong>bote gris con tapa debajo del fregadero de la cocina</strong>.',
          '<strong>Higiene de la pala:</strong> Lavarla en la piedra de lavar con el <strong>cepillo azul</strong> cada 3 días (o mínimo una vez por semana).'
        ]
      },
      comfort: {
        title: '🧸 Juegos y Cobijas en Forma de "Cuencos"',
        items: [
          '<strong>Pelotitas:</strong> Pueden quedar libres en el piso o sobre la cama.',
          '<strong>⚠️ Juguete de tiras de colores:</strong> Usar <strong>únicamente bajo supervisión</strong> (y guardarlo al terminar, ya que Mikorin intenta morder y tragar las cintas).',
          '<strong>🛏️ Cobijas con "cuencos":</strong> En la cama principal sus cobijas se acomodan formando pequeños cráteres o nidos. Al sacudir o tender la cama, por favor <strong>vuelve a darles forma de cuenco</strong>.'
        ]
      }
    },

    checklistTitle: '✅ Checklist de Apoyo',
    checklistReset: 'Reiniciar',
    checklistProgressText: (done, total) => `${done} de ${total} completadas`,
    checklistSub: 'Si nos apoyas con su cuidado, puedes marcar aquí las tareas realizadas:',
    checklistTasks: [
      { id: 'c1', text: '💧 Rellenar ambas estaciones de agua (Diario)' },
      { id: 'c2', text: '🛏️ Mantener las cobijas de la cama principal en forma de "cuencos" (Diario)' },
      { id: 'c3', text: '🚪 Verificar habitaciones antes de cerrar puertas (Diario)' },
      { id: 'c4', text: '💧 Renovar por completo el agua de ambas estaciones (Cada 2 días)' },
      { id: 'c5', text: '🧹 Limpiar arenero y tirar bolsa en el bote gris bajo el fregadero (Máx. cada 2 días)' },
      { id: 'c6', text: '🪣 Lavar la pala en la piedra de lavar con el cepillo azul (Cada 3–7 días)' },
      { id: 'c7', text: '🍽️ Rellenar "Gordon" al 70% y lavar platitos de comida y agua (Semanal)' }
    ],

    /* Section 4: Streamlined Quick House Map (Concise Badges — No Redundant Paragraphs) */
    locatorEyebrow: '🗺️ Mapa Rápido del Hogar',
    locatorTitle: '¿Dónde Está Cada Cosa y Dónde se Esconden?',
    locatorSubtitle: 'Referencia rápida habitación por habitación para encontrar sus accesorios y conocer los refugios favoritos de Killua.',
    rooms: [
      {
        icon: '🛏️',
        name: 'Recámara Principal',
        items: [
          '<strong>Cama principal:</strong> Cobijas en forma de "cuencos" donde duermen toda la noche.',
          '<strong>Piso y cama:</strong> Pelotitas de juguete.'
        ]
      },
      {
        icon: '💻',
        name: 'Oficina',
        items: [
          '<strong>Arenero principal:</strong> Ubicado aquí.',
          '<strong>2ª repisa del librero (junto al arenero):</strong> Rollos de bolsas para limpiar.',
          '<strong>Bajo escritorios y sillas:</strong> Refugio habitual de Killua.'
        ]
      },
      {
        icon: '🛋️',
        name: 'Sala y Comedor',
        items: [
          '<strong>Comedor automático "Gordon":</strong> Con sus platos metálicos y Estación de Agua #1.',
          '<strong>Junto al sillón rascador (Sala):</strong> Estación de Agua #2.',
          '<strong>Mesa del comedor:</strong> Punto alto del que Mikorin a veces pide ayuda para bajar.'
        ]
      },
      {
        icon: '🧳',
        name: 'Cuarto de Invitados',
        items: [
          '<strong>Clóset:</strong> Bolsas de repuesto para el arenero y repisas donde descansa Killua.',
          '<strong>Debajo de la cama:</strong> Escondite favorito de Killua (revisar antes de cerrar la puerta).'
        ]
      },
      {
        icon: '🚰',
        name: 'Cocina y Lavadero',
        items: [
          '<strong>Debajo del fregadero (Cocina):</strong> Bote gris con tapa para tirar bolsas del arenero.',
          '<strong>Piedra de lavar (Lavadero):</strong> Cepillo azul exclusivo para lavar la pala.'
        ]
      }
    ],

    /* Section 5: Single Source of Truth for Cords/Hair Ties (Mikorin), Plastics (Killua) & Toxic Items */
    hazardsEyebrow: '🛡️ Prevención y Seguridad en Casa',
    hazardsTitle: 'Objetos, Alimentos y Plantas Peligrosas',
    hazardsSubtitle: 'En esta sección reunimos en un solo lugar las precauciones con objetos pequeños en casa y el buscador de sustancias tóxicas.',
    hazardPersonalPills: [
      { sticker: 'mikorin_wink', text: 'Mikorin: Guardar ligas, cordones, audífonos e hilos' },
      { sticker: 'killua_curious', text: 'Killua: Guardar bolsas y envolturas de plástico' }
    ],
    hazardsSpotlightTitle: '¿Por qué es tan importante mantener guardados cables, ligas y plásticos?',
    hazardsSpotlightDesc:
      'Cada una tiene una curiosidad particular: a Mikorin le llaman mucho la atención los objetos tipo cuerda (ligas para el cabello, cables, audífonos, estambres) e intenta tragarlos; mientras que a Killua le gusta morder bolsas de plástico. Mantenerlos siempre dentro de cajones o estuches las mantiene fuera de peligro.',
    hazardSearchPlaceholder: '🔍 Buscar (ej. ligas, audífonos, bolsa, chocolate, lirio, paracetamol, cloro)...',
    hazardCategories: [
      { id: 'all', label: 'Todos' },
      { id: 'personal', label: '⚡ Ligas, Cables y Plásticos' },
      { id: 'food', label: '🍫 Alimentos' },
      { id: 'plants', label: '🌿 Plantas' },
      { id: 'cleaners', label: '🧴 Limpieza y Medicamentos' }
    ],
    hazardsList: [
      {
        cat: 'personal',
        title: '🧶 Ligas para el cabello, cordones, audífonos, hilos, estambres, alfileres y agujas',
        desc: 'Riesgo especial para Mikorin: intenta tragarlos, lo que puede causar una obstrucción intestinal grave.'
      },
      {
        cat: 'personal',
        title: '🛍️ Bolsas de plástico, celofán y envolturas',
        desc: 'Riesgo especial para Killua: le gusta morder plásticos, con riesgo de asfixia o ingestión.'
      },
      {
        cat: 'food',
        title: '🍫 Chocolate, cebolla, ajo, uvas, pasas y aguacate',
        desc: 'Alimentos altamente tóxicos para los gatos incluso en pequeñas cantidades.'
      },
      {
        cat: 'food',
        title: '☕ Alcohol, café, té, lácteos y comida cruda o condimentada',
        desc: 'Peligrosos para su sistema digestivo y nervioso (recuerda: cero comida humana para ambas).'
      },
      {
        cat: 'plants',
        title: '🌸 Lirios, azaleas y tulipanes',
        desc: 'Los lirios son letales para los riñones felinos incluso por el roce con su polen.'
      },
      {
        cat: 'plants',
        title: '🪴 Nochebuena (poinsettia), dieffenbachia y aloe vera',
        desc: 'Plantas ornamentales tóxicas si las muerden o lamen.'
      },
      {
        cat: 'cleaners',
        title: '🧼 Cloro, desinfectantes, jabones concentrados e insecticidas',
        desc: 'Tóxicos por inhalación o por contacto en sus patitas.'
      },
      {
        cat: 'cleaners',
        title: '💊 Medicamentos humanos (paracetamol, ibuprofeno) y aceites esenciales',
        desc: 'Altamente tóxicos para el hígado y el sistema nervioso felino.'
      }
    ],

    emergencyEyebrow: '🩺 Salud y Bienestar',
    emergencyTitle: 'Señales de Alerta y Contacto Veterinario',
    emergencySubtitle:
      'Ambas son muy queridas y sensibles. Si notas algún cambio en su ánimo, apetito o digestión, avísanos y contacta de inmediato a su clínica.',
    triageTitle: '⚠️ Señales de Alerta a Observar',
    triageGroups: [
      {
        who: '🟡 En Mikorin',
        items: [
          'Vómito más de una vez al día, abdomen rígido o señales de dolor.',
          'Falta de apetito o aislamiento inusual.'
        ]
      },
      {
        who: '🟠 En Killua',
        items: [
          'Falta de apetito, maullidos excesivos o respiración agitada.',
          'Aislamiento prolongado sin salir a comer.'
        ]
      },
      {
        who: '🔴 En Cualquiera de las Dos',
        items: [
          'Diarrea líquida o con presencia de sangre.',
          'Orinar fuera del arenero o pasar 24 horas sin orinar.',
          'Ojos llorosos, salivación espesa o encías pálidas/muy rojas.',
          'Decaimiento o letargo extremo.'
        ]
      }
    ],
    triageActionTitle: '📋 Cómo actuar:',
    triageActionText:
      'Si el síntoma es leve, observar de cerca y avisarnos; si persiste o hay fluidos, tomar foto para referencia médica y escribir por WhatsApp a la clínica. En casos urgentes, acudir directamente a Veterinaria Meztli.',
    vetBadge: '🚨 CONTACTO VETERINARIO',
    vetName: 'Clínica Veterinaria Meztli',
    vetNote: 'Atención médica de cabecera para Mikorin y Killua en Querétaro:',
    vetDoctorLabel: 'Doctora Brida',
    vetReceptionLabel: 'Recepción (citas y pedidos)',
    vetAddressLabel: 'Dirección',
    vetAddress: 'Av. Paseo de la Constitución 115, Villas del Parque, 76140 Santiago de Querétaro, Qro.',
    vetWhatsappBtn: '💬 WhatsApp Dra. Brida',
    vetCallReceptionBtn: '📞 Llamar a Recepción',
    vetMapsBtn: '📍 Abrir Ubicación en Google Maps',

    pledgeEyebrow: '💌 ¡Gracias por Cuidarlas!',
    pledgeTitle: 'Confirmación Rápida para Tu Estancia',
    pledgeSubtitle: 'Marca los 4 puntos esenciales y envíanos un mensajito por WhatsApp para saber que todo quedó claro.',
    pledgeIntro: 'Confirmo que leí la guía para convivir en armonía con Mikorin y Killua:',
    pledgeItems: [
      {
        id: 'p1',
        text: '🐾 Respetaré su independencia felina y su vínculo como Animales de Apoyo Emocional, dejándolas ser a su propio ritmo.'
      },
      {
        id: 'p2',
        text: '🌙 Tendré presente que duermen únicamente en la recámara principal, y revisaré mi cuarto antes de dormir (y cualquier puerta antes de cerrarla).'
      },
      {
        id: 'p3',
        text: '🍽️ No les daré comida extra (a Mikorin por su IBD y a Killua por justicia con su hermana) y guardaré siempre ligas, cables, audífonos y plásticos.'
      },
      {
        id: 'p4',
        text: '🤫 Procuraré un ambiente tranquilo sin ruidos fuertes por Killua y avisaré de inmediato ante cualquier señal de alerta.'
      }
    ],
    pledgeNamePlaceholder: 'Tu nombre (opcional)...',
    pledgeWhatsappBtn: '💬 Confirmar por WhatsApp',
    pledgeCopyBtn: '📋 Copiar Mensaje',
    pledgeWarningMsg: '⚠️ Por favor marca las 4 casillas antes de enviar tu confirmación.',
    pledgeSuccessBadge: '🏅 ¡Muchas gracias por tu cariño y apoyo cuidando el bienestar de Mikorin y Killua!',
    pledgeCopiedToast: '✅ ¡Mensaje copiado al portapapeles!',
    pledgeWhatsappMessage: name =>
      `¡Hola! 🐾 Soy ${name || 'su huésped'}. Ya leí la guía de convivencia de Mikorin y Killua ✨. Cuenten conmigo para respetar su independencia y espacio, revisar siempre antes de cerrar puertas o ir a dormir, no darles comida extra (¡por la salud de Mikorin y por justicia con Killua!) y mantener guardados cables, ligas y plásticos. ¡Gracias por la bienvenida!`,

    footerText: '🐾 Guía de Convivencia y Cuidado de Mikorin y Killua • Hecha con mucho cariño'
  },

  en: {
    brandSub: 'House Guest & Cat Guide',
    nav: [
      { href: '#top', label: '🏡 Welcome' },
      { href: '#cats-section', label: '🐱 Cohabitation' },
      { href: '#routine-section', label: '🕒 Daily Routine' },
      { href: '#locator-section', label: '🗺️ Map' },
      { href: '#hazards-section', label: '🛡️ Safety' },
      { href: '#emergency', label: '🩺 Health & Vet' },
      { href: '#pledge-section', label: '💌 Confirm' }
    ],
    globalArtBtnToReal: '📸 Real Photos',
    globalArtBtnToAnime: '✨ Frieren Art',
    emergencyNav: '🚨 Vet SOS',

    welcomeStickers: [
      { type: 'mikorin', label: 'Mikorin (6 yrs • Fluffy)' },
      { type: 'killua', label: 'Killua (4 yrs • Sleek)' },
      { type: 'bluemoon', label: 'Welcome home' }
    ],
    welcomeTitle: 'Welcome to <span>Our Home!</span>',
    welcomeLead:
      'We are delighted to welcome you to our home and hope you have a wonderful, relaxing stay. Sharing our home with us are two very cherished members of our family: our cats, Mikorin and Killua.',
    guidePurposeTitle: '📖 A thoughtful guide for living together in harmony',
    guidePurposeText:
      'We created this interactive guide to introduce you to our girls, share our everyday house guidelines, walk through their daily care routines, and show you where everything is kept.',
    generalInfoPills: [
      '🐾 Mikorin (6 yrs) & Killua (4 yrs)',
      '💉 Vaccines up to date (February 2026)',
      '🩺 Full medical checkups up to date (February 2026)'
    ],
    welcomePrimaryBtn: '🐱 Meet the Cats & House Guidelines',
    welcomeSecondaryBtn: '🕒 View Daily Routine',
    heroCaptionAnime: '🏡 Frieren-style watercolor welcome: Mikorin & Killua at home',
    heroCaptionReal: '📸 Real photo: Mikorin (right) & Killua (left) resting together',
    toggleToReal: '📸 View Real Photo',
    toggleToAnime: '✨ View Frieren Art',

    scopeTitle: '✨ Explore the Guide at a Glance',
    scopeObjective: 'Click any card to jump straight to that section.',
    scopeCards: [
      { href: '#cats-section', title: '1. Mikorin & Killua', sub: 'Personalities, health & interaction' },
      { href: '#cohabitationRulesBox', title: '2. How to Cohabit', sub: 'Independence, bedtime & doors' },
      { href: '#routine-section', title: '3. Daily Routine', sub: 'Gordon feeder, water & litter' },
      { href: '#locator-section', title: '4. Quick Map', sub: 'Locations & hiding spots' },
      { href: '#hazards-section', title: '5. Prevention', sub: 'Hair ties, cords, plastics & toxins' },
      { href: '#emergency', title: '6. Health & Vet', sub: 'Warning signs & Dr. Brida' }
    ],

    /* Section 2: Meet the Cats (Focused ONLY on Personality, Health/Diet & Interaction) */
    catsEyebrow: '🐾 Our Feline Hosts',
    catsTitle: 'Meet Mikorin & Killua',
    catsSubtitle:
      'Each sister has her own unique personality and care needs. Toggle between their Frieren-style watercolor portrait and real photo anytime.',
    catsData: [
      {
        id: 'mikorin',
        name: 'Mikorin',
        age: '6 years old • Spayed Female',
        stickerType: 'mikorin_wink',
        stickerText: '✨ The Fluffy One (=ω=)',
        animeImg: 'assets/mikorin-frieren-sq.jpg',
        realImg: 'assets/mikorin-real-sq.jpg',
        traits: ['🌼 Voluminous Golden-Blonde Tabby', '💎 Turquoise-Green Eyes', '🤫 Gentle, serene & quiet'],
        alertType: 'medical',
        alertTitle: '🏥 Medical Condition: IBD (Intestinal Syndrome) & Delicate Hips',
        alertText:
          'She follows a strict medical diet and can ONLY eat her prescription hydrolyzed kibble (any other food causes vomiting and colic). Because her hips are delicate, please gently help her down if she wants to get off the dining table or a high spot.',
        details: [
          '<strong>Health up to date (February 2026):</strong> Vaccines (rabies & feline triple), deworming, and full medical checkups up to date.',
          '<strong>Personality:</strong> Very sweet, peaceful, and quiet (she rarely meows). Her claws are thicker rather than sharp.',
          '<strong>How to interact with her:</strong> She enjoys calm company; if she approaches you on her own, she appreciates a brief, gentle head pet.',
          '<strong>Brushing & nail trimming:</strong> Handled exclusively by her owners.'
        ],
        touchTitle: 'Quick Interaction Guide for Mikorin',
        touchOk: '✅ Gentle head pet if she approaches on her own',
        touchNo: '❌ Avoid touching her belly or paws • Zero extra food'
      },
      {
        id: 'killua',
        name: 'Killua',
        age: '4 years old • Spayed Female',
        stickerType: 'killua_curious',
        stickerText: '🌿 Short-Haired & Chatty (^ω^)',
        animeImg: 'assets/killua-frieren-sq.jpg',
        realImg: 'assets/killua-real-sq.jpg',
        traits: ['🍃 Brown/Olive/Black Tabby', '🌟 Yellow-Green Eyes', '🗣️ Shy, sensitive & expressive'],
        alertType: 'sound',
        alertTitle: '🔊 Shy Temperament: Sensitive to Loud Noises & Sudden Movements',
        alertText:
          'Loud noises, raised voices, loud laughter, or sudden movements startle her easily. When startled, she prefers observing quietly from her favorite safe hiding spots until she feels comfortable.',
        details: [
          '<strong>Health up to date (February 2026):</strong> Vaccines (rabies & feline triple), deworming, and full medical checkups up to date. No medical conditions.',
          '<strong>Solidarity diet (out of fairness! 😄):</strong> Even though she has no medical conditions, <strong>she also shouldn’t be given any human food or extra treats</strong>—for her health and out of pure fairness to her sister Mikorin!',
          '<strong>Her love for "Gordon" (the feeder):</strong> She has a healthy appetite and often meows by the automatic feeder. <em>Tip:</em> If she seems extra anxious for food, place <strong>4 extra kibbles in each bowl</strong> so both girls get a treat.',
          '<strong>Brushing & nail trimming:</strong> Handled exclusively by her owners.'
        ],
        touchTitle: 'Quick Interaction Guide for Killua',
        touchOk: '✅ Soft voices & letting her rest undisturbed when hiding',
        touchNo: '❌ Avoid loud noises • Zero extra food (out of fairness!)'
      }
    ],

    cohabBadge: '🏡 Living Together in Harmony',
    cohabTitle: 'How to Cohabit at Home',
    cohabSub: 'Four simple everyday guidelines so both you and the cats enjoy a comfortable, peaceful, and safe stay:',
    cohabRules: [
      {
        sticker: 'mikorin',
        tag: '1. Feline Nature',
        title: 'Independent spirits: let them be at their own pace',
        text: 'Unlike dogs, cats are independent creatures and won’t follow commands. The kindest way to coexist with them is never to force interaction or pick them up—simply let them be, even when they choose to hide, so they feel completely safe.'
      },
      {
        sticker: 'mikorin_sleepy',
        tag: '2. Bedtime Routine',
        title: 'For their safety, they sleep exclusively with us',
        text: 'Both girls sleep through the night with us in the master bedroom in their "bowl-shaped" blankets. Before going to sleep, please check that neither cat is in your room—or let us know if one wandered in so we can gently bring her out—before closing your door.'
      },
      {
        sticker: 'killua_shy',
        tag: '3. Doors & Rooms',
        title: 'Always check rooms before closing any door',
        text: 'Because they move quietly—and Killua loves hiding under beds, in closets, or in the office—please do a quick visual check before closing any bedroom, bathroom, or office door so neither cat accidentally gets locked inside.'
      },
      {
        sticker: 'killua',
        tag: '4. At the Table',
        title: 'Zero table scraps for both (for health & fairness)',
        text: 'Neither cat may have human food: Mikorin gets severely ill due to her intestinal condition (IBD), and Killua also sticks strictly to her kibble out of fairness and solidarity with her sister!'
      }
    ],
    cohabScenes: [
      {
        img: 'assets/frieren-cats-nap.jpg',
        sticker: 'mikorin_sleepy',
        caption: 'Peaceful nighttime rest in their "bowl-shaped" blankets in the master bedroom'
      },
      {
        img: 'assets/frieren-safe-home.jpg',
        sticker: 'bluemoon',
        caption: 'A serene home sanctuary where they explore and rest at their own pace'
      }
    ],

    esaNoteBadge: '💜 A Special Bond • Emotional Support Animals',
    esaNoteTitle: 'More Than Pets: Understanding Emotional Support Animals',
    esaNoteText:
      'Beyond being beloved family members, Mikorin and Killua serve as Emotional Support Animals (ESAs). Unlike conventional pets, Emotional Support Animals share a deeply attuned bond of mutual regulation and security with their owners. Treating them like ordinary pets—such as trying to hold them, carry them around, or alter their sleeping routines—disrupts their sense of sanctuary, can trigger physical stress in the cats, and causes emotional distress within their home.',
    esaNoteBullets: [
      '<strong>An exclusive bond of trust with their owners:</strong> It is natural to see them seeking cuddles or being held by their owners, who are their safe haven. With house guests, however, a calm, hands-off presence is what keeps them most at peace.',
      '<strong>Physical & emotional well-being connected:</strong> For sensitive cats, unsolicited handling or changes to their routine create silent internal stress that directly impacts their health and peace of mind.',
      '<strong>Affection on their own terms:</strong> If one of them walks up on her own and gently nudges your hand, responding with a brief, soft head pet is the loveliest way to greet her.'
    ],
    esaExpandBtnClosed: '📖 Learn more about Emotional Support Animals & take a quick 3-question check (Optional)',
    esaExpandBtnOpen: '🔼 Hide additional context & Mini-Check',
    esaMiniCards: [
      {
        title: '🧠 Secure Attachment & Stability',
        text: 'Emotional Support Animals provide grounding and calm through their daily presence and closeness with their owners. Respecting their routines protects both the cats’ peace and the emotional well-being of the household.'
      },
      {
        title: '🐾 The Beauty of Giving Them Space',
        text: 'Cats feel safest when they have autonomy over their environment. When a guest coexists calmly without invading their space, the cats know their home remains a predictable sanctuary.'
      },
      {
        title: '🩺 Sensitivity & Health',
        text: 'Keeping a calm, predictable environment directly supports Mikorin’s digestive health and Killua’s emotional comfort.'
      }
    ],
    quizIntro: '✨ Quick Cohabitation Review (Click an option):',
    quizQuestions: [
      {
        q: '1. Before going to sleep, you notice one of the cats wandered into your room. What is the best thing to do?',
        options: [
          { text: 'Leave her inside and close the door so she sleeps in the guest room.', correct: false },
          { text: 'Let us know so we can gently bring her out before you close your door, since they sleep exclusively with us for their safety.', correct: true }
        ],
        feedbackCorrect: 'Spot on! For their safety and comfort, both girls always sleep with us in the master bedroom.',
        feedbackWrong: 'Remember: for their safety and comfort, they sleep exclusively with us. Always check your room or let us know so we can gently bring them out before you close your door.'
      },
      {
        q: '2. What is the best way to interact with Mikorin and Killua during your visit?',
        options: [
          { text: 'Respect their feline independence: simply let them be at their own pace, offering a soft head pet only if they approach first.', correct: true },
          { text: 'Call them, follow them around, or pick them up like puppies.', correct: false }
        ],
        feedbackCorrect: 'Exactly! Because cats are independent and sensitive, letting them be without forcing interaction helps them feel completely at ease.',
        feedbackWrong: 'Unlike dogs, cats are independent and feel stressed when forced to interact. The kindest approach is simply to let them be.'
      },
      {
        q: '3. While you are eating, Killua looks curious. Since she doesn’t have IBD like Mikorin, can you give her a tiny bite?',
        options: [
          { text: 'No—neither cat gets human food (Mikorin for her IBD health, and Killua out of fairness and solidarity with her sister!).', correct: true },
          { text: 'Yes, Killua can have table scraps.', correct: false }
        ],
        feedbackCorrect: 'Correct! Zero human food for both—keeping Mikorin safe and keeping things 100% fair between sisters!',
        feedbackWrong: 'No table scraps for either sister! That keeps Mikorin healthy and keeps things fair for Killua too.'
      }
    ],

    routineEyebrow: '🕒 Everyday Care',
    routineTitle: 'Daily Routine',
    routineSubtitle: 'How their automatic feeder, fresh water stations, litter box, and playtime routines work.',
    routineBannerTitle: 'Their daily corner with "Gordon" & fresh water fountains',
    routineBannerText:
      'Their meal times are automated and they have two fresh water stations around the house. If you are helping look after them while we are away, here is every step laid out clearly.',
    routineTabs: [
      { id: 'feeding', label: '🍽️ Feeding ("Gordon")' },
      { id: 'water', label: '💧 Water' },
      { id: 'litter', label: '🧹 Litter Box' },
      { id: 'comfort', label: '🧸 Play & "Cuencos"' }
    ],
    routineContent: {
      feeding: {
        title: '🍽️ Automatic Feeding with "Gordon"',
        items: [
          'Their portions drop automatically on a schedule from <strong>"Gordon"</strong> (their automatic feeder).',
          'Refill the top container to <strong>70% once a week</strong> (using exclusively their hydrolyzed kibble).',
          '<strong>Metal bowls:</strong> wash once a week.',
          '<strong>Tip for Killua:</strong> If she meows anxiously near Gordon, place <strong>4 extra kibbles in each bowl</strong>.',
          '<strong>⚡ During a power outage:</strong> Gordon has backup batteries, but please verify that portions continue to drop.'
        ],
        gordonBoxTitle: '🤖 Manual Portion on "Gordon" (Power Outage Backup)',
        gordonBoxText: 'If rations don’t drop during a power outage, dispense a manual portion with a FAST DOUBLE-CLICK on the first button (from left to right).',
        gordonBtnLabel: '🔘 Test Fast Double-Click (1st Button Left → Right)',
        gordonSuccessMsg: '✅ Manual portion dispensed! Remember: fast double-click on the first button from left to right.'
      },
      water: {
        title: '💧 Fresh Water Every Day',
        items: [
          '<strong>Refill daily</strong> at both water stations (next to Gordon and in the living room).',
          '<strong>Replace all water completely</strong> at least <strong>every 2 days</strong>.',
          '<strong>Wash the bowls and water pitcher/container</strong> once a week.'
        ]
      },
      litter: {
        title: '🧹 Litter Box Care',
        items: [
          '<strong>Frequency:</strong> Scoop and clean the litter box (in the office) at least <strong>every 2 days (maximum)</strong>.',
          '<strong>Disposal:</strong> Tie used bags securely and toss them into the <strong>grey lidded trash bin underneath the kitchen sink</strong>.',
          '<strong>Scoop hygiene:</strong> Wash the scoop on the utility washing stone (piedra de lavar) with the <strong>blue brush</strong> every 3 days (or at least weekly).'
        ]
      },
      comfort: {
        title: '🧸 Playtime & "Bowl-Shaped" Blankets',
        items: [
          '<strong>Toy balls:</strong> Feel free to leave their little balls on the floor or bed.',
          '<strong>⚠️ Colorful ribbon/strip toy:</strong> Use <strong>ONLY under supervision</strong> (and put it away afterward, as Mikorin tries to swallow the ribbons).',
          '<strong>🛏️ "Bowl-shaped" blankets ("cuencos"):</strong> On the master bed, their blankets are shaped like cozy craters/bowls. When making or shaking out the bed, please <strong>reshape them back into bowls</strong>.'
        ]
      }
    },

    checklistTitle: '✅ Care Checklist',
    checklistReset: 'Reset',
    checklistProgressText: (done, total) => `${done} of ${total} completed`,
    checklistSub: 'Helping care for them? Check off daily and weekly tasks here:',
    checklistTasks: [
      { id: 'c1', text: '💧 Refill both water stations (Daily)' },
      { id: 'c2', text: '🛏️ Keep master bed blankets shaped like cozy "bowls" (Daily)' },
      { id: 'c3', text: '🚪 Check rooms before closing any doors (Daily)' },
      { id: 'c4', text: '💧 Replace all water completely in both stations (Every 2 days)' },
      { id: 'c5', text: '🧹 Clean office litter box & toss bag in grey bin under kitchen sink (Max every 2 days)' },
      { id: 'c6', text: '🪣 Wash scoop on the washing stone with the blue brush (Every 3–7 days)' },
      { id: 'c7', text: '🍽️ Refill "Gordon" to 70% & wash food/water bowls (Weekly)' }
    ],

    locatorEyebrow: '🗺️ Quick House Map',
    locatorTitle: 'Where Everything Is & Where They Hide',
    locatorSubtitle: 'Quick room-by-room reference to find their supplies and know Killua’s favorite quiet hiding spots.',
    rooms: [
      {
        icon: '🛏️',
        name: 'Master Bedroom',
        items: [
          '<strong>Master bed:</strong> "Bowl-shaped" blankets where both girls sleep at night.',
          '<strong>Floor & bed:</strong> Little toy balls.'
        ]
      },
      {
        icon: '💻',
        name: 'Office',
        items: [
          '<strong>Main Litter Box:</strong> Located here.',
          '<strong>2nd shelf of bookcase (by litter box):</strong> Waste bags.',
          '<strong>Under desks & office chairs:</strong> Killua’s favorite quiet refuge.'
        ]
      },
      {
        icon: '🛋️',
        name: 'Living & Dining Room',
        items: [
          '<strong>"Gordon" Automatic Feeder:</strong> Metal bowls & Water Station #1.',
          '<strong>By the scratching couch (Living Room):</strong> Water Station #2.',
          '<strong>Dining Table:</strong> High spot Mikorin sometimes asks for help getting down from.'
        ]
      },
      {
        icon: '🧳',
        name: 'Guest Room',
        items: [
          '<strong>Closet:</strong> Extra waste bags + shelves where Killua likes to rest.',
          '<strong>Under the bed:</strong> Killua’s hiding spot (always check before closing the door).'
        ]
      },
      {
        icon: '🚰',
        name: 'Kitchen & Utility Area',
        items: [
          '<strong>Underneath kitchen sink:</strong> Grey lidded bin for used litter bags.',
          '<strong>Washing stone (Utility):</strong> Dedicated blue brush for washing the litter scoop.'
        ]
      }
    ],

    hazardsEyebrow: '🛡️ Household Safety & Prevention',
    hazardsTitle: 'Dangerous Items, Foods & Plants',
    hazardsSubtitle: 'Here in one single place are their specific household object precautions and our searchable toxic items guide.',
    hazardPersonalPills: [
      { sticker: 'mikorin_wink', text: 'Mikorin: Tuck away hair ties, cords, earphones & strings' },
      { sticker: 'killua_curious', text: 'Killua: Tuck away plastic bags & wrappers' }
    ],
    hazardsSpotlightTitle: 'Why keeping hair ties, cords, and plastics tucked away matters so much',
    hazardsSpotlightDesc:
      'Each sister has a specific curiosity: Mikorin is drawn to string-like objects (hair ties, charging cords, wired earphones, threads) and tries to swallow them, while Killua loves chewing plastic bags and wrappers. Keeping these inside drawers or bags keeps both girls safe.',
    hazardSearchPlaceholder: '🔍 Search (e.g., hair ties, earphones, plastic, chocolate, lily, ibuprofen)...',
    hazardCategories: [
      { id: 'all', label: 'All' },
      { id: 'personal', label: '⚡ Hair Ties, Cords & Plastics' },
      { id: 'food', label: '🍫 Foods' },
      { id: 'plants', label: '🌿 Plants' },
      { id: 'cleaners', label: '🧴 Cleaners & Meds' }
    ],
    hazardsList: [
      {
        cat: 'personal',
        title: '🧶 Hair ties, rubber bands, cords, earphones, threads, yarn, pins & needles',
        desc: 'Special risk for Mikorin: she tries to swallow string-like items, which can cause a severe intestinal blockage.'
      },
      {
        cat: 'personal',
        title: '🛍️ Plastic bags, cellophane & wrappers',
        desc: 'Special risk for Killua: she loves chewing plastics, posing a choking or blockage risk.'
      },
      {
        cat: 'food',
        title: '🍫 Chocolate, onion, garlic, grapes, raisins & avocado',
        desc: 'Highly toxic to cats even in small amounts.'
      },
      {
        cat: 'food',
        title: '☕ Alcohol, coffee, tea, dairy & raw or seasoned food',
        desc: 'Harmful to their digestive and nervous systems (remember: zero human food for both girls!).'
      },
      {
        cat: 'plants',
        title: '🌸 Lilies, azaleas & tulips',
        desc: 'Lilies cause fatal acute kidney failure in cats—even from a few grains of pollen.'
      },
      {
        cat: 'plants',
        title: '🪴 Poinsettia (nochebuena), dieffenbachia & aloe vera',
        desc: 'Toxic ornamental plants if chewed or licked.'
      },
      {
        cat: 'cleaners',
        title: '🧼 Bleach, disinfectants, concentrated soaps & insecticides',
        desc: 'Harmful by inhalation or if they walk on treated surfaces and groom their paws.'
      },
      {
        cat: 'cleaners',
        title: '💊 Human medications (acetaminophen/paracetamol, ibuprofen) & essential oils',
        desc: 'Extremely toxic to a cat’s liver and nervous system.'
      }
    ],

    emergencyEyebrow: '🩺 Health & Well-Being',
    emergencyTitle: 'Warning Signs & Veterinary Contact',
    emergencySubtitle:
      'Both girls are deeply loved and sensitive. If you notice any change in their mood, appetite, or digestion, please let us know and contact their veterinary clinic right away.',
    triageTitle: '⚠️ Warning Signs to Watch For',
    triageGroups: [
      {
        who: '🟡 In Mikorin',
        items: [
          'Vomiting more than once a day, a rigid abdomen, or signs of pain.',
          'Loss of appetite or unusual hiding.'
        ]
      },
      {
        who: '🟠 In Killua',
        items: [
          'Refusing food, excessive meowing, or rapid/labored breathing.',
          'Extended isolation without coming out to eat.'
        ]
      },
      {
        who: '🔴 In Either Cat',
        items: [
          'Liquid or bloody diarrhea.',
          'Urinating outside the litter box or not urinating for 24 hours.',
          'Watery eyes, thick saliva, or pale/bright-red gums.',
          'Extreme lethargy or weakness.'
        ]
      }
    ],
    triageActionTitle: '📋 How to respond:',
    triageActionText:
      'If mild, monitor closely and let us know; if symptoms persist or involve fluids, take a photo for medical reference and message the clinic via WhatsApp. For urgent cases, head straight to Veterinaria Meztli.',
    vetBadge: '🚨 VETERINARY CONTACT',
    vetName: 'Clínica Veterinaria Meztli',
    vetNote: 'Trusted veterinary care for Mikorin & Killua in Santiago de Querétaro:',
    vetDoctorLabel: 'Dr. Brida',
    vetReceptionLabel: 'Reception (appointments & orders)',
    vetAddressLabel: 'Address',
    vetAddress: 'Av. Paseo de la Constitución 115, Villas del Parque, 76140 Santiago de Querétaro, Qro.',
    vetWhatsappBtn: '💬 WhatsApp Dr. Brida',
    vetCallReceptionBtn: '📞 Call Reception',
    vetMapsBtn: '📍 Open Location in Google Maps',

    pledgeEyebrow: '💌 Thank You for Caring!',
    pledgeTitle: 'Quick Stay Confirmation',
    pledgeSubtitle: 'Check the 4 key points below and send us a quick WhatsApp message so we know you’re all set.',
    pledgeIntro: 'I confirm that I read the guide for living harmoniously with Mikorin & Killua:',
    pledgeItems: [
      {
        id: 'p1',
        text: '🐾 I will respect their feline independence and their bond as Emotional Support Animals, letting them be at their own pace.'
      },
      {
        id: 'p2',
        text: '🌙 I understand they sleep exclusively in the master bedroom, and I will check my room before bedtime (and any door before closing it).'
      },
      {
        id: 'p3',
        text: '🍽️ I won’t give either cat extra food (for Mikorin’s IBD health and out of fairness to Killua!) and will keep hair ties, cords, earphones, and plastics tucked away.'
      },
      {
        id: 'p4',
        text: '🤫 I will help keep a calm, quiet environment for Killua and let you know right away if I notice any health warning signs.'
      }
    ],
    pledgeNamePlaceholder: 'Your name (optional)...',
    pledgeWhatsappBtn: '💬 Confirm via WhatsApp',
    pledgeCopyBtn: '📋 Copy Message',
    pledgeWarningMsg: '⚠️ Please check all 4 boxes before sending your confirmation.',
    pledgeSuccessBadge: '🏅 Thank you so much for your kindness and care toward Mikorin & Killua!',
    pledgeCopiedToast: '✅ Message copied to clipboard!',
    pledgeWhatsappMessage: name =>
      `Hi! 🐾 This is ${name || 'your house guest'}. I just read Mikorin & Killua’s Care & Cohabitation Guide ✨. You can count on me to respect their independence and space, always check rooms before closing doors or heading to sleep, give zero extra food (for Mikorin’s health and out of fairness to Killua!), and keep hair ties, cords, and plastics tucked away. Thank you for the warm welcome!`,

    footerText: '🐾 Mikorin & Killua Cohabitation & Care Guide • Made with love'
  }
};

function getSectionDividerHTML() {
  return `${getCatStickerSVG('paw', 28)} <span>✦</span> ${getCatStickerSVG('bluemoon', 28)} <span>✦</span> ${getCatStickerSVG('paw', 28)}`;
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('mk_guide_lang', lang);
  document.documentElement.lang = lang;

  document.getElementById('langEs').classList.toggle('active', lang === 'es');
  document.getElementById('langEn').classList.toggle('active', lang === 'en');

  renderAll();
}

function togglePhoto(target) {
  photoMode[target] = photoMode[target] === 'anime' ? 'real' : 'anime';
  renderWelcome();
  renderCatsAndCohabitation();
}

function toggleAllPhotos() {
  const nextMode = photoMode.mikorin === 'anime' ? 'real' : 'anime';
  photoMode.hero = nextMode;
  photoMode.mikorin = nextMode;
  photoMode.killua = nextMode;
  renderWelcome();
  renderCatsAndCohabitation();
}

function toggleEsaExpand() {
  esaExpandOpen = !esaExpandOpen;
  renderCatsAndCohabitation();
}

function answerQuiz(qIdx, isCorrect) {
  const fb = document.getElementById(`quiz-fb-${qIdx}`);
  const qObj = i18n[currentLang].quizQuestions[qIdx];
  fb.className = `quiz-feedback show ${isCorrect ? 'correct' : 'wrong'}`;
  fb.textContent = isCorrect ? qObj.feedbackCorrect : qObj.feedbackWrong;
}

function renderWelcome() {
  const t = i18n[currentLang];
  document.getElementById('brandStickerSlot').innerHTML = getCatStickerSVG('mikorin', 38);
  document.getElementById('brandSub').textContent = t.brandSub;

  document.getElementById('navLinks').innerHTML = t.nav
    .map(
      item =>
        `<a href="${item.href}" class="nav-link ${currentActiveSection === item.href ? 'active' : ''}" data-nav-link="${item.href}">${item.label}</a>`
    )
    .join('');

  const allInAnime = photoMode.mikorin === 'anime';
  document.getElementById('globalArtToggleBtn').textContent = allInAnime
    ? t.globalArtBtnToReal
    : t.globalArtBtnToAnime;
  document.getElementById('emergencyNavBtn').textContent = t.emergencyNav;

  document.getElementById('welcomeStickerRow').innerHTML = t.welcomeStickers
    .map(
      s => `
      <span class="cat-sticker-pill">
        ${getCatStickerSVG(s.type, 34)}
        <span>${s.label}</span>
      </span>
    `
    )
    .join('');

  document.getElementById('welcomeTitle').innerHTML = t.welcomeTitle;
  document.getElementById('welcomeLead').textContent = t.welcomeLead;
  document.getElementById('guidePurposeTitle').textContent = t.guidePurposeTitle;
  document.getElementById('guidePurposeText').textContent = t.guidePurposeText;

  document.getElementById('generalInfoPills').innerHTML = t.generalInfoPills
    .map(p => `<span class="info-pill">${p}</span>`)
    .join('');

  document.getElementById('welcomePrimaryBtn').textContent = t.welcomePrimaryBtn;
  document.getElementById('welcomeSecondaryBtn').textContent = t.welcomeSecondaryBtn;

  document.getElementById('heroCornerSticker').innerHTML = getCatStickerSVG('mikorin_wink', 54);

  const isAnime = photoMode.hero === 'anime';
  document.getElementById('heroImg').src = isAnime
    ? 'assets/frieren-house-welcome.jpg'
    : 'assets/hero-cats-real.jpg';
  document.getElementById('heroImgCaption').textContent = isAnime
    ? t.heroCaptionAnime
    : t.heroCaptionReal;
  document.getElementById('heroPhotoToggle').textContent = isAnime
    ? t.toggleToReal
    : t.toggleToAnime;

  document.getElementById('scopeTitle').textContent = t.scopeTitle;
  document.getElementById('scopeObjective').textContent = t.scopeObjective;
  document.getElementById('scopeGrid').innerHTML = t.scopeCards
    .map(
      c => `
      <a href="${c.href}" class="scope-chip-card">
        <strong>${c.title}</strong>
        <span>${c.sub}</span>
      </a>
    `
    )
    .join('');
}

function renderCatsAndCohabitation() {
  const t = i18n[currentLang];
  document.getElementById('catsEyebrow').textContent = t.catsEyebrow;
  document.getElementById('catsTitle').textContent = t.catsTitle;
  document.getElementById('catsDivider').innerHTML = getSectionDividerHTML();
  document.getElementById('catsSubtitle').textContent = t.catsSubtitle;

  // 1. Character Dossiers with 1:1 Square Frieren Watercolor Portraits & Real Photos
  document.getElementById('catsGrid').innerHTML = t.catsData
    .map(cat => {
      const isAnime = photoMode[cat.id] === 'anime';
      const imgSrc = isAnime ? cat.animeImg : cat.realImg;
      const btnText = isAnime ? t.toggleToReal : t.toggleToAnime;
      return `
        <article class="cat-dossier ${cat.id}">
          <div class="cat-top-banner">
            <img src="${imgSrc}" alt="${cat.name}" />
            <div class="cat-sticker-badge">
              <span class="cat-sticker-pill">
                ${getCatStickerSVG(cat.stickerType || cat.id, 36)}
                <span>${cat.stickerText}</span>
              </span>
            </div>
            <button type="button" class="cat-mode-switch" onclick="togglePhoto('${cat.id}')">${btnText}</button>
          </div>
          <div class="cat-body">
            <div class="cat-name-row">
              <div class="cat-name-wrap">
                ${getCatStickerSVG(cat.id, 42)}
                <h3 class="cat-name">${cat.name}</h3>
              </div>
              <span class="cat-age-pill">${cat.age}</span>
            </div>
            <div class="cat-quick-traits">
              ${cat.traits.map(tr => `<span class="trait-chip">${tr}</span>`).join('')}
            </div>
            <div class="cat-alert-box ${cat.alertType}">
              <h4>${cat.alertTitle}</h4>
              <p>${cat.alertText}</p>
            </div>
            <ul class="cat-detail-list">
              ${cat.details.map(d => `<li>${d}</li>`).join('')}
            </ul>
            <div class="touch-guide-box">
              <div class="touch-guide-title">${cat.touchTitle}</div>
              <div class="touch-zones">
                <div class="zone-pill ok">${cat.touchOk}</div>
                <div class="zone-pill no">${cat.touchNo}</div>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join('');

  // 2. Protagonist Cohabitation Rules Box + Text-Free Frieren Dual Scenes
  document.getElementById('cohabitationRulesBox').innerHTML = `
    <div style="text-align:center; max-width: 720px; margin: 0 auto;">
      <span class="section-eyebrow">${t.cohabBadge}</span>
      <h3 style="font-family: var(--font-display); font-size: 1.65rem; margin-bottom: 0.4rem;">${t.cohabTitle}</h3>
      <p style="color: var(--text-muted); font-size: 0.94rem;">${t.cohabSub}</p>
    </div>
    <div class="cohab-rules-grid">
      ${t.cohabRules
        .map(
          r => `
        <div class="cohab-rule-card">
          <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom: 0.45rem;">
            <span class="rule-tag" style="margin-bottom:0;">${r.tag}</span>
            ${getCatStickerSVG(r.sticker, 34)}
          </div>
          <h4>${r.title}</h4>
          <p>${r.text}</p>
        </div>
      `
        )
        .join('')}
    </div>
    <div class="cohab-scenes-banner">
      ${t.cohabScenes
        .map(
          sc => `
        <div class="cohab-scene-card">
          <img src="${sc.img}" alt="${sc.caption}" />
          <div class="cohab-scene-caption">
            ${getCatStickerSVG(sc.sticker, 32)}
            <span>${sc.caption}</span>
          </div>
        </div>
      `
        )
        .join('')}
    </div>
  `;

  // 3. Harmonious In-Between ESA Context Card
  document.getElementById('esaInterludeCard').innerHTML = `
    <div class="esa-interlude-grid">
      <div class="esa-interlude-art">
        <img src="assets/frieren-cats-scene.jpg" alt="Frieren-style watercolor illustration of Mikorin and Killua resting peacefully" />
      </div>
      <div>
        <span class="section-eyebrow" style="background: var(--accent-lavender-light); color: var(--accent-lavender-deep); border-color: var(--border-lavender);">
          ${t.esaNoteBadge}
        </span>
        <h3 style="font-family: var(--font-display); font-size: 1.45rem; margin-bottom: 0.5rem; color: var(--text-main);">
          ${t.esaNoteTitle}
        </h3>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 0.85rem;">
          ${t.esaNoteText}
        </p>
        <ul class="cat-detail-list">
          ${t.esaNoteBullets.map(b => `<li>${b}</li>`).join('')}
        </ul>
        <button type="button" class="esa-more-btn" onclick="toggleEsaExpand()">
          ${esaExpandOpen ? t.esaExpandBtnOpen : t.esaExpandBtnClosed}
        </button>
      </div>
    </div>

    <div class="esa-expand-drawer ${esaExpandOpen ? 'open' : ''}">
      <div class="esa-mini-cards">
        ${t.esaMiniCards
          .map(
            c => `
          <div class="esa-mini-card">
            <h5>${c.title}</h5>
            <p>${c.text}</p>
          </div>
        `
          )
          .join('')}
      </div>
      <p style="font-weight: 700; font-size: 0.92rem; margin-bottom: 0.75rem; color: var(--accent-lavender-deep);">
        ${t.quizIntro}
      </p>
      <div class="quiz-grid">
        ${t.quizQuestions
          .map(
            (q, idx) => `
          <div class="quiz-card">
            <div class="quiz-question">${q.q}</div>
            <div class="quiz-options">
              ${q.options
                .map(
                  opt => `
                <button type="button" class="quiz-opt-btn" onclick="answerQuiz(${idx}, ${opt.correct})">
                  ${opt.text}
                </button>
              `
                )
                .join('')}
            </div>
            <div id="quiz-fb-${idx}" class="quiz-feedback"></div>
          </div>
        `
          )
          .join('')}
      </div>
    </div>
  `;
}

function setRoutineTab(tabId) {
  activeRoutineTab = tabId;
  renderRoutine();
}

function triggerGordonSim() {
  const msgEl = document.getElementById('gordonSimMsg');
  if (msgEl) {
    msgEl.style.display = 'block';
  }
}

function toggleCheckItem(id) {
  checklistState[id] = !checklistState[id];
  localStorage.setItem('mk_checklist_state', JSON.stringify(checklistState));
  renderRoutine();
}

function resetChecklist() {
  Object.keys(checklistState).forEach(k => delete checklistState[k]);
  localStorage.setItem('mk_checklist_state', JSON.stringify(checklistState));
  renderRoutine();
}

function renderRoutine() {
  const t = i18n[currentLang];
  document.getElementById('routineEyebrow').textContent = t.routineEyebrow;
  document.getElementById('routineTitle').textContent = t.routineTitle;
  document.getElementById('routineDivider').innerHTML = getSectionDividerHTML();
  document.getElementById('routineSubtitle').textContent = t.routineSubtitle;

  document.getElementById('routineHeroBanner').innerHTML = `
    <div class="routine-banner-inner">
      <div class="routine-banner-art">
        <img src="assets/frieren-routine-gordon.jpg" alt="Frieren watercolor illustration of Killua and Mikorin by their automatic feeder Gordon and water station" />
      </div>
      <div>
        <div style="display:flex; align-items:center; gap:0.55rem; margin-bottom:0.5rem;">
          ${getCatStickerSVG('killua', 38)}
          ${getCatStickerSVG('mikorin', 38)}
          <span class="info-pill">Gordon + 2 Estaciones de Agua</span>
        </div>
        <h3 style="font-family: var(--font-display); font-size: 1.4rem; margin-bottom: 0.45rem;">${t.routineBannerTitle}</h3>
        <p style="font-size: 0.92rem; color: var(--text-muted);">${t.routineBannerText}</p>
      </div>
    </div>
  `;

  document.getElementById('routineTabs').innerHTML = t.routineTabs
    .map(
      tab => `
      <button type="button" class="routine-tab-btn ${activeRoutineTab === tab.id ? 'active' : ''}" onclick="setRoutineTab('${tab.id}')">
        ${tab.label}
      </button>
    `
    )
    .join('');

  const data = t.routineContent[activeRoutineTab];
  let extraHtml = '';
  if (activeRoutineTab === 'feeding') {
    extraHtml = `
      <div class="gordon-helper">
        <h4 style="font-size: 0.95rem; margin-bottom: 0.3rem; color: var(--accent-sage-deep);">${data.gordonBoxTitle}</h4>
        <p style="font-size: 0.87rem; color: var(--text-main);">${data.gordonBoxText}</p>
        <button type="button" class="gordon-btn-sim" onclick="triggerGordonSim()">${data.gordonBtnLabel}</button>
        <div id="gordonSimMsg" style="display:none; margin-top: 0.6rem; font-weight: 700; font-size: 0.85rem; color: var(--accent-sage-deep);">
          ${data.gordonSuccessMsg}
        </div>
      </div>
    `;
  }

  document.getElementById('routinePanel').innerHTML = `
    <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 0.9rem;">${data.title}</h3>
    <ul class="cat-detail-list">
      ${data.items.map(item => `<li>${item}</li>`).join('')}
    </ul>
    ${extraHtml}
  `;

  const totalTasks = t.checklistTasks.length;
  const doneTasks = t.checklistTasks.filter(task => !!checklistState[task.id]).length;
  const pct = totalTasks ? Math.round((doneTasks / totalTasks) * 100) : 0;

  document.getElementById('checklistTitle').textContent = t.checklistTitle;
  document.getElementById('checklistProgressPill').textContent = t.checklistProgressText(doneTasks, totalTasks);
  document.getElementById('checklistProgressFill').style.width = `${pct}%`;
  document.getElementById('checklistResetBtn').textContent = t.checklistReset;
  document.getElementById('checklistSub').textContent = t.checklistSub;

  document.getElementById('checklistItems').innerHTML = t.checklistTasks
    .map(task => {
      const done = !!checklistState[task.id];
      return `
        <label class="check-item ${done ? 'done' : ''}">
          <input type="checkbox" ${done ? 'checked' : ''} onchange="toggleCheckItem('${task.id}')" />
          <span>${task.text}</span>
        </label>
      `;
    })
    .join('');
}

function renderLocator() {
  const t = i18n[currentLang];
  document.getElementById('locatorEyebrow').textContent = t.locatorEyebrow;
  document.getElementById('locatorTitle').textContent = t.locatorTitle;
  document.getElementById('locatorDivider').innerHTML = getSectionDividerHTML();
  document.getElementById('locatorSubtitle').textContent = t.locatorSubtitle;

  document.getElementById('locatorGrid').innerHTML = t.rooms
    .map(
      r => `
      <div class="room-card">
        <div class="room-icon">${r.icon}</div>
        <h4>${r.name}</h4>
        <ul class="room-items">
          ${r.items.map(i => `<li>• ${i}</li>`).join('')}
        </ul>
      </div>
    `
    )
    .join('');
}

function setHazardCategory(catId) {
  activeHazardCategory = catId;
  renderHazards();
}

function renderHazards() {
  const t = i18n[currentLang];
  document.getElementById('hazardsEyebrow').textContent = t.hazardsEyebrow;
  document.getElementById('hazardsTitle').textContent = t.hazardsTitle;
  document.getElementById('hazardsDivider').innerHTML = getSectionDividerHTML();
  document.getElementById('hazardsSubtitle').textContent = t.hazardsSubtitle;

  document.getElementById('hazardPersonalBadges').innerHTML = t.hazardPersonalPills
    .map(
      p => `
      <span class="cat-sticker-pill">
        ${getCatStickerSVG(p.sticker, 34)}
        <span>${p.text}</span>
      </span>
    `
    )
    .join('');

  document.getElementById('hazardsSpotlightTitle').textContent = t.hazardsSpotlightTitle;
  document.getElementById('hazardsSpotlightDesc').textContent = t.hazardsSpotlightDesc;

  const searchInput = document.getElementById('hazardSearchInput');
  if (searchInput.placeholder !== t.hazardSearchPlaceholder) {
    searchInput.placeholder = t.hazardSearchPlaceholder;
  }
  const query = (searchInput.value || '').trim().toLowerCase();

  document.getElementById('hazardFilterPills').innerHTML = t.hazardCategories
    .map(
      c => `
      <button type="button" class="hazard-pill-btn ${activeHazardCategory === c.id ? 'active' : ''}" onclick="setHazardCategory('${c.id}')">
        ${c.label}
      </button>
    `
    )
    .join('');

  const filtered = t.hazardsList.filter(item => {
    const matchesCat = activeHazardCategory === 'all' || item.cat === activeHazardCategory;
    const matchesQuery =
      !query ||
      item.title.toLowerCase().includes(query) ||
      item.desc.toLowerCase().includes(query);
    return matchesCat && matchesQuery;
  });

  document.getElementById('hazardCardsGrid').innerHTML = filtered
    .map(
      h => `
      <div class="hazard-item-card">
        <h5>${h.title}</h5>
        <p>${h.desc}</p>
      </div>
    `
    )
    .join('');
}

function renderEmergency() {
  const t = i18n[currentLang];
  document.getElementById('emergencyEyebrow').textContent = t.emergencyEyebrow;
  document.getElementById('emergencyTitle').textContent = t.emergencyTitle;
  document.getElementById('emergencyDivider').innerHTML = getSectionDividerHTML();
  document.getElementById('emergencySubtitle').textContent = t.emergencySubtitle;

  document.getElementById('triageCard').innerHTML = `
    <h3 style="font-family: var(--font-display); font-size: 1.35rem; margin-bottom: 0.9rem;">${t.triageTitle}</h3>
    ${t.triageGroups
      .map(
        g => `
      <div class="symptom-group">
        <h4>${g.who}</h4>
        <ul>
          ${g.items.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    `
      )
      .join('')}
    <div style="background: var(--bg-sage-wash); border-left: 4px solid var(--accent-sage); padding: 0.85rem 1rem; border-radius: 12px; margin-top: 0.9rem;">
      <strong style="display:block; margin-bottom: 0.2rem; color: var(--accent-sage-deep);">${t.triageActionTitle}</strong>
      <span style="font-size: 0.88rem;">${t.triageActionText}</span>
    </div>
  `;

  document.getElementById('vetCard').innerHTML = `
    <div>
      <span class="vet-badge">${t.vetBadge}</span>
      <h3 class="vet-name">${t.vetName}</h3>
      <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.4rem;">${t.vetNote}</p>
    </div>

    <div class="vet-contact-list">
      <div class="vet-contact-item">
        <small>${t.vetDoctorLabel}</small>
        <strong>+52 1 442 411 2494</strong>
      </div>
      <div class="vet-contact-item">
        <small>${t.vetReceptionLabel}</small>
        <strong>+52 1 442 482 0011</strong>
      </div>
      <div class="vet-contact-item">
        <small>${t.vetAddressLabel}</small>
        <strong>${t.vetAddress}</strong>
      </div>
    </div>

    <div class="vet-actions">
      <a href="https://wa.me/5214424112494" target="_blank" rel="noopener" class="vet-btn whatsapp">
        ${t.vetWhatsappBtn}
      </a>
      <a href="tel:+5214424820011" class="vet-btn call">
        ${t.vetCallReceptionBtn}
      </a>
      <a href="https://share.google/CxddAxMBKUzKheVU8" target="_blank" rel="noopener" class="vet-btn maps">
        ${t.vetMapsBtn}
      </a>
    </div>
  `;

  document.getElementById('footerContent').innerHTML = `<p>${t.footerText}</p>`;
}

function togglePledgeItem(id) {
  pledgeState[id] = !pledgeState[id];
  localStorage.setItem('mk_pledge_state', JSON.stringify(pledgeState));
  renderPledge();
}

function updateGuestName(val) {
  pledgeState.guestName = val;
  localStorage.setItem('mk_pledge_state', JSON.stringify(pledgeState));
}

function allPledgeChecked() {
  return !!(pledgeState.p1 && pledgeState.p2 && pledgeState.p3 && pledgeState.p4);
}

function sendPledgeWhatsApp() {
  const t = i18n[currentLang];
  const feedbackEl = document.getElementById('pledgeFeedbackBox');
  if (!allPledgeChecked()) {
    feedbackEl.className = 'pledge-badge-unlocked show';
    feedbackEl.style.background = '#FCEEEF';
    feedbackEl.style.borderColor = '#F0CDD4';
    feedbackEl.style.color = '#944252';
    feedbackEl.textContent = t.pledgeWarningMsg;
    return;
  }

  feedbackEl.className = 'pledge-badge-unlocked show';
  feedbackEl.style.background = '';
  feedbackEl.style.borderColor = '';
  feedbackEl.style.color = '';
  feedbackEl.textContent = t.pledgeSuccessBadge;

  const msg = encodeURIComponent(t.pledgeWhatsappMessage((pledgeState.guestName || '').trim()));
  window.open(`https://wa.me/?text=${msg}`, '_blank', 'noopener');
}

function copyPledgeMessage() {
  const t = i18n[currentLang];
  const feedbackEl = document.getElementById('pledgeFeedbackBox');
  if (!allPledgeChecked()) {
    feedbackEl.className = 'pledge-badge-unlocked show';
    feedbackEl.style.background = '#FCEEEF';
    feedbackEl.style.borderColor = '#F0CDD4';
    feedbackEl.style.color = '#944252';
    feedbackEl.textContent = t.pledgeWarningMsg;
    return;
  }

  const rawMsg = t.pledgeWhatsappMessage((pledgeState.guestName || '').trim());
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(rawMsg);
  }
  feedbackEl.className = 'pledge-badge-unlocked show';
  feedbackEl.style.background = '';
  feedbackEl.style.borderColor = '';
  feedbackEl.style.color = '';
  feedbackEl.textContent = t.pledgeCopiedToast;
}

function renderPledge() {
  const t = i18n[currentLang];
  document.getElementById('pledgeEyebrow').textContent = t.pledgeEyebrow;
  document.getElementById('pledgeTitle').textContent = t.pledgeTitle;
  document.getElementById('pledgeSubtitle').textContent = t.pledgeSubtitle;

  const isComplete = allPledgeChecked();

  document.getElementById('pledgeCard').innerHTML = `
    <p style="font-weight: 700; font-size: 0.98rem; color: var(--text-main);">${t.pledgeIntro}</p>
    <div class="pledge-checks">
      ${t.pledgeItems
        .map(item => {
          const checked = !!pledgeState[item.id];
          return `
            <label class="pledge-check-row ${checked ? 'checked' : ''}">
              <input type="checkbox" ${checked ? 'checked' : ''} onchange="togglePledgeItem('${item.id}')" />
              <span>${item.text}</span>
            </label>
          `;
        })
        .join('')}
    </div>

    <div class="pledge-form-row">
      <input
        type="text"
        class="pledge-input"
        placeholder="${t.pledgeNamePlaceholder}"
        value="${(pledgeState.guestName || '').replace(/"/g, '&quot;')}"
        oninput="updateGuestName(this.value)"
      />
      <button type="button" class="pledge-submit-btn" onclick="sendPledgeWhatsApp()">
        ${t.pledgeWhatsappBtn}
      </button>
      <button type="button" class="pledge-copy-btn" onclick="copyPledgeMessage()">
        ${t.pledgeCopyBtn}
      </button>
    </div>

    <div id="pledgeFeedbackBox" class="pledge-badge-unlocked ${isComplete ? 'show' : ''}">
      ${isComplete ? t.pledgeSuccessBadge : ''}
    </div>
  `;
}

function initScrollUX() {
  const progressBar = document.getElementById('scrollProgressBar');
  const backToTopBtn = document.getElementById('backToTopBtn');
  const sections = document.querySelectorAll('[data-nav-section]');

  window.addEventListener(
    'scroll',
    () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      if (progressBar) {
        progressBar.style.width = `${pct}%`;
      }
      if (backToTopBtn) {
        backToTopBtn.classList.toggle('visible', scrollTop > 480);
      }
    },
    { passive: true }
  );

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('data-nav-section');
            if (id) {
              currentActiveSection = id;
              document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.toggle('active', link.getAttribute('data-nav-link') === id);
              });
            }
          }
        });
      },
      { rootMargin: '-25% 0px -60% 0px', threshold: 0 }
    );
    sections.forEach(sec => observer.observe(sec));
  }
}

function renderAll() {
  renderWelcome();
  renderCatsAndCohabitation();
  renderRoutine();
  renderLocator();
  renderHazards();
  renderEmergency();
  renderPledge();
}

document.addEventListener('DOMContentLoaded', () => {
  setLanguage(currentLang);
  initScrollUX();
});
