let start = 1;
let end = 49;
let lottos = [];

// (3)Lamda函式表達式=>(把函式當變數使用,需宣告成功才能使用)
const getRandNumber = (start, end) => Math.floor(Math.random() * (end - start + 1)) + start;

// (1)宣告外圍迴圈-->二維陣列
//(樂透關)document.write("<h2>大樂透號碼</h2>");
for (let j = 0; j < 5; j++) {
    let lotto = getLotto(start, end, 6)
    lottos.push(lotto);
    //document.write(`<li style="color:blue">${lotto.join(",")}</li>`); (見說明A)
}

// if & else三元運算子
let a = 10;
let b = 20;
let c = 0;
// if (a > b) {
//     c = a + b;
// } else {
//     c = a - b;
// }
// console.log(c);

//[PY] C=a+b if a>b else a-b
//判斷式 ? 為真時的運算 : 為假時的運算
c = a > b ? a + b : a - b;

console.log(c);

// 類似for i in range()的寫法
// for (let i=0;i<lottos.length;i++){
//     document.write(`<li style="color:blue">${lottos[i].join(",")}</li>`);
// }

for (let i = 0; i < lottos.length; i++) {
    //(樂透關)document.write(`<li style=${i % 2 == 0 ? "color:red" : "color:blue"}>${lottos[i].join(",")}</li>`);
    //(樂透關)document.write("<hr>");

    // if (i%2==0){
    //     document.write(`<li style="color:red">${lottos[i].join(",")}</li>`);
    // }else{
    //     document.write(`<li style="color:blue">${lottos[i].join(",")}</li>`);
    // }
}

//(說明A)利用容器或陣列(lottos)本身的forEach取得替代參數(x,任意定義)
//lottos.forEach(x => document.write(`<li style="color:blue">${x.join(",")}</li>`));

console.log(lottos);

/**
 * 1.不重複
 * 2.排序(升序) 倆倆比對 a-b>0 即互換位置
 */

// (2)函式宣告
function getLotto(start, end, count) {
    let lotto = [];
    for (let i = 0; i < count;) {  //最後的步進值i++可以移到函式內部
        number = getRandNumber(start, end);
        if (!lotto.includes(number)) {
            lotto.push(number);
            i++;
        }
    }
    lotto.sort((a, b) => a - b); //升序
    //lotto.sort((a, b) => b - a); //降序
    return lotto;
}

//單數物件用法
let user = {
    name: 'jerry',
    email: 'jerry@gmail.com',
    password: '12345678',
}

console.log(user);
console.log(user.name);
console.log(user.email);
console.log(user["name"]);

//複數物件用法
let users = [
    {
        name: 'jerry',
        email: 'jerry@gmail.com',
        password: '12345678',
    },
    {
        name: 'mary',
        email: 'mary@gmail.com',
        password: 'mary1234',
    },
    {
        name: 'kevin',
        email: 'kevin@gmail.com',
        password: 'kevin123',
    }
]

//(樂透關)console.log(users);
//(樂透關)console.log(users[0]);

//使用for迴圈取值、姓名、email輸出document
//(樂透關)for (let i = 0; i < users.length; i++) {
//(樂透關)    document.write(`${users[i].name}<br>${users[i].email}<br>`);
//(樂透關)}

//使用forEach取值、姓名、email輸出document
//(樂透關)users.forEach(user => document.write(`${user.name}<br>${user.email}<br>`));