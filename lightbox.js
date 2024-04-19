document.addEventListener('DOMContentLoaded', function() {
    const profilePicture = document.querySelector('.profile-picture img');

    // Dodajemo event listener za klik na sliku
    profilePicture.addEventListener('click', function() {
        // Otvaramo veću verziju slike u novom prozoru
        window.open(profilePicture.src, '_blank');
    });
});
