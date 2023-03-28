const adv = document.querySelector(".adv");

adv.parentNode.removeChild(adv);

const books = document.querySelectorAll(".book");
books[0].before(books[1]);
books[2].before(books[4]);
books[5].after(books[2]);

const book2 = books[0].childNodes[3].childNodes;
book2[7].after(book2[13]);
book2[13].after(book2[17]);
book2[8].after(book2[14]);
book2[19].after(book2[5]);

console.log(book2)