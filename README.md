# Supporting materials to Learn How to Bypass APEX's login with Cypress

## Introduction

This Github Repo is provided to complement my blog post [Unit testing APEX – 3 methods to bypass login (with Cypress.io)](https://insum.ca/unit-testing-apex-3-methods-bypass-login-using-cypress-io/).

## Installation

### Step 1: Install the APEX application

There is [an APEX application](/apex/f129826.sql) in the 'apex' folder. It is, as of 4/17/2020, compatible with a minimum APEX version of APEX 20.1. I can suggest you install it in a free workspace provided to you at [apex.oracle.com](https://apex.oracle.com). There isn't much in this application but the Cypress scripts are written to expect it.

### Step 2 : Update your Cypress scripts with your environment details

You will need to update the "appUrl", "cookieName", "pUsername", "pPassword" and "restfulUrl" values in the 3 integration scripts ([1](/cypress/integration/method1.login.js), [2](/cypress/integration/method2.login.js), [3](/cypress/integration/method3.login.js))

Additionally, ou may need to update the "base_url" value in the [cypress.json](cypress.json) file in the root folder.

### Step 3: Install Cypress

In the root folder of this repo, run the command:

```
npm install
```

(For this command to success, you will to have [Node](https://nodejs.org/en/download/) installed)

## Run Cypress scripts

You have several options here, I'll recommend you run the following command from the root folder of this repo:

```
npx cypress open
```

You will see the Cypress Desktop GUI launch and you'll be able to pick the scripts you want to run.

For more details on how to run / configure / write Cypress, visit [the Cypress website](https://cypress.io).

Feel free to reach out to me on twitter [@haydenhhudson](https://twitter.com/haydenhhudson).
