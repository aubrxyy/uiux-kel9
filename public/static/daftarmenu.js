//modal box
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
        itemDetailModal.style.display = "flex";
        e.preventDefault();
    };
});

// klik tombol close
document.querySelector(".modal .close-icon").onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
    if (e.target == itemDetailModal) {
        itemDetailModal.style.display = "none";
    }
};