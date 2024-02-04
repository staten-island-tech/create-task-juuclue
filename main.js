
function sleepy() {
    const output = [];

    Questions.forEach((daisy, flower) => {
        const answers = [];
        let letter = '';
        for (letter in daisy.options) {
            answers.push(
                `<label>
                    <input type="radio" name="question${flower}" value="${letter}">
                    ${letter}: ${daisy.options[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question">${daisy.question}</div>
            <div class="options">${answers.join('')}</div>`
        );
    });

    SIKE.innerHTML = output.join('');
}
  
  function showResults(){
    const lalas = SIKE.querySelectorAll('.options');
    let bebop = 0;
    Questions.forEach( (daisy, flower) => {
        const lala = lalas[flower];
        const pippi = `input[name=question${flower}]:checked`;
        const sapapapapa = (lala.querySelector(pippi) || {}).value;
    
        if(sapapapapa === daisy.correctAnswer){
            bebop++;
            lalas[flower].style.color = 'lightgreen';
        } else{
            lalas[flower].style.color = 'red';
        }

});
POOP.innerHTML = `${bebop} out of ${Questions.length}`;
}

const SIKE = document.getElementById('quiz');
const POOP = document.getElementById('results');
const soobway = document.getElementById('submit');
const Questions = [
    {
        question: "1. Which term identifies a scalar quantity?",
        options: {
            1: "time",
            2: "momentum",
            3: "velocity",
            4: "displacement"
        },
        correctAnswer: "1" 
    },
    {
        question: "2. Two 20.-newton forces act concurrently on an object. What angle between these forces will produce a resultant force with the greatest magnitude?",
        options: {
            1: "180",
            2: "0",
            3: "45",
            4: "90"
        },
        correctAnswer: "2" 
    },
    {
        question: '3. An 8.0-newton wooden block slides across a horizontal wooden floor at constant velocity. What is the magnitude of the force of kinetic friction between the block and the floor?',
        options: {
            1: "5.0 N",
            2: "2.4 N",
            3: "8.0 N",
            4: "3.0 N"
        },
        correctAnswer: "2" 
    },
    {
        question: "4. A car uses its brakes to stop on a level road. During this process, there must be a conversion of kinetic energy into",
        options: {
            1: "internal energy",
            2: "light energy",
            3: "nuclear energy",
            4: "gravitational energy"
        },
        correctAnswer: "1" 
    },
    {
        question: "5. Which particles are not affected by the strong force?",
        options: {
            1: "neutrons",
            2: "electrons",
            3: "protons",
            4: "hadrons"
        },
        correctAnswer: "2" 
    },
    {
        question: "6. Which particle would produce a magnetic field?",
        options: {
            1: "a stationary charged particle",
            2: "a neutral particle moving in a straight line",
            3: "a moving charged particle",
            4: "a neutral particle moving in a circle"
        },
        correctAnswer: "3" 
    }
];
sleepy();


soobway.addEventListener('click', showResults);