/*

Lovingly crafted by iBacor.com 2016

*/

// Code editor for serverside tipe
var editor = CodeMirror.fromTextArea(document.getElementById('code'), {
    mode: 'text/x-c++src',
    lineNumbers: true,
    lineWrapping: true
});

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

    // Code editor for 2 box
    $('#dua_kenca').enhsplitter({
        vertical: true
    });

    // Code editor for 4 box
    $('#opat').enhsplitter();
    $('#opat_kenca').enhsplitter({
        vertical: false
    });
    $('#opat_katuhu').enhsplitter({
        vertical: false
    });

    // Code example by lang name
    $('#lang').on('change', function() {
        $('.fa-spinner').hide('');
        if ($(this).val() == 'html') {
            contoh = '';
            $('#dua').hide('');
            $('#opat').show('');
            html.setValue('<h1>Hello, world!</h1>\n<h2></h2>');
            css.setValue('h1 {\n' +
                '	color: salmon\n' +
                '}');
            js.setValue('document.querySelector("h2").innerHTML = "I love code.";');
            $('#cdn').html('<input name="cdn_url[]" value="" type="text" class="cdn-input" placeholder="css or js"><span title="add" id="add">+</span>');
        } else {
            $('#dua').show('');
            $('#opat').hide('');
            var contoh = '';
            if ($(this).val() == 'csharp') {
                editor.setOption("mode", "text/x-c++src");
                contoh = 'using System;\n' +
                    'class Program\n' +
                    '{\n' +
                    '    static void Main()\n' +
                    '    {\n' +
                    '        int x = 10;\n' +
                    '        int y = 25;\n' +
                    '        int z = x + y;\n' +
                    '        Console.Write("x + y = "+ z);\n' +
                    '    }\n' +
                    '}';
            } else if ($(this).val() == 'commonlisp') {
                editor.setOption("mode", "text/x-common-lisp");
                contoh = '(print "Hello, world!")';
            } else if ($(this).val() == 'd') {
                editor.setOption("mode", "text/x-c++src");
                contoh = 'import std.stdio;\n' +
                    'void main(string[ ] args) {\n' +
                    '    int x = 10;\n' +
                    '    int y = 25;' +
                    '    int z = x + y;\n' +
                    '    writeln("x + y = ", z);\n' +
                    '}';
            } else if ($(this).val() == 'dart') {
                editor.setOption("mode", "text/x-c++src");
                contoh = 'void main(){\n' +
                    '  var x = 10;\n' +
                    '  var y = 25;\n' +
                    '  var z = x + y;\n' +
                    '  print("x + y = $z");\n' +
                    '}';
            } else if ($(this).val() == 'fortran') {
                editor.setOption("mode", "text/x-fortran");
                contoh = 'program sum\n' +
                    '    REAL X,Y,Z\n' +
                    '    X = 10\n' +
                    '    Y= 25\n' +
                    '    Z = X + Y\n' +
                    '    PRINT *,"sum of x + y = ", Z\n' +
                    'end program sum';
            } else if ($(this).val() == 'golang') {
                editor.setOption("mode", "text/x-go");
                contoh = 'package main\n' +
                    'import "fmt"\n' +
                    'func main() {\n' +
                    '	fmt.Println("Hello World!")\n' +
                    '}';
            } else if ($(this).val() == 'groovy') {
                editor.setOption("mode", "text/x-c++src");
                contoh = 'def x = 10\n' +
                    'def y = 25\n' +
                    'print "Sum of x + y = " + (x+y)';
            } else if ($(this).val() == 'java') {
                editor.setOption("mode", "text/x-c++src");
                contoh = 'public class Bintang {\n' +
                    '   	public static void main(String[] args) {\n' +
                    '   		System.out.println("PIRAMIDA PENUH");\n' +
                    '   		for (int a=1; a<=5; a++) {\n' +
                    '    		for(int c=1; c<=5-a; c++) {\n' +
                    '				System.out.print(" ");\n' +
                    '			}\n' +
                    '			for (int d=1; d<=a-1; d++) {\n' +
                    '				System.out.print("*");\n' +
                    '			}\n' +
                    '			for (int b=1; b<=a-1; b++) {\n' +
                    '				System.out.print("*");\n' +
                    '			}\n' +
                    '			System.out.println("*");\n' +
                    '		}\n' +
                    '    }\n' +
                    '}';
            } else if ($(this).val() == 'lua') {
                editor.setOption("mode", "text/x-lua");
                contoh = 'print ("Hello, World!")';
            } else if ($(this).val() == 'nodejs') {
                editor.setOption("mode", "text/javascript");
                contoh = 'console.log("Hello, World!");';
            } else if ($(this).val() == 'objc') {
                editor.setOption("mode", "text/x-c++src");
                contoh = '//gcc 4.8.4\n' +
                    '#import <stdio.h>\n' +
                    'int main(void)\n' +
                    '{\n' +
                    '    printf("Hello, world!");\n' +
                    '    return 0;\n' +
                    '}';
            } else if ($(this).val() == 'pascal') {
                editor.setOption("mode", "text/x-pascal");
                contoh = 'program HelloWorld;\n' +
                    'begin\n' +
                    '    writeln(\'Hello, world!\');\n' +
                    'end.';
            } else if ($(this).val() == 'perl') {
                editor.setOption("mode", "text/x-perl");
                contoh = '$x = 10;\n' +
                    '$y = 25;\n' +
                    '$z = $x+$y;\n' +
                    'print "Sum of $x + $y = $z";';
            } else if ($(this).val() == 'php') {
                editor.setOption("mode", "application/x-httpd-php");
                contoh = '<\?php\n' +
                    'echo "Hello, world!";';
            } else if ($(this).val() == 'prolog') {
                editor.setOption("mode", "text/x-c++src");
                contoh = 'program :- write(\'Hello, world!\').\n' +
                    ':- program.';
            } else if ($(this).val() == 'python2') {
                editor.setOption("mode", "text/x-python");
                contoh = 'print "Hello, world!"';
            } else if ($(this).val() == 'python3') {
                editor.setOption("mode", "text/x-python");
                contoh = 'print ("Hello, world!")';
            } else if ($(this).val() == 'ruby') {
                editor.setOption("mode", "text/x-ruby");
                contoh = 'x = 10;\n' +
                    'y = 25;\n' +
                    'z = x+y;\n' +
                    'print "Sum of x + y = ", z;';
            } else if ($(this).val() == 'scala') {
                editor.setOption("mode", "text/x-c++src");
                contoh = 'object MyClass {\n' +
                    '   def add(x:Int, y:Int) = x + y;\n' +
                    '   def main(args: Array[String]) {\n' +
                    '      print("sum of x + y = " + add(25,10));\n' +
                    '   }\n' +
                    '}';
            } else if ($(this).val() == 'sql') {
                editor.setOption("mode", "text/x-sql");
                contoh = 'create table calc(x int, y int);\n' +
                    'insert into calc values(10, 25);\n' +
                    'select x,y, (x+y) from calc;';
            } else if ($(this).val() == 'vbn') {
                editor.setOption("mode", "text/x-vb");
                contoh = 'Imports System\n' +
                    'Public Class Test\n' +
                    '    Public Shared Sub Main()\n' +
                    '        Dim x, y as Integer\n' +
                    '        x = 10\n' +
                    '        y = 25\n' +
                    '        System.Console.WriteLine("Sum of x and y = " & (x+y))\n' +
                    '    End Sub\n' +
                    'End Class';
            }
            $('#coeg').html($("#lang option:selected").html());
            editor.setValue(contoh);
            $('#result').html('');
        }
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
            editor.setOption("theme", "monokai");
            html.setOption("theme", "monokai");
            js.setOption("theme", "monokai");
            css.setOption("theme", "monokai");
            $('.splitter_bar').css('background', '#333');
            $('#codingdong .CodeMirror').css('background', '#272822');
            $('#codingdong #result').css('background', '#272822');
            $('#codingdong #result').css('color', '#fff');
        } else {
            editor.setOption("theme", "default");
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
        $('#result').html('');
        $('.fa-spinner').show('');
        var l = $('#lang').val();
        if (l == 'html') {
            var cdn = $("input[name='cdn_url[]']").map(function() {
                return $(this).val();
            }).get();
            $('.fa-spinner').hide('');
            var ifrm = document.getElementById('result2');
            ifrm = ifrm.contentWindow || ifrm.contentDocument.document || ifrm.contentDocument;
            ifrm.document.open();
            ifrm.document.write('Awesome');
            ifrm.document.close();
        } else {
            $('.fa-spinner').hide('');
            $('#result').html('Awesome ' + $("#lang option:selected").html());
        }
        return false;
    });

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
