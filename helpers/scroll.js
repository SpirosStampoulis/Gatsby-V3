let registerScrollOnce = true;
let toggleScrollArray = [];

export function debounce(func, delay = null) {
  if (delay === null) {
    let frame;

    return (...params) => {
      if (frame) {
        cancelAnimationFrame(frame);
      }
      frame = requestAnimationFrame(() => {
        func(...params);
      });
    };
  }
  let debounceTimer;

  return () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => func.apply(), delay);
  };
}

export function registerScroll() {
  if (!registerScrollOnce) return;
  if (typeof window === 'undefined') return;

  registerScrollOnce = !registerScrollOnce;

  const handleOnScroll = () => {
    document.body.dataset.scroll = window.scrollY;
  };

  window.addEventListener(
    'scroll',
    debounce(() => handleOnScroll())
  );
  document.body.dataset.scroll = window.scrollY;
}

export function getScroll() {
  if (document?.body.dataset.scroll === undefined) {
    registerScroll();
  }

  return document.body.dataset.scroll;
}

export function toggleScroll(action, flush = false) {
  if (typeof window === 'undefined') {
    return;
  }

  if (flush) {
    toggleScrollArray = [];
  }

  if (action !== '') {
    if (!toggleScrollArray.includes(action)) {
      toggleScrollArray.push(action);
    } else {
      toggleScrollArray = toggleScrollArray.filter((x) => x !== action);
    }
  }

  if (toggleScrollArray.length > 0) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}

export function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  const vertInView = rect.top <= windowHeight && rect.top + rect.height >= 0;
  const horInView = rect.left <= windowWidth && rect.left + rect.width >= 0;
  return vertInView && horInView;
}
