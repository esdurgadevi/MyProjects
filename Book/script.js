var o=document.querySelector(".popup")
var p=document.querySelector(".popupbox")
var b=document.getElementById("addpop")
b.addEventListener("click",function(){
    o.style.display="block"
    p.style.display="block"
})
var button=document.getElementById("cancel")

button.addEventListener("click",function(event)
{
    event.preventDefault()
    o.style.display="none"
    p.style.display="none"

})
var d=document.querySelector(".container")
//select author booktitile and short describtion
var t=document.getElementById("tit")
var a=document.getElementById("na")
var s=document.getElementById("des")
var bu=document.getElementById("addbook")

bu.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","item")
    div.innerHTML=`
    <h2>${t.value}</h2>
            <h5>${a.value}</h5>
            <p>${s.value}</p>
            <button onclick="deleteitem(event)">Delete</button>`
    d.append(div)
    o.style.display="none"
    p.style.display="none"
})
function deleteitem(event)
{
    event.target.parentElement.remove()
}