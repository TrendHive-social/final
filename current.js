document.addEventListener('DOMContentLoaded', () => {
    const currentTrends = [
        { title: 'Christmas Gift Guides', description: 'Curated lists of the best gifts for everyone on your list.', background: 'url("https://example.com/christmas-gifts.jpg")' },
        { title: 'Holiday Recipes', description: 'Trending recipes for Christmas dinners and festive treats.', background: 'url("https://example.com/holiday-recipes.jpg")' },
        { title: 'New Year’s Resolutions', description: 'Popular resolutions for self-improvement and wellness.', background: 'url("https://example.com/new-year-resolutions.jpg")' },
        { title: 'Couple Activities', description: 'Ideas for romantic dates and activities during the holiday season.', background: 'url("https://example.com/couple-activities.jpg")' },
        { title: 'Sustainable Holiday Practices', description: 'Eco-friendly gift wrapping and sustainable decorations.', background: 'url("https://example.com/sustainable-holidays.jpg")' }
    ];

    const futureTrends = [
        { title: 'Valentine’s Day Planning', description: 'Early ideas for romantic gifts and date ideas for couples.', background: 'url("https://example.com/valentines-day.jpg")' },        { title: 'Winter Travel Destinations', description: 'Top places to visit during the winter holidays.', background: 'url("https://example.com/winter-travel.jpg")' },
        { title: 'Health and Fitness Trends', description: 'Emerging fitness trends for the new year, including home workouts.', background: 'url("https://example.com/fitness-trends.jpg")' },
        { title: 'Tech Gifts for 2024', description: 'The latest gadgets and tech gifts expected to be popular in the new year.', background: 'url("https://example.com/tech-gifts.jpg")' },
        { title: 'Couple Wellness Retreats', description: 'Growing interest in wellness retreats for couples to reconnect.', background: 'url("https://example.com/wellness-retreats.jpg")' }
    ];

    const currentTrendContainer = document.getElementById('currentTrendContainer');
    const futureTrendContainer = document.getElementById('futureTrendContainer');

    // Function to display trends
    function displayTrends(trends, container) {
        trends.forEach((trend, index) => {
            const trendDiv = document.createElement('div');
            trendDiv.classList.add('trend');
            trendDiv.style.backgroundImage = trend.background;
            trendDiv.style.backgroundSize = 'cover';
            trendDiv.style.backgroundPosition = 'center';
            trendDiv.innerHTML = `
                <h3>${trend.title}</h3>
                <p>${trend.description}</p>
            `;
            container.appendChild(trendDiv);

            // Add a timeout for animation
            setTimeout(() => {
                trendDiv.classList.add('visible');
            }, index * 300); // Stagger the animations
        });
    }

    // Display current and future trends
    displayTrends(currentTrends, currentTrendContainer);
    displayTrends(futureTrends, futureTrendContainer);
});