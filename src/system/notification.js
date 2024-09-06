class CustomNotification {
    constructor(title, options) {
        this.title = title
        this.options = options
        this.init()
    }

    init() {
        if (!('Notification' in window)) {
            console.log('This browser does not support desktop notification')
        } else if (Notification.permission === 'granted') {
            this.show()
        } else if (Notification.permission !== 'denied') {
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    this.show()
                }
            })
        }
    }

    show() {
        const noti = new window.Notification(this.title, this.options)

        noti.onclick = () => {
            console.log('Notification clicked')
            noti.close()
        }

        noti.onshow = () => {
            setTimeout(() => {
                noti.close()
            }, 2000)
        }
    }
}

export default CustomNotification