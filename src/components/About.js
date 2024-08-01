import React from "react";
import Links from "./Links";
import user from "../data/user";


function About(prop) {
  function checkBio(){
    if (prop.bio){
      return (
        <p>{prop.bio}</p>
      )
    }else{
      return null
    }
  }
  return (
    <div id="about">
      <h2>About Me</h2>
      {checkBio()}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      <Links github={user.links.github} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default About;
