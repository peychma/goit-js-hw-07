const categoriesList = document.querySelector("#categories");
const categoryItems = categoriesList.querySelectorAll(".item"); 
console.log(categoriesList, categoryItems.length);
for (const category of categoryItems) {
const categoryName = category.querySelector('h2').textContent;
  const categoryElements = category.querySelectorAll("ul li");
  console.log(`category: ${categoryName}`);
  console.log(`categoriesList: ${categoryElements.length}`);
}