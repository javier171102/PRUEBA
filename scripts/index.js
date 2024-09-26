let currentActiveButton = null;

const updateButtonClasses = (button) => {
    button.classList.toggle('text-info', true);
    button.classList.toggle('text-light', false);
};

const loadWeek = async (week, button) => {
    if (currentActiveButton && currentActiveButton !== button) {
        updateButtonClasses(currentActiveButton);
    }

    updateButtonClasses(button);

    currentActiveButton = button;

    try {
        const response = await fetch(week);
        const data = await response.text();
        document.getElementById('week-container').innerHTML = data;
    } catch (error) {
        console.error('Error loading the content:', error);
        document.getElementById('week-container').innerHTML = '<p class="text-danger">Error loading content. Please try again later.</p>';
    }
};
