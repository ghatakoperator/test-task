function showCustomMenu(event) {
    const selectedText = window.getSelection().toString().trim();
    const customMenu = document.getElementById('custom-menu');

    if (selectedText !== '') {
      customMenu.style.top = `${event.clientY}px`;
      customMenu.style.left = `${event.clientX}px`;
      customMenu.style.display = 'block';
    } else {
      customMenu.style.display = 'none';
    }
  }

  function shareOnTwitter() {
    const selectedText = window.getSelection().toString().trim();
    const tweetURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(selectedText)}`;

    window.open(tweetURL, '_blank');
  }