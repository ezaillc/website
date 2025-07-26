// modal.js

// This function registers modal logic after the modal HTML is inserted.
function registerContactModal() {
  // Make toggleModal globally accessible for inline onclick usage
  window.toggleModal = function () {
    const modal = document.getElementById('contactModal');
    if (modal) modal.classList.toggle('hidden');
  };

  // Enable all <a href="#contact-form"> links to open the modal
  document.querySelectorAll('a[href="#contact-form"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      window.toggleModal();
    });
  });
}

// Attach a MutationObserver to #modal-placeholder to initialize modal logic after injection
(function () {
  const modalPlaceholder = document.getElementById('modal-placeholder');
  if (!modalPlaceholder) return;
  const observer = new MutationObserver(() => {
    registerContactModal();
  });
  observer.observe(modalPlaceholder, { childList: true });
})();
