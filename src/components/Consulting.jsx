import React from 'react'
import './Consulting.css'

function Consulting() {
  const consultingServices = [
    {
      icon: '📊',
      title: 'Gestão de Estoques',
      description: 'Otimização de espaços e controle eficiente de inventário',
      benefits: [
        'Redução de custos operacionais',
        'Maximização do espaço disponível',
        'Sistema de controle integrado',
        'Relatórios em tempo real'
      ]
    },
    {
      icon: '🏭',
      title: 'Armazenagem Estratégica',
      description: 'Soluções personalizadas para armazenamento de mercadorias',
      benefits: [
        'Instalações seguras e modernas',
        'Controle de temperatura e umidade',
        'Sistema de segurança 24h',
        'Localização estratégica'
      ]
    },
    {
      icon: '📦',
      title: 'Cross-Docking',
      description: 'Operação logística de transferência rápida de mercadorias',
      benefits: [
        'Redução de tempo de armazenamento',
        'Menor custo de estocagem',
        'Agilidade na distribuição',
        'Otimização de recursos'
      ]
    },
    {
      icon: '🎯',
      title: 'Layout e Organização',
      description: 'Planejamento otimizado de espaços de armazenagem',
      benefits: [
        'Aproveitamento máximo do espaço',
        'Fluxo logístico eficiente',
        'Redução de movimentações',
        'Aumento da produtividade'
      ]
    }
  ]

  const solutions = [
    {
      title: 'Armazenagem Temporária',
      description: 'Ideal para picos sazonais e excesso de estoque',
      icon: '⏰'
    },
    {
      title: 'Armazenagem de Longo Prazo',
      description: 'Contratos flexíveis para armazenamento contínuo',
      icon: '📅'
    },
    {
      title: 'Picking e Packing',
      description: 'Separação e embalagem de produtos para distribuição',
      icon: '📋'
    }
  ]

  return (
    <section id="consultoria" className="consulting">
      <div className="container">
        <div className="section-header">
          <h2>Consultoria em Logística</h2>
          <p>Especialistas em soluções de armazenagem e gestão logística</p>
        </div>

        <div className="consulting-intro">
          <div className="intro-content">
            <h3>Transforme sua operação logística</h3>
            <p>
              Com mais de 10 anos de experiência em logística e armazenagem, oferecemos 
              consultoria especializada para otimizar seus processos, reduzir custos e 
              aumentar a eficiência operacional da sua empresa.
            </p>
            <p>
              Nossa equipe de especialistas analisa suas necessidades específicas e 
              desenvolve soluções personalizadas que se adaptam ao seu negócio.
            </p>
          </div>
          <div className="intro-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Anos de Experiência</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Projetos Realizados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">95%</span>
              <span className="stat-label">Clientes Satisfeitos</span>
            </div>
          </div>
        </div>

        <div className="consulting-services">
          <h3 className="subsection-title">Nossos Serviços de Consultoria</h3>
          <div className="services-grid">
            {consultingServices.map((service, index) => (
              <div key={index} className="consulting-card">
                <div className="card-icon">{service.icon}</div>
                <h4>{service.title}</h4>
                <p>{service.description}</p>
                <ul className="benefits-list">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx}>
                      <span className="check-icon">✓</span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="storage-solutions">
          <h3 className="subsection-title">Soluções de Armazenagem</h3>
          <div className="solutions-grid">
            {solutions.map((solution, index) => (
              <div key={index} className="solution-card">
                <span className="solution-icon">{solution.icon}</span>
                <h4>{solution.title}</h4>
                <p>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="consulting-cta">
          <div className="cta-content">
            <h3>Precisa de uma consultoria personalizada?</h3>
            <p>
              Agende uma reunião com nossos especialistas e descubra como podemos 
              otimizar sua operação logística e reduzir seus custos.
            </p>
            <div className="cta-buttons">
              <button 
                className="btn-primary"
                onClick={() => {
                  const msg = 'Olá! Gostaria de agendar uma consultoria em logística e armazenagem.'
                  window.open(`https://wa.me/5511990230583?text=${encodeURIComponent(msg)}`, '_blank')
                }}
              >
                📱 Agendar Consultoria
              </button>
              <button 
                className="btn-secondary"
                onClick={() => {
                  const el = document.getElementById('contato')
                  el?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                📧 Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Consulting
