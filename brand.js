document.getElementById('nicheForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const niche = document.getElementById('niche').value;
    const brandGrid = document.getElementById('brandGrid');
    const collaborationResults = document.getElementById('collaborationResults');

    // Clear previous results
    brandGrid.innerHTML = '';

    // Define brand suggestions based on niche
    const brands = {
        tech: [
            { name: 'Tech Innovators', contact: 'contact@techinnovators.com', criteria: 'Must have 10k+ followers', img: 'brand1.png' },
            { name: 'Gadget World', contact: 'contact@gadgetworld.com', criteria: 'Tech reviews required', img: 'brand2.png' },
            { name: 'Future Tech', contact: 'contact@futuretech.com', criteria: 'Must post tech tutorials', img: 'brand3.jpg' },
            { name: 'Smart Home Co.', contact: 'contact@smarthomeco.com', criteria: 'Focus on home automation', img: 'brand4.jpg' },
            { name: 'Wearable Tech', contact: 'contact@wearabletech.com', criteria: 'Must feature wearable devices', img: 'brand5.png' }
        ],
        fashion: [
            { name: 'Chic Styles', contact: 'contact@chicstyles.com', criteria: 'Must have a fashion blog', img: 'brand6.jpg' },
            { name: 'Fashion Hub', contact: 'contact@fashionhub.com', criteria: 'Must post outfit ideas', img: 'brand7.jpg' },
            { name: 'Trendy Threads', contact: 'contact@trendythreads.com', criteria: 'Focus on sustainable fashion', img: 'brand8.jpg' },
            { name: 'Glamour Boutique', contact: 'contact@glamourboutique.com', criteria: 'Must have a strong Instagram presence', img: 'brand9.png' },
            { name: 'Style Savvy', contact: 'contact@stylesavvy.com', criteria: 'Must feature seasonal trends', img: 'brand10.png' }
        ],
        food: [
            { name: 'Gourmet Delights', contact: 'contact@gourmetdelights.com', criteria: 'Must post recipes', img: 'brand11.jpg' },
            { name: 'Healthy Eats', contact: 'contact@healthyeats.com', criteria: 'Focus on healthy living', img: 'brand12.png' },
            { name: 'Snack Attack', contact: 'contact@snackattack.com', criteria: 'Must feature snack reviews', img: 'brand13.webp' },
            { name: 'Culinary Creations', contact: 'contact@culinarycreations.com', criteria: 'Must have cooking tutorials', img: 'brand14.png' },
            { name: 'Beverage Bliss', contact: 'contact@beveragebliss.com', criteria: 'Focus on drink recipes', img: 'brand15.png' }
        ],
        lifestyle: [
            { name: 'Daily Life', contact: 'contact@dailylife.com', criteria: 'Must post lifestyle tips', img: 'brand31.png' },
            { name: 'Home Decor', contact: 'contact@homedecor.com', criteria: 'Focus on home decor inspiration', img: 'brand32.png' },
            { name: 'Wellness Wisdom', contact: 'contact@wellnesswisdom.com', criteria: 'Must post wellness advice', img: 'brand33.png' },
            { name: 'Personal Growth', contact: 'contact@personalgrowth.com', criteria: 'Must feature personal development', img: 'brand34.png' },
            { name: 'Relationship Goals', contact: 'contact@relationshipgoals.com', criteria: 'Focus on relationship advice', img: 'brand35.png' }
        ],
        beauty: [
            { name: 'Beauty Buzz', contact: 'contact@beautybuzz.com', criteria: 'Must post beauty tutorials', img: 'brand36.png' },
            { name: 'Skincare Savvy', contact: 'contact@skincareasavvy.com', criteria: 'Focus on skincare routines', img: 'brand37.png' },
            { name: 'Makeup Mastery', contact: 'contact@makeupmastery.com', criteria: 'Must feature makeup tutorials', img: 'brand38.png' },
            { name: 'Hair Care Hub', contact: 'contact@haircarehub.com', criteria: 'Must post hair care tips', img: 'brand39.png' },
            { name: 'Nail Artistry', contact: 'contact@nailartistry.com', criteria: 'Focus on nail art designs', img: 'brand40.png' }
        ],
        parenting: [
            { name: 'Parenting Pro', contact: 'contact@parentingpro.com', criteria: 'Must post parenting tips', img: 'brand41.png' },
            { name: 'Kids\' Corner', contact: 'contact=kids@corner.com', criteria: 'Focus on kids\' activities', img: 'brand42.png' },
            { name: 'Family Fun', contact: 'contact@familyfun.com', criteria: 'Must feature family bonding ideas', img: 'brand43.png' },
            { name: 'Baby Bliss', contact: 'contact@babybliss.com', criteria: 'Must post baby care tips', img: 'brand44.png' },
            { name: 'Toddler Tales', contact: 'contact@toddlertales.com', criteria: 'Focus on toddler development', img: 'brand45.png' }
        ],
        finance: [
            { name: 'Financial Freedom', contact: 'contact@financialfreedom.com', criteria: 'Must post financial tips', img: 'brand46.png' },
            { name: 'Investment Insights', contact: 'contact@investmentinsights.com', criteria: 'Focus on investment strategies', img: 'brand47.png' },
            { name: 'Money Matters', contact: 'contact@moneymatters.com', criteria: 'Must feature money management advice', img: 'brand48.png' },
            { name: 'Wealth Wisdom', contact: 'contact@wealthwisdom.com', criteria: 'Must post wealth-building strategies', img: 'brand49.png' },
            { name: 'Credit Counsel', contact: 'contact@creditcounsel.com', criteria: 'Focus on credit management', img: 'brand50.png' }
        ]
    };

    const selectedBrands = brands[niche];
    if (!selectedBrands) {
        collaborationResults.style.display = 'block';
        brandGrid.innerHTML = '<p>No brands found for the selected niche.</p>';
        return;
    }

    // Create slides for each brand
    selectedBrands.forEach((brand, index) => {
        const slide = document.createElement('div');
        slide.classList.add('brand-slide');
        if (index === 0) slide.classList.add('active'); // Show the first slide by default

        slide.innerHTML = `
            <img src="${brand.img}" alt="${brand.name}">
            <h3 class="animated-piece">${brand.name}</h3>
            <p class="animated-piece">Contact: ${brand.contact}</p>
            <p class="animated-piece">Criteria: ${brand.criteria}</p>
        `;
        brandGrid.appendChild(slide);
    });

    // Display the slideshow
    collaborationResults.style.display = 'block';

    // Slideshow functionality
          // Slideshow functionality
    let currentIndex = 0;
    const slides = document.querySelectorAll('.brand-slide');
    const prevButton = document.createElement('button');
    const nextButton = document.createElement('button');
    prevButton.textContent = '❮';
    nextButton.textContent = '❯';

    // Function to show the current slide
    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
                slide.style.display = 'flex'; // Show the active slide
                setTimeout(() => {
                    slide.style.opacity = 1; // Fade in effect
                }, 10); // Small timeout to allow the display change to take effect
            } else {
                slide.style.opacity = 0; // Fade out effect
                setTimeout(() => {
                    slide.style.display = 'none'; // Hide non-active slides
                }, 500); // Match this duration with the CSS transition duration
            }
        });
    }

    // Event listeners for navigation buttons
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
        updateButtons();
    });

    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
        updateButtons();
    });

    // Create navigation buttons container
    const navButtons = document.createElement('div');
    navButtons.classList.add('nav-buttons');
    navButtons.appendChild(prevButton);
    navButtons.appendChild(nextButton);
    collaborationResults.appendChild(navButtons);

    // Function to update button states
    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === slides.length - 1;
    }

    // Initialize the slideshow
    showSlide(currentIndex); // Show the first slide
    updateButtons(); // Initialize button states
});