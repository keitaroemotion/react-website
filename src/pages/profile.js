import React  from "react";
import Layout from "../components/layout"
import styles from "../components/profile.module.css"
import "../css/main.css"

const Job = props => (
    <div class={styles.company}>
        <div id={styles.company_name}>{props.company_name}                </div>
        <div id={styles.job_title}>   {props.job_title}                   </div>
        <div id={styles.duration}>    {props.date_from} - {props.date_to} </div>
        <div id={styles.description}> 
            <ul>
                <li id={styles.description1}>{props.description1}</li>
                <li id={styles.description2}>{props.description2}</li>
                <li id={styles.description3}>{props.description3}</li>
                <li id={styles.description4}>{props.description4}</li>
                <li id={styles.description5}>{props.description5}</li>
                <li id={styles.description6}>{props.description6}</li>
                <li id={styles.description7}>{props.description7}</li>
                <li id={styles.description8}>{props.description8}</li>
            </ul>
        </div>
    </div>
)

const IndexPage = () => (
    <Layout>
        <h2 id="second_title">Profile</h2>
        <Job 
            company_name = "Early Works Co. Ltd.,"
            job_title    = "Blockchain Developer"
            date_from    = "Present"
            date_to      = "April 2019"
            description1 = "Development of Grid Ledger System (Semi-centralized blockchain system) and its SDK"
            description2 = "C#/F# based development of Signature/Crypto module and unit testing"
            description3 = "Development of benchmark application"
            description4 = "Revising/Writing the white paper of Grid Ledger System"
            description5 = "Standuply(Slack bot) design and development (Python)"
            description6 = "Github and multiple website analysis tool development(Python + Django + Selenium)"
            description7 = "Team management (+ education) with Scrum method"
            description8 = "Hiring"
        />
    </Layout>
)

export default IndexPage
