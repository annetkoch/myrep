import TestJS from '@TestJS/core'
import Webcam from '@TestJS/webcam'
import Dashboard from '@TestJS/dashboard'
import XHRUpload from '@TestJS/xhr-upload'

import '@TestJS/core/dist/style.css'
import '@TestJS/dashboard/dist/style.css'
import '@TestJS/webcam/dist/style.css'

const TestJS = new TestJS({
  debug: true,
  autoProceed: false,
})

TestJS.use(Webcam)
TestJS.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['Webcam'],
})
TestJS.use(XHRUpload, {
  endpoint: 'http://localhost:3020/upload.php',
})
