
import express = require('express');
import arrayNumber  = require('./validations/arrayNumber');
import calculator = require('./service/calculator');
import body_parser = require('body-parser');

const app: express.Application = express();
app.use(body_parser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    let data = [2,5,6,8];
    let isNUmber = arrayNumber.isAllNumber(data);
    res.send(isNUmber);
});

app.post('/calculator', function (req, res) {
    let data = JSON.parse(req.body.data);
    console.log(req.body);
    console.log(req.body.data);
    let msg : any;
    if(data)
    {
        let isNotNumber = arrayNumber.isAllNumber(data);

        if(!isNotNumber){
            let suma = calculator.suma(data);
            let resta = calculator.resta(data);
            let multi= calculator.multiplicaison(data);
            let div = calculator.divicion(data);

            msg = {
                "response": {
                    "data": {
                        "suma": suma,
                        "resta": resta,
                        "multiplicacion": multi,
                        "divicion": div
                    },
                    "error": ""
                }
            }
        }
        else
        {
            msg = {
                "response": {
                    "data": "",
                    "error": ['invalid_data_format']
                }
            }

        }
    }else{
        msg = {
            "response": {
                "data": "",
                "error": ['error_500']
            }
        }
    }
    

    res.send(msg);
});
  


app.listen(6677, function () {
    console.log('servidor esta funcionando en http://localhost:6677');
});