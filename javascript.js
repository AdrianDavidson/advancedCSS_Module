// ADRIAN DAVIDSON
// R00138984
// DWEB

function fanIn()
{

document.getElementById('topmenu').className = "fanclosed";
document.getElementById('topmenu').onclick = fanout;

}



function fanout()
{

document.getElementById('topmenu').className = "fanopen";
document.getElementById('topmenu').onclick = fanIn;

}


function init()
{

document.getElementById('topmenu').onclick = fanout;



}

window.onload = init
