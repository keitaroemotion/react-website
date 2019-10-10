import React    from "react"
import { Link } from "gatsby"
import Layout   from "../components/layout"
import Menu     from "../components/menu"
import SEO      from "../components/seo"
import "../css/hr.css"
import "../css/main.css"
import "../css/menu.css"
import "../css/music.css"
import "../styles/global.css"

const Page = () => (
    <Layout>
        <SEO title="Home" />
        <h3 id="second_title">Music</h3>
        <Menu />
        <h4 id="second_title">Music as Open Source</h4>
        <p>
            Currently Keikun Lab provides the <strong>OSS-like project</strong> in <strong>music</strong>:<br/>
            You can make any new artifact using my songs (PV, rap music, DJ, etc...)
            Usually these types of contract above needs loyalty and it is proprietary,
            however our project offers <strong>use songs/tracks for free, and you can sell it
            without any loyalty as long as you put reference of "feat. Keikun Lab" in your
            song title.</strong><br/> 
            For more details, check the <a href="license">KUL License</a>
        </p>

        <h4> Music Video </h4>
        <iframe 
            width="100%"
            height="515"
            src="https://www.youtube.com/embed/agx3JwHkljU"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        >
        </iframe>

        <h4> Hiphop Tracks </h4>
        <iframe id="player" src="https://bandcamp.com/EmbeddedPlayer/track=1233911893/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://keikunlab.bandcamp.com/track/--48">ゴールデンババア by Keikun Lab</a></iframe>
        <iframe id="player" src="https://bandcamp.com/EmbeddedPlayer/track=24669349/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless><a href="http://keikunlab.bandcamp.com/track/--47">排水口でたわむれる by Keikun Lab</a></iframe>
    </Layout>
)

export default Page
