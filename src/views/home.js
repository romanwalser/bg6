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
        href="https://openadvices.com/short/88749?stream_uuid=5005b71b-a933-4fa1-a7a8-7844f0f8a2a0&trek=1"
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
