import flask
from flask import request
app = flask.Flask("__main__")
@app.route("/")

def my_index():
    return flask.render_template("index.html", token="Hello Flaks+react!")

@app.route('/api/query', methods = ['POST'])
def get_query_from_react():
    data = request.get_json()
    print(data)
    return data

    
app.run(debug=True)