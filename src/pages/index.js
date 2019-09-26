import React from "react"
import { Link } from "gatsby"

import Image  from "../components/image"
import Layout from "../components/layout"
import SEO    from "../components/seo"

import "../styles/global.css"
import "../css/main.css"
import "../css/hr.css"

import github   from "../images/github.png"
import bandcamp from "../images/bandcamp.png"
import blogger  from "../images/blogger.png"

const IndexPage = () => (
  <Layout>
    <button id="button" type='' onclick=""> Profile </button>
    <button id="button" type='' onclick=""> Music </button>
    <button id="button" type='' onclick=""> Manga </button>
    <button id="button" type='' onclick=""> Computer </button>
    <button id="button" type='' onclick=""> Contact </button>
    <SEO title="Home" />
    <p> 
      This is my personal website. This site is recent updates and archives of my
      personal assets.<br/>
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  
    <div class="box">
      <div class="box-sm red"></div>
      <div class="box-sm orange"></div>
      <div class="box-sm yellow "></div>
      <div class="box-sm green "></div>
      <div class="box-sm blue "></div>
      <div class="box-sm purple"></div>
    </div>

    <a href="https://keisugano.blogspot.com" target="_blank">
      <img src={blogger} width="40" height="40"/>
    </a>
    <a href="https://sirotosky.bandcamp.com/music" target="_blank">
      <img id="miniicons1" src={bandcamp} width="100" height="40"/>
    </a>
    <a href="https://github.com/keitaroemotion" target="_blank">
      <img id="miniicons2" src={github}   width="100" height="40"/>
    </a>
  </Layout>
)

export default IndexPage
