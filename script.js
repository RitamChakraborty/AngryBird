// const bird = document.querySelector(".red");
// let i = 0;
// let flag = true;
// const frames = 2;
// const range = 40;
//
// function motion(x) {
//     return ((Math.tan(0.785) * x) - (9.8 * x ** 2 / (500 * Math.sqrt(Math.cos(0.785)))));
// }
//
// setInterval(() => {
//     const x = `${i * 2}%`;
//     const y = `-${motion(i) * 5}%`;
//
//     console.log(`x : ${x}; y : ${y}`);
//
//     bird.style.left = x;
//     bird.style.top = y;
//
//     if (i > range) {
//         flag = false;
//     }
//     if (i < 0) {
//         flag = true;
//     }
//
//     if (flag) {
//         i += 0.1;
//     } else {
//         i -= 0.1;
//     }
// }, frames);