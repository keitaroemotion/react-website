import React from "react"
import PropTypes from "prop-types"

const Menu = () => (
    <div id="nav-drawer">
          <input id="nav-input" type="checkbox" class="nav-unshown"/>
          <label id="nav-open" for="nav-input"><span></span></label>
          <label class="nav-unshown" id="nav-close" for="nav-input"></label>
          <div id="nav-content">
              <button id="button" type=''> Home     </button><br/>
              <a href="profile"><button id="button" type=''> Profile  </button></a><br/>
              <button id="button" type=''> Music    </button><br/>
              <button id="button" type=''> Manga    </button><br/>
              <button id="button" type=''> Computer </button><br/>
              <button id="button" type=''> Contact  </button>   
          </div>
    </div>
)

export default Menu 
