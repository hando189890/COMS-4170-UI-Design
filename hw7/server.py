from flask import Flask
from flask import render_template
from flask import Response, request, jsonify
# from urllib import unquote

# from flask_cors import cors
app = Flask(__name__)

###
# Notes: 1. Because i did not pay attention to authority when i build up database for warm up, some of the pictures cannot use in this database.
#           I only try with the first three pictures when i build up web and can guarantee the first three pictures can be access in html which is also displayed as example in this homework
#        2. when test the add, please use a valid imag link, here is one of the example that can work, https://i.redd.it/p9hxr9cdzll81.png
#        3. clickable search is  work, weapons, creator and rating as well as name can both be searched by search box and clickable button
#
###



data = {
    "1": {
        "id": "1",
        "name": "Captain America",
        "real_name": "Steve Rogers",
        "height": "189",
        "rating": 3,
        "imag": "https://i1191.photobucket.com/albums/z478/ipkclub/2012-7/marvelfanartphase8620125.jpg",
        "summary": "Steve Rogers was born during the Depression and grew up a frail youth in a poor family. His father died when he was a child, his mother when he was in his late teens. Horrified by newsreel footage of the Nazis in Europe, Rogers was inspired to try to enlist in the Army. However, because of his frailty and sickness, he was rejected. Overhearing the boy's earnest plea to be accepted, General Chester Phillips of the U.S. Army offered Rogers the opportunity to take part in a special experiment called Operation: Rebirth. Rogers agreed and was taken to a secret laboratory in Washington, D.C. where he was introduced to Dr. Abrahan Erskine (code named: Prof. Reinstein), the creator to the Super-Soldier formula.",
        "weapons": ["Shield"],
        "creator": ["Stan Lee", "Chris Evans", "Matt Slinger", "Reb Brown"]
    },
    "2": {
        "id": "2",
        "name": "Black Panther",
        "real_name": "T Challa",
        "height": "182",
        "rating": 1,
        "imag": "http://cbu01.alicdn.com/img/ibank/2018/781/620/8876026187_904292577.jpg",
        "summary": "T'Challa is the son of T'Chaka, late king of the African nation Wakanda. When lawless ivory hunter Ulysses Klaw murdered T'Chaka in an attempt to possess the country's rare Vibranium deposit, a grief-stricken T'Challa swore vengeance and succeeded in thwarting the butcher's raid. In the process, the young prince destroyed Klaw's hand.",
        "weapons": ["Vibranium Gauntlets"],
        "creator": ["Ryan Coolger", "Kevin Feige", "Matt Slinger", "Don Heck"]
    },
    "3": {
        "id": "3",
        "name": "Iron Man",
        "real_name": "Tony Stark",
        "height": "184",
        "rating": 2,
        "imag": "https://i.redd.it/15rptplr2fk81.png",
        "summary": "Anthony Stark, son of industrialist Howard Stark, demonstrated his mechanical aptitude and inventive genius at a very early age, enrolling in college electrical engineering program at the Massachusetts Institute of Technology at the age of 15. When he was 21, he inherited his father's business, Stark Industries, and within a few years turned it into a multimillion-dollar industry complex whose chief contracts were for weaponry and munitions for the U.S. government.",
        "weapons": ["Sophisticated Suit", "Repulsors"],
        "creator": ["Stan Lee", "Larry Lieber", "Don Heck", "Jack Kirby"]
    },
    "4": {
        "id": "4",
        "name": "Nighthawk",
        "real_name": "Kyle Richmond",
        "height": "188",
        "rating": 1,
        "imag": "https://i.redd.it/3uuabcr0fal81.png",
        "summary": "Kyle Richmond lived a privileged life of luxury, making him spoiled, irresponsible, and insubordinate. His irresponsibility led to tragedy, however, when he drove drunk and caused an accident that killed his girlfriend. He sought refuge in being drafted for the army, but he was rejected when a physical revealed he had a heart murmur. He threw himself into his life of luxury, all the while secretly searching for a cure. Finding a mysterious formula in an ancient book, Kyle re-created and drank it, discovering his body gained superhuman powers, but only at night.",
        "weapons": ["Laser-guided Bombs", "109 penetration bombs", "JDAM"],
        "creator": ["Mark Stone"]
    },
    "5": {
        "id": "5",
        "name": "Ant-Man",
        "real_name": "Henry Jonathan",
        "height": "159",
        "rating": 2,
        "imag": "https://i.redd.it/o75gp2m9fal81.png",
        "summary": "Forced out of his own company by former protege Darren Cross, Dr. Hank Pym (Michael Douglas) recruits the talents of Scott Lang (Paul Rudd), a master thief just released from prison. Lang becomes Ant-Man, trained by Pym and armed with a suit that allows him to shrink in size, possess superhuman strength and control an army of ants. The miniature hero must use his new skills to prevent Cross, also known as Yellowjacket, from perfecting the same technology and using it as a weapon for evil.",
        "weapons": ["Revolvers", "Machine Guns", "Rifles/Carbines"],
        "creator": ["Stan Lee", "Larry Lieber", "Jack Kirby"]
    },
    "6": {
        "id": "6",
        "name": "Hulk",
        "real_name": "Robert Bruce Banner",
        "height": "182",
        "rating": 2,
        "imag": "https://i.redd.it/o79u9gfefal81.png",
        "summary": "Scientist Bruce Banner (Edward Norton) desperately seeks a cure for the gamma radiation that contaminated his cells and turned him into The Hulk. Cut off from his true love Betty Ross (Liv Tyler) and forced to hide from his nemesis, Gen. Thunderbolt Ross (William Hurt), Banner soon comes face-to-face with a new threat: a supremely powerful enemy known as The Abomination (Tim Roth).",
        "weapons": ["Fist"],
        "creator": ["Greg Pak", "Mike Deodato"]
    },
    "7": {
        "id": "7",
        "name": "Venom",
        "real_name": "Eugene Thompson",
        "height": "231",
        "rating": 1,
        "imag": "https://i.redd.it/x1ig3bfjfal81.png",
        "summary": "Journalist Eddie Brock is trying to take down Carlton Drake, the notorious and brilliant founder of the Life Foundation. While investigating one of Drake's experiments, Eddie's body merges with the alien Venom -- leaving him with superhuman strength and power. Twisted, dark and fueled by rage, Venom tries to control the new and dangerous abilities that Eddie finds so intoxicating.",
        "weapons": ["Mjolnir", "Silver Surfer's board"],
        "creator": ["Todd McFarlane", "Mike Zeck", "David Michelinie"]
    },
    "8": {
        "id": "8",
        "name": "Black Widow",
        "real_name": "Natalia Alianovna",
        "height": "168",
        "rating": 2,
        "imag": "https://i.redd.it/8dq3rhvqfal81.png",
        "summary": "Natasha Romanoff, aka Black Widow, confronts the darker parts of her ledger when a dangerous conspiracy with ties to her past arises. Pursued by a force that will stop at nothing to bring her down, Natasha must deal with her history as a spy, and the broken relationships left in her wake long before she became an Avenger.",
        "weapons": ["Dual Batons", "Pair of Glock 26s", "Black Widow's Bite"],
        "creator": ["Jae Lee", "Don Rico", "Don Heck", "Stan Lee"]
    },
    "9": {
        "id": "9",
        "name": "Deadpool",
        "real_name": "Wade Winston Wilson",
        "height": "185",
        "rating": 1,
        "imag": "https://i.redd.it/w0qkh39ufal81.png",
        "summary": "Wade Wilson (Ryan Reynolds) is a former Special Forces operative who now works as a mercenary. His world comes crashing down when evil scientist Ajax (Ed Skrein) tortures, disfigures and transforms him into Deadpool. The rogue experiment leaves Deadpool with accelerated healing powers and a twisted sense of humor. With help from mutant allies Colossus and Negasonic Teenage Warhead (Brianna Hildebrand), Deadpool uses his new skills to hunt down the man who nearly destroyed his life.",
        "weapons": ["Katanas", "Knives", "Grenades", "Guns"],
        "creator": ["Rob Liefeld", "Fabian Nicieza"]
    },
    "10": {
        "id": "10",
        "name": "Doctor Strange",
        "real_name": "Stephen Vincent",
        "height": "192",
        "rating": 3,
        "imag": "https://i.redd.it/29czq54zfal81.png",
        "summary": "Dr. Stephen Strange's (Benedict Cumberbatch) life changes after a car accident robs him of the use of his hands. When traditional medicine fails him, he looks for healing, and hope, in a mysterious enclave. He quickly learns that the enclave is at the front line of a battle against unseen dark forces bent on destroying reality. Before long, Strange is forced to choose between his life of fortune and status or leave it all behind to defend the world as the most powerful sorcerer in existence.",
        "weapons": ["Eye of Agamotto", "Cloak of Levitation"],
        "creator": ["Stan Lee", "Steve Ditko"]
    },
}

