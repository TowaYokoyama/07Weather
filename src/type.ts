//locationの型定義
export interface Locations {
    id:string;//都道府県のid
    name:string;//都道府県の名前
}

//APIから取得したデータをうまく扱うための設計図です
//型Temperatureで気温を取得する。

export interface Temperature {
    celsius: string | null; //摂氏 22c　or null
  fahrenheit: string | null; //華氏 上記と同様
}
//天気に関するアイコン画像の情報
export interface Image{
    url: string; //アイコンのリンク
    title: string; //その画像の説明
}
//一つの予報データ(一日、今日、明日、明後日)を表す型
export interface Forecast{
    date: string; //予報の日付
    dateLabel:string; //今日とか明日とか日本語で表記するところ
    telop:string; //晴れ時々曇りとか
    temperature:{
        min:Temperature; //それぞれ上記で定義済みのTemperature型を使う
        max:Temperature; //それぞれ上記で定義済みのTemperature型を使う
    };
    image:Image; //アイコンをつかうよって　
}
export interface WeatherData{ //API全体のデータ構造
    forecasts:Forecast[]; //予報データの配列
}
