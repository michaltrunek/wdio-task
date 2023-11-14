# Technical QA Task (EQS)

In this README, you will find information on how to set up the project, run tests, and detailed information about the solution itself.


## Table of Contents
- [Approach](#approach)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Important files and folders](#important-files-and-folders)
- [Running Tests](#running-tests)
- [Reporting](#reporting)

## Approach

Concerning the test cases, I made a choice not to strictly adhere to the initial task, where 3 test cases should be automated. While it would have been possible to handle this programmatically, doing so would have contradicted testing principles as test cases should be independed from each other. Instead, I opted to create one test case only, where I first select one random product from Women's deals and one from Men's deals. In the last step of the test case I proceed to checkout for these two products.

When it comes to selecting of clothes types, items from the product list, colors & sizes, these are being selected randomly to avoid using hardcoded data and improve overall stability of the test case.

To report the test results, I chose Allure reporter as the default one.

## Prerequisites

- Node >18 

## Installation

1. Run `npm install` - install all dependencies

## Important files and folders
`./tests/` - contains all tests in this folder

`./pages/` - contains all POM here

`./wdio.conf.ts` - contains wdio options

## Running Tests

- `npm run test` - run tests locally

## Reporting

- `npm run report` - generate & open allure test report