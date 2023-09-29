import { FirstScreen, SecondScreen } from '@/screens';
import { MAIN_ROUTE } from '@/routes/routes';

// TODO: Add types

export const MAIN_ROUTES = [
  {
    name: MAIN_ROUTE.FIRST_SCREEN,
    component: FirstScreen,
  },
  {
    initialParams: { title: 'Some header text' }, // can be used later with useRoute()
    name: MAIN_ROUTE.SECOND_SCREEN,
    component: SecondScreen,
  },
  // ex: we can create tab navigator with checks based on user role
];
