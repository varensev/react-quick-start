import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './them-context.ts';
import { type FC, type PropsWithChildren, useMemo, useState } from 'react';


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;
export const ThemePropvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);


  const defaultProps = useMemo(() => ({
    theme: theme,
    setTheme,
  }), [theme]);

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
