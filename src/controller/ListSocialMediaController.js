import fetch from 'node-fetch';

export default {
    async index(req, res){

        const twitter = await fetch('http://codefight.davidbanham.com/twitter').then(async response => {
            try {
                const urlTwitter = await response.json()
                return urlTwitter
            } catch (error) {
                return "I am trapped in a social media factory send help"       
            }
        })

        const facebook = await fetch('http://codefight.davidbanham.com/facebook').then(async response => {
            try {
                const urlFacebook = await response.json()
                return urlFacebook
            } catch (error) {
                return "I am trapped in a social media factory send help"       
            }
        })

        const instagram = await fetch('http://codefight.davidbanham.com/instagram').then(async response => {
            try {
                const urlInstagram = await response.json()
                return urlInstagram
            } catch (error) {
                return "I am trapped in a social media factory send help"       
            }
        })

        return res.json({ twitter, facebook, instagram })
    }
}