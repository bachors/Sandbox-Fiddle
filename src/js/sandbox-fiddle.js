/*
* Lovingly crafted by Bachors.com 2016
* https://github.com/bachors/Sandbox-Fiddle/
* Updates will be posted to this site.
*/

var sandboxFiddle = function(data, callback) {
	
	callback = (callback == undefined ? data : callback);

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
	
	var theme = 'default';
	if(data !== undefined){
		if(data.theme !== undefined){
			if(data.theme == 'default' || data.theme == 'material'){
				theme = data.theme;
			}
		}
		if(data.title !== undefined){
			$('#sandboxFiddle #title').val(data.title);
		}
		if(data.css !== undefined){
			css.setValue(data.css);
		}
		if(data.html !== undefined){
			html.setValue(data.html);
		}
		if(data.js !== undefined){
			js.setValue(data.js);
		}
		if(data.cdn !== undefined){
			var inp = $('#sandboxFiddle #cdn');
			if(data.cdn.js !== undefined){
				for (i = 0; i < data.cdn.js.length; i++) {
					$(inp).prepend('<div id="cdn' + i + '"><input type="text" value="' + data.cdn.js[i] + '" class="cdn-input" name="cdn_url[]" placeholder="css or js"/><span title="remove" id="remove">x</span> </div>');
				} 
			}
			if(data.cdn.css !== undefined){
				for (i = 0; i < data.cdn.css.length; i++) {
					$(inp).prepend('<div id="cdn' + i + '"><input type="text" value="' + data.cdn.css[i] + '" class="cdn-input" name="cdn_url[]" placeholder="css or js"/><span title="remove" id="remove">x</span> </div>');
				} 
			}
		}
	}

    // Code editor for 4 box
    $('#sandboxFiddle #opat').enhsplitter();
    $('#sandboxFiddle #opat_kenca').enhsplitter({
        vertical: false
    });
    $('#sandboxFiddle #opat_katuhu').enhsplitter({
        vertical: false
    });
	
	changeTheme();
	runCode();

    // Add Cdn
    $('body').on('click', '#sandboxFiddle #cdn #add', function() {
        var inp = $('#sandboxFiddle #cdn');
        var i = $('#sandboxFiddle #cdn input').size() + 1;
        $('<div id="cdn' + i + '"><input type="text" class="cdn-input" name="cdn_url[]" placeholder="css or js"/><span title="remove" id="remove">x</span> </div>').appendTo(inp);
        i++;
    });

    // Remove Cdn
    $('body').on('click', '#sandboxFiddle #cdn #remove', function() {
        $(this).parent('div').remove();
    });

    // change theme 
    $('#sandboxFiddle #theme').on('click', function() {
        if ($(this).is(':checked')) {
            theme = 'material';
        } else {
            theme = 'default';
        }
		changeTheme();
    });

    // run code
    $("#sandboxFiddle #run").click(function() {
		runCode();
        return false;
    });

    // save code
    $("#sandboxFiddle #save").click(function() {
        var cdn = $("#sandboxFiddle #cdn input[name='cdn_url[]']").map(function() {
                return $(this).val();
            }).get(),
			cCss = [],
			cJs = [];

        $.each(cdn, function(i, a) {
            if (a.substr(a.length - 4) == '.css' || a.match(/css\?/)) {
                cCss.push(a);
            } else if (a.substr(a.length - 3) == '.js' || a.match(/js\?/)) {
                cJs.push(a);
            }
        });			
		
        var obj = {
			title: $("#sandboxFiddle #title").val(),
			theme: theme,
			cdn: {
				css: cCss,
				js: cJs
			},
			css: css.getValue(),
			html: html.getValue(),
			js: js.getValue()
		};
		callback(obj);
        return false;
    });
	
	// run code
	function runCode(){
        $('#sandboxFiddle .fa-spinner').show('');
        var cdn = $("#sandboxFiddle #cdn input[name='cdn_url[]']").map(function() {
                return $(this).val();
            }).get(),
            data = run_html(cdn);
        $('#sandboxFiddle .fa-spinner').hide('');
        var ifrm = document.getElementById('result');
        ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
        ifrm.document.open();
        ifrm.document.write(data);
        ifrm.document.close();
	}

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
	
	// change theme 
	function changeTheme(){
		if (theme !== 'default') {
            html.setOption("theme", "material");
            js.setOption("theme", "material");
            css.setOption("theme", "material");
            $('#sandboxFiddle .splitter_bar').css('background', '#2b3940');
            $('#sandboxFiddle #editor .CodeMirror').css('background', '#263238');
			$('#sandboxFiddle #editor .CodeMirror-gutters').css('background', '#37474f');
            $('#sandboxFiddle #editor #result').css('background', '#263238');
            $('#sandboxFiddle #editor #result').css('color', '#fff');
			$('#sandboxFiddle #theme').prop('checked', true);
        } else {
            html.setOption("theme", "default");
            js.setOption("theme", "default");
            css.setOption("theme", "default");
            $('#sandboxFiddle .splitter_bar').css('background', '#ddd');
            $('#sandboxFiddle #editor .CodeMirror').css('background', '#f5f5f5');
			$('#sandboxFiddle #editor .CodeMirror-gutters').css('background', '#f5f5f5');
            $('#sandboxFiddle #editor #result').css('background', '#f5f5f5');
            $('#sandboxFiddle #editor #result').css('color', '#333');
			$('#sandboxFiddle #theme').prop('checked', false);
        }
	}

    // menu
    var dnl = $("#sandboxFiddle .menur-navbar-left"),
        dnlBtnToggle = $("#sandboxFiddle .dnl-btn-toggle"),
        dnlBtnCollapse = $("#sandboxFiddle .dnl-btn-collapse"),
        contentWrap = $("#sandboxFiddle .content-wrap"),
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
                $('#sandboxFiddle .navbar-collapse').removeClass('in')
            },
            swipeLeft: function() {
                dnlHide()
            },
            threshold: 75
        })
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
	
    dnlBtnToggle.click(function() {
        $('#sandboxFiddle .navbar-toggle').addClass('collapsed');
        $('#sandboxFiddle .navbar-collapse').removeClass('in')
    });
	
    $('#sandboxFiddle .navbar-toggle').click(function() {
        if ($(this).hasClass('collapsed')) {
            dnlHide()
        }
    });
	
    $('#sandboxFiddle .content-wrap').click(function() {
        dnlHide()
    });

}
