import { RouterProvider } from 'react-router-dom';
import './styles/app.css';

import { Suspense } from 'react';
import { useTheme } from '@/app/providers/theme-provider';
import { classNames } from '@/shared/lib/class-names.ts';
import { router } from '@/app/providers/routes/config/route-config.tsx';


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
