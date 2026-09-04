const {test, expect} = require('@playwright/test')

test('Test Scenario 1', async ({page}) => {
  const textEntered = "Welcome to TestMu AI";
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
    await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/drag-drop-range-sliders-demo/');
    await page.locator('#slider3').getByRole('slider').fill('95');
    await page.locator('#rangeSuccess').filter({ hasText: '95' });
});