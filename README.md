# Express-TypeScript-Boilerplate

To use our REST API you can folow these steps : 

Install Insomnia with : 

  https://insomnia.rest/download

Install MongoDB to your Mac with : 

  ```
  $ brew tap mongodb/brew
  $ brew update
  $ brew install mongodb-community@5.0
  ```

Install NodeJS with :

  https://nodejs.org/en/download/

Download with git :

  - API front : 
      https://github.com/julienfdev/sumatohomu.git
      And go to .env.exemple file and rename in .env and replace in this file "\<URL\>" by 'http://localhost:3000'

  - API back :
      https://github.com/ClaraKrchr/express-typescript-boilerplate
  
Open new terminal install Mongoose : 
  
  ```$ npm install mongoose```

Now open terminal from your back directory and use theses commands : 

  ```$ npm install
     $ npm install typescrit
     $ npm install node
  ``
  
Start mongodb with new terminal with : 
  
  ```$ mongod --config /usr/local/etc/mongod.conf```
  
In new terminal from your back directory and your front directory use :
   
  ```npm start```
  

With insomnia, to create your user account :
  
  - go to DEBUG window, use 'POST' and 'JSON' and enter your ID like :
    
  ```
  {
    "email" : "youremail",
    "password" : "yourpassword",
    "username" : "yourusername"   
  }
  ```
   
  - POST enter : "localhost:3000/user"
  - To receip your token to login use POST and enter : "localhost:3000/user/login"
  - Copy your token
  - Open "Bearer Token" window and paste your token here
  - And now you can do some fucking things YEEEAAAHHHH !! 🤟🏼🤌🏼 


attention ça va péter💨
<br><i>fun</i>

  
  
