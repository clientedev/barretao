# Barreto Carretos e Transportes

## Visão Geral
Site moderno e completo para empresa de carretos e transportes com sede na Zona Leste de São Paulo. O site oferece um sistema inteligente de cotação de frete baseado em CEP, com cálculo automático de distância e preços justos e lucrativos.

## Status do Projeto
- **Estado Atual**: Aplicação completa e funcional
- **Data de Criação**: 19 de novembro de 2025
- **Tecnologia**: React + Vite
- **Origem**: Migração do GitHub (https://github.com/clientedev/barretao)

## Estrutura do Projeto

### Tecnologias Utilizadas
- **Frontend**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Estilização**: CSS puro com variáveis CSS
- **API Externa**: ViaCEP para validação de endereços

### Arquitetura de Arquivos
```
/
├── src/
│   ├── components/          # Componentes React
│   │   ├── Header.jsx       # Cabeçalho com navegação
│   │   ├── Hero.jsx         # Seção principal/banner
│   │   ├── FreightCalculator.jsx  # Calculadora de frete (principal)
│   │   ├── Services.jsx     # Seção de serviços
│   │   ├── About.jsx        # Sobre a empresa
│   │   ├── Testimonials.jsx # Depoimentos de clientes
│   │   ├── Contact.jsx      # Formulário de contato
│   │   └── Footer.jsx       # Rodapé
│   ├── utils/
│   │   └── cepUtils.js      # Utilitários para CEP e cálculo de frete
│   ├── App.jsx              # Componente raiz
│   ├── main.jsx             # Entry point
│   └── index.css            # Estilos globais
├── index.html               # HTML principal
├── vite.config.js           # Configuração do Vite
└── package.json             # Dependências do projeto
```

## Funcionalidades Principais

### 1. Calculadora de Frete Inteligente
- **Busca de CEP**: Integração com API ViaCEP para validação automática
- **Cálculo Automático**: Calcula distância e preço baseado na localização
- **Tipos de Veículo**: 4 opções (pequeno, médio, grande, caminhão)
- **Ajudantes**: Opção de adicionar 0-3 ajudantes (+R$ 50 cada)
- **Desconto Zona Leste**: 10% de desconto para região base da empresa
- **Botão WhatsApp**: Envio direto da cotação via WhatsApp

### 2. Design Moderno e Responsivo
- Layout adaptável para desktop, tablet e mobile
- Tema profissional com cores de logística e transporte
- Animações suaves e transições
- Ícones emoji para melhor experiência visual

### 3. Seções do Site
- **Hero**: Banner principal com estatísticas e CTAs
- **Calculadora**: Sistema de cotação de frete
- **Serviços**: 6 tipos de serviços oferecidos
- **Sobre**: História e valores da empresa
- **Depoimentos**: 6 avaliações de clientes
- **Contato**: Formulário e informações de contato
- **Footer**: Links rápidos e redes sociais

## Lógica de Cálculo de Frete

### Base de Cálculo
- **CEP Base**: 03828-000 (Zona Leste, São Paulo)
- **Coordenadas Base**: -23.5557, -46.4731

### Preços Base por Veículo
- Veículo Pequeno: R$ 80
- Veículo Médio: R$ 150
- Veículo Grande: R$ 250
- Caminhão: R$ 400

### Fórmula de Cálculo
```
Preço Final = Preço Base + (Distância × R$ 3,50/km) + (Ajudantes × R$ 50)
```

### Desconto Especial
- 10% de desconto para Zona Leste de São Paulo
- Aplicado automaticamente com base no bairro/localidade

## Configuração de Desenvolvimento

### Comandos Disponíveis
- `npm run dev`: Inicia servidor de desenvolvimento (porta 5000)
- `npm run build`: Gera build de produção
- `npm run preview`: Preview do build de produção

### Servidor de Desenvolvimento
- **Host**: 0.0.0.0 (necessário para Replit)
- **Porta**: 5000
- **Hot Reload**: Habilitado

## Deployment

### Configuração
- **Tipo**: Static site
- **Build**: `npm run build`
- **Diretório Público**: `dist`

### Para Publicar
1. Clicar no botão "Publish" no Replit
2. O site será buildado automaticamente
3. Deployment será feito como site estático

## Possíveis Melhorias Futuras
- Integração com Google Maps para rotas exatas
- Sistema de agendamento online
- Painel administrativo para gerenciar fretes
- Sistema de rastreamento em tempo real
- Integração com gateway de pagamento
- Chat online para suporte
- Blog com dicas de mudança e transporte
- Sistema de avaliações verificadas

## Notas Técnicas
- Site 100% client-side (sem backend)
- API ViaCEP pública e gratuita
- Estimativa de coordenadas baseada em cidades conhecidas
- Cálculo de distância usando fórmula de Haversine
- Número WhatsApp placeholder (11) 99999-9999 - deve ser atualizado

## Contato
Para dúvidas sobre o código ou melhorias, consulte a documentação do React e Vite.
