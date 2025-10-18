// script.js
(() => {
  const countSelect = document.getElementById('count');
  const formsContainer = document.getElementById('formsContainer');
  const output = document.getElementById('output');
  const generateBtn = document.getElementById('generateBtn');
  const copyBtn = document.getElementById('copyBtn');

  function renderForms() {
    const count = Number(countSelect.value) || 0;
    formsContainer.innerHTML = '';

    for (let i = 0; i < count; i++) {
      const wrapper = document.createElement('div');
      wrapper.className = 'person-form';
      wrapper.innerHTML = `
        <h4>Person ${i + 1}</h4>
        <label>Name: <input type="text" id="name${i}" /></label>
        <label>Age: <input type="text" id="age${i}" /></label>
        <label>ID Number: <input type="text" id="idNumber${i}" /></label>
        <label>Gender:
          <select id="gender${i}">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Transgender">Transgender</option>
          </select>
        </label>
        <label>ID Type:
          <select id="idType${i}">
            <option value="Aadhaar Card">Aadhaar Card</option>
            <option value="Passport">Passport</option>
          </select>
        </label>
      `;
      formsContainer.appendChild(wrapper);
    }
  }

  function generateScript() {
    const count = Number(countSelect.value) || 0;
    const peopleArray = [];

    for (let i = 0; i < count; i++) {
      peopleArray.push({
        name: document.getElementById(`name${i}`)?.value || '',
        age: document.getElementById(`age${i}`)?.value || '',
        idNumber: document.getElementById(`idNumber${i}`)?.value || '',
        gender: document.getElementById(`gender${i}`)?.value || 'Male',
        idType: document.getElementById(`idType${i}`)?.value || 'Aadhaar Card',
      });
    }

    const script = `
(async function () {
  const people = ${JSON.stringify(peopleArray, null, 2)};

  const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
  const setNativeValue = (element, value) => {
    const lastValue = element.value;
    element.value = value;
    const event = new Event('input', { bubbles: true });
    const tracker = element._valueTracker;
    if (tracker) tracker.setValue(lastValue);
    element.dispatchEvent(event);
  };

  const clickDropdownOption = async (optionText) => {
    await wait(300);
    const options = [...document.querySelectorAll('div, li, span')];
    const match = options.find(el =>
      el.textContent.trim().toLowerCase() === optionText.toLowerCase() &&
      el.offsetParent !== null
    );
    if (match) match.click();
  };

  for (let i = 0; i < people.length; i++) {
    const person = people[i];

    const nameField = document.querySelector(\`input[name="fname"][id="\${i}"]\`);
    const ageField = document.querySelector(\`input[name="age"][id="\${i}"]\`);
    if (nameField && ageField) {
      setNativeValue(nameField, person.name);
      setNativeValue(ageField, person.age);
    }

    const idTypeField = document.querySelector(\`input[name="photoIdType"][id="\${i}"]\`);
    if (idTypeField) {
      idTypeField.click();
      await clickDropdownOption(person.idType);
    }

    const idNumberField = document.querySelector(\`input[name="idProofNumber"][id="\${i}"]\`);
    if (idNumberField) {
      idNumberField.removeAttribute('disabled');
      setNativeValue(idNumberField, person.idNumber);
    }

    const genderField = document.querySelector(\`input[name="gender"][id="\${i}"]\`);
    if (genderField) {
      genderField.click();
      await clickDropdownOption(person.gender);
    }

    await wait(600);
  }
})();`.trim();

    output.value = script;
  }

  async function copyScript() {
    const text = output.value || '';
    try {
      await navigator.clipboard.writeText(text);
      alert('Script copied to clipboard!');
    } catch {
      // Fallback for older browsers
      output.select();
      document.execCommand('copy');
      alert('Script copied to clipboard!');
    }
  }

  // Wire events
  countSelect.addEventListener('change', renderForms);
  generateBtn.addEventListener('click', generateScript);
  copyBtn.addEventListener('click', copyScript);
})();
