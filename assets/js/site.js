'use strict';

// A small browser demonstration of the Python project's documented sorting rules.
// These records are illustrative and are not from the animal shelter dataset.
const animals = [
  { name: 'Milo', breed: 'Labrador', age: 26 },
  { name: 'Luna', breed: 'Shepherd', age: 52 },
  { name: 'Scout', breed: 'Labrador', age: 52 },
  { name: 'Finn', breed: 'Retriever', age: null }
];

function mergeSort(records, field, descending) {
  if (records.length < 2) return records.slice();
  const midpoint = Math.floor(records.length / 2);
  const left = mergeSort(records.slice(0, midpoint), field, descending);
  const right = mergeSort(records.slice(midpoint), field, descending);
  const ordered = [];
  let i = 0;
  let j = 0;
  function compare(a, b) {
    const aMissing = a[field] === null || a[field] === undefined || a[field] === '';
    const bMissing = b[field] === null || b[field] === undefined || b[field] === '';
    if (aMissing && bMissing) return 0;
    if (aMissing) return 1;
    if (bMissing) return -1;
    const av = typeof a[field] === 'string' ? a[field].trim().toLowerCase() : a[field];
    const bv = typeof b[field] === 'string' ? b[field].trim().toLowerCase() : b[field];
    const order = av < bv ? -1 : av > bv ? 1 : 0;
    return descending ? -order : order;
  }
  while (i < left.length && j < right.length) {
    ordered.push(compare(left[i], right[j]) <= 0 ? left[i++] : right[j++]);
  }
  return ordered.concat(left.slice(i), right.slice(j));
}

const sortField = document.getElementById('sort-field');
const sortDirection = document.getElementById('sort-direction');
const animalList = document.getElementById('animal-list');
const sortStatus = document.getElementById('sort-status');
let descending = false;

function renderAnimals() {
  const field = sortField.value;
  const records = mergeSort(animals, field, descending);
  animalList.replaceChildren(...records.map(animal => {
    const row = document.createElement('li');
    const identity = document.createElement('span');
    const name = document.createElement('strong');
    const breed = document.createElement('small');
    const age = document.createElement('span');
    name.textContent = animal.name;
    breed.textContent = animal.breed;
    identity.append(name, breed);
    age.textContent = animal.age === null ? '—' : `${animal.age} `;
    if (animal.age !== null) {
      const unit = document.createElement('small');
      unit.textContent = 'wks';
      age.append(unit);
    }
    row.append(identity, age);
    return row;
  }));
  const direction = descending ? 'descending' : 'ascending';
  sortDirection.setAttribute('aria-pressed', String(descending));
  sortDirection.setAttribute('aria-label', `Change to ${descending ? 'ascending' : 'descending'} order`);
  sortDirection.textContent = `${descending ? 'Descending ↓' : 'Ascending ↑'}`;
  sortStatus.textContent = `${field[0].toUpperCase() + field.slice(1)}, ${direction}. ${field === 'age' ? 'Equal ages keep their order; missing values stay last.' : 'Equal values keep their original order.'}`;
}

if (sortField && sortDirection && animalList && sortStatus) {
  sortField.addEventListener('change', renderAnimals);
  sortDirection.addEventListener('click', () => {
    descending = !descending;
    renderAnimals();
  });
  renderAnimals();
}

document.querySelectorAll('.print-profile').forEach(button => {
  button.addEventListener('click', () => window.print());
});
