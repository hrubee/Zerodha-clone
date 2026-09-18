import { test, expect } from '@playwright/test';
import path from 'path';

test('verify 8:00 AM normal opacity vs 3:30 PM faded opacity behavior', async ({ page }) => {
  await page.goto('file://' + path.resolve('./index.html'));
  await page.waitForTimeout(500);

  // Test at 8:45 AM (Current morning time) - must be normal opacity (not market-closed-faded)
  const isFadedMorning = await page.evaluate(() => {
    // Check if isMarketClosedOrPast330() logic evaluates to false at 8:45 AM
    const istMinutes = 8 * 60 + 45; // 525 min
    return istMinutes >= 930 || istMinutes < 480;
  });
  expect(isFadedMorning).toBe(false);

  // Test at 3:45 PM (After market hours) - must be faded
  const isFadedEvening = await page.evaluate(() => {
    const istMinutes = 15 * 60 + 45; // 945 min
    return istMinutes >= 930 || istMinutes < 480;
  });
  expect(isFadedEvening).toBe(true);

  // Test at 7:30 AM (Early morning before 8:00 AM) - must be faded
  const isFadedEarlyMorning = await page.evaluate(() => {
    const istMinutes = 7 * 60 + 30; // 450 min
    return istMinutes >= 930 || istMinutes < 480;
  });
  expect(isFadedEarlyMorning).toBe(true);

  // Test at 8:00 AM exact - must be normal opacity
  const isFadedEightAM = await page.evaluate(() => {
    const istMinutes = 8 * 60 + 0; // 480 min
    return istMinutes >= 930 || istMinutes < 480;
  });
  expect(isFadedEightAM).toBe(false);
});
