import flask
from flask import request
import requests 
from math import sqrt
import numpy as np
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
    selected_color = tuple(int(h[i:i+2], 16) for i in (0, 2, 4))

    r = requests.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + makeup).content
    print ('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + makeup)
    
    # move json data into pandas dataframe
    mydf = pd.read_json(r)

    # Learned how to flatten dataframe here:
    # https://stackoverflow.com/questions/54537616/flatten-dataframe-nested-list-array-with-extra-index-keys-for-time-series
    df = pd.concat({k: pd.DataFrame(array) for k, array in mydf.pop('product_colors').items()})
    df = df.reset_index(level=1, drop=True).join(mydf).reset_index(drop=True)

    distances = []
    for hex_color in df['hex_value']:
        #print hex_color
        hex_color = hex_color.lstrip('#')
        current_color = tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
        r, g, b = selected_color
        cr, cg, cb = current_color

        # Euclidean distance measurement
        # https://stackoverflow.com/questions/54242194/python-find-the-closest-color-to-a-color-from-giving-list-of-colors
        color_diff = sqrt(abs(r - cr)**2 + abs(g - cg)**2 + abs(b - cb)**2)
        
        distances.append(color_diff)
    df['distances'] = distances
    df =df.sort_values(by=['distances'])
    df.to_csv(r'dataframe_df.csv', index=False, encoding='utf-8')

    return data


app.run(debug=True)