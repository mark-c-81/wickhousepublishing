const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtIcon = document.querySelector(".toggle-btn i");
const dropDownMenu = document.querySelector(".dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
  toggleBtIcon.classList = isOpen ? "fa-solid fa-xmark" : "fa-solid fa-bars";
};

// author data for author grid is below

const authorData = [
  {
    id: 1,
    image: "images/authors/michael-klumpp-sm.jpeg",
    name: "Michael Klumpp",
    title: "Author & Poet",
    bio: "aka Mike Klumpp, Berdy Dedman, Arap Seronei is an poet, artist and adventurer currently living in Virginia. He brings the rich feel of his native New Orleanian spirit together with his wit and sense of humor to write bent verse and penetrating honest stories. Like a giant beignet and a cup of black coffee, his style is sweet and sobering all at once.",
    email: "mikeklumpp@yahoo.com",
    website: "klumppblog.wordpress.com",
    books: [
      "Say Yes",
      "Razzy Dazzy Spasm Band",
      "The Question is Tolstoy’s Beard",
      "I Am: The Miracle",
      "I am Steve Bishop’s Yardman",
    ],
  },
  {
    id: 2,
    image: "images/authors/anna-aronson-sm.jpeg",
    name: "Anna Aronson",
    title: "Illustrator",
    bio: `Anna is an illustrator born and raised in America’s dairy land – Wisconsin. She enjoys making art and telling stories. While she took several art classes in college, she graduated with a degree in history in 2011. She has spent the last decade raising a family with her husband Joe. They have three kids ages -10, 8, and 4- along with a slew of animals that now includes 41 chickens, 5 goats, 2 dogs, 2 barn cats, and about 50,000 honeybees.

“In my work, I like to focus on the everyday happenings of people from both now and the past. The reason I love and studied history is that I love all of the stories that make up people’s lives. History has always felt very narrative to me- just like the kind of art I like to make.”`,
    email: "none",
    website: "none",
    books: ["Say Yes", "The Grumpy Troll"],
  },
  {
    id: 3,
    image: "images/authors/megan-bollen-sm.jpeg",
    name: "Megan Bollen",
    title: "Author",
    bio: "Megan began her writing journey through music and poetry. She has since been a contributor to academic and creative blogs on topics as widely varied as Tea, and Global Peacebuilding. She is excited to begin a new journey in creative writing with her first children’s folktale, Grumpy Troll. She holds a bachelor’s in Global Studies from Colorado Christian University and a Masters in Education from the University of Colorado Boulder. Some of her favorite children’s stories are Vasilisa the Beautiful by Alexander Afanasyev, The Little Tree by Loren Long, and Dragon’s Love Tacos by Adam Rubin.",
    email: "none",
    website: "none",
    books: ["The Grumpy Troll"],
  },
  {
    id: 4,
    image: "images/authors/kemmer-anderson-sm.jpeg",
    name: "Kemmer Anderson",
    title: "Author",
    bio: "Kemmer Anderson, taught English for 40 years at McCallie School in Chattanooga, Tennessee, where he was faculty advisor to the Amnesty International Chapter. A graduate of Davidson College where he played soccer goalie, he has received M.A. degrees from UT-Chattanooga & St. John’s College. He has published in the Sewanee Review, Sojourners, Christian Century, and St. John’s Review. He has received 4 NEH grants to study John Milton at Stanford and the University of Arizona, Galileo in Florence, Italy, and Thucydides at Gustavus Adolphus College. He has published a collection of essays: Milton at Monticello: Thomas Jefferson’s Reading of John Milton. He and his wife Martha gardened on Wing Shadow Farm for 21 years. They have traveled in Greece, England, Ireland, Israel, and Palestine (Korea, U.S. Army – 1969). Author of three books of poetry: Wing Shadows Over Walden Ridge, Songs of Bethlehem: Nativity Poems, and Palamedes: The Lost Muse of Justice.",
    email: "none",
    website: "none",
    books: ["Chasing The Tyrant Muse: Poems Against Hate"],
  },
  {
    id: 5,
    image: "images/authors/jordan-monderen-sm.jpeg",
    name: "Jordan Monderen",
    title: "Poet",
    bio: "Jordan Monderen is a person rooted in many cultures. Originally a native from Hawai’i, she is what many consider ethnically diverse representing nationalities of descent from Hawai’i, Portugal, Puerto Rico, Korea, Philippines, and Europe. However, more than genetically, Jordan considers herself a direct pupil of the places and the people of the world through the many forms of art. This is how, why, and where The Elements found its roots. Since the age of five, Jordan has taken a fascination with people and the way they communicate through drawing, writing, music, photography…etc. Throughout her life, she has learned many trades through her parents and from every friend or stranger that has crossed her path.",
    email: "none",
    website: "none",
    books: ["The Elements"],
  },
  {
    id: 6,
    image: "images/authors/brandon-trip-sm.jpeg",
    name: "Brandon Trip",
    title: "Poet & Musician",
    bio: "Brandon is a Colorado native who enjoys expressing his creativity through as many mediums as possible. He is a poet at heart who explores his creativity by dabbling in visual arts, music, food, and language. As an amateur linguist and lover of language, he is working toward a location independent lifestyle through a career in Software Development while trying to live the ideal of, “to create, express, and explore”, in every area of life.",
    email: "none",
    website: "none",
    books: ["An Island Called Home and Other Poems"],
  },
  {
    id: 7,
    image: "images/authors/vicki-krehbiel-sm.jpeg",
    name: "Vicki L. Krehbiel",
    title: "Author & Poet",
    bio: "Vicki L. Krehbiel is a native Kansan, who currently lives in the rural area with her husband, Larry. They have four grown children and eleven grandchildren. A former English teacher and adjunct instructor, Vicki now has time to spend on her writing goals. Presently, her interest lies in writing nostalgic pieces during the Baby Boom era that create an atmosphere of neighborly warmth and treasured memories.",
    email: "vicnet26@yahoo.com",
    website: "http://simplewritings14.blogspot.com/",
    books: ["Eighth Street Nine"],
  },
];

