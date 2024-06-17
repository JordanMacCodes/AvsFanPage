 document.addEventListener('DOMContentLoaded', function() {
    const collage = document.getElementById('collage');
    const players = [
        'Nathan MacKinnon', 'Gabriel Landeskog', 'Mikko Rantanen', 'Cale Makar', 'Nazem Kadri',
        'Andre Burakovsky', 'Samuel Girard', 'Philipp Grubauer', 'Devon Toews', 'Ryan Graves'
    ];

    players.forEach(player => {
        const img = document.createElement('img');
        img.src = `https://via.placeholder.com/100?text=${encodeURIComponent(player)}`;
        img.alt = player;
        collage.appendChild(img);
    });

    document.getElementById('inquiryForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Thank you for your inquiry!');
        this.reset();
    });
});
