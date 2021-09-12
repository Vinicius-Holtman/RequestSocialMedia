export default {
    async index(){
        var url = 'https://api.darksky.net/forecast/<API KEY>/37.8267,-122.4233';
     
        fetch(url)
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        })
        .catch(err => {
            res.send("I am trapped in a social media factory send help");
        });
    }
}