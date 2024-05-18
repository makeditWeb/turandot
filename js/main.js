// navbar dropdown
document.getElementById('news-menu').addEventListener('click', function(event) {
    event.preventDefault(); // 기본 이벤트(링크 이동)를 막습니다.
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
        dropdownContent.style.display = 'none';
    } else {
        dropdownContent.style.display = 'block';
    }
});
