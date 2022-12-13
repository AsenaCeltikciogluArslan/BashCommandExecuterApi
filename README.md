#BashCommandExecuterApi

This is a node.js app to run bash commands with API calls and log each command, time, userId and runTime to a log file. Command, its parameters, userId can come as API parameters in the API call. 

## Prerequisites
You need to have Postman installed in order to make api calls. 

You need to have VSCode to run the project.

## Setup
Install VSCode and clone this project to your local.

Type <b>npm install</b> in VSCode terminal

In order to run the project type <b>npm run server</b> 

It should run under this url:
<b>`localhost:3000'</b>

To make API calls:

1- Install Postman

2- Select POST for request type

3- Type URL -> it should be <b>localhost:3000/api/executeCommand</b>

4- Select Body section

5- Select raw option

6- Type 

<b>
{
 "command": "",
 
  "parameters": "" (optional),
  
  "userID": (should be number)>

}
</b>

7- Press Send button

Status code and the json result will be displayed.

It should look like this:

![image](https://user-images.githubusercontent.com/101109013/202933546-25e4cc01-b77f-4d97-95de-9027917f226c.png)

You can find the logged data in the log.txt file which is located under the project folder:

![image](https://user-images.githubusercontent.com/101109013/202933683-eef2db37-fb21-481b-9f49-8ca0b1f2eaab.png)


Log results should look like this :

![image](https://user-images.githubusercontent.com/101109013/202933744-3683d7bb-8bb1-4e20-aa89-4725c81d1a08.png)


In order to run the unit tests type <b>npm run test</b>

Unit Tests are covering the router and api controller methods.


![image](https://user-images.githubusercontent.com/101109013/202934276-99940f98-3468-47f9-a128-441acd48a972.png)
