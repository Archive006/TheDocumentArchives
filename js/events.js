function loadEvents(){

let events = JSON.parse(localStorage.getItem("events")) || []

let table = document.getElementById("eventsBody")

table.innerHTML=""

events.forEach(e =>{

let row = `
<tr>
<td>${e.date}</td>
<td>${e.type}</td>
<td>${e.details}</td>
<td>${e.church}</td>
<td><a href="${e.image}" target="_blank">View</a></td>
</tr>
`

table.innerHTML += row

})

}

loadEvents()

function requestEvent(){

window.location="login.html?request=1"

}