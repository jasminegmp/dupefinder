# Euclidean distance measurement
# https://stackoverflow.com/questions/54242194/python-find-the-closest-color-to-a-color-from-giving-list-of-colors
import flask
from flask import request
import requests 
from math import sqrt
import pandas as pd

app = flask.Flask("__main__")
@app.route("/")

def my_index():
    return flask.render_template("index.html", token="Hello Flaks+react!")

# Data comes in as [makeup category, color]
@app.route('/api/query', methods = ['POST'])
def get_query_from_react():
    data = request.get_json()
    makeup =  data.get('data', {}).get('query')[0]
    color =  data.get('data', {}).get('query')[1]

    h = color.lstrip('#')
    color = tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

    r = requests.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + 'nail_polish').content
    
    # move json data into pandas dataframe

    df = pd.read_json(r)
    #print df['id']
    df['product_colors'].values

    found = []
   # iterate through each hex value
    for i in df['product_colors']:
        if i:
            for j in i:
                k = j['hex_value'].lstrip('#')
                # calc distance between color and j['hex_value]
                temp = tuple(int(k[i:i+2], 16) for i in (0, 2, 4))
                r, g, b = color
                cr, cg, cb = temp
                #print r,g,b
                #print cr,cg,cb
                color_diff = sqrt(abs(r - cr)**2 + abs(g - cg)**2 + abs(b - cb)**2)
                print j['hex_value'], color_diff
                #found = found + distance
    print found
    return data


app.run(debug=True)