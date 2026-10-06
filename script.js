document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. SISTEMA DE IDIOMA (i18n) PT / EN
  // ==========================================
  const translations = {
    pt: {
      navUniverse: "O Universo",
      navPortalGun: "Portal Gun",
      navCharacters: "Personagens",
      navFaq: "FAQ",
      btnActivatePortal: "Ativar Portal",
      heroBadge: "DIMENSÃO C-137",
      heroTitle: "Explore o Multiverso Cósmico",
      heroDesc: "Embarque nas viagens interdimensionais mais insanas da galáxia com Rick Sanchez e Morty Smith. Conheça seres alienígenas, realidades alternativas e segredos da Curva Central Finita.",
      btnViewChars: "Ver Personagens",
      btnLearnMore: "Saiba Mais",
      aboutTitle: "Sobre o Multiverso",
      aboutSub: "Tudo o que você precisa saber sobre a franquia e suas viagens interdimensionais.",
      card1Title: "Ciência Sem Limites",
      card1Desc: "De armas de portal a clonagem e naves espaciais feitas de lixo, a genialidade de Rick transcende a física convencional.",
      card2Title: "Realidades Infinitas",
      card2Desc: "A Curva Central Finita separa os universos onde Rick é o homem mais inteligente das infinitas outras realidades.",
      card3Title: "A Citadel dos Ricks",
      card3Desc: "Uma sociedade secreta criada por Ricks de centenas de dimensões para se protegerem do Conselho dos Ricks.",
      pgTitle: "Portal Gun: Interceptador",
      pgSub: "Dispare a arma de portal para entrar em outra dimensão e ouvir algo bizarro!",
      pgBtn: "Disparar Portal Gun",
      charTitle: "Explorador de Personagens",
      charSub: "Dados em tempo real diretamente da base de dados do Multiverso.",
      searchPlaceholder: "Buscar por nome do personagem...",
      filterAllStatus: "Todos os Status",
      filterAlive: "Vivo (Alive)",
      filterDead: "Morto (Dead)",
      filterUnknown: "Desconhecido",
      filterAllGender: "Todos os Gêneros",
      filterMale: "Masculino",
      filterFemale: "Feminino",
      filterGenderless: "Sem Gênero",
      btnLoadMore: "Carregar Mais Personagens",
      loadingText: "Sincronizando com os dados da API...",
      notFoundText: "Nenhum personagem encontrado nesta dimensão!",
      faqTitle: "Perguntas Frequentes",
      faqQ1: "O que significa 'Wubba Lubba Dub Dub'?",
      faqA1: "Na língua do povo de Birdperson, a frase se traduz como 'Eu estou em grande dor, por favor me ajude'.",
      faqQ2: "De onde os dados da galeria são carregados?",
      faqA2: "Eles são requisitados em tempo real da 'The Rick and Morty API' oficial usando Fetch API nativo do JavaScript.",
      faqQ3: "Qual a dimensão original do Rick C-137?",
      faqA3: "O Rick principal da série pertence originalmente à dimensão C-137, embora resida atualmente em outra realidade após os eventos da 1ª temporada.",
      footerText: "Desenvolvido com HTML, CSS e JavaScript puros.",
      footerCopy: "© 2026 Rick and Morty Fan Page. Dados via rickandmortyapi.com",
      modalSpecies: "Espécie",
      modalGender: "Gênero",
      modalOrigin: "Origem",
      modalLoc: "Localização Atual",
      modalEpisodes: "Aparições"
    },
    en: {
      navUniverse: "The Universe",
      navPortalGun: "Portal Gun",
      navCharacters: "Characters",
      navFaq: "FAQ",
      btnActivatePortal: "Activate Portal",
      heroBadge: "DIMENSION C-137",
      heroTitle: "Explore the Cosmic Multiverse",
      heroDesc: "Embark on the most insane interdimensional journeys in the galaxy with Rick Sanchez and Morty Smith. Meet alien beings, alternate realities, and secrets of the Finite Central Curve.",
      btnViewChars: "View Characters",
      btnLearnMore: "Learn More",
      aboutTitle: "About the Multiverse",
      aboutSub: "Everything you need to know about the franchise and its interdimensional journeys.",
      card1Title: "Unbound Science",
      card1Desc: "From portal guns to cloning and trash-built spaceships, Rick's genius transcends conventional physics.",
      card2Title: "Infinite Realities",
      card2Desc: "The Finite Central Curve separates the universes where Rick is the smartest man from infinite other realities.",
      card3Title: "The Citadel of Ricks",
      card3Desc: "A secret society created by Ricks from hundreds of dimensions to protect themselves from the Council of Ricks.",
      pgTitle: "Portal Gun: Interceptor",
      pgSub: "Fire the portal gun to enter another dimension and hear something wild!",
      pgBtn: "Fire Portal Gun",
      charTitle: "Character Explorer",
      charSub: "Real-time data straight from the Multiverse database.",
      searchPlaceholder: "Search character by name...",
      filterAllStatus: "All Statuses",
      filterAlive: "Alive",
      filterDead: "Dead",
      filterUnknown: "Unknown",
      filterAllGender: "All Genders",
      filterMale: "Male",
      filterFemale: "Female",
      filterGenderless: "Genderless",
      btnLoadMore: "Load More Characters",
      loadingText: "Syncing with API data...",
      notFoundText: "No characters found in this dimension!",
      faqTitle: "Frequently Asked Questions",
      faqQ1: "What does 'Wubba Lubba Dub Dub' mean?",
      faqA1: "In Birdperson's language, it translates to 'I am in great pain, please help me'.",
      faqQ2: "Where are the gallery characters fetched from?",
      faqA2: "They are fetched in real-time from the official 'The Rick and Morty API' using native JavaScript Fetch API.",
      faqQ3: "What is Rick C-137's original dimension?",
      faqA3: "The main Rick belongs originally to dimension C-137, though he currently resides in another reality after Season 1 events.",
      footerText: "Built with pure HTML, CSS, and JavaScript.",
      footerCopy: "© 2026 Rick and Morty Fan Page. Data via rickandmortyapi.com",
      modalSpecies: "Species",
      modalGender: "Gender",
      modalOrigin: "Origin",
      modalLoc: "Current Location",
      modalEpisodes: "Appearances"
    }
  };

  const quotes = {
    pt: [
      '"Eu transformei a mim mesmo em um picles, Morty! Sou o Picles Riiiiick!" — Rick Sanchez',
      '"Ninguém existe de propósito, ninguém pertence a lugar nenhum, todo mundo vai morrer. Vem ver TV." — Morty Smith',
      '"A vida é esforço e eu vou parar quando morrer!" — Jerry Smith',
      '"Existência é dor para um Meeseeks, Jerry!" — Mr. Meeseeks',
      '"O universo é basicamente um animal que pasta num universo comum." — Rick Sanchez',
      '"Às vezes a ciência é mais arte do que ciência. Muita gente não entende isso." — Rick Sanchez',
      '"Wubba Lubba Dub Dub!" — Rick Sanchez'
    ],
    en: [
      '"I turned myself into a pickle, Morty! I\'m Pickle Riiiiick!" — Rick Sanchez',
      '"Nobody exists on purpose. Nobody belongs anywhere. Everybody\'s gonna die. Come watch TV." — Morty Smith',
      '"Life is effort and I\'ll stop when I die!" — Jerry Smith',
      '"Existence is pain to a Meeseeks, Jerry!" — Mr. Meeseeks',
      '"The universe is basically an animal. It grazes on ordinary space." — Rick Sanchez',
      '"Sometimes science is more art than science. A lot of people don\'t get that." — Rick Sanchez',
      '"Wubba Lubba Dub Dub!" — Rick Sanchez'
    ]
  };

  let currentLang = localStorage.getItem('appLang') === 'en' ? 'en' : 'pt';
  let currentQuoteIndex = quotes.pt.length - 1; // começa em "Wubba Lubba Dub Dub!"

  const quoteDisplay = document.getElementById('quote-display');
  const searchInput = document.getElementById('search-input');

  function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('appLang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    document.querySelectorAll('[data-i18n]').forEach(elem => {
      const key = elem.getAttribute('data-i18n');
      if (translations[lang][key]) {
        elem.textContent = translations[lang][key];
      }
    });

    searchInput.placeholder = translations[lang].searchPlaceholder;

    document.getElementById('lang-current').textContent = lang.toUpperCase();
    document.getElementById('lang-next').textContent = lang === 'pt' ? 'EN' : 'PT';

    // Mantém a mesma frase, só traduzida
    quoteDisplay.textContent = quotes[lang][currentQuoteIndex];
  }

  document.getElementById('lang-toggle').addEventListener('click', () => {
    applyLanguage(currentLang === 'pt' ? 'en' : 'pt');
  });

  // ==========================================
  // 2. CANVAS CÓSMICO
  // ==========================================
  const canvas = document.getElementById('space-canvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const stars = Array.from({ length: 150 }, () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 0.4 + 0.1
  }));

  function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#ffffff';

    stars.forEach(star => {
      ctx.beginPath();
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
      ctx.fill();

      star.y += star.speed;
      if (star.y > canvas.height) {
        star.y = 0;
        star.x = Math.random() * canvas.width;
      }
    });

    requestAnimationFrame(animateStars);
  }
  animateStars();

  // ==========================================
  // 3. PORTAL GUN & GERADOR DE CITAÇÕES
  // ==========================================
  const btnFire = document.getElementById('btn-fire');
  const portalOverlay = document.getElementById('portal-transition');

  btnFire.addEventListener('click', () => {
    portalOverlay.classList.add('active');

    setTimeout(() => {
      currentQuoteIndex = Math.floor(Math.random() * quotes[currentLang].length);
      quoteDisplay.textContent = quotes[currentLang][currentQuoteIndex];
    }, 600);

    setTimeout(() => {
      portalOverlay.classList.remove('active');
    }, 1300);
  });

  // ==========================================
  // 4. API DE PERSONAGENS COM PAGINAÇÃO
  // ==========================================
  const container = document.getElementById('characters-container');
  const statusFilter = document.getElementById('status-filter');
  const genderFilter = document.getElementById('gender-filter');
  const btnLoadMore = document.getElementById('btn-load-more');

  let currentPage = 1;

  async function fetchCharacters(isNewSearch = true) {
    if (isNewSearch) {
      currentPage = 1;
      container.innerHTML = `<div class="loading">${translations[currentLang].loadingText}</div>`;
      btnLoadMore.style.display = 'none';
    }

    const params = new URLSearchParams({
      page: currentPage,
      name: searchInput.value.trim(),
      status: statusFilter.value,
      gender: genderFilter.value
    });

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?${params}`);
      if (!response.ok) throw new Error('Not found');

      const data = await response.json();

      if (isNewSearch) container.innerHTML = '';
      renderCharacters(data.results);

      btnLoadMore.style.display = data.info.next ? 'inline-block' : 'none';
    } catch (error) {
      container.innerHTML = `<div class="loading" style="color: #ef4444;">${translations[currentLang].notFoundText}</div>`;
      btnLoadMore.style.display = 'none';
    }
  }

  function renderCharacters(characters) {
    characters.forEach(char => {
      const card = document.createElement('div');
      card.className = 'char-card';
      const statusClass = `status-${char.status.toLowerCase()}`;

      card.innerHTML = `
        <img src="${char.image}" alt="${char.name}" loading="lazy">
        <div class="char-info">
          <h4>${char.name}</h4>
          <span class="status-badge ${statusClass}">${char.status} — ${char.species}</span>
        </div>
      `;

      card.addEventListener('click', () => openModal(char));
      container.appendChild(card);
    });
  }

  btnLoadMore.addEventListener('click', () => {
    currentPage++;
    btnLoadMore.textContent = translations[currentLang].loadingText;
    fetchCharacters(false).then(() => {
      btnLoadMore.textContent = translations[currentLang].btnLoadMore;
    });
  });

  let timer;
  searchInput.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => fetchCharacters(true), 400);
  });

  statusFilter.addEventListener('change', () => fetchCharacters(true));
  genderFilter.addEventListener('change', () => fetchCharacters(true));

  // ==========================================
  // 5. MODAL DETALHADO
  // ==========================================
  const modal = document.getElementById('char-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  function openModal(char) {
    const t = translations[currentLang];
    modalBody.innerHTML = `
      <div class="modal-detail">
        <img src="${char.image}" alt="${char.name}">
        <h2>${char.name}</h2>
        <p><strong>${t.modalSpecies}:</strong> ${char.species}</p>
        <p><strong>${t.modalGender}:</strong> ${char.gender}</p>
        <p><strong>${t.modalOrigin}:</strong> ${char.origin.name}</p>
        <p><strong>${t.modalLoc}:</strong> ${char.location.name}</p>
        <p><strong>${t.modalEpisodes}:</strong> ${char.episode.length}</p>
      </div>
    `;
    modal.classList.add('active');
  }

  modalClose.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // ==========================================
  // 6. ACCORDION FAQ & INICIALIZAÇÃO
  // ==========================================
  document.querySelectorAll('.faq-item').forEach(item => {
    item.querySelector('.faq-question').addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  applyLanguage(currentLang);
  fetchCharacters(true);
});