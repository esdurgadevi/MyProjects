var i=document.getElementById("in")
var d=document.getElementById("hh")
function add()
{
    var h=document.createElement("h3")
    var b=document.createElement("button")
    h.textContent=i.value
    d.append(h)
}  
function deleteitem(event)
{
    event.target.remove();
}
