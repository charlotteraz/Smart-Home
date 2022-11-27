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

class Device():
    def __init__(self, deviceId, state):
        self.deviceId = deviceId
        self.state = state
    
    def set_state(self, state):
        self.state = state

class HVAC():
    def __init__(self, internal_temp = 70, external_temp = 70, target_temp = 70):
        self.internal_temp = internal_temp
        self.external_temp = external_temp
        self.target_temp = target_temp
        
    def set_target(self, target_temp):
        self.target_temp = target_temp
    
        
def create_objects():
    conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
    cur = conn.cursor()
    cur.execute(f"SELECT * FROM devices")
    devices = cur.fetchall()
    device_objects = {}
    for device in devices:
        device_object = Device(device[0], False)
        device_objects[device[0]] = device_object
    return device_objects
    
global_devices = create_objects()

hvac = HVAC()
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
            conn.close()
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
                device_dict['state'] = False
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
    
class device_state(Resource):
    def post(self):
        json = request.get_json()
        device = global_devices[json['deviceId']]
        device.set_state(json['state'])
        return jsonify({"deviceId" : device.deviceId, "state" : device.state})
        
    def get(self):
        state_list = []
        for device in global_devices:
            state_dict = {}
            state_dict['deviceId'] = device
            state_dict['state'] = global_devices[device]
            state_list.append(state_dict)
        return jsonify(state_list)

class get_electricity(Resource):
    def get(self):
        conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
        cur = conn.cursor()
        cur.execute(f"SELECT * FROM electricity;")
        entries = cur.fetchall()
        entry_list = []
        for entry in entries:
            entry_dict = {}
            entry_dict['entryId'] = entry[0]
            entry_dict['deviceId'] = entry[1]
            entry_dict['date'] = entry[2]
            entry_dict['usage'] = entry[3]
            entry_dict['cost'] = entry[4]
            entry_list.append(entry_dict)
        return jsonify(entry_list)

class get_water(Resource):
    def get(self):
        conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
        cur = conn.cursor()
        cur.execute(f"SELECT * FROM water;")
        entries = cur.fetchall()
        entry_list = []
        for entry in entries:
            entry_dict = {}
            entry_dict['entryId'] = entry[0]
            entry_dict['deviceId'] = entry[1]
            entry_dict['date'] = entry[2]
            entry_dict['usage'] = entry[3]
            entry_dict['cost'] = entry[4]
            entry_list.append(entry_dict)
        return jsonify(entry_list)

class HVAC(Resource):
    def get(self):
        hvac_dict = {}
        hvac_dict['target'] = hvac.target_temp
        hvac_dict['internal'] = hvac.internal_temp
        hvac_dict['external'] = hvac.external_temp
        return jsonify(hvac_dict)
    
    def post(self):
        json = request.get_json()
        hvac.set_target(json['target'])
        return jsonify({['target'] : hvac.target_temp})

api.add_resource(login_validate, '/login_validate', '/api/login')
api.add_resource(get_rooms, '/get_rooms', '/api/rooms')
api.add_resource(device_state, '/device_state', '/api/devices')
api.add_resource(get_water, '/water_usage', '/api/water')
api.add_resource(get_electricity, '/electricity_usage', '/api/electricity')
api.add_resource(HVAC, '/hvac', '/api/hvac')


if __name__ == '__main__':
    app.run(debug=True)
