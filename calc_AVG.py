import json

with open('provinces_popu.json') as json_file:  
    data = json.load(json_file)

sum = 0 
	
for key, value in data.items():
    if(key != "Date" and key!= "AVG" and key!= "Quantity_Type"):
         sum += int(value) 

print("Total: " + str(sum))
print("Rounded AVG: " + str(round((sum / 31),2)))

data["AVG"] = str(round((sum / 31),2))
		 
with open('provinces_popu.json', 'w') as outfile:  
    json.dump(data, outfile)