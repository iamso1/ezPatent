# 用專利公開號查詢專利類別

## 使用方法:

> yarn install 

> yarn start

## 設定: 

1. 修改info.ts, 在array中輸入專利號碼

```ts
export const publicNums: string[] = ['I313656', 'I221717', '200704017', '200704017'];
```

## 輸出範例:

```js
[ 
'B60W,不同類型或不同功能之車輛子系統的聯合控制；專門適用於混合動力車輛的控制系統；不與某一特定子系統的控制相關聯的道路車輛駕駛控制系統 [8]',
'H04L,數位資訊之傳輸，例如電報通信（打字機見B41J；命令電報、火警或警察用電報見G08B；圖像電報見G08B,C；傳真電報系統見G08C；編密碼或解密碼之裝置本身見G09C；一般編碼、解碼或代碼變換見H03M；電報及電話通信之公用設備見H04M；選擇見H04Q）[4]',
 ]
```