// to populate the author grid

const authorContainer = document.querySelector("#authorsContainer");

authorData.forEach((author) => {
  const authorCard = document.createElement("div");
  authorCard.className = "author-card";

  const truncatedBio =
    author.bio.length > 200 ? author.bio.slice(0, 200) + "..." : author.bio;

  const content = `
    <div class="card-content">
      <div class="card-title">
        <img
          src="${author.image}"
          alt="${author.name}"
          class="card-img"
        />
        <h2>${author.name}</h2>
        <h3>${author.title}</h3>
      </div>
      <div class="socials">
        <ul>
          <li>
            <a href="https://www.facebook.com/WickHouse"
              ><i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/w_h_publishing/"
              ><i class="fa-brands fa-instagram"></i
            ></a>
          </li>
          <li>
            <a href="https://twitter.com/w_h_publishing"
              ><i class="fa-brands fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
      <p id="bio" class="card-description">
        ${truncatedBio}
      </p>
    </div>`;

  authorCard.innerHTML = content;
  authorContainer.appendChild(authorCard);

  authorCard.addEventListener("click", () => {
    showModal(author);
  });
});

function showModal(author) {
  const modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("div");
  modalContent.className = "modal-content";

  const booksList = author.books.map((book) => `<li>${book}</li>`).join("");

  const authorInfo = `
    <div>
      <img src="${author.image}" alt="${author.name}" class="modal-img" />
      <h2>${author.name}</h2>
      <h3>${author.title}</h3>
      <p>${author.bio}</p>
      <ul>${booksList}</ul>
    </div>`;

  modalContent.innerHTML = authorInfo;

  modal.appendChild(modalContent);

  document.body.appendChild(modal);
  document.body.classList.add("modal-open"); // Add class to body to freeze background

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      closeModal(modal);
    }
  });
}

function closeModal(modal) {
  document.body.removeChild(modal);
  document.body.classList.remove("modal-open"); // Remove class from body to unfreeze background
}
