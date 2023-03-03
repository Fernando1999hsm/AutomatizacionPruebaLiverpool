const puppeteer = require('puppeteer');

class ProductPage {

    async GetTitle() {
        await page.evaluate(()=>{
            const title = document.querySelector('.a-product__information--title').innerHTML;
            console.log("Titulo: "+title);
        });
    }
    async clickBuyNow(page){
        await page.click('#opc_pdp_buyNowButton');
    }
    async waitDisplayProduct(page){
        await page.waitForSelector('.m-product__size');
    }
}
module.exports = ProductPage;