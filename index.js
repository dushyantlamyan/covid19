const express = require('express');
const app = express();
const diff = require('dialogflow-fulfillment');

app.get('/', (req,res) =>{
    res.send("we are live")
});


app.post('/', express.json(), (req,res) =>{
    const agent = new diff.WebhookClient({
        request : req,
        response : res
    })

    function getCovidByCountry(agent){
        agent.add("send response from webhook");
    }

    var intentMap = new Map();
    intentMap.set('webhookdemo', getCovidByCountry);
    agent.handleRequest(intentMap);

});

app.listen(3333, () => console.log("server is listening on 3333"));