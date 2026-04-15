const SOUND_META = {
  'Alarme de incêndio': { icon: '🚨', cls: 'alarm', vib: 'Urgente' },
  'Campainha da porta': { icon: '🔔', cls: 'door', vib: 'Atenção' },
  'Chamada telefônica': { icon: '📞', cls: 'phone', vib: 'Atenção' },
  'Voz humana': { icon: '💬', cls: 'voice', vib: 'Informativo' },
  'Sirene de emergência': { icon: '🚨', cls: 'alarm', vib: 'Urgente' },
  'Bebê chorando': { icon: '👶', cls: 'phone', vib: 'Urgente' }
};

function detectSound(pill, soundName) {
  document.querySelectorAll('.pill').forEach(p => p.classList.remove('active'));
  pill.classList.add('active');

  document.getElementById('monitor-sound').textContent = soundName;
  document.getElementById('monitor-time').textContent = 'agora mesmo';
  document.getElementById('sound-text').textContent = soundName;

  addHistory(soundName);
}

function addHistory(soundName) {
  const meta = SOUND_META[soundName];
  const list = document.getElementById('history-list');

  const now = new Date();
  const timeStr = 'Hoje, ' + now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

  const item = document.createElement('div');
  item.className = 'hist-item';

  item.innerHTML =
    '<div class="hist-dot ' + meta.cls + '">' + meta.icon + '</div>' +
    '<div class="hist-info">' +
      '<div class="hist-name">' + soundName + '</div>' +
      '<div class="hist-time">' + timeStr + '</div>' +
    '</div>' +
    '<div class="hist-vib">' + meta.vib + '</div>';

  list.insertBefore(item, list.firstChild);

  if (list.children.length > 6) {
    list.removeChild(list.lastChild);
  }
}

function selectVib(card) {
  document.querySelectorAll('.vib-card').forEach(c => {
    c.classList.remove('active');
    c.setAttribute('aria-pressed', 'false');
  });

  card.classList.add('active');
  card.setAttribute('aria-pressed', 'true');
}

function toggleBluetooth() {
  const chip = document.getElementById('bt-chip');
  const label = document.getElementById('bt-label');

  const connected = chip.classList.toggle('connected');
  label.textContent = connected ? 'Conectado' : 'Desconectado';
}

function toggleConnect() {
  const btn = document.getElementById('connect-btn');
  const label = document.getElementById('connect-label');

  const connected = btn.classList.toggle('connected');
  label.textContent = connected ? 'Pulseira conectada' : 'Conectar pulseira';
}