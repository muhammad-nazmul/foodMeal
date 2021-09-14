const search = () =>{
   const searchFiled = document.getElementById('search-filed');
   const searchText = searchFiled.value;
   searchFiled.value = '';
   if(searchText == ''){
      alert('Please Write something')
   }
   else{
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
      fetch(url)
     .then(response => response.json())
     .then(data => display(data.meals))
     .catch(error => console.log(error))
   } 
}
const display = meals => {
   const searchResult = document.getElementById('search-result');
   searchResult.textContent = '';

   meals.forEach(meal => {
      const div = document.createElement('div');
      div.classList.add('col');
      div.innerHTML= `
      <div onclick = "details(${meal.idMeal})" class="card">
      <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
      </div>
    </div>
    `;
    searchResult.appendChild(div)  
   });
}
const details = idMeal =>{
   const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
   fetch (url)
   .then(response => response.json())
   .then(data => displaymeal(data.meals[0]))
}
const displaymeal = meal =>{
   console.log(meal)
   const mealdetail = document.getElementById('meals-details');
   mealdetail.textContent = '';
   const div = document.createElement('div');
   div.classList.add('card');
   div.innerHTML = `
       <img w-50 mx-auto src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0,200)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
        </div>
   `
   mealdetail.appendChild(div)
}