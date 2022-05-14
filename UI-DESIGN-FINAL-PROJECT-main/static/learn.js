$(function(){
    start()
    $("#next[number='1']").click(function(){
        page()
    })  
    $("#return_button").click(function(){
        window.location.href =  "http://127.0.0.1:5000/explore"
    })

})
// $(document).ready(function(){
//     $("#rule_next").click(function(){
//     })  
// })
$(document).ready(function () {
    $("#rule_next").click(function (event) {
        console.log("next page")
        event.preventDefault()
        $(location).attr("href", "/start.html")
    })
})

function start(){
    clean()
    $("#next").attr('number','1')
    $("h1").html("Asset Entry")
    $("h1").addClass("title")
    $("h1").append("<div><input type = 'image' width = '500px' src = 'https://cdn.wallstreetmojo.com/wp-content/uploads/2019/07/Asset-Classes-1.jpg'></input></div>")
    $("#learn_1").html("1.Economic resources (Resources that will provide monetary benefits:")
    $("#learn_1").append("<div>a.Cash</div> <div>b.Things to be converted to cash (inventory, other firm’s stock)</div>c.Items used to generate cash.")
    $("#learn_2").html("2.Owned or controlled by the entity.")
    $("#learn_3").html("3.Conveniently measurable cost at time of acquisition.")
    $("#learn_4").html("4.Any balance sheet item that, if converted to cash today, would bring cash to the entity.")
    $("#next_container").append( "<a href='http://127.0.0.1:5000/directory'><button type='button' id='next_prev_buttons' class='btn btn-secondary'>Directory</button></a>")
    $("#next_container").append( "<a><button type='button' id='next_prev_buttons' class='btn btn-secondary' onclick='page2()'> Next</button></a>")

}

function page2(){
    clean()
    $("h1").html("Liability Entry")
    $("h1").addClass("title")
    $("h1").append("<div><input type = 'image' width = '400px' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iCj2m1-9cD4h4BdNjYe5X0fMGRrtLqBpEw&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1iCj2m1-9cD4h4BdNjYe5X0fMGRrtLqBpEw&usqp=CAU'></input></div>")
    $("#learn_1").html("1.A liability is something a person or company owes, usually a sum of money.Liabilities are settled over time through the transfer of economic benefits including money, goods, or services ")
    $("#learn_2").html("2.Liability is recorded on the right side of the balance sheet, liabilities include loans, accounts payable, mortgages, deferred revenues, bonds, warranties, and accrued expenses.")
    $("#learn_3").html("3.Two types of Liabilities")
    $("#learn_3").append("<div>a.Current Liability: <div>Company's short-term financial obligations that are due within one year or a normal operating cycle (e.g. accounts payable).</div></div> <div>b.Long-term liabilities: <div>obligations listed on the balance sheet not due for more than a year.</div></div>")
    $("#learn_4").html("4.Liabilities are a vital aspect of a company because they are used to finance operations and pay for large expansions. They can also make transactions between businesses more efficient.")
    $("#next_container").append( "<a><button type='button' id='next_prev_buttons' class = 'btn btn-secondary' onclick='start()'>Back</button></a>")
    $("#next_container").append( "<a><button type='button' id='next_prev_buttons' class = 'btn btn-secondary' onclick='page3()'>Next</button></a>")
}


function page3(){
    clean()
    $("h1").html('hi')
    $("h1").html("Equity Entry")
    $("h1").addClass("title")
    $("h1").append("<div><input type = 'image' width = '400px' src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZycQmhqxXZQyfN6akDY5B3VKxXVXHIRPlzw&usqp=CAU'></input></div>")
    $("#learn_1").html("1. Equity represents the amount of money that would be returned to a company's shareholders if all of the assets were liquidated and all of the company's debt was paid off in the case of liquidation.")
    $("#learn_2").html("2. Shareholder equity can represent the book value of a company. Equity can sometimes be offered as payment-in-kind. It also represents the pro-rata ownership of a company's shares.")
    $("#learn_3").html("3. We can also think of equity as a degree of residual ownership in a firm or asset after subtracting all debts associated with that asset.")
    $("#learn_4").html("4. The calculation of equity is a company's total assets minus its total liabilities, and it's used in several key financial ratios such as ROE.")
    $("#next_container").append( "<a><button type='button' id='next_prev_buttons' class = 'btn btn-secondary' onclick='page2()'>Back</button></a>")
    $("#next_container").append( "<a><button type='button' id='next_prev_buttons' class = 'btn btn-secondary' onclick='page4()'>next</button></a>")

}

function page4(){
    clean()
    $("h1").addClass("small_font")
    $("h1").html("Walmart's Balance Sheet Example")
    $("h1").append("<iframe height = 500px width = 700px src=https://www.youtube.com/embed/eIjCaeNm-Vk></iframe>")
    $("#next_container").append( "<a><button type='button' id='next_prev_buttons' class = 'btn btn-secondary' onclick='page3()'>Back</button></a>")
    $("#next_container").append( "<a href='http://127.0.0.1:5000/explore'><button type='button' id='next_prev_buttons' class = 'btn btn-secondary' >Next</button></a>")

}


function rule_start(){
    window.location.href="/learn2"
    $("h2").addClass("title")
}
 

function clean(){
    $("h1").html('')
    $("#learn_1").html("")
    $("#learn_2").html("")
    $("#learn_3").html("")
    $("#learn_4").html("")
    $("#next_container").empty()
}
