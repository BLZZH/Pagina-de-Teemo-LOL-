$(document).ready(function() {
    $('#btn-habilidades').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#habilidades').offset().top
        }, 800);
        $('#habilidades').removeClass('hidden').fadeIn(800);
    });

    $('#btn-dato-curioso').on('click', function() {
        $('html, body').animate({
            scrollTop: $('#dato-curioso').offset().top
        }, 800);
        mostrarDatoCurioso();
        $('#dato-curioso').removeClass('hidden').fadeIn(800);
    });

    $('.habilidad').on('click', function() {
        var habilidadTexto = $(this).data('habilidad');
        var videoSrc = $(this).data('video');
        
        $('#habilidad-texto').text(habilidadTexto).fadeIn();
        
        var videoHtml = `<video autoplay muted loop><source src="videos/${videoSrc}" type="video/mp4">Tu navegador no soporta el formato de video.</video>`;
        $('#habilidad-video').html(videoHtml).fadeIn();
    });

    function mostrarDatoCurioso() {
        var datoCurioso = "Teemo ha sido uno de los campeones más odiados y queridos al mismo tiempo debido a su estilo de juego y sus habilidades molestas para los enemigos.";
        $('#dato-curioso-texto').text(datoCurioso).fadeIn();
    }
});
