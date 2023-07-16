// Declare your genre arrays here
let comedy = ["https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1000_.jpg","https://upload.wikimedia.org/wikipedia/en/d/d4/Ted_%28film%29.png", "https://m.media-amazon.com/images/M/MV5BYTAzMmIwMWQtYjRjYy00NmM2LWIxYWUtY2NhYjMzZjc4ZGZmXkEyXkFqcGdeQXVyNDc3MzQ5Nzc@._V1_.jpg"];
  let action = ["https://m.media-amazon.com/images/M/MV5BZDA4YmE0OTYtMmRmNS00Mzk2LTlhM2MtNjk4NzBjZGE1MmIyXkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg", "https://m.media-amazon.com/images/I/51ClgbAfjgL.jpg", "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/C1C0181ED7342217394E5AC940003A8653E3311B6016194749B29A0FE3F238EB/scale?width=1200&aspectRatio=1.78&format=jpeg"];
  let horror = ["https://www.intransitbroadway.com/wp-content/uploads/2022/04/The-Conjuring-Movies-1024x489.png", "https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_FMjpg_UX1000_.jpg","https://froontrowmovies.files.wordpress.com/2015/08/the-dark-promise-of-sinister-2-in-one-single-image-347629.jpg"];

let suggestionArray = [];
let suggestionButton = document.querySelector(".suggestionButton");
let comedyContainer = document.querySelector(".comedyContainer");
let actionContainer = document.querySelector(".actionContainer");
let horrorContainer = document.querySelector(".horrorContainer");
//lol
let submitButton = document.querySelector("button"); 
submitButton.onclick = function() {
 let genre= document.querySelector(".genre").value;
    console.log("Submitted");
    if (genre === "comedy") {
      for(let comedymovie of comedy){
      comedyContainer.insertAdjacentHTML("afterbegin", "<img src=" + comedymovie + ">"); }
    } 
    if (genre === "action") {
      for(let actionmovie of action){
      actionContainer.insertAdjacentHTML("afterbegin", "<img src=" + actionmovie + ">"); }
}
    if (genre === "horror") {
      for(let horrormovie of horror){
      horrorContainer.insertAdjacentHTML("afterbegin", "<img src=" + horrormovie + ">"); }
}
    else {
      alert("CHOOSE FROM LIST or check spelling lolz");
}
};
    
suggestionButton.onclick = function() {
	let sugestions = document.querySelector(".sugestions").value;
	if (sugestions === "klown") { 
        alert ("dvrk");
	}
	else { 
        alert ("THANK YOU FOR UR SUGGESTION!!");
    }
    suggestionArray.push(sugestions);
    
    
    comedyContainer.insertAdjacentHTML("afterbegin", "<li>" + sugestions + "</li>");
};
    