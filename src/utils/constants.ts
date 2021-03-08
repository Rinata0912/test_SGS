import image1 from 'images/img-1.jpg';
import image2 from 'images/img-2.jpg';
import image3 from 'images/img-3.jpg';
import image4 from 'images/img-4.jpg';
import image5 from 'images/img-5.jpg';
import image6 from 'images/img-6.jpg';

import avatar1 from 'images/ava-1.jpg';
import avatar2 from 'images/ava-2.jpg';
import avatar3 from 'images/ava-3.jpg';

const NAVIGATION_LIST = [
  {
    name: 'HOME',
  },
  {
    name: 'PORTFOLIO',
  },
  {
    name: 'ABOUT',
  },
  {
    name: 'CONTACT',
  },
];

const FILTER_LIST = [
  {
    name: 'All',
  },
  {
    name: 'WEB DESIGN',
  },
  {
    name: 'GRAPHIC DESIGN',
  },
  {
    name: 'FLAT DESIGN',
  },
];

const PROJECTS = [
  {
    image: image1,
    keyword: 'web design',
  },
  {
    image: image2,
    keyword: 'graphic design',
  },
  {
    image: image3,
    keyword: 'flat design',
  },
  {
    image: image4,
    keyword: 'graphic design',
  },
  {
    image: image5,
    keyword: 'graphic design',
  },
  {
    image: image6,
    keyword: 'flat design',
  },
  {
    image: image1,
    keyword: 'web design',
  },
  {
    image: image2,
    keyword: 'graphic design',
  },
];

const EMPLOYEES = [
  {
    fullName: 'Melannie Doe',
    position: 'Project Manager',
    description: 'Ut wisi enim ad minim veniam, quis nostrud exerci tation',
    avatar: avatar1,
  },
  {
    fullName: 'Jhonnie Doe',
    position: 'Graphic Designer',
    description:
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.',
    avatar: avatar3,
  },
  {
    fullName: 'Daniel Doe',
    position: 'Web Designer',
    description:
      'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo ',
    avatar: avatar2,
  },
];

export { NAVIGATION_LIST, FILTER_LIST, PROJECTS, EMPLOYEES };
