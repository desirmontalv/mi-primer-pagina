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

function checkSkin(type) {

  let message = "";

  if(type === "dry"){
    message = "You may have dry skin.";
  }

  if(type === "oily"){
    message = "You may have oily skin.";
  }

  if(type === "combination"){
    message = "You may have combination skin.";
  }

  if(type === "normal"){
    message = "You may have normal skin.";
  }

  document.getElementById("result").innerHTML = message;

}

  function checkSkin(type){

let result = document.getElementById("result");

if(type === "dry"){
result.innerHTML = "Your skin type may be Dry Skin.";
}

if(type === "oily"){
result.innerHTML = "Your skin type may be Oily Skin.";
}

if(type === "combination"){
result.innerHTML = "Your skin type may be Combination Skin.";
}

if(type === "normal"){
result.innerHTML = "Your skin type may be Normal Skin.";
}

}
