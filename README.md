# Online Exam System

## Overview
The Online Exam System is a web application that allows administrators to manage exam questions and students to take exams. The system includes features for auto-evaluation of multiple-choice questions (MCQs).

## Features
- **Admin Functionality**:
  - Add and manage exam questions.
  - View a list of exams.

- **Student Functionality**:
  - Take exams.
  - View exam results.

- **Auto-Evaluation**:
  - Automatic grading of multiple-choice questions.

## Project Structure
```
online-exam-system
├── backend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── shared
│   └── types
│       └── exam-types.ts
├── tests
│   ├── backend
│   └── frontend
├── .gitignore
└── README.md
```

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- TypeScript

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend and frontend directories and install dependencies:
   ```
   cd online-exam-system/backend
   npm install
   cd ../frontend
   npm install
   ```

### Running the Application
- To start the backend server:
  ```
  cd online-exam-system/backend
  npm start
  ```
- To start the frontend application:
  ```
  cd online-exam-system/frontend
  npm start
  ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License
This project is licensed under the MIT License.