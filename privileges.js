const tabs = document.querySelectorAll('.connect__tabs-control');
const panels = document.querySelectorAll('.connect__tabs-item');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // снимаем активность у всех
    tabs.forEach(t => t.classList.remove('is-active'));
    panels.forEach(p => p.classList.remove('is-active'));

    // активируем текущую кнопку
    tab.classList.add('is-active');

    // находим нужную панель по data-target и показываем её
    const targetId = tab.dataset.target; // берём значение из data-target
    document.getElementById(targetId).classList.add('is-active');
  });
});

