from flask import Flask,request
import pandas as pd
app = Flask(__name__)


@app.route('/api/data', methods=["POST"])
def data():
    search = request.json.get('search')
    aisleFound = ""

    #temp df
    df = pd.DataFrame({'Item': ['Light', "Car", "Bike", "Microwave", "Garbage Bag"], 'Aisle': ['Aisle 1b','Aisle 6c','Aisle 14d','Aisle 9b','Aisle 3f']})
    df = df.to_dict('records')
    print("search:", search)

    #search for item in df
    for i in range(0, len(df)):
        if(df[i].get("Item").upper()==search.upper()):
            aisleFound = df[i].get("Aisle")
            break
        else:
            aisleFound = "Not in Store"
            
    print(aisleFound)
    res = {"result": aisleFound}

    return res