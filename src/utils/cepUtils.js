const BASE_CEP = '03828-000'
const BASE_COORDS = { lat: -23.5557, lng: -46.4731 }

export async function fetchAddressFromCEP(cep) {
  try {
    const cleanCEP = cep.replace(/\D/g, '')
    
    if (cleanCEP.length !== 8) {
      throw new Error('CEP inválido')
    }

    const response = await fetch(`https://viacep.com.br/ws/${cleanCEP}/json/`)
    const data = await response.json()

    if (data.erro) {
      throw new Error('CEP não encontrado')
    }

    return data
  } catch (error) {
    throw new Error('Erro ao buscar CEP: ' + error.message)
  }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371
  const dLat = (lat2 - lat1) * Math.PI / 180
  const dLon = (lon2 - lon1) * Math.PI / 180
  const a = 
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
  return R * c
}

function estimateCoordinates(address) {
  const cityCoords = {
    'São Paulo': { lat: -23.5505, lng: -46.6333 },
    'Guarulhos': { lat: -23.4543, lng: -46.5333 },
    'Santo André': { lat: -23.6639, lng: -46.5333 },
    'São Bernardo do Campo': { lat: -23.6914, lng: -46.5650 },
    'Osasco': { lat: -23.5329, lng: -46.7919 },
    'Mauá': { lat: -23.6678, lng: -46.4611 },
    'Diadema': { lat: -23.6858, lng: -46.6228 },
    'Carapicuíba': { lat: -23.5225, lng: -46.8356 }
  }

  const city = address.localidade
  if (cityCoords[city]) {
    return cityCoords[city]
  }

  const zoneFactors = {
    'Zona Leste': { lat: -23.5557, lng: -46.4731 },
    'Zona Oeste': { lat: -23.5505, lng: -46.7333 },
    'Zona Norte': { lat: -23.4805, lng: -46.6333 },
    'Zona Sul': { lat: -23.6505, lng: -46.6333 },
    'Centro': { lat: -23.5505, lng: -46.6333 }
  }

  for (let zone in zoneFactors) {
    if (address.bairro && address.bairro.includes(zone)) {
      return zoneFactors[zone]
    }
  }

  return { lat: -23.5505, lng: -46.6333 }
}

export function calculateFreight(address, vehicleType, helpers, cargoSize = {}) {
  const destCoords = estimateCoordinates(address)
  const distance = calculateDistance(
    BASE_COORDS.lat,
    BASE_COORDS.lng,
    destCoords.lat,
    destCoords.lng
  )

  const basePrices = {
    'small': 80,
    'medium': 150,
    'large': 250,
    'truck': 400
  }

  const basePrice = basePrices[vehicleType] || 150

  let price = basePrice
  price += distance * 3.5
  price += helpers * 50

  let volumeFactor = null
  let sizeAdjustment = false

  if (cargoSize.length && cargoSize.width && cargoSize.height) {
    const volume = (cargoSize.length * cargoSize.width * cargoSize.height) / 1000000
    volumeFactor = Math.round(volume * 100) / 100

    const volumeCharge = volume * 80

    if (volumeCharge > basePrice * 0.3) {
      price += volumeCharge
      sizeAdjustment = true
    }
  }

  if (cargoSize.weight) {
    const weight = parseFloat(cargoSize.weight)
    if (weight > 50) {
      const weightCharge = (weight - 50) * 2
      price += weightCharge
      sizeAdjustment = true
    } else if (weight > 100) {
      const weightCharge = (weight - 100) * 3 + 100
      price += weightCharge
      sizeAdjustment = true
    }
  }

  const isZonaLeste = address.bairro && (
    address.bairro.toLowerCase().includes('leste') ||
    address.localidade === 'São Paulo' && distance < 15
  )

  if (isZonaLeste) {
    price *= 0.9
  }

  const minPrice = basePrices[vehicleType]
  price = Math.max(price, minPrice)

  return {
    price: Math.round(price),
    distance: Math.round(distance * 10) / 10,
    estimatedTime: Math.round(distance / 25 * 60),
    isZonaLeste,
    volumeFactor,
    sizeAdjustment
  }
}

export function formatCEP(value) {
  const numbers = value.replace(/\D/g, '')
  if (numbers.length <= 5) {
    return numbers
  }
  return `${numbers.slice(0, 5)}-${numbers.slice(5, 8)}`
}
