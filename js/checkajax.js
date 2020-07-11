    document.addEventListener('DOMContentLoaded',function(event)
{
    console.log("inside dom");
document.querySelector("button").addEventListener("click",function(){
        console.log("inside handler");
        $ajaxUtils.sendGetRequest('https://davids-restaurant.herokuapp.com/menu_items.json',function(res)
        {
            console.log("inside get request");
            console.log(res);
            console.log(JSON.stringify(res));
            console.log("length:"+res.menu_items.length);
            var name='L'
            var a = 0;
            var all = new Array();
            

             for(var i=0;i<res.menu_items.length;i++)
             {
                var str = res.menu_items[i].short_name;
                var regexStr = str.match(/[a-z]+|[^a-z]+/gi);
                
                if(name==regexStr[0])
                {
                   all[a] =res.menu_items[i];
                   a=a+1;
                }
                
             }

             for(var k=0;k<all.length;k++)
             {
                 console.log(all[k].short_name);
             }
            

             
            // // var message=res.firstname + " " +res.lastname;
            // if(res.likeschinesefood)
            // {
            //     message=message+" "+"likes chinese food";
            // }

            // else{
            //     message=message+" "+"does not like chinese food";
            // }
            // document.getElementById("main").innerHTML=message;
        });

});
});

