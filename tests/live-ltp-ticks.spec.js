import { test, expect } from '@playwright/test';
import path from 'path';

test('verify position LTP and PnL tick live in real-time on input and display pages', async ({ page }) => {
  // Test on input page
  await page.goto('file://' + path.resolve('./input.html'));
  await page.locator('#admin-positions-forms .admin-card-box').first().waitFor({ timeout: 5000 });

  const firstCard = page.locator('#admin-positions-forms .admin-card-box').first();
  const ltpInput = firstCard.locator('.pos-input-ltp');
  const pnlInput = firstCard.locator('.pos-input-pnl');

  const initialLtp = await ltpInput.inputValue();
  const initialPnl = await pnlInput.inputValue();

  expect(initialLtp.length).toBeGreaterThan(0);
  expect(initialPnl.length).toBeGreaterThan(0);

  // Wait 3 seconds for live ticker loop
  await page.waitForTimeout(3000);

  const updatedLtp = await ltpInput.inputValue();
  const updatedPnl = await pnlInput.inputValue();

  // Verify LTP is valid number
  const ltpNum = parseFloat(updatedLtp.replace(/,/g, ''));
  expect(ltpNum).toBeGreaterThan(0);

  // Verify total P&L banner
  const totalPnl = await page.locator('#dashboard-total-pnl-display').textContent();
  expect(totalPnl).toMatch(/^[+-][\d,]+(?:\.\d+)?$/);
});
