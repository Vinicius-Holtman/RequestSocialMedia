import fetch from 'node-fetch';

export default {
    async index(req, res){
        try {
            const url = 'http://codefight.davidbanham.com/twitter';
            const result = await fetch(url);
            const twitter = await result.json();
            return res.send({ twitter })
        }
         catch (e) {
            res.send("I am trapped in a social media factory send help")
        }
    }
}