// A small browser demonstration of the Python project's documented sorting rules.
// These records are illustrative and are not from the animal shelter dataset.
const animals = [
  { name: "Milo", breed: "Labrador", age: 26 },
  { name: "Luna", breed: "Shepherd", age: 52 },
  { name: "Scout", breed: "Labrador", age: 52 },
  { name: "Finn", breed: "Retriever", age: null },
];

function sortValue(record, field) {
  const value = record[field];
  if (field === "age") {
    return typeof value === "number" && Number.isFinite(value) && value >= 0 ? value : null;
  }
  return typeof value === "string" && value.trim() ? value.trim().toLowerCase() : null;
}

function mergeSort(records, field, descending) {
  if (records.length < 2) return records.slice();
  const midpoint = Math.floor(records.length / 2);
  const left = mergeSort(records.slice(0, midpoint), field, descending);
  const right = mergeSort(records.slice(midpoint), field, descending);
  const ordered = [];
  let i = 0;
  let j = 0;
  function compare(a, b) {
    const leftValue = sortValue(a, field);
    const rightValue = sortValue(b, field);
    // Missing and invalid values stay last in both directions.
    if (leftValue === null && rightValue === null) return 0;
    if (leftValue === null) return 1;
    if (rightValue === null) return -1;
    const order = leftValue < rightValue ? -1 : leftValue > rightValue ? 1 : 0;
    return descending ? -order : order;
  }
  while (i < left.length && j < right.length) {
    // Choosing left on equality keeps equal records in their original order.
    ordered.push(compare(left[i], right[j]) <= 0 ? left[i++] : right[j++]);
  }
  return ordered.concat(left.slice(i), right.slice(j));
}

const sortControls = document.getElementById("sort-controls");
const sortField = document.getElementById("sort-field");
const sortDirection = document.getElementById("sort-direction");
const animalList = document.getElementById("animal-list");
const sortStatus = document.getElementById("sort-status");

function renderAnimals() {
  const field = sortField.value;
  const descending = sortDirection.value === "descending";
  const records = mergeSort(animals, field, descending);
  animalList.replaceChildren(
    ...records.map((animal) => {
      const row = document.createElement("li");
      const identity = document.createElement("span");
      const name = document.createElement("strong");
      const breed = document.createElement("small");
      const age = document.createElement("span");
      name.textContent = animal.name;
      breed.textContent = animal.breed;
      identity.append(name, breed);
      age.textContent = animal.age === null ? "—" : `${animal.age} `;
      if (animal.age !== null) {
        const unit = document.createElement("small");
        unit.textContent = "wks";
        age.append(unit);
      }
      row.append(identity, age);
      return row;
    }),
  );
  const direction = descending ? "descending" : "ascending";
  sortStatus.textContent = `${field[0].toUpperCase() + field.slice(1)}, ${direction}. ${field === "age" ? "Equal ages keep their order; missing values stay last." : "Equal values keep their original order."}`;
}

if (sortControls && sortField && sortDirection && animalList && sortStatus) {
  sortField.addEventListener("change", renderAnimals);
  sortDirection.addEventListener("change", renderAnimals);
  renderAnimals();
  sortControls.hidden = false;
}
