const btn = document.querySelector('#btn');

btn.addEventListener('click', () => {
	const hexNumber = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];

	let hexCode = '';

	for (let i = 0; i < 6; i++) {
		const randomIndex = Math.floor(Math.random() * hexNumber.length);

		hexCode += hexNumber[randomIndex]
	}
	document.querySelector('#hex-code').innerHTML = hexCode
	document.querySelector('body').style.background = `#${hexCode}`
})