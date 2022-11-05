import psycopg2

UserID = "Team1"
Password = "team1"
Port = 5432
DB_Name = "Team1DB"
DB_Host = "138.26.48.83"



conn = psycopg2.connect(database=DB_Name, user=UserID, password=Password, host=DB_Host, port=Port)
cur = conn.cursor()

#Uses the copy_expert function from psycopg2 to bulk insert room data into the rooms table from a csv file.

#Note: Normal copy statements require admin permissions on the database server and copy_expert does not.
with open('./rooms.csv') as f:
    cur.copy_expert('COPY rooms(roomId, name, x, y, width, height) FROM STDIN WITH HEADER CSV', f)
conn.commit()
cur.execute(f"SELECT * FROM rooms")
query = cur.fetchall()
print(query)