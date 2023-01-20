import { Toaster } from 'react-hot-toast';
import Nav from './components/Nav';
import Fullpage from './Fullpage';

function App() {

  return (
    <>
      <Nav/>
      <Fullpage/>
      <Toaster/>
    </>
  );
}

export default App;
