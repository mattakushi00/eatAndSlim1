const imgList = [...document.querySelectorAll('.main img')]
imgList.forEach(img => img.height > 0 ? img.style.minHeight = `${img.height}px` : undefined)