document.getElementById('pdf-btn').addEventListener('click', function() {
    // Create a temporary link to download the existing PDF file
    const link = document.createElement('a');
    link.href = 'pdf/CV-hoja-de-vida-danny-vivas (1).pdf';
    link.download = 'Hoja_de_Vida_Danny_Vivas.pdf';
    link.style.display = 'none';

    // Add to DOM, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

document.getElementById('print-btn').addEventListener('click', function() {
    window.print();
});

document.getElementById('website-btn').addEventListener('click', function() {
    // Redirect to portfolio website
    window.open('https://portfolio-danny-vivas.netlify.app/', '_blank');
});