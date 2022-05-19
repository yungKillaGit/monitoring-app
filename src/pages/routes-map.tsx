import loadable from '@loadable/component';

const ApplicationsPage = loadable(() => import('./applications/ApplicationsPage'));
const HostPage = loadable(() => import('./host'));
const NotificationsPage = loadable(() => import('./notifications'));

export const routesMap = {
  host: {
    path: '/',
    element: <HostPage />,
    title: 'Хост',
  },
  applications: {
    path: '/applications',
    element: <ApplicationsPage />,
    title: 'Приложения',
  },
  notifications: {
    path: '/notifications',
    element: <NotificationsPage />,
    title: 'Уведомления',
  },
};
