function login(){

let u=document.getElementById("username").value
let s=document.getElementById("surname").value
let p=document.getElementById("password").value

let users=JSON.parse(localStorage.getItem("users"))||[]

let user=users.find(x=>x.name==u && x.surname==s && x.password==p)

if(!user){

alert("Invalid Login")
return

}

localStorage.setItem("activeUser",JSON.stringify(user))

if(user.role=="Admin"){

window.location="admin.html"

}

if(user.role=="Member"){

window.location="members.html"

}

if(user.role=="Pastor"){

window.location="request.html"

}

}