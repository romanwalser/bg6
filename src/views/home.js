import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>News of Bulgaria TV</title>
        <meta property="og:title" content="News of Bulgaria TV" />
      </Helmet>
      <a
        href="https://openadvices.com/short/89209?stream_uuid=a39889cb-2372-47a3-a6d5-be0f016c8a72&trek=1"
        target="_self"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/bububgbut.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
