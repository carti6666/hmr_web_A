const interactiveElement = document.querySelector('.interactive-element');
const outputDiv = document.querySelector('.output');

function handleInteraction(type) {
    outputDiv.textContent = `${type} 이벤트 발생!`;
}

interactiveElement.addEventListener('click', () => {
    handleInteraction('클릭');
});

interactiveElement.addEventListener('mouseover', () => {
    // 모바일 환경이 아닐 때만 호버 기능 실행
    if (window.innerWidth > 768) {
        handleInteraction('호버');
    }
});

// 모바일 환경에서 터치 시작 시 호버 효과를 클릭처럼 처리
interactiveElement.addEventListener('touchstart', (event) => {
    // preventDefault()를 호출하여 터치로 인한 기본 호버 효과 방지 (선택 사항)
    // event.preventDefault();
    handleInteraction('터치 (클릭 대체)');
});