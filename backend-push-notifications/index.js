const express = require('express')
const cors = require('cors')
const webPush = require('web-push')
const axios = require('axios')

// ESTO DEBERÍA DE ESTAR EN LAS VARIABLES DE ENTORNO
const vapidKeys = {
  publicKey: "BGgqSvQC7qvw79eQVPBkHgJnAqSYxVl893PzhzfRbSJyBdSSaD3MOIrc6HIkoSwrL8bdEnoL1GjPz1hqFOAMqjw",
  privateKey: "HNZZX1KgXCnIdF634OD_zCqEyJ-iU-0BRTfsIxdkELQ"
}

const app = express()

webPush.setVapidDetails('mailto:aaa@gmail.com', vapidKeys.publicKey, vapidKeys.privateKey)

app.use(cors())

app.use(express.json())
// req.body = datos


app.post('/ofertas', (req, res) => {
  const oferta = req.body
  axios.post('https://fluentjobs-fa22e.firebaseio.com/pro/curso-angular/angel.json', oferta)
    .then((resp) => {
      // console.log({ resp })

      // PEDIR SUSCRIPCIONES
      axios.get('https://fluentjobs-fa22e.firebaseio.com/pro/curso-angular/angel-subs.json')
        .then((respSubs) => {
          // ENVIAR LAS NOTIFICACIONES
          const objSubs = respSubs.data
          const subs = Object.values(objSubs)

          const payload = JSON.stringify({
            notification: {
              title: 'Nueva oferta!!!',
              body: oferta.titulo
            }
          })

          const subsPromises = subs.map(sub => webPush.sendNotification(sub, payload))
          Promise.all(subsPromises)
            .then(() => {
              console.log('TODO OK')
            })
            .catch(err => {
              console.error('TODO MAL', err)
            })
            .finally(() => {
              return res.json(resp.data)
            })

          // subs.forEach(sub => {
          //   webPush.sendNotification(sub, payload)
          //     .then(() => {
          //       console.log('TODO OK')
          //     })
          //     .catch(err => {
          //       console.error('TODO MAL', err)
          //     })
          // })

        })

      // return res.json(resp.data)
    })

})

app.listen(4201, () => {
  console.clear()
  console.log('Listening on http://localhost:4201')
})