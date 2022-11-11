# https://www.youtube.com/watch?v=eirjjyP2qcQ
# Python3 code for getting
# integer value corresponding
# to the specified day of the week
 
# Importing datetime module
import datetime
 
startdate = datetime.date(2022, 10, 1)
tday = datetime.date.today()
daystotal = tday - startdate
print(daystotal)
nextday = 0

while (nextday < daystotal.days):
    tdelta = datetime.timedelta(days=nextday)
    print(startdate + tdelta)
    nextday = nextday + 1

#print(tday)
