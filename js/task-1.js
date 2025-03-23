const items = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
  const category = document.querySelector('#categories h2');
  const categoryElements = item.querySelectorAll('li');
  console.log(`Category: ${category.innerHTML}`);
  console.log(`Elements: ${categoryElements.length}`);
});
