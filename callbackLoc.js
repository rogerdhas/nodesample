const yarg=require('yargs');    

const geocode=require('./geocode/geocode');

const argv=yarg.options({
    a:{
        demand: true,
        alias : 'address',
        describe :'address to fetch weather ',
        string:true
    }
})
.help()
.alias('help','h')
.argv;

//console.log(argv);


var geoloc=geocode.geoCodeAddress(argv.a, (errormsg,res)=>{
    if(errormsg)
    {
        console.log(errormsg);
    }
    else 
    {
        console.log(JSON.stringify(res,undefined,2));
    }
});


//developer.forecast.io

///api.forecast.io/forecast/apikey/lat,long