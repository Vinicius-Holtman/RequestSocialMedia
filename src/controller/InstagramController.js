import fetch from 'node-fetch';

export default {
    async index(req, res){
        try {
            const url = 'http://codefight.davidbanham.com/instagram';
            const result = await fetch(url);
            const instagram = await result.json();
            return res.send({ instagram })
        }
         catch (e) {
            res.send("I am trapped in a social media factory send help")
        }
    }
}