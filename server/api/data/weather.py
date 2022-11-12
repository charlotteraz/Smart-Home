# Import Meteostat library and dependencies
from datetime import datetime
from meteostat import Daily
from math import ceil, floor

# Set time period, 1 week of data
start = datetime(2020, 1, 1)
end = datetime(2020, 1, 7)

# Weather station ID for Birmingham Airport
weather_station_id = '72228'

# Fetching daily data
data = Daily(weather_station_id, start, end)
data = data.fetch()

# Insert the daily average temperature into an array
tavg_celsius = data[["tavg"]].to_numpy()

# Convert celsius temperatures into farenheit
tavg_farenheit = (9 * tavg_celsius / 5 + 32)

# Temperature function from ApplianceSimulation.py
for i in range(len(tavg_farenheit)):
    internalTemp = 72
    externalTemp = tavg_farenheit[i]
    tempDifference = externalTemp - internalTemp
    if tempDifference < 0:
        print(ceil(tempDifference/10))
    else:
        print(floor(tempDifference/10))