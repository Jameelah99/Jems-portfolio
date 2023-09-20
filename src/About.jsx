import React from "react";
import "./styles/about.css"


function About (){
    return(
        <>
         <section class="about-me-wrapper">
      <section class="about-me">
        <h2 class="about">About Me</h2>
        <p class="about-brief">
          Rotimi Oluwatoyin Jemilat, fondly referred to as Jemgem, is a Junior
          Frontend Software Developer. She is a TIIDELab fellowship alumnus
          with passion for web development, she is skilled with knowledge in HTML,CSS,JAVASCRIPT and REACTJS.
          She is a graduate of Biology and Education at the University of Ilorin. She is someone who likes to improve herself and 
          she loves reading, watching or playing football.
        </p>
      </section>
    </section>

  {/* STACK SECTION */}
       <section class="stack-section" id="staack">
          <h2> stack </h2>
          <section class="stack-group">
            <div class="stack-progress-wrapper" id="stack3">
              <label for="html-progress" class="stack-title"> HTML:</label>
              <progress id="html-progress" class="stack-progress" value="90" max="100">90%</progress>
            </div>
      
            <div class="stack-progress-wrapper" id="stack4" >
              <label for="html-progress" class="stack-title"> CSS:</label>
              <progress id="css-progress" class="stack-progress" value="90" max="100">90%</progress>
            </div>
      
            <div class="stack-progress-wrapper" id="stack1" >
              <label for="html-progress" class="stack-title"> JAVASCRIPT:</label>
              <progress id="html-progress" class="stack-progress" value="60" max="100">90%</progress>
            </div>
      
            <div class="stack-progress-wrapper" id="stack2">
              <label for="html-progress" class="stack-title"> REACTJS:</label>
              <progress id="html-progress" class="stack-progress" value="70" max="100">90%</progress>
            </div>
          </section>
        </section>
        
        </>
    )
}

export default About;