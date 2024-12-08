export default class useAI {
    constructor(options = {}) {
        this.options = options
        this.socket = null
        this.isConnected = false
    }

    createConnection(url) {
        return new Promise((resolve, reject) => {
            if (this.socket) {
                this.closeConnection()
            }

            this.socket = new WebSocket(url)

            this.socket.addEventListener('open', event => {
                console.log('connect opened')
                this.isConnected = true
                this.onMessage()
                resolve(event)
            })

            this.socket.addEventListener('error', event => {
                console.log('connect error', event)
                // 连接成功，但发送失败
                if (this.isConnected) {
                    this.options.onmessage(event)
                    return
                }

                reject(event)
            })

            this.socket.addEventListener('close', () => {
                this.socket = null
                this.isConnected = false
                console.log('connect closed', this.isConnected)
            })
        })
    }

    sendMessage(data) {
        console.log('send message', data)
        if (this.isConnected) {
            this.socket.send(data)
        } else {
            this.options.onmessage({ code: -1 })
        }
    }

    onMessage() {
        this.socket.addEventListener('message', res => {
            console.log('receive message', res)
            this.options.onmessage(res)
        })
    }

    closeConnection() {
        if (this.isConnected) {
            this.socket.close()
        }
    }
}
