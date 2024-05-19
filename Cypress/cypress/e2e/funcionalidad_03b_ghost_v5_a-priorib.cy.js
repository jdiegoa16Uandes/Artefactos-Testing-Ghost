import Login from './PageObjects/Login';
import { beforeEach } from 'mocha';
import Tags from './PageObjects/Tags';



describe('funcionalidad-3-apriori-b', () => {

    let element;
    let element2;

  beforeEach(async ()  => {

   
  
    cy.on('uncaught:exception', (err, runnable) => { console.log(err); return false; });
  });

  before(() => {
    
    cy.request('https://api.mockaroo.com/api/fa421fe0?count=2&key=740711a0').then(data => {
          expect(data.status).to.eq(200);
          element = data.body;
      });


      cy.request('https://api.mockaroo.com/api/fa421fe0?count=2&key=740711a0').then(data => {
        expect(data.status).to.eq(200);
        element2 = data.body;
    });

});
 
  it('EP-COLOR-ERRONEO', async () => {
    
    Login.gotoLogin();
    Login.setLoginEmail();
    Login.setLoginPassword();
    Login.submitLogin();
     // cy.screenshot('G5/EP11_2_dashboard', { 'overwrite': true });
     await Tags.gotoTagsPageV5();
    //cy.screenshot('G5/EP11_3_tags', { 'overwrite': true });
    await Tags.gotoNewtagPageV5();
    //cy.screenshot('G5/EP11_4_new_Tag', { 'overwrite': true });
    await Tags.setTagName(element[0].tag);
    await Tags.setTagDescription(element[0].descripcion);
    await Tags.setColorV5(element[0].color);
    await Tags.validateErrorColor();

  });

    
  it('EP15-CREAR-TAG-INTERNO', async () => {
    
  
    Login.gotoLogin();
    Login.setLoginEmail();
    Login.setLoginPassword();
    Login.submitLogin();
    await Tags.gotoTagsPage();
    await Tags.internalTag();
    await Tags.gotoNewtagPage();
    await Tags.setTagName("#"+element[1].tag);
    await Tags.setTagDescription(element[1].tag);
    await Tags.saveTag();
    await Tags.gotoTagsPage();
    await Tags.internalTag();
    await Tags.validateTag("#"+element[1].tag);
  });

   

})