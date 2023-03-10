# CS499
# Team1
# Was Modified 11-11-2022
# Last Modified 11-16-2022 - Code Update


#import csv
import os.path
import datetime
from math import floor,ceil

""" Called functions to calculate daily usage functions """

def electric(watts: int) -> float:
    # Electricity is $0.12 per kWh = W X time (hours) / 1000kw)
    cost = (watts / 1000) * .12
    #print(f"*** Usage cost is {cost} kwh.")
    return cost

def water(gallons: int) -> float:
    # Electricity is $2.52 per 748 gallons)
    cost = (gallons / 748) * 2.52
    #print(f"*** Water cost is ${cost}.")
    return cost

def waterHeater(gallons_of_hot_water: int) -> float:
    # Calculates hot water heater reheating at 4500 watts per hour at 4 minutes per day
    watts = 4500
    min_to_heat = 4 / 60
    cost = (electric(watts) * min_to_heat) * gallons_of_hot_water
    return cost   

""" Functions to utilize only when the device is active """

def lightBulbs() -> float:
    # Each bulbs uses 60 watts per hour
    watts = 60
    numberUnits = 1
    cost = electric(watts) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost

def bathFan() -> float:
    # Each fan uses 30 watts per hour
    watts = 30
    numberUnits = 1
    cost = electric(watts) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost

def hvac() -> float:
    # HVAC uses 3500 watts per hour
    watts = 3500
    numberUnits = 1
    cost = electric(watts) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost

def refrigerator() -> float:
    # Refrigerator uses 150 watts per hour
    watts = 150
    numberUnits = 1
    cost = electric(watts) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost   
    
""" Daily usage functions to import constant data"""

""" Microwave """

def microwaveM_F() -> float:
    # Week Day microwave uses 1100 watts per hour at 20 minutes per day
    watts = 1100
    min_day = 20 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost

def microwaveS_S() -> float:
    # Week End microwave uses 1100 watts per hour at 30 minutes per day
    watts = 1100
    min_day = 30 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost

""" Stove """

def stoveM_F() -> float:
    #  Week Day stove uses 3500 watts per hour at 15 minutes per day
    watts = 3500
    min_day = 15 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost  

def stoveS_S() -> float:
    #  Week End stove uses 3500 watts per hour at 30 minutes per day
    watts = 3500
    min_day = 30 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost

""" Oven """

def ovenM_F() -> float:
    #  Week Day oven uses 4000 watts per hour at 45 minutes per day
    watts = 4000
    min_day = 45 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost 

def ovenS_S() -> float:
    #  Week End oven uses 4000 watts per hour at 60 minutes per day
    watts = 4000
    min_day = 60 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost 

""" Living Room TV """

def livingRoomTvM_F() -> float:
    #  Week Day Living Room TV uses 636 watts per hour at 240 minutes per day
    watts = 636
    min_day = 240 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost  

def livingRoomTvS_S() -> float:
    #  Week End Living Room TV uses 636 watts per hour at 480 minutes per day
    watts = 636
    min_day = 480 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost 

""" Bedroom TV """

def bedroomTvM_F() -> float:
    #  Week Day oven uses 636 watts per hour at 45 minutes per day
    watts = 100
    min_day = 120 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost 

def bedroomTvS_S() -> float:
    #  Week End oven uses 636 watts per hour at 60 minutes per day
    watts = 100
    min_day = 240 / 60
    numberUnits = 1
    cost = (electric(watts) * min_day) * numberUnits
    usage_cost = (watts, cost)
    return usage_cost

"""  Baths"""

def bathsShowerWaterM_F() -> float:
     #  Week Day shower uses 25 gallons per bath at 2 per day
    gallons = 25
    perDay = 2
    cost = (water(gallons) * perDay) 
    usage_cost = (gallons, cost)
    return usage_cost

