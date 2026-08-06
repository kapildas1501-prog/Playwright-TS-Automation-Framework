# Playwright TypeScript Automation Framework

## Overview

This project is a scalable and maintainable test automation framework built using **Playwright with TypeScript**.

The framework follows automation best practices such as:

- Page Object Model (POM)
- Playwright Fixtures
- Cross-browser testing (Chrome & Firefox)
- Parallel test execution
- Authentication handling using storageState
- Allure reporting
- Environment-based configuration

The target application used for automation is **OrangeHRM Demo Application**.

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| Playwright | Web automation |
| TypeScript | Programming language |
| Node.js | Runtime environment |
| Allure | Test reporting |
| GitHub | Source code management |

---

## Framework Structure

```
Playwright-TS-Automation-Framework
│
├── pages
│   ├── LoginPage.ts          # Login page locators and actions
│   
│
├── fixtures
│   └── testFixture.ts        # Custom Playwright fixtures
│
├── tests
│   ├── auth.setup.ts         # Authentication setup
│   └── login.spec.ts         # Login test scenarios
│
├── playwright
│   └── .auth                 # Stored authentication state (ignored)
│
├── .env.example              # Environment variable template
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

---

# Setup Instructions

## Prerequisites

Install the following:

- Node.js
- npm

Verify installation:

```bash
node -v
npm -v
```

---

## Clone Repository

```bash
git clone https://github.com/kapildas1501-prog/Playwright-TS-Automation-Framework.git
```

Navigate to project:

```bash
cd Playwright-TS-Automation-Framework
```

---

## Install Dependencies

Install npm packages:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

# Environment Configuration

Create a `.env` file in the project root.

Use `.env.example` as a reference.

Example:

```
BASE_URL=https://opensource-demo.orangehrmlive.com
USERNAME=Admin
PASSWORD=admin123
```

Note:

- `.env` contains local configuration and is ignored from GitHub.
- `.env.example` is shared with the repository.

---

# Running Tests

## Run all tests

```bash
npx playwright test
```

---

## Run tests in headed mode

```bash
npx playwright test --headed
```

---

## Run specific browser

### Chrome

```bash
npx playwright test --project=chrome
```

### Firefox

```bash
npx playwright test --project=firefox
```

---

# Authentication Handling

Authentication is handled using Playwright `storageState`.

The framework performs login once during setup and reuses the authenticated session.

Execution flow:

```
auth.setup.ts
        |
        ↓
Login using credentials
        |
        ↓
Save browser storage state
        |
        ↓
Reuse session in test execution
```

Benefits:

- Avoids repeated login execution
- Reduces execution time
- Provides cleaner test scenarios

---

# Page Object Model (POM)

The framework follows Page Object Model design.

Each application page has a separate class containing:

- Locators
- Page actions
- Reusable methods

Example:

```
LoginPage.ts

Contains:
- Username locator
- Password locator
- Login button
- Login action method
```

Benefits:

- Better maintainability
- Less duplicate code
- Easy locator updates

---

# Playwright Fixtures

Custom fixtures are used for reusable page object initialization.

Flow:

```
Test Case
    |
    ↓
Fixture creates Page Object
    |
    ↓
Test uses required page methods
```

This keeps test cases clean and improves scalability.

---

# Cross Browser Execution

The framework supports:

- Chromium
- Firefox

Configuration is maintained in:

```
playwright.config.ts
```

---

# Parallel Execution

Playwright workers are configured to support parallel execution.

Example:

```
Chrome Test  ----\
                  ---> Parallel Execution
Firefox Test ----/
```

Benefits:

- Faster execution
- Better resource utilization

---

# Reporting

## Playwright HTML Report

After execution:

```bash
npx playwright show-report
```

---

## Allure Report

Generate report:

```bash
npm run allure:generate
```

Open report:

```bash
npm run allure:open
```

---

# Test Execution Flow

```
Test Specification
        |
        ↓
Playwright Fixture
        |
        ↓
Page Object Model
        |
        ↓
Application Interaction
        |
        ↓
Assertions
        |
        ↓
Report Generation
```

---

# Git Ignore Strategy

The following files are excluded from GitHub:

```
node_modules/
.env
playwright/.auth/
test-results/
playwright-report/
allure-results/
allure-report/
```

These files are generated locally and can be recreated.

---

# Future Enhancements

- CI/CD integration using GitHub Actions
- API automation integration
- Advanced test data management
- AI-based failure analysis

---

## Author

Kapil Das