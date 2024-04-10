document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('containor');
    const context = canvas.getContext('2d');
    const button = document.getElementById('click');

    // Calculate the total area of the canvas
    const canvasArea = canvas.width * canvas.height;

    let circlesDrawn = 0;

    button.addEventListener('click', function() {
        if (circlesDrawn >= 0.9 * canvasArea) {
            console.log("Canvas is 80% filled. Cannot draw more circles.");
            return; // Stop drawing circles if canvas is 80% filled
        }
        generateCircle(context);
        circlesDrawn += Math.PI * Math.pow(20, 2); // Increase the count of drawn circles' area
    });

    function generateCircle(context) {
        // Set a random color for the circle
        const randomColor = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);
        context.fillStyle = randomColor;
        context.strokeStyle = randomColor; // Set the stroke color to the same as the fill color

        // Get the dimensions of the canvas
        const canvasWidth = context.canvas.width;
        const canvasHeight = context.canvas.height;

        // Set the same fixed size for the circle
        const x = Math.floor(Math.random() * canvasWidth); // Random x coordinate within canvas width
        const y = Math.floor(Math.random() * canvasHeight); // Random y coordinate within canvas height
        const radius = 20; // Fixed radius for the circle

        // Draw the filled circle
        context.beginPath();
        context.arc(x, y, radius, 0, 2 * Math.PI);
        context.fill();
    }
});