def bathsBathWaterM_F() -> float:
     #  Week Day bath uses 30 gallons per bath at 2 per day
    gallons = 30
    perDay = 2
    cost = (water(gallons) * perDay) 
    usage_cost = (gallons, cost)
    return usage_cost

def bathsShowerWaterS_S() -> float:
     #  Week End shower uses 25 gallons per bath at 2 per day
    gallons = 25
    perDay = 3
    cost = (water(gallons) * perDay) 
    usage_cost = (gallons, cost)
    return usage_cost

def bathsBathWaterS_S() -> float:
     #  Week End bath uses 30 gallons per bath at 2 per day
    gallons = 30
    perDay = 3
    cost = (water(gallons) * perDay) 
    usage_cost = (gallons, cost)
    return usage_cost

def bathsShowerElectricalM_F() -> float:
     #  Week Day shower uses 25 gallons at 65% hot water per bath at 2 per day
    gallons = 25
    hotWaterPercent = 0.65
    perDay = 2
    cost = (waterHeater(gallons * hotWaterPercent) * perDay)    
    usage_cost = (gallons, cost)
    return usage_cost

def bathsBathElectricalM_F() -> float:
     #  Week Day shower uses 30 gallons at 65% hot water per bath at 2 per day
    gallons = 30
    hotWaterPercent = 0.65
    perDay = 2
    cost = (waterHeater(gallons * hotWaterPercent) * perDay)    
    usage_cost = (gallons, cost)
    return usage_cost

def bathsShowerElectricalS_S() -> float:
     #  Week Day shower uses 25 gallons at 65% hot water per bath at 2 per day
    gallons = 25
    hotWaterPercent = 0.65
    perDay = 3
    cost = (waterHeater(gallons * hotWaterPercent) * perDay)    
    usage_cost = (gallons, cost)
    return usage_cost

def bathsBathElectricalS_S() -> float:
     #  Week Day shower uses 30 gallons at 65% hot water per bath at 2 per day
    gallons = 30
    hotWaterPercent = 0.65
    perDay = 3
    cost = (waterHeater(gallons * hotWaterPercent) * perDay)    
    usage_cost = (gallons, cost)
    return usage_cost


""" Dishwasher"""

def dishwasherWaterWeekly() -> float:
    # Weekly dishwasher uses 1800 watts, 6 gallons per load, 45 minutes per load, 
    # 4 loads per week (???Sun:Tues:Thur:Sat)
    # Returns weekly water cost
    gallons = 6
    perWeek = 4
    cost = (water(gallons) * perWeek) 
    usage_cost = (gallons, cost)
    return usage_cost

def dishwasherHWElectricalWeekly() -> float:
    # Weekly dishwasher uses 1800 watts, 6 gallons per load, 45 minutes per load, 
    # 4 loads per week (???Sun:Tues:Thur:Sat)
    # Returns weekly electrical cost
    gallons = 6    
    perWeek = 4
    cost = (waterHeater(gallons) * perWeek)    
    usage_cost = (gallons, cost)
    return usage_cost

def dishwasherElectricalWeekly ()-> float:
    # Weekly dishwasher uses 1800 watts, 6 gallons per load, 45 minutes per load, 
    # 4 loads per week (???Sun:Tues:Thur:Sat)
    # Returns weekly electrical cost
    watts = 1800
    min_day = 45 / 60
    perWeek = 4
    cost = (electric(watts) * min_day) * perWeek
    usage_cost = (watts, cost)
    return usage_cost 

""" Weekly usage functions to import data: Clothes Washer"""

def clotheswasherWaterWeekly () -> float:
    # Weekly clothes washer uses 500 watts, 20 gallons per load at 85% hot water and 15% cold water
    # 30 minutes per load,  4 loads per week (???Sun:Tues:Thur:Sat)
    # Returns weekly water cost
    gallons = 20
    perWeek = 4
    cost = (water(gallons) * perWeek) 
    usage_cost = (gallons, cost)
    return usage_cost

