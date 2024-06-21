import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './them-context.ts';

// interface useThemeResult {
//   toggleTheme: () => void
//   theme-provider: Theme
// }
export const useTheme = () => {
  const {theme, setTheme} = useContext(ThemeContext)

     const toggleTheme = () => {
      if (setTheme) {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
      }
    };
    return  { theme , toggleTheme }
}