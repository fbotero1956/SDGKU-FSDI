from flask import Flask, render_template, request
import requests
import json

app = Flask(__name__)
api_key = "013ebb50b7a6ead82cd07ae120b5b96f"

@app.route('/')
@app.route('/home')
def index():
    testtemp = "this is very hot"
    return render_template("index.html", temp = testtemp)

@app.route('/about')
def about():
    return "<h1> Hello Felipe Botero's world!!!</h1>"

@app.route('/api/weather', methods=["POST"])
def weather():
    #get data from JS request 
    lat = request.json['lat']
    lon = request.json['lon']
    url = "https://api.openweathermap.org/data/2.5/onecall?lat=%s&lon=%s&appid=%s&units=metric" % (
        lat, lon, api_key)

    response = requests.get(url)
    data = json.loads(response.text)
    return data
    # return render_template("weather.html")

   # current = {
   #    'temp': '75',
   #      'cloudy': 'Partly'
   #  }
  #  return current


if __name__ == '__main__':
    app.run(debug=True)