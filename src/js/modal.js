'use strict';
const $answerSelectClickTarget = document.querySelectorAll('.js-answer-select li a');

Array.prototype.forEach.call($answerSelectClickTarget, (targetList) => {
    targetList.addEventListener('click', (e) => {
        e.preventDefault();
        let modal = document.createElement('div');
        modal.id = 'quiz_answer-contents';
        modal.onclick = function () {
            this.remove();
        };
        modal.innerHTML = document.querySelector('.js-modal').innerHTML;
        document.querySelector('main').appendChild(modal);
    });
});
