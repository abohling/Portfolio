import React from 'react'
import './portfolio.css'
import StockImg from '../../assests/stock.jpeg'
import StripeImg from '../../assests/stripe-project.jpeg'
import TwitterImg from '../../assests/twitter-clone.jpeg'
import Jobly from '../../assests/jobs.jpeg'
import ExpressMessage from '../../assests/expressmessage.jpeg'
import Redux from '../../assests/comingsoon.jpeg'


const Portfolio = () => {
  const PortfolioData = [
    {
      id:1,
      image: StockImg,
      title: 'Stock Fiance App',
      github: "https://github.com/abohling/stock-picker",
      demo: "www.google.com"
    },
    {
      id:2,
      image: StripeImg,
      title: 'Online Store with stripe api for checkouts',
      github: "https://github.com/abohling/Elevated-Fitness",
      demo: "www.google.com"
    },
    {
      id:3,
      image: TwitterImg,
      title: 'Twitter clone',
      github: "https://github.com/abohling/twitter-clone",
      demo: "www.google.com"
    },
    {
      id:4,
      image: Jobly,
      title: 'Jobly',
      github: "https://github.com/abohling/react_jobly",
      demo: "www.google.com"
    },
    {
      id:5,
      image: ExpressMessage,
      title: 'Express Message',
      github: "https://github.com/abohling/express-message",
      demo: "www.google.com"
    },
    {
      id:6,
      image: Redux,
      title: 'Redux Blog Project',
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
          PortfolioData.map(({id,image, title, github, demo}) => {
            return(
            <article key={id} className='portfolio__item'>
              <div className='portfolio__item-image'>
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
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