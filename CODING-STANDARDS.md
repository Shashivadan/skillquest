
# 🔧 Coding Standards  

To maintain clean, readable, and high-quality code, follow these coding standards across all projects in SkillQuest.  

---

## ✅ **1. Naming Conventions**  

- **Variables & Functions:** Use `camelCase`  
  ```js
  let userName = "John";  
  function getUserData() { ... }

Classes & Components: Use PascalCase

class UserProfile { ... }

Constants: Use UPPER_CASE

const MAX_ATTEMPTS = 5;



---

✅ 2. Code Formatting

Use 4 spces for indentation (avoid tabs).

Keep line length ≤ 80 characters.

Maintain consistent spacing. Example:

// ✅ Good  
function add(a, b) {  
    return a + b;  
}

// ❌ Bad  
function add(a,b){return a+b;}



---

✅ 3. Git Commit Message Format

Use clear, descriptive commit messages following this format:

[Type]: Short Description

Examples:

feat: Added authentication system

fix: Resolved issue with login API

refactor: Optimized performance of chat app

docs: Updated README file



---

✅ 4. Comenting Guidelines

Function Headers: Every function should have a short description.

// ✅ Good Example  
/**
 * Fetches user data from the API.
 * @param {string} userId - The ID of the user.
 * @returns {Promise<Object>}
 */
async function getUserData(userId) { ... }

Avoid unnecessary comments.

// ❌ Bad Example  
let x = 5; // Assigns 5 to x



---

✅ 5. Folder & File Structure

Maintain an organized folder structure:

/project-name
│── /src           # Main source code
│── /tests         # Unit test
│── /docs          # Documentation
│── README.md      # Project overview


---

✅ 6. Code Quality Checklist

✅ Write modular functions
✅ Handle errors properly
✅ Follow consistent naming conventions
✅ Ensure code is linted before submission
✅ Write unit tests (if applicable)

📌 Always check your code with linters before submission.


---

📩 Need Help?

For any coding-related questions, open an issue in the repository.



