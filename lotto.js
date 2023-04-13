/** 測試用
 * const element = document.querySelector("h1");
 * console.log(element);
 * // 更改本文內容
 * //element.innerText = "2023/4/6" + element.innerText;
 * // 更改HTML
 * element.innerHTML = `<li style="color:red">${element.innerText}</li>`;
 **/

const dateEl = document.querySelector("h3 .date"); // 階層關係的標籤(空格)
//const dateEll = document.querySelector("p.date");   // 同一層class的標籤

dateEl.innerText = "2023/4/6";
console.log(dateEl);

// 找出所有同樣class名稱(.date)的內容，並使用forEach全部修改
const dateEls = document.querySelectorAll(".date");
console.log(dateEls);
dateEls.forEach(x => x.innerText = getToday());
dateEls[0].setAttribute("style", "color:black;fontsize=16");
showTime()
click = false;

function showTime() {
    dateEls[0].innerText = getTime();

    setTimeout(() => {
        showTime();
        if (!click) {
            lottoClick();
        }
    }, 1000);
}

//dateEls[0].innerHTML = "";
//dateEls[0].remove();

// 取得今天日期
function getTime(fullTime = true) {
    let now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = String(now.getSeconds()).padStart(2, "0");

    if (fullTime) {
        return `${year}/${month}/${date} ${hours}:${minutes}:${seconds}`;
    }

    return `${year}/${month}/${date}`;
}

function getToday() {
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();

    return `${year}/${month}/${date}`;
}
// console.log(today.getFullYear());
// console.log(today.getMonth() + 1);
// console.log(today.getDate());

// 按鈕監聽，需要取元素修改時再使用；直接修改.html裡對應按鈕的動作較簡潔
// const startEl = document.querySelector("#start");
// console.log(startEl);
// startEl.innerText = "開獎";
// startEl.addEventListener("click", lottoClick);

function lottoClick() {
    let lottos = [];
    click = true;
    const lottoEl = document.querySelector(".lotto-number");
    lottoEl.innerHTML = "";

    for (let j = 0; j < 5; j++) {
        let lotto = getLotto(start, end, 6)
        lottos.push(lotto);
    }

    console.log(lottos);

    let htmlText = "<table border=1>";
    for (let i = 0; i < lottos.length; i++) {
        htmlText += "<tr>";
        for (let j = 0; j < lottos[i].length; j++) {
            htmlText += `<td>${lottos[i][j]}</td>`;
        }
        htmlText += "</tr>";
    }
    htmlText += "</table>";

    console.log(htmlText);
    lottoEl.innerHTML = htmlText;

    // for (let i = 0; i < lottos.length; i++) {
    //     lottoEl.innerHTML += `<li style=${i % 2 == 0 ? "color:red" : "color:blue"}>${lottos[i].join(",")}</li>`;
    // }
}

