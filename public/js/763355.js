(function() {
  const init = () => {
    const sliders = document.querySelectorAll('.before-after-slider');

    sliders.forEach(slider => {
      const handle = slider.querySelector('.slider-handle');
      const beforeContainer = slider.querySelector('.before-image-container');
      let isDragging = false;

      const updateSlider = (x) => {
        const rect = slider.getBoundingClientRect();
        let position = ((x - rect.left) / rect.width) * 100;
        position = Math.max(0, Math.min(100, position));

        handle.style.left = position + '%';
        beforeContainer.style.clipPath = `inset(0 ${100 - position}% 0 0)`;
      };

      const onMouseDown = (e) => {
        isDragging = true;
        slider.style.cursor = 'ew-resize';
        e.preventDefault();
      };

      const onMouseMove = (e) => {
        if (!isDragging) return;

        const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
        updateSlider(x);
      };

      const onMouseUp = () => {
        isDragging = false;
        slider.style.cursor = 'default';
      };

      // Mouse events
      handle.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      // Touch events
      handle.addEventListener('touchstart', (e) => {
        isDragging = true;
        e.preventDefault();
      });

      document.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].clientX;
        updateSlider(x);
      });

      document.addEventListener('touchend', onMouseUp);

      // Click on slider to move handle
      slider.addEventListener('click', (e) => {
        if (e.target === handle || handle.contains(e.target)) return;
        updateSlider(e.clientX);
      });
    });
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();