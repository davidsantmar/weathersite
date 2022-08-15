import './App.scss';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from "./redux/stores";



function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <Footer />
      </Provider>
    </>
  );
}

export default App;

