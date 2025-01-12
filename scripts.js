/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/

window.addEventListener('DOMContentLoaded', event => {
	
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
		}
	};
	
	// Shrink the navbar 
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
			}
		});
	});
	
	/*
	// Function to cycle through list for the masthead word
	var cycleCount = 0;
	var cycleWords = function () {
		var wordArray = ['learn ', 'love ', 'understand ', 'enjoy ', 'appreciate '];
		document.querySelector('#cycled-word').inner(wordArray[cycleCount % wordArray.length]);
		cycleCount++;
		setTimeout(cycleWords, 1000);
	});
	
	// Change the masthead word
	cycleWords();
	*/
});