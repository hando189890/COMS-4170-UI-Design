function displayPopularHeroes(data){
    $("#hlist").empty();
    var html = ""
    for(let i =0; i < data.length;i++){ 
        let cur = data[i];
        html += `<a href="/view/${cur.id}">`
        html += `<div class="ptc1"><img src="${cur.imag}" alt="eachtu" width="200px" height="250px">`
        html += `<a className="nav-link" href="/view/${cur.id}" class="mn1">${cur.name}</a></div></a>`

    }
    $("#hlist").html(html);

}



$(document).ready(function(){
    displayPopularHeroes(data)
})