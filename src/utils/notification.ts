const promptAudio = '/assets/audio/prompt.mp3'

export function notify(): void {
  if (Notification.permission !== 'granted') {
    return
  }

  const notification = new Notification('Finished timer: <label>', {
    body: 'ujuuuu',
    actions: [],
  })

  notification.onclick = function (e) {
    e.preventDefault()
    window.focus()
    notification.close()
  }

  const audio = new Audio(promptAudio)
  audio.play()
}
