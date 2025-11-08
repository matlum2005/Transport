import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import Signin from './Component/Signin';
import Signup from './Component/Signup';
import Customer from './Component/Customer';
import Vendor from './Component/Vendor';
import Deleteprofile from './CustomerScreens/Deleteprofile';
import Home from './Component/Home';
import Booking from './Component/Booking';

const history = createBrowserHistory();

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

  return (

    <div className={darkMode ? 'dark-mode' : ''}>

      <BrowserRouter history={history}>
        <div>
          <Switch>
            <Route path="/" exact render={(props) => <Home {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          </Switch>
        </div>

        <div>
          <Switch>
            <Route path="/signin" render={(props) => <Signin {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/signup" render={(props) => <Signup {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/customer" render={(props) => <Customer {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/vendor" render={(props) => <Vendor {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/deleteprofile" render={(props) => <Deleteprofile {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/booking" render={(props) => <Booking {...props} darkMode={darkMode} toggleDarkMode={toggleDarkMode} />} />
          </Switch>
        </div>
      </BrowserRouter>

    </div>

  )
}

export default App