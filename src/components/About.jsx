import React from 'react'
import './About.css'

function About() {
  const stats = [
    { number: '10+', label: 'Anos de Experiência' },
    { number: '5000+', label: 'Mudanças Realizadas' },
    { number: '98%', label: 'Clientes Satisfeitos' },
    { number: '24/7', label: 'Atendimento' }
  ]

  const values = [
    { icon: '🎯', title: 'Compromisso', text: 'Cumprimos prazos e garantimos a satisfação total' },
    { icon: '🛡️', title: 'Segurança', text: 'Seus bens protegidos com seguro total' },
    { icon: '⚡', title: 'Agilidade', text: 'Processos otimizados para entregas rápidas' },
    { icon: '💰', title: 'Preço Justo', text: 'Valores transparentes e competitivos' }
  ]

  return (
    <section id="sobre" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2>Sobre a Barreto Carretos</h2>
            <p className="lead">
              Mais de uma década movendo sonhos e construindo confiança na Zona Leste de São Paulo
            </p>
            <p>
              Fundada em 2014, a Barreto Carretos e Transportes nasceu do sonho de oferecer 
              serviços de transporte com excelência, segurança e preços justos. Começamos com 
              um único veículo e, hoje, contamos com uma frota completa e uma equipe altamente 
              capacitada.
            </p>
            <p>
              Nossa sede na Zona Leste de São Paulo nos permite atender com rapidez e eficiência 
              toda a Grande São Paulo. Especializamo-nos em mudanças residenciais e comerciais, 
              carretos, fretes e transportes especiais.
            </p>
            <p>
              <strong>Nossa missão</strong> é transportar não apenas objetos, mas sonhos, memórias 
              e novos começos, sempre com o máximo cuidado e profissionalismo.
            </p>

            <div className="values-grid">
              {values.map((value, index) => (
                <div key={index} className="value-item">
                  <span className="value-icon">{value.icon}</span>
                  <div>
                    <h4>{value.title}</h4>
                    <p>{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="about-stats">
            <div className="stats-card">
              <h3>Números que Falam</h3>
              {stats.map((stat, index) => (
                <div key={index} className="stat-item">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="truck-visual">
              <span>🚛</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
