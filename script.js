let arr = 
[
    {id:1,name:"john",age:18,profession:"developer"},
{id:2, name:"jack",age:20, profession:"developer"},
{id:3, name:"karen", age:19,profession:"admin"}
]






function addUser(){
    let name1 = document.getElementById('name').value
    let profession1 = document.getElementById('profession').value
    let age1 = document.getElementById('age').value

    let userr = {
        id: arr[arr.length-1].id+1,
        name: name1,
        age: age1,
        profession: profession1
    }

    arr.push(userr);
    console.log(arr)
}



function filterUser(prof){
    if(prof == ""){
        return arr;
    }
    else{
        let userList = arr.filter(function(user){
            return prof == user.profession;
        })
    
    return userList
    }
}

// console.log(filterUser("developer"))


let sel = document.getElementsByTagName("select")[0];

function filteredUser() {

    let s = sel.value;

    let list = filterUser(s)
    
    details.innerHTML = ""

    appendUsers(list)
}

{/* <div class="details">
<div class="container111">
  <div>1</div>
  <div>name</div>
  <div>prof</div>
  <div>age</div>
</div>
</div> */}

let details = document.getElementsByClassName("details")[0]


function appendUsers(arr){

    for(let i = 0; i<arr.length; i++){

        let container = document.createElement("div")
        let idEle = document.createElement("div")
        idEle.innerText = arr[i].id
        let nameEle = document.createElement("div")
        nameEle.innerText = "name: "+arr[i].name
        let profEle = document.createElement("div")
        profEle.innerText = "prof: "+arr[i].profession
        let ageEle = document.createElement("div")
        ageEle.innerText = "age: "+arr[i].age

        container.append(idEle)
        container.append(nameEle)
        container.append(profEle)
        container.append(ageEle)

        container.className = "container111"
        details.append(container)
    }

    
}
