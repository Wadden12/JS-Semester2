/*      QAP 3 
 * Please update the following with your information:
 *
 *      Name:       Mike Wadden
 *      Date:       March 29/2022
 */

const list = document.querySelector('#category-products');
const products = window.products

.filter(d => d.discontinued === false);

function filter(products,check){
  list.innerHTML = "";
  
  products.forEach((product) =>{
  let array = product.categories;
  
  if(array.includes(check)){
    let row = document.createElement('tr');     
    row.innerHTML = `<td>${product.title}</td><td>${product.description}</td><td>${ new Intl.NumberFormat('en-CA', 
    { style: 'currency', currency: 'CAD' } 
  ).format((product.price)/100)}</td>`
    list.appendChild(row);   
  }  
});
};

const menu = document.querySelector('#menu');

class UI {

  static createButton(categories){ 
    categories = window.categories;  
    
    categories.forEach((product) => {    
    let btn = document.createElement("button");   
    btn.id = product.id;
    btn.classList.add('btnClass');
    btn.innerText = product.name;
    menu.appendChild(btn); 
    
    });

  }
  
  static createHeader(name){
    let header = document.querySelector('#selected-category');
    header.innerText = name;        
  }

}

document.addEventListener("DOMContentLoaded", UI.createButton);

window.addEventListener("click", (e) =>{
  if(e.target.className === "btnClass"){
    id = (e.target.id);
    button = document.getElementById(`${id}`);
    label = button.innerText;
    UI.createHeader(label);    
    filter(products, id);
     
  }  
  });



  






