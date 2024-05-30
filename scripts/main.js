// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

const myImage = document.querySelector("img"); //select the first iamge on the page?
myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/udyr.png") {
    myImage.setAttribute("src", "images/udyr-inkshadow-762x.jpg");
  } else {
    myImage.setAttribute("src", "images/udyr.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if(!myName){
        setUserName();
    }
    else{
    localStorage.setItem("name", myName);
    myHeading.textContent = `Udyr is the Champion for you, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Udyr is the Champion for you, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
  };

// document.querySelector("img").addEventListener("click", () => {
//     alert("Yup that's him");
//   });
