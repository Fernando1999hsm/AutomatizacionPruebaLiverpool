const puppeteer = require('puppeteer');

class searchResults {

    async waitResults(page) {
        await page.waitForSelector('.a-plp-results-title');
    }
    async clickProduct(page){
        await page.click('#img_0');
    }
    async countProducts(page){
        const linksInfo = await page.evaluate(()=>{
            const elementsLink = document.querySelectorAll('.m-product__card a');
            const links = [];
            for(let element of elementsLink){
                links.push(element.href);
            }
            const elementsImg = document.querySelectorAll('.m-product__card a div figure div section img');
            const imagen = [];
            for(let element of elementsImg){
                imagen.push(element.src);
            }
            const elementsTitle = document.querySelector(".m-figureCard__figcaption article h5").innerHTML;
            const title = [];
            for(let element of elementsTitle){
                title.push(element.src);
            }
            const conjunto = {};
            for(var i=0; i<links.length;i++){
                conjunto.title = title[i];
                conjunto.img = imagen[i];
                conjunto.link = links[i];
            }
            return conjunto;
        });
        console.log(linksInfo);
    }
    async AnyProductsMessages(page){
        await page.waitForSelector('.o-nullproduct-title-query b');
    }
}
module.exports = searchResults;