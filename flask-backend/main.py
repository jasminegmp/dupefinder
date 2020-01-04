import flask
from flask import request
import requests 
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
    print makeup, color ## Retrieved user input

    r = requests.get('http://makeup-api.herokuapp.com/api/v1/products.json?product_type=' + makeup).content
    
    #print r
    
    df = pd.read_json(r)
    print df

    return data


app.run(debug=True)