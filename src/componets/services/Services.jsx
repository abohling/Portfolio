import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Wordpress Website Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mobile App/Website Design</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Experience</p>
            </li>
          </ul>
        </article>
        {/* break between */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Dynamic Web Design And Development</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Content Creation And Distribution</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Search Engine Optimization</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Unit, GUI, and Intergation Testing</p>
            </li>
          </ul>
        </article>
        {/* break between */}
        <article className="service">
          <div className="service__head">
            <h3>Backend Development</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>User Authentication</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Data Management</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Building and Managing Databases</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>CRUD Teseting</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> SDK's and RESTful API Integration</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> RESTful API Integration</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}

export default Services