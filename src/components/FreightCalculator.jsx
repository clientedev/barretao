import React, { useState } from 'react'
import { fetchAddressFromCEP, calculateFreight, formatCEP } from '../utils/cepUtils'
import './FreightCalculator.css'

function FreightCalculator() {
  const [cep, setCep] = useState('')
  const [address, setAddress] = useState(null)
  const [vehicleType, setVehicleType] = useState('medium')
  const [helpers, setHelpers] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [result, setResult] = useState(null)
  const [cargoSize, setCargoSize] = useState({
    length: '',
    width: '',
    height: '',
    weight: ''
  })

  const handleCepChange = (e) => {
    const formatted = formatCEP(e.target.value)
    setCep(formatted)
    setError('')
    setResult(null)
  }

  const handleCepBlur = async () => {
    if (cep.replace(/\D/g, '').length === 8) {
      setLoading(true)
      setError('')
      try {
        const addressData = await fetchAddressFromCEP(cep)
        setAddress(addressData)
      } catch (err) {
        setError(err.message)
        setAddress(null)
      } finally {
        setLoading(false)
      }
    }
  }

  const handleCalculate = (e) => {
    e.preventDefault()
    
    if (!address) {
      setError('Por favor, informe um CEP válido')
      return
    }

    const calculation = calculateFreight(address, vehicleType, parseInt(helpers), cargoSize)
    setResult(calculation)
  }

  const handleCargoSizeChange = (field, value) => {
    setCargoSize(prev => ({
      ...prev,
      [field]: value
    }))
    setResult(null)
  }

  const vehicles = [
    { id: 'small', name: 'Veículo Pequeno', desc: 'Carros e motos', icon: '🚗' },
    { id: 'medium', name: 'Veículo Médio', desc: 'Van/Utilitário', icon: '🚐' },
    { id: 'large', name: 'Veículo Grande', desc: 'Caminhão 3/4', icon: '🚚' },
    { id: 'truck', name: 'Caminhão', desc: 'Caminhão toco', icon: '🚛' }
  ]

  return (
    <section id="cotacao" className="freight-calculator">
      <div className="container">
        <div className="section-header">
          <h2>Simule seu Frete</h2>
          <p>Calcule o valor do seu transporte de forma rápida e transparente</p>
        </div>

        <div className="calculator-wrapper">
          <div className="calculator-form">
            <form onSubmit={handleCalculate}>
              <div className="form-group">
                <label htmlFor="cep">
                  <span className="icon">📍</span>
                  CEP de Destino
                </label>
                <input
                  type="text"
                  id="cep"
                  placeholder="00000-000"
                  value={cep}
                  onChange={handleCepChange}
                  onBlur={handleCepBlur}
                  maxLength="9"
                  required
                />
                {loading && <span className="loading-text">Buscando endereço...</span>}
                {error && <span className="error-text">{error}</span>}
                {address && (
                  <div className="address-display">
                    <p><strong>{address.logradouro}</strong></p>
                    <p>{address.bairro} - {address.localidade}/{address.uf}</p>
                  </div>
                )}
              </div>

              <div className="form-group">
                <label>
                  <span className="icon">🚚</span>
                  Tipo de Veículo
                </label>
                <div className="vehicle-grid">
                  {vehicles.map(vehicle => (
                    <div
                      key={vehicle.id}
                      className={`vehicle-card ${vehicleType === vehicle.id ? 'selected' : ''}`}
                      onClick={() => setVehicleType(vehicle.id)}
                    >
                      <span className="vehicle-icon">{vehicle.icon}</span>
                      <h4>{vehicle.name}</h4>
                      <p>{vehicle.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="helpers">
                  <span className="icon">👷</span>
                  Ajudantes (opcional)
                </label>
                <select
                  id="helpers"
                  value={helpers}
                  onChange={(e) => setHelpers(e.target.value)}
                >
                  <option value="0">Nenhum</option>
                  <option value="1">1 Ajudante (+R$ 50)</option>
                  <option value="2">2 Ajudantes (+R$ 100)</option>
                  <option value="3">3 Ajudantes (+R$ 150)</option>
                </select>
              </div>

              <div className="form-group">
                <label>
                  <span className="icon">📏</span>
                  Dimensões da Carga (opcional)
                </label>
                <div className="cargo-dimensions">
                  <input
                    type="number"
                    placeholder="Comprimento (cm)"
                    value={cargoSize.length}
                    onChange={(e) => handleCargoSizeChange('length', e.target.value)}
                    min="0"
                  />
                  <input
                    type="number"
                    placeholder="Largura (cm)"
                    value={cargoSize.width}
                    onChange={(e) => handleCargoSizeChange('width', e.target.value)}
                    min="0"
                  />
                  <input
                    type="number"
                    placeholder="Altura (cm)"
                    value={cargoSize.height}
                    onChange={(e) => handleCargoSizeChange('height', e.target.value)}
                    min="0"
                  />
                  <input
                    type="number"
                    placeholder="Peso (kg)"
                    value={cargoSize.weight}
                    onChange={(e) => handleCargoSizeChange('weight', e.target.value)}
                    min="0"
                  />
                </div>
                <small className="form-hint">
                  Informar as dimensões ajuda a calcular o preço com mais precisão
                </small>
              </div>

              <button type="submit" className="btn-calculate">
                Calcular Frete
              </button>
            </form>
          </div>

          {result && (
            <div className="result-card fade-in-up">
              <h3>Resultado da Cotação</h3>
              
              <div className="result-details">
                <div className="result-item">
                  <span className="result-label">Valor Total</span>
                  <span className="result-value price">
                    R$ {result.price.toFixed(2)}
                  </span>
                </div>

                <div className="result-item">
                  <span className="result-label">Distância Estimada</span>
                  <span className="result-value">{result.distance} km</span>
                </div>

                <div className="result-item">
                  <span className="result-label">Tempo Estimado</span>
                  <span className="result-value">{result.estimatedTime} min</span>
                </div>

                {result.volumeFactor && (
                  <div className="result-item">
                    <span className="result-label">Volume da Carga</span>
                    <span className="result-value">{result.volumeFactor} m³</span>
                  </div>
                )}

                {result.isZonaLeste && (
                  <div className="discount-badge">
                    <span>✨ Desconto Zona Leste aplicado!</span>
                  </div>
                )}

                {result.sizeAdjustment && (
                  <div className="info-badge">
                    <span>📦 Ajuste por tamanho da carga aplicado</span>
                  </div>
                )}
              </div>

              <div className="result-info">
                <p>
                  <strong>✓</strong> Seguro incluso<br/>
                  <strong>✓</strong> Rastreamento em tempo real<br/>
                  <strong>✓</strong> Profissionais experientes
                </p>
              </div>

              <button 
                className="btn-whatsapp"
                onClick={() => {
                  const msg = `Olá! Gostaria de contratar um frete:\n\nDestino: ${address.logradouro}, ${address.bairro} - ${address.localidade}\nCEP: ${cep}\nVeículo: ${vehicles.find(v => v.id === vehicleType).name}\nAjudantes: ${helpers}\nValor: R$ ${result.price.toFixed(2)}`
                  window.open(`https://wa.me/5511990230583?text=${encodeURIComponent(msg)}`, '_blank')
                }}
              >
                📱 Solicitar via WhatsApp
              </button>
            </div>
          )}
        </div>

        <div className="info-cards">
          <div className="info-card">
            <span className="info-icon">⚡</span>
            <h4>Cotação Instantânea</h4>
            <p>Preço justo e transparente na hora</p>
          </div>
          <div className="info-card">
            <span className="info-icon">🎯</span>
            <h4>Zona Leste SP</h4>
            <p>Descontos especiais para a região</p>
          </div>
          <div className="info-card">
            <span className="info-icon">🛡️</span>
            <h4>Seguro Total</h4>
            <p>Seus bens protegidos durante o transporte</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreightCalculator
