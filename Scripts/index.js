let form = document.querySelector("#form");
form.addEventListener("submit",handleForm);

let local=JSON.parse(localStorage.getItem("movie-list")) || [] ;

function handleForm(e){
    e.preventDefault();
    let movie=form.elements[0].value;
    let actor=form.elements[1].value;
    let des= form.elements[2].value;
    let date=form.elements[3].value;
    let cat=form.elements[4].value;
    let price=form.elements[5].value;
    alert("Submitted!")
    //window.location.href="./booking.html"
    let obj={movie,actor,des,date,cat,price}
    console.log(obj);
    local.push(obj)
    localStorage.setItem("movie-list",JSON.stringify(local))
}

