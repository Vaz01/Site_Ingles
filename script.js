// script.js

// Seleciona o botão do menu hamburguer e o menu mobile
const menuHamburguer = document.querySelector('.menu-hamburguer');
const menuMobile = document.querySelector('.menu-mobile');

// Adiciona um ouvinte de eventos de clique ao botão do menu hamburguer
menuHamburguer.addEventListener('click', () => {
    // Alterna a classe 'aberto' no menu mobile para mostrar/ocultar o menu
    menuMobile.classList.toggle('aberto');
});

// Variáveis para o carrossel de depoimentos
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

// Função para mostrar um slide específico
function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
    });
}

// Função para avançar para o próximo slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Função para voltar para o slide anterior
function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Inicializa o primeiro slide do depoimento quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});