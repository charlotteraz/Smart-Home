from flask import Flask, request, jsonify, make_response
from flask_restful import Resource, Api
from flask_cors import CORS
import psycopg2

app = Flask(__name__)
api = Api(app)
CORS(app)

UserID = "Team1"
Password = "team1"
Port = 5432
DB_Name = "Team1DB"
DB_Host = "138.26.48.83"



class login_validate(Resource): 
    def post(self):
        #Takes in a post request with login info in the form of a json and check it against the database to confirm there is a user that matches that username password pair and returns a json with the userId on a valid pair or a different json with an incorrect login message
        json = request.get_json()
        conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
        cur = conn.cursor()
        cur.execute(f"SELECT * FROM users WHERE email = '{json['email']}' AND password = '{json['password']}';")
        query = cur.fetchall()
        if len(query) == 1:
            conn.close()
            return jsonify({"userId":query[0][0]})
        else:
            conn.close
            return make_response(jsonify({"message":"Incorrect email or password"}), 401)

class get_rooms(Resource):
    def get(self):
        #Queries the database and adds the data from each room into a dictionary which is then put into a list to create a json file to be sent to the frontend for rendering
        conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
        cur = conn.cursor()
        cur.execute(f"SELECT * FROM rooms;")
        rooms = cur.fetchall()
        rooms_list = []
        
        for room in rooms:
            cur.execute(f"SELECT * FROM devices WHERE roomId = {room[0]}")
            devices = cur.fetchall()
            device_list = []
            for device in devices:
                device_dict = {}
                device_dict['deviceId'] = device[0]
                device_dict['name'] = device[2]
                device_dict['x'] = device[3]
                device_dict['y'] = device[4]
                device_list.append(device_dict)
            room_dict = {}
            room_dict['roomId'] = room[0]
            room_dict['name'] = room[1]
            room_dict['x'] = room[2]
            room_dict['y'] = room[3]
            room_dict['width'] = room[4]
            room_dict['height'] = room[5]
            room_dict['devices'] = device_list
            rooms_list.append(room_dict)
        conn.close()
        return jsonify(rooms_list)

api.add_resource(login_validate, '/login_validate', '/api/login')
api.add_resource(get_rooms, '/get_rooms', '/api/rooms')

if __name__ == '__main__':
    app.run(debug=True)
