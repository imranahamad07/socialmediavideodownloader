import {createBrowserRouter} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Lazyloading from './Loading/Lazyloading';

const Homepage = lazy(()=> import('./pages/Homepage'));

export const router = createBrowserRouter([

  {path:"/",element:(
    <Suspense fallback={<Lazyloading/>}>
      <Homepage/>
    </Suspense>
  )}

])