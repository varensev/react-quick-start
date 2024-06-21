import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './them-context.ts';
import { useContext } from 'react';

// interface useThemeResult {
//   toggleTheme: () => void
//   theme: Theme
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