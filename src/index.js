import './style/style.css'
import { getMaxDigit, } from "./modules/function.js"
import { pairs } from "./modules/arrays.js"
import { getRandomArray } from "./modules/arraysMethod.js"
import { maxPrice } from "./modules/variables.js"
import { ukraine, getMyTaxes } from "./modules/funcProgramming.js"
import { createIdGenerator } from "./modules/generator.js"
import { sumNumbers } from "./modules/loops.js"
import { getSubjects } from "./modules/obj.js"
import { getRandomChinese } from "./modules/promises.js"
import { mariia } from "./modules/prototype.js"
import { generateBlocksInterval, domBntEl } from "./modules/dom.js"
import "./modules/events.js"
import './sounds/BellTubular1005_31_4.mp3'
import './sounds/Castanets1021_31_2.mp3'
import './sounds/Chimes1020_37_4.mp3'
import './sounds/Chimes1020_37_5.mp3'
import './sounds/Cymbal1020_13_5.mp3'
import './sounds/Cymbal1020_17_3.mp3'
import './sounds/DrumsBongos1020_18_1.mp3'
import './sounds/ScrapesPercussion1020_49_7.mp3'
import './sounds/SnareDrum1020_09_4.mp3'
import './modules/server.js'
import "./icon/female-svgrepo-com.svg"
import "./icon/male-svgrepo-com.svg"
import "./icon/settings-svgrepo-com.svg"

console.log(`1) MaxDigit of 3458 : ${getMaxDigit(3458)}`)
console.log(`2) Pairs of student : ${JSON.stringify(pairs)}`)
console.log(`3) Random array : [${getRandomArray(7, 2, 15)}]`)
console.log(`4) Max Price of products is: ${maxPrice}`)
console.log(`5) My Taxes are : ${getMyTaxes.call(ukraine, 1400)}`)
console.log(`6) Generator Start : ${createIdGenerator().next().value}`)
console.log(`7) Sum of Numbers : ${sumNumbers(3, 7)}`)
console.log(`8) List of subjects : ${getSubjects(2)}`)
console.log(`9) Info about Mariia : ${'mariia.getInfo ==>', mariia.getInfo}`);
getRandomChinese(3).then((resolve) => console.log(`10) Chinese characters: ${resolve}`));
domBntEl.addEventListener("click", () => {
	generateBlocksInterval()
});









