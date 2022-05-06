// 連想配列で5つのデータを格納
const items = [
	{ name: 'りんご', price: 100, count: 3 },
	{ name: 'ぶどう', price: 200, count: 1 },
	{ name: 'ばなな', price: 100, count: 1 },
	{ name: 'いちご', price: 200, count: 2 },
	{ name: 'みかん', price: 300, count: 3 }
];

// 関数の呼び出し
higherPrice(250);

// higherPrice関数（引数に設定した値より、小計が高額になる商品を出力する）
function higherPrice(targetPrice) {

	/**処理1 */
	for (let i in items) {
		total = items[i].price * items[i].count;
		if (total > targetPrice) {
			console.log(items[i].name);
		}
	}
}
