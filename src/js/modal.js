(function () {
    'use strict';
    const $answerSelectClickTarget = $('.js-answer-select li a');

    Array.prototype.forEach.call($answerSelectClickTarget, (targetList) => {
        targetList.addEventListener('click', (e) => {
            e.preventDefault();
            let modal = document.createElement('div');
            modal.id = 'quiz_answer-contents';
            modal.onclick = function () {
                this.remove();
            };
            modal.innerHTML = $('.js-modal').innerHTML;
            $('main').appendChild(modal);
        });
    });
})();
