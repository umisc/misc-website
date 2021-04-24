import React from "react";

import { Link } from "gatsby";
import Layout from "../components/layout";
import Banner from "../components/banner";

import "../styles/about.sass";

const AGMPage = () => {
  return (
    <Layout>
      <Banner class_suffix="deep" />
      <div className="about-container">
        <div className="about-content">
          <h1>Welcome to the MISC 2020 AGM</h1>
          <p style={{ textAlign: "left" }}>
            Please record your attendance via this form. You'll need to do this
            to vote and have your attendance count. You'll also need to be a
            member of the club, sign up{" "}
            <a href="https://www.umisc.info/signup">here</a> for free if you
            haven't already this year.
          </p>
          <a href="https://forms.gle/1MxsHnhrZAVmLiLb7">
            <button className="signup-button med-font">Attendance Form</button>
          </a>

          <hr />
          <h2>Other Links</h2>
          <ul>
            <li>
              <a href="https://unimelb.zoom.us/j/81132488544?pwd=WGxMZGh5UnhxWm1uQXBWNmwxQWhnUT09">
                Zoom Meeting
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/presentation/d/1kD5payP3xdjukmxX6KCv1CTAsi-jfFH5WrW8m2lybfI/present">
                Presentation Slides
              </a>
            </li>
            <li>
              <a href="/agm-2020/agenda.pdf">Agenda</a>
            </li>
            <li>
              <a href="/misc-constitution-2018aug.pdf">Constitution</a>
            </li>
            <li>
              <a href="/agm-2020/presidents-report.pdf">President's Report</a>
            </li>
            <li>
              <a href="/agm-2020/financial-report.pdf">Treasurer's Report</a>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};
export default AGMPage;
