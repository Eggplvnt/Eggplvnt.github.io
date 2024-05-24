
document.addEventListener('DOMContentLoaded', function () {
    var modals = document.querySelectorAll('.modal');
    var openModalBtns = document.querySelectorAll('[id^=openModalBtn]');
    var closeModalBtns = document.querySelectorAll('.close');

    openModalBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            var modalId = this.id.replace('openModalBtn', 'myModal');
            var modal = document.getElementById(modalId);
            modal.style.display = 'flex';
        });
    });

    closeModalBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            this.closest('.modal').style.display = 'none';
        });
    });

    window.addEventListener('click', function (event) {
        modals.forEach(function (modal) {
            if (event.target == modal) {
                modal.style.display = 'none';
            }
        });
    });
});