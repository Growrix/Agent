import { expect, test } from "@playwright/test";

test("home hero renders and exposes primary navigation", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { name: "Reliable Plumbing Solutions for Your Home" })).toBeVisible();
  await expect(page.getByRole("navigation", { name: "Primary" }).getByRole("link", { name: "Services" })).toBeVisible();
});

test("quote page submits successfully in local mock mode", async ({ page }) => {
  await page.goto("/quote");
  await page.getByLabel("Your name").fill("Taylor");
  await page.getByLabel("Phone number").fill("0400123123");
  await page.getByLabel("What do you need help with?").selectOption("Emergency repairs");
  await page.getByLabel("Postcode").fill("2000");
  await page.getByLabel("Short job summary").fill("Burst pipe under the laundry sink.");
  await page.getByRole("button", { name: "Submit Quote Request" }).click();
  await expect(page.getByText("Quote request sent")).toBeVisible();
});

test("area detail page shows local services and CTA", async ({ page }) => {
  await page.goto("/areas/inner-west");
  await expect(page.getByRole("heading", { name: "Inner West" })).toBeVisible();
  await expect(page.getByRole("main").getByRole("link", { name: "Get a Quote" }).first()).toBeVisible();
});