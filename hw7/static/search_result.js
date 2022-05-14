function displayPopularHeroes(data, msg){
    $("#rlist").empty();
    $("#rlist").append(`<div class = "big dark">Search Results for "${msg}"</div> <br>`);
    if (data.length == 0){
        $("#rlist").append(`<div> No results found </div> <br>`);

    }else{
        for(let i =0; i < data.length;i++){ 
            let cur = data[i];
            $("#rlist").append(`<a class="nav-link" href="/view/${cur.id}">${cur.name}</a> <br>`);
        }
    }

}

$(document).ready(function(){
    displayPopularHeroes(data,msg)                        
})