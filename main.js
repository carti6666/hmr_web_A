    //times-ago-call//
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

    //func-go-back//
    document.addEventListener("DOMContentLoaded", () => {
    const goBackDivs = document.querySelectorAll(".go-back");

    goBackDivs.forEach((div) => {
        div.addEventListener("click", () => {
        window.history.back();
        });
    });
    });

    //이미지 후버 temp//

    //func-data-href//
    document.addEventListener("DOMContentLoaded", () => {
    document
        .querySelectorAll(".data-href, .data-href-outlink")
        .forEach((element) => {
        element.style.cursor = "pointer";
        const hrefValue = element.getAttribute("href");

        if (hrefValue) {
            element.dataset.href = hrefValue;
            element.addEventListener("click", (event) => {
            event.preventDefault();
            if (element.classList.contains("data-href-outlink")) {
                window.open(element.dataset.href, "_blank");
            } else {
                window.location.href = element.dataset.href;
            }
            });
            element.removeAttribute("href");
        }
        });
    });

    //board-gallery//
    const galleryContainer = document.querySelector(".profile-container"); //변경된 클래스 이름
    const mainImageViewer = document.getElementById("profile-img-viewer"); //변경된 ID
    const mainImage = mainImageViewer.querySelector("img"); //area-img-viewer 안의 img 태그 선택
    const originalSrc = mainImage.src;
    const originalAlt = mainImage.alt;

    function swapImage(newSrc, newAlt) {
    mainImage.src = newSrc;
    mainImage.alt = newAlt;
    }

    function resetImage() {
    mainImage.src = originalSrc;
    mainImage.alt = originalAlt;
    }

    //언더라인 //
    const shadowElements = document.querySelectorAll(".shadow-underline-pseudo");
    shadowElements.forEach((element) => {
    element.dataset.text = element.textContent;
    });

    //numbering-padding-call/
    document.addEventListener("DOMContentLoaded", () => {
    const aSpan = document.getElementById("span-numbering");
    const bSpan = document.getElementById("number-padding");

    if (aSpan && bSpan) {
        const aSpanWidth = aSpan.offsetWidth;
        bSpan.style.paddingLeft = `${aSpanWidth}px`;
        console.log(`A Span Width: ${aSpanWidth}px`);
        console.log(`B Span Padding-Left: ${bSpan.style.paddingLeft}`);
    } else {
        console.error("A Span 또는 B Span 요소를 찾을 수 없습니다.");
    }
    });


    const textSwapContainer = document.querySelector('.text-swap-container');
const englishText = document.querySelector('.english-text');
const koreanText = document.querySelector('.korean-text');

textSwapContainer.addEventListener('mouseenter', () => {
    textSwapContainer.style.minHeight = koreanText.offsetHeight + 'px';
    englishText.style.display = 'none';
    koreanText.style.display = 'block';
});

textSwapContainer.addEventListener('mouseleave', () => {
    textSwapContainer.style.minHeight = englishText.offsetHeight + 'px';
    englishText.style.display = 'block';
    koreanText.style.display = 'none';
});