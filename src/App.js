import React, {useContext, useEffect} from 'react';
import './Styles/style.css';
import './Styles/mediaQueries.css';
import {textConstants} from './Constants/textConstants';
import NavBar from './Components/NavComponents/NavBar';
import {Route} from 'react-router-dom'
import BettingComponent from './Components/BettingComponent/Index';
import Login from './Components/Login/Login'
import { AuthContext } from './Context/AuthContext';
import Home from './Components/HomeComponent/Index'
import Toast from './Components/Toast/Toast';
import { TimerContext } from './Context/TimerContext';

const App = () => {
  const [auth] = useContext(AuthContext);

  const {toastView, toastInfo} = useContext(TimerContext)
  const [showToast, setShowToast] = toastView;
  const [toastMessage, setToastMessage] = toastInfo;

  window.addEventListener("offline", () => {
    setShowToast(true);
    setToastMessage(textConstants.OFFLINE);
  })

  window.addEventListener("online", () => {
    setShowToast(true);
    setToastMessage(textConstants.ONLINE);
  })

  

  useEffect(() => {
    document.getElementById("loadingScreen").style.display = "none";
  }, [])

  return (
    <div className="App">
      <div style={{paddingBottom : !auth && "0"}} className="contentBox">
        {auth ? <>
                  <NavBar />
                  <Route path="/betting" component={BettingComponent} />
                  <Route path="/" component={Home} exact />
                </>
              : <Login />
        }
        {showToast && <Toast message={toastMessage} />}
      </div>
      <p className="errorMessage">{textConstants.ONLY_MOBILE_VIEW}</p>
    </div>
  );
}

export default App;
