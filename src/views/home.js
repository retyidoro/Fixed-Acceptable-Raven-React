import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Fixed Acceptable Raven</title>
        <meta property="og:title" content="Fixed Acceptable Raven" />
      </Helmet>
      <div className="home-container1"></div>
      <h1>Heading</h1>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="home-image"
      />
    </div>
  )
}

export default Home
