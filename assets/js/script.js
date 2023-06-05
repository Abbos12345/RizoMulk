const benefitialContainer = document.getElementById("benefitial");
const regularContainer = document.getElementById("regular");

let benefitialCount = 0;
let regularCount = 0;

onSale.forEach((item) =>{
  const div = document.createElement('div');
  div.classList.add('section-container')

  div.innerHTML = `
  <div class="section-container__img"></div>
  <div class="section-container__content">
    <h4>${item.monthlyPrice} <span>/month</span></h4>
    <p class="section-container__content-info">${item.information}</p>
    <p class="section-container__content-address">${item.address}</p>
    <div class="section-container__content__footer">
      <span>${item.metro}</span>
      <span>${item.floor}</span>
      <span>${item.space}</span>
    </div>
  </div>
  `

  if(item.recommended && benefitialCount < 3){
    benefitialContainer.appendChild(div);
    benefitialCount++;
  } else{
    regularContainer.appendChild(div);
    regularCount++;
  }
})



const projectsContainer = document.querySelector(".main__buy-sell__projects");


projects.forEach((index) =>{
  const company = document.createElement('div');
  company.classList.add('project-box')

  company.innerHTML = `
    <div class="project-box__img"></div>
    <span>${index}</span>
  `

  projectsContainer.appendChild(company)
})

  
  const sellersContainer = document.querySelector(".sellers-container");

  sellers.forEach((item) => {
    const seller = document.createElement("div");
    seller.classList.add("sellers-box");

    seller.innerHTML = `
      <div class="sellers-box__img"></div>
      <div class="sellers-box__text">
        <p>${item.name}</p>
        <span>${item.listing} объявлений</span>
      </div>
    `

    sellersContainer.appendChild(seller);
  })
  
  
  
  
  