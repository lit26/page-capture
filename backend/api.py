from flask import abort, Flask, request,render_template, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.config["DEBUG"] = True
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/api", methods=['GET'])
def index():
    return render_template("index.html")

@app.route("/api/page", methods=['POST'])
@cross_origin()
def get_page_content():
    if not request.json:
        abort(400)
    print(request.json)
    return jsonify({'result': True})


app.run(port=5005)