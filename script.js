const cards = document.querySelectorAll('.glass-card');
const heartButton = document.querySelector('.heart-button');
const heartsContainer = document.getElementById('hearts');

let currentCard = 0;
cards[currentCard].classList.add('fadeIn'); // Show the first card initially

heartButton.addEventListener('click', () => {
  cards[currentCard].classList.add('fadeOut');
  setTimeout(() => {
    cards[currentCard].classList.remove('fadeOut');
    cards[currentCard].style.display = 'none';
    currentCard = (currentCard + 1) % cards.length;
    cards[currentCard].classList.add('fadeIn');
    createHeartPopup();
  }, 500);
});

function createHeartPopup() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.top = `${Math.random() * 100}%`;
  heartsContainer.appendChild(heart);
  setTimeout(() => heart.remove(), 1000); // Remove after animation
}
