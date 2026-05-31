import {createBrowserRouter} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Lazyloading from './Loading/Lazyloading';
import Layout from './Components/Layout';

const Homepage = lazy(()=> import('./pages/Homepage'));
const Contact = lazy(() => import('./pages/Contactpage'));
const About = lazy(()=> import('./pages/Aboutpage'));

export const router = createBrowserRouter([

  {path:'/', element:(<Layout/>),
    children:[
      {index:true, element:(
        <Suspense fallback={<Lazyloading/>}>
            <Homepage/>
        </Suspense>
      )},

      {path:'contact', element:(
        <Suspense fallback={<Lazyloading/>}>
          <Contact/>
        </Suspense>
      )},

      {path:'about', element:(
        <Suspense fallback={<Lazyloading/>}>
          <About/>
        </Suspense>
      )}
    ]
  }

])