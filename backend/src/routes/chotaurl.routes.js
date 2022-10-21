const express = require('express')
const router = express.Router()

const crud = require('../database/Urls.CRUD.database')

const { 
    ERROR_CREATION,
    ERROR_INVALID_URL
} = require('../errors/errors')

const  validURL = (str) => {
    console.log(str);
    var pattern = new RegExp('^(https?:\\/\\/)'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    console.log(pattern.test(str));
    return !!pattern.test(str);
}  

router.route('/')
.post(async (req, res) => {
    // create shortened URL depending on the request
    const currURL = req.protocol + '://' + req.get('host') + req.originalUrl

    const data = req.body
    
    const url = data.url
    const flavor = data.flavor

    if(url === undefined || !validURL(url)){
        res.status(400).send(ERROR_INVALID_URL)
        return
    }
    let result = undefined
    if(flavor === undefined)
        result = await crud.insert(url)
    else
        result = await crud.insertCheck(url, flavor)
    
    if(result == undefined)
        res.status(500).json(ERROR_CREATION)
    else{
        data.shortenedURL = currURL + result.endpoint
        data.epoch = result.epoch
        res.json(data)
    }
})


router.route('/:id')
    .get(async (req, res)=>{
        // console.log(req.params.id);
        const service = await crud.findThis(req.params.id)
        if(service == undefined)
            res.status(500).json(ERROR_INVALID_URL)
        else{
            // console.log(service);
            res.redirect(service)
        }
    })

module.exports = router