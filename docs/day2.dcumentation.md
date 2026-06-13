# DAY 2: Deploy Frontend to Vercel

# WHAT I DID:
- Created frontend folder inside mern-deploy
- Copied React app from week7-polish
- Created .env.production with API URL
- Created vercel.json for routing
- Pushed to GitHub
- Deployed on Vercel with root directory set to "frontend"
- Got live URL: https://mern-deploy-lac-nine.vercel.app

# FILES CREATED:
frontend/.env.production
frontend/vercel.json

# ENVIRONMENT VARIABLE:
VITE_API_URL=https://mern-deploy.up.railway.app

# ERRORS FACED:
- Frontend folder not showing in Vercel → Added files and pushed
- Missing pages folder → Copied from original project
- Lazy import missing parenthesis → Fixed App.jsx
- Module resolution errors → Copied all src folders (pages, components, context, hooks, api)

# Frontend successfully deployed and connected to backend