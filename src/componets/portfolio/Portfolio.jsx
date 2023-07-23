import React from 'react'
import './portfolio.css'
import StockImg from '../../assests/stock.jpeg'
import StripeImg from '../../assests/stripe-project.jpeg'
import TwitterImg from '../../assests/twitter-clone.jpeg'
import Jobly from '../../assests/jobs.jpeg'
import GSM from '../../assests/gsmLogo.jpeg'
import Redux from '../../assests/comingsoon.jpeg'


const Portfolio = () => {
  const PortfolioData = [
    {
      id:1,
      image: StripeImg,
      title: 'Elevated Fitness Store',
      tecnologyUsed: 'This website is for trainers to be able track and bill thier clients. It uses React, JavaScript and the Stripe API on the frontend and the backend uses Express and NodeJS to store users data.',
      github: "https://github.com/abohling/Elevated-Fitness",
      demo: "https://elevatedfitsolutions.com/"
    },
    {
      id:2,
      image: GSM,
      title: 'GoodSignature Website',
      tecnologyUsed: 'This clients website is hosted by WordPress and with newly added PHP and JavaScript it allows the owner to use custom templated PHP blocks to add and take down properites as needed without having to change a single line of code.',
      github: "https://goodsignature.com/",
      demo: "https://goodsignature.com/"
    },
    {
      id:3,
      image: Jobly,
      title: 'Jobly',
      tecnologyUsed: 'Jobly app recreates a job posting website. It allows users to navigate a SQL database full of jobs, businesses, and employees. Users can apply to jobs, follow business or search for certain employees. It uses React and JavaScript on the frontend and uses NodeJS and Express on the backend.',
      github: "https://github.com/abohling/react_jobly",
      demo: "www.google.com"
    },
    {
      id:4,
      image: StockImg,
      title: 'Stock Finance App',
      tecnologyUsed: 'This app allows users to see live prices, news, and historical information about any stocks in the US stock market. This app uses Python, Jinja, ChartJS, Yahoo Finance API and FlaskForm on the frontend and JavaScript, Python, Flask, and SQLite on the backend.',
      github: "https://github.com/abohling/stock-picker",
      demo: "https://look-up-stock.herokuapp.com/home"
    },
    {
      id:5,
      image: TwitterImg,
      title: 'Twitter clone',
      tecnologyUsed: 'This is a remake of Twitter. This app allows users to message directly to one another or post on feeds. It uses Python, Jinja, and FlaskForm on the frontend.',
      github: "https://github.com/abohling/twitter-clone",
      demo: "www.google.com"
    },
    {
      id:6,
      image: Redux,
      title: 'Redux Blog Project',
      tecnologyUsed: 'An app for exploring the people, planets, and films of the Star Wars franchise.',
      github: "https://github.com/abohling/starwarsly",
      demo: "www.google.com"
    }
  ]

  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        {
          PortfolioData.map(({id,image, title,tecnologyUsed, github, demo}) => {
            return(
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <div className='text__container'>
                <h3>{title}</h3>
                <h5>{tecnologyUsed}</h5>
              </div>
              <div className='portfolio__item-cta'>
                {id < 3 ? (
                  <a href={demo} className='btn' target='_blank' rel="noreferrer">Live App</a>
                ) : (
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                )}

              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio