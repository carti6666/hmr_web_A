/** class time 에 대한 기입날짜 계산 */

function timeAgoInDays(timestamp) {
    const now = new Date();
    const past = new Date(timestamp);
    const diffInSeconds = Math.floor((past - now) / 1000);
    const diffInDays = Math.floor(diffInSeconds / (60 * 60 * 24));
    const absDiffInDays = Math.abs(diffInDays);

    if (diffInSeconds < 0) {
        return `${absDiffInDays} days ago`;
    } else if (diffInDays === 0) {
        return `today`;
    } else {
        return `${diffInDays} days left`;
    }
}

function updateTimeAgo() {
    const timeAgoElements = document.querySelectorAll(".time");
    timeAgoElements.forEach((element) => {
        const timestamp = element.dataset.timestamp;
        if (timestamp) {
            element.textContent = timeAgoInDays(timestamp);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    updateTimeAgo();
    setInterval(updateTimeAgo, 60000);
});

/** 뒤로가기 기능   <button onclick="goBack()">뒤로 가기</button> */
function goBack() {
    window.history.back();
}

/** 이미지 후버 temp */

/** href temp */
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.data-href').forEach(element => {
    element.style.cursor = 'pointer';

    const hrefValue = element.getAttribute('href');
    if (hrefValue) {
        element.dataset.href = hrefValue;
        element.addEventListener('click', () => {
        window.open(element.dataset.href, '_blank');
        });
        element.removeAttribute('href');
    }
    });
});
