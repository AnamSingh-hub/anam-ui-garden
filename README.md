Anam UI Garden -- Coding Assignment 13
React UI Component Library with automated code quality checks and Docker
deployment.
Project Information
- Project: Anam UI Garden
- Assignment: Coding Assignment 13 -- UI Component Library
- Framework: React
- Language: TypeScript
- Styling: Styled Components
- Testing: Jest and React Testing Library
- Code Formatting: Prettier
- Code Linting: ESLint
- Git Hooks: Husky
- Continuous Integration: GitHub Actions
- Production Server: Docker and Nginx
Requirements
- Node.js 22
- npm
- Docker Desktop
- Git
Install Dependencies
Clone the repository and enter the project directory:
git clone https://github.com/AnamSingh-hub/anam-ui-garden.git
cd anam-ui-garden
npm ci
Run the Application
Start the development server:
npm start
The development application is available at:

http://localhost:3000
Code Quality Checks
The project uses Prettier, ESLint, and automated tests.
Prettier
Format source files:
npm run format
Check formatting without changing files:
npm run format:check
ESLint
Run the lint check:
npm run lint
Automated Tests
Run the tests once:
npm run test:ci
Husky Pre-Commit Hook
Husky runs the quality checks before a Git commit.

The .husky/pre-commit hook runs:
1. npm run format:check
2. npm run lint
3. npm run test:ci
If a check fails, the commit is stopped. Fix the reported issue and try
the commit again.

Husky is initialized through the prepare script in package.json.
GitHub Actions -- Continuous Integration
The workflow is located at:

.github/workflows/ci.yml

GitHub Actions runs automatically on pushes and pull requests. It:
1. Checks out the repository.
2. Sets up Node.js 22.
3. Installs dependencies with npm ci.
4. Checks formatting with Prettier.
5. Runs ESLint.
6. Runs the automated tests.
7. Builds the production application.
To review workflow results:
1. Open the GitHub repository.
2. Select the Actions tab.
3. Open the latest workflow run.
4. Review the status of each step.
A failed check is reported in the workflow run. To block merges when
checks fail, configure the workflow status check as required in the
repository's branch protection settings.
Docker Production Deployment
The Dockerfile uses a multi-stage build:
- Build stage: Node.js 22 Alpine installs dependencies, runs
  formatting, linting and tests, and creates the production React
  build.
- Production stage: Nginx Alpine serves the production files.
The required build working directory is:

/dhillon_anam_ui_garden_build_checks
Build the Docker Image
Run this command from the project root:
docker build -t dhillon_anam_coding_assignment13 .
Run the Docker Container
docker run --name dhillon_anam_coding_assignment13 -p 8018:80 -d dhillon_anam_coding_assignment13
The application is available at:

http://localhost:8018
Check Running Containers
docker ps
Stop the Container
docker stop dhillon_anam_coding_assignment13
Remove the Container
docker rm dhillon_anam_coding_assignment13
Project Structure
anam-ui-garden/
├── .github/
│   └── workflows/
│       └── ci.yml
├── .husky/
│   └── pre-commit
├── public/
├── src/
│   └── components/
├── .prettierignore
├── .prettierrc.json
├── Dockerfile
├── package.json
├── package-lock.json
└── README.md
GitHub Repository
https://github.com/AnamSingh-hub/anam-ui-garden
Assignment 13 Summary
This project adds automated code quality checks to the development
process. Prettier maintains consistent formatting, ESLint checks code
quality, and automated tests verify component behaviour.

Husky runs the checks before commits, while GitHub Actions runs them
during pushes and pull requests. Docker creates a production build and
Nginx serves the React application.