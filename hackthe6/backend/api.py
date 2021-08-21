from flask import Flask,request
import pandas as pd
app = Flask(__name__)


@app.route('/api/data', methods=["POST"])
def data():
    search = request.json.get('search')
    aisleFound = ""

    #temp df
    directory=["Fasteners", "Building materials", "Car Maintenance", "Sport", "Hand tools" , "Power tools", "Lighting",  "Plumbing supplies", "Electrical supplies", "Cleaning products", "Housewares", "Tools", "Utensils", "Paint", "Lawn" , "Garden"]
    df = pd.DataFrame({'Item': ['Lights', "Car", "Bike", "Microwave", "Garbage Bags"], 'Aisle': ['Aisle 7','Aisle 6','Aisle 14','Aisle 9','Aisle 11']})
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
    res = {"result": aisleFound, 'dir': directory}

    return res