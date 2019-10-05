import React from "react"
import { Link } from "gatsby"

import Image  from "../components/image"
import Layout from "../components/layout"
import SEO    from "../components/seo"

import "../css/hr.css"
import "../css/main.css"
import "../css/menu.css"
import "../styles/global.css"

import github   from "../images/github.png"
import bandcamp from "../images/bandcamp.png"
import blogger  from "../images/blogger.png"
import Menu     from "../components/menu"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <h2 id="second_title">Homepage of a Mixed Artist.</h2>
    <p> 
      Mixed Artist is the artist who has multiple expression/output channels such as music composition, rap, drawing, manga, programming, novel, etc. The ultimate goal of MA is to express themselves and contribute to the culture innovation of human species.
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  
    <div className="box">
      <div className="box-sm black"></div>
      <div className="box-sm gray"></div>
      <div className="box-sm black "></div>
      <div className="box-sm gray "></div>
      <div className="box-sm black "></div>
      <div className="box-sm gray"></div>
      <div className="box-sm black "></div>
      <div className="box-sm gray"></div>
      <div className="box-sm black "></div>
      <div className="box-sm gray"></div>
      <div className="box-sm black "></div>
      <div className="box-sm gray"></div>
      <div className="box-sm black "></div>
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
