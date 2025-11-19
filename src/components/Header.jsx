import React, { useState, useEffect } from 'react'
import './Header.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMenuOpen(false)
    }
  }

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-content">
        <div className="logo">
          <span className="logo-icon">🚚</span>
          <div className="logo-text">
            <h1>Barreto Carretos</h1>
            <p>Transportes & Logística</p>
          </div>
        </div>
        
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <nav className={`nav ${menuOpen ? 'open' : ''}`}>
          <a onClick={() => scrollToSection('inicio')}>Início</a>
          <a onClick={() => scrollToSection('cotacao')}>Cotação</a>
          <a onClick={() => scrollToSection('servicos')}>Serviços</a>
          <a onClick={() => scrollToSection('sobre')}>Sobre</a>
          <a onClick={() => scrollToSection('depoimentos')}>Depoimentos</a>
          <a onClick={() => scrollToSection('contato')} className="btn-contact">Contato</a>
        </nav>
      </div>
    </header>
  )
}

export default Header
