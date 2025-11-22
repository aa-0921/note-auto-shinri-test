// Amazonセール情報のTwitter投稿内容定義
// ブラックフライデーセール用の投稿内容を定義

import { affiliateConfig } from './affiliateConfig.js';

const { affiliateTag } = affiliateConfig;

// ツイートメッセージ候補配列
export const saleTweetMessages = [
  '📅 2025年Amazonブラックフライデー開催！\n\n年越し準備を今から始めませんか？🎉',
  // '🎯 買うことは準備！お正月を気持ちよく迎える大作戦\n\nAmazonブラックフライデーで、年末の出費をグッと抑えられます💰\n日常品や消耗品を一年で最も安い価格で手に入れるチャンスです💪',
  // '💖 頑張った心と体に「ゆとり」をプレゼント\n\n年末の買い物は、モノを買うこと以上に「心のゆとり」を買う行為です✨\n今のうちに準備しておけば、12月の忙しさから解放されます😊',
  // '🎁 年末年始の「特別なイベント」を輝かせる準備\n\nクリスマスや年末年始の贈り物をまとめて選べば、予算内でより豪華なプレゼントを用意できます🎊\n早めに準備を終えることで、慌てずに相手のことを考えた贈り物を選べます💫',
  '🛒 計画買いで家計の不安をスッキリ解消！\n\nセールは「未来への賢い投資」です💡',
  // '🏠 お家時間を充実させる準備を\n\n新しいテレビで映画を見たり、高性能な調理家電で料理を楽しんだり🎬\n割引価格で手に入れたアイテムが、家族や友人との「特別な時間」をさらに豊かにしてくれます💕',
  // '✨ ストレスを前もって避ける\n\n年末は、大掃除や帰省の準備など、やるべきことが山積みです📋\n今のうちに必要なアイテムを揃えておけば、12月の忙しさや焦りから解放されます😌',
  // '💰 小さな「喜び」を習慣にする\n\nセールで手に入れた新しいアイテムを見るたびに、「これはお得に手に入れたんだ！」という満足感が湧き上がります🎉\nこの小さな喜びの積み重ねが、日々の生活の質を上げます💎',
  '🎊 Amazonブラックフライデー：最高の年末を迎える準備\n\n生活と心を豊かにする買い物を、ぜひお楽しみください🛍️',
  '😅 1年で最も安くなるからブラックフライデーだけは買っちゃいます\n\nAmazonブラックフライデーセール開催中です！\nこの機会を逃すわけにはいきません✨',
  '🎉 毎年このセール時期だけは我慢できずに買い物してしまいます...\n\nAmazonブラックフライデーセール始まりました！\n1年のうちで最も安いから仕方ないです💰',
  '😊 普段は我慢してるけど、ブラックフライデーだけは買ってしまいます\n\nAmazonブラックフライデーセール開催中🔥\n欲しかったあの商品、今が買い時かもしれません！',
  '😭 また買っちゃいます...毎年同じパターン\n\nAmazonブラックフライデーセール開催中！\n1年で最も安いから仕方ないですよね💸',
  '💸 普段は節約モードだけど、この時期だけは許してください\n\nAmazonブラックフライデーセール始まりました🎊\nまとめ買いするなら今がチャンスです！',
  '🤫 ブラックフライデーだけは買い物のルールを破っちゃいます\n\nAmazonブラックフライデーセール開催中🔥\n1年のうちで最も安いから、この機会を逃すわけにはいきません✨',
];

// ハッシュタグ配列
export const saleTweetHashtags = [
  '#Amazonブラックフライデー',
  '#ブラックフライデーセール',
  // '#アマゾンセール',
  // '#ブラックフライデー',
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
  `🎉 Amazonブラックフライデーセール会場はこちら！\n${saleLinkBlackFridayMainUrl}`,
  `💰 年越し準備を始めませんか？セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  `🎁 年末年始を輝かせる準備！セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  `✨ 2025年最後のビッグチャンス！セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  `💖 心のゆとりをプレゼント！セール会場はこちら\n${saleLinkBlackFridayMainUrl}`,
  // `💰 🎁 割引率80%以上の商品一覧\n${saleLink80PercentUrl}`,
  // `💰 🎁 割引率60%以上の商品一覧\n${saleLink60PercentUrl}`,
];

