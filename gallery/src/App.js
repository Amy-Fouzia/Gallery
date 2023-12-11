import Route from './components/Route'

import './index.css';
import artpage from './pages/Art';

export default function App() {
  return (
    <div className="landingPage">
      <Route path='/'>
      <h1 class="text-7xl font-delagothicone font-bold text-center p-5 hover:text-8xl">
        artVend
      </h1>
      </Route>
      <div class="flex items-center justify-center">
        <Route path="/art">
          <img class="mainimg" src={require('./assets/toyvendor.jpeg')} />
          <artpage />
        </Route>
      </div>

    </div>
  );
}

