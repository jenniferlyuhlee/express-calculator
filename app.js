const express = require('express');
const {getMean, getMedian, getMode, convertAndCheckNumString} = require('./funcs');
const ExpressError = require('./expressError');

const app = express();

// parses request body for JSON data
app.use(express.json())

// mean route
app.get('/mean', (req, res) => {
    try{
        if (!req.query['nums']){
            throw new ExpressError('Numbers are required. Pass a query key of nums with a comma-separated list of numbers.', 400);
        }
            
        const nums = convertAndCheckNumString(req.query['nums'])
        if(nums instanceof Error){
            throw new ExpressError(nums.message, 400)
        }
        foundMean = getMean(nums)
        return res.json({operation: 'mean', value: foundMean})
    }
    catch(e){
        next(e);
    }
})

// median route
app.get('/median', (req, res) => {
    try{
        if (!req.query['nums']){
            throw new ExpressError('Numbers are required. Pass a query key of nums with a comma-separated list of numbers.', 400);
        }
            
        const nums = convertAndCheckNumString(req.query['nums'])
        if(nums instanceof Error){
            throw new ExpressError(nums.message, 400)
        }
        foundMedian = getMedian(nums)
        return res.json({operation: 'median', value: foundMedian})
    }
    catch(e){
        next(e);
    }
})

// mode route
app.get('/mode', (req, res) => {
    try{
        if (!req.query['nums']){
            throw new ExpressError('Numbers are required. Pass a query key of nums with a comma-separated list of numbers.', 400);
        }
            
        const nums = convertAndCheckNumString(req.query['nums'])
        if(nums instanceof Error){
            throw new ExpressError(nums.message, 400)
        }
        foundMode = getMode(nums)
        return res.json({operation: 'mode', value: foundMode})
    }
    catch(e){
        next(e);
    }
})

// Further Study: all route
app.get('/all', (req, res) => {
    const nums = convertAndCheckNumString(req.query['nums'])
    const foundMean = getMean(nums)
    const foundMedian = getMedian(nums)
    const foundMode = getMode(nums)
    return res.json({operation: 'all',
                     mean: foundMean,
                     median: foundMedian, 
                     mode: foundMode})
})

// 404 error handler
app.use((req, res, next) => {
    const err = new ExpressError('Page Not Found', 404)
    next(err);
})

// error handler
app.use((err, req, res, next) => {
    let status = err.status || 500
    let msg = err. msg || 'Internal Server Error'
    return res.status(status).json({error: {msg, status}})
})

// start server
app.listen(3000, () => {
	console.log('App on port 3000');
}) ;

