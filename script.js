function checkSkin(type){

if(type === "dry"){
document.getElementById("result").innerText =
"You may have Dry Skin. Use hydrating products.";
}

if(type === "oily"){
document.getElementById("result").innerText =
"You may have Oily Skin. Look for oil-free products.";
}

if(type === "combination"){
document.getElementById("result").innerText =
"You may have Combination Skin. Balance hydration.";
}

if(type === "normal"){
document.getElementById("result").innerText =
"You may have Normal Skin. Maintain a gentle routine.";
}

}
