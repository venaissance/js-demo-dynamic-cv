let demo = document.querySelector("#demo");
let string = `今天，我陪我最爱的小宝贝来考试。`;
let n = 0;

demo.innerHTML = string.substring(0, n);

let step = () => {
  setTimeout(() => {
    n += 1;
    demo.innerHTML = string.substring(0, n);
    if (n < string.length) {
      step();
    }
  }, 200);
};

step();
