document.addEventListener('DOMContentLoaded', function() {
    const shareContainer = document.querySelector('.share-container');
    const shareToggle = document.querySelector('.share-toggle');
    const footer = document.querySelector('.footer');
    const isMobile = window.matchMedia('(max-width: 768px)').matches;

    shareContainer.addEventListener('click', function(e) {
        e.stopPropagation();
        
        if (isMobile) {
            // Mobile behavior - toggle footer state
            footer.classList.toggle('active');
        } else {
            // Desktop behavior - toggle popup
            shareToggle.classList.toggle('active');
            shareContainer.classList.toggle('active');
        }
    });

    // Close functionality for desktop
    if (!isMobile) {
        document.addEventListener('click', function closePopup(e) {
            if (!shareContainer.contains(e.target) && !shareToggle.contains(e.target)) {
                shareToggle.classList.remove('active');
                shareContainer.classList.remove('active');
                document.removeEventListener('click', closePopup);
            }
        });
    }

    // Prevent footer clicks from closing on mobile
    footer.addEventListener('click', function(e) {
        if (isMobile) {
            e.stopPropagation();
        }
    });

    // Close mobile share when clicking outside
    if (isMobile) {
        document.addEventListener('click', function() {
            footer.classList.remove('active');
        });
    }
});