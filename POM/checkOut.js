const { cp } = require('fs');
const puppeteer = require('puppeteer');

class checkOut{
    async ExpectCheckOutPage(page){
        await page.waitForSelector('.a-checkout__heading');
    }
    async EntregaSection(page,nombreCorto, nombre, AP, AM, CP, Ciudad, Calle, NExt, NumInt, LADA, Telefono, alias, nombreC, NTarjeta, MMAA, CVV){
        await this.ModalDomicilio(page, nombreCorto, nombre, AP, AM, CP, Ciudad, Calle, NExt, NumInt, LADA, Telefono);
        await this.ModalTajeta(page, alias, nombreC, NTarjeta, MMAA, CVV);
        await page.click('#submitForOther');
    }

    async ModalDomicilio(page,nombreCorto, nombre, AP, AM, CP, Ciudad, Calle, NExt, NumInt, LADA, Telefono){
        await page.click('#opc_addressButton');
        await page.waitForSelector('#opc_modal_addressButton');
        await page.click('.opc_addressContinueModal div button');
        await page.waitForSelector('//*[@id="opc_modalAddNewShipAddress"]/form/div[2]/div[2]/div[1]/input');
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[2]/div[2]/div[1]/input',nombreCorto);
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[2]/div[2]/div[1]/input',nombre);
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[2]/div[3]/div[1]/input',AP);
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[2]/div[4]/div/input',AM);
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[4]/div[2]/div[1]/input',CP);
        await page.click('//*[@id="opc_modalAddNewShipAddress"]/form/div[4]/div[3]/div[1]/select');
        await page.click('[value="13"]');
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[4]/div[4]/div[1]/input',Ciudad);
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[4]/div[7]/div[1]/input',Calle);
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[4]/div[8]/div/div[1]/div[1]/input',NExt);
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[4]/div[8]/div/div[2]/div[1]/input',NumInt);
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[4]/div[12]/div/div[1]/div[1]/input',LADA);
        await page.type('//*[@id="opc_modalAddNewShipAddress"]/form/div[4]/div[12]/div/div[2]/div[1]/input',Telefono);
        await page.click('#opc_modal_editAddressButton div button');
        await page.waitForSelector('.mdc-snackbar__label');
    }

    async ModalTajeta(page, alias, nombreC, NTarjeta, MMAA, CVV){
        await page.waitForSelector('#loggedInCC-back');
        await page.type('[inputid="nickName"]',alias);
        await page.type('[inputid="fullNameUser"]',nombreC);
        await page.type('[inputid="cardNumber"]',NTarjeta);
        await page.type('[inputid="cardExp"]',MMAA);
        await page.type('[inputid="cvv"]',CVV);
        await page.click('#loggedInCC-back');
        await page.waitForSelector('.mdc-snackbar__label');
    }
}
module.exports = checkOut;