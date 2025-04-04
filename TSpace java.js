const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// Function to update pagination buttons and page numbers 
function updatePagination() { 
    pageNumbers.textContent = 
        `Page ${currentPage} of ${totalPages}`; 
    prevButton.disabled = currentPage === 1; 
    nextButton.disabled = currentPage === totalPages; 
    pageLinks.forEach((link) => { 
        const page = parseInt(link.getAttribute('data-page')); 
        link.classList.toggle('active', page === currentPage); 
    }); 
} 

// Event listener for "Previous" button 
prevButton.addEventListener('click', () => { 
    if (currentPage > 1) { 
        currentPage--; 
        displayPage(currentPage); 
        updatePagination(); 
    } 
}); 

// Event listener for "Next" button 
nextButton.addEventListener('click', () => { 
    if (currentPage < totalPages) { 
        currentPage++; 
        displayPage(currentPage); 
        updatePagination(); 
    } 
}); 

// Event listener for page number buttons 
pageLinks.forEach((link) => { 
    link.addEventListener('click', (e) => { 
        e.preventDefault(); 
        const page = parseInt(link.getAttribute('data-page')); 
        if (page !== currentPage) { 
            currentPage = page; 
            displayPage(currentPage); 
            updatePagination(); 
        } 
    }); 
}); 

function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }