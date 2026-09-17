import { test, expect } from '@playwright/test';
import path from 'path';

test('verify input page position cards and live calculations', async ({ page }) => {
  await page.goto('file://' + path.resolve('./input.html'));
  await page.waitForTimeout(500);

  // 1. Verify cards are rendered
  const cards = page.locator('#admin-positions-forms .admin-card-box');
  const count = await cards.count();
  expect(count).toBeGreaterThanOrEqual(1);

  // 2. Check the first card has underlying, expiry, strike dropdowns
  const firstCard = cards.first();
  const underlyingSelect = firstCard.locator('.pos-builder-underlying');
  const strikeSelect = firstCard.locator('.pos-builder-strike-select');
  const ltpInput = firstCard.locator('.pos-input-ltp');
  const pnlInput = firstCard.locator('.pos-input-pnl');

  await expect(underlyingSelect).toBeVisible();
  await expect(strikeSelect).toBeVisible();
  await expect(ltpInput).toBeVisible();
  await expect(pnlInput).toBeVisible();

  // 3. Test changing underlying to SENSEX
  await underlyingSelect.selectOption('SENSEX');
  await page.waitForTimeout(300);

  // 4. Test changing strike
  const strikeOptions = await strikeSelect.locator('option').count();
  expect(strikeOptions).toBeGreaterThan(10);
  
  // 5. Test Add Position button
  const addBtn = page.locator('#admin-add-position');
  await addBtn.click();
  await page.waitForTimeout(300);

  const newCount = await page.locator('#admin-positions-forms .admin-card-box').count();
  expect(newCount).toBe(count + 1);
});
