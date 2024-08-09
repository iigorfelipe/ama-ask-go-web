import { QueryClientProvider } from '@tanstack/react-query';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';
import { querryClient } from './lib/react-query';
import { CreateRoom } from './pages/create-room';
import { Room } from './pages/room';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <CreateRoom />,
  },
  {
    path: '/room/:roomId',
    element: <Room />,
  },
]);

export function App() {
  return (
    <QueryClientProvider client={querryClient}>
      <RouterProvider router={router} />
      <Toaster invert richColors />
    </QueryClientProvider>
  );
}
