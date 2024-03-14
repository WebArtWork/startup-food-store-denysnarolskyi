console.log("Hello World");
// function showDetails(detailsId) {
//   var detailsContainers = document.querySelectorAll(".details-container");
//   detailsContainers.forEach(function (container) {
//     container.classList.remove("active");
//   });

//   document.getElementById(detailsId).classList.add("active");

//   var listItems = document.querySelectorAll(".list-item");
//   listItems.forEach(function (item) {
//     item.classList.remove("active");
//   });

//   event.currentTarget.classList.add("active");
// }
document.addEventListener('DOMContentLoaded', () => {
	const storedFavorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));
	const favoritesButton = document.querySelector('.add-to-favorite');
	updateFavoritesStatus(storedFavorites, favoritesButton);  // Initial update on page load

	document.querySelectorAll('.basket-button').forEach(button => {
		const productName = button.getAttribute('data-product-name');
		// Initial visual update based on whether it's a favorite
		if (storedFavorites.has(productName)) {
			button.classList.add('is-favorite'); // Add a class for styling
		}

		button.addEventListener('click', () => {
			// Toggle favorite status and visuals for the product
			if (storedFavorites.has(productName)) {
				storedFavorites.delete(productName);
				button.classList.remove('is-favorite');
			} else {
				storedFavorites.add(productName);
				button.classList.add('is-favorite');
			}

			// Update local storage with the new set of favorites
			localStorage.setItem('favorites', JSON.stringify([...storedFavorites]));

			// Update the favorites status displayed on the add-to-favorite button
			updateFavoritesStatus(storedFavorites, favoritesButton);
		});
	});
});

function updateFavoritesStatus(favorites, button) {
	if (favorites.size > 0) {
		button.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 1.75H4.75C3.64543 1.75 2.75 2.64543 2.75 3.75V14.2504L8 10.75L13.25 14.2504V3.75C13.25 2.64543 12.3546 1.75 11.25 1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" id="icon-bookmark"></path></svg>
            Закладки (${favorites.size})`; // Show the number of favorites
		button.disabled = false; // Enable the button
	} else {
		button.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.25 1.75H4.75C3.64543 1.75 2.75 2.64543 2.75 3.75V14.2504L8 10.75L13.25 14.2504V3.75C13.25 2.64543 12.3546 1.75 11.25 1.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" id="icon-bookmark"></path></svg>
            Закладки порожні`; // Default text when no favorites
		button.disabled = true; // Disable the button
	}
}
document.addEventListener('DOMContentLoaded', () => {
	const scrollTopBtn = document.getElementById('scrollTopBtn');

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function () {
		scrollFunction();
	};

	function scrollFunction() {
		if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
			scrollTopBtn.style.display = "block";
		} else {
			scrollTopBtn.style.display = "none";
		}
	}

	// When the user clicks on the button, scroll to the top of the document
	scrollToTop = () => {
		document.body.scrollTop = 0; // For Safari
		document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
		window.scrollTo({
			top: 0,
			behavior: 'smooth'  // This triggers the smooth scrolling
		});
	};
});
document.addEventListener('DOMContentLoaded', () => {
	const listItems = document.querySelectorAll('.list-item');
	listItems.forEach(item => {
		item.addEventListener('click', () => {
			// Remove styles from all items
			listItems.forEach(innerItem => {
				innerItem.classList.remove('active'); // Remove the active class if you're using one
				innerItem.style.backgroundColor = ''; // Reset background color
				innerItem.style.color = '';          // Reset text color
				innerItem.style.borderRadius = '';   // Reset border radius
			});

			// Add styles to the clicked item
			item.classList.add('active'); // If you're still using the class for anything else
			item.style.backgroundColor = '#034706'; // Set background color to dark green
			item.style.color = '#fff';              // Set text color to white
			item.style.borderRadius = '15px';       // Set border radius to 15px

			const targetId = item.getAttribute('data-target');
			const targetElement = document.getElementById(targetId);
			if (targetElement) {
				targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
			}
		});
	});
});
function toggleOptions() {
  const customSelect = document.getElementById("custom-select");
  customSelect.classList.toggle("open");
}
function details(name){
	if(name === 'drinks'){
		return 'drinkDetails'
	}else{
		return 'mealsDetails'
	}
}

