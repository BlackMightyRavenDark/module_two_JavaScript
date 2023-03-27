const adv = document.querySelector(".adv");

adv.parentNode.removeChild(adv);

const books = document.querySelectorAll(".book");
books[0].before(books[1]);
books[2].before(books[4]);
books[5].after(books[2]);
