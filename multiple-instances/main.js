import TestJS from '@TestJS/core'
import Dashboard from '@TestJS/dashboard'
import GoldenRetriever from '@TestJS/golden-retriever'

import '@TestJS/core/dist/style.css'
import '@TestJS/dashboard/dist/style.css'

// Initialise two TestJS instances with the GoldenRetriever plugin,
// but with different `id`s.
const a = new TestJS({
  id: 'a',
  debug: true,
})
  .use(Dashboard, {
    target: '#a',
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false })

const b = new TestJS({
  id: 'b',
  debug: true,
})
  .use(Dashboard, {
    target: '#b',
    inline: true,
    width: 400,
  })
  .use(GoldenRetriever, { serviceWorker: false })

window.a = a
window.b = b
