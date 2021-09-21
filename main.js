const dateButton = document.querySelector("#dateBtn");
const dateAnswer = document.querySelector("#idea");
const nearMeLink = document.querySelector("#nearMe")
const activityIcon = document.querySelector("#activityIcon")
const form = document.querySelector("#dateNotes")
const list = document.querySelector("ol")

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

displayIcon = () => {
    if(dateAnswer.textContent === "Bowling"){
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/37/37734.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "icon"){
        activityIcon.style.display='none'
    } else if (dateAnswer.textContent === "Hiking") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/2017/2017204.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Swimming") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/3412/3412879.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Have a fire") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/482/482103.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Camping") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/817/817219.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Road Trip") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/2782/2782377.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Zoo") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/884/884188.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "BBQ") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/823/823317.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Rodeo") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/37/37480.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Sushi") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/1539/1539701.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Dinner & Movie") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/738/738096.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Ice cream") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/3077/3077188.png"
        activityIcon.style.display='block'
    } else if (dateAnswer.textContent === "Concert") {
        activityIcon.src = "https://cdn-icons-png.flaticon.com/512/2394/2394757.png"
        activityIcon.style.display='block'
    }
}

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
    } else if (dateAnswer.textContent === "BBQ") {
        nearMeLink.href = ""
        nearMeLink.target= ""
        alert(`Nothing near for ${dateAnswer.textContent}`)
    } else if (dateAnswer.textContent === "Have a fire") {
        nearMeLink.href = ""
        nearMeLink.target= ""
        alert(`Nothing near for ${dateAnswer.textContent}.`)
    } else if (dateAnswer.textContent === "Road Trip") {
        nearMeLink.href = ""
        nearMeLink.target= ""
        alert(`Get out there and explore!`)
    }
}

submitHandler = (e) => {
    e.preventDefault()
    
    console.log('hello')
    let link = document.querySelector('#dateLinks')
    let name = document.querySelector('#dateName')



    let newLi = document.createElement('li')
    let newA = document.createElement('a')

    newA.textContent = name.value
    
    newA.href = `${link.value}`

    newA.target = "_blank"

    newLi.appendChild(newA)
    list.appendChild(newLi)


    link.value = ''
    name.value = ''
}

dateButton.addEventListener("click", randomDate);
dateButton.addEventListener("click", displayIcon)
nearMeLink.addEventListener("click", nearMe)
form.addEventListener("submit", submitHandler)

