import express from 'express';
import ListSocialMedia from './controller/ListSocialMediaController.js'
import Twitter from './controller/TwitterController.js'
import Facebook from './controller/FacebookController.js'
import Instagram from './controller/InstagramController.js'

export const routes = express.Router();

routes.get("/", ListSocialMedia.index)
routes.get("/twitter", Twitter.index)
routes.get("/facebook", Facebook.index)
routes.get("/instagram", Instagram.index)
