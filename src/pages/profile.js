import React  from "react";
import Layout from "../components/layout"
import styles from "../css/profile.css"
import "../css/main.css"

const Job = props => (
    <div className={styles.company}>
        aaa
    </div>
)

const IndexPage = () => (
    <Layout>
        <h2 id="second_title">Profile</h2>
        <Job />
    </Layout>
)

export default IndexPage
