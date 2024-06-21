import { RouterProvider } from 'react-router-dom';
import './app/styles/app.css';
import { router } from './providers/routes/config/route-config';
import { Suspense } from 'react';
import { useTheme } from './shared/theme/use-theme.ts';
import { classNames } from './shared/helpers/class-names.ts';


function App() {
  const {theme, toggleTheme} = useTheme()

  return (
      <div className={classNames("app" , {} , [`${theme}`])}>
        <Suspense fallback={<div>Loading...</div>}>
          <RouterProvider router={router} />
        </Suspense>
        <button onClick={toggleTheme}>theme</button>
      </div>

  );
}

export default App;
