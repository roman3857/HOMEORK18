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

const ul = document.querySelector("#ingredients");


const createItemLi = (ingradient) => {

}