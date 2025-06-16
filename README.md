# React + TypeScript 練習專案

> 使用 **React 18、TypeScript 5 與 Vite** 打造的教學專案，快速體驗現代前端開發流程。

---

## 🚀 快速開始

```bash
# 1. 安裝相依套件
npm install

# 2. 啟動開發伺服器 (http://localhost:5173)
npm run dev

# 3. 建立正式版
npm run build

# 4. 預覽正式版
npm run preview
```

### 先決條件

* **Node ≥ 18**（建議搭配 NVM）
* **npm** (v10+) 或 **pnpm / yarn**

---

## 🔧 技術棧

| 層級     | 工具              |
| ------ | --------------- |
| 打包器    | Vite            |
| UI 函式庫 | React 18        |
| 語言     | TypeScript 5    |
| 程式碼品質  | ESLint、Prettier |

---

## 📂 專案結構

```
src/
 ├─ components/            # 可重複使用的 UI 元件
 │   ├─ Hello.tsx          # <Hello name="..." age={...} />
 │   ├─ HelloWorldButton.tsx # 切換 “Hello world” 顯示
 │   └─ ChildButton.tsx    # 子呼叫父 callback 範例
 ├─ App.tsx                # 入口元件
 └─ main.tsx               # ReactDOM 掛載點
```

> **註：** 後續可新增 `pages/`、`services/`、`hooks/`、`types/` 等資料夾，配合 MVC 思維進行分層。

---

## ✨ 已完成功能

* **WelcomeCard / Hello 元件**：透過 props 與 TypeScript 型別驗證顯示個人化問候。
* **HelloWorldButton**：示範 `useState<boolean>` 與條件渲染；按鈕可切換顯示「Hello world」。
* **父→子→父 資料流**：`ChildButton` 接收 callback 更新父元件狀態。
* **（即將推出）TodoList**：陣列狀態管理、CRUD 與 `map` 列表渲染。

---

## 🗺️ 學習路線圖

| 步驟 | 主題                               | 狀態    |
| -- | -------------------------------- | ----- |
| 1  | 專案初始化與工具鏈                        | ✅ 已完成 |
| 2  | 元件與 Props                        | ✅ 已完成 |
| 3  | `useState` 與互動                   | ✅ 已完成 |
| 4  | 父子元件溝通                           | ✅ 已完成 |
| 5  | 列表渲染與 CRUD                       | ⬜ 進行中 |
| 6  | API 串接（fetch / Axios）            | ⬜     |
| 7  | 版面美化（Tailwind CSS / CSS Modules） | ⬜     |
| 8  | 部署（Vercel / Netlify）             | ⬜     |

---

## 🛠️ NPM 指令

| 指令                | 功能              |
| ----------------- | --------------- |
| `npm run dev`     | 啟動開發伺服器 (HMR)   |
| `npm run build`   | 建立最適化正式版        |
| `npm run preview` | 本地預覽正式版         |
| `npm run lint`\*  | 執行 ESLint（若已設定） |

---

## 🙌 參與方式 / 後續步驟

1. Clone 專案並依照 **快速開始** 完成環境安裝。
2. 瀏覽 `src/components` 中的範例元件。
3. 依 **學習路線圖** 逐步新增功能並重構程式碼。
4. 歡迎提出 PR / issue 改進文件、重構或加入新示範功能。

---

## 筆記參考HackMD
1. Day1：https://hackmd.io/@Shiki9029/H1oOCojmgg
2. Day2：https://hackmd.io/@Shiki9029/rktqspi7le
3. Day3：https://hackmd.io/@Shiki9029/rJ_puCTQxe

## 📄 授權

MIT © 2025 Shiki


