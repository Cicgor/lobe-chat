import { useEffect, useState } from 'react';

import { useSettings } from '../store';

export const useSettingsHydrated = () => {
  // 根据 sessions 是否有值来判断是否已经初始化
  const hasInited = !!Object.values(useSettings.getState().settings).length;

  const [isInit, setInit] = useState(hasInited);

  useEffect(() => {
    const hasRehydrated = useSettings.persist.hasHydrated();

    if (hasRehydrated && !isInit) {
      setInit(true);
    }
  }, []);

  return isInit;
};
