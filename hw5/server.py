import json

from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
app = Flask(__name__)


current_id = 3
sales = [
   {
      "id": 1,
      "salesperson": "James D. Halpert", "client": "Shake Shack",
      "reams": 1000
   },
   {
      "id": 2,
      "salesperson": "Stanley Hudson", "client": "Toast",
      "reams": 4000
   },
   {
      "id": 3,
      "salesperson": "Michael G. Scott",
      "client": "Computer Science Department",
      "reams": 10000
   },
]

client = [
   "Shake Shack",
   "Toast",
   "Computer Science Department", "Teacher's College",
   "Starbucks",
   "Subsconsious",
   "Flat Top",
   "Joe's Coffee",
   "Max Caffe",
   "Nussbaum & Wu",
   "Taco Bell",
]

# ROUTES



@app.route('/')
def welcome():
   return render_template('welcome.html')   



@app.route('/infinity')
def infinity():
    return render_template('log_sales.html',client=client, sales=sales)


# AJAX FUNCTIONS

# ajax for js
@app.route('/save_sale', methods=['GET', 'POST'])
def save_sale():
    global salesperson
    global current_id 
    global sales
    global client
    
    json_data = request.get_json()   
    salesperson = json_data["salesperson"]
    new_client = json_data["client"]
    reams = json_data["reams"]
    # add new entry to array with 
    # a new id and the name the user sent in JSON
    # current_id += 1
    # new_id = current_id
    current_id += 1
    new_name_entry = {
        "salesperson": salesperson,
        "client": new_client,
        "reams": int(reams),
        "id":  current_id
    }
    sales.append(new_name_entry)
    for i in range(len(client)):
        if new_client not in client:
            client.append(new_client)

    return jsonify(client=client, sales=sales)
 

@app.route('/delete_sale', methods=['GET', 'POST'])
def delete_sale():
    global client
    global sales 
    global current_id 

    json_data = request.get_json()
    sale_id = int(json_data["id"])

    sales.pop(sale_id)
    return jsonify(client=client, sales=sales)


   
if __name__ == '__main__':
   app.run(debug = True)




