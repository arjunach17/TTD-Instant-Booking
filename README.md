TTD Auto-Fill Script Generator
This project is a simple HTML + JavaScript utility that helps generate an auto-fill script for TTD (Tirumala Tirupati Devasthanams) booking forms.
Instead of manually typing details for multiple people, this tool creates a customized script to automatically fill in Name, Age, Gender, ID Type, and ID Number for up to 6 people.

✨ Features
✅ Enter details for 1 to 6 people

✅ Inputs for:

Name

Age

Gender (Male/Female/Transgender)

ID Type (Aadhaar, Passport, etc.)

ID Number

✅ Auto-generates a ready-to-use JavaScript script

✅ “Copy to Clipboard” functionality for quick usage

✅ Designed for convenience when booking tickets on the TTD website

📂 Project Structure
text
TTD-AutoFill-Generator/
│── index.html        # Main application
│── README.md         # Documentation
🚀 How to Use
Open index.html in your browser.

Select the number of people (1–6).

Fill in the details for each person:

Name

Age

Gender

ID Type

ID Number

Click Generate Script – a JavaScript snippet will be created.

Use Copy to Clipboard to copy the script.

On the TTD booking form page, paste the copied script into your browser’s Developer Console (F12 → Console → Paste → Enter).

Watch the page auto-fill with your details 🎉

📜 Example
If you fill details for 2 people:

json
[
  {
    "name": "Ravi Kumar",
    "age": "30",
    "idNumber": "XXXX-XXXX-XXXX",
    "gender": "Male",
    "idType": "Aadhaar Card"
  },
  {
    "name": "Sita Devi",
    "age": "28",
    "idNumber": "YYYY-YYYY-YYYY",
    "gender": "Female",
    "idType": "Passport"
  }
]
The tool generates a script like:

js
(async function () {
  const people = [
    {
      "name": "Ravi Kumar",
      "age": "30",
      "idNumber": "XXXX-XXXX-XXXX",
      "gender": "Male",
      "idType": "Aadhaar Card"
    },
    {
      "name": "Sita Devi",
      "age": "28",
      "idNumber": "YYYY-YYYY-YYYY",
      "gender": "Female",
      "idType": "Passport"
    }
  ];

  // === Script logic to auto-fill the TTD form ===
  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const setNativeValue = (element, value) => { ... };
  const clickDropdownOption = async (optionText) => { ... };

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    // Field mapping and auto-fill logic
  }
})();
⚠️ Disclaimer
This tool is created for personal convenience only.

It is not affiliated with TTD or any government service.

Do not misuse this for bulk booking, unfair means, or automation beyond personal use.

Always respect TTD’s official booking policies.

🛠️ Tech Stack
HTML5 – Structure

CSS3 – Styling

Vanilla JavaScript – Logic & Script Generation

📌 Future Improvements
Add support for more ID types

Save pre-filled data in browser local storage

Provide a one-click auto-run bookmarklet

🙏 Credits
Developed for devotees of Lord Venkateswara to save time while booking.
