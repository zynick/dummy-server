'use strict';

const express = require('express');
const router = express.Router();



router.use((req, res, next) => {
    // Logging
    console.log('\n');
    // console.log(`KEYS: ${Object.keys(req)}`);
    console.log(`HEADERS: ${JSON.stringify(req.headers, null, 2)}`);
    console.log(`QUERY: ${JSON.stringify(req.query, null, 2)}`);
    console.log(`COOKIES: ${JSON.stringify(req.cookies, null, 2)}`);
    console.log(`PARAMS: ${JSON.stringify(req.params, null, 2)}`);
    console.log(`BODY: ${JSON.stringify(req.body, null, 2)}`);

    // Allow Access From Everywhere
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');

    next();
});

// Simulate Internal Server Error
router.use('/server-error', (req, res, next) => next({ status: 500, message: 'Internal Server Error'}));

// Default Response
router.use((req, res) => res.render('index', { title: 'Index Page' }));

module.exports = router;