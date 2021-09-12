import express from 'express';
import ListSocialMedia from './ListSocialMedia.js'
import Twitter from './Twitter.js'
import Facebook from './Facebook.js'
import Instagram from './Instagram.js'

export const routes = express.Router();

routes.get("/", ListSocialMedia.index)
routes.get("/twitter", Twitter.index)
routes.get("/facebook", Facebook.index)
routes.get("/instagram", Instagram.index)
