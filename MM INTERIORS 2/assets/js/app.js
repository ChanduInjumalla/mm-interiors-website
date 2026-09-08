const header = document.querySelector('[data-header]');
const menu = document.querySelector('[data-menu]');
const menuToggle = document.querySelector('[data-menu-toggle]');
const langToggle = document.querySelector('[data-lang-toggle]');
const langMenu = document.querySelector('[data-lang-menu]');

if (header) {
  const syncHeader = () => header.classList.toggle('scrolled', window.scrollY > 12);
  syncHeader();
  window.addEventListener('scroll', syncHeader, { passive: true });
}

if (menu && menuToggle) {
  menuToggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

if (langToggle && langMenu) {
  const setLangMenu = (open) => {
    langMenu.classList.toggle('open', open);
    langToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  };

  const setTranslateCookie = (code) => {
    const value = `/en/${code}`;
    const expires = 'Fri, 31 Dec 9999 23:59:59 GMT';

    document.cookie = `googtrans=${value}; expires=${expires}; path=/`;
    document.cookie = `googtrans=${value}; expires=${expires}; path=/; domain=${window.location.hostname}`;
  };

  const applyLanguage = (code) => {
    const select = document.querySelector('.goog-te-combo');
    const targetCode = code || 'en';

    setTranslateCookie(targetCode);

    if (select) {
      select.value = targetCode;
      select.dispatchEvent(new Event('change'));
    }

    window.setTimeout(() => {
      window.location.reload();
    }, 150);

    return true;
  };

  langToggle.addEventListener('click', () => {
    setLangMenu(!langMenu.classList.contains('open'));
  });

  langMenu.querySelectorAll('[data-lang-code]').forEach((button) => {
    button.addEventListener('click', () => {
      applyLanguage(button.dataset.langCode);
      setLangMenu(false);
    });
  });

  document.addEventListener('click', (event) => {
    if (!event.target.closest('.lang-switch')) {
      setLangMenu(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setLangMenu(false);
    }
  });

  window.mmApplyLanguage = applyLanguage;
}
