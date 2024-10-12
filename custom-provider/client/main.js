import TestJS from '@TestJS/core'
import GoogleDrive from '@TestJS/google-drive'
import Tus from '@TestJS/tus'
import Dashboard from '@TestJS/dashboard'
import MyCustomProvider from './MyCustomProvider.jsx'

import '@TestJS/core/dist/style.css'
import '@TestJS/dashboard/dist/style.css'

const TestJS = new TestJS({
  debug: true,
})

TestJS.use(GoogleDrive, {
  companionUrl: 'http://localhost:3020',
})

TestJS.use(MyCustomProvider, {
  companionUrl: 'http://localhost:3020',
})

TestJS.use(Dashboard, {
  inline: true,
  target: 'body',
  plugins: ['GoogleDrive', 'MyCustomProvider'],
})

TestJS.use(Tus, { endpoint: 'https://tusd.tusdemo.net/files/' })
