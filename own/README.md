# NTU Sports

## 服務說明
這是一個可以管理、查看台大體育賽事的網站，有註冊登入與訪客系統，管理者可以註冊登入來創建、修改比賽，而訪客則可以查看現有的比賽資料，包含：項目、日期、時間、地點...等等，另外還有公告系統，管理者可以發布公告，讓訪客可以瀏覽。

## 使用/操作說明
* 管理者（需帳號密碼註冊、登入）
    - 創建比賽：管理者可以選擇欲創立新比賽之盃賽項目，並透過填寫日期、時間、對戰組合及地點等資訊，創立新比賽。
    - 編輯比賽：管理者可以選擇欲編輯之賽事，修改其比賽內容。可進行即時比數更新或賽後上傳比數。
    - 新增公告：管理者可透過填寫填寫標題、日期及內容，在選擇之盃賽項目新增公告。

* 訪客（不需登入）
    - 瀏覽賽程、比賽結果：訪客可以選擇欲瀏覽之比賽項目及盃賽項目，了解盃賽基本資訊及賽程、已完賽之比賽結果。
    - 瀏覽公告：訪客可以選擇瀏覽欲觀看之盃賽中由管理者所發佈之公告。

## 使用與參考之框架/模組/原始碼
* Frontend : React、Material-UI、react-router-dom
* Backend : Node.js、Mongoose、dotenv、express、nodemon、bcrypt
* Database : MongoDB

## 程式架構說明
- `src/`中存放前端的程式碼，`containers/`存放頁面(如首頁、比賽資訊頁等)，為包含多個components的較複雜元件，`components/`存放較單純元件(如NavBar、賽程表格等)
- `server/`中存放後端程式碼，`server.js`初始化了middleware並與mongoDB的資料庫進行連接；`routes/cups.js`定義了從資料庫存取不同資料的API；`models/`中則包含了各個model shema的定義
- 使用react-router-dom控制頁面的切換，主要可分成登入前的頁面跟登入後的頁面，在登入頁面完成登入(驗證密碼無誤)後，會將`authed`這個state設成true，並將頁面導向登入後的頁面
- 使用bcrypt將密碼轉換成hash值再進行儲存或比對
- 賽程、比賽結果的頁面會將每個比賽按照日期排序再分日顯示

## Demo
- 訪客瀏覽頁面
![image](https://github.com/JJJamieee/web-programming-final/blob/refactor/ntusports_demo1.gif)

- 登入
![image](https://github.com/JJJamieee/web-programming-final/blob/refactor/ntusports_demo2.gif)

- 創建比賽
![image](https://github.com/JJJamieee/web-programming-final/blob/refactor/ntusports_demo3.gif)

- 管理盃賽
![image](https://github.com/JJJamieee/web-programming-final/blob/refactor/ntusports_demo4.gif)

- 新增公告
![image](https://github.com/JJJamieee/web-programming-final/blob/refactor/ntusports_demo5.gif)
    

## Reference
- React.js: https://zh-hant.reactjs.org/
- react-router-dom: https://reactrouter.com/web/guides/quick-start
- Material-UI: https://material-ui.com/zh/
- Material-UI Dashboard: https://github.com/mui-org/material-ui/tree/master/docs/src/pages/getting-started/templates/dashboard
- Node.js: https://nodejs.org/en/
- Express: https://expressjs.com/zh-tw/
- Mongoose: https://mongoosejs.com/
- dotenv: https://www.npmjs.com/package/dotenv
- nodemon: https://www.npmjs.com/package/nodemon
- bcrypt: https://www.npmjs.com/package/bcrypt
- MongoDB: https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_apac_taiwan_search_core_brand_atlas_desktop&utm_term=mongodb&utm_medium=cpc_paid_search&utm_ad=e&utm_ad_campaign_id=12212624371&gclid=EAIaIQobChMIpc7jori-7wIVD6-WCh3NJw8BEAAYASAAEgLgCfD_BwE
