import React from 'react'
import Navbar from '../Navbar/Navbar'
import SearchForm from '../SearchForm/SearchForm'
import './Header.css'
const Header = () => {
  return (
    <div className='holder'>
      <header className='header'>
        <Navbar/>
        <div className='header-content flex flex-c text-center text-white'>
          <h2 className='header-title text-capitalize'>Find book of your choice</h2><br/>
          <p className='header-text fs-18 fw-6'>"One glance at a book and you hear the voice of another person, perhaps someone dead for 1,000 years. To read is to voyage through time."<br/>- Carl Sagan</p>
          <SearchForm/>
        </div>
      </header>
    </div>
  )
}

export default Header
