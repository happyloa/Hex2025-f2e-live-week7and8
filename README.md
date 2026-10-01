![](https://raw.githubusercontent.com/happyloa/Hex2025-f2e-live-week7and8/refs/heads/main/public/thumb.webp)

# 六角學院 2025 切版直播班第七、八週作業 — ZOBAA! 旅遊網站

這是六角學院 2025 切版直播班第七、八週的旅遊網站切版作品，包含首頁、搜尋結果、商品介紹、購物車、登入與會員頁面。互動資料主要用於展示畫面，沒有串接正式的會員或購物車後端。

- [線上網站](https://zobaa.worksbyaaron.com/)
- [設計稿](https://www.figma.com/design/3bEeuchVUYwmA2PuHAxQVN/%E5%85%AD%E8%A7%92%EF%BD%9CZOBAA--%E6%97%85%E9%81%8A%E7%B6%B2%E7%AB%99--student-ver.%EF%BC%89?node-id=3-6975&p=f&t=kS2To3qZXkfBm7kj-0)

## 使用技術

- Nuxt 4.5.2、Vue 3
- Tailwind CSS 4，透過 `@tailwindcss/vite` 整合；既有設計色票與字級定義於 `tailwind.config.ts`
- Nuxt Swiper 2.0.2
- Fontsource 提供 Noto Sans TC 與 Poppins 字型，不需在安裝時下載 Google Fonts

## 開始使用

需要 Node.js 22.19+（22.x）、24.11+（24.x）或 26+，以及 npm。複製專案後執行：

```sh
git clone https://github.com/happyloa/Hex2025-f2e-live-week7and8.git
cd Hex2025-f2e-live-week7and8
npm ci
npm run dev
```

在瀏覽器開啟 `http://localhost:3000/`。其餘常用指令：

```sh
npm run typecheck  # 檢查 TypeScript 與 Vue 型別
npm run build      # 建立正式環境版本
npm run preview    # 預覽正式環境版本
```

可搭配 [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 與 [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) 編輯。

## 頁面與目錄

| 路徑                                    | 內容                     |
| --------------------------------------- | ------------------------ |
| `/`                                     | 首頁                     |
| `/search-result`                        | 搜尋結果                 |
| `/product-info`                         | 商品介紹                 |
| `/cart`、`/cart?hasItems`               | 購物車空狀態與有商品狀態 |
| `/login`、`/register`                   | 登入與註冊畫面           |
| `/my-account`、`/my-account/saved-info` | 會員頁面                 |

- `app/pages`：依檔案路徑產生頁面。
- `app/components/Common`、`app/components/Layout`：共用卡片、輪播與版面元件。
- `app/layouts`：登入及會員版面。
- `app/composables/useAuth.ts`：以 Nuxt `useState` 共用展示用登入狀態。
- `app/plugins/auth.client.ts`：啟動時讀取現有的 `sessionStorage.isLoggedIn` 值（若有）。
- `app/utils/number.ts`：`toThousand` 數字格式化工具。
- `app/assets/css/main.css`：Tailwind 與字型樣式。
- `public`：圖片、圖示、favicon 與社群分享圖。

## 展示狀態說明

進入會員頁面時，會員版面會把目前頁面的 `isLoggedIn` 狀態設為 `true`，使導覽列顯示會員資訊。這是切版展示用途，並非登入驗證；程式不會主動把此狀態寫入 `sessionStorage`。

購物車使用頁面內的範例商品資料。`/cart?hasItems` 會顯示有商品畫面，`/cart` 則顯示空狀態；商品的數量、勾選與刪除只影響目前頁面。

## 2025/08/15 助教修改建議

![](https://raw.githubusercontent.com/happyloa/Hex2025-f2e-live-week7and8/refs/heads/main/public/ta-advise.webp)
