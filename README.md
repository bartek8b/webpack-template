### 🚀 webpack-template

A starter repository for vanilla JavaScript front-end projects using [Webpack](https://webpack.js.org/).

---

### 📦 Quick Start

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bartek8b/webpack-template.git
   cd webpack-template
   ```

2. **Change the description in `package.json` to fit your project**

   Replace the placeholder:

   ```
   "Template repo for projects using webpack — REPLACE THIS DESCRIPTION for your project"
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Start development server (with live reload):**

   ```bash
   npm run dev
   ```

---

### 🛠️ Features & Tools

This template comes pre-configured with the following features:

#### **Development Tools**

- **Webpack**: Bundler for modular JavaScript, CSS, and other assets.
- **ESLint**: Linting tool for static code analysis.
- **Prettier**: Code formatter ensuring consistent code style.
- **Babel**: JavaScript transpiler for modern ES6+/ESNext features.
- **Jest**: Testing framework to write unit tests with an intuitive API.

#### **CI Automation**

- Dependency Management: Automatically configured using [Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically).

#### **Deployment to GitHub Pages**

- Easily deploy the build output to a GitHub Pages site using the `deploy` npm script.

#### **Testing Support with Jest**

- Write your unit tests in `src/`, following the naming convention:
  - `*.test.js`
  - `*.spec.js`
- Babel is preconfigured to handle modern JavaScript during testing.

---

### 🛠️ NPM Scripts

| Script                    | Description                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- |
| `npm run dev`             | Starts the development server (webpack-dev-server)                                  |
| `npm run lint`            | Runs ESLint to check code quality                                                   |
| `npm run lint:fix`        | Fixes lint issues automatically                                                     |
| `npm run format`          | Formats code using Prettier                                                         |
| `npm run lint-and-format` | Runs both `lint:fix` and code formatting together                                   |
| `npm run build`           | Builds the production-ready version into the `dist` folder                          |
| `npm test`                | Runs Jest unit tests                                                                |
| `npm run deploy`          | Creates the `gh-pages` branch if it does not exist and pushes the distribution code |

---

### 🚀 Deploying to GitHub Pages

1. **Build the project:**
   ```bash
   npm run build
   ```
2. **Deploy the build folder to GitHub Pages:**
   ```bash
   npm run deploy
   ```
3. **Done!**  
   Your site will be available at:  
   `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

### 🔄 Dependency Updates

This project uses [Dependabot](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically) to automatically check for and propose updates to npm dependencies.

---

### 🗂️ Project Structure

```
webpack-template/
├── src/                   # Main source directory
├── dist/                  # Production build output (generated)
├── .github/
│   └── dependabot.yml     # Dependabot configuration for automated dependency updates
├── .gitignore
├── babel.config.js        # Babel configuration for Jest and ES6+
├── eslint.config.mjs      # ESLint configuration
├── package.json           # NPM dependencies & scripts
├── README.md              # Documentation
└── webpack.config.js      # Webpack configuration
```

---

### 📚 Technologies Used

- **[Webpack](https://webpack.js.org/)**: Modern JavaScript bundler.
- **[Prettier](https://prettier.io/)**: Code formatting.
- **[ESLint](https://eslint.org/)**: Linter with flat-config for better organization.
- **[Babel](https://babeljs.io/)**: Transpiler for ESNext support.
- **[Jest](https://jestjs.io/)**: Testing framework.
- **[GitHub Pages](https://pages.github.com/)**: Simple deployment workflow.

---

### 📝 Author

- **[Bartłomiej Balcerzak](https://github.com/bartolinidev)**

---

**Happy coding!** 😊
