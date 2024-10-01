import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './componants/pages/Home';
import Shop from './componants/pages/Shop';
Shop

const router = createBrowserRouter(
  createRoutesFromElements(
<>
<Route
      path="/"
      element={<Home />}
    >
     
    </Route>
    <Route
      path="/Shop"
      element={<Shop/>}
    >
     
    </Route>

</>
  )
);

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <RouterProvider router={router} />
    </>
  )
}

export default App
