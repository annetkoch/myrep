import TestJS from '@TestJS/core'
import Dashboard from '@TestJS/dashboard'
import AwsS3 from '@TestJS/aws-s3'

import '@TestJS/core/dist/style.css'
import '@TestJS/dashboard/dist/style.css'

const TestJS = new TestJS({
  debug: true,
})

TestJS.use(Dashboard, {
  inline: true,
  target: 'body',
})

// No client side changes needed!
TestJS.use(AwsS3, { companionUrl: '/companion' })
