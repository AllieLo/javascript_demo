let start = 1;
let end = 49;

// 宣告外圍迴圈-->二維陣列
let lotterys = [];
document.write("<h2>大樂透號碼</h2>");
for (let j = 0; j < 5; j++) {
    lottery = getLottery(start, end, 6)
    lotterys.push(lottery);
    document.write(`<li style="color:blue">${lottery.join(",")}</li>`);
}

console.log(lotterys);

// 函式宣告
function getLottery(start, end, count) {
    let lottery = [];
    for (let i = 0; i < count; i++) {
        number = Math.floor(Math.random() * (end - start + 1) + start);
        lottery.push(number);
    }
    return lottery;
}