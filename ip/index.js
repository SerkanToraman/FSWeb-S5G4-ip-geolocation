//axios import buraya gelecek
import axios from 'axios';

var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/
// const productPromise =axios.get("https://apis.ergineer.com/ipgeoapi/176.234.90.126")

// console.log('a >',productPromise)

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/



// productPromise
// 	.then((response)=>{
// 		console.log("products >",DomYapici(response.data))
// 	});

/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
		<img src={ülke bayrağı url} />
		<div class="card-info">
			<h3 class="ip">{ip adresi}</h3>
			<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
			<p>Enlem: {enlem} Boylam: {boylam}</p>
			<p>Şehir: {şehir}</p>
			<p>Saat dilimi: {saat dilimi}</p>
			<p>Para birimi: {para birimi}</p>
			<p>ISP: {isp}</p>
	</div>
    </div>
*/

/**
 * 
 * @param {*} product 
 * @returns Container DOM Object
 */

const DomYapici = (product) => {
	const container = document.createElement('div');
	container.classList.add('card');

	const imgBayrak = document.createElement('img');
	imgBayrak.src = 'https://www.crwflags.com/fotw/images/t/tr.gif';
	container.append(imgBayrak);

	const cardContainer = document.createElement('div');
	cardContainer.classList.add('card-info');
	container.append(cardContainer);

	const cardH3 = document.createElement('h3');
	cardH3.classList.add('ip');
	cardH3.textContent = product.sorgu;
	cardContainer.append(cardH3);

	const cardUlke = document.createElement('p');
	cardUlke.classList.add('ulke');
	cardUlke.textContent = `${product.ülke} (${product.ülkeKodu})`
	cardContainer.append(cardUlke);

	const cardEnBoy = document.createElement('p');
	cardEnBoy.textContent=`Enlem: ${product.enlem} Boylam: ${product.boylam}`;
	cardContainer.append(cardEnBoy);

	const cardSehir = document.createElement('p');
	cardSehir.textContent =`Şehir: ${product.bölgeAdı}`;
	cardContainer.append(cardSehir);

	const cardSaat = document.createElement('p');
	cardSaat.textContent = `Saat dilimi: ${product.saatdilimi}`
	cardContainer.append(cardSaat);

	const cardPara = document.createElement('p');
	cardPara.textContent = `Para birimi : ${product.parabirimi}`;
	cardContainer.append(cardPara);

	const cardIsp = document.createElement('p');
	cardIsp.textContent = `ISP : ${product.isp}`;
	cardContainer.append(cardIsp);

	return container;
} 

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/
// const productContainer = document.querySelector('.cards');

// productPromise
// 	.then((response)=>{
// 		console.log("products >",DomYapici(response.data))
// 		productContainer.append(DomYapici(response.data));
// 	});



/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

async function productPromiseAuto (parametre){	
	await ipAdresimiAl();
	const productContainer = document.querySelector('.cards');
	const productPromise =axios.get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`);
		productPromise.then((response)=>{
			productContainer.append(DomYapici(response.data));
		})
}

productPromiseAuto();



//kodlar buraya gelecek