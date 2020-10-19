const mongoose = require('mongoose')
const uri = "mongodb+srv://dbUserEld:dbPwEld@api.dhmrr.gcp.mongodb.net/db-eld?retryWrites=true&w=majority";

// project = eldorado
// cluster-name = api
// username = dbUserEld
// pw = dbPwEld

mongoose.connect(uri,{useNewUrlParser:true,useUnifiedTopology:true},
    err => {
        if (!err)
            console.log('Mongodb connection succeeded.')
        else
            console.log('Error while connecting MongoDB : ' + JSON.stringify(err, undefined, 2))
    })
