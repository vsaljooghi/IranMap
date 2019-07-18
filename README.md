#### SVG map of 31 Provinces and 430 Counties of Iran

```diff
- We have used Fontiran in this project. Fontiran is a copyrighted material, please refer to https://fontiran.com/
```

<p>

**Credit goes to:**<br/>
&emsp;__For provinces illustration:__<br/> 
&emsp;&emsp;&emsp;&emsp;Peyman Salehi (https://github.com/peymanslh/iranmap).<br/>
&emsp;__For counties illustration:__<br/>
&emsp;&emsp;&emsp;&emsp;Ali Zifan(Wikipedia illustrator) and National Cartographic Center(NCC of Iran)<br/>
&emsp;__For source code(CSS and javascript) inspiration:__<br/>
&emsp;&emsp;&emsp;&emsp;MohammadReza Pourmohammad<br/>
&emsp;__For writing bash scripts and SQL queries to produce JSON files:__<br/>
&emsp;&emsp;&emsp;&emsp;Siavash Shahrooian<br/>


**Features:**<br/>
&emsp;&emsp;1- Sorting ascending or descending based on Persian alphabetic order or quantity values by clicking on the<br/> 
&emsp;&emsp;corresponding header field.<br/>
&emsp;&emsp;2- Visualization(colorize) of one quantity on the map (Red -> Orange -> Yellow)<br/>
&emsp;&emsp;3- Load corresponding JSON file based on a dropdown menu selection.<br/> 
&emsp;&emsp;4- Linked hover effects between map and list of provinces/counties.<br/>
&emsp;&emsp;5- Displaying counties by clicking on each province.<br/> 
&emsp;&emsp;6- Can be used embedded in another page or application (No need to use refresh or back button of web browser).<br/>
&emsp;&emsp;7- Inside JSON files, you can use your own provinces/counties names independent of our naming convention inside html files.</br> 
&emsp;&emsp;To do so, you need to define a dictionary in ./js/dicts and also set the value of "Dict" key in your JSON file.

**Helpful web pages:**<br/>
&emsp;__To find the correct pronunciation of provinces/counties and administrative divisions:__<br/>
&emsp;&emsp;&emsp;&emsp;1- http://gndb.ncc.org.ir/Pages/Search.aspx?d=/P7sSJu73Xk1SDaQgdXzg9yLRc7daMW7&r=yolswon3  <br/>
&emsp;&emsp;&emsp;&emsp;2- https://en.wikipedia.org/wiki/Counties_of_Iran  <br/>
&emsp;&emsp;&emsp;&emsp;3- http://irdv.ncc.org.ir/  <br/>
&emsp;__To get the recent population data:__<br/>
&emsp;&emsp;&emsp;&emsp;https://www.amar.org.ir/  <br/>
&emsp;__Python tool to convert shapefile to SVG:__<br/>
&emsp;&emsp;&emsp;&emsp;https://mapshaper.org/  <br/>


**Usage hints:**<br/>
&emsp;&emsp;1- To add new items to dropdown menu: populate select tag in iranmap.html file. <br/>
&emsp;&emsp;2- In case you want to try it locally using Chromium browser: you should run it over a web server<br/> 
&emsp;&emsp;Due to: Cross origin requests are only supported for protocol schemes: http, https.<br/>  
&emsp;&emsp;For bringing up a simple web server you can use the following command:<br/> 
&emsp;&emsp;&emsp;&emsp;Python2: python -m SimpleHTTPServer<br/> 
&emsp;&emsp;&emsp;&emsp;Python3: python -m http.server <br/> 
&emsp;&emsp;3- To replace relative paths in *nix systems:<br/>
&emsp;&emsp;&emsp;&emsp;find . -type f -exec sed -i 's///g' {} + <br/> 
</p>

![Screen Shot](https://raw.githubusercontent.com/vsaljooghi/IranMap/master/screenshot/population.png)

![Screen Shot](https://raw.githubusercontent.com/vsaljooghi/IranMap/master/screenshot/counties_Khorasan_razavi.png)

![Screen Shot](https://raw.githubusercontent.com/vsaljooghi/IranMap/master/screenshot/transactions.png)
