import { ArgumentsPrintHtml } from "./types/arguments-print-html";

export function printHtml({
  selectorName = "",
  printStyle = "",
}: ArgumentsPrintHtml) {
  let htmlElement: null | HTMLElement = null;

  if (selectorName[0] === "#") {
    htmlElement = document.getElementById(selectorName);
  } else if (selectorName[0] === ".") {
    htmlElement = document.querySelector(selectorName);
  }

  if (!htmlElement) {
    throw new Error("Элемент не найден");
  }

  const winPrint = window.open(
    "",
    "",
    `left=0,top=0,width=${window.innerWidth},height=${window.innerHeight},toolbar=0,scrollbars=0,status=0`
  );

  if (!winPrint) {
    return;
  }
  winPrint.document.write(`<!DOCTYPE html>
    <html>
      <head>
        <style>
        ${String(printStyle)}
        </style>
      </head>
      <body>
        ${htmlElement.innerHTML}
      </body>
    </html>`);

  const images = winPrint.document.getElementsByTagName("img");
  winPrint.document.close();
  winPrint.focus();
  if (images.length > 0) {
    printHasImage(winPrint, images);
  } else {
    winPrint.print();
    winPrint.close();
  }
}

function printHasImage(
  winPrint: Window,
  images: HTMLCollectionOf<HTMLImageElement>
) {
  let loadedImages = 0;
  function handleImageLoadError() {
    loadedImages++;
    if (loadedImages === images.length) {
      winPrint.print();
      winPrint.close();
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].onload = handleImageLoadError;
    images[i].onerror = handleImageLoadError;
  }
}
