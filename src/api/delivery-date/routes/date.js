'use strict';

/**
 * orderproducts router.
 */

module.exports = {
    routes: [
      { // Path defined with a URL parameter
        method: 'GET',
        path: '/dates',
        handler: 'date.find',
        config: {
          auth: false,
        },
      }
    ]
  };