$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computer.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Functionality",
  "description": "As user, I would like to shopping on Computer category",
  "id": "computer-page-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3776857600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 82481600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 482076800,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 27500,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "I should able to navigate to computer page successfully",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on computer page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am successfully navigate to computer page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the computer message \"Computer\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 11000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullyNavigateToComputerPage()"
});
formatter.result({
  "duration": 13700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Computer",
      "offset": 32
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheComputerMessage(String)"
});
formatter.result({
  "duration": 38851600,
  "error_message": "org.junit.ComparisonFailure: computer text is not match expected:\u003cComputer[]\u003e but was:\u003cComputer[s]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.nopcommerce.demo.cucumber.steps.ComputerPageTest.iCanSeeTheComputerMessage(ComputerPageTest.java:28)\r\n\tat ✽.And I can see the computer message \"Computer\"(computer.feature:13)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 899042800,
  "status": "passed"
});
formatter.before({
  "duration": 1812214900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 29300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 489241000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 37200,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "I should able to navigate to desktops page successfully",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-navigate-to-desktops-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I am successfully navigate to desktop page",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "I can see the desktops message \"Desktops\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 451438300,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullyNavigateToDesktopPage()"
});
formatter.result({
  "duration": 15300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Desktops",
      "offset": 32
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheDesktopsMessage(String)"
});
formatter.result({
  "duration": 27713100,
  "status": "passed"
});
formatter.after({
  "duration": 635742000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 22,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"\u003cProcessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"\u003cRAM\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"\u003cHDD\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"\u003cOS\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"\u003cSoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.examples({
  "line": 35,
  "name": "",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;",
  "rows": [
    {
      "cells": [
        "Processor",
        "RAM",
        "HDD",
        "OS",
        "Software"
      ],
      "line": 36,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 37,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 38,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 39,
      "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 3197979900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 21000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 465572500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 21300,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 467116600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 26
    }
  ],
  "location": "ComputerPageTest.iSelectDesktopProduct(String)"
});
formatter.result({
  "duration": 1133759100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 47
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheBuildYourOwnComputerMessage(String)"
});
formatter.result({
  "duration": 31443800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 67465100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 72622200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 54147900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 52854400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 48728500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 39849600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 16000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 842723800,
  "status": "passed"
});
formatter.after({
  "duration": 642639000,
  "status": "passed"
});
formatter.before({
  "duration": 2459263900,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 38600,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 457970100,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 14600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 401092900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 26
    }
  ],
  "location": "ComputerPageTest.iSelectDesktopProduct(String)"
});
formatter.result({
  "duration": 648312400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 47
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheBuildYourOwnComputerMessage(String)"
});
formatter.result({
  "duration": 24148200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 33802300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 60546800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 63590900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 56269900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 54977000,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 38857900,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 11200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 276500100,
  "status": "passed"
});
formatter.after({
  "duration": 642123300,
  "status": "passed"
});
formatter.before({
  "duration": 2478541400,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on computer page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on computer page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 22500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnComputerTab()"
});
formatter.result({
  "duration": 456260400,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmOnComputerPage()"
});
formatter.result({
  "duration": 21200,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "I should able to select my own build computer",
  "description": "",
  "id": "computer-page-functionality;i-should-able-to-select-my-own-build-computer;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 21,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 23,
  "name": "I click on desktops link",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "I select desktop product \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I can see the build your own computer message \"Build your own computer\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I select processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I select ram \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I select hdd \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I select os \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I select software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I am successfully select my own build computer",
  "keyword": "Then "
});
formatter.step({
  "line": 33,
  "name": "I can see the addtocart message \"The product has been added to your shopping cart\"",
  "keyword": "And "
});
formatter.match({
  "location": "ComputerPageTest.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 420589300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 26
    }
  ],
  "location": "ComputerPageTest.iSelectDesktopProduct(String)"
});
formatter.result({
  "duration": 611813900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Build your own computer",
      "offset": 47
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheBuildYourOwnComputerMessage(String)"
});
formatter.result({
  "duration": 22549100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "ComputerPageTest.iSelectProcessor(String)"
});
formatter.result({
  "duration": 34620100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectRam(String)"
});
formatter.result({
  "duration": 54507400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "ComputerPageTest.iSelectHdd(String)"
});
formatter.result({
  "duration": 49401700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "ComputerPageTest.iSelectOs(String)"
});
formatter.result({
  "duration": 46610700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "ComputerPageTest.iSelectSoftware(String)"
});
formatter.result({
  "duration": 65353500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 41274500,
  "status": "passed"
});
formatter.match({
  "location": "ComputerPageTest.iAmSuccessfullySelectMyOwnBuildComputer()"
});
formatter.result({
  "duration": 8700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The product has been added to your shopping cart",
      "offset": 33
    }
  ],
  "location": "ComputerPageTest.iCanSeeTheAddtocartMessage(String)"
});
formatter.result({
  "duration": 274222900,
  "status": "passed"
});
formatter.after({
  "duration": 635119300,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Functionality",
  "description": "As user, I would like to login with valid credentials",
  "id": "login-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1788323200,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 31800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 429734200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 18200,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "I should navigate to login page successfully",
  "description": "",
  "id": "login-functionality;i-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on login page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am successfully navigate to login page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the message \"Welcome, Please Sign In!\"",
  "keyword": "And "
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 34600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmSuccessfullyNavigateToLoginPage()"
});
formatter.result({
  "duration": 29400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 23
    }
  ],
  "location": "LoginPageTest.iCanSeeTheMessage(String)"
});
formatter.result({
  "duration": 26911400,
  "status": "passed"
});
formatter.after({
  "duration": 657229900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "I should not login with invalid invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter email \"\u003cemailAddress\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the error message \"\u003cerror message\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 22,
  "name": "",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "emailAddress",
        "password",
        "error message"
      ],
      "line": 23,
      "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;1"
    },
    {
      "cells": [
        "abcd123@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 24,
      "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;2"
    },
    {
      "cells": [
        "xyz123@gmail.com",
        "abc123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 25,
      "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfafasd@gmail.com",
        "xyz123",
        "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found"
      ],
      "line": 26,
      "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1820162000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 38400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 461007100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 11600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "I should not login with invalid invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter email \"abcd123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "abcd123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 69879400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 66498900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 362227800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 28067500,
  "status": "passed"
});
formatter.after({
  "duration": 647247700,
  "status": "passed"
});
formatter.before({
  "duration": 1759469700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 47200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 401904900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 11800,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "I should not login with invalid invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter email \"xyz123@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"abc123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 64907100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 62272500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 381662400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 20984500,
  "status": "passed"
});
formatter.after({
  "duration": 657582500,
  "status": "passed"
});
formatter.before({
  "duration": 2501301100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 18400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 414718600,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I should not login with invalid invalid credentials",
  "description": "",
  "id": "login-functionality;i-should-not-login-with-invalid-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I enter email \"adfafasd@gmail.com\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I enter password \"xyz123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should see the error message \"Login was unsuccessful. Please correct the errors and try again.\nNo customer account found\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "adfafasd@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 54111900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "xyz123",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 50258700,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 358216200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found",
      "offset": 32
    }
  ],
  "location": "LoginPageTest.iShouldSeeTheErrorMessage(String)"
});
formatter.result({
  "duration": 25365300,
  "status": "passed"
});
formatter.after({
  "duration": 650571600,
  "status": "passed"
});
formatter.before({
  "duration": 1763523600,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 38900,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 455425200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "I should login successfully with valid credentials",
  "description": "",
  "id": "login-functionality;i-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I enter email \"abc222@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter password \"abc123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I am successfully login with valid credentials",
  "keyword": "Then "
});
formatter.step({
  "line": 34,
  "name": "I can see logout link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "abc222@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 63147500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123456",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 66579100,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 370271300,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmSuccessfullyLoginWithValidCredentials()"
});
formatter.result({
  "duration": 23200,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iCanSeeLogoutLink()"
});
formatter.result({
  "duration": 40084586200,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Log out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-N67ITPLC\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [067db5143ec1fe63b18772927fe1f88c, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Log out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\megha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60639}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60639/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 067db5143ec1fe63b18772927fe1f88c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.isDisplayed(Unknown Source)\r\n\tat com.nopcommerce.demo.websitepages.LoginPage.logOutLinkIsDisplay(LoginPage.java:64)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginPageTest.iCanSeeLogoutLink(LoginPageTest.java:61)\r\n\tat ✽.And I can see logout link(login.feature:34)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 897437700,
  "status": "passed"
});
formatter.before({
  "duration": 2495376300,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on Login page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on login page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 27400,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginLink()"
});
formatter.result({
  "duration": 446679000,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iAmOnLoginPage()"
});
formatter.result({
  "duration": 17100,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "I should logout successfully after login with valid credentials",
  "description": "",
  "id": "login-functionality;i-should-logout-successfully-after-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 36,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 38,
  "name": "I enter email \"abc222@gmail.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "I enter password \"abc123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "I am successfully logout",
  "keyword": "Then "
});
formatter.step({
  "line": 43,
  "name": "I can see lonin link",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "abc222@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginPageTest.iEnterEmail(String)"
});
formatter.result({
  "duration": 65574600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123456",
      "offset": 18
    }
  ],
  "location": "LoginPageTest.iEnterPassword(String)"
});
formatter.result({
  "duration": 62225500,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLoginButton()"
});
formatter.result({
  "duration": 403701800,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageTest.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 40077794100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027Log out\u0027)]\"}\n  (Session info: chrome\u003d101.0.4951.67)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027LAPTOP-N67ITPLC\u0027, ip: \u0027192.168.1.67\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [cdc92feda19f308207722a4af0c1528b, findElement {using\u003dxpath, value\u003d//a[contains(text(),\u0027Log out\u0027)]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 101.0.4951.67, chrome: {chromedriverVersion: 101.0.4951.41 (93c720db8323..., userDataDir: C:\\Users\\megha\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:60677}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:60677/devtoo..., se:cdpVersion: 101.0.4951.67, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: cdc92feda19f308207722a4af0c1528b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.click(Unknown Source)\r\n\tat com.nopcommerce.demo.utility.Utilites.clickOnElement(Utilites.java:50)\r\n\tat com.nopcommerce.demo.websitepages.LoginPage.clickOnLogOutLink(LoginPage.java:69)\r\n\tat com.nopcommerce.demo.cucumber.steps.LoginPageTest.iClickOnLogoutLink(LoginPageTest.java:66)\r\n\tat ✽.And I click on logout link(login.feature:41)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "LoginPageTest.iAmSuccessfullyLogout()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "LoginPageTest.iCanSeeLoninLink()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 799317600,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Registration Functionality",
  "description": "As user , I would like to register with valid information",
  "id": "registration-functionality",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2473188000,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on register page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 20900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 412109800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 16300,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "I should navigate to register page successfully",
  "description": "",
  "id": "registration-functionality;i-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 9,
      "name": "@sanity"
    },
    {
      "line": 9,
      "name": "@smoke"
    },
    {
      "line": 9,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "I am on register page",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I am successfully navigate to register page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "I can see the register message \"Register\"",
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageTest.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 10700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmSuccessfullyNavigateToRegisterPage()"
});
formatter.result({
  "duration": 12700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Register",
      "offset": 32
    }
  ],
  "location": "RegisterPageTest.iCanSeeTheRegisterMessage(String)"
});
formatter.result({
  "duration": 26204800,
  "status": "passed"
});
formatter.after({
  "duration": 648944600,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 16,
  "name": "I should display message of all mandatory fields",
  "description": "",
  "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should get error message for firstname field\"\u003cfirstNameErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should get error message for lastname field \"\u003clastNameErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get error message for email field\"\u003cemailErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get error message for password field\"\u003cpasswordErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should get error message for confirm password field\"\u003cconfirmPasswordErrorMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields;",
  "rows": [
    {
      "cells": [
        "firstNameErrorMessage",
        "lastNameErrorMessage",
        "emailErrorMessage",
        "passwordErrorMessage",
        "confirmPasswordErrorMessage"
      ],
      "line": 25,
      "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields;;1"
    },
    {
      "cells": [
        "First name is required.",
        "Last name is required.",
        "Email is required.",
        "Password is required.",
        "Password is required."
      ],
      "line": 26,
      "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 1752741800,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on register page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 34100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 453734600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 20100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "I should display message of all mandatory fields",
  "description": "",
  "id": "registration-functionality;i-should-display-message-of-all-mandatory-fields;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 15,
      "name": "@smoke"
    },
    {
      "line": 15,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "I click on register button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "I should get error message for firstname field\"First name is required.\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I should get error message for lastname field \"Last name is required.\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I should get error message for email field\"Email is required.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I should get error message for password field\"Password is required.\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I should get error message for confirm password field\"Password is required.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 86445100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "First name is required.",
      "offset": 47
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForFirstnameField(String)"
});
formatter.result({
  "duration": 29800200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Last name is required.",
      "offset": 47
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForLastnameField(String)"
});
formatter.result({
  "duration": 27899200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email is required.",
      "offset": 43
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForEmailField(String)"
});
formatter.result({
  "duration": 23953700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 46
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForPasswordField(String)"
});
formatter.result({
  "duration": 25552400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 54
    }
  ],
  "location": "RegisterPageTest.iShouldGetErrorMessageForConfirmPasswordField(String)"
});
formatter.result({
  "duration": 27344500,
  "status": "passed"
});
formatter.after({
  "duration": 642100900,
  "status": "passed"
});
formatter.before({
  "duration": 1799516100,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "I am on register page of nopcommerce",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on register link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I am on register page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginPageTest.iOnHomePage()"
});
formatter.result({
  "duration": 24100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 453442200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmOnRegisterPage()"
});
formatter.result({
  "duration": 14300,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "I should create new account successfully with valid information",
  "description": "",
  "id": "registration-functionality;i-should-create-new-account-successfully-with-valid-information",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "I enter gender \"F\"",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "I enter firstname \"john\"",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I enter lastname \"john\"",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "I enter date of birthday \"26\"",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "I enter date of birthmonth \"July\"",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter date of birthyear \"1998\"",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I enter emailaddress \"john@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I enter password for register \"john12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I enter confirm password \"john12345\"",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "I am successfully register with valid information",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "I can see the register text message \"Your registration completed\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "F",
      "offset": 16
    }
  ],
  "location": "RegisterPageTest.iEnterGender(String)"
});
formatter.result({
  "duration": 81944600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 19
    }
  ],
  "location": "RegisterPageTest.iEnterFirstname(String)"
});
formatter.result({
  "duration": 63167800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john",
      "offset": 18
    }
  ],
  "location": "RegisterPageTest.iEnterLastname(String)"
});
formatter.result({
  "duration": 63171400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "26",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.iEnterDateOfBirthday(String)"
});
formatter.result({
  "duration": 67617200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "July",
      "offset": 28
    }
  ],
  "location": "RegisterPageTest.iEnterDateOfBirthmonth(String)"
});
formatter.result({
  "duration": 66633800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1998",
      "offset": 27
    }
  ],
  "location": "RegisterPageTest.iEnterDateOfBirthyear(String)"
});
formatter.result({
  "duration": 58622300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john@gmail.com",
      "offset": 22
    }
  ],
  "location": "RegisterPageTest.iEnterEmailaddress(String)"
});
formatter.result({
  "duration": 51622700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john12345",
      "offset": 31
    }
  ],
  "location": "RegisterPageTest.iEnterPasswordForRegister(String)"
});
formatter.result({
  "duration": 48030900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "john12345",
      "offset": 26
    }
  ],
  "location": "RegisterPageTest.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 46117000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 674581400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterPageTest.iAmSuccessfullyRegisterWithValidInformation()"
});
formatter.result({
  "duration": 20400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 37
    }
  ],
  "location": "RegisterPageTest.iCanSeeTheRegisterTextMessage(String)"
});
formatter.result({
  "duration": 22387600,
  "status": "passed"
});
formatter.after({
  "duration": 650488100,
  "status": "passed"
});
});