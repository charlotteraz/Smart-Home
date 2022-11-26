import psycopg2

UserID = "Team1"
Password = "team1"
Port = 5432
DB_Name = "Team1DB"
DB_Host = "138.26.48.83"

def create_users():
    conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
    cur = conn.cursor()
    cur.execute("DROP TABLE users;")
    cur.execute("CREATE TABLE users(userId SERIAL PRIMARY KEY, email VARCHAR(50), password VARCHAR(50), firstName VARCHAR(50), lastName VARCHAR(50));")
    conn.commit()
    cur.execute(f"INSERT INTO users(email, password, firstName, lastName) VALUES('testuser@gmail.com', 'password1', 'test', 'user');")
    cur.execute(f"SELECT * FROM users;")
    query = cur.fetchall()
    print(query)
    conn.close()
    
def create_rooms():
    conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
    cur = conn.cursor()
    cur.execute("DROP TABLE rooms;")
    cur.execute("CREATE TABLE rooms(roomId INTEGER PRIMARY KEY, name VARCHAR(50), x FLOAT, y FLOAT, width FLOAT, height FLOAT);")
    conn.commit()
    cur.execute(f"SELECT * FROM rooms;")
    query = cur.fetchall()
    print(query)
    conn.close()
    
def create_devices():
    conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
    cur = conn.cursor()
    cur.execute("CREATE TABLE devices(deviceId INTEGER PRIMARY KEY, roomId INTEGER, name VARCHAR(50), x FLOAT, y FLOAT, CONSTRAINT fk_rooms_devices FOREIGN KEY(roomId) REFERENCES rooms(roomId));")
    conn.commit()
    cur.execute(f"SELECT * FROM devices;")
    query = cur.fetchall()
    print(query)
    conn.close()
    
def create_water():
    conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
    cur = conn.cursor()
    cur.execute("DROP TABLE water;")
    cur.execute("CREATE TABLE water(entryId SERIAL PRIMARY KEY, deviceId INTEGER, date DATE, usage FLOAT, cost FLOAT);")
    conn.commit()
    cur.execute(f"SELECT * FROM water;")
    query = cur.fetchall()
    print(query)
    conn.close()
    
def create_electricity():
    conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
    cur = conn.cursor()
    cur.execute("DROP TABLE electricity;")
    cur.execute("CREATE TABLE electricity(entryId SERIAL PRIMARY KEY, deviceId INTEGER, date DATE, usage FLOAT, cost FLOAT);")
    conn.commit()
    cur.execute(f"SELECT * FROM electricity;")
    query = cur.fetchall()
    print(query)
    conn.close()
    
if __name__ == '__main__':
    create_water()
    create_electricity()