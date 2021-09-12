import Twitter from './TwitterController.js'
import Facebook from './FacebookController.js'
import Instagram from './InstagramController.js'

export default {
    async index(req, res){
        const twitter = await Twitter.index
        const facebook = await Facebook.index
        const instagram = await Instagram.index
    
        return res.json({ twitter, facebook, instagram })
    }
}