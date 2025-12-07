# Carambar Blagues - API (Backend)

## Description
API Node/Express/Sequelize (SQLite). Documentation Swagger disponible : http://localhost:3001/api-docs

## Endpoints
- `GET /blagues` - lire toutes les blagues
- `POST /blagues` - créer un blague
- `GET /blagues/:id` - lire un blague
- `GET /blagues/random` - aléatoire

## Installation locale
```bash
git clone <repo-carambar-backend>
cd repo-carambar-backend
npm install
cp .env.example .env  
npm run dev            
