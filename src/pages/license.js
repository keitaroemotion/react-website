import React    from "react"

import Layout   from "../components/layout"
import Menu     from "../components/menu"
import SEO      from "../components/seo"

import "../css/hr.css"
import "../css/main.css"
import "../css/menu.css"
import "../css/index.css"
import "../styles/global.css"

const Page = () => (
  <Layout>
    <SEO title="KUL License" />
    <Menu />
    <h2>
      Keikun Lab License (KUL)
    </h2>

    <p>
        This song can be used commercially as long as it abides by the following:<br/><br/>

        1. feat. Keikun Lab is included in the song title.<br/>
        2. Except in the case that it is used in the Club or on the Radio, the song itself is not directly used. (You need to add song or rap on it)
<br/><br/>
        As long as the conditions above is satisfied, you do not need to ask permission to use songs owned by Keikun Lab.
<br/>
    </p>
    <p>
    <a href="music">Back to music</a>
    </p>
    </Layout>
)

export default Page
