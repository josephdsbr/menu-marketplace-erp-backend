class ApplicationMessage {
  code: number
  message: string

  constructor(message: string) {
    const splitted = message.split('#')
    this.code = parseInt(splitted[0])
    this.message = splitted[1]
  }
}
