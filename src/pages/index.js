import React from "react"
import { Link } from "gatsby"

import Image  from "../components/image"
import Layout from "../components/layout"
import SEO    from "../components/seo"

import "../styles/global.css"
import github   from "../images/github.png"
import bandcamp from "../images/bandcamp.png"
import blogger  from "../images/blogger.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <p> 
      This is my personal website. This site is recent updates & archives of my
      personal assets.<br/>
      Such as (1) Manga (2) Music (3) Coding (4) Blog (Personal | Computer) (5) Easy animation
    </p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>

    <a href="https://keisugano.blogspot.com" target="_blank">
      <img src={blogger}  width="40" height="40"/>
    </a>
    <a href="https://sirotosky.bandcamp.com/music" target="_blank">
      <img src={bandcamp} width="100" height="40"/>
    </a>
    <a href="https://github.com/keitaroemotion" target="_blank">
        <img src={github}   width="100" height="40"/>
    </a>
  </Layout>
)

export default IndexPage
