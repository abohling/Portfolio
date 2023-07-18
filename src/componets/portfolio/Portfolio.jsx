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
      image: StockImg,
      title: 'Stock Fiance App',
      tecnologyUsed: 'This app uses Python, Jinja, and FlaskForm on the frontend side to take users searched terms and preform API calls to Yahoo Fiance. Each search gives you live data, graphs, and other financial information. The backend uses Python, Flask, and SQLAlchemy to save users protected logins and search results.',
      github: "https://github.com/abohling/stock-picker",
      demo: "https://look-up-stock.herokuapp.com/home"
    },
    {
      id:2,
      image: StripeImg,
      title: 'Elevated Fitness Store',
      tecnologyUsed: 'This website used React and Javascipt on the frontend to display users workouts, measurables, and preforms billing using Stripe API. The backend uses Express and NodeJS to store users data.',
      github: "https://github.com/abohling/Elevated-Fitness",
      demo: "www.google.com"
    },
    {
      id:3,
      image: TwitterImg,
      title: 'Twitter clone',
      tecnologyUsed: 'This is a remake of version of Twitter. This app uses Python, Jinja, and FlaskForm on the frontend side allowing users to message directly and post. All the routes and modeling are protected.',
      github: "https://github.com/abohling/twitter-clone",
      demo: "www.google.com"
    },
    {
      id:4,
      image: Jobly,
      title: 'Jobly',
      tecnologyUsed: 'Jobly is a React and JavaScript app that allows useres to search for particular jobs, business and employees. The backend uses Node and Expess to create a relational database which fullfills the queries from the frontend.',
      github: "https://github.com/abohling/react_jobly",
      demo: "www.google.com"
    },
    {
      id:5,
      image: GSM,
      title: 'GoodSignature Website',
      tecnologyUsed: 'This project is work I did for a client. Hosted by WordPress, we coded in PHP and JavaScript to create blocks for the client to be able to add and take down units as needed without having to change a single line of code.',
      github: "https://goodsignature.com/",
      demo: "https://goodsignature.com/"
    },
    {
      id:6,
      image: Redux,
      title: 'Redux Blog Project',
      tecnologyUsed: 'An app for exploring the people, planets, and films of the Star Wars franchise.',
      github: "https://github.com/abohling",
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
                <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                <a href={demo} className='btn' target='_blank' rel="noreferrer">Live Demo</a>
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