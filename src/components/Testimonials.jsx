import React from 'react'
import './Testimonials.css'

function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      location: 'Tatuapé, SP',
      rating: 5,
      text: 'Excelente serviço! A equipe foi super cuidadosa com meus móveis e o preço foi muito justo. Recomendo demais!',
      avatar: '👩'
    },
    {
      name: 'João Santos',
      location: 'Penha, SP',
      rating: 5,
      text: 'Pontualidade e profissionalismo. Fizeram minha mudança em tempo recorde e nada foi danificado. Muito satisfeito!',
      avatar: '👨'
    },
    {
      name: 'Ana Paula',
      location: 'Vila Carrão, SP',
      rating: 5,
      text: 'Melhor custo-benefício da região! Contratei para uma mudança comercial e superou todas as expectativas.',
      avatar: '👩‍💼'
    },
    {
      name: 'Carlos Oliveira',
      location: 'Artur Alvim, SP',
      rating: 5,
      text: 'Equipe atenciosa e muito cuidadosa. Fizeram todo o trabalho pesado e ainda ajudaram na organização. Top!',
      avatar: '👨‍💼'
    },
    {
      name: 'Fernanda Costa',
      location: 'São Mateus, SP',
      rating: 5,
      text: 'Usei o serviço 3 vezes já e sempre impecável. Confiança total! O simulador de frete é muito prático.',
      avatar: '👩‍🦰'
    },
    {
      name: 'Roberto Alves',
      location: 'Itaquera, SP',
      rating: 5,
      text: 'Rápidos, eficientes e com preço justo. A Barreto Carretos é a melhor opção da Zona Leste sem dúvida!',
      avatar: '👨‍🦳'
    }
  ]

  return (
    <section id="depoimentos" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>O Que Dizem Nossos Clientes</h2>
          <p>Histórias reais de quem confia na Barreto Carretos</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in-up">
              <div className="testimonial-header">
                <div className="testimonial-avatar">{testimonial.avatar}</div>
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="location">📍 {testimonial.location}</p>
                </div>
              </div>
              <div className="testimonial-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="trust-badges">
          <div className="badge">
            <span>✓</span>
            <p>Empresa Verificada</p>
          </div>
          <div className="badge">
            <span>🛡️</span>
            <p>Seguro Total</p>
          </div>
          <div className="badge">
            <span>🏆</span>
            <p>Prêmio Excelência</p>
          </div>
          <div className="badge">
            <span>📱</span>
            <p>Atendimento 24/7</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
