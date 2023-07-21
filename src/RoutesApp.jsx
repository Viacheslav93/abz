import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/home/Home'
import { Layout } from './components/layout/Layout'
import {NotFound} from './pages/NotFound'


export const RoutesApp = () => {

  return (
    <Routes>
      <Route path='/' element= {<Layout />}> 
          <Route path='' element= {<Home />}/>
      </Route>
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
