const init = function(e) {
    let btn1 = document.querySelector("#btnone");

    btn1.addEventListener('click',function() {
        window.document.location = './display.html';
    });
};


document.addEventListener('DOMContentLoaded', function() {
    init();});

//     const init = function(ee) {
//         let btn2 = document.querySelector("#btntwo");

//         btn2.addEventListener('click',function() {
//             window.document.location = './display2.html';
//         });
//     };
// document.addEventListener('DOMContentLoaded', function() {
//     init();});

