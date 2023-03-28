const books = document.querySelectorAll(".book");

function removeAdvertisement() {
    const adv = document.querySelector(".adv");
    adv.parentNode.removeChild(adv);
}

function fixBooksOrder() {
    books[0].before(books[1]);
    books[2].before(books[4]);
    books[5].after(books[2]);
}

function fixBook2() {
    const book2 = books[0].childNodes[3].childNodes;
    book2[7].after(book2[13]);
    book2[13].after(book2[17]);
    book2[8].after(book2[14]);
    book2[19].after(book2[5]);
}

function fixBook5() {
    const book5 = books[5].childNodes[3].childNodes;
    book5[3].after(book5[19]);
    book5[10].after(book5[6]);
    book5[18].before(book5[12]);
}

function fixBook3Title() {
    const book3text = books[4].childNodes[1].childNodes[1].childNodes[0];
    book3text.textContent = book3text.textContent.replace("попипы", "тотипы");
}

removeAdvertisement();
fixBooksOrder();
fixBook2();
fixBook5();
fixBook3Title();
