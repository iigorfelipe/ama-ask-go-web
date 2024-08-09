import { apiUrl } from '.';

type CreateMessageReaction = {
  roomId: string;
  messageId: string;
};

export async function createMessageReaction({ roomId, messageId }: CreateMessageReaction) {
  const roomURL = `${apiUrl}/rooms/${roomId}/messages/${messageId}/react`;
  await fetch(roomURL, {
    method: 'PATCH',
  });
}
