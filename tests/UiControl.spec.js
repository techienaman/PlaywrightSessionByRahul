const {test, expect}=require("@playwright/test");


test("Checkboxes and Radio Button Automation", async ({page})=>{
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   await page.locator("#username").type("rahulshettyacademy");
    await page.locator("#password").type("learning");
    const selector=await page.locator("select.form-control");
    await page.pause();
  await  selector.selectOption("consult");

}
)


test.only("Handle Child Windows",async ({browser})=>{
    const context=await browser.newContext();
    const page=await context.newPage();
 

    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
   const newPage= await Promise.all(
        [context.waitForEvent('page')],
        [page.locator("[href*='documents-request']").click()],
    )
    const statement=await newPage[0].locator(".red").textContent();
    await page.locator("#username").type(statement);

})


