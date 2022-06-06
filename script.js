'use strict';

const namePlaceholder = document.querySelector('.contact-info__header');
const currentPositionPlaceholder = document.querySelector(
  '.contact-info__sub-header'
);

const locationPlaceholder = document
  .getElementById('location')
  .querySelector('span');
const linkedInHrefPlaceholder = document.getElementById('linkedin');
const linkedInAccNamePlaceholder =
  linkedInHrefPlaceholder.querySelector('span');

const emailHrefPlaceholder = document.getElementById('email');
const emailNamePlaceholder = emailHrefPlaceholder.querySelector('span');
const phoneNumberHrefPlaceholder = document.getElementById('telephone');
const phoneNumberPlaceholder = phoneNumberHrefPlaceholder.querySelector('span');
const instagramHrefPlaceholder = document.getElementById('instagram');

const avatarPlaceholder = document.querySelector('.contact-info__avatar');

const introPlaceholder = document.querySelector('.intro_text');

const timelinePlaceholder = document.querySelector('.timeline__content');

const skillsListPlaceholder = document.querySelector('.skills__text');
const experiencesContainer = document.querySelector('.experiences');

const universityNamePlaceholder = document.querySelector(
  '.additional-info__education-university-name'
);
const universitySpecialityPlaceholder = document.querySelector(
  '.additional-info__education-university-speciality'
);
const universityDurabilityPlaceholder = document.querySelector(
  '.additional-info__education-university-durability'
);

const languagesPlaceholder = document.querySelector(
  '.additional-info__languages'
);

const currentYear = new Date().getFullYear();
const yearInMs = 3.15576e10;
const getAge = (birthDate) =>
  Math.floor((new Date() - new Date(birthDate).getTime()) / yearInMs);
//
const displayTimeline = function (timeline) {
  timelinePlaceholder.innerHTML = '';

  Object.entries(timeline).forEach(([year, fact]) => {
    const html = `<li data-year="${year}" data-text="${fact}"></li>\n`;
    timelinePlaceholder.insertAdjacentHTML('beforeend', html);
  });
};
//
const displayExperiences = function (experiences) {
  experiencesContainer.innerHTML = '';

  experiences.forEach(function (el) {
    const responsibilities = el[2].reduce(function (html, item) {
      html += '<li>' + item + '</li>';
      return html;
    }, '');

    const html = `
      <div class="experiences__company">
        <div class="experiences__company-header">
          <span class="experiences__company-header-durability"
            >${el[3]}</span
          >
          <h3 class="experiences__company-header-name">
            ${el[0]}
          </h3>
        </div>
  
        <div class="experiences__company-project">
          <span class="experiences__company-project-role"
            >${el[1]}</span
          >
          <ul class="experiences__company-project-responsibilities">
            ${responsibilities}
          </ul>
        </div>
      </div>
        `;
    experiencesContainer.insertAdjacentHTML('beforeend', html);
  });
  experiencesContainer.insertAdjacentHTML(
    'afterbegin',
    '<h3 class="experiences__header">Experience</h3>'
  );
};

const displayLanguages = function (langs) {
  languagesPlaceholder.innerHTML = '';

  langs.forEach(function (el) {
    const html = `<p class="additional-info__languages-item">${el}</p>`;

    languagesPlaceholder.insertAdjacentHTML('afterbegin', html);
  });
  languagesPlaceholder.insertAdjacentHTML(
    'afterbegin',
    '<h3 class="additional-info__languages-header">Languages</h3>'
  );
};

// Place for esater egg

const mitya = {
  firstName: 'Dmytro',
  lastName: 'Kuznetsov',
  dateOfBirth: '1992-03-18',
  dob: this.dateOfBirth,
  location: 'Kharkiv, Ukraine',
  currentPosition: 'JS student applicant',
  linkedIn: 'https://www.linkedin.com/in/kuznetsov-dmitry-foctuba/',
  instagram: 'https://www.instagram.com/mitya_ku/',
  tel: '+38 (099) 359-1857',
  email: 'mityakuznetsoff@gmail.com',
  timeline: {
    1992: 'Birth',
    1999: 'First day at school',
    2001: 'First time at sea',
    2011: "Got the driver's license",
    2012: 'UEFA volunteering for Euro 2012',
    2013: 'First active urban quest',
    2016: 'Founded my first own business',
    2018: 'My first plane flight',
    2019: 'Bought my first car',
    2021: 'Married the girl of my dreams',
    2022: 'I saw the war as it is',
  },
  skills: [
    'Developing IoT stuff',
    'Telegram bots coding',
    'WordPress & PHP',
    'PCB developing',
    'Performing electrinics repair',
    'Closing sales',
    'Written and verbal communication',
    'Automation of routine processes',
    'Bash scripting',
  ],
  jobExperience: [
    [
      '3GStar online store',
      'Technical dept officer',
      [
        'Technical support',
        'Equipment programming',
        'Performing equipment repair',
      ],
      '2012-2014',
    ],
    [
      'Etalon-Prylad Ltd',
      'Technical dept & Sales',
      ['Technical support', 'Sales', 'Performing equipment repair'],
      '2014-2018',
    ],
    [
      'Standard-Pribor online store',
      'Founder',
      ['Sales', 'Equipment programming', 'Maintaining the online store'],
      '2016-2018',
    ],
    [
      'FOC TUBA LTD',
      'Sales & Marketing',
      ['Sales', 'Business events menegement', 'Maintaining the website'],
      `2018-${currentYear}`,
    ],
  ],
  education: [
    'KHARKIV NATIONAL UNIVERSITY OF RADIO ELECTRONICS',
    'SOFTWARE ENGINEERING',
    '2013-2018',
  ],
  languages: ['Ukrainian (native)', 'Russian (native), English (intermediate)'],

  init: function () {
    this.age = getAge(this.dateOfBirth);
    this.intro = `Hello! My name is Dmytro, I'm ${this.age}-years old guy, I was born and live in Kharkiv. Like Bulka, I have 7 lives, two spent since February 24. I work in sales at the modern production of packaging. I love "behind the scenes" work, travel, repair equipment. EN-quest addicted`;
    delete this.init;
    return this;
  },
}.init();

namePlaceholder.textContent = `${mitya.firstName} ${mitya.lastName}`;
currentPositionPlaceholder.textContent = mitya.currentPosition;

locationPlaceholder.textContent = mitya.location;
linkedInHrefPlaceholder.href = mitya.linkedIn;
linkedInAccNamePlaceholder.textContent = `${mitya.firstName} ${mitya.lastName}`;

emailHrefPlaceholder.href = `mailto:${mitya.email}?subject=Job offer!`;
emailNamePlaceholder.textContent = mitya.email;
phoneNumberHrefPlaceholder.href = `tel:${mitya.tel.replace(/[() -]/g, '')}`;
phoneNumberPlaceholder.textContent = mitya.tel;
instagramHrefPlaceholder.href = mitya.instagram;

avatarPlaceholder.src = `assets/${mitya.lastName.toLowerCase()}-min.png`;

introPlaceholder.textContent = mitya.intro;

displayTimeline(mitya.timeline);

skillsListPlaceholder.textContent = mitya.skills.join(', ');

displayExperiences(mitya.jobExperience);

displayLanguages(mitya.languages);

universityNamePlaceholder.textContent = mitya.education[0]
  .toLowerCase()
  .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
universitySpecialityPlaceholder.textContent = mitya.education[1]
  .toLowerCase()
  .replace(/(^\w{1})|(\s+\w{1})/g, (letter) => letter.toUpperCase());
universityDurabilityPlaceholder.textContent = mitya.education[2];
