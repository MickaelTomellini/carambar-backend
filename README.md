# Carambar Blagues - API (Backend)

## Description
API Node/Express/Sequelize (SQLite). 

- **Backend API** : https://carambar-backend-figj.onrender.com
- **Documentation Swagger** : https://carambar-backend-figj.onrender.com/api-docs

- **Front page : [https://mickaeltomellini.github.io/carambar-frontend/](https://mickaeltomellini.github.io/carambar-frontend/)
- **Github Frontend: [https://github.com/MickaelTomellini/carambar-frontend](https://github.com/MickaelTomellini/carambar-frontend)
  
---

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
