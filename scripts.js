window.addEventListener('DOMContentLoaded', event => {
	
	/*1- Tldr Toggler*/
	
	// Grab the toggler from the html
	const tldrToggler = document.getElementById('tldr-toggler');
	
	// Link the function to the button click, directly nested the function to toggle tldr content visibility
	tldrToggler.addEventListener('click', () => {
		const grey = document.querySelectorAll('.tldr');
		grey.forEach(e1 => e1.classList.toggle('tldr-hide'));
	}, false);
	
	/*2- Keyword Cycling*/
	
	// Function to cycle through list for the masthead word
	var wordList = ['learn', 'enjoy', 'understand', 'appreciate', 'excel at', 'love', 'get'];
	var wordCounter = 0;
	function cycleKeywords() {   // function to perform changes to h1
		let e2 = document.getElementById('keyword');
		e2.textContent = wordList[wordCounter % wordList.length];
		wordCounter++;
	}
	
	// Change keyword on page load and every x milliseconds
	cycleKeywords();
	setInterval(cycleKeywords, 1500);
	
	/*3- Responsive Navbar*/
	
	// Function to toggle navbar's 'shrink' label
	var navbarShrink = function () {
		const navbarCollapsible = document.body.querySelector('#nav-main');
		if (!navbarCollapsible) {
			return;
		}
		if (window.scrollY === 0) {
			navbarCollapsible.classList.remove('navbar-shrink')
		} else {
			navbarCollapsible.classList.add('navbar-shrink')
		};
	};
	
	// Shrink the navbar on start (if relevant at page load)
	navbarShrink();
	
	// Shrink the navbar when page is scrolled
	document.addEventListener('scroll', navbarShrink);
	
	// Activate Bootstrap scrollspy on the main nav element
	const navbarSpy = document.body.querySelector('#nav-main');
	if (navbarSpy) {
		new bootstrap.ScrollSpy(document.body, {
			target: '#nav-main',
			rootMargin: '0px 0px -40%',
		});
	};
	
	// Collapse responsive navbar when toggler is visible
	const navbarToggler = document.body.querySelector('.navbar-toggler');
	const navResponsiveItems = [].slice.call(
		document.body.querySelectorAll('#nav-sub .nav-link')
	);
	navResponsiveItems.map(function (navResponsiveItem) {
		navResponsiveItem.addEventListener('click', () => {
			if (window.getComputedStyle(navbarToggler).display !== 'none') {
				navbarToggler.click();
			};
		});
	});
});

/* Learnt a lot from:
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/