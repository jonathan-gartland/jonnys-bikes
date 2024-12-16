import { test, expect } from '@playwright/test';

test.describe("e2e tests for Jonny's Bikes SPA", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/jonnys-bikes');
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test("Verify on Jonny's Bikes Page", async ({ page }) => {
    await expect(page.getByText(/Jonny's Bikes/)).toBeVisible();
  });

  test('Verify delayed Loading of About section via text change', async ({
    page,
  }) => {
    const aboutHeaderText =
      /Delayed Loading component, and a brief description of the infographic SPA/;
    const loadingText = /Loading.../;
    const elementLoading = page.getByText(loadingText);
    // override builtin 5s waits to test 3 sec delay load
    await expect(elementLoading).toHaveText(loadingText, { timeout: 1 });
    await page.waitForTimeout(3000); // confirmed this test fails if wait
    // set to less than 3s, which is expected
    await expect(elementLoading).toHaveText(aboutHeaderText, { timeout: 1 });
  });
});
