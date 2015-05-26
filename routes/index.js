/**
 * Module dependencies
 */
var express = require('express'),
    controllers = require('../controllers');

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
var indexRouter = express.Router();

indexRouter.route('/subscribe')
	.all(controllers.subscribe);
	
/**
 * this accepts all request methods to the `/` path
 */
indexRouter.route('/')
  .all(controllers.index);


exports.indexRouter = indexRouter;
