import React  from "react";
import Layout from "../components/layout"
import styles from "../components/profile.module.css"
import Menu   from "../components/menu"
import "../css/main.css"

const Section = props => (
    <div id={styles.description}> 
       {props.description}
    </div>
)

const IndexPage = () => (
    <Layout>
        <Menu />
        <h2 id="second_title">Profile</h2>
        <p>
            Born in Kashiwa City in Japan, October 15, 1985 <br/>
            Graduated from Waseda Univesity in March, 2011  <br/>
            <a href="https://jp.linkedin.com/in/kei-sugano-0468b9a9">Here</a> is my job description:
        </p>

    </Layout>
)

export default IndexPage
