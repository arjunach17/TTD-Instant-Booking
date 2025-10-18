Here is a complete, copy‑paste ready README.md you can use for your repository.

# TTD Auto-Fill Script Generator

A lightweight HTML + JavaScript utility that generates a customized script to auto‑fill the TTD (Tirumala Tirupati Devasthanams) booking form for up to 6 people, helping you save time during high‑demand booking windows.

### Features
- Enter details for 1–6 people with dynamic form sections.
- Inputs include Name, Age, Gender (Male/Female/Transgender), ID Type (Aadhaar, Passport, etc.), and ID Number.
- Generates a ready‑to‑use JavaScript snippet tailored to your entries.
- One‑click “Copy to Clipboard” to paste into the browser console on the TTD booking page.
- Intended for personal convenience while respecting official booking policies.

### Project structure
```
TTD-Instant-Booking/
├── index.html   # Main application
├── README.md    # Documentation
```

### How to use
- Open index.html in any modern web browser.
- Select how many people you want to auto‑fill (between 1 and 6).
- Fill in each person’s Name, Age, Gender, ID Type, and ID Number.
- Click “Generate Script” to produce a customized JavaScript snippet.
- Click “Copy to Clipboard” to copy the snippet.
- On the official TTD booking form page, open Developer Tools → Console (F12 → Console), paste the code, and press Enter to auto‑fill the form.

### Example
If you fill details for 2 people, your data might look like:
```json
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
```
The tool generates a script that iterates over people and maps fields to the TTD form inputs.
```js
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
  const setNativeValue = (element, value) => { /* sets value and dispatches events */ };
  const clickDropdownOption = async (optionText) => { /* selects option by text */ };

  for (let i = 0; i < people.length; i++) {
    const person = people[i];
    // Map "person" fields to corresponding TTD inputs and fill them
  }
})();
```

### Disclaimer
This tool is for personal convenience only and is not affiliated with TTD or any government service.
Do not misuse this for bulk booking, unfair means, or automation beyond personal use, and always follow TTD’s official booking policies.[9]

### Tech stack
- HTML5 for structure.
- CSS3 for styling.
- Vanilla JavaScript for logic and script generation.




Developed to help devotees of Lord Venkateswara save time while booking, with a simple, no‑framework approach for ease of use.

