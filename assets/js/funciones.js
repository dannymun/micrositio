function menuDesktop() {
    jQuery(".nav2").css("display", "inline-block");
}

function menuMobile() {
    //jQuery(".nav2").slideUp(0)
    jQuery(".pin-wrapper").css("height", "70px");
}

//--------------Inicio del documento
jQuery(document).ready(function($) {

    $(window).resize(function() {
        if ($(window).width() <= 1125) {
            menuMobile()
        } else {
            menuDesktop()
        }
    });

    $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top + 100;
                return false;
            }
        }
    });

    $('#edit-info-legal').click(function() {
        $('.ui.modal').modal('show');
    });

    $('#honda-contacto-form .form-select').removeClass('selectUsadas');

    $('.form-item-info-legal').addClass('ui checkbox');

    $('.info img').addClass('img_noticias');


    $(".date_day").each(function(index) {
        var val = $(this).text();
        length_val = val.length;

        if (length_val == 1) {
            $(this).text('0' + val);
        }
    });

    $(".date_month").each(function(index) {
        var val = $(this).text();
        length_val = val.length;

        if (length_val == 1) {
            $(this).text('0' + val);
        }
    });


    //Llamado para que funcione el Placeholder desde Ie8
    $.Placeholder.init();

    //ir al top

    $(".goToTop").hide();
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $(".goToTop").slideDown(200);
            } else {
                $(".goToTop").slideUp(200);

            }
        });

        // scroll body to 0px on click
        $('.goToTop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    //cotizar3 producto2
    /*---------------------------------*/
    $(".btCotizar3").hide();
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 400) {
                $(".btCotizar3").show(200);
            } else {
                $(".btCotizar3").hide(200);

            }
        });

        // scroll body to 0px on click
        $('.goToTop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });
    /*---------------------------------*/

    //Funciones NavegaciÃ³n-------------------------
    //lupa
    $('.icon-lupa').click(function() {
        if ($(".buscarHeader").css("display") == "none") {
            $('.seccionMegamenu').hide(0);
            $('.nav2 a').removeClass("select");
            $(".buscarHeader").slideDown(200);
            $('.overlay').fadeIn(200);
            $(".sesion").slideUp(0);
        } else {
            $(".buscarHeader").slideUp(200);
            $('.seccionMegamenu').slideUp(200);
            $(".nav2 a").removeClass("select");
            $('.overlay').fadeOut(200);
            $('.sesion').slideUp(200);
            $(".buscarHeader").slideUp(200);
        }


    });
    //btMenuMobile
    $('.btMobile').click(function() {
        if ($(".nav2").css("display") == "none") {
            $(".nav2").slideDown(200);
            $(this).addClass("cerrar");
        } else {
            $(".nav2").slideUp(200);
            $(this).removeClass("cerrar");
        }
    });
    //over item submenu megamenu

    //over item submenu megamenu
    $(".categoriaMotosLi, .contenidoMotosli, .contenidoMotos li").mouseover(function() {
        $(this).addClass("zmayor")
    })
    $(".categoriaMotosUL li, .contenidoMotosli, .contenidoMotos li").mouseleave(function() {
        $(this).removeClass("zmayor")
    })


    //Clic boton primario navegaciÃ³n
    $('.nav2 a').click(function() {
        if ($(window).width() > 1120) {
            if (!$(this).hasClass("select")) {
                $('.nav2 a').removeClass("select");
                $(this).addClass("select");
                var id = $(this).data('id');
                $('.seccionMegamenu').hide(0);
                $('.seccionMegamenu' + id).slideDown(200);
                $('.overlay').fadeIn(200);
                $(".sesion").slideUp(0);
                $(".buscarHeader").slideUp(0);
                $(this).parent("").children(".sesion").slideDown(200);
            } else {
                $('.seccionMegamenu').slideUp(200);
                $('.sesion').slideUp(200);
                $(this).removeClass("select");
                $('.overlay').fadeOut(200);
                $(".buscarHeader").slideUp(200);

            }
        } else {
            $(this).parent().children("ul").slideToggle(200);
        }
    });

    //btCerrar Megamenu
    $(".overlay, .btCerrarMegamenu").click(function() {
        $('.seccionMegamenu').slideUp(200);
        $(".nav2 a").removeClass("select");
        $('.overlay').fadeOut(200);
        $('.sesion').slideUp(200);
        $(".buscarHeader").slideUp(200);
    });
    //categoriaMotos
    $('.categoriaMotos a').click(function() {
        if (!$(this).hasClass("seleccionado")) {
            $('.categoriaMotos a').removeClass("seleccionado");
            $(this).addClass("seleccionado");
            var id = $(this).data('id');
            $('.categoriaMotosUL').hide(0);
            $('.categoriaMotosUL' + id).slideDown(0);
        } else {
            $('.categoriaMotosUL').slideUp(0);
            $(this).removeClass("seleccionado");
        }
    });

    $('.cerrar_buscar').click(function() {
        $('.buscarHeader input ').val('')
    });

    //Quitar Filtros
    $('.icon-cerrar').click(function() {
        $(this).parent().parent().hide(100);
    });


    //Tooltip
    $('.btTool').click(function() {
        $('.overlay_legal').fadeIn(200);
        $(".toolTip").slideToggle(200);
    });

    $('.cerrar_legal').click(function() {
        $(".toolTip").hide(200);
        $('.overlay_legal').slideToggle(200);
    });

    $('.overlay_legal').click(function() {
        $(this).fadeOut(200);
        $(".toolTip").slideToggle(200);
    });

    $(".btFiltro").click(function() {
        $(this).toggleClass("abajo");
        $(".filtros").slideToggle(200);

    });

    $('.filtroBlog li a').on('click', function() {
        if (!$(this).hasClass("active_comparar")) {
            $('.filtroBlog li').removeClass("active_comparar");
            $(this).parent().addClass("active_comparar");
        }
    });

    $('.noPad_comparar li a').on('click', function() {
        if (!$(this).hasClass("active_comparar")) {
            $('.noPad_comparar li').removeClass("active_comparar");
            $(this).parent().addClass("active_comparar");
            var id = $(this).data('id');
            $('.filtrar').slideUp(300);
            $('.filtrar' + id).slideDown(500);

            $('#cbxCategoriaComparar')
        }
    });

    $('#cbxCategoriaComparar').on('change', function() {

        var id = $(this).val();
        $('.noPad_comparar li').removeClass("active_comparar");
        $("#li-" + id).addClass("active_comparar");

        $('.filtrar').slideUp(300);
        $('.filtrar' + id).slideDown(500);

    });

});