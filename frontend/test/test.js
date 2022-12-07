for (let i = 0; i < 100; i ++) {
    //const d = new Date();
    let time = new Date().getTime();
    console.log((time + "" + Math.floor(Math.random() * 1000) + 1 - 1).toString(16))
    sleep(1);
}
console.log(9 >= 9)
function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }