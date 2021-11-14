
// document.body.style.backgroundColor = "red";
// setTimeout(() => {
//     document.body.style.backgroundColor = "Orange";
//     setTimeout(() => {
//         document.body.style.backgroundColor = "Yellow"; setTimeout(() => {
//             document.body.style.backgroundColor = "green"; setTimeout(() => {
//                 document.body.style.backgroundColor = "blue";
//             }, 2000)
//         }, 2000)
//     }, 2000)
// }, 2000)

h1 = document.querySelector("h1");
h1.align = "center";

const delayColorChange = (newColor, delay, doNext) => {
    setTimeout(() => {
        document.body.style.backgroundColor = newColor;
        doNext && doNext();
    }, delay)
}

// delayColorChange('red', 2000);
// delayColorChange('orange', 4000);
// delayColorChange('yellow', 6000);
// delayColorChange('olive', 8000);
// delayColorChange('green', 10000);
// delayColorChange('blue', 12000);

delayColorChange('red', 2000, () => {
    delayColorChange("orange", 2000, () => {
        delayColorChange("yellow", 2000, () => {
            delayColorChange("olive", 2000, () => {
                delayColorChange("green", 2000, () => {
                    delayColorChange("blue", 2000, () => {

                    })
                })
            })
        })
    })
});