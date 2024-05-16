
function showModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function hideModal(modalId) {
    var modal = document.getElementById(modalId);
    modal.style.display = "none";
}

document.getElementById("openModalBtn1").addEventListener("click", function() {
    showModal("myModal1");
});

document.getElementById("openModalBtn2").addEventListener("click", function() {
    showModal("myModal2");
});

document.getElementById("openModalBtn3").addEventListener("click", function() {
    showModal("myModal3");
});

document.getElementById("openModalBtn4").addEventListener("click", function() {
    showModal("myModal4");
});

document.getElementById("openModalBtn5").addEventListener("click", function() {
    showModal("myModal5");
});

var closeButtons = document.getElementsByClassName("close");
for (var i = 0; i < closeButtons.length; i++) {
    closeButtons[i].addEventListener("click", function() {
        var modalId = this.parentNode.parentNode.id;
        hideModal(modalId);
    });
}

window.addEventListener("click", function(event) {
    var modals = document.getElementsByClassName("modal");
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            hideModal(modals[i].id);
        }
    }
});