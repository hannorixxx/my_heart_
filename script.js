window.onload = function() {
    const heart = document.getElementById('heart');
    heart.style.transform = `rotate(${Math.random() * 360}deg)`; // случайное вращение сердца
}

function beatHeart() {
    const heart = document.getElementById('heart');
    heart.style.transform = 'scale(0.9) rotate(-45deg)'; // Уменьшаем размер
    setTimeout(() => {
        heart.style.transform = 'scale(1) rotate(-45deg)'; // Возвращаем к обычному размеру
    }, 200); // Время пульсации
}