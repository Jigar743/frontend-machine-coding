const modalController = document.querySelector(".modal__container");
const closeIconBtn = document.querySelector(".fa-times");
const cancelBtn = document.querySelector(".modal__cancel--btn");
const rootDiv = document.querySelector(".root__div");

const makeModalClose = () => {
  modalController.style.display = "none";
  rootDiv.style.backgroundColor = "white";
};

const makeModalOpen = () => {
  modalController.style.display = "flex";
  rootDiv.style.backgroundColor = "#aaaaaa";
};

const btnController = document.querySelector(".open__modal--btn");

btnController.addEventListener("click", (e) => {
  makeModalOpen();
});

closeIconBtn.addEventListener("click", () => {
  makeModalClose();
});

cancelBtn.addEventListener("click", () => {
  makeModalClose();
});

rootDiv.addEventListener("click", (e) => {
  if (e.target.className === "root__div") {
    makeModalClose();
  }
});

class ModalController extends HTMLElement {
  constructor() {
    super();
    console.log("up i got called!");
    this.innerHTML = `
      <div>
        Jigar Modi
      </div>
    `;
  }

  connectedCallback() {
    console.log("connected!", this);
  }

  disconnectedCallback() {
    console.log("disconnected", this);
  }
}

if ("customElements" in window) {
  customElements.define("modal-controller", ModalController);
}
