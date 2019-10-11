import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Banner from '../components/banner'

import '../styles/about.sass'

const AboutPage = () => {
    return (
        <Layout>
            <SEO title="Committee" />
            <Banner class_suffix="deep"/>
            <div className="about-container">
                <div className="about-content">
                    <h1>Commitee</h1>
                    <center>
                        <h4>2019 - 2020</h4>
                        <table style={{ fontFamily: 'Source Code Pro' }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Joseph Surin</td>
                                    <td>President</td>
                                </tr>
                                <tr>
                                    <td>Kaif Ahsan</td>
                                    <td>Secretary</td>
                                </tr>
                                <tr>
                                    <td>Chuanshu Jiang</td>
                                    <td>Treasurer</td>
                                </tr>
                                <tr>
                                    <td>Annie Nie</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>Darren Xuan</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>Chris Chamberlain</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>Tian Qiu</td>
                                    <td>General Committee</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>2019 Sem 2</h4>
                        <table style={{ fontFamily: 'Source Code Pro' }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td dangerouslySetInnerHTML={{ __html: '<!-- 🙃🙃 --!>Takuhiro Kikuchi' }}></td>
                                    <td>President</td>
                                </tr>
                                <tr>
                                    <td>Joshua Ong</td>
                                    <td>Secretary</td>
                                </tr>
                                <tr>
                                    <td dangerouslySetInnerHTML={{ __html: '<!-- our president --!>Asil Mian' }}></td>
                                    <td>Treasurer</td>
                                </tr>
                                <tr>
                                    <td>Shevon Mendis</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>Ethan Cheng</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>Chuanshu Jiang</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>Joseph Surin</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>John Stephenson</td>
                                    <td>Education Officer</td>
                                </tr>
                                <tr>
                                    <td>Kaif Ahsan</td>
                                    <td>Education Officer</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>2018 - 2019 Sem 1</h4>
                        <table style={{ fontFamily: 'Source Code Pro' }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Takuhiro Kikuchi</td>
                                    <td>President</td>
                                </tr>
                                <tr>
                                    <td>Joshua Ong</td>
                                    <td>Secretary</td>
                                </tr>
                                <tr>
                                    <td>Asil Mian</td>
                                    <td>Treasurer</td>
                                </tr>
                                <tr>
                                    <td>Shevon Mendis</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>Ethan Cheng</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>Michael Manoussakis</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>Manindra Arora</td>
                                    <td>General Committee</td>
                                </tr>
                                <tr>
                                    <td>John Stephenson</td>
                                    <td>Education Officer</td>
                                </tr>
                                <tr>
                                    <td>Kaif Ahsan</td>
                                    <td>Education Officer</td>
                                </tr>
                            </tbody>
                        </table>
                        <h4>2017 - 2018</h4>
                        <table style={{ fontFamily: 'Source Code Pro' }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Tarnvir Grewal</td>
                                    <td>President</td>
                                </tr>
                                <tr>
                                    <td>Abhineet Gupta</td>
                                    <td>Secretary</td>
                                </tr>
                                <tr>
                                    <td>Danish Bassi</td>
                                    <td>Treasurer</td>
                                </tr>
                            </tbody>
                        </table>
                    </center>
                </div>
            </div>
        </Layout>
    )

} 
export default AboutPage
