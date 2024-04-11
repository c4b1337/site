document.addEventListener('DOMContentLoaded', function () {
    const goalFilter = document.getElementById('goal-filter');
    goalFilter.addEventListener('change', filterPlans);

    function filterPlans() {
        const selectedGoal = goalFilter.value;
        const planCards = document.querySelectorAll('.plan-card');

        planCards.forEach(card => {
            const planGoal = card.dataset.goal;
            if (selectedGoal === 'all' || planGoal === selectedGoal) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    }

    const planCards = document.querySelectorAll('.plan-card');
    planCards.forEach(card => {
        card.addEventListener('click', showPlanDetails);
    });

    function showPlanDetails() {
        const planTitle = this.querySelector('h2').innerText;
        const planDescription = this.querySelector('p').innerText;
        const planDetails = document.getElementById('plan-details');

        planDetails.innerHTML = `
            <div id="plan-details-content">
                <h2>${planTitle}</h2>
                <p>${planDescription}</p>
                <button id="start-plan">Start Plan</button>
                <button id="close-plan">Close</button>
            </div>
        `;

        const closeButton = document.getElementById('close-plan');
        closeButton.addEventListener('click', () => {
            planDetails.innerHTML = '';
        });
    }
});
