import { apiUrl } from '.';

type RemoveMessageReaction = {
  roomId: string;
  messageId: string;
};

export async function removeMessageReaction({
  roomId,
  messageId,
}: RemoveMessageReaction) {
  const roomURL = `${apiUrl}/rooms/${roomId}/messages/${messageId}/react`;
  await fetch(roomURL, {
    method: 'DELETE',
  });
}
