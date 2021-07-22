const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://qa2.revature.com/login
  await page.goto('https://qa2.revature.com/login');
  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', 'usainbolt08@mailinator.com');
  // Click [placeholder="Password"]
  await page.click('[placeholder="Password"]');
  // Fill [placeholder="Password"]
  await page.fill('[placeholder="Password"]', 'Pass123$');
  // Click button:has-text("LOG IN")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://qa2.revature.com/dashboard' }*/),
    page.click('button:has-text("LOG IN")')
  ]);
  // Click text=Usain Bolt
  await page.click('text=Usain Bolt');
  // Click text=Profile
  await page.click('text=Profile');
  expect(page.url()).toBe('https://qa2.revature.com/profile');
  // Click img[alt="View Loading"]
  await page.click('img[alt="View Loading"]');
  // Go to https://qa2.revature.com/profile
  await page.goto('https://qa2.revature.com/profile');
  // Click [placeholder="First Name"]
  await page.click('[placeholder="First Name"]');
  // Click [placeholder="Last Name"]
  await page.click('[placeholder="Last Name"]');
  // Click [placeholder="Secondary Email"]
  await page.click('[placeholder="Secondary Email"]');
  // Click [placeholder="Git username"]
  await page.click('[placeholder="Git username"]');
  // Click [placeholder="Mobile Number"]
  await page.click('[placeholder="Mobile Number"]');
  // Select object:53
  await page.selectOption('select', 'object:53');
  // Click text=(GMT +5:30) Asia/Kolkata
  await page.click('text=(GMT +5:30) Asia/Kolkata');
  // Click #select2-drop-mask
  await page.click('#select2-drop-mask');
  // Click #select2-drop-mask
  await page.click('#select2-drop-mask');
  // Click text=(GMT +5:30) Asia/Kolkata
  await page.click('text=(GMT +5:30) Asia/Kolkata');
  // Click div[role="option"]:has-text("(GMT +5:00) Asia/Dushanbe")
  await page.click('div[role="option"]:has-text("(GMT +5:00) Asia/Dushanbe")');
  // Click [placeholder="Zip/ Postal Code"]
  await page.click('[placeholder="Zip/ Postal Code"]');
  // Click [placeholder="Zip/ Postal Code"]
  await page.click('[placeholder="Zip/ Postal Code"]');
  // Click [placeholder="Current City"]
  await page.click('[placeholder="Current City"]');
  // Click [placeholder="Current State"]
  await page.click('[placeholder="Current State"]');
  // Click button:has-text("update")
  await page.click('button:has-text("update")');
  // Click [aria-label="Education details"]
  await page.click('[aria-label="Education details"]');
  // Click [aria-label="Vetrans"]
  await page.click('[aria-label="Vetrans"]');
  // Click [aria-label="Others"]
  await page.click('[aria-label="Others"]');
  // Click [aria-label="Portfolios"]
  await page.click('[aria-label="Portfolios"]');
  // Click [aria-label="Account"]
  await page.click('[aria-label="Account"]');
  // Click text=Usain Bolt
  await page.click('text=Usain Bolt');
  // Click a:has-text("Signout")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://qa2.revature.com/login' }*/),
    page.click('a:has-text("Signout")')
  ]);
  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', 'usainbolt08@mailinator.com');
  // Click [placeholder="Password"]
  await page.click('[placeholder="Password"]');
  // Fill [placeholder="Password"]
  await page.fill('[placeholder="Password"]', 'Pass123$');
  // Click button:has-text("LOG IN")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://qa2.revature.com/dashboard' }*/),
    page.click('button:has-text("LOG IN")')
  ]);
  // Click text=Usain Bolt
  await page.click('text=Usain Bolt');
  // Click a:has-text("Profile")
  await page.click('a:has-text("Profile")');
  expect(page.url()).toBe('https://qa2.revature.com/profile');
  // Click text=Update profile picture Profile updated successfully. Profile updation failed. Fi >> i
  await page.click("//a[@data-keyboard='true']//i[1]");
  // Click text=Choose Picture
  await page.click('text=Choose Picture');
  // Upload bios-icon-374537-free-icons-library-bios-png-350_276.jpg
  await page.setInputFiles('text=Choose Picture', 'bios-icon-374537-free-icons-library-bios-png-350_276.jpg');
  // Click text=Update Picture
  await page.click('text=Update Picture');
  // Click text=Usain Bolt
  await page.click('text=Usain Bolt');
  // Click a:has-text("Signout")
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://qa2.revature.com/login' }*/),
    page.click('a:has-text("Signout")')
  ]);
});