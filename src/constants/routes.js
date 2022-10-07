import Home from 'components/Home/Home';
import About from 'components/About/About';
import { ContactForm, ContactList } from 'components/Contacts/';

const routes = [
  {
    path: '/',
    title: 'Home',
    element: Home,
  },
  {
    path: '/about',
    title: 'About',
    element: About,
  },
  {
    path: '/add',
    title: 'Add Contact',
    element: ContactForm,
  },
  {
    path: '/list',
    title: 'Contact List',
    element: ContactList,
  }
];

export default routes;
