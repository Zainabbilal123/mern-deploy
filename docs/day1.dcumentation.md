# DAY 1: Deploy Backend to Railway

# WHAT I DID:
- Created separate backend-only folder
- Moved package.json to root level
- Created railway.json config file
- Pushed code to GitHub
- Deployed on Railway
- Added environment variables (MONGO_URI, JWT_SECRET, etc.)
- Generated domain: https://mern-deploy.up.railway.app

# COMMANDS USED:
cd C:\Users\BISMILLAH\Desktop\mern-deploy
git init
git add .
git commit -m "Backend ready for Railway"
git push

# ENVIRONMENT VARIABLES ADDED:
- MONGO_URI
- JWT_SECRET
- JWT_EXPIRES_IN=15m
- NODE_ENV=production
- PORT=3000

# ERRORS FACED:
- Railway couldn't find package.json → Moved files to root
- Missing environment variables → Added them in Railway dashboard
- Build failed → Fixed start script in package.json

# Backend successfully deployed and running