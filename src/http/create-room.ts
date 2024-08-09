import { apiUrl } from '.';

type CreateRoomRequest = {
  theme: string;
};

export async function createRoom({ theme }: CreateRoomRequest) {
  const roomURL = `${apiUrl}/rooms`;
  const response = await fetch(roomURL, {
    method: 'POST',
    body: JSON.stringify({
      theme,
    }),
  });

  const data: { id: string } = await response.json();

  return { roomId: data.id };
}
