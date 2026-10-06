document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. CANVAS DE ESTRELAS CÓSMICAS
  // ==========================================
  const canvas = document.getElementById('space-canvas');
  const ctx = canvas.getContext('2d');

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  const stars = Array.from({ length: 160 }, () => ({
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
  // 2. SIMULADOR DE PORTAL COM EFEITO VISUAL MALUCO
  // ==========================================
  const quotes = [
    '"Eu transformei a mim mesmo em um picles, Morty! Sou o Picles Riiiiick!" — Rick Sanchez',
    '"Ninguém existe de propósito, ninguém pertence a lugar nenhum, todo mundo vai morrer. Vem ver TV." — Morty Smith',
    '"A vida é esforço e eu vou parar quando morrer!" — Jerry Smith',
    '"Existência é dor para um Meeseeks, Jerry!" — Mr. Meeseeks',
    '"O universo é basicamente um animal que pasta num universo comum." — Rick Sanchez',
    '"Às vezes a ciência é mais arte do que ciência. Muita gente não entende isso." — Rick Sanchez',
    '"Wubba Lubba Dub Dub!" — Rick Sanchez'
  ];

  const quoteDisplay = document.getElementById('quote-display');
  const btnFire = document.getElementById('btn-fire');
  const portalOverlay = document.getElementById('portal-transition');

  btnFire.addEventListener('click', () => {
    // 1. Ativa a expansão do portal verde pela tela
    portalOverlay.classList.add('active');
    
    // 2. Após o portal cobrir a tela, troca a frase escondido
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * quotes.length);
      quoteDisplay.textContent = quotes[randomIndex];
    }, 600); // tempo na metade da animação

    // 3. Retrai o portal revelando a nova dimensão/frase
    setTimeout(() => {
      portalOverlay.classList.remove('active');
    }, 1200); 
  });

  // ==========================================
  // 3. API DE PERSONAGENS (COM PAGINAÇÃO)
  // ==========================================
  const container = document.getElementById('characters-container');
  const searchInput = document.getElementById('search-input');
  const statusFilter = document.getElementById('status-filter');
  const genderFilter = document.getElementById('gender-filter');
  const btnLoadMore = document.getElementById('btn-load-more'); // O novo botão

  let currentPage = 1;

  async function fetchCharacters(isNewSearch = true) {
    // Se for uma busca nova (digitou ou filtrou), limpa tudo e volta pra página 1
    if (isNewSearch) {
      currentPage = 1;
      container.innerHTML = '<div class="loading">Sincronizando com os dados da API...</div>';
      btnLoadMore.style.display = 'none';
    }

    const name = searchInput.value.trim();
    const status = statusFilter.value;
    const gender = genderFilter.value;

    const url = `https://rickandmortyapi.com/api/character/?page=${currentPage}&name=${name}&status=${status}&gender=${gender}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Nenhum personagem encontrado');

      const data = await response.json();
      
      // Se for busca nova, apaga o "Carregando...". Se for página 2+, apenas anexa os novos.
      if (isNewSearch) container.innerHTML = '';
      
      renderCharacters(data.results);

      // Se a API avisar que tem uma próxima página, mostra o botão
      if (data.info.next) {
        btnLoadMore.style.display = 'inline-block';
      } else {
        btnLoadMore.style.display = 'none';
      }

    } catch (error) {
      container.innerHTML = `<div class="loading" style="color: #ef4444;">Nenhum personagem encontrado nesta dimensão!</div>`;
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

  // Ação do botão "Carregar Mais"
  btnLoadMore.addEventListener('click', () => {
    currentPage++; // Vai para a próxima página
    btnLoadMore.textContent = 'Carregando...'; // Feedback visual
    fetchCharacters(false).then(() => {
      btnLoadMore.textContent = 'Carregar Mais Personagens'; // Volta ao normal
    });
  });

  // Filtros (Passando 'true' para avisar que é uma busca nova)
  let timer;
  searchInput.addEventListener('input', () => {
    clearTimeout(timer);
    timer = setTimeout(() => fetchCharacters(true), 400);
  });

  statusFilter.addEventListener('change', () => fetchCharacters(true));
  genderFilter.addEventListener('change', () => fetchCharacters(true));

  // Inicia a primeira busca
  fetchCharacters(true);

  // ==========================================
  // 4. MODAL DETALHADO
  // ==========================================
  const modal = document.getElementById('char-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.getElementById('modal-close');

  function openModal(char) {
    modalBody.innerHTML = `
      <div class="modal-detail">
        <img src="${char.image}" alt="${char.name}">
        <h2>${char.name}</h2>
        <p><strong>Espécie:</strong> ${char.species}</p>
        <p><strong>Gênero:</strong> ${char.gender}</p>
        <p><strong>Origem:</strong> ${char.origin.name}</p>
        <p><strong>Localização Atual:</strong> ${char.location.name}</p>
        <p><strong>Aparições:</strong> ${char.episode.length} episódio(s)</p>
      </div>
    `;
    modal.classList.add('active');
  }

  modalClose.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // ==========================================
  // 5. ACCORDION FAQ
  // ==========================================
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

});