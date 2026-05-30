import {createBrowserRouter} from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Homepage = lazy(()=> import('./pages/Homepage'));

export const router = createBrowserRouter([

  {path:"/",element:(
    <Suspense fallback={<h1>Loading...</h1>}>
      <Homepage/>
    </Suspense>
  )}

])