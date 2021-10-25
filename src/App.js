
import './App.css';
import React from 'react';
import Profile from './Profile/profile';
import Image from "./Profile/Image";



function App() {
  const stylephoto = { width: "30%" ,marginTop:"40px", marginLeft:"auto", marginRight:"auto", borderRadius: "7%"}
  return (
    <div>
      <Profile fullName={"Habiba BEN NASR"} bio={"My dream is to fly"} profession={"Civil engeneer"} >


        <Image stylephoto= {stylephoto}/>

      </Profile>
    </div>
  );
}

export default App;

