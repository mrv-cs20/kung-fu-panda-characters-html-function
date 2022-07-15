// Kung Fu Panda Image Gallery

// I want JavaScript to build the HTML for me

// I want a function that will build the html string for a single character
// What information will this function need?
// - imagePath, character name, quote

function getCharacterHTMLStr(imgPath, name, quote) {
  return `
    <div>
      <img src="img/${imgPath}" />
      <h3>${name}</h3>
      <p>${quote}</p>
    </div>
  `;
}

let htmlStr = "";

htmlStr += getCharacterHTMLStr(
  "po.png",
  "Po",
  "Buddy, I am the Dragon Warrior."
);
htmlStr += getCharacterHTMLStr(
  "shifu.png",
  "Master Shifu",
  "There is now a Level Zero."
);
htmlStr += getCharacterHTMLStr(
  "oogway.png",
  "Master Oogway",
  "Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present."
);
htmlStr += getCharacterHTMLStr(
  "croc.png",
  "Master Croc",
  "Vengeance is served!"
);
htmlStr += getCharacterHTMLStr(
  "storming-ox.png",
  "Master Storming Ox",
  "You insolent fool!"
);

document.getElementById("container").innerHTML = htmlStr;
