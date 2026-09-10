# ⚡ DevKit

### Developer tools. One place.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Visit%20DevKit-blue?style=for-the-badge)](https://v0-devkit.vercel.app/)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge\&logo=github)](https://github.com/SubhaYadav/DEVKIT)
[![License](https://img.shields.io/badge/License-Open%20Source-green?style=for-the-badge)](LICENSE)

**DevKit** is an open-source developer toolkit that brings essential developer utilities into one fast, privacy-first workspace.

Instead of switching between dozens of websites for everyday development tasks, DevKit provides tools for **JSON, encoding, security, regex, text, web development, Git, time, Markdown, data conversion, and more.**

🌐 **[Try DevKit Live](https://v0-devkit.vercel.app/)**

---

## 🚀 Why DevKit?

Developers constantly need small utilities:

* Format JSON
* Decode JWTs
* Generate UUIDs
* Test regular expressions
* Convert timestamps
* Encode/decode Base64
* Format SQL
* Convert JSON to TypeScript
* Generate hashes
* Work with URLs
* Convert data formats
* Generate QR codes
* And much more

Usually, that means opening multiple websites.

**DevKit brings these utilities together in one place.**

> One project. One interface. Dozens of developer utilities.

---

## ✨ Features

### 🧩 Developer Tools

DevKit includes tools across multiple categories:

| Category     | Examples                                          |
| ------------ | ------------------------------------------------- |
| 🗃️ JSON     | Formatter, Minifier, Validator, JSON → TypeScript |
| 🔐 Security  | JWT Decoder, Hash Generator, Password Generator   |
| 🔤 Encoding  | Base64, URL Encoding, HTML Encoding               |
| 🧪 Testing   | Regex Tester, JSONPath Tester                     |
| 📝 Text      | Diff, Case Converter, Word Counter                |
| 🌐 Web       | HTML Formatter, CSS Formatter, URL Parser         |
| ⏱️ Time      | Unix Timestamp, Timezone Converter                |
| 📊 Data      | CSV ↔ JSON, YAML ↔ JSON                           |
| 🐙 Git       | Git Command Helper                                |
| 📄 Markdown  | Markdown Editor, Markdown → HTML                  |
| 🎨 Utilities | Color Converter, QR Generator                     |
| ⚙️ Developer | `.env` Validator, Semver, Chmod, Cron             |

---

## 🔒 Privacy First

DevKit is designed with a **local-first approach**.

Whenever possible, processing happens directly in your browser instead of sending your data to a server.

This is especially important for developer tools that may handle:

* JWTs
* Passwords
* Environment variables
* API-related data
* Private code
* Configuration files

DevKit aims to avoid unnecessary data collection, uploads, and storage.

> Always verify the behavior of an individual tool before entering highly sensitive information.

---

## 💻 Web + CLI + npm

DevKit is designed to become more than an online tools website.

### 🌐 Web Application

Use DevKit directly from your browser:

**[v0-devkit.vercel.app](https://v0-devkit.vercel.app/)**

### 💻 CLI

The project is designed to provide developer utilities directly from the terminal.

```bash
npx devkit uuid
```

Example:

```bash
npx devkit base64 encode "Hello World"
```

And:

```bash
npx devkit json format data.json
```

### 📦 NPM Packages

Reusable DevKit functionality can be exposed through modular packages so developers can integrate individual utilities into their own projects.

Example:

```bash
npm install @devkit/json
```

---

## 🛠️ Technology

DevKit is built using modern web and developer technologies.

Depending on the current implementation, the project uses technologies such as:

* Next.js
* React
* TypeScript
* Tailwind CSS
* shadcn/ui
* Node.js
* pnpm
* Vitest
* Playwright
* GitHub Actions

The project is structured to keep functionality reusable between the web application, CLI, and packages wherever practical.

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

The goal is to avoid duplicating core functionality between different parts of the project.

---

## ⚡ Example Tools

### JSON Formatter

```json
{
  "name": "DevKit",
  "type": "developer-toolkit"
}
```

### Base64

```text
Hello World
        ↓
SGVsbG8gV29ybGQ=
```

### UUID

```text
550e8400-e29b-41d4-a716-446655440000
```

### Unix Timestamp

```text
1704067200
        ↓
2024-01-01 00:00:00 UTC
```

### Regex

```text
Pattern:
\d+

Input:
I have 123 apples and 456 oranges.

Matches:
123
456
```

---

## ⌨️ Developer Experience

DevKit is designed around a developer-friendly workflow.

Planned/current UX features include:

* 🔍 Global tool search
* ⌘ Command palette
* ⭐ Favorites
* 🕘 Recently used tools
* 🌙 Dark/light mode
* 📱 Responsive interface
* 📋 Copy to clipboard
* ⬇️ Download results
* ⌨️ Keyboard shortcuts
* 📴 Offline-friendly tools

---

## 🧪 Testing

DevKit aims to keep its utilities reliable through automated testing.

Testing includes:

* Unit tests
* Integration tests
* End-to-end tests
* CLI testing
* Input validation
* Error handling
* Edge cases

Every tool should be tested with both valid and invalid input before being considered production-ready.

---

## 🤝 Contributing

DevKit is open source and contributions are welcome.

You can contribute by:

* 🐛 Reporting bugs
* 💡 Suggesting new tools
* 🔧 Fixing issues
* ✨ Adding features
* 📚 Improving documentation
* 🧪 Adding tests
* 🎨 Improving UI/UX

### Basic workflow

```bash
git clone https://github.com/SubhaYadav/DEVKIT.git

cd DEVKIT

pnpm install
```

Create a branch:

```bash
git checkout -b feature/my-new-tool
```

Make your changes, test them, and open a pull request.

Before submitting a PR, make sure the existing functionality still works.

---

## 💡 Suggest a Tool

Have an idea for a developer utility that belongs in DevKit?

Open a feature request on GitHub:

**[Suggest a Tool →](https://github.com/SubhaYadav/DEVKIT/issues)**

A good suggestion should explain:

1. What problem the tool solves
2. Who would use it
3. Why it belongs in DevKit
4. Example input/output

---

## 🗺️ Roadmap

### ✅ Current

* [x] Core developer utilities
* [x] Responsive web interface
* [x] Privacy-first browser tools
* [x] Tool categories
* [x] Searchable tool directory
* [x] Core utilities and converters

### 🚧 In Progress

* [ ] Expanded CLI functionality
* [ ] More reusable npm packages
* [ ] Expanded automated testing
* [ ] Improved documentation
* [ ] More developer utilities

### 🔮 Future

* [ ] DevKit Playground
* [ ] Tool chaining/workflows
* [ ] Improved offline support
* [ ] Shareable tool configurations
* [ ] Community tool contributions
* [ ] Expanded CLI ecosystem
* [ ] More package integrations

---

## 🌟 Support the Project

If DevKit is useful to you:

⭐ **Star the repository**

🐛 **Report bugs**

💡 **Suggest improvements**

🔧 **Contribute code**

📢 **Share it with other developers**

Your support helps the project grow and motivates continued development.

---

## 🌐 Links

### 🚀 Live Demo

**https://v0-devkit.vercel.app/**

### 💻 GitHub

**https://github.com/SubhaYadav/DEVKIT**

### 👨‍💻 Developer

**Subha Saubhagya Singh Yadav**

🌐 **Website:**
https://www.subhayadav.com.np

💻 **GitHub:**
https://github.com/SubhaYadav

💼 **LinkedIn:**
https://www.linkedin.com/in/subha-saubhagya-singh-yadav-38596a317/

---

## 👨‍💻 About the Developer

Hi, I'm **Subha Saubhagya Singh Yadav**, an IT student and developer interested in building practical software, exploring AI/ML, and creating technology that solves real-world problems.

DevKit is one of my open-source projects focused on making everyday development tasks simpler while learning, experimenting, and building something useful for the developer community.

**Built by a developer, for developers.**

---

## 📄 License

This project is open source.

See the [LICENSE](LICENSE) file for the applicable license and terms.

---

<div align="center">

### ⚡ DevKit

**Developer tools. One place.**

Built with ❤️ by **[Subha Saubhagya Singh Yadav](https://www.subhayadav.com.np)**

[⭐ Star on GitHub](https://github.com/SubhaYadav/DEVKIT) · [🚀 Live Demo](https://v0-devkit.vercel.app/) · [💼 LinkedIn](https://www.linkedin.com/in/subha-saubhagya-singh-yadav-38596a317/)

</div>
