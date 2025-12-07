# Carambar Blagues - API (Backend)

## Description
API Node/Express/Sequelize (SQLite). 

Back-end Render: https://carambar-backend-figj.onrender.com
Documentation Swagger disponible : https://carambar-backend-figj.onrender.com/api-docs

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
