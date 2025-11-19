import React, { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const whatsappMessage = `Olá! Meu nome é ${formData.name}.\n\nEmail: ${formData.email}\nTelefone: ${formData.phone}\n\nMensagem: ${formData.message}`
    window.open(`https://wa.me/5511999999999?text=${encodeURIComponent(whatsappMessage)}`, '_blank')
  }

  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="section-header">
          <h2>Entre em Contato</h2>
          <p>Estamos prontos para atender você. Fale conosco agora!</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Informações de Contato</h3>
            <p className="contact-intro">
              Nossa equipe está disponível para esclarecer suas dúvidas e fornecer 
              o melhor atendimento. Entre em contato através dos canais abaixo:
            </p>

            <div className="info-items">
              <div className="info-item">
                <span className="info-icon">📱</span>
                <div>
                  <h4>Telefone / WhatsApp</h4>
                  <a href="tel:+5511999999999">(11) 99999-9999</a>
                  <p>Atendimento 24 horas</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">✉️</span>
                <div>
                  <h4>E-mail</h4>
                  <a href="mailto:contato@barretocarretos.com.br">contato@barretocarretos.com.br</a>
                  <p>Respondemos em até 2 horas</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">📍</span>
                <div>
                  <h4>Endereço</h4>
                  <p>Zona Leste, São Paulo - SP</p>
                  <p>CEP: 03828-000</p>
                </div>
              </div>

              <div className="info-item">
                <span className="info-icon">🕐</span>
                <div>
                  <h4>Horário de Atendimento</h4>
                  <p>Segunda a Sábado: 7h - 20h</p>
                  <p>Domingo: 8h - 18h</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <h4>Redes Sociais</h4>
              <div className="social-icons">
                <a href="#" className="social-icon">📘 Facebook</a>
                <a href="#" className="social-icon">📷 Instagram</a>
                <a href="#" className="social-icon">💼 LinkedIn</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <h3>Envie uma Mensagem</h3>
              
              <div className="form-group">
                <label htmlFor="name">Nome Completo *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Seu nome"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">E-mail *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="seu@email.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Telefone / WhatsApp *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensagem *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Descreva o que você precisa..."
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                📱 Enviar via WhatsApp
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
