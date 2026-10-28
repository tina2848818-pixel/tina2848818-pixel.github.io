const products = [
	{
		name: "Mellow Mini",
		category: "COMPACT MODEL",
		badge: "はじめての一台に",
		description: "一人暮らしや、あと一品に。置き場所を選ばないコンパクトサイズ。",
		capacity: "2.2L",
		servings: "1〜2人分",
		price: "¥8,800",
		image: "https://placehold.jp/600x400.png?text=Item"
	},
	{
		name: "Mellow Table",
		category: "STANDARD MODEL",
		badge: "人気モデル",
		description: "毎日のメイン料理にちょうどいい。迷ったら選びたいスタンダード。",
		capacity: "4.0L",
		servings: "2〜4人分",
		price: "¥13,800",
		image: "https://placehold.jp/600x400.png?text=Item"
	},
	{
		name: "Mellow Plus",
		category: "LARGE MODEL",
		badge: "たっぷり大容量",
		description: "家族の食卓や作り置きにも。たっぷり焼けるゆとりの大容量。",
		capacity: "6.0L",
		servings: "4〜6人分",
		price: "¥19,800",
		image: "https://placehold.jp/600x400.png?text=Item"
	}
];

const testimonials = [
	{
		name: "Y. Sato",
		detail: "30代・2人暮らし",
		quote: "揚げ物のハードルがぐっと下がりました。後片付けが楽で、平日の夕食にも活躍しています。",
		image: "https://placehold.jp/150x150.png?text=User"
	},
	{
		name: "M. Tanaka",
		detail: "40代・4人家族",
		quote: "子どもがポテトをよく食べるように。タイマーをセットしている間に別の準備ができるのも助かります。",
		image: "https://placehold.jp/150x150.png?text=User"
	},
	{
		name: "A. Nakamura",
		detail: "20代・ひとり暮らし",
		quote: "料理が得意じゃなくても、食材を入れて待つだけ。野菜を焼くのが定番になりました。",
		image: "https://placehold.jp/150x150.png?text=User"
	}
];

const faqs = [
	{
		question: "予熱は必要ですか？",
		answer: "基本的には予熱なしでお使いいただけます。食材やレシピによって予熱すると、より短時間で仕上がる場合があります。"
	},
	{
		question: "冷凍食品も調理できますか？",
		answer: "はい、冷凍ポテトや冷凍コロッケなども調理できます。パッケージの調理時間を目安に、様子を見ながら調整してください。"
	},
	{
		question: "バスケットのお手入れ方法を教えてください。",
		answer: "本体が十分に冷めてからバスケットを取り外し、台所用中性洗剤と柔らかいスポンジで洗ってください。お手入れの際は各モデルの取扱説明書をご確認ください。"
	},
	{
		question: "どのモデルを選べばよいですか？",
		answer: "一人暮らしや副菜づくりにはMini、2〜4人のご家庭にはTable、まとめて調理したい方にはPlusがおすすめです。"
	}
];

const productList = document.querySelector("#product-list");
const voiceList = document.querySelector("#voice-list");
const faqList = document.querySelector("#faq-list");

if (productList) {
	productList.innerHTML = products.map((product) => `
		<article class="product-card">
			<div class="product-image">
				<img src="${product.image}" alt="${product.name} エアフライヤー" loading="lazy">
				<span class="product-badge">${product.badge}</span>
			</div>
			<div class="product-info">
				<p class="product-category">${product.category}</p>
				<h3>${product.name}</h3>
				<p class="product-description">${product.description}</p>
				<div class="product-specs"><span>容量 ${product.capacity}</span><span>${product.servings}</span></div>
				<div class="product-bottom">
					<span class="product-price">${product.price}<small> (税込)</small></span>
					<a class="product-link" href="#faq">モデルの選び方 <span aria-hidden="true">↗</span></a>
				</div>
			</div>
		</article>
	`).join("");
}

if (voiceList) {
	voiceList.innerHTML = testimonials.map((testimonial) => `
		<article class="voice-card">
			<img src="${testimonial.image}" alt="" loading="lazy">
			<div class="voice-person"><strong>${testimonial.name}</strong><span>${testimonial.detail}</span></div>
			<blockquote>${testimonial.quote}</blockquote>
		</article>
	`).join("");
}

if (faqList) {
	faqList.innerHTML = faqs.map((faq, index) => `
		<article class="faq-item">
			<h3>
				<button class="faq-question" type="button" aria-expanded="false" aria-controls="faq-answer-${index}" id="faq-question-${index}">
					<span>${faq.question}</span><span class="faq-plus" aria-hidden="true"></span>
				</button>
			</h3>
			<div class="faq-answer" id="faq-answer-${index}" role="region" aria-labelledby="faq-question-${index}">
				<div class="faq-answer-inner"><p>${faq.answer}</p></div>
			</div>
		</article>
	`).join("");

	faqList.addEventListener("click", (event) => {
		const button = event.target.closest(".faq-question");
		if (!button) return;

		const answer = document.getElementById(button.getAttribute("aria-controls"));
		const isExpanded = button.getAttribute("aria-expanded") === "true";
		button.setAttribute("aria-expanded", String(!isExpanded));
		answer.classList.toggle("is-open", !isExpanded);
	});
}

const menuToggle = document.querySelector(".menu-toggle");
const globalNav = document.querySelector(".global-nav");

if (menuToggle && globalNav) {
	menuToggle.addEventListener("click", () => {
		const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
		menuToggle.setAttribute("aria-expanded", String(!isExpanded));
		menuToggle.setAttribute("aria-label", isExpanded ? "メニューを開く" : "メニューを閉じる");
		globalNav.classList.toggle("is-open", !isExpanded);
	});

	globalNav.addEventListener("click", (event) => {
		if (!event.target.closest("a")) return;
		menuToggle.setAttribute("aria-expanded", "false");
		menuToggle.setAttribute("aria-label", "メニューを開く");
		globalNav.classList.remove("is-open");
	});
}
