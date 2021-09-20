const dateButton = document.querySelector("#dateBtn");
const dateAnswer = document.querySelector("#idea");
const nearMeLink = document.querySelector("#nearMe")

let dateIdeas = [
  "Bowling",
  "Hiking",
  "Swimming",
  "Have a fire",
  "Camping",
  "Road Trip",
  "Zoo",
  "BBQ",
  "Rodeo",
  "Sushi",
  "Dinner & Movie",
  "Ice cream",
  "Concert",
];

randomDate = () => {
  let randomValue = dateIdeas[Math.floor(Math.random() * dateIdeas.length)];
  dateAnswer.textContent = randomValue;
};

nearMe = () => {
    if(dateAnswer.textContent === "Bowling"){
        nearMeLink.href = "https://www.google.com/search?q=bowling+near+me"
    } else if (dateAnswer.textContent === "Hiking") {
        nearMeLink.href = "https://www.google.com/search?q=hiking+near+me"
    } else if (dateAnswer.textContent === "Swimming") {
        nearMeLink.href = "https://www.google.com/search?q=pools+near+me&oq=pools+near+me"
    } else if (dateAnswer.textContent === "Camping") {
        nearMeLink.href = "https://www.google.com/search?q=Camping+near+me"
    } else if (dateAnswer.textContent === "Zoo") {
        nearMeLink.href = "https://www.google.com/search?q=zoo+near+me"
    } else if (dateAnswer.textContent === "Rodeo") {
        nearMeLink.href = "https://www.google.com/search?q=rodeo+near+me"
    } else if (dateAnswer.textContent === "Sushi") {
        nearMeLink.href = "https://www.google.com/search?q=sushi+near+me"
    } else if (dateAnswer.textContent === "Dinner & Movie") {
        nearMeLink.href = "https://www.google.com/search?q=movies+near+me"
    } else if (dateAnswer.textContent === "Ice cream") {
        nearMeLink.href = "https://www.google.com/search?q=ice+cream+near+me"
    } else if (dateAnswer.textContent === "Concert") {
        nearMeLink.href = "https://www.google.com/search?q=concerts+near+me"
    }
}

dateButton.addEventListener("click", randomDate);
nearMeLink.addEventListener("click", nearMe)

