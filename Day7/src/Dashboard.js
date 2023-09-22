import React from 'react'
import './Dashboard.css'
import { Link } from 'react-router-dom'


const dashboard = () => {

  
  return (
    <div>
    <div>
    {/* wrapper */}
    <div className="wrapper">
      {/* search starts */}
      <div className="search">
        <form className="search-form d-flex">
          <label>
            <button type="submit" className="searchButton">
              <i className="fa fa-search" />
            </button>
            <input
              type="search"
              id="site-search"
              className="search-input"
              placeholder="Global Search"
              autoComplete="on"
            />
          </label>
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19.5 18.2071V18.5H4.5V18.2071L6.35355 16.3536L6.5 16.2071V16V11C6.5 8.09437 8.02219 5.78092 10.6153 5.16653L11 5.07538V4.68V4C11 3.44614 11.4461 3 12 3C12.5539 3 13 3.44614 13 4V4.68V5.07506L13.3843 5.16644C15.9681 5.78076 17.5 8.10482 17.5 11V16V16.2071L17.6464 16.3536L19.5 18.2071ZM13.4135 20.5C13.2061 21.0806 12.6488 21.5 12 21.5C11.3443 21.5 10.7907 21.0813 10.5854 20.5H13.4135Z"
              fill="white"
              stroke="#C2CFE0"
            />
            <circle cx={17} cy={6} r="4.5" fill="#F7685B" stroke="white" />
          </svg>
        </form>
      </div>
      {/* search ends */}
      {/* sidebar starts */}
      <aside className="sidebar">
        {/* saas header */}
        <div className="header">
          <h3>Disaster Relief</h3>
        </div>
        {/* sidebar inner */}
        <div className="sidebar_inner">
          {/* person block*/}
          <div className="person">
            <img
              src="https://cdn.vectorstock.com/i/preview-1x/20/76/man-avatar-profile-vector-21372076.jpg"
              alt="profile_picture"
              className="profileImg"
            />
            <div className="description">
              <span className="descriptionName">Prathap</span>
              <span className="descriptionMail"> prathap@gmail.com</span>
            </div>
          </div>
          {/* navbar*/}
          <nav className="navbar">
            <ul>
              <li className="nav-item">
                <a href="">
                  <div className="menu-icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.5 10.1333C3.33431 10.1333 3.2 9.99902 3.2 9.83333V3.5C3.2 3.33431 3.33431 3.2 3.5 3.2H8.16667C8.33235 3.2 8.46667 3.33431 8.46667 3.5V9.83333C8.46667 9.99902 8.33235 10.1333 8.16667 10.1333H3.5ZM3.5 16.8C3.33431 16.8 3.2 16.6657 3.2 16.5V13.5C3.2 13.3343 3.33431 13.2 3.5 13.2H8.16667C8.33235 13.2 8.46667 13.3343 8.46667 13.5V16.5C8.46667 16.6657 8.33235 16.8 8.16667 16.8H3.5ZM11.8333 16.8C11.6676 16.8 11.5333 16.6657 11.5333 16.5V10.1667C11.5333 10.001 11.6676 9.86667 11.8333 9.86667H16.5C16.6657 9.86667 16.8 10.001 16.8 10.1667V16.5C16.8 16.6657 16.6657 16.8 16.5 16.8H11.8333ZM11.5333 3.5C11.5333 3.33431 11.6676 3.2 11.8333 3.2H16.5C16.6657 3.2 16.8 3.33431 16.8 3.5V6.5C16.8 6.66569 16.6657 6.8 16.5 6.8H11.8333C11.6676 6.8 11.5333 6.66569 11.5333 6.5V3.5Z"
                        stroke="#109CF1"
                        strokeWidth="1.4"
                      />
                    </svg>
                    <span className="nav-label">Dashboard</span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <div className="menu-icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.49996 3.2H16.6666C16.7384 3.2 16.8 3.2616 16.8 3.33333V8.33333C16.8 8.40507 16.7384 8.46667 16.6666 8.46667H2.49996C2.42823 8.46667 2.36663 8.40507 2.36663 8.33333V3.33333C2.36663 3.2616 2.42823 3.2 2.49996 3.2ZM2.49996 11.5333H16.6666C16.7384 11.5333 16.8 11.5949 16.8 11.6667V16.6667C16.8 16.7384 16.7384 16.8 16.6666 16.8H2.49996C2.42823 16.8 2.36663 16.7384 2.36663 16.6667V11.6667C2.36663 11.5949 2.42823 11.5333 2.49996 11.5333Z"
                        stroke="#C2CFE0"
                        strokeWidth="1.4"
                      />
                    </svg>
                    <span className="nav-label">
                    <Link to="/analysis">Tasks</Link></span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <div className="menu-icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.37496 5.0005V4.99992C2.37496 4.46528 2.80778 4.03325 3.33329 4.03325H16.6666C17.1967 4.03325 17.6333 4.46985 17.6333 4.99992V14.9999C17.6333 15.53 17.1967 15.9666 16.6666 15.9666H3.33329C2.80331 15.9666 2.36677 15.5301 2.36663 15.0002C2.36663 15.0001 2.36663 15 2.36663 14.9999L2.37496 5.0005Z"
                        stroke="#C2CFE0"
                        strokeWidth="1.4"
                      />
                      <path
                        d="M2.5 5L10 10L17.5 5"
                        stroke="#C2CFE0"
                        strokeWidth="1.4"
                      />
                    </svg>
                    <span className="nav-label">
                    <Link to = "/about">About</Link></span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <div className="menu-icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.81118 6.11106C6.81118 4.34905 8.23806 2.92217 10.0001 2.92217C11.7621 2.92217 13.189 4.34904 13.189 6.11106C13.189 7.87307 11.7621 9.29995 10.0001 9.29995C8.23806 9.29995 6.81118 7.87307 6.81118 6.11106ZM2.92229 14.8611C2.92229 14.4716 3.11181 14.0787 3.54729 13.6768C3.98752 13.2705 4.63079 12.904 5.39805 12.5966C6.9337 11.9814 8.78966 11.6722 10.0001 11.6722C11.2105 11.6722 13.0664 11.9814 14.6021 12.5966C15.3693 12.904 16.0126 13.2705 16.4528 13.6768C16.8883 14.0787 17.0778 14.4716 17.0778 14.8611V17.0777H2.92229V14.8611Z"
                        stroke="#C2CFE0"
                        strokeWidth="1.4"
                      />
                    </svg>
                    <span className="nav-label">
                    <Link to = "/payment">Payment</Link></span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <div className="menu-icon">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.49996 4.03325H17.5C17.5717 4.03325 17.6333 4.09485 17.6333 4.16659V15.8333C17.6333 15.905 17.5717 15.9666 17.5 15.9666H2.49996C2.42823 15.9666 2.36663 15.905 2.36663 15.8333V4.16659C2.36663 4.09485 2.42823 4.03325 2.49996 4.03325Z"
                        stroke="#C2CFE0"
                        strokeWidth="1.4"
                      />
                      <rect
                        x="6.5"
                        y="3.33325"
                        width="1.16667"
                        height="13.3333"
                        fill="#C2CFE0"
                      />
                      <rect
                        x="12.3334"
                        y="3.33325"
                        width="1.16667"
                        height="13.3333"
                        fill="#C2CFE0"
                      />
                    </svg>
                    <span className="nav-label">
                    <Link to="/analysis">Graph</Link></span>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a href="">
                  <div className="menu-icon">
                    <svg
                      width={14}
                      height={4}
                      viewBox="0 0 14 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2.00004 0.333252C1.08337 0.333252 0.333374 1.08325 0.333374 1.99992C0.333374 2.91658 1.08337 3.66658 2.00004 3.66658C2.91671 3.66658 3.66671 2.91658 3.66671 1.99992C3.66671 1.08325 2.91671 0.333252 2.00004 0.333252ZM12 0.333252C11.0834 0.333252 10.3334 1.08325 10.3334 1.99992C10.3334 2.91658 11.0834 3.66658 12 3.66658C12.9167 3.66658 13.6667 2.91658 13.6667 1.99992C13.6667 1.08325 12.9167 0.333252 12 0.333252ZM7.00004 0.333252C6.08337 0.333252 5.33337 1.08325 5.33337 1.99992C5.33337 2.91658 6.08337 3.66658 7.00004 3.66658C7.91671 3.66658 8.66671 2.91658 8.66671 1.99992C8.66671 1.08325 7.91671 0.333252 7.00004 0.333252Z"
                        fill="#C2CFE0"
                      />
                    </svg>
                    <span className="nav-label">Teams&Conditions</span>
                  </div>
                </a>
              </li>
            </ul>
          </nav>
          {/* navbar ends */}
          <div className="toggle">
            <a href="">
              <div className="menu-icon">
                <img src="./img/toggle_sidebar.svg" alt="" />
              </div>
            </a>
          </div>
          {/* toggle ends*/}
        </div>
        {/* inner ends */}
      </aside>
      {/* sidebar ends */}
      {/* mainBlock starts */}
      <div className="main">
        {/* first block */}
        <div className="first">
          {/* task-calendar block */}
          <div className="task-calendar">
            {/* task header */}
            <div className="taskhead">
              
              {/* calendar */}
              <div className="calendar">
                <h3>Lets Donate!!</h3>
                <div className="week d-flex">
                  <p>In the event of a calamity of a severe nature, where the requirement of funds for 
                  relief operations is beyond the funds available in the State’s Disaster Response Fund account, 
                  additional Central assistance is provided from National Disaster Response Fund, after following the
                   laid down procedure</p>
                </div>
              </div>
              {/* calendar ends */}
            </div>
            {/* taskhead ends */}
            {/* task-block */}
            <div className="task-block">
              {/* task-card 1*/}
              <div className="task-card">
                <div className="task-header">
                  <h3>Earth Quake in Japan</h3>
                  <p className="task-type">Due Date : March 23, 2024</p>
                </div>
                <p className="task-date">
                  Amount Donated : 22,54,124
                </p>
                <div className="task-footer">
                  <figure>
                    <img
                      src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/george_portrait.png?raw=true"
                      alt="profile_picture"
                      className="task-person-img"
                    />
                    <figcaption className="task-person-name">
                     Dinesh Kumar
                    </figcaption>
                  </figure>
                  <div className="icon">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z"
                        fill="#C2CFE0"
                      />
                    </svg>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.99998 12.6667C3.99998 13.4 4.59998 14 5.33331 14H10.6666C11.4 14 12 13.4 12 12.6667V4.66667H3.99998V12.6667ZM12.6666 2.66667H10.3333L9.66665 2H6.33331L5.66665 2.66667H3.33331V4H12.6666V2.66667Z"
                        fill="#C2CFE0"
                      />
                    </svg>
                  </div>
                  <p className="task-status complete">View</p>
                </div>
              </div>
              {/* task card 1 ends*/}
              {/* task card 2 */}
              <div className="task-card">
                <div className="task-header">
                  <h3>Flood in chennai</h3>
                  <p className="task-type">Due Date : January 12,2024</p>
                </div>
                <p className="task-date">
                  Amount Donated : 3,78,546
                </p>
                <div className="task-footer">
                  <figure>
                    <img
                      src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/rebecca_portrait.png?raw=true"
                      alt="profile_picture"
                      className="task-person-img"
                    />
                    <figcaption className="task-person-name">
                    Kavya
                    </figcaption>
                  </figure>
                  <div className="icon">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z"
                        fill="#C2CFE0"
                      />
                    </svg>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.99998 12.6667C3.99998 13.4 4.59998 14 5.33331 14H10.6666C11.4 14 12 13.4 12 12.6667V4.66667H3.99998V12.6667ZM12.6666 2.66667H10.3333L9.66665 2H6.33331L5.66665 2.66667H3.33331V4H12.6666V2.66667Z"
                        fill="#C2CFE0"
                      />
                    </svg>
                  </div>
                  <p className="task-status ended">View</p>
                </div>
              </div>
              {/* task card 2 ends*/}
              {/* task card 3 */}
              <div className="task-card">
                <div className="task-header">
                  <h3>tsuanami in USA</h3>
                  <p className="task-type">Due Date :December 23,2023</p>
                </div>
                <p className="task-date">
                  Amount Donated : 1,28,456
                </p>
                <div className="task-footer">
                  <figure>
                    <img
                      src="https://github.com/ShoshaTheTarnegolet/Dashboard-Project/blob/main/img/lindsey_portrait.png?raw=true"
                      alt="profile_picture"
                      className="task-person-img"
                    />
                    <figcaption className="task-person-name">
                      Indhra
                    </figcaption>
                  </figure>
                  <div className="icon">
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z"
                        fill="#C2CFE0"
                      />
                    </svg>
                    <svg
                      width={16}
                      height={16}
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.99998 12.6667C3.99998 13.4 4.59998 14 5.33331 14H10.6666C11.4 14 12 13.4 12 12.6667V4.66667H3.99998V12.6667ZM12.6666 2.66667H10.3333L9.66665 2H6.33331L5.66665 2.66667H3.33331V4H12.6666V2.66667Z"
                        fill="#C2CFE0"
                      />
                    </svg>
                  </div>
                  <p className="task-status complete">View</p>
                </div>
              </div>
              {/* task card 3 ends*/}
              <div className="show-more">
                <a href="">Show more</a>
              </div>
            </div>
            {/* task-block ends*/}
          </div>
          {/* task-calendar block ends */}
        </div>
        {/* first block ends */}
        {/* second block */}
        <div className="second d-flex">
          {/* deals block */}
          <div className="deals">
            {/* panelHeader */}
            <div className="panelHeader d-flex">
              <h3>Graph</h3>
            </div>
            {/* deals image block */}
            <div className="deals-graph">
              <p className="graphtag">
                <svg
                  width={8}
                  height={8}
                  viewBox="0 0 8 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx={4} cy={4} r={3} stroke="#109CF1" strokeWidth={2} />
                </svg>
                Recent Disaster
              </p>
              <div className="graph">
                <img
                  className="img-graph"
                  src="https://raw.githubusercontent.com/ShoshaTheTarnegolet/Dashboard-Project/80ca03eb6004ebaf7f2bb13122e677d4c0449aa5/img/deals_graphic.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* deals block ends*/}
          {/* task-graph block */}
          <div className="task">
            <div className="panelHeader d-flex">
              <h3>Tasks</h3>
              <p className="viewSelect">
                Show: <span className="viewChose">This month</span>
              </p>
            </div>
            {/* panelHeader */}
            <div className="task-graph">
              <img
                className="img-graph"
                src="https://raw.githubusercontent.com/ShoshaTheTarnegolet/Dashboard-Project/80ca03eb6004ebaf7f2bb13122e677d4c0449aa5/img/circle.svg"
                alt=""
              />
              <div className="gr-explanation">
                <div className="graphtag">
                  <svg
                    width={8}
                    height={8}
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={4}
                      cy={4}
                      r={3}
                      stroke="#FFB946"
                      strokeWidth={2}
                    />
                  </svg>
                  <p>Active</p>
                </div>
                <div className="graphtag">
                  <svg
                    width={8}
                    height={8}
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={4}
                      cy={4}
                      r={3}
                      stroke="#2ED47A"
                      strokeWidth={2}
                    />
                  </svg>
                  <p>Completed</p>
                </div>
                <div className="graphtag">
                  <svg
                    width={8}
                    height={8}
                    viewBox="0 0 8 8"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx={4}
                      cy={4}
                      r={3}
                      stroke="#F7685B"
                      strokeWidth={2}
                    />
                  </svg>
                  <p>Ended</p>
                </div>
              </div>
            </div>
          </div>
          {/* task-graph block ends*/}
        </div>
        {/* second block ends */}
      </div>
      {/*      main ends */}
    </div>
    {/* wrapper */}
  </div>
  
    </div>
  )
}

export default dashboard