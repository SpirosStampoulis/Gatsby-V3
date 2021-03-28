import { useState, useEffect } from 'react';
import { isMobileDevice } from '~helpers/device-detect';

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  return isMobile;
}

export default useIsMobile;
