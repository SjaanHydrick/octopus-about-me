import { countsAsYes , calculatePercent } from './utilsOctopus.js';

const button = document.getElementById("begin-button");

const results = document.getElementById("hiddens");

button.addEventListener('click', () => {
    
    const userName = prompt('What should we call you?');

    const userConfirmed = confirm(`${userName}, are you prepared to take the quiz?`);

    if (!userConfirmed) {
        alert('Read up and come back when you\'re ready!');
        return;
    }

    let correctAnswers = 0;

    const pluralResponse = prompt(`${userName}, is 'octopuses' the plural of octopus?`);

    if (countsAsYes(pluralResponse)) {
    correctAnswers++;
    }

    const venomResponse = prompt(`Is the blue-ringed octopus the only venomous octopus, ${userName}?`);

    if (!countsAsYes(venomResponse)) {
    correctAnswers++;
    }

    const reproductionResponse = prompt(`${userName}, does the male octopus die shortly after mating?`);

    if (countsAsYes(reproductionResponse)) {
    correctAnswers++;
    }

    alert('You\'re all done! Let\'s see how you did...');

    if (correctAnswers === 0){
        results.classList.toggle("hiddenZero");
        results.textContent = "Yikes, you got 0/3. You should re-read and try again. " + calculatePercent(0) + '%';
        
        } else if (correctAnswers === 1){
        results.classList.toggle("hiddenOne");
        results.textContent = "You got 1/3! You're almost to a passing score! Re-read and try again. " + calculatePercent(1) + '%';

        } else if (correctAnswers === 2){
        results.classList.toggle("hiddenTwo");
        results.textContent = "You got 2/3! You're so close to a perfect score! Re-read and try again. " + calculatePercent(2) + '%';

        } else if (correctAnswers === 3){
        results.classList.toggle("hiddenThree");
        results.textContent = "Wow! You got 3/3 right! You really know your stuff! " + calculatePercent(3) + '%';
        }

});

