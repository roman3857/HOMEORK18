const list = document.querySelector("#categories");
const listItems = list.children;

console.log(`У списку ${listItems.length} категорії`);

for (const item of listItems) {
  const title = item.querySelector("h2").textContent;
  const elementsCount = item.querySelector("ul").children.length;

  console.log(`Категорія: ${title}`);
  console.log(`Кількість елементів: ${elementsCount}`);
}

const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ingredientsList = document.querySelector("#ingredients");

const items = ingredients.map((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  return li;
});

ingredientsList.append(...items);
