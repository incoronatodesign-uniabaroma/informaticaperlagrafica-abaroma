// JavaScript Ottimizzato per navigazione e funzionalità (main.js)

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const iframe = document.querySelector('#contentIFrame');

    // Array delle URL delle pagine per navigazione
    const pages = [
        "publication-1.html",
        "publication-2.html",
        "publication-3.html",
        "publication-4.html",
        "publication-5.html",
        "publication-6.html",
        "publication-7.html",
        "publication-8.html",
        "publication-9.html"
    ];

    let currentPageIndex = 0;

    // Funzione per aggiornare il contenuto dell'iframe
    function updateIframe(index) {
        if (index >= 0 && index < pages.length) {
            iframe.src = `publication-web-resources/html/${pages[index]}`;
        }
    }

    // Gestione click pulsanti
    prevButton.addEventListener('click', function () {
        if (currentPageIndex > 0) {
            currentPageIndex--;
            updateIframe(currentPageIndex);
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentPageIndex < pages.length - 1) {
            currentPageIndex++;
            updateIframe(currentPageIndex);
        }
    });

    // Inizializzazione
    updateIframe(currentPageIndex);

    // Mostra/nascondi frecce
    function toggleArrows() {
        prevButton.style.display = currentPageIndex === 0 ? 'none' : 'block';
        nextButton.style.display = currentPageIndex === pages.length - 1 ? 'none' : 'block';
    }

    iframe.addEventListener('load', toggleArrows);
    toggleArrows();
});
