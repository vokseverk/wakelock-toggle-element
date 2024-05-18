# &lt;wakelock-toggle&gt; element

This is a [Custom Element][CE] that renders a toggle switch (i.e. a checkbox) for requesting to
keep the device's screen from dimming and going to sleep.

## Usage

Grab the [wakelock-toggle.js][FILE] file and include it in your HTML like this:

```html
<script type="module" src="/path/to/wakelock-toggle.js"></script>
```

Then us the <wakelock-toggle></wakelock-toggle> HTML element anywhere you want the switch to
render in your webpage, e.g.:

```html
<main>
	<h1>My Pancake Recipe</h1>

	<aside>
		<h2>Settings</h2>
		<wakelock-toggle label="Keep the screen from going to sleep"></wakelock-toggle>
	</aside>

	...

	<ol>
		<li>...</li>
		<li>...</li>
	</ol>
</main>
```

The `label` attribute is optional; the default value is `"Keep the screen on"`.

[CE]: https://developer.mozilla.org/en-US/docs/Web/API/Web_components/Using_custom_elements
[FILE]: src/wakelock-toggle.js