def clotheswasherHWElectricalWeekly () -> float:
    # Weekly clothes washer uses 500 watts, 20 gallons per load at 85% hot water and 15% cold water
    # 30 minutes per load,  4 loads per week (???Sun:Tues:Thur:Sat)
    # Returns weekly electrical cost
    gallons = 20    
    perWeek = 4
    hotWaterPercent = 0.85
    cost = (waterHeater(gallons * hotWaterPercent) * perWeek)    
    usage_cost = (gallons, cost)
    return usage_cost

def clotheswasherElectricalWeekly ()-> float:
    # Weekly clothes washer uses 500 watts, 20 gallons per load at 85% hot water and 15% cold water
    # 30 minutes per load,  4 loads per week (???Sun:Tues:Thur:Sat)
    # Returns weekly electrical cost
    watts = 500
    min_day = 30 / 60
    perWeek = 4
    cost = (electric(watts) * min_day) * perWeek
    usage_cost = (watts, cost)
    return usage_cost  

def clothesdryerElectricalWeekly ()-> float:
    # Weekly clothes washer uses 3000 watts
    # 30 minutes per load,  4 loads per week (???Sun:Tues:Thur:Sat)
    # Returns weekly electrical cost
    watts = 3000
    min_day = 30 / 60
    perWeek = 4
    cost = (electric(watts) * min_day) * perWeek
    usage_cost = (watts, cost)
    return usage_cost    


def temperatureDiffernce(internalTemp, externalTemp):
    #takes the internal and external temperature and return how large that difference is in intervals of +/-10 so a difference of 9 would result in 0 and 29 would result in 2 
    tempDiffernce = externalTemp - internalTemp
    if tempDiffernce < 0:
        return ceil(tempDiffernce/10) #rounds up in the case of negative numbers i.e. -9.5/10 since rounding down would go to -1 and rounding up would go to 0 as we want it to
    else:
        return floor(tempDiffernce/10)


today = datetime.date.today()


# Import DictWriter class from CSV module
from csv import DictWriter

# Starting date range
startdate = datetime.date(2022, 10, 1)

# Ending date range or today's date
tday = datetime.date.today()

# total days from startdate to today's date
daystotal = tday - startdate

#print(daystotal.days)

# list of column names
field_names = ['DeviceID', 'Date', 'Usage', 'Cost']

