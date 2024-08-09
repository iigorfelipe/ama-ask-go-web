import { apiUrl } from '.';

type CreateMessage = {
  roomId: string;
  message: string;
};

export async function createMessage({ roomId, message }: CreateMessage) {
  const roomURL = `${apiUrl}/rooms/${roomId}/messages`;
  const response = await fetch(roomURL, {
    method: 'POST',
    body: JSON.stringify({
      message,
    }),
  });

  const data: { id: string } = await response.json();

  return { messageId: data.id };
}
