export const getNavigatorInstance = () => {
    if (typeof window !== 'undefined') {
      if (window.navigator || navigator) {
        return window.navigator || navigator;
      }
    }
    return false;
  };
  export function isMobileDevice() {
    const nav = getNavigatorInstance();
    if (!nav) return false;
    const { userAgent } = nav;
    const isAndroid = () => Boolean(userAgent.match(/Android/i));
    const isIos = () => Boolean(userAgent.match(/iPhone|iPad|iPod/i));
    const isOpera = () => Boolean(userAgent.match(/Opera Mini/i));
    const isWindows = () => Boolean(userAgent.match(/IEMobile/i));
  
    return Boolean(isAndroid() || isIos() || isOpera() || isWindows());
  }
  