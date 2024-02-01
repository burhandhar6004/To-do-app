const formSelect = document.querySelector("form")
const ulSelect = document.querySelector("ul") 
const inputselect = document.querySelector("input")
const select = document.querySelector("select")
const button =document.querySelector(".clear")



const addtodo = (e)=>{
    // e.preventdefault();
    e.preventDefault();
    
    let listitem = document.createElement("li")
    let h1 = document.createElement("h1")
    const h2 = document.createElement("h2")
    const buttonselect = document.createElement("button")
    


    h2.innerHTML = "Ratting : " + select.value + '<i class="fa-regular fa-star" style="color: #eeff00;"></i>'
    h1.innerText = "E-Skills : " + inputselect.value;
    
    buttonselect.innerText = "Delete"

    listitem.className = "li-1"
    buttonselect.className = "delete"


    listitem.appendChild(h1)
    listitem.appendChild(h2)
    listitem.appendChild(buttonselect)
    ulSelect.appendChild(listitem)

    console.log("listiem")

    formSelect.reset()

}


formSelect.addEventListener("submit", addtodo);

const deletetodo = (e) =>{
    // if(e.target.className.includes("delete"));{
    // let listitem = e.target.parentElement;
    // ulSelect = removechild(listitem)

    // }

//    console.log(e.target.className.includes('delete'))
    // console.log("deleted")
    if(e.target.className.includes('delete')){
        let listitem = e.target.parentElement;
        ulSelect.removeChild(listitem)
        // console.log("deleted")
    }
   }



ulSelect.addEventListener("click", deletetodo)



const clearall = (e) =>{
    if(e.target.className.includes("clear")){
        let alllist = document.querySelectorAll("li")
        // alllist.remove();
        ulSelect.remove()
    }
}

button.addEventListener("click", clearall)