# CS499
# Team1
# Last Modified 11-07-2022

from math import floor,ceil

""" Functions to calculate daily usage functions """

def electric(watts: int) -> float:
    # Electricity is $0.12 per kWh = W X time (hours) / 1000kw)
    cost = (watts / 1000) * .12
    print(f"*** Usage cost is {cost} kwh.")
    return cost

def water(gallons: int) -> float:
    # Electricity is $2.52 per 748 gallons)
    cost = (gallons / 748) * 2.52
    print(f"*** Water cost is ${cost}.")
    return cost

def waterHeater(gallons_of_hot_water: int) -> float:
    # Calculates hot water heater reheating at 4500 watts per hour at 4 minutes per day
    watts = 4500
    min_to_heat = 4 / 60
    cost = (electric(watts) * min_to_heat) * gallons_of_hot_water
    return cost   


""" Daily usage functions to import data"""

def lightBulbs() -> float:
    # Each bulbs uses 60 watts per hour
    watts = 60
    numberUnits = 1
    cost = electric(watts) * numberUnits
    return cost

def bathFan() -> float:
    # Each fan uses 30 watts per hour
    watts = 30
    numberUnits = 1
    cost = electric(watts) * numberUnits
    return cost

def hvac() -> float:
    # HVAC uses 3500 watts per hour
    watts = 3500
    numberUnits = 1
    cost = electric(watts) * numberUnits
    return cost

def refrigerator() -> float:
    # Refrigerator uses 150 watts per hour
    watts = 150
    numberUnits = 1
    cost = electric(watts) * numberUnits
    return cost   
    
def microwaveM_F() -> float:
    # Week Day microwave uses 1100 watts per hour at 20 minutes per day
    watts = 1100
    min_day = 20 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost 

def microwaveS_S() -> float:
    # Week End microwave uses 1100 watts per hour at 30 minutes per day
    watts = 1100
    min_day = 30 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost       

def stoveM_F() -> float:
    #  Week Day stove uses 3500 watts per hour at 15 minutes per day
    watts = 3500
    min_day = 15 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost  

def stoveS_S() -> float:
    #  Week End stove uses 3500 watts per hour at 30 minutes per day
    watts = 3500
    min_day = 30 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost 

def ovenM_F() -> float:
    #  Week Day oven uses 4000 watts per hour at 45 minutes per day
    watts = 4000
    min_day = 45 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost  

def ovenS_S() -> float:
    #  Week End oven uses 4000 watts per hour at 60 minutes per day
    watts = 4000
    min_day = 60 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost 

def livingRoomTvM_F() -> float:
    #  Week Day Living Room TV uses 636 watts per hour at 240 minutes per day
    watts = 636
    min_day = 240 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost  

def livingRoomTvS_S() -> float:
    #  Week End Living Room TV uses 636 watts per hour at 480 minutes per day
    watts = 636
    min_day = 480 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost 

def bedroomTvM_F() -> float:
    #  Week Day oven uses 636 watts per hour at 45 minutes per day
    watts = 100
    min_day = 120 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost  

def bedroomTvS_S() -> float:
    #  Week End oven uses 636 watts per hour at 60 minutes per day
    watts = 100
    min_day = 240 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost 

""" Daily usage functions to import data: Baths"""

def bathsShowerWaterM_F() -> float:
     #  Week Day shower uses 25 gallons per bath at 2 per day
    gallons = 25
    perDay = 2
    cost = (water(gallons) * perDay) 
    return cost

def bathsBathWaterM_F() -> float:
     #  Week Day bath uses 30 gallons per bath at 2 per day
    gallons = 30
    perDay = 2
    cost = (water(gallons) * perDay) 
    return cost

def bathsShowerWaterS_S() -> float:
     #  Week End shower uses 25 gallons per bath at 2 per day
    gallons = 25
    perDay = 3
    cost = (water(gallons) * perDay) 
    return cost

def bathsBathWaterS_S() -> float:
     #  Week End bath uses 30 gallons per bath at 2 per day
    gallons = 30
    perDay = 3
    cost = (water(gallons) * perDay) 
    return cost

def bathsShowerElectricalM_F() -> float:
     #  Week Day shower uses 25 gallons at 65% hot water per bath at 2 per day
    gallons = 25
    hotWaterPercent = 0.65
    perDay = 2
    cost = (waterHeater(gallons * hotWaterPercent) * perDay)    
    return cost

