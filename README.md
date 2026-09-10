# ⚡ DevKit

### Developer tools. One place.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20DevKit-blue?style=for-the-badge)](https://v0-devkit.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge\&logo=github)](https://github.com/SubhaYadav/DEVKIT)
[![Developer Website](https://img.shields.io/badge/Developer-Website-purple?style=for-the-badge\&logo=google-chrome)](https://www.subhayadav.com.np)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge\&logo=linkedin)](https://www.linkedin.com/in/subha-saubhagya-singh-yadav-38596a317/)

> **Fast, privacy-first, open-source developer utilities — all in one place.**

**DevKit** is an open-source developer toolkit designed to bring the everyday utilities developers need into one unified workspace.

Instead of switching between dozens of websites for small development tasks, DevKit provides practical tools for **JSON, encoding, security, regex, text, web development, Git, time, Markdown, data conversion, and more.**

🚀 **[Try DevKit Live →](https://v0-devkit.vercel.app/)**

---

## ✨ Why DevKit?

Developers constantly need small utilities:

* Format and validate JSON
* Encode and decode Base64
* Decode JWTs
* Generate UUIDs
* Test regular expressions
* Convert Unix timestamps
* Format SQL, HTML and CSS
* Convert JSON, CSV and YAML
* Generate hashes and passwords
* Work with URLs
* Generate QR codes
* Analyze and transform text
* And much more

Instead of opening a different website for every task:

**DevKit brings them together.**

> **One project. One interface. Dozens of developer utilities.**

---

## 🧰 Features

DevKit provides tools across multiple categories.

### 🗃️ JSON

* JSON Formatter
* JSON Minifier
* JSON Validator
* JSON → TypeScript
* JSON → CSV
* JSONPath Tester

### 🔐 Security

* JWT Decoder
* Hash Generator
* UUID Generator
* Password Generator
* Random String Generator
* `.env` Validator

### 🔤 Encoding & Conversion

* Base64 Encoder / Decoder
* URL Encoder / Decoder
* HTML Encoder / Decoder
* YAML ↔ JSON
* CSV ↔ JSON
* Number Base Converter
* Image ↔ Base64

### 🧪 Testing & Text

* Regex Tester
* Text Diff
* Word & Character Counter
* Case Converter
* Sort Lines
* Remove Duplicate Lines
* Random Data Generator
* Lorem Ipsum Generator

### 🌐 Web Development

* HTML Formatter
* CSS Formatter
* SQL Formatter
* Color Converter
* URL Parser
* Query String Parser
* XML Formatter
* HTTP Request Builder

### ⏱️ Time & Date

* Unix Timestamp Converter
* Date Formatter
* Time Difference Calculator
* Timezone Converter

### 🐙 Git & Developer Utilities

* Git Command Helper
* Semver Calculator
* Chmod Calculator
* Cron Expression Helper
* HTTP Status Code Reference
* HTTP Headers Reference
* MIME Type Lookup

### 📝 Markdown

* Markdown Previewer
* Markdown → HTML

### 🎨 Other Utilities

* QR Code Generator
* Image Metadata Viewer

---

## 🔒 Privacy First

DevKit follows a **privacy-first, local-first approach**.

Whenever technically possible, tools process data directly inside your browser instead of sending it to a server.

This is particularly important for tools that may handle:

* JWTs
* Passwords
* API-related data
* Environment variables
* Private code
* Configuration files

DevKit aims to avoid unnecessary uploads, logging, and storage of user input.

> ⚠️ Always verify the behavior of an individual tool before entering highly sensitive information.

---

## 🌐 Web Application

Use DevKit directly from your browser:

### 🚀 [Open DevKit](https://v0-devkit.vercel.app/)

The web application provides:

* Responsive interface
* Tool search
* Categories
* Dark/light themes
* Copy-to-clipboard
* Download functionality where appropriate
* Local processing where possible
* Keyboard-friendly workflows

---

## 💻 CLI

DevKit is designed to bring many of its utilities directly into the terminal.

Example:

```bash
npx devkit uuid
```

Base64:

```bash
npx devkit base64 encode "Hello World"
```

JSON:

```bash
npx devkit json format data.json
```

Timestamp:

```bash
npx devkit timestamp now
```

Regex:

```bash
npx devkit regex test "\d+" "I have 123 apples"
```

The CLI is designed to reuse the same underlying utility packages used by the web application.

---

## 📦 NPM Packages

DevKit is designed as an ecosystem rather than only a web application.

Reusable functionality can be distributed through modular npm packages.

Example:

```bash
npm install @devkit/json
```

Potential package structure:

```text
@devkit/core
@devkit/json
@devkit/encoding
@devkit/crypto
@devkit/text
@devkit/time
@devkit/regex
@devkit/markdown
@devkit/web
```

The goal is to allow developers to use individual DevKit utilities inside their own applications.

---

## 🏗️ Architecture

```text
                         DEVKIT
                            │
             ┌──────────────┼──────────────┐
             │              │              │
             ▼              ▼              ▼
           WEB             CLI            NPM
             │              │              │
             └──────────────┼──────────────┘
                            │
                            ▼
                    Shared Utilities
                            │
          ┌─────────────────┼─────────────────┐
          ▼                 ▼                 ▼
        JSON            Security            Text
          │                 │                 │
          ▼                 ▼                 ▼
        Time            Encoding             Web
```

The architecture is designed to minimize duplicated logic between the web application, CLI, and npm packages.

---

## 🛠️ Technology Stack

DevKit is built with modern web and developer technologies, including:

* **Next.js**
* **React**
* **TypeScript**
* **Tailwind CSS**
* **shadcn/ui**
* **Node.js**
* **pnpm**
* **Vitest**
* **Playwright**
* **GitHub Actions**

The exact technology list should always reflect the actual implementation in the repository.

---

## ⌨️ Developer Experience

DevKit is designed around a developer-first workflow.

Features include or are being developed around:

* 🔍 Global tool search
* ⌘ Command palette
* ⭐ Favorites
* 🕘 Recently used tools
* 🌙 Dark/light mode
* 📱 Responsive design
* 📋 Copy to clipboard
* ⬇️ Download results
* ⌨️ Keyboard shortcuts
* 📴 Offline-friendly functionality

---

## 🧪 Testing & Reliability

DevKit aims to ensure that tools are not just visually impressive but actually useful.

Testing covers:

* Valid input
* Invalid input
* Empty input
* Unicode
* Edge cases
* Error handling
* CLI functionality
* Web workflows
* Regression testing

Tools should not be considered complete until their core functionality has been tested.

---

## 🗺️ Roadmap

### ✅ Completed

Only functionality that is actually implemented should be marked as completed.

* [x] Core developer utilities
* [x] Responsive web interface
* [x] Privacy-first browser tools
* [x] Tool categories
* [x] Searchable tool directory
* [x] Core conversion and developer utilities

### 🚧 In Progress

* [ ] Expanded CLI functionality
* [ ] Expanded npm packages
* [ ] More automated tests
* [ ] Improved documentation
* [ ] Additional developer utilities

### 🔮 Future

* [ ] DevKit Playground
* [ ] Tool chaining / workflows
* [ ] Improved offline support
* [ ] Shareable tool configurations
* [ ] Community tool contributions
* [ ] Expanded CLI ecosystem
* [ ] More package integrations

---

## 🤝 Contributing

Contributions are welcome!

You can help DevKit by:

* 🐛 Reporting bugs
* 💡 Suggesting new tools
* ✨ Building features
* 🔧 Fixing issues
* 📚 Improving documentation
* 🧪 Adding tests
* 🎨 Improving UI/UX

### Development

Clone the repository:

```bash
git clone https://github.com/SubhaYadav/DEVKIT.git
```

Enter the project:

```bash
cd DEVKIT
```

Install dependencies:

```bash
pnpm install
```

Create a feature branch:

```bash
git checkout -b feature/my-new-tool
```

Make your changes, test them, and submit a pull request.

Before submitting, make sure existing functionality still works.

---

## 💡 Suggest a Tool

Have an idea for a developer utility?

Open an issue:

### [Suggest a Tool →](https://github.com/SubhaYadav/DEVKIT/issues)

A useful proposal should explain:

1. What problem the tool solves
2. Who would use it
3. Why it belongs in DevKit
4. Example input and output

---

## 🔗 Project Links

### 🚀 Live Demo

**[v0-devkit.vercel.app](https://v0-devkit.vercel.app/)**

### 💻 GitHub Repository

**[github.com/SubhaYadav/DEVKIT](https://github.com/SubhaYadav/DEVKIT)**

---

# 👨‍💻 Developer

## Subha Saubhagya Singh Yadav

**IT Student • Web Developer • Open-Source Builder • AI/ML Learner**

I'm interested in building practical software, exploring AI/ML, and creating technology that solves real-world problems.

DevKit is being developed as an open-source project focused on making everyday development tasks simpler while learning, experimenting, and building useful software for the developer community.

### Connect with me

🌐 **Website**
[www.subhayadav.com.np](https://www.subhayadav.com.np)

💻 **GitHub**
[github.com/SubhaYadav](https://github.com/SubhaYadav)

💼 **LinkedIn**
[linkedin.com/in/subha-saubhagya-singh-yadav-38596a317](https://www.linkedin.com/in/subha-saubhagya-singh-yadav-38596a317/)

---

## 🌟 Support DevKit

If DevKit is useful to you:

⭐ **Star the repository**

🐛 **Report a bug**

💡 **Suggest an improvement**

🔧 **Contribute**

📢 **Share it with other developers**

Every contribution, idea, and star helps the project grow.

---

## 📄 License

This project is open source.

See the [`LICENSE`](LICENSE) file for the applicable license and terms.

---

<div align="center">

# ⚡ DevKit

### Developer tools. One place.

**Built with ❤️ by Subha Saubhagya Singh Yadav**

[🚀 Live Demo](https://v0-devkit.vercel.app/) · [💻 GitHub](https://github.com/SubhaYadav/DEVKIT) · [🌐 Website](https://www.subhayadav.com.np) · [💼 LinkedIn](https://www.linkedin.com/in/subha-saubhagya-singh-yadav-38596a317/)

⭐ **If DevKit saves you time, consider starring the repository.**

</div>
