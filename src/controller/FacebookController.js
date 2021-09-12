import fetch from 'node-fetch';

export default {
    async index(req, res){
        try {
            const url = 'http://codefight.davidbanham.com/facebook';
            const result = await fetch(url);
            const facebook = await result.json();
            return res.send({ facebook })
        }
         catch (e) {
            res.send("I am trapped in a social media factory send help")
        }
    }
}