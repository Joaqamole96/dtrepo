const generateBtn = document.getElementById('generate-btn');
const revealBtn = document.getElementById('reveal-btn');
const cardTitle = document.getElementById('card-title');
const contentSetup = document.getElementById('content-setup');
const contentPunchline = document.getElementById('content-punchline');
const submissionForm = document.getElementById('submission-form');
const submitMessage = document.getElementById('submit-message');
const itemNumberSpan = document.getElementById('item-number');

let currentItem = null;

function generateContent() {
    const randomIndex = Math.floor(Math.random() * JOKE_TRIVIA_DATA.length);
    currentItem = JOKE_TRIVIA_DATA[randomIndex];

    contentPunchline.classList.add('hidden');
    revealBtn.classList.remove('hidden');

    const itemIndex = JOKE_TRIVIA_DATA.indexOf(currentItem);
    itemNumberSpan.textContent = `#${itemIndex + 1}`;

    const category = currentItem.category;
    let titleText = '';
    let revealBtnText = 'Reveal Answer';

    if (category === 'joke') {
        titleText = 'A New Joke!';
        revealBtnText = 'Reveal Punchline';
    } else if (category === 'riddle') {
        titleText = 'Riddle Time!';
    } else if (category === 'philippine history') {
        titleText = 'Philippine History Fact';
    } else if (category === 'engineering') {
        titleText = 'Structural Engineering Trivia';
    } else {
        const capitalizedCategory = category.replace(/\b\w/g, char => char.toUpperCase());
        titleText = `${capitalizedCategory} Trivia`;
    }

    cardTitle.textContent = titleText;
    contentSetup.textContent = currentItem.question;
    contentPunchline.textContent = currentItem.answer;
    revealBtn.textContent = revealBtnText;
}

function revealContent() {
    contentPunchline.classList.remove('hidden');
    revealBtn.classList.add('hidden');
}

function handleSubmission(event) {
    event.preventDefault();

    const category = document.getElementById('input-category').value;
    const question = document.getElementById('input-question').value.trim();
    const answer = document.getElementById('input-answer').value.trim();

    if (question && answer) {
        const newItem = {
            category: category,
            question: question,
            answer: answer
        };

        JOKE_TRIVIA_DATA.push(newItem);
        
        submitMessage.textContent = 'Submission successful! Try generating it now.';
        submitMessage.classList.remove('hidden');
        submissionForm.reset();
        
        setTimeout(() => {
            submitMessage.classList.add('hidden');
        }, 5000);
    }
}

generateBtn.addEventListener('click', generateContent);
revealBtn.addEventListener('click', revealContent);
submissionForm.addEventListener('submit', handleSubmission);



generateContent();