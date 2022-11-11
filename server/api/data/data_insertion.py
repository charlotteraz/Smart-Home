import psycopg2

UserID = "Team1"
Password = "team1"
Port = 5432
DB_Name = "Team1DB"
DB_Host = "138.26.48.83"


def room_data():
    conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
    cur = conn.cursor()
    with open('./CSVs/rooms.csv') as f:
        cur.copy_expert('COPY rooms(roomId, name, x, y, width, height) FROM STDIN WITH HEADER CSV', f)
    conn.commit()
    cur.execute(f"SELECT * FROM rooms")
    query = cur.fetchall()
    print(query)
    conn.close()
        
def device_data():
    conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
    cur = conn.cursor()
    with open('./CSVs/devices.csv') as f:
        cur.copy_expert('COPY devices(deviceId, roomId, name, x, y) FROM STDIN WITH HEADER CSV', f)
    conn.commit()
    cur.execute(f"SELECT * FROM devices")
    query = cur.fetchall()
    print(query)
    conn.close()
        
if __name__ == '__main__':
    room_data()
    device_data()