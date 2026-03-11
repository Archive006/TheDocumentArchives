function addMember(){

let members=JSON.parse(localStorage.getItem("members"))||[]

let visible=[]

if(document.getElementById("vAdmin").checked)visible.push("Admin")
if(document.getElementById("vMember").checked)visible.push("Member")
if(document.getElementById("vPastor").checked)visible.push("Pastor")

let member={

name:document.getElementById("name").value,
surname:document.getElementById("surname").value,
title:document.getElementById("title").value,
number:document.getElementById("number").value,
photo:document.getElementById("photo").value,
visibleTo:visible

}

members.push(member)

localStorage.setItem("members",JSON.stringify(members))

alert("Member Added")

}