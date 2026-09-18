import { test, expect } from '@playwright/test';
import path from 'path';

test('verify newly added position persists across multiple tick intervals', async ({ page }) => {
  await page.goto('file://' + path.resolve('./input.html'));
  await page.locator('#admin-positions-forms .admin-card-box').first().waitFor({ timeout: 5000 });

  const initialCount = await page.locator('#admin-positions-forms .admin-card-box').count();
  expect(initialCount).toBeGreaterThanOrEqual(1);

  // Click Add Index Option
  const addBtn = page.locator('#admin-add-position');
  await addBtn.scrollIntoViewIfNeeded();
  await addBtn.click({ force: true });
  await page.waitForTimeout(500);

  const newCount = await page.locator('#admin-positions-forms .admin-card-box').count();
  expect(newCount).toBe(initialCount + 1);

  // Wait 4 seconds (across multiple tick cycles and simulated network intervals)
  await page.waitForTimeout(4000);

  // Verify the position is STILL present and has NOT disappeared
  const countAfterTicks = await page.locator('#admin-positions-forms .admin-card-box').count();
  expect(countAfterTicks).toBe(newCount);
});
