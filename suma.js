function getAll(url){
    //var query = window.location.search.slice(1);
    var query = url.split('?')[1]; //window.location.search.slice(1);
    var sum =0;
    if (query){
        var arr = query.split('&');

        for (var i=0; i<arr.length; i++) {
            var a = arr[i].split('=');
            
            if(a[0]== 'a' || a[0] == 'b' ){
                var convert = +a[1];
                if(!isNaN(convert)){
                    sum=sum + convert;
                }
            }
        }
    }
console.log(sum);
        }

getAll(url);


