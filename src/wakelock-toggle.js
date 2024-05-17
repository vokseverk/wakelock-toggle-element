class WakelockToggle extends HTMLElement {

	constructor(element) {
		super()

		this.sentinel = null
		this.label = 'Keep the screen on'
	}

	connectedCallback() {
		const switcherId = 'wakelock'
		const labelElement = document.createElement('label')
		labelElement.setAttribute('for', switcherId)
		labelElement.textContent = this.getAttribute('label') || this.label

		const switcher = document.createElement('input')
		switcher.id = switcherId
		switcher.type = 'checkbox'
		switcher.setAttribute('switch', '')
		switcher.addEventListener('change', this)

		const styleElement = document.createElement('style')
		styleElement.textContent = `
			wakelock-toggle {
				display: flex;
				justify-content: flex-start;
				gap: 10px;
			}
		`

		this.appendChild(styleElement)
		this.appendChild(labelElement)
		this.appendChild(switcher)
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`)
	}

	get switcherElement() {
		return this.querySelector('input')
	}

	handleEvent(event) {
		const value = this.switcherElement.checked
		if (value) {
			this.requestWakeLock()
		} else {
			if (this.sentinel !== null) {
				this.sentinel.release().then(() => {
					this.sentinel = null
				})
			}
		}
	}

	async requestWakeLock() {
		try {
			this.sentinel = await navigator.wakeLock.request("screen")

			this.sentinel.addEventListener("release", () => {
				this.switcherElement.checked = false
			})

		} catch (err) {
			console.info(`Couldn't activate WakeLock...`)
			this.switcherElement.checked = false
		}
	}
}

customElements.define('wakelock-toggle', WakelockToggle)

