import React, {useContext, useState} from 'react';
import Navigation from './components/Navigation/Navigation';
import SaladMaker from './components/SaladMaker/SaladMaker';
import UserContext from './context/UserContext';
 
const user = {
  name: 'Gulsenem',
  favorites: ['avocado', 'carrot' ]
}

function App() {

  // const [user, setUser]= useState({name: 'Your Name',
  // favorites: ['avocado', 'carrot' ]})
  
  return (
    <>
    <UserContext.Provider value={{user}}>
      <Navigation />
      <SaladMaker />
    </UserContext.Provider>
    </>
  );
}

export default App;