function selectOption(value) {
  const selectStyled = document.querySelector(".select-styled");
  const selectOptions = document.querySelector(".select-options");
  const select = document.getElementById("cars");

  select.value = value;
  selectStyled.textContent = value;
  selectOptions.style.display = "none";
  document.getElementById("custom-select").classList.remove("open");
}
window.addEventListener("resize", function () {
  if (window.innerWidth < 1000) {
    var screenWidth = window.innerWidth;
    var container = document.querySelector(".container");

    // Змінюємо max-width на значення ширини екрана
    container.style.maxWidth = screenWidth + "px";
  }
});

function activeDetails(detailsId) {
  // Отримайте всі елементи з класом "list-item"
  var listItems = document.querySelectorAll(".list-item first");

  // Знайдіть активний елемент та видаліть його клас "active"
  var activeItem = document.querySelector(".list-item.active");

  // Знайдіть елемент за допомогою переданого ідентифікатора та додайте йому клас "active"
  var targetItem = document.querySelector("#" + detailsId);
  if (targetItem) {
    targetItem.classList.add("active");
  }
}
function openModal(product) {
	// Set product details in the modal
	document.getElementById('modalProductName').innerText = product.name;
	document.getElementById('modalProductImage').src = product.thumb;
	document.getElementById('modalProductImage').alt = product.name;
	document.getElementById('modalProductPrice').innerText = product.price + ' ₴';
	document.getElementById('modalProductDescription').innerText = product.short;

	// Update the modal favorites button based on whether the product is a favorite
	const storedFavorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));
	const modalFavoriteButton = document.querySelector('.modal .item-btn');
	if (storedFavorites.has(product.name)) {
		modalFavoriteButton.classList.add('is-favorite'); // Change this to your highlighted class
		modalFavoriteButton.innerText = 'Remove from Favorites'; // Change text accordingly
	} else {
		modalFavoriteButton.classList.remove('is-favorite');
		modalFavoriteButton.innerText = 'Add to Favorites';
	}

	// Assign click event to the favorite button in the modal
	// Make sure to remove old event listeners by cloning the button
	const newModalFavoriteButton = modalFavoriteButton.cloneNode(true);
	modalFavoriteButton.parentNode.replaceChild(newModalFavoriteButton, modalFavoriteButton);

	document.querySelectorAll('.basket-button').forEach(button => {
		console.log(button,'button')
		if (storedFavorites.has(product.name)) {
			button.classList.add('is-favorite'); // Add a class for styling
		}

		button.addEventListener('click', () => {
			// Toggle favorite status and visuals for the product
			if (storedFavorites.has(product.name)) {
				storedFavorites.delete(product.name);
				button.classList.remove('is-favorite');
			} else {
				storedFavorites.add(product.name);
				button.classList.add('is-favorite');
			}
		});
	});;
	newModalFavoriteButton.addEventListener('click', () => {

		toggleFavorite(product, newModalFavoriteButton);
	});

	// Display the modal
	document.getElementById('modalBackground').style.display = 'block';
	document.getElementById('modalWindow').style.display = 'block';
}
function updateButtonVisuals(button, isFavorite) {
	const svg = button.querySelector('svg'); // Find the SVG within the button

	const modalFavoriteButton = document.querySelector('.modal .item-btn');
	if (modalFavoriteButton.innerText === 'Add to Favorites') {
		modalFavoriteButton.classList.add('is-favorite'); // Change this to your highlighted class
		modalFavoriteButton.innerText = 'Remove from Favorites'; // Change text accordingly
	} else {
		modalFavoriteButton.classList.remove('is-favorite');
		modalFavoriteButton.innerText = 'Add to Favorites';
	}
	if (isFavorite) {
		button.classList.add('is-favorite'); // Assuming this changes the appearance
		svg.setAttribute('fill', 'green'); // Change SVG color to green
	} else {
		button.classList.remove('is-favorite');
		svg.setAttribute('fill', 'none'); // Revert SVG color to none
	}
}

