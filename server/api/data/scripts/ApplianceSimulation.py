from math import floor,ceil

def electric(watts: int) -> float:
    # Electricity is $0.12 per kWh (1w = 1/1000kw)"""
    cost = (watts / 1000) * .12
    return cost

def lightBulbs() -> float:
    # Each bulbs uses 60 watts per hour
    watts = 60
    number_units = 1
    cost = electric(watts) * number_units
    return cost

def bathFan() -> float:
    # Each fan uses 30 watts per hour
    watts = 30
    number_units = 1
    cost = electric(watts) * number_units
    return cost

def hvac() -> float:
    # HVAC uses 3500 watts per hour
    watts = 3500
    number_units = 1
    cost = electric(watts) * number_units
    return cost

def refrigerator() -> float:
    # Refrigerator uses 150 watts per hour
    watts = 150
    number_units = 1
    cost = electric(watts) * number_units
    return cost   
    
def microwaveM_F() -> float:
    # Week Day microwave uses 1100 watts per hour at 20 minutes per day
    watts = 1100
    min_day = 20 / 60
    number_units = 1
    cost = (electric(watts) / min_day) * number_units
    return cost 

def microwaveS_S() -> float:
    # Week End microwave uses 1100 watts per hour at 30 minutes per day
    watts = 1100
    min_day = 30 / 60
    number_units = 1
    cost = (electric(watts) / min_day) * number_units
    return cost       

def waterHeater() -> float:
    #  Week Day hot water heater uses 4500 watts per hour at 4 minutes per day
    watts = 4500
    min_day = 4 / 60
    number_units = 1
    cost = (electric(watts) / min_day) * number_units
    return cost     

def temperatureDiffernce(internalTemp, externalTemp):
    #takes the internal and external temperature and return how large that difference is in intervals of +/-10 so a difference of 9 would result in 0 and 29 would result in 2 
    tempDiffernce = externalTemp - internalTemp
    if tempDiffernce < 0:
        return ceil(tempDiffernce/10) #rounds up in the case of negative numbers i.e. -9.5/10 since rounding down would go to -1 and rounding up would go to 0 as we want it to
    else:
        return floor(tempDiffernce/10)
"""
def add(num1: int, num2: int) -> int:
    # Add two numbers
    num3 = num1 + num2

    return num3
"""

# Driver Code
""""
num1, num2 = 5, 15
ans = add(num1, num2)
print(f"The addition of {num1} and {num2} results {ans}.")
"""
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

ans = waterHeater()
print(f"The cost for hot water heater S-S is {ans} per day.")