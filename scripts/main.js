const main = document.querySelector("main");
const btnGet = document.querySelector("#btnGet");
const btnClear = document.querySelector("#btnClear");
let resultList = null;

async function getData(countPerPage) {
    const url = `https://reqres.in/api/users?per_page=${countPerPage}`;
    const response = await fetch(url);
    return response.status === 200 ? await response.json() : null;
}

function clearList() {
    if (resultList !== null) {
        main.removeChild(resultList);
        resultList = null;
    }
}

btnGet.addEventListener("click", async (e) => {
    clearList();
    console.clear();

    const json = await getData(12);
    if (json) {
        const dataArray = json.data;
        if (dataArray) {
            resultList = document.createElement("div");
            let i = 0;
            dataArray.forEach((j) => {
                const nodePersonItemWrapper = document.createElement("div");
                nodePersonItemWrapper.classList.add("person-list__item-wrapper");
                const nodeImageWrapper = document.createElement("div");
                nodeImageWrapper.classList.add("item-wrapper__avatar-wrapper");

                const nodeImage = document.createElement("img");
                nodeImage.setAttribute("src", j.avatar);
                nodeImage.setAttribute("alt", "avatar");
                nodeImage.classList.add("list-item__avatar");

                const nodeImageLink = document.createElement("a");
                nodeImageLink.setAttribute("href", j.avatar);
                nodeImageLink.setAttribute("target", "_blank");
                nodeImageLink.appendChild(nodeImage);

                const nodePersonInfoWrapper = document.createElement("div");
                nodePersonInfoWrapper.classList.add("person-item__info-wrapper");

                const nodePersonName = document.createElement("p");
                const surname = j.last_name;
                nodePersonName.textContent = `${j.first_name} ${surname}`;
                if (surname.startsWith("F")) { //press F
                    nodePersonName.classList.add("color-red");
                }

                const nodePersonEmail = document.createElement("p");
                nodePersonEmail.textContent = `E-Mail: ${j.email}`;

                const nodePersonId = document.createElement("p");
                nodePersonId.textContent = `Person ID: ${j.id}`;

                nodePersonInfoWrapper.appendChild(nodePersonName);
                nodePersonInfoWrapper.appendChild(nodePersonEmail);
                nodePersonInfoWrapper.appendChild(nodePersonId);

                nodeImageWrapper.appendChild(nodeImageLink);
                nodePersonItemWrapper.appendChild(nodeImageWrapper);
                nodePersonItemWrapper.appendChild(nodePersonInfoWrapper);

                resultList.classList.add("person-list");
                resultList.appendChild(nodePersonItemWrapper);

                ++i;
                const surnameConsole = surname.startsWith("F") ? `${surname} (press F)` : surname;
                console.log(`User ${i}: ${surnameConsole}`);
            });
            main.appendChild(resultList);

            const users = dataArray.reduce((t, obj) => {
                return `${t} ${obj.first_name} ${obj.last_name},`;
            }, "Пользователи:");
            console.log(users.substring(0, users.length - 1));
        }
    }
});

btnClear.addEventListener("click", (e) => {
    clearList();
    console.clear();
});
