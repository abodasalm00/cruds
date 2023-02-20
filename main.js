let title = document.getElementById("title");
let price = document.getElementById("price");
let taxes = document.getElementById("taxes");
let ads = document.getElementById("ads");
let discount = document.getElementById("discount");
let total = document.getElementById("total");
let count = document.getElementById("count");
let category = document.getElementById("category");
let submit = document.getElementById("submit");

// get total
function getTotal() {
  if (price.value != "") {
    let result = +price.value + +taxes.value + +ads.value - discount.value;
    total.innerHTML = result;
    total.style.background = "#040";
  } else {
    total.innerHTML = "";
    total.style.background = "#a00d";
  }
}

// create product
let array;
if (localStorage.product != null) {
  array = JSON.parse(localStorage.product);
} else {
  array = [];
}

submit.onclick = function () {
  let object = {
    title: title.value,
    price: price.value,
    taxes: taxes.value,
    ads: ads.value,
    discount: discount.value,
    total: total.innerHTML,
    count: count.value,
    category: category.value,
  };

  if (object.count > 1) {
    for (let i = 0; i < object.count; i++) {
        array.push(object);
    }
  }else{
    array.push(object);
  }

  // save localStorage
  localStorage.setItem("product", JSON.stringify(array));

  clearData();
  bigData();
};

// clear Data
function clearData() {
  title.value = "";
  price.value = "";
  taxes.value = "";
  ads.value = "";
  discount.value = "";
  total.innerHTML = "";
  count.value = "";
  category.value = "";
}

// read

function bigData() {
  let table = "";
  for (let i = 0; i < array.length; i++) {
    table += `
        <tr>
            <td>${i}</td>
            <td>${array[i].title}</td>
            <td>${array[i].price}</td>
            <td>${array[i].taxes}</td>
            <td>${array[i].ads}</td>
            <td>${array[i].discount}</td>
            <td>${array[i].total}</td>
            <td>${array[i].category}</td>
            <td><button onclick = 'updateProd(${i})' id = 'update'>update</button></td>
            <td><button onclick = 'DeleteProd(${i})' id = 'delete'>delete</button></td>
            
        </tr>
        `;
  }
  document.getElementById("tbody").innerHTML = table;
  let btnData = document.getElementById("deleteAll");
  if (array.length > 0) {
    btnData.innerHTML=`
    <button onclick = 'deleteAll()'>deleteAll (${array.length})</button>
    `
  }else{
    btnData.innerHTML='';
  }
}
bigData()


// delete product

function DeleteProd(i) {
    array.splice (i,1)
    localStorage.product = JSON.stringify(array)
    bigData()
}

// deleteAll

function deleteAll() {
    localStorage.clear()
    array.splice (0)
     bigData()
}


// count


// Update


 