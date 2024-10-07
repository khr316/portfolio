// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Get the button
let scrollTopBtn = document.getElementById("scrollTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction(); };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document smoothly
scrollTopBtn.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 부드럽게 스크롤
    });
});


// 다크 모드 토글 기능
const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    toggleButton.innerText = document.body.classList.contains('dark') ? '라이트 모드' : '다크 모드';
});

// 애니메이션 효과
const sections = document.querySelectorAll('section');

const options = {
    root: null,
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});

// 연락 양식 전송 이벤트
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`이름: ${name}\n이메일: ${email}\n메시지: ${message}`);
    contactForm.reset();
});