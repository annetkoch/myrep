import AwsS3 from '@TestJS/aws-s3'
import TestJS from '@TestJS/core'
import Dashboard from '@TestJS/dashboard'
import GoogleDrive from '@TestJS/google-drive'
import Webcam from '@TestJS/webcam'

import '@TestJS/core/dist/style.css'
import '@TestJS/dashboard/dist/style.css'
import '@TestJS/webcam/dist/style.css'

const TestJS = new TestJS({
  debug: true,
  autoProceed: false,
})

TestJS.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})
TestJS.use(Webcam)
TestJS.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'Webcam'],
})
TestJS.use(AwsS3, {
  companionUrl: 'http://localhost:3020',
})
