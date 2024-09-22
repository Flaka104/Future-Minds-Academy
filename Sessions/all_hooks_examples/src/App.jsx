import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import './App.css'
import Counter from './views/Counter';
import ToggleVisibility from './views/ToggleVisibility';
import InputField from './views/InputFiled';

const router = createBrowserRouter([
  {path: '/', element: <Counter />},
  {path: '/toggle-visibility', element: <ToggleVisibility/>},
  {path: '/input-field', element: <InputField />},
]);


function App() {

  return (
    <div>
      <h1>Welcome</h1>

<RouterProvider router={router} />
    </div>
    
  )
}

export default App
