let html = document.querySelector("#html");
let style = document.querySelector("#style");

let string = `/* 你好，我叫米大王
 * 接下来我要展示一下真正的前端技术了
 * 首先要准备一个div
 **/
#div1 {
    border: 1px solid red;
    width: 200px;
    height: 200px
}
/* 接下来我会把 div 化为太极八卦
 * 注意看好了
 * 首先，把 div 变成一个圆
**/
#div1 {
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
    border: none;
}
/* 八卦始于阴阳
 * 一黑一白
 **/
#div1 {
    background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 太极生两仪，
 * 两仪生四象，
 * 四象生八卦
 **/
#div1::before {
    width: 100px;
    height: 100px;
    top:0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after {
    width: 100px;
    height: 100px;
    bottom:0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
/* 长吁一口气，打完收工
 **/
`;
let string2 = "";

let n = -1;

let step = () => {
  setTimeout(() => {
    n += 1;
    if (string[n] === "\n") {
      string2 += "<br>"; // 换行的HTML表示
    } else if (string[n] === " ") {
      string2 += "&nbsp"; // 空格的HTML表示
    } else {
      string2 += string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n); // 发挥CSS的功效
    window.scrollTo(0, 99999); // 每刷新一次，滚动到屏幕最底部
    html.scrollTo(0, 99999); // 手机页面上下布局时，使overflow为auto的div1能滚到最下面
    if (n + 1 < string.length) {
      step();
    }
  }, 50);
};

step();
