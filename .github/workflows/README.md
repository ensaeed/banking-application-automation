Framework Design
🔹 Page Object Model (POM)

All UI interactions are encapsulated under src/pages

Each page class contains:

Locators

Page-specific actions

BasePage.ts holds shared logic (navigation, common waits, helpers)

🔹 Fixtures

Custom fixtures are defined in src/fixtures

Used to:

Reuse setup logic

Share authenticated or pre-loaded state

Keep tests clean and readable

Test Data

Static test data stored in src/data

Decouples test logic from hard-coded values

## 📂 Project Structure

```text
.
├── .github/
│   └── workflows/
│       └── playwright.yml        # GitHub Actions CI pipeline
│
├── config/
│   └── env.ts                    # Environment configuration
│
├── src/
│   ├── data/
│   │   └── customerData.json     # Static test data
│   │
│   ├── fixtures/
│   │   └── homePageFixture.ts    # Custom Playwright fixtures
│   │
│   └── pages/                    # Page Object Model (POM)
│       ├── BasePage.ts
│       ├── HomePage.ts
│       ├── Customers.ts
│       ├── AddCustomers.ts
│       ├── AddCustomers.ts
│       ├── OpenAccount.ts
│       └── CustomerDepositPage.ts
│
├── tests/
│   ├── addcustomer.spec.ts
│   ├── customer-account.spec.ts
│   ├── deposit-customer-account.spec.ts
│   ├── homepage.spec.ts
│   ├── homepagewithfixture.spec.ts
│   └── openaccount.spec.ts
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
