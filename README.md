# NodeJS-App: GitHub Advanced Security (GHAS) Implementation Lab

This repository serves as a testing ground for **GitHub Advanced Security** features. The goal is to implement a "Shift Left" security strategy within a NodeJS environment.

## 🛠 Security Features Configuration

### 1. Dependabot (Software Composition Analysis)
* **Purpose**: Monitors `package.json` for vulnerable dependencies.
* **Configuration**: Check `.github/dependabot.yml`.
* **Testing**: Add `axios: 0.21.0` to trigger a high-severity alert.

### 2. Secret Scanning & Push Protection
* **Purpose**: Prevents API keys and tokens from entering the commit history.
* **Testing**: Try to commit a string matching the `AWS Access Key` pattern. 
* **Rule**: Push Protection is enabled to block the commit before it reaches the server.

### 3. CodeQL Code Scanning (Static Analysis)
* **Purpose**: Performs semantic analysis to find vulnerabilities like SQL Injection or ReDoS.
* **Workflow**: Runs on every `push` and every Monday at `09:00`.
* **Testing**: The `src/server.js` file contains an intentional `eval()` sink for testing.

---

## 📋 DevOps Senior Checklist
- [ ] Enable **Dependency Graph** and **Dependabot Alerts**.
- [ ] Configure **CodeQL Analysis** for the `javascript` language.
- [ ] Setup **Secret Scanning** with "Push Protection" toggled ON.
- [ ] Review alerts in the **Security Tab** and practice "Fix" vs "Dismiss".

## 🛡 Thoughtful Explanation
* **Why CodeQL?**: Unlike simple linters, CodeQL treats code as data. It follows the "taint flow" from a user input (source) to a dangerous function (sink).
* **Why Secret Scanning?**: 80% of data breaches involve compromised credentials. Detecting them at the `git push` stage is the most effective defense.
* **Evidence**: According to the *GitHub Octoverse Report*, repositories with Dependabot enabled fix vulnerabilities 1.4x faster than those without.