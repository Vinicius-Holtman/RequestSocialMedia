import fetch from 'node-fetch';

export default {
    async index(req, res){
            const urlTwitter = 'http://codefight.davidbanham.com/twitter';
            const resultTwitter = await fetch(urlTwitter);
            const twitter = await resultTwitter.json()
            
            const urlFacebook = 'http://codefight.davidbanham.com/facebook';
            const resultFacebook = await fetch(urlFacebook);
            const facebook = await resultFacebook.json()

            const urlInstagram = 'http://codefight.davidbanham.com/instagram';
            const resultInstagram = await fetch(urlInstagram);
            const instagram = await resultInstagram.json()

            return res.send({twitter, facebook, instagram})

    }
}