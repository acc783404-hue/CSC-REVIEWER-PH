# CSC-REVIEWER-PH
# 🏛️ CSC Professional Level Mock Exam Reviewer

A free, fully functional online reviewer for the **Philippine Civil Service Examination – Professional Level**, built for GitHub Pages. No installation, no backend, no login required — just open and study.

---

## 📋 What's Inside

| File | Description |
|---|---|
| `index.html` | Main page — all screens, modals, and layout |
| `style.css` | Modern, responsive design with dark splash and clean quiz UI |
| `quiz.js` | All 170 questions + complete quiz logic, scoring, and transitions |
| `README.md` | This file |

---

## 📚 Exam Coverage (170 Questions)

The questions mirror the official CSC Professional Level exam structure:

| Section | Questions | Topics |
|---|---|---|
| 📘 Verbal Ability (English) | 40 | Grammar, vocabulary, reading comprehension, paragraph organization, logical reasoning of thought |
| 🇵🇭 Verbal Ability (Filipino) | 30 | Gramatika, talasalitaan, pag-unawa sa binasa, wastong gamit ng salita |
| 🔢 Numerical Ability | 40 | Number sequences, basic operations, word problems, ratio & proportion, percentage |
| 🧠 Analytical Ability | 35 | Word analogy, logical reasoning, identifying assumptions & conclusions, data interpretation |
| 🏛️ General Information | 25 | 1987 Philippine Constitution, R.A. 6713, R.A. 3019, peace & human rights, environment laws |

**20+ scenario-based / situational questions** are distributed across sections covering ethical decision-making, workplace conduct, and public service scenarios.

---

## ✨ Features

- **One question at a time** — focused, distraction-free answering
- **Instant feedback** — correct/incorrect highlighting with a short explanation after each answer
- **Live score tracker** — visible in the top bar throughout the entire exam
- **Floating ad overlay** — a 5-second non-blocking ad appears between sections (simulates real exam site monetization)
- **Section Score Modal** — after each section, your score, percentage, and a performance remark are shown
- **Final Results Screen** — overall score with a per-section breakdown bar chart
- **Retake button** — restart the full exam from the beginning at any time
- **Mobile responsive** — works on phones, tablets, and desktops

---

## 🚀 How to Deploy on GitHub Pages

### Step 1 — Create a GitHub Repository
1. Go to [github.com](https://github.com) and sign in
2. Click **New Repository**
3. Name it (e.g., `csc-reviewer`) and set it to **Public**
4. Click **Create repository**

### Step 2 — Upload the Files
1. Click **Add file → Upload files**
2. Drag and drop all four files:
   - `index.html`
   - `style.css`
   - `quiz.js`
   - `README.md`
3. Click **Commit changes**

### Step 3 — Enable GitHub Pages
1. Go to your repository's **Settings** tab
2. In the left sidebar, click **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Set branch to `main` and folder to `/ (root)`
5. Click **Save**

### Step 4 — Visit Your Site
After 1–2 minutes, your reviewer will be live at:
```
https://<your-username>.github.io/<your-repo-name>
```

---

## 🛠️ How to Customize

### Adding or Editing Questions
All questions are stored in the `englishQuestions` array inside `quiz.js`. Each question follows this format:

```javascript
{
  num: 1,                          // Question number (1–170)
  text: "Question text here...",   // Supports <u>underline</u> and \n for line breaks
  choices: [
    "A. First choice",
    "B. Second choice",
    "C. Third choice",
    "D. Fourth choice"
  ],
  answer: "B",                     // Correct answer letter
  explanation: "Short explanation of why the answer is correct."
}
```

### Changing the Ad Content
Find the `#adOverlay` section in `index.html` and replace the content inside `.ad-content` with your own ad text, image, or link.

### Changing Colors per Section
Each section in `quiz.js` has a `color` property. Update the hex value to change the accent color for that section's badge and progress bar:

```javascript
{
  id: "english",
  title: "Verbal Ability (English)",
  color: "#2563eb",   // ← change this
  ...
}
```

---

## 📖 Legal Coverage Referenced

- **1987 Philippine Constitution** — Articles I, II, III, VI, VII, IX-B, XI
- **R.A. 6713** — Code of Conduct and Ethical Standards for Public Officials and Employees
- **R.A. 3019** — Anti-Graft and Corrupt Practices Act
- **R.A. 9485** — Anti-Red Tape Act
- **R.A. 8749** — Philippine Clean Air Act
- **R.A. 9003** — Ecological Solid Waste Management Act
- **P.D. 1586** — Philippine Environmental Impact Statement System
- **Universal Declaration of Human Rights (UDHR)**

---

## ⚠️ Disclaimer

This reviewer is an **unofficial study tool** created for educational purposes. It is not affiliated with, endorsed by, or connected to the **Civil Service Commission (CSC)** of the Philippines. Actual exam questions will differ. Always refer to official CSC materials and announcements for the most accurate and up-to-date information.

---

## 📄 License

This project is free to use and share for personal and educational purposes. Attribution is appreciated but not required.

---

*Good luck on your Civil Service Exam! 🇵🇭✨*
