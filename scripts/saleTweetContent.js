// Amazonセール情報のTwitter投稿内容定義
// ブラックフライデー（アフターセール）セール用の投稿内容を定義

import { affiliateConfig } from './affiliateConfig.js';

const { affiliateTag } = affiliateConfig;

// ツイートメッセージ候補配列（全角90文字以内・メイン本文・少し短め・ややカジュアル）
export const saleTweetMessages = [
  '今年買った物の中から「セール中だけ」お得にストックしておきませんか？🉐',
  '注文履歴から「今年買ってよかった物」だけ、セール価格でそっと補充しませんか？🉐',
  '💖 「買ってよかった」と思えた物を、年末のうちにひとつ迎えておきませんか？✨',
  '👛 「安い時に買う」だけでOK。いつもの消耗品はセール中にゆるっとまとめ買い🛒',
  '🌟 一年がんばった自分に、小さなご褒美をひとつだけ足してみる週末にしませんか？💫🎁',
  '🎉 いよいよAmazonブラックフライデー（アフターセール）。本番セール、いっしょに覗きませんか？🔥',
  '🎊 2025年最後のビッグチャンス。気になっていた「あの商品」を狙うなら今かも🎁',
  '😅 「ブラックフライデー（アフターセール）だけは買っちゃう…」その気持ち、今年も一緒です✨',
  '🎉 毎年この時期だけは我慢せずにポチっと。1年で一番ゆるくて楽しい買い物デー💰',
  '😊 普段は我慢してるけど、この週末だけは「欲しかった物」にOKを出してあげませんか？🔥',
  '😭 「また買っちゃった…」と言いつつ、実は毎年ちょっと楽しみにしているセールです💸',
  '💸 普段は節約モードでも、この時期だけは「まとめ買い解禁」にしてもいいかも🎊',
  '🤫 ブラックフライデー（アフターセール）の日だけは、買い物ルールをゆるめてもいいかなって思ってます✨',
];

// 差分用の短い文章（一般的なセール案内用のひと言・ライトめのトーン）
// すべて「セールは12/8(月)まで〜」形式で、短くわかりやすい文にする
export const saleTweetPrefixVariations = [
  'セールは12/8(月)まで✨今がおトクなタイミング🎁',
  'セールは12/8(月)まで🔥今日は我慢解禁デー🎉',
  'セールは12/8(月)まで🎧気になってた物お試しチャンス✨',
  'セールは12/8(月)まで🛒「欲しかった物」だけチェック😊',
  'セールは12/8(月)まで🎀自分へのちょっとしたご褒美に🎁',
  'セールは12/8(月)まで🌙夜更かしショッピング解禁👀',
  'セールは12/8(月)まで📦「いつか買う」をそっと後押し💡',
  'セールは12/8(月)まで💖ちょっといい物を迎える日に✨',
  'セールは12/8(月)まで📦日用品の備蓄チャンス🧂',
  'セールは12/8(月)まで💰未来の私に優しい節約📉',
  'セールは12/8(月)まで📦ストック増やすなら今🧃',
  'セールは12/8(月)まで👀「欲しい物リスト」を見直す日📝',
  'セールは12/8(月)まで🔥買うならサクッと今⚡',
  'セールは12/8(月)まで✨先に仕込んで年末をラクに📦',
  'セールは12/8(月)まで📦一年分をゆるっとまとめ買い🗓️',
  'セールは12/8(月)まで👍リピ買い候補をチェック🛍️',
];

// ハッシュタグ配列
export const saleTweetHashtags = [
  '#Amazonブラックフライデー（アフターセール）',
  '#ブラックフライデー（アフターセール）セール',
  // '#アマゾンセール',
  // '#ブラックフライデー（アフターセール）',
  // '#お得情報',
  // '#セール情報',
  // '#お買い物',
  // '#おすすめ商品',
  // '#Amazon',
  // '#アマゾン',
  // '#セール',
  // '#特価',
  // '#お買い得',
];

// アフィリエイトリンク配列
const saleLinkBlackFridayMainUrl = `https://www.amazon.co.jp/blackfriday?&linkCode=ll2&tag=${affiliateTag}&linkId=213b50b8f3333d64c518a3817bcc1088&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink80PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;
// const saleLink60PercentUrl = `https://www.amazon.co.jp/blackfriday?ref_=nav_cs_td_bf_dt_cr&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522percentOff%255C%2522%253A%257B%255C%2522min%255C%2522%253A60%252C%255C%2522max%255C%2522%253A100%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&linkCode=ll2&tag=${affiliateTag}&linkId=0f9989f6daa8f074182cafb0dfc61121&language=ja_JP&ref_=as_li_ss_tl`;

export const saleTweetAffiliateLinks = [
  `🎉 Amazonブラックフライデー（アフターセール）セール会場はこちら！\n${saleLinkBlackFridayMainUrl}`,
  `💰 年越し準備を始めませんか？セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  `🎁 年末年始を輝かせる準備！セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  `✨ 2025年最後のビッグチャンス！セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  `💖 心のゆとりをプレゼント！セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  // `💰 🎁 割引率80%以上の商品一覧\n${saleLink80PercentUrl}`,
  // `💰 🎁 割引率60%以上の商品一覧\n${saleLink60PercentUrl}`,
];

