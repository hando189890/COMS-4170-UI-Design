var sales = [
	{
		"salesperson": "James D. Halpert",
		"client": "Shake Shack",
		"reams": 100
	},
	{
		"salesperson": "Stanley Hudson",
		"client": "Toast",
		"reams": 400
	},
	{
		"salesperson": "Michael G. Scott",
		"client": "Computer Science Department",
		"reams": 1000
	},
]
let clients = [
    "Shake Shack",
    "Toast",
    "Computer Science Department",
    "Teacher's College",
    "Starbucks",
    "Subsconsious",
    "Flat Top",
    "Joe's Coffee",
    "Max Caffe",
    "Nussbaum & Wu",
    "Taco Bell",
];


const init=()=>{
    $("#list").empty();
    sales.map((item,index)=>{
        let $itemEle = $(`
            <div class="item">
                <div>${item.salesperson}</div>
                <div>${item.client}</div>
                <div>${item.reams}</div>
                <button type="button" class="btn btn-warning" onclick="delItem(${index})">X</button>
            </div>
        `);
        $("#list").append($itemEle);
    })
   
}

const delItem=(index)=>{
    sales.splice(index,1);
    init()
}


const submit=()=>{
    let data = {
        salesperson:"Michael G. Scott"
    };
    let serializeArray = $('#form').serializeArray();
    $.each(serializeArray, function() {
        data[this.name] = this.value;
    });
    if(clients.indexOf(data.client)==-1){
        clients.push(data.client);
    }
    sales.unshift(data)
    init()
    $("#form")[0].reset();
    
}


$(document).ready(function(){
    init()
    $("#client").autocomplete({
        source: clients
    });
    
    $("#reams").bind("input propertychange",function(){
        if(/^[\d]*$/.test($(this).val())){
            $(this).removeClass("is-invalid")
        }else{
            $(this).addClass("is-invalid")
        }
    });
    $("#form").submit(function(e){
       submit()
    });
    $('#reams').keydown((e)=>{
        if(e.keyCode==13){
            submit()
        }
    });   
});
