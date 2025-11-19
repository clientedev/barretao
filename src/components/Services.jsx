import React from 'react'
import './Services.css'

function Services() {
  const services = [
    {
      icon: '📦',
      title: 'Mudanças Residenciais',
      description: 'Mudança completa com embalagem, transporte e montagem de móveis',
      features: ['Equipe treinada', 'Material de embalagem', 'Montagem/Desmontagem']
    },
    {
      icon: '🏢',
      title: 'Mudanças Comerciais',
      description: 'Transporte de equipamentos e mobiliário para empresas',
      features: ['Horário flexível', 'Seguro corporativo', 'Mínimo de interrupção']
    },
    {
      icon: '🚚',
      title: 'Carreto e Frete',
      description: 'Transporte de cargas e mercadorias de todos os tamanhos',
      features: ['Diversos veículos', 'Entregas rápidas', 'Rastreamento']
    },
    {
      icon: '🛋️',
      title: 'Transporte de Móveis',
      description: 'Especializado em móveis novos e usados com máxima proteção',
      features: ['Embalagem especial', 'Cuidado extra', 'Zero arranhões']
    },
    {
      icon: '🏗️',
      title: 'Descarte e Remoção',
      description: 'Remoção de entulhos, móveis velhos e materiais de construção',
      features: ['Descarte correto', 'Limpeza inclusa', 'Ecologicamente responsável']
    },
    {
      icon: '📍',
      title: 'Entregas Expressas',
      description: 'Entregas urgentes na Grande São Paulo',
      features: ['Same day delivery', 'Tracking em tempo real', 'Prioridade máxima']
    }
  ]

  return (
    <section id="servicos" className="services">
      <div className="container">
        <div className="section-header">
          <h2>Nossos Serviços</h2>
          <p>Soluções completas em transporte e logística para todas as suas necessidades</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card fade-in-up">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span>✓</span> {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="cta-box">
          <h3>Precisa de um orçamento personalizado?</h3>
          <p>Nossa equipe está pronta para atender suas necessidades específicas</p>
          <button 
            className="btn-cta"
            onClick={() => {
              const el = document.getElementById('contato')
              el?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Entre em Contato
          </button>
        </div>
      </div>
    </section>
  )
}

export default Services
