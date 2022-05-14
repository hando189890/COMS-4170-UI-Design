function displayPopularHeroes(data){
    $("#hlist").empty();
    for(let i =0; i < data.length;i++){ 
        let cur = data[i];
        $("#hlist").append(`<a class="nav-link" href="/view/${cur.id}">${cur.name}</a> <br>`);
    }
}

$(document).ready(function(){
    displayPopularHeroes(data)                        
})