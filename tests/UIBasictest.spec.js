const {test, expect}=require("@playwright/test");


test('Browsers Context Test',async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    console.log(page.title());
    await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy"); 
    


    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(page.title());
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");    
});

test.only('Browser Context Test',async ({browser,page})=>{

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
 console.log(page.title());
   await expect(page).toHaveTitle("LoginPage Practise | Rahul Shetty Academy");  
   await page.locator('#username').type("rahulshettyacademy");  
   await page.locator('#password').type('learning');
   await Promise.all(
       [ page.waitForNavigation()],
       [ page.locator('#signInBtn').click()]
   )
   
  
  // console.log(await page.locator("[style*='block']").textContent());
  // await expect(page.locator("[style*='block']")).toContainText("Incorrect");
//   console.log(await page.locator(".card-body  a").nth(0).textContent());
//   console.log(await page.locator(".card-body  a").first().textContent());
const titles=await page.locator(".card-body  a").allTextContents();
console.log(titles);
  




   // type -fill->Both method provides the same thing thing i,e inserting some value to the box but fill can be used to 
   //clear the field as well



   //css selector
   /*
   if id is present 
   css->tagname#id or #id

      if class is present 
   css->tagname.class or .class

   Write CSS based on any attribute
   css->[attribute='value']

   Write css with traversingfrom Parent to Child
   css->parenttagename >> childtagname

   if needs to write locator based on text
   text=''

   */
});


test('Page Context Test',async ({page})=>{
    
   await page.goto("https://www.google.com/");
   console.log(page.title());
   await expect(page).toHaveTitle("Google");

 });


test("Login into Practice Websites",async ({browser})=>{
    const context=await browser.newContext();
    const pages=await context.newPage();
   await pages.goto("https://rahulshettyacademy.com/client/");
   await pages.locator(".text-reset").click();
   await pages.locator("#firstName").type("Naman");
   await pages.locator("#lastName").type("Kumar");
   await pages.locator("#userEmail").type("kumarmayank0605@gmail.com");
   await pages.locator("#userMobile").type("7930996411");
   await pages.locator("#userPassword").type("Hello@12345");
   await pages.locator("#confirmPassword").type("Hello@12345");
   await pages.locator("[type='checkbox']").click();
   await pages.locator("#login").click();
})


test("Login to Client Application", async ({page})=>{
await page.goto("https://rahulshettyacademy.com/client/");
//await page.pause();
await page.locator("#userEmail").type("kumarmayank0605@gmail.com");
await page.locator("#userPassword").type("Hello@12345");
await page.locator("#login").click();
await page.waitForLoadState("networkidle");//It will wait till all the network calls are made in case of microservices architecture
//but in case of non microservice architecture we need to use Promise 

const titles=await page.locator(".card b").allTextContents();
console.log(titles);






})