def bathsBathElectricalM_F() -> float:
     #  Week Day shower uses 30 gallons at 65% hot water per bath at 2 per day
    gallons = 30
    hotWaterPercent = 0.65
    perDay = 2
    cost = (waterHeater(gallons * hotWaterPercent) * perDay)    
    return cost

def bathsShowerElectricalS_S() -> float:
     #  Week Day shower uses 25 gallons at 65% hot water per bath at 2 per day
    gallons = 25
    hotWaterPercent = 0.65
    perDay = 3
    cost = (waterHeater(gallons * hotWaterPercent) * perDay)    
    return cost

def bathsBathElectricalS_S() -> float:
     #  Week Day shower uses 30 gallons at 65% hot water per bath at 2 per day
    gallons = 30
    hotWaterPercent = 0.65
    perDay = 3
    cost = (waterHeater(gallons * hotWaterPercent) * perDay)    
    return cost




"""
def waterHeater() -> float:
    #  Daily hot water heater uses 4500 watts per hour at 4 minutes per day
    watts = 4500
    min_day = 4 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    return cost  

def waterHeater(gallons_of_hot_water) -> float:
    watts = 4500
    min_to_heat = 4 / 60
    cost = (electric(watts) / min_to_heat) * gallons_of_hot_water
    return cost   

def dishwasher() -> float:
    watts = 1800
    min_day = 11.25 / 60
    gallons_of_hot_water = 6
    cost = (electric(watts) / min_day) + waterHeater(gallons_of_hot_water)
    return cost
"""

def temperatureDiffernce(internalTemp, externalTemp):
    #takes the internal and external temperature and return how large that difference is in intervals of +/-10 so a difference of 9 would result in 0 and 29 would result in 2 
    tempDiffernce = externalTemp - internalTemp
    if tempDiffernce < 0:
        return ceil(tempDiffernce/10) #rounds up in the case of negative numbers i.e. -9.5/10 since rounding down would go to -1 and rounding up would go to 0 as we want it to
    else:
        return floor(tempDiffernce/10)



# Driver Code

watts = 3500
ans = electric(watts)
print(f"The cost for {watts} watts is {ans} per kwh.")

ans = lightBulbs()
print(f"The cost for lightbulbs are {ans} per kwh.")

ans = bathFan()
print(f"The cost for bathroom fan is {ans} per kwh.")

ans = hvac()
print(f"The cost for HVAC is {ans} per kwh.")

ans = refrigerator()
print(f"The cost for refrigerator is {ans} per kwh.")

ans = microwaveM_F()
print(f"The cost for microwave M-F is {ans} per day.")

ans = microwaveS_S()
print(f"The cost for microwave S-S is {ans} per day.")

# ans = waterHeater()
# print(f"The cost for the hot water heater is {ans:.3f} per day.")

ans = stoveM_F()
print(f"The cost for the stove M-F is {ans} per day.")

ans = stoveS_S()
print(f"The cost for the stove S-S is {ans} per day.")

ans = ovenM_F()
print(f"The cost for the oven M-F is {ans} per day.")

ans = ovenS_S()
print(f"The cost for the oven S-S is {ans} per day.")

ans = livingRoomTvM_F()
print(f"The cost for the Living Room TV M-F is {ans} per day.")

ans = livingRoomTvS_S()
print(f"The cost for the Livng Room TV S-S is {ans} per day.")

ans = bedroomTvM_F ()
print(f"The electrical cost for the Bedroom TV M-F is {ans} per day.")

ans = bedroomTvS_S ()
print(f"The electrical cost for the Bedroom TV S-S is {ans} per day.")

ans = bathsShowerWaterM_F ()
print(f"The water cost for the Showers M-F is {ans} per day.")

ans = bathsBathWaterM_F ()
print(f"The water cost for the Baths M-F is {ans} per day.")

ans = bathsShowerWaterS_S ()
print(f"The water cost for the Showers S-S is {ans} per day.")

ans = bathsBathWaterS_S ()
print(f"The water cost for the Baths S-S is {ans} per day.")

ans = bathsShowerElectricalM_F ()
print(f"The electrical cost for hot water for the Showers M-F is {ans} per day.")

ans = bathsBathElectricalM_F ()
print(f"The electrical cost for hot water for the Bath M-F is {ans} per day.")

ans = bathsShowerElectricalS_S ()
print(f"The electrical cost for hot water for the Showers S-S is {ans} per day.")

ans = bathsBathElectricalS_S ()
print(f"The electrical cost for hot water for the Bath S-S is {ans} per day.")