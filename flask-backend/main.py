import flask
app = flask.Flask(__name__, static_folder='../react-frontend/build/static',
            template_folder='../react-frontend/build') 

@app.route("/")

def my_index():
    return flask.render_template("index.html", token="Hello Flaks+react!")

app.run(debug=True)