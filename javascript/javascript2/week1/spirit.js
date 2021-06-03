const spiritAnimal = ['The crying butterfly',
  'The fullmoon wolf',
  'The Sharp Shark',
  'The Cute Rhino',
  'The Squeeky Snake',
  'The Baby Roar',
  'The Day Bat',
  'The Cheeky Monkey',
  'The Breezy Bee',
  'The Fake Fox'
]


function spiritNamesGenerator(name) {
  return `${name} - ${spiritAnimal [parseInt(Math.random()*10)]}`
}

function clickButtons() {
  const getName = document.getElementById('name').value;
  if (getName !== '') {
    spiritName.innerHTML = spiritNamesGenerator(getName);
  } else {
    spiritName.innerHTML = 'Please write a name';
  }
}

function mouseOver() {
  const getName = document.getElementById('name').value;
  if (getName !== '') {
    spiritName.innerHTML = spiritNamesGenerator(getName);
  } else {
    spiritName.innerHTML = 'Please provide a name';
  }

}

const clickButton = document.querySelector('.clickbutton')
const hoverButton = document.querySelector('.hoverbutton');
const spiritName = document.querySelector('h2');

clickButton.addEventListener('click', clickButtons)
hoverButton.addEventListener('click', mouseOver)
