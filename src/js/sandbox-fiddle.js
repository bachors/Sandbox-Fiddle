/*

Lovingly crafted by iBacor.com 2016

*/


// Code editor for HTML, JS & CSS
var html = CodeMirror.fromTextArea(document.getElementById('html'), {
    mode: 'text/html',
    lineNumbers: true,
    lineWrapping: true
});
var css = CodeMirror.fromTextArea(document.getElementById('css'), {
    mode: 'text/css',
    lineNumbers: true,
    lineWrapping: true
});
var js = CodeMirror.fromTextArea(document.getElementById('js'), {
    mode: 'text/javascript',
    lineNumbers: true,
    lineWrapping: true
});

$(document).ready(function() {
    "use strict";

    // Code editor for 4 box
    $('#opat').enhsplitter();
    $('#opat_kenca').enhsplitter({
        vertical: false
    });
    $('#opat_katuhu').enhsplitter({
        vertical: false
    });

    // Add Cdn
    $('body').on('click', '#add', function() {
        var inp = $('#cdn');
        var i = $('input').size() + 1;
        $('<div id="cdn' + i + '"><input type="text" class="cdn-input" name="cdn_url[]" placeholder="css or js"/><span title="remove" id="remove">x</span> </div>').appendTo(inp);
        i++;
    });

    // Remove Cdn
    $('body').on('click', '#remove', function() {
        $(this).parent('div').remove();
    });

    // change theme 
    $('#theme').on('click', function() {
        if ($(this).is(':checked')) {
            html.setOption("theme", "monokai");
            js.setOption("theme", "monokai");
            css.setOption("theme", "monokai");
            $('.splitter_bar').css('background', '#333');
            $('#codingdong .CodeMirror').css('background', '#272822');
            $('#codingdong #result').css('background', '#272822');
            $('#codingdong #result').css('color', '#fff');
        } else {
            html.setOption("theme", "default");
            js.setOption("theme", "default");
            css.setOption("theme", "default");
            $('.splitter_bar').css('background', '#ddd');
            $('#codingdong .CodeMirror').css('background', '#f5f5f5');
            $('#codingdong #result').css('background', '#f5f5f5');
            $('#codingdong #result').css('color', '#333');
        }
    });

    // run code
    $("#run").click(function() {
        $('.fa-spinner').show('');
        var cdn = $("input[name='cdn_url[]']").map(function() {
                return $(this).val();
            }).get(),
            data = run_html(cdn);
        $('.fa-spinner').hide('');
        var ifrm = document.getElementById('result');
        ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
        ifrm.document.open();
        ifrm.document.write(data);
        ifrm.document.close();
        return false;
    });

    // template resutl code execute iframe
    function run_html(cdn) {
        var chtml = html.getValue(),
            cjs = js.getValue(),
            ccss = css.getValue(),
            xcss = '',
            xhtml = '',
            xjs = '',
            result = '';

        $.each(cdn, function(i, a) {
            if (a.substr(a.length - 4) == '.css' || a.match(/css\?/)) {
                xcss += '<link rel="stylesheet" href="' + a + '">';
            } else if (a.substr(a.length - 3) == '.js' || a.match(/js\?/)) {
                xjs += '\<script type="text/javascript" src="' + a + '"\>\</script\>';
            }
        });



        if (ccss != '') {
            xcss += '<style>' + ccss + '</style>';
        }
        xhtml += chtml;
        if (cjs != '') {
            xjs += '\<script\>' + cjs + '\</script\>';
        }
        result += '<!DOCTYPE html>';
        result += '<html>';
        result += '	<head>';
        result += '		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />';
        result += '		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">';
        result += '		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />';
        result += xcss;
        result += '	</head>';
        result += '	<body>';
        result += xhtml;
        result += xjs;
        result += '	</body>';
        result += '</html>';
        return result;
    }

    // menu
    var dnl = $(".menur-navbar-left"),
        dnlBtnToggle = $(".dnl-btn-toggle"),
        dnlBtnCollapse = $(".dnl-btn-collapse"),
        contentWrap = $(".content-wrap"),
        contentWrapEffect = contentWrap.data("effect"),
        windowHeight = $(window).height() - 61,
        windowWidth = $(window).width() < 767;

    function cwShowOverflow() {
        if (windowWidth) {
            contentWrap.css({
                height: windowHeight,
                overflow: 'hidden'
            });
            $('html, body').css('overflow', 'hidden')
        }
    }

    function cwHideOverflow() {
        if (windowWidth) {
            contentWrap.css({
                height: 'auto',
                overflow: 'auto'
            });
            $('html, body').css('overflow', 'auto')
        }
    }

    function dnlShow() {
        dnl.addClass("dnl-show").removeClass("dnl-hide");
        contentWrap.addClass(contentWrapEffect);
        cwShowOverflow();
        dnlBtnToggle.find("span").removeClass("fa-bars").addClass("fa-times")
    }

    function dnlHide() {
        dnl.removeClass("dnl-show").addClass("dnl-hide");
        contentWrap.removeClass(contentWrapEffect);
        cwHideOverflow();
        dnlBtnToggle.find("span").removeClass("fa-times").addClass("fa-bars")
    }
    dnl.addClass("dnl-hide");
    dnlBtnToggle.click(function() {
        if (dnl.hasClass("dnl-hide")) {
            dnlShow()
        } else {
            dnlHide()
        }
    });
    dnlBtnCollapse.click(function(e) {
        e.preventDefault();
        if (dnl.hasClass("dnl-collapsed")) {
            dnl.removeClass("dnl-collapsed");
            contentWrap.removeClass("dnl-collapsed");
            $(this).find(".dnl-link-icon").removeClass("fa-arrow-right").addClass("fa-arrow-left")
        } else {
            dnl.addClass("dnl-collapsed");
            contentWrap.addClass("dnl-collapsed");
            $(this).find(".dnl-link-icon").removeClass("fa-arrow-left").addClass("fa-arrow-right")
        }
    });
    $('.navbar-toggle').click(function() {
        if ($(this).hasClass('collapsed')) {
            dnlHide()
        }
    });
    dnlBtnToggle.click(function() {
        $('.navbar-toggle').addClass('collapsed');
        $('.navbar-collapse').removeClass('in')
    });

    function isMobile() {
        try {
            document.createEvent("TouchEvent");
            return true
        } catch (e) {
            return false
        }
    }
    if (isMobile() == true) {
        $(window).swipe({
            swipeRight: function() {
                dnlShow();
                $('.navbar-collapse').removeClass('in')
            },
            swipeLeft: function() {
                dnlHide()
            },
            threshold: 75
        })
    }
    $('.content-wrap').click(function() {
        dnlHide()
    });

});
