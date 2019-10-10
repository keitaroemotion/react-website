import React    from "react"
import { Link } from "gatsby"

import bandcamp from "../images/bandcamp.png"
import bitcoin  from "../images/bitcoinaddr.png"
import blogger  from "../images/blogger.png"
import github   from "../images/github.png"
import Image    from "../components/image"
import Layout   from "../components/layout"
import Menu     from "../components/menu"
import SEO      from "../components/seo"

import "../css/hr.css"
import "../css/main.css"
import "../css/menu.css"
import "../css/index.css"
import "../styles/global.css"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Menu />
    <h3 id="second_title">Manga Artist | Hacker | Musician | Rapper</h3>
    <div id="frame">
        <div id="intro"> 
            Hi. My name is <strong>Kei Sugano.</strong> I was born in Chiba Prefecture, Kashiwa in 1985. <br/>
            I am a programmer mainly code in <strong>Rust, Purescript, F#, Scala, Bash,
            Golang, Ruby, Python, C#</strong>, et cetra.
            (Check out my <a href="https://github.com/keitaroemotion" target="_blank">GitHub account</a>.)<br/>
            <strong>Composing <a href="https://keikunlab.bandcamp.com/music">music</a> for almost 20 years</strong> and <strong>drawing <a href="https://www-indies.mangabox.me/episode/107811/" target="_blank">cartoon</a> for 14 years.</strong> <br/>
            The purpose of this site is to share my artifacts globally and contribute to the
            sub-culture in any sense. <br/>
            Since on July 2019, there was a tragedy in Kyoto and we lost a lot of animators
            dedicated their lives in anime. <strong>Project Keikun is to contribute to the
            culture in our own country</strong> and overseas, and make people happy.
        </div>
        <div id="middle">
            <br/> 
        </div>
        <div id="picture">
          <Image />
        </div>
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
