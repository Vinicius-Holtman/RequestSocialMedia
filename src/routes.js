import express from 'express';
import ListSocialMedia from './controller/ListSocialMediaController.js'

export const routes = express.Router();

routes.get("/", ListSocialMedia.index)