const mobileMenuOpen = document.querySelector('.mobile-hamburger-btn');
const mobileMenuClose = document.querySelector('.mobile-close-btn');
const projects = [
  {
    name: 'World Football Global Summit 2020',
    technologies: ['HTML5', 'CSS3', 'JavaScript'],
    featuredImage: 'World-Football-Global-Summit.png',
    description:
      'An online website for a world football global summit conference. Designed by the guidelines provided by the Microverse (Cindy Shin Design).',
    liveLink: 'https://darikmohammed.github.io/world-football-summit/',
    linkSource: 'https://github.com/darikmohammed/world-football-summit',
  },
  {
    name: 'To-do List',
    technologies: ['HTML5', 'Github', 'JavaScript', 'CSS3', 'Webpack'],
    featuredImage: 'ToDo-List.png',
    description:
      'To-do list is a tool that helps to organize your day. It simply lists the things that you need to do and allows you to mark them as complete. A simple website that allows user to create a To-do list.',
    liveLink: 'https://darikmohammed.github.io/TodoList-Webpack/',
    linkSource: 'https://github.com/darikmohammed/TodoList-Webpack',
  },
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    linkSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    linkSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    linkSource: '#',
  },
  {
    name: 'Keeping track of hundreds of components',
    technologies: ['Codekit', 'Github', 'JavaScript'],
    featuredImage: 'Portfolio1.png',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    liveLink: '#',
    linkSource: '#',
  },
];

mobileMenuOpen.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'none';
  document.querySelector('.mobile-menu-btn').style.display = 'none';
  document.querySelector('.desktop-nav').style.display = 'flex';
});

mobileMenuClose.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'block';
  document.querySelector('.mobile-menu-btn').style.display = 'block';
  document.querySelector('.desktop-nav').style.display = 'none';
});

const menuListItems = document.querySelector('.animate');

menuListItems.addEventListener('click', () => {
  document.querySelector('.logo').style.display = 'block';
  document.querySelector('.mobile-menu-btn').style.display = 'block';
  document.querySelector('.desktop-nav').style.display = 'none';
  window.location.reload();
});

// popup modal
// create work cards

function generateWorkCard() {
  projects.forEach((project, index) => {
    let technology = '';
    project.technologies.forEach((tech) => {
      technology += `<li>${tech}</li>`;
    });
    document.querySelector('.work-cards').innerHTML += `
    <div class="card">
      <div class="project-img">
        <img src="./icons/Projects/${project.featuredImage}" alt="project card" />
      </div>
      <div class="card-text">
        <h3>${project.name}</h3>
        <ul class="work-catagories">
                ${technology}
        </ul>
        <button type="button" data-index="${index}" class="btn popup-window">See Project</button>
      </div>
    </div>
    `;
  });
}

generateWorkCard();

// Popup modals.
const popupModals = document.querySelectorAll('.popup-window');
const closeModal = document.querySelector('.close-modal-btn');
function openModal(element) {
  const projectIndex = element.dataset.index;
  document.querySelector('.modal-header').textContent =
    projects[projectIndex].name;
  document
    .querySelector('.modal-project-image')
    .setAttribute(
      'src',
      `./icons/Projects/${projects[projectIndex].featuredImage}`
    );
  document
    .querySelector('.modal-project-image')
    .setAttribute('alt', `${projects[projectIndex].name}`);
  document
    .querySelector('.moblie-see-live-btn')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.moblie-see-source-btn')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  document
    .querySelector('.desktop-see-live-btn')
    .setAttribute('href', `${projects[projectIndex].liveLink}`);
  document
    .querySelector('.desktop-see-source-btn')
    .setAttribute('href', `${projects[projectIndex].linkSource}`);
  let technology = '';
  projects[projectIndex].technologies.forEach((tech) => {
    technology += `<div class="tag">${tech}</div>`;
  });
  document.querySelector('.project-codekit .tags').innerHTML = technology;
  document.querySelector('.modal-project-description').textContent =
    projects[projectIndex].description;
  document.querySelector('.modal').style.display = 'flex';
}

popupModals.forEach((modal) => [
  modal.addEventListener('click', () => {
    openModal(modal);
  }),
]);
closeModal.addEventListener('click', () => {
  document.querySelector('.modal').style.display = 'none';
});

// email validate
const form = document.querySelector('#contact-form');
const errorEmail = document.querySelector('#email_error');
function validateEmail(input) {
  const emailRegex = /^[a-z_\-0-9.*#$!~%^&-+?|]+@+[a-z\-0-9]+(.com)$/gm;
  return emailRegex.test(input);
}
form.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail(form.elements.email.value);
  // if valid email
  if (!emailValid) {
    // send error
    errorEmail.style.display = 'block';
  } else {
    errorEmail.style.display = 'none';
    form.submit();
    localStorage.removeItem('data');
  }
});

// localStorage
form.addEventListener('keyup', () => {
  const data = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };
  localStorage.setItem('data', JSON.stringify(data));
});

function getData() {
  const data = JSON.parse(localStorage.getItem('data'));

  if (data) {
    document.getElementById('name').value = data.name;
    document.getElementById('email').value = data.email;
    document.getElementById('message').value = data.message;
  }
}
getData();
