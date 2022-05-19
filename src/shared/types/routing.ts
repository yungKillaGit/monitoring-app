import { ReactNode } from 'react';

export interface RouteConfig {
  path: string;
  element: ReactNode;
  title?: string;
}
