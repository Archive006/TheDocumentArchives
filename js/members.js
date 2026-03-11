let user=JSON.parse(localStorage.getItem("activeUser"))

let members=JSON.parse(localStorage.getItem("members"))||[]

let container=document.getElementById("membersList")

members.forEach(m=>{

if(m.visibleTo.includes(user.role)){

let block=`

<div class="profile">

<img src="${m.photo}" width="120">

<h3>${m.name} ${m.surname}</h3>

<p>${m.title}</p>

<p>${m.number}</p>

</div>

`

container.innerHTML+=block

}

})