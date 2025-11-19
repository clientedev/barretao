import React from 'react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span className="logo-icon">🚚</span>
              <div>
                <h3>Barreto Carretos</h3>
                <p>Transportes & Logística</p>
              </div>
            </div>
            <p className="footer-description">
              Mais de 10 anos oferecendo soluções completas em transporte, 
              mudanças e logística na Zona Leste de São Paulo.
            </p>
            <div className="footer-social">
              <a href="#" aria-label="Facebook">📘</a>
              <a href="#" aria-label="Instagram">📷</a>
              <a href="#" aria-label="LinkedIn">💼</a>
              <a href="#" aria-label="WhatsApp">💬</a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Serviços</h4>
            <ul>
              <li><a href="#servicos">Mudanças Residenciais</a></li>
              <li><a href="#servicos">Mudanças Comerciais</a></li>
              <li><a href="#servicos">Carreto e Frete</a></li>
              <li><a href="#servicos">Transporte de Móveis</a></li>
              <li><a href="#servicos">Entregas Expressas</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Links Rápidos</h4>
            <ul>
              <li><a href="#inicio">Início</a></li>
              <li><a href="#cotacao">Simular Frete</a></li>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#depoimentos">Depoimentos</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contato</h4>
            <ul className="contact-list">
              <li>
                <span>📱</span>
                <a href="tel:+5511999999999">(11) 99999-9999</a>
              </li>
              <li>
                <span>✉️</span>
                <a href="mailto:contato@barretocarretos.com.br">contato@barretocarretos.com.br</a>
              </li>
              <li>
                <span>📍</span>
                <span>Zona Leste, São Paulo - SP</span>
              </li>
              <li>
                <span>🕐</span>
                <span>Seg-Sáb: 7h-20h</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Barreto Carretos e Transportes. Todos os direitos reservados.</p>
          <div className="footer-links">
            <a href="#">Política de Privacidade</a>
            <span>|</span>
            <a href="#">Termos de Serviço</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
