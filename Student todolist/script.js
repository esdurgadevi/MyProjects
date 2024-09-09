var save=document.getElementById("save")
var n=document.getElementById("name")
var age=document.getElementById("age")
var email=document.getElementById("email")
var t=document.getElementById("result")
var c=document.getElementById("course")



save.addEventListener("click",function(event)
{
    var gv=document.querySelector('input[name="gender"]:checked')
    event.preventDefault()
    var row = t.insertRow(-1); // "-1" inserts at the end
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = n.value;
    cell2.innerHTML = age.value;
    cell3.innerHTML = c.value;
    cell4.innerHTML = gv.value;
    cell5.innerHTML = email.value;
    var bu = document.createElement("button");
    bu.textContent = "Delete";
    cell6.appendChild(bu);
    t.append()
    bu.addEventListener("click",function(event)
    {
        row.remove()
    })

})    