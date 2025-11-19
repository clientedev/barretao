import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToCalculator = () => {
    const element = document.getElementById('cotacao')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="inicio" className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-text fade-in-up">
          <h1>Transporte de Confiança</h1>
          <h2>Movemos seus bens com <span>segurança</span> e <span>agilidade</span></h2>
          <p>
            Soluções completas em carreto e transporte na Zona Leste de São Paulo.
            Mais de 10 anos levando o que importa para você.
          </p>
          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToCalculator}>
              Simule seu Frete
            </button>
            <button className="btn-secondary" onClick={() => {
              const el = document.getElementById('contato')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}>
              Fale Conosco
            </button>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat">
              <span className="stat-number">5000+</span>
              <span className="stat-label">Entregas Realizadas</span>
            </div>
            <div className="stat">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfação dos Clientes</span>
            </div>
          </div>
        </div>
        <div className="hero-image slide-in-right">
          <div className="truck-animation">
            <img src="/assets/hero-truck.jpg" alt="Caminhão Barreto Carretos" className="truck-img" />
          </div>
        </div>
      </div>
      <div className="scroll-indicator">
        <span>↓</span>
      </div>
    </section>
  )
}

export default Hero