# ROUTES
popular_hero = [
    "1",
    "2",
    "3",
]

reslist = []

msg = ""

curdata = []


@app.route('/')
def homepage():
    global data
    global popular_hero
    global curdata

    curdata = []
    for item in data:
        if data[item]['id'] in popular_hero:
            curdata.append(data[item])

    return render_template('homepage.html', data=curdata)


@app.route('/add')
def add():
    return render_template('add.html')


@app.route('/view/<id>')
def view_data(id=None):
    global data
    global popular_hero
    global curdata

    curdata.clear()
    for item in data:
        if data[item]['id'] in popular_hero:
            if data[item]['id'] == id:
                curdata.append(data[item])

    return render_template('view.html', data=curdata)




@app.route('/update/<id>',methods=["POST"])
def update(id=None):
    global data
    global popular_hero
    global curdata

    name = request.form.get("name")
    realName = request.form.get("realName")
    imageLink = request.form.get("imageLink")
    height = request.form.get("height")
    rating = request.form.get("rating")
    summary = request.form.get("summary")
    weapons = request.form.get("weapons")
    creator = request.form.get("creator")

    obj = data[id]
    if name:
        obj["name"] = name
    if realName:
        obj["real_name"] = realName
    if height:
        obj["height"] = height
    if rating:
        obj["rating"] = rating
    if imageLink:
        obj["imag"] = imageLink
    if summary:
        obj["summary"] = summary
    if weapons:
        obj["weapons"] = weapons.split(",")
    if creator:
        obj["creator"] = creator.split(",")
    data[id] = obj

    curdata.clear()
    for item in data:
        if data[item]['id'] in popular_hero:
            if data[item]['id'] == id:
                curdata.append(data[item])

    return render_template('view.html', data=curdata)



