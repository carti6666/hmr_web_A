document.addEventListener('DOMContentLoaded', () => {
    const coverContainers = document.querySelectorAll('.cover-container');
    const profileContainer = document.querySelector(".profile-container");
    const mainImageViewer = document.getElementById("profile-img-viewer");
    const mainImage = mainImageViewer ? mainImageViewer.querySelector("img") : null;
    const originalSrc = mainImage ? mainImage.src : '';
    const originalAlt = mainImage ? mainImage.alt : '';
    const textSwapContainer = document.querySelector('.text-swap-container');
    const englishText = document.querySelector('.english-text');
    const koreanText = document.querySelector('.korean-text');

    const isMobile = () => window.matchMedia('(max-width: 480px)').matches;

    // 이미지 Hover -> Click 전환
    coverContainers.forEach(container => {
        const thumbnail = container.querySelector('.thumbnail');

        if (isMobile()) {
            thumbnail.addEventListener('click', (event) => {
                event.preventDefault();
                container.classList.toggle('active');

                coverContainers.forEach(otherContainer => {
                    if (otherContainer !== container) {
                        otherContainer.classList.remove('active');
                    }
                });
                event.stopPropagation();
            });
        }
    });

    if (isMobile()) {
        document.addEventListener('click', (event) => {
            coverContainers.forEach(container => {
                if (!container.contains(event.target)) {
                    container.classList.remove('active');
                }
            });
        });
    }

    // 갤러리 이미지 Hover -> Click 전환
    const profileThumbnails = document.querySelectorAll('.profile-thumbnail');
    profileThumbnails.forEach(thumbnail => {
        const newSrc = thumbnail.querySelector('img').src.replace('-small', '');
        const newAlt = thumbnail.querySelector('img').alt.replace('-small', '');

        if (isMobile() && mainImage) {
            thumbnail.addEventListener('click', () => {
                swapImage(newSrc, newAlt);
            });
        } else {
            thumbnail.addEventListener('mouseover', () => {
                swapImage(newSrc, newAlt);
            });
            if (profileContainer) {
                profileContainer.addEventListener('mouseleave', resetImage);
            }
        }
    });

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

    // 텍스트 Swap Hover -> Click 전환
    if (textSwapContainer && englishText && koreanText) {
        if (isMobile()) {
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

    // func-data-href (클릭 이벤트는 그대로 유지)
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

    // 언더라인 (CSS로 처리되므로 JavaScript 변경 없음)
    const shadowElements = document.querySelectorAll(".shadow-underline-pseudo");
    shadowElements.forEach((element) => {
        element.dataset.text = element.textContent;
    });

    // numbering-padding-call (DOM 로드 후 실행되므로 유지)
    const aSpan = document.getElementById("span-numbering");
    const bSpan = document.getElementById("number-padding");

    if (aSpan && bSpan) {
        const aSpanWidth = aSpan.offsetWidth;
        bSpan.style.paddingLeft = `${aSpanWidth}px`;
    }
});