let x = 10;
console.log(Math);
console.log(Math.PI);

x = -7.7;
// 絕對值
console.log(Math.abs(x));   //7.7
// 大於等於最接近的整數值
console.log(Math.ceil(x));  //-7
// 小於等於最接近的整數值
console.log(Math.floor(x)); //-8
// 四捨五入的整數值
console.log(Math.round(x)); //-8
console.log("----------");

// console.log(Math.random(x) * 10);
for (let i = 0; i < 100; i++) {
    // 0~9
    // 1~10 (最後+<起始值位置>)
    // random.randint(0,10)
    // console.log(Math.floor(Math.random() * 10) + 1);
    // 5~20(包含)..*(終止值-起始值+1)
    console.log(Math.floor(Math.random() * (20 - 5 + 1)) + 5);

}
console.log("----------");


let email = "adaipoo@gmail.com";
console.log(email);
console.log(email.length);
console.log(email[0]);
console.log(email[email.length - 1]);

/**
 * Python寫法
 * i=0
 * for i in range(len(email)):
 *      print(email[i])
 *      i+=1
 */
for (let i = 0; i < email.length; i++) {
    document.write(email[i]);
}

console.log("----------");

let y = "20";

console.log(x + Number(y)); //只有+號會以字串串接

console.log(x + y); //1020
console.log(x - y); //-10
console.log(x * y); //200
console.log(x / y); //0.5
console.log("----------");

let count = 0;
for (let i = 0; i < 10; i++) {
    // count=count+1
    // 運算子寫前面為前置運算
    console.log(i, ++count);
}
console.log("----------");

x = 10;
y = "10";

console.log(x == y);
console.log(x === y);
console.log("----------");

x = 10;
// 0,'',NaN,null,undefined --> False
if (x) {
    console.log('yes');
}


/**
 * let/var/const 用法
 * 計算圓面積
 */
//圓周率
const PI = 3.1415926;
let radius = 0;
console.log(radius);
// while (true) {
//     radius = prompt("請輸入半徑:");
//     // != --> not
//     if (!isNaN(radius)) {
//         break;
//     }
// }

let area = radius ** 2 * PI;
console.log(area);
// 區域變數
if (radius >= 10) {
    let radius = "5";
    let area = radius ** 2 * PI;
    console.log(typeof (area));
}

const result = "半徑為" + radius + " 面積為" + area;
// 三種輸出方式
console.log(typeof (result));
document.write("<h3>" + result + "</h3>");
alert(result);