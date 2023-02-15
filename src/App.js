import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Loader from './components/Loader';
import Fullpage from './Fullpage';

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, [])
  
  return (
    <>
      {loading ? <Loader/> :
      <div>
        <Fullpage/>
        <Toaster/>
      </div>
      }
    </>
  );
}

export default App;
