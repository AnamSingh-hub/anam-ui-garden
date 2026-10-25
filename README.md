# Anam UI Garden

## Project Description
Anam UI Garden is a React and TypeScript component library created for Web Component Library Assignment 12. It contains reusable UI components styled with Styled Components.

## Components
The project includes the following components:

1. Button
2. Label
3. Text
4. Table
5. TableHeader
6. TableRow
7. TableCell
8. TableFooter
9. Dropdown
10. RadioButton
11. Img
12. HeroImage
13. Card

## Technologies Used
- React
- TypeScript
- Styled Components
- Storybook
- Jest and React Testing Library
- Docker and Nginx

## Run the Project Locally
Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm start
```

## Run Storybook
Start Storybook to view the component stories:

```bash
npm run storybook
```

Storybook normally opens at http://localhost:6006.

## Run Tests
Run the test suite:

```bash
npm test -- --watchAll=false
```

## Create a Production Build
```bash
npm run build
```

## Run with Docker
Build the Docker image:

```bash
docker build -t anam_ui_garden .
```

Start the container:

```bash
docker run --name anam_coding_assignment12 -p 8083:80 -d anam_ui_garden
```

Open http://localhost:8083 to view the application.

To stop the container:

```bash
docker stop anam_coding_assignment12
```

## GitHub Repository
https://github.com/AnamSingh-hub/anam-ui-garden
