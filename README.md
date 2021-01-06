- Change import statement in "/src/components/index.jsx" to:

import LandingPage from '@components/Landing/LandingPageMui';

to switch to Kendo UI libraray and run "npm run build:analyze" to analyze bundle.

- Change back to:

import LandingPage from '@components/Landing/LandingPage';

to switch back to Material-UI to analyze this library.

- Look at kendo.[hash].bundle.js and material.[hash].bundle.js to see the bundles' size.