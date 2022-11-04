import psycopg2

UserID = "Team1"
Password = "team1"
Port = 5432
DB_Name = "Team1DB"
DB_Host = "138.26.48.83"

conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
cur = conn.cursor()
cur.execute("DROP TABLE users;")
cur.execute("CREATE TABLE users(userId SERIAL PRIMARY KEY, email VARCHAR(50), password VARCHAR(50), firstName VARCHAR(50), lastName VARCHAR(50));")

conn.commit()
cur.execute(f"INSERT INTO users(email, password, firstName, lastName) VALUES('testuser@gmail.com', 'password1', 'test', 'user');")
cur.execute(f"SELECT * FROM users;")
query = cur.fetchall()
print(query)

cur.execute("DROP TABLE rooms;")
cur.execute("CREATE TABLE rooms(roomId INTEGER PRIMARY KEY, name VARCHAR(50), x FLOAT, y FLOAT, width FLOAT, height FLOAT);")
conn.commit()

cur.execute(f"SELECT * FROM rooms;")
query = cur.fetchall()
print(query)

