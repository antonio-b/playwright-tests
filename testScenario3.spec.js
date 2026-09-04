const {test, expect} = require('@playwright/test')

test('Test Scenario 1', async ({page}) => {
  const textEntered = "Welcome to TestMu AI";
    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', { name: 'Input Form Submit' }).click();
    await expect(page).toHaveURL('https://www.testmuai.com/selenium-playground/input-form-demo/');
    await page.getByRole('button', { name: "Submit" }).click();
    // await expect(dialog).toHaveText('Please fill out this field.');
    page.on('dialog', async dialog => {
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('Please fill out this field.');
  });
//   await page.getByRole('textbox', { name: 'Name' }).click();
  await page.getByRole('textbox', { name: 'Name' }).fill('my');
//   await page.getByRole('textbox', { name: 'Name' }).press('Tab');
  await page.getByRole('textbox', { name: 'Email*' }).fill('tt@tt.com');
//   await page.getByRole('textbox', { name: 'Email*' }).press('Tab');
//   await page.getByRole('textbox', { name: 'Password*' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Password*' }).fill('A');
//   await page.getByRole('textbox', { name: 'Password*' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password*' }).fill('test123');
//   await page.getByRole('textbox', { name: 'Password*' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Password*' }).fill('T');
//   await page.getByRole('textbox', { name: 'Password*' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Password*' }).fill('Test123');
//   await page.getByRole('textbox', { name: 'Company' }).click();
  await page.getByRole('textbox', { name: 'Company' }).fill('my company');
//   await page.getByRole('textbox', { name: 'Website' }).click();
  await page.getByRole('textbox', { name: 'Website' }).fill('company.com');
  await page.getByRole('combobox').selectOption('US');
//   await page.getByRole('textbox', { name: 'City', exact: true }).click();
  await page.getByRole('textbox', { name: 'City', exact: true }).fill('cityof');
//   await page.getByRole('textbox', { name: 'Address 1' }).click();
  await page.getByRole('textbox', { name: 'Address 1' }).fill('111 looney st');
//   await page.getByRole('textbox', { name: 'Address 2' }).click();
  await page.getByRole('textbox', { name: 'Address 2' }).fill('box 2');
//   await page.getByRole('textbox', { name: 'City* State*' }).click();
  await page.getByRole('textbox', { name: 'City* State*' }).fill('arizona');
//   await page.getByRole('textbox', { name: 'Zip Code*' }).click();
  await page.getByRole('textbox', { name: 'Zip Code*' }).fill('13545');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByText('Thanks for contacting us, we will get back to you shortly.')).toBeVisible();
});