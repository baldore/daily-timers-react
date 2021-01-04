import type { Timer } from 'types/models'
import axios from 'axios'

export default async function addTimer(timer: Timer): Promise<Timer | boolean> {
  try {
    const response = await axios.post<Timer>('/api/timers', timer)
    return response.data
  } catch (e) {
    return false
  }
}
