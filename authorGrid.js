// import authorData from "./authorData.js";
// // const authorData = require("./authorData");

// function createAuthorGrid() {
//   const authorsContainer = document.getElementById("authorsContainer");

//   // Loop through the array and create grid items
//   authorData.forEach((author) => {
//     const authorCard = document.createElement("div");
//     authorCard.className = "author-card";

//     const content = `
//     <div class="card-content">
//             <div class="card-title">
//               <img
//                 src="${author.image}"
//                 alt="${author.name}"
//                 class="card-img"
//               />
//               <h2>${author.name.toUpperCase()}</h2>
//               <h3>${author.title}</h3>
//             </div>
//             <div class="socials">
//               <ul>
//                 <li>
//                   <a href="https://www.facebook.com/WickHouse"
//                     ><i class="fa-brands fa-facebook"></i>
//                   </a>
//                 </li>
//                 <li>
//                   <a href="https://www.instagram.com/w_h_publishing/"
//                     ><i class="fa-brands fa-instagram"></i
//                   ></a>
//                 </li>
//                 <li>
//                   <a href="https://twitter.com/w_h_publishing"
//                     ><i class="fa-brands fa-twitter"></i>
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <p class="card-description">
//               ${author.bio}
//             </p>
//           </div>`;
//     authorCard.innerHTML = content;
//     authorsContainer.appendChild(authorCard);
//   });
// }

// export default createAuthorGrid;
