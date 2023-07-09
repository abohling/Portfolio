import React from 'react'
import './portfolio.css'
import StockImg from '../../assests/stock.jpeg'
import StripeImg from '../../assests/stripe-project.jpeg'
import TwitterImg from '../../assests/twitter-clone.jpeg'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={StockImg} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://.com" className='btn' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={StripeImg} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://.com" className='btn' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={TwitterImg} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://.com" className='btn' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={StockImg} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://.com" className='btn' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={StockImg} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://.com" className='btn' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={StockImg} alt="" />
          </div>
          <h3>This is a portfolio item title</h3>
          <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
          <a href="https://.com" className='btn' target='_blank' rel="noreferrer">Live Demo</a>
        </article>
      </div>

    </section>
  )
}

export default Portfolio