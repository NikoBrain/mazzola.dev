// Auto-size each .orbit-container to fit its largest orbital element.
// Reads --size from all child elements with inline styles, then sets the
// container height to the largest value found.
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.orbit-container').forEach(container => {
    let maxSize = 0;
    container.querySelectorAll('[style]').forEach(el => {
      const val = parseFloat(el.style.getPropertyValue('--size'));
      if (!isNaN(val) && val > maxSize) maxSize = val;
    });
    if (maxSize > 0) {
      container.style.height = maxSize + 'px';
    }
  });
});
