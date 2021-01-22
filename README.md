# [109-1] Web Programming Final

Group 51 : NTU Sports

## Demo影片連結
```
https://youtu.be/jqH7nEp_taA
```

## 服務說明

這是一個可以管理、查看台大體育賽事的網站，有註冊登入與訪客系統，管理者可以註冊登入來創建、修改比賽，而訪客則可以查看現有的比賽資料，包含：項目、日期、時間、地點...等等，另外還有公告系統，管理者可以發布公告，讓訪客可以瀏覽。

## 使用/操作說明

* 管理者（需帳號密碼註冊、登入）
    - 創建比賽：管理者可以選擇欲創建比賽之盃賽項目，並透過填寫日期、時間、對戰組合及地點等資訊，創立新比賽。
    - 編輯比賽：管理者可以選擇欲編輯之賽事，修改其比賽內容。可進行即時比數更新或賽後上傳比數。
    - 新增公告：管理者可透過填寫填寫標題、日期及內容，在選擇之盃賽項目新增公告。

* 訪客（不需登入）
    - 瀏覽賽程、比賽結果：訪客可以選擇欲瀏覽之比賽項目及盃賽項目，觀看當日的比賽資訊或以結束之比賽結果。
    - 瀏覽公告：訪客可以選擇瀏覽欲觀看之項目，由管理者所發佈之公告。

## Github link
```
https://github.com/JJJamieee/web-programming-final
```

## 使用與參考之框架/模組/原始碼

* Frontend : React、Material-UI、react-router-dom
* Backend : Node.js、Mongoose、dotenv、express、nodemon、bcrypt
* Database : MongoDB

## 專題製作心得
這次專案讓我們都學到如何架設前端、把前端輸入的資料傳入後端並寫進資料庫，過程中因為是合作的方式，所以也遇到了一些整合的問題，最後也有解決，很開心能把這整學期的課應用到一個真實可以使用的網路服務。


## 各組員之貢獻
* 楊鈞智 : 主要是負責前端的註冊、登入頁面的設計與建立、修改比賽資料的表單呈現，並把表單的內容存下來，另外負責撰寫後端資料庫資料 models 的格式。  
* 康崴 : 主要負責首頁及其他頁面之設計、後端資料庫連結、登入功能之 bcrypt 套件之應用。
* 林佳勳 : 主要負責將各個component和container串聯，並與後端資料庫連接，讓整個網站可以順利運行


## Deployed連結
```
http://35.194.149.172:3000/
```

