import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './Components/AboutUs/About';
import Login from './Components/Account/Login/Login';
import Signup from './Components/Account/Signup/Signup';
import Cart from './Components/Cart/Cart';
import Erorr from './Components/ErorrPage/Erorr';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import InstructorsPage from './Components/InstructorsPage/InstructorsPage';
import Services from './Components/Services/Services';
import Service from './Components/SingleService/Service';
import useFirebase from './CustomHooks/useFirebase';
import AuthProvider from './Context/AuthProvider';
import './Global.css';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Checkout from './Components/Cheackout/Checkout';
import Profile from './Components/Account/Profile/Profile';

// Main Site Root Component and React Routing Starts From Here 
function App() {
  const { user, handleSignOut } = useFirebase();
  return (
    <div className="App">
    
    <AuthProvider>
      {/* React routing start from  here */}
     <BrowserRouter>
      {/* This is site header */}
        <Header />
       <Switch>
         <Route exact path="/">
           {/* This is site home page */}
          <Home />
         </Route>
         <Route exact path="/home">
           {/* This is site home page */}
          <Home />
         </Route>
         {/* This site services page */}
         <Route exact path="/services">
          <Services />
         </Route>
        {/* This is site about us page */}
        <Route exact path="/about">
          <About />
         </Route>
         {/* This is site instructors page here  */}
         <Route exact path="/instructors" >
          <InstructorsPage />
         </Route>
         {/* This is site checkout page here  */}
         <PrivateRoute exact path="/checkout" >
          <Checkout />
         </PrivateRoute>
         {/* This is site single service page  */}
         <Route exact path="/services/singleService/:serviceId">
           <Service />
         </Route>
         {/* This is site cart page */}
         <Route exact path="/cart">
           <Cart />
         </Route>
         {/* This is site login login page  */}
         <Route exact path="/account">
           {
           user.email ? <Profile handleSignOut={handleSignOut} email={user.email} name={user.displayName} /> : <Login />
           }
         </Route>
         {/* This is site account creating page  */}
         <Route exact path="/signup">
           <Signup />
         </Route>
         {/* This is site 404 erorr page  */}
         <Route path="*">
            <Erorr />
         </Route>
       </Switch>
       {/* This is site footer here  */}
        <Footer />
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
