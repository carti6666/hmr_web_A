document.addEventListener('DOMContentLoaded', () => {
    const coverContainers = document.querySelectorAll('.cover-container');

    coverContainers.forEach(container => {
        const thumbnail = container.querySelector('.thumbnail');
        const originalImage = container.querySelector('.original-image');
        let isMobile = window.matchMedia('(max-width: 480px)').matches; // 예시: 480px 이하를 모바일로 간주

        if (isMobile) {
            // 모바일 환경: 클릭 이벤트 리스너 추가
            thumbnail.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent potential link navigation
                container.classList.toggle('active'); // 'active' 클래스를 토글하여 보이기/숨기기

                // 클릭된 이미지 외의 다른 이미지는 숨김
                coverContainers.forEach(otherContainer => {
                    if (otherContainer !== container) {
                        otherContainer.classList.remove('active');
                    }
                });

                // 클릭 이벤트가 document까지 전파되는 것을 막음
                event.stopPropagation();
            });
        }
    });

    // 모바일 환경에서 document 클릭 시 열린 이미지 숨김
    const isMobileCheck = window.matchMedia('(max-width: 480px)').matches;
    if (isMobileCheck) {
        document.addEventListener('click', (event) => {
            coverContainers.forEach(container => {
                if (!container.contains(event.target)) {
                    container.classList.remove('active');
                }
            });
        });
    }

    //func-data-href//
    document.querySelectorAll(".data-href, .data-href-outlink").forEach((element) => {
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

    //board-gallery//
    const galleryContainer = document.querySelector(".profile-container"); //변경된 클래스 이름
    const mainImageViewer = document.getElementById("profile-img-viewer"); //변경된 ID
    const mainImage = mainImageViewer ? mainImageViewer.querySelector("img") : null; //area-img-viewer 안의 img 태그 선택
    const originalSrc = mainImage ? mainImage.src : '';
    const originalAlt = mainImage ? mainImage.alt : '';

    function swapImage(newSrc, newAlt) {
        if (mainImage) {
            mainImage.src = newSrc;
            mainImage.alt = newAlt;
        }
    }

    function resetImage() {
        if (mainImage) {
            mainImage.src = originalSrc;
            mainImage.alt = originalAlt;
        }
    }

    //언더라인 //
    const shadowElements = document.querySelectorAll(".shadow-underline-pseudo");
    shadowElements.forEach((element) => {
        element.dataset.text = element.textContent;
    });

    //numbering-padding-call/
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

    const textSwapContainer = document.querySelector('.text-swap-container');
    const englishText = document.querySelector('.english-text');
    const koreanText = document.querySelector('.korean-text');

    if (textSwapContainer) {
        let isMobileTextSwap = window.matchMedia('(max-width: 480px)').matches;

        if (isMobileTextSwap) {
            textSwapContainer.addEventListener('click', () => {
                textSwapContainer.style.minHeight = koreanText.offsetHeight + 'px';
                englishText.style.display = englishText.style.display === 'none' ? 'block' : 'none';
                koreanText.style.display = koreanText.style.display === 'none' ? 'block' : 'none';
            });
        } else {
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
        }
    }
});