// function toggleFavorite(product, button) {
// 	const storedFavorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));

// 	if (storedFavorites.has(product.name)) {
// 		storedFavorites.delete(product.name);
// 		button.classList.remove('is-favorite'); // Adjust as per your active class
// 		button.innerText = 'Add to Favorites'; // Update button text
// 	} else {
// 		storedFavorites.add(product.name);
// 		button.classList.add('is-favorite');
// 		button.innerText = 'Remove from Favorites'; // Update button text
// 	}
// 	const favoritesButton = document.querySelector('.add-to-favorite');
// 	updateFavoritesStatus(storedFavorites, favoritesButton);  // Initial update on page load

// 	document.querySelectorAll('.basket-button').forEach(button => {
// 		const productName = button.getAttribute('data-product-name');
// 		// Initial visual update based on whether it's a favorite
// 		if (storedFavorites.has(productName)) {
// 			button.classList.add('is-favorite'); // Add a class for styling
// 		}

// 		button.addEventListener('click', () => {
// 			// Toggle favorite status and visuals for the product
// 			if (storedFavorites.has(productName)) {
// 				storedFavorites.delete(productName);
// 				button.classList.remove('is-favorite');
// 			} else {
// 				storedFavorites.add(productName);
// 				button.classList.add('is-favorite');
// 			}

// 			// Update local storage with the new set of favorites
// 			localStorage.setItem('favorites', JSON.stringify([...storedFavorites]));

// 			// Update the favorites status displayed on the add-to-favorite button
// 			updateFavoritesStatus(storedFavorites, favoritesButton);
// 		});
// 	});

// 	localStorage.setItem('favorites', JSON.stringify([...storedFavorites]));
// }
function toggleFavorite(product, button) {
	// Fetch the latest set of favorites
	const storedFavorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));
	const isCurrentlyFavorite = storedFavorites.has(product.name);

	if (isCurrentlyFavorite) {
		storedFavorites.delete(product.name); // Remove from favorites
	} else {
		storedFavorites.add(product.name); // Add to favorites
	}

	// Update local storage
	localStorage.setItem('favorites', JSON.stringify([...storedFavorites]));

	// Reflect the new status in UI
	updateFavoritesStatus(storedFavorites, document.querySelector('.add-to-favorite'));

	// Ensure all buttons representing this product are updated across the page
	document.querySelectorAll(`.basket-button[data-product-name="${product.name}"]`).forEach(btn => {
		updateButtonVisuals(btn, !isCurrentlyFavorite);
	});

	// Also update the button visuals for the modal if it's the one being clicked
	updateButtonVisuals(button, !isCurrentlyFavorite);
}

// Функція для закриття модального вікна
function closeModal() {
  document.getElementById("modalBackground").style.display = "none";
  document.getElementById("modalWindow").style.display = "none";
	const storedFavorites = new Set(JSON.parse(localStorage.getItem('favorites') || '[]'));

   const modalFavoriteButton = document.querySelector('.modal .item-btn'); // Make sure selector matches
    const isFavorite = storedFavorites.has(product.name);
    updateButtonVisuals(modalFavoriteButton, isFavorite);

    modalFavoriteButton.onclick = () => {
        // Toggle favorite when modal button is clicked
        if (isFavorite) {
            storedFavorites.delete(product.name);
        } else {
            storedFavorites.add(product.name);
        }
        updateButtonVisuals(modalFavoriteButton, !isFavorite); // Update button appearance
        localStorage.setItem('favorites', JSON.stringify([...storedFavorites])); // Save changes
        updateFavoritesStatus(new Set(storedFavorites), document.querySelector('.add-to-favorite')); // Update favorites count
    };

}
document.addEventListener("DOMContentLoaded", function () {
  // Знаходимо елемент "ЇЖА"
  var firstListItem = document.querySelector(".list-item.first");

  // Додаємо клас "active" до знайденого елементу
  firstListItem.classList.add("active");
});
