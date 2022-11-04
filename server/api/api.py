from flask import Flask, request, jsonify
from flask_restful import Resource, Api, reqparse
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



conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
cur = conn.cursor()

class login_validate(Resource): 
    def post(self):
        json = request.get_json()
        cur.execute(f"SELECT * FROM users WHERE email = '{json['email']}' AND password = '{json['password']}';")
        query = cur.fetchall()
        if len(query) == 1:
            print(query[0][0])
            return query[0][0]
        else:
            return "Incorrect username/password"
        

class get_rooms(Resource):
    def get(self):
        cur.execute(f"SELECT * FROM rooms;")
        rooms = cur.fetchall()
        rooms_list = []
        for room in rooms:
            room_dict = {}
            room_dict['roomId'] = room[0]
            room_dict['name'] = room[1]
            room_dict['x'] = room[2]
            room_dict['y'] = room[3]
            room_dict['width'] = room[4]
            room_dict['height'] = room[5]
            rooms_list.append(room_dict)
        print(rooms_list)
        return jsonify(rooms_list)

api.add_resource(login_validate, '/login_validate', '/api/login')
api.add_resource(get_rooms, '/get_rooms', '/api/rooms')

if __name__ == '__main__':
    app.run(debug=True)