# Open CSV file in append mode
# Create a file object for this file
with open('./CSVs/electricity.csv', 'w+', newline='') as f_object:

        # Pass the file object and a list
        # of column names to DictWriter()
        # You will get a object of DictWriter
        dictwriter_object = DictWriter(f_object, fieldnames=field_names)
    
        # Pass the dictionary as an argument to the writeheader()
        dictwriter_object.writeheader()


        index = 0
        while (index < daystotal.days):
            tdelta = datetime.timedelta(days=index)
            thisday = startdate + tdelta
            #print(thisday)

            # Find day of week where as Monday = 0 to Sunday = 6
            # https://pynative.com/python-get-the-day-of-week/#:~:text=Use%20the%20weekday()%20method,its%20weekday%20number%20is%200
            dayofweek = thisday.weekday()    
                
            # Print the number for day of week
            #print (dayofweek)
            # If >= 4 equals weekday
            if (dayofweek >= 0 and dayofweek <=4):
                #print("WEEKDAY")
                # Dictionary that we want to add as a new row on weekdays
                dict = [{'DeviceID': 30, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': microwaveM_F()[0], 'Cost': microwaveM_F()[1]},
                        {'DeviceID': 28, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': stoveM_F()[0], 'Cost': stoveM_F()[1] },
                        {'DeviceID': 29, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': ovenM_F()[0], 'Cost': ovenM_F()[1]},
                        {'DeviceID': 9,  'Date': thisday.strftime("%m/%d/%Y"), 'Usage': livingRoomTvM_F()[0], 'Cost':livingRoomTvM_F()[1]},
                        {'DeviceID': 7,  'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bedroomTvM_F()[0], 'Cost': bedroomTvM_F()[1]},
                        {'DeviceID': 47, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsShowerElectricalM_F()[0]/2, 'Cost': bathsShowerElectricalM_F()[1]/2},
                        {'DeviceID': 50, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsShowerElectricalM_F()[0]/2, 'Cost': bathsShowerElectricalM_F()[1]/2},
                        {'DeviceID': 50, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsBathElectricalM_F()[0]/2, 'Cost': bathsBathElectricalM_F()[1]/2},
                        {'DeviceID': 47, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsBathElectricalM_F()[0]/2, 'Cost': bathsBathElectricalM_F()[1]/2},
                        {'DeviceID': 2, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': lightBulbs()[0], 'Cost': lightBulbs()[1]},
                        {'DeviceID': 6, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': lightBulbs()[0], 'Cost': lightBulbs()[1]},
                        {'DeviceID': 13, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': lightBulbs()[0], 'Cost': lightBulbs()[1]},
                        {'DeviceID': 25, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': lightBulbs()[0], 'Cost': lightBulbs()[1]},
                        {'DeviceID': 35, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': lightBulbs()[0], 'Cost': lightBulbs()[1]},
                        {'DeviceID': 39, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': lightBulbs()[0], 'Cost': lightBulbs()[1]},
                        {'DeviceID': 43, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': lightBulbs()[0], 'Cost': lightBulbs()[1]},
                        ]
                
                # if only one 0= MON, 2=WED, 4=FRI, 6=SUN for 4 times per week
                if (dayofweek == 0 or dayofweek == 2 or dayofweek == 4 or dayofweek == 6):
                    # Dictionary that we want to add as a new row 4 days per week
                    dict = [{'DeviceID': 26, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': dishwasherHWElectricalWeekly()[0], 'Cost':dishwasherHWElectricalWeekly()[1]},
                            {'DeviceID': 26, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': dishwasherElectricalWeekly()[0], 'Cost': dishwasherElectricalWeekly()[1]},
                            {'DeviceID': 20, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': clotheswasherHWElectricalWeekly()[0], 'Cost': clotheswasherHWElectricalWeekly()[1]},
                            {'DeviceID': 20, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': clotheswasherElectricalWeekly()[0], 'Cost': clotheswasherElectricalWeekly()[1]},
                            {'DeviceID': 21, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': clothesdryerElectricalWeekly()[0], 'Cost': clothesdryerElectricalWeekly()[1]}]
            
            # if 5 or 6 equals weekend
            #if (dayofweek >= 5 and dayofweek <=6):
            else:
                #print("WEEKEND")
                # Dictionary that we want to add as a new row on weekends
                dict = [{'DeviceID': 30, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': microwaveS_S()[0], 'Cost': microwaveS_S()[1]},
                        {'DeviceID': 28, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': stoveS_S()[0], 'Cost': stoveS_S()[1]},
                        {'DeviceID': 29, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': ovenS_S()[0], 'Cost': ovenS_S()[1]},
                        {'DeviceID': 9, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': livingRoomTvS_S()[0], 'Cost': livingRoomTvS_S()[1]},
                        {'DeviceID': 7, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bedroomTvS_S()[0], 'Cost': bedroomTvS_S()[1]},
                        {'DeviceID': 47, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsShowerElectricalS_S()[0], 'Cost': bathsShowerElectricalS_S()[1]},
                        {'DeviceID': 50, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsBathElectricalS_S()[0], 'Cost': bathsBathElectricalS_S()[1]}]
                        
           
       
            # Pass the dictionary as an argument to the writerow()
            dictwriter_object.writerows(dict)
        
            index = index + 1

with open('./CSVs/water.csv', 'w+', newline='') as f_object:

        # Pass the file object and a list
        # of column names to DictWriter()
        # You will get a object of DictWriter
        dictwriter_object = DictWriter(f_object, fieldnames=field_names)
    
        # Pass the dictionary as an argument to the writeheader()
        dictwriter_object.writeheader()


        index = 0
        while (index < daystotal.days):
            tdelta = datetime.timedelta(days=index)
            thisday = startdate + tdelta
            #print(thisday)

            # Find day of week where as Monday = 0 to Sunday = 6
            # https://pynative.com/python-get-the-day-of-week/#:~:text=Use%20the%20weekday()%20method,its%20weekday%20number%20is%200
            dayofweek = thisday.weekday()    
                
            # Print the number for day of week
            #print (dayofweek)
            # If >= 4 equals weekday
            if (dayofweek >= 0 and dayofweek <=4):
                #print("WEEKDAY")
                # Dictionary that we want to add as a new row on weekdays
                dict = [{'DeviceID': 47, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsShowerWaterM_F()[0], 'Cost': bathsShowerWaterM_F()[1]},
                        {'DeviceID': 50, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsBathWaterM_F()[0], 'Cost': bathsBathWaterM_F()[1]}]
                
                # if only one 0= MON, 2=WED, 4=FRI, 6=SUN for 4 times per week
                if (dayofweek == 0 or dayofweek == 2 or dayofweek == 4 or dayofweek == 6):
                    # Dictionary that we want to add as a new row 4 days per week
                    dict = [{'DeviceID': 26, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': dishwasherWaterWeekly()[0], 'Cost': dishwasherWaterWeekly()[1]},
                            {'DeviceID': 20, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': clotheswasherWaterWeekly()[0], 'Cost': clotheswasherWaterWeekly()[1]}]
            
            # if 5 or 6 equals weekend
            #if (dayofweek >= 5 and dayofweek <=6):
            else:
                #print("WEEKEND")
                # Dictionary that we want to add as a new row on weekends
                dict = [{'DeviceID': 47, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsShowerWaterS_S()[0], 'Cost': bathsShowerWaterS_S()[1]},
                        {'DeviceID': 50, 'Date': thisday.strftime("%m/%d/%Y"), 'Usage': bathsBathWaterS_S()[0], 'Cost': bathsBathWaterS_S()[1]}]
                        
           
       
            # Pass the dictionary as an argument to the writerow()
            dictwriter_object.writerows(dict)
        
            index = index + 1

# Close the file object
f_object.close()

      
# Driver Code

watts = 3500
ans = electric(watts)
print(f"TEST---The cost for {watts} watts is {ans} per kwh.")

print(f"\nDEVICES USED WHEN ACTIVE ONLY SECTION")

ans = lightBulbs()
print(f"The cost for lightbulbs are {ans} per kwh.")

ans = bathFan()
print(f"The cost for bathroom fan is {ans} per kwh.")

ans = hvac()
print(f"The cost for HVAC is {ans} per kwh.")

ans = refrigerator()
print(f"The cost for refrigerator is {ans} per kwh.")

print(f"\nDAILY USAGE SECTION")

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

print(f"\nWEEKLY USAGE SECTION")

ans = dishwasherWaterWeekly ()
print(f"The water cost for the Dishwasher is {ans} at 4 uses per week.")

ans = dishwasherHWElectricalWeekly ()
print(f"The electrical cost for the Dishwasher's Hot Water is {ans} at 4 uses per week.")

ans = dishwasherElectricalWeekly ()
print(f"The electrical cost for the Dishwasher energy is {ans} at 4 uses per week.")

ans = clotheswasherWaterWeekly ()
print(f"The water cost for the Clothes Washer is {ans} at 4 uses per week.")

ans = clotheswasherHWElectricalWeekly ()
print(f"The electrical cost for the Clothes Washer's Hot Water is {ans} at 4 uses per week.")

ans = clotheswasherElectricalWeekly ()
print(f"The electrical cost for the Clothes Washer energy is {ans} at 4 uses per week.")

ans = clothesdryerElectricalWeekly ()
print(f"The electrical cost for the Clothes Dryer energy is {ans} at 4 uses per week.")


