import fetch from 'node-fetch';

export default {
    async index(req, res){
        var url = 'http://codefight.davidbanham.com/twitter';
     
        fetch(url)
        .then(res => res.json())
        .then(twitter => {
            res.send({ twitter });
        })
        .catch(err => {
            res.send("I am trapped in a social media factory send help");
        });
    }
}