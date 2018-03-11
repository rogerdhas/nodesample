var users=((id,callbacks)=>{

    var user={
        id:id,
        name:'roger'
    };
    setTimeout (()=>{
        callbacks(user);
    },3000)
    

});

users(10,(userobj)=>{
    console.log(userobj);
})