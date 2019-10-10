import React     from "react" 
import PropTypes from "prop-types"

const Menu = () => (
    <div id="nav-drawer">
          <input id="nav-input" type="checkbox" class="nav-unshown"/>
          <label id="nav-open" for="nav-input"><span></span></label>
          <label class="nav-unshown" id="nav-close" for="nav-input"></label>
          <div id="nav-content">
              <a href="/">       <button id="button" type=''> Home     </button></a><br/>
              <a href="profile"> <button id="button" type=''> Profile  </button></a><br/>
              <a href="music">   <button id="button" type=''> Music    </button></a><br/>
              <a href="manga">   <button id="button" type=''> Manga    </button></a><br/>
              <a href="drawings"><button id="button" type=''> Drawings </button></a><br/>
              <a href="computer"><button id="button" type=''> Computer </button></a><br/>
              <a href="store">   <button id="button" type=''> Store    </button></a><br/>
              <a href="contact"> <button id="button" type=''> Contact  </button></a>   
          </div>
    </div>
)

export default Menu 
