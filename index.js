document.addEventListener('DOMContentLoaded', () => {
    const quiz = [
       {
        question: 'What is the capital of India?',
        a: 'Hyderabad',
        b: 'Mumbai',
        c: 'America',
        d: 'Delhi',
        correct: 'd'
       },
       {
        question: 'What is the most used programming language in 2024?',
        a: 'Python',
        b: 'Cpp', 
        c: 'Java',
        d: 'Javascript',
        correct: 'a'
       },
       {
        question: 'What is the largest planet in our solar system?', 
        a: 'Earth',
        b: 'Saturn',
        c: 'Jupiter',
        d: 'Uranus',
        correct: 'c'
       },
       {
        question: 'What is the largest country in the world?',  
        a: 'USA',
        b: 'China',
        c: 'Russia',
        d: 'India',
        correct: 'c'
       },
       {
        question: 'What is the largest city in the world?',
        a: 'Tokyo',
        b: 'Delhi',
        c: 'Mumbai',
        d: 'New York',
        correct: 'a'
       },
       {
        question: 'What is the largest river in the world?',
        a: 'Amazon',
        b: 'Nile',
        c: 'Ganges',
        d: 'Tigris',
        correct: 'a'
       }
    ];

    let current = 0;
    let score = 0;

    const quizContainer = document.querySelector('.quiz-container');
    const questionEl = document.querySelector('.quiz-header h2');
    const answersEls = document.querySelectorAll('input[name="answer"]');
    const labels = document.querySelectorAll('.quiz-header ul li label');
    const submitBtn = document.querySelector('button');

    loadQuiz();

    function loadQuiz() {
        console.log('Labels length:', labels.length);
        deselectAnswers();
        const currentQuiz = quiz[current];
        questionEl.innerText = currentQuiz.question;
        labels[0].innerText = currentQuiz.a;
        labels[1].innerText = currentQuiz.b;
        labels[2].innerText = currentQuiz.c;
        labels[3].innerText = currentQuiz.d;
    }

    function deselectAnswers() {
        answersEls.forEach(answerEl => answerEl.checked = false);
    }

    function getSelected() {
        let answer = undefined;
        answersEls.forEach(answerEl => {
            if(answerEl.checked) {
                answer = answerEl.id;
            }
        });
        return answer;
    }

    submitBtn.addEventListener('click', () => {
        const answer = getSelected();
        if(answer) {
            if(answer === quiz[current].correct) {
                score++;
            }
            current++;
            if(current < quiz.length) {
                loadQuiz();
            } else {
                quizContainer.innerHTML = `
                    <h2>You answered correctly at ${score}/${quiz.length} questions.</h2>
                    <button onclick="location.reload()">Reload</button>
                `;
            }
        }
    });
});
