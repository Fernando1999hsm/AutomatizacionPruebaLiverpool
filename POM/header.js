const puppeteer = require('puppeteer');

class Header{

    async ExpectLogo(page){
        await page.waitForSelector('.a-header__logo');
    }
    async searchBarType(page, product){
        await page.type('#mainSearchbar',product);
        await page.keyboard.press('Enter');
        //await page.click('.input-group-text');
    }
    async LogInHeader(page, usuario, contrasena){
        await page.click('.sessionMinWidth');
        await page.waitForSelector('.ca61186d8');
        await page.type('#username',usuario);
        await page.type('#password',contrasena);
        await page.click('.cc336b8c1');
    }
    async SignIn(page,email, password, name, birthD, birthM, birthY, gender, number,code){
        await page.waitForSelector('.ca61186d8');
        await page.click('.ulp-alternate-action p a');
        await page.type('#email',email);
        await page.type('#password',password);
        await page.click('.cc336b8c1');
        await page.waitForSelector('.m-title');
        await page.type('#input-user__name',name);
        await page.type('#input-user__apaterno',email);
        await page.type('#input-user__amaterno',email);
        await page.click('#daySelectorLabel');
        await page.click(`#${birthD}`);
        await page.click('#monthSelectorLabel');
        await page.click(`#${birthM}`);
        await page.click('#yearSelectorLabel');
        await page.click(`#${birthY}`);
        if(gender === "female"){
            await page.clik('#female');
        }else{
            await page.clik('#male');
        }
        await page.click('.a-btn');
        await page.waitForSelector('.cb60e04f7 h1');
        await page.type('#phone', number);
        await page.click('.cc336b8c1 [type=submit]');
        await page.waitForSelector('.ca61186d8');
        await page.waitForSelector('#code',code);
        await page.click('.cc336b8c1 [type=submit]');
        await page.waitForSelector('.ttl-welcome');
        await page.click('#login_WelcomeModalHeader [data-dismiss=modal]');


    }
}
module.exports = Header;