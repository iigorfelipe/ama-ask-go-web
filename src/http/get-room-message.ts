import { apiUrl } from '.';

type GetRoomMessageRequest = {
  roomId: string;
};

export type GetRoomMessageResponse = {
  messages: {
    id: string;
    text: string;
    amountOfReactions: number;
    answered: boolean;
  }[];
};

export async function getRoomMessages({
  roomId,
}: GetRoomMessageRequest): Promise<GetRoomMessageResponse> {
  const roomURL = `${apiUrl}/rooms/${roomId}/messages`;
  const response = await fetch(roomURL);

  const data: Array<{
    id: string;
    room_id: string;
    message: string;
    reaction_count: number;
    answered: boolean;
  }> = await response.json();

  return {
    messages: data.map((item) => {
      return {
        id: item.id,
        text: item.message,
        amountOfReactions: item.reaction_count,
        answered: item.answered,
      };
    }),
  };
}
