type Time = {
  hours: string
  minutes: string
  seconds: string
}

export function secondsToTime(seconds: number): Time {
  let hh = 0
  let mm = 0
  let ss = seconds

  while (ss >= 60) {
    ss -= 60
    mm += 1
    if (mm >= 60) {
      mm = 0
      hh += 1
    }
  }

  return {
    hours: hh.toString().padStart(2, '0'),
    minutes: mm.toString().padStart(2, '0'),
    seconds: ss.toString().padStart(2, '0'),
  }
}
