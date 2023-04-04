document.getElementsByName;
const bannerList = document.querySelectorAll('.non-view'); // 길이가 5인 nodeList

let i = 0;

// 수정 완료 코드 (최종)

for (let i = 0; i < 1000000; i++) {
	// console.log(bannerList[i]);
	// console.log('출력');

	let j = i % 5;
	setTimeout(() => {
		bannerList[j].classList.replace('non-view', 'view');
		// console.log('출력');
		// console.log(`현재 인덱스가 ${i}입니다.`);
		// console.log(`현재 j 인덱스가 ${j}입니다.`);
		if (j >= 1) {
			bannerList[j - 1].classList.replace('view', 'non-view');
		}
		if (i !== 0 && j == 0) {
			bannerList[4].classList.replace('view', 'non-view');
		}
	}, i * 2000);
}

// let i = 0;
// for (let i = 0; i < bannerList.length; i++) {
// 	// console.log(bannerList[i]);
// 	// console.log('출력');

// 	setTimeout(() => {
// 		bannerList[i].classList.replace('non-view', 'view');
// 		console.log('출력');
// 		if (i >= 1) {
// 			bannerList[i - 1].classList.replace('view', 'non-view');
// 		}
// 	}, i * 1000);

// let i = 0;
// for (let i = 0; true; i++) {
// 	// console.log(bannerList[i]);
// 	// console.log('출력');
// 	let j = i % bannerList.length;
// 	setTimeout(() => {
// 		bannerList[j].classList.replace('non-view', 'view');
// 		console.log('출력');
// 		if (j >= 1) {
// 			bannerList[j - 1].classList.replace('view', 'non-view');
// 		}
// 	}, j * 1000);
// 	// if (i == 5) {
// 	// 	i = 0;
// 	// }
// }

// setTimeout(() => {
// 	for (let i = 0; i < bannerList.length; i++) {
// 		console.log(bannerList[i]);
// 		bannerList[i].classList.replace('non-view', 'view');
// 	}
// }, 1000);