@app.route('/edit/<id>')
def edit_data(id=None):
    global data
    global popular_hero
    global curdata
    curdata.clear()
    for item in data:
        if data[item]['id'] in popular_hero:
            if data[item]['id'] == id:
                curdata.append(data[item])
    # print(curdata)

    return render_template('edit.html', data=curdata)



@app.route('/search_result')
def search_result():
    # print("check search_result html")
    global data
    global reslist
    global curdata
    # print(msg)
    # print(reslist)

    curdata.clear()
    for item in data:
        if data[item]['id'] in reslist:
            curdata.append(data[item])

    # print("check search result")
    # print(curdata)

    return render_template('search_result.html', data=curdata, msg=msg)


@app.route('/addFrom',methods=["POST"])
def addFrom():
    global data
    global popular_hero
    name = request.form.get("name")
    realName = request.form.get("realName")
    imageLink = request.form.get("imageLink")
    height = request.form.get("height")
    rating = request.form.get("rating")
    summary = request.form.get("summary")
    weapons = request.form.get("weapons")
    creator = request.form.get("creator")
    datalength = len(data) + 1
    obj = dict();
    obj["id"] = str(datalength)
    obj["name"] = name
    obj["real_name"] = realName
    obj["height"] = height
    obj["rating"] = rating
    obj["imag"] = imageLink
    obj["summary"] = summary
    obj["weapons"] = weapons.split(",")
    obj["creator"] = creator.split(",")
    data[str(datalength)] = obj
    popular_hero.append(str(datalength))
    return jsonify({"num": datalength})



@app.route('/search/', methods=['GET', 'POST'])
def search():
    global data
    global msg
    global reslist

    json_data = request.get_json()
    # json_raw_data = unquote(request.query_string)
    # json_data = json.loads(json_raw_data)
    # print("check2")
    # print(json_data)
    # args = request.args
    # curinput = args.get('parameter')
    # print("check2")
    # print(curinput)

    
    input = json_data["msg"]
    msg = input.lower()
    print("check1")
    print(msg)

    reslist = []

    if msg.isnumeric():
        for item in data:
            if int(msg) == data[item]['rating']:
                if data[item]['id'] in popular_hero:
                    reslist.append(data[item]['id'])
                    msg = msg + " stars"

    else:

        for item in data:
            if msg in data[item]['name'].lower():
                if data[item]['id'] in popular_hero:
                    reslist.append(data[item]['id'])

        for item in data:
            curid = data[item]['id']
            currentcreator = data[item]['creator']
            string_list = [each_string.lower() for each_string in currentcreator]
            for crt in string_list:
                if msg in crt:
                    if curid in popular_hero:
                        reslist.append(data[item]['id'])
        
        for item in data:
            curid = data[item]['id']
            currentcreator = data[item]['weapons']
            string_list = [each_string.lower() for each_string in currentcreator]
            for crt in string_list:
                if msg in crt:
                    if curid in popular_hero:
                        reslist.append(data[item]['id'])

    # print(reslist)
    return jsonify(reslist=reslist, msg=msg)


if __name__ == '__main__':
    app.run(debug=True)




