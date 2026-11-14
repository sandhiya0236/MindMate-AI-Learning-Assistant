# MindMate – AI Learning Assistant (Stage 1: Home Page)

**MindMate** is an AI-powered study companion designed specifically for college students across all departments (Engineering, Science, Arts, Commerce, Medical, etc.). It helps students grasp challenging academic concepts at their own pace using relatable analogies, adaptive quizzes, and native multilingual explanations in **English**, **Tamil (தமிழ்)**, and **Tanglish**.

---

## 📁 Project Structure

```text
mindmate/
├── index.html        # Semantic HTML5 Home Page layout with multilingual attributes
├── css/
│   └── styles.css    # Clean, responsive CSS with purple theme & modern cards
├── js/
│   └── script.js     # Multilingual state switcher (EN / TA / Tanglish), topic demo, & UI logic
└── README.md         # Project documentation and quickstart instructions
```

---

## ✨ Features Implemented in Stage 1 (Home Page)

1. **Navigation Bar**:
   - MindMate branding with graduation/sparkle icon badge.
   - Smooth navigation links (`Home`, `Features`, `About`).
   - Quick language switcher dropdown and "Get Started" CTA button.
   - Fully responsive hamburger drawer for mobile screens.

2. **Hero Section**:
   - Target student badge: `🎓 Built for College Students Across All Departments`.
   - Primary heading: **"Learn at your pace. Understand your way."**
   - Descriptive overview tailored to undergraduate/postgraduate syllabi.
   - Interactive language selector pills (**English**, **தமிழ் (Tamil)**, and **Tanglish**).
   - Dual action buttons: **"Start Learning"** and **"Explore Features"**.
   - Live interactive demo card showing AI explanations with topic switchers (*Recursion*, *Photosynthesis*, *Balance Sheet*).

3. **Core Feature Cards (4 Cards)**:
   - ⚡ **AI Concept Explainer**: Converts complex textbook theories into real-world analogies.
   - 🌐 **Multilingual Learning**: Fluency across English, Tamil, and everyday Tanglish.
   - 📝 **Smart Quizzes**: Topic-wise practice questions with instant grading and reasoning.
   - 📊 **Progress Tracking**: Daily study streaks, chapter completion, and exam confidence scoring.

4. **About & Mission Section**:
   - Highlights MindMate's mission to eliminate language barriers in collegiate education.
   - Department badges covering Engineering, Commerce, Science, Arts, and Medicine.

5. **Clean Footer**:
   - Quick navigation links, language selector shortcuts, and system status indicator.

---

## 🚀 How to Run the Project

Since this is built with modern, standard HTML, CSS, and JavaScript, no heavy compilation or Node.js toolchains are strictly required:

### Option 1: Direct Browser Opening
Simply double-click `index.html` or right-click `index.html` and choose **"Open with"** -> **Google Chrome / Microsoft Edge / Firefox**.

### Option 2: Using Python's Built-in HTTP Server
Open your terminal in the `mindmate` folder and run:
```bash
python -m http.server 3000
```
Then visit: `http://localhost:3000`

### Option 3: Using VS Code Live Server
If you use Visual Studio Code:
1. Open the `mindmate` folder in VS Code.
2. Right-click `index.html` and select **"Open with Live Server"**.

---

## 🎨 Design System
- **Theme**: Light theme
- **Primary Color**: Modern Purple (`#7C3AED` / `#6D28D9`)
- **Accent & Badges**: Soft violet (`#EDE9FE`), emerald green indicators (`#10B981`)
- **Typography**: Google Fonts (*Plus Jakarta Sans* for English/Tanglish, *Noto Sans Tamil* for Tamil)
- **Responsiveness**: Mobile-first, fluid grid, tested for tablets and desktops.
