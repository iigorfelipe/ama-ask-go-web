import { useParams } from "react-router-dom"

export const Room = () => {
  const { roomId } = useParams()

  return (
    <h1>Rooom: { roomId }</h1>
  )
}
