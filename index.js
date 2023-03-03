const { describe } = require('node:test');
const puppeteer = require('puppeteer');

const header = require('./POM/header');
const searchResult = require('./POM/search-result');
const ProductPage = require('./POM/product');
const CheckOut = require('./POM/checkOut');

var head = new header();
var SResult = new searchResult();
var ProdPage = new ProductPage();
var checkOut = new CheckOut();

const url = "https://www.liverpool.com.mx/tienda/home";

('Story 1-A SearchBar', async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'] 
    });

    const page = await browser.newPage();

    await page.goto(url);

    await head.ExpectLogo(page);
    await head.searchBarType(page, 'Toys');
    await SResult.waitResults(page);
    await SResult.countProducts(page);
    await page.screenshot({path:'./Story1-A.jpg'});
    await browser.close();
})();

('Story 1-B SearchBar', async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'] 
    });

    const page = await browser.newPage();
    await page.goto(url);

    await head.ExpectLogo(page);
    await head.searchBarType(page, 'Chucapsor');
    await SResult.waitResults(page);
    await SResult.AnyProductsMessages(page);

    await page.screenshot({path:'./Story1-B.jpg'});
    await browser.close();
})();

('Story 1-C SearchBar', async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'] 
    });

    const page = await browser.newPage();

    await page.goto(url);

    await head.ExpectLogo(page);
    await head.searchBarType(page, 'POCO x3 PRO');
    await SResult.waitResults(page);
    await SResult.countProducts(page);
    await page.screenshot({path:'./Story1-C.jpg'});
    await browser.close();
})();

('Story 2 Buying a smart TV', async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'] 
    });

    const page = await browser.newPage();

    await page.goto(url);

    await head.ExpectLogo(page);
    await head.LogInHeader(page,"fernand@test.com","Testing123!");
    await head.searchBarType(page, 'Tv 40"');
    await SResult.waitResults(page);
    await SResult.clickProduct(page);
    await ProdPage.waitDisplayProduct(page);
    await ProdPage.GetTitle();
    await ProdPage.clickBuyNow(page);
    await checkOut.ExpectCheckOutPage(page);
    await checkOut.EntregaSection(page);

    await page.screenshot({path:'./Story2.jpg'});
    await browser.close();
})();

('Story 3 Create an account', async()=>{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: null,
        args: ['--start-maximized'] 
    });

    const page = await browser.newPage();

    await page.goto("https://www.liverpool.com.mx/tienda/home");
    await head.ExpectLogo(page);
    await head.SignIn(page,"email", "password", "name", "birthD", "birthM", "birthY", "gender", "number", "code");
    await head.ExpectLogo(page);
    await head.searchBarType(page, 'Toys');
    await SResult.waitResults(page);
    await SResult.clickProduct(page);
    await ProdPage.waitDisplayProduct(page);
    console.log("Prueba1");
    await ProdPage.GetTitle();
    await ProdPage.clickBuyNow(page);

    await page.screenshot({path:'./Story3.jpg'});
    await browser.close();
})();