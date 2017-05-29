'use strict';
const $ = (elName) => {
    let ele = document.querySelectorAll(elName);
    if (ele.length === 1) {
        ele = document.querySelector(elName);
    }
    return ele;
};
