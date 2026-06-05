
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

const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const imgUl = document.querySelector("#gallery");

function imgCreator(images) {
  return images.reduce((acc, image) => {
    return (
      acc +
      `
      <li>
        <img src="${image.url}" alt="${image.alt}" />
      </li>
    `
    );
  }, "");
}

imgUl.insertAdjacentHTML("beforeend", imgCreator(images));