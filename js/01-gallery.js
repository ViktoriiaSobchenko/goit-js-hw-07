import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");

const makeGalleryEl = (item) => {
  const { preview, original, description } = item;

  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};
const makeGalleryElRows = galleryItems.map(makeGalleryEl).join(" ");

gallery.insertAdjacentHTML("beforeend", makeGalleryElRows);

gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onEscKeyPress);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onEscKeyPress);
      },
    }
  );
  function onEscKeyPress(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }

  instance.show();
}
