
import express = require('express');
import body_parser = require('body-parser');
import methodOverride = require('method-override')
import isAllNumber from './validations/arrayNumber';
import { sum, subtraction, multiplication, division } from  './service/calculator';


const app: express.Application = express();
app.use(body_parser.urlencoded({extended:true}));
app.use(body_parser.json())
app.use(methodOverride())

app.post('/calculator', function (req, res) {

    let data = JSON.parse(req.body.data);
    let msg : any;
    let dataInfo : any;
    let error : any;

    if(data)
    {
        if(isAllNumber(data)){
            let suma = sum(data);
            let resta = subtraction(data);
            let multi= multiplication(data);
            let div = division(data);
            dataInfo = {
                "data": {
                    "suma": suma,
                    "resta": resta,
                    "multiplicacion": multi,
                    "divicion": div
                }
            };
            error = "";
        }
        else
        {
            dataInfo = "";
            error = ['invalid_data_format'];
        }
    }else{
        dataInfo = "";
        error = ['[‘internal_server_error’]'];
    }

    msg = {
        "response": {
            "data": dataInfo,
            "error": error
        }
    };

    res.send(msg);
});
  


app.listen(6677, function () {
    console.log('servidor esta funcionando en http://localhost:6677');
});