// 스크롤 시 버튼 표시
window.onscroll = function() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

// 맨 위로 가기 버튼 클릭 시 스크롤
document.getElementById('scrollTopBtn').addEventListener('click', function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
});