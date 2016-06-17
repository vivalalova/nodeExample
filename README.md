#### 環境
```
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh | bash

npm install express -g
npm install express-generator -g
npm install nodemon -g
npm install pm2 -g

nvm install 6.2.1
nvm use 6.2.1
```
mongoDB請參考官網

repo:
https://github.com/vivalalova/nodeExample
repo閱讀方式:  參照commit記錄練習

#### 屎用方式:
```
git clone https://github.com/vivalalova/nodeExample
cd nodeExample
npm install
nodemon
```


#### 自己new一個project
```
express {name} -e
cd {name}
npm install
nodemon
```