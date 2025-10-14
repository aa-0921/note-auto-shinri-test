// createProductRecommendationNote.js
// 商品まとめ記事の自動生成と下書き保存（変数定義のみ）

import { runWithCore } from '@aa-0921/note-auto-core';
import { affiliateLinks, affiliateConfig } from './affiliateConfig.js';

(async () => {
  await runWithCore(async ({ core, wantsBackground }) => {
    // リポジトリ固有の設定
    const title = '💖🉐 買ってよかったおすすめ商品まとめ';

    // 導入文
    const intro = [
      'こんにちは！😆',
      '',
      '今回は、私が実際に買ってよかったと思うおすすめの商品を一挙にご紹介します😊',
      '',
      '心理学の知識、健康、日々の生活に役立つものばかりなので、ぜひチェックしてみてください🙏',
      '',
      '---',
      '',
    ].join('\n');

    // 締めの文章
    const closing = [
      '',
      '---',
      '',
      '最後までお読みいただきありがとうございます！💬',
      '継続して、有益な情報を発信していきますので、スキ・フォローお願いします！',
      '',
      '※ Amazon のアソシエイトとして、「🌙こころ診断ラボ💕心理テスト」は適格販売により収入を得ています。',
      '',
      '#おすすめ商品 #買ってよかった #Amazon #心理テスト #性格診断 #心理学 #生活 #PR',
    ].join('\n');

    // コアライブラリのメソッドを呼び出し
    await core.runCreateProductRecommendationNote({
      background: wantsBackground,
      title,
      affiliateLinks,
      affiliateConfig,
      intro,
      closing,
    });

    console.log('✅ 商品まとめ記事の下書き保存が完了しました');
  });
})();


