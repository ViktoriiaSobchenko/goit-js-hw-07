import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

const makeGalleryEl = (item) => {
  const { preview, original, description } = item;

  return `<li><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
};
const makeGalleryElRows = galleryItems.map(makeGalleryEl).join(" ");

galleryEl.insertAdjacentHTML("beforeend", makeGalleryElRows);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
