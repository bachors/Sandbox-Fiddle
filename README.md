# Code-Sandbox-Fiddle-Theme
<p>Theme HTML, CSS & JS sandbox for developers to quickly try out code and share code snippets.</p>

<p>Inspired by <span style="color: #4f81bd;">jsfiddle</span> & <font color="#4f81bd">codepen</font>.</p>

<p>Fitur:</p>

<ul>
	<li>Light & dark theme editor</li>
	<li>Responsive design</li>
	<li>Dinamic resize editor size</li>
	<li>Support external resources  / cdn</li>
</ul><br>

<p>Built with:</p>

<ul>
	<li>Codemirror</li>
	<li>Bootstrap</li>
	<li>Fontawesome</li>
	<li>jQuery</li>
	<li>jQuery.enhsplitter</li>
	<li>Google font-family</li>
</ul>

# USAGE
<pre>sandboxFiddle(function(save) {
    // save button callback
    console.log(save);
                
    var cdnJs = save.cdn.js; //array
    var html = save.html; //string
    // etc...
});</pre>

Options
<pre>var data = {
    title: 'text',
    theme: 'text', // default or material
    cdn: {
        css: [
            'url 1', // external css
            'url 2'
        ],
        js: [
            'url 1', // external js
            'url 2'
        ]
    },
    css: 'text', // css code
    html: 'text', // html code
    js: 'text' // javascript code
};

sandboxFiddle(data, function(save) {
    console.log(save);
});</pre>

<a href="https://bachors.github.io/Code-Sandbox-Fiddle-Theme/"><h2>DEMO</h2></a>
