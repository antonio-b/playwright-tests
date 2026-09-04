const {test, expect} = require('@playwright/test')

test('Test Scenario 1', async ({page}) => {
  const textEntered = "Welcome to TestMu AI";
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', { name: 'Simple Form Demo' }).click();
    await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/simple-form-demo/');
    await page.getByPlaceholder("Please enter your Message").fill(textEntered);
    await page.getByRole('button', { name: "Get Checked Value" }).click();
    await page.locator('#message').filter({ hasText: textEntered });
});