import React    from "react"
import { Link } from "gatsby"
import Layout   from "../components/layout"
import Menu     from "../components/menu"
import SEO      from "../components/seo"

const Page = () => (
    <Layout>
        <SEO title="Home" />
        <Menu />
    </Layout>
)

export default Page
