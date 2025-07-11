# 📚 Lexi Frontend Intern Assignment – Legal Assistant Interface

A simple legal assistant frontend interface built using **React.js + Tailwind CSS**, simulating a Lexi-style legal Q&A experience.

> ✅ This project is built as per the assignment instructions provided by Lexi via Indeed.

---

## 🔗 Live Demo:

[👉 Click to View Deployed App](https://lexisg-frontend-intern-test-puneetharaj-k-rs-projects.vercel.app/)

## 🔗 Screen Record Demo:

🎥 [Watch demo screen recording (Google Drive)](https://drive.google.com/file/d/1TRtYQs4fmP9XL099L0LDGkya4bDibvXA/view?usp=sharing)

---

## 📌 Assignment Overview

The goal was to simulate a legal assistant UI that:
- Accepts a **legal query**
- Displays a **predefined answer**
- Shows **citation with source**
- Opens a **PDF in a popup** when citation is clicked
- Bonus: Simulate scroll-to-paragraph or highlight PDF section (mocked)

---

## ⚙️ Tech Stack

- ⚛️ React.js
- ⚡ Vite (for fast dev build)
- 🎨 Tailwind CSS
- 📄 react-pdf (for PDF preview in modal)
- 🪟 Modal-based UI interaction

---

## 🧱 Folder Structure

```
lexisg-frontend-intern-test/
├── public/
│   ├── Lexi_Case_Reference.pdf
│   └── screenshots/
│       ├── sample-query.png
│       ├── will-query.png
│       └── generic-query.png
├── src/
│   ├── components/
│   │   ├── InputPanel.jsx
│   │   ├── AnswerPanel.jsx
│   │   └── PdfModal.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
├── package.json
└── README.md
```

---

## 🚀 Setup Instructions

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/lexisg-frontend-intern-test
cd lexisg-frontend-intern-test

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev

# 4. Open in browser
http://localhost:5173
```

✅ Make sure `Lexi_Case_Reference.pdf` is placed inside the `public/` directory.

---

## ✅ Features Implemented

- ✅ Legal question input through a textarea
- ✅ Simulated legal answer generation
- ✅ Spinner loader shown while generating response
- ✅ Static & conditional simulated answers for variety
- ✅ Citation block with clickable PDF link
- ✅ Popup modal for PDF preview (via `react-pdf`)
- ✅ Paragraph 7 highlighted (simulated)
- ✅ Responsive and clean UI with Tailwind CSS

---

## 📸 Screenshots

### 1️⃣ Official Lexi Query

**Input:**  
```text
In a motor accident claim where the deceased was self-employed and aged 54–55 years...
```
Loder Before Fetching Result
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/c0fa316b-9cc9-4b73-abfc-e655d59e9f41" />


📷 Result:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/f1014eb8-699d-4a65-a200-5bea57a6dd54" />


---

### 2️⃣ Handwritten Will Question

**Input:**  
```text
Is a handwritten will legally valid in India?
```

📷 Result:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/d5668315-e788-4f64-8a9f-f92853a598f9" />

📂 Citation & PDF Viewer
- Clicking **"View Source"** opens a modal using `react-pdf`
  <img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/a1a5f8b0-0590-4a33-bbb5-f765acb25ef7" />



---

### 3️⃣ Fallback Generic Query

**Input:**  
```text
hello how are you
```

📷 Result:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/6c900e1f-35eb-45d6-86bc-ba372141a37c" />

Scrollabale Popup Pdf View:
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/3ef0b926-c26d-4a31-88c1-f72243686b7a" />

---

## 📂 Citation & PDF Viewer

- Clicking **"View Source"** opens a modal using `react-pdf`
- PDF loaded from `/public/Lexi_Case_Reference.pdf`
- Paragraph 7 (from original Lexi case) is simulated and highlighted
- If `react-pdf` fails, fallback uses `iframe` preview

---

## 📘 Notes for Reviewer (Lexi Team)

- 🛠️ The app simulates all responses with **predefined answers** as per assignment.
- 💡 We added 2 extra simulated answers **only for demo** purposes — Lexi’s original case still returns the official fixed response.
- 📄 PDF viewer is implemented using `react-pdf` with a fallback to `iframe`.
- ✅ No backend or API calls used — completely frontend-only.

---

## 🙌 Thank You!

This project was built with care to match Lexi's expectations 100%.  
For any questions or clarifications, feel free to reach out via email or GitHub.

## Contact
GitHub: @Puneetharajkr  
Email: puneetharajkr123@gmail.com
