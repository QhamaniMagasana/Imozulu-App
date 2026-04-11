function searchFormSubmit(event){
    event.preventDefault();
    let searchEngen = document.querySelector("#search-engen");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchEngen.value;

}


let searchForm=document.querySelector("#form-element");
searchForm.addEventListener("submit", searchFormSubmit);

