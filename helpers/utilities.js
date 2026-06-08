// dependencies
const crypto = require('crypto');
const environments = require('./environments')

// module scaffolding
const utilities = {};

utilities.parseJSON = (jsonString) => {
    let output;

    try {
        output = JSON.parse(jsonString)
    } catch {
        output = {};
    };

    return output;
}


// hash string
utilities.hash = (str) => {
    if(typeof(str) === 'string' && str.length > 0){
        let hash = crypto.createHmac("sha256", environments.secretKey).update(str).digest('hex');

        return hash;
    } else{
        return false;
    }
}

// create random string
utilities.createRandomString = (strlength) => {
    let length = strlength;
    length = typeof(strlength) === 'number' && strlength > 0 ? strlength: false;

    if(length){
       let possiblecharacters = 'abcdefghijklmnopqrstuvwxyz123456789';
        let output = '';

        for(let i=1; i<= length; i+=1){
            let randomCharacter = possiblecharacters.charAt(Math.floor(Math.random() * possiblecharacters.length)
        );
        output += randomCharacter;
        }
        return output
    }else {
        return false;
    }
}


module.exports = utilities;