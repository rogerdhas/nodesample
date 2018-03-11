const  request=require('request'); 

var geoCodeAddress=(address,callback) => {

    var encodedadd=encodeURIComponent(address);
    console.log()
    
    request({
        //url:'http://maps.googleapis.com/maps/api/geocode/json?address=surendra%20nager%20chennai',
        url:`http://maps.googleapis.com/maps/api/geocode/json?address=${encodedadd}`,
        json: true
    },
    (error,resonse,body)=>{
        //console.log(JSON.stringify(body,undefined,2));
    
        //Display the error
        //console.log(JSON.stringify(error,undefined,2));
        if(error)
        {
           // console.log("unable to connect to server...Check internet connection!!");
           callback("unable to connect to server...Check internet connection!!");
        }
        else if(body.status==='ZERO_RESULTS')
        {
            //console.log("invalid address");
            callback("invalid address");
        }
        else if(body.status==='OK')
        {
            callback(undefined,{
                add :body.results[0].formatted_address,
                lat:body.results[0].geometry.location.lat,
                lng: body.results[0].geometry.location.lng
            })
            /*
            console.log(`Address : ${body.results[0].formatted_address}`);
            console.log(`latitude : ${body.results[0].geometry.location.lat}`);
            console.log(`longitude : ${body.results[0].geometry.location.lng}`);
            */
        
        }
        else{
            console.log("unspecified error");
        }
    });
}


module.exports.geoCodeAddress=geoCodeAddress;
