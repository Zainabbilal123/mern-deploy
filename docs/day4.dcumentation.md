# DAY 4: CI/CD with GitHub Actions

# WHAT I DID:
- Created .github/workflows/backend.yml
- Added test and deploy jobs
- Added secrets to GitHub repository
- Fixed missing environment variables

# FILES CREATED:
.github/workflows/backend.yml

# SECRETS ADDED IN GITHUB:
- MONGO_URI
- JWT_SECRET

# WORKFLOW STEPS:
1. Checkout code
2. Setup Node.js 18
3. Install dependencies
4. Create .env file from secrets
5. Run tests

# ERRORS FACED:
- Missing JWT_SECRET environment variable → Added secret in GitHub
- Missing MONGO_URI → Added secret in GitHub
- Tests failing → Modified config/env.js to be flexible

