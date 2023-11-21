import { Component, OnInit } from "@angular/core";
import { ContactsService } from "../contacts.service";
import { ProductsService } from "../products.service";
import { CategoryService } from "../category.service";

@Component({
  selector: "app-charts",
  templateUrl: "./charts.component.html",
  styleUrls: ["./charts.component.css"],
})
export class ChartsComponent implements OnInit {
  initialLetter = [];
  contactsByFullName = [];
  emailExtensions = [];
  phonePrefixData = [];
  productsInStock = [];
  overHundred = [];
  productsByCategory = [];
  productsByPrice = [];

  constructor(
    private contactsService: ContactsService,
    private productsService: ProductsService
  ) {}

  ngOnInit() {
    this.contactsService.getContacts().subscribe((data) => {
      this.initialLetter = this.calculateInitialLettersData(data);
      this.contactsByFullName = this.calculateContactsByFullNameData(data);
      this.emailExtensions = this.calculateEmailExtensionsData(data);
      this.phonePrefixData = this.generatePhonePrefixData(data);
    });
    this.productsService.getProducts().subscribe((data) => {
      this.productsInStock = this.checkProductsInStockData(data);
      this.overHundred = this.checkProductsOverHundred(data);
      this.productsByCategory = this.checkProductsByCategory(data);
      this.productsByPrice = this.checkProductsByPrice(data);
    });
  }

  calculateInitialLettersData(contacts: any[]): any {
    return contacts.reduce((result, contact) => {
      const initial = contact.sname1.charAt(0).toUpperCase();
      if (result.find((item) => item.name === initial)) {
        result.find((item) => item.name === initial).value++;
      } else {
        result.push({ name: initial, value: 1 });
      }
      return result;
    }, []);
  }

  calculateContactsByFullNameData(contacts: any[]): any {
    let tempContactsByFullName = [
      {
        name: "Contacts",
        series: [],
      },
    ];
    contacts.forEach((contact) => {
      const fullName = contact.name + contact.sname1 + contact.sname2;
      const size = fullName.length;
      const range = `${size - (size % 5)} - ${size - (size % 5) + 4} ch.`;
      let existinRange = tempContactsByFullName[0].series.find(
        (item) => item.name === range
      );
      if (existinRange) {
        existinRange.value++;
      } else {
        tempContactsByFullName[0].series.push({ name: range, value: 1 });
      }
    });
    return tempContactsByFullName.map((entry) => {
      return {
        ...entry,
        series: entry.series.sort(
          (a, b) => Number(a.name.split("-")[0]) - Number(b.name.split("-")[0])
        ),
      };
    });
  }

  calculateEmailExtensionsData(contacts: any): any {
    let emailExtensionsMap = new Map<string, number>();
    contacts.forEach((contact) => {
      let emailParts = contact.email.split("@");
      if (emailParts.length == 2) {
        const domain = emailParts[1];
        const firstDotIndex = domain.indexOf(".");
        if (firstDotIndex != -1) {
          const extension = domain.substring(firstDotIndex);
          if (emailExtensionsMap.has(extension)) {
            emailExtensionsMap.set(
              extension,
              emailExtensionsMap.get(extension) + 1
            );
          } else {
            emailExtensionsMap.set(extension, 1);
          }
        }
      }
    });

    let emailExtensions = [];
    emailExtensionsMap.forEach((value, key) => {
      emailExtensions.push({ name: key, value: value });
    });
    return emailExtensions;
  }

  generatePhonePrefixData(contacts: any[]): any {
    let phonePrefixData = [];
    let prefixCounts = {};
    contacts.forEach((contact) => {
      const phonePrefix = String(contact.phonenumber).substring(0, 1);
      if (prefixCounts[phonePrefix]) {
        prefixCounts[phonePrefix]++;
      } else {
        prefixCounts[phonePrefix] = 1;
      }
    });
    for (let prefix in prefixCounts) {
      if (prefixCounts.hasOwnProperty(prefix)) {
        phonePrefixData.push({ name: prefix, value: prefixCounts[prefix] });
      }
    }
    return phonePrefixData;
  }

  checkProductsInStockData(products: any[]): any {
    let inStockList = [];

    products.forEach((product) => {
      if (inStockList.find((item) => item.name == product.active)) {
        inStockList.find((item) => item.name == product.active).value++;
      } else {
        inStockList.push({ name: product.active, value: 1 });
      }
    });
    return inStockList;
  }

  checkProductsOverHundred(products: any[]): any {
    let overHundredData = [];

    products.forEach((product) => {
      if (
        overHundredData.find((item) => item.name == ">= 100") &&
        product.stock >= 100
      ) {
        overHundredData.find((item) => item.name == ">= 100").value++;
      } else if (
        overHundredData.find((item) => item.name == "< 100") &&
        product.stock < 100
      ) {
        overHundredData.find((item) => item.name == "< 100").value++;
      } else if (product.stock >= 100) {
        overHundredData.push({ name: ">= 100", value: 1 });
      } else {
        overHundredData.push({ name: "< 100", value: 1 });
      }
    });
    return overHundredData;
  }

  checkProductsByCategory(products: any[]): any {
    let productsByCategoryData = [];

    products.forEach((product) => {
      if (
        productsByCategoryData.find(
          (item) => item.name == product.category.name
        )
      ) {
        productsByCategoryData.find(
          (item) => item.name == product.category.name
        ).value++;
      } else if (
        productsByCategoryData.find(
          (item) => item.name == product.category.name
        )
      ) {
        productsByCategoryData.find(
          (item) => item.name == product.category.name
        ).value++;
      } else if (
        productsByCategoryData.find(
          (item) => item.name == product.category.name
        )
      ) {
        productsByCategoryData.find(
          (item) => item.name == product.category.name
        ).value++;
      } else if (product.category.id === 1) {
        productsByCategoryData.push({ name: product.category.name, value: 1 });
      } else if (product.category.id === 2) {
        productsByCategoryData.push({ name: product.category.name, value: 1 });
      } else {
        productsByCategoryData.push({ name: product.category.name, value: 1 });
      }
    });
    return productsByCategoryData;
  }

  checkProductsByPrice(products: any[]): any {
    let productsByPriceData = [];

    products.forEach((product) => {
      if (
        productsByPriceData.find((item) => item.name == "<10") &&
        product.price < 10
      ) {
        productsByPriceData.find((item) => item.name == "<10").value++;
      } else if (
        productsByPriceData.find((item) => item.name == ">10") &&
        product.price >= 10
      ) {
        productsByPriceData.find((item) => item.name == ">10").value++;
      } else if (product.price < 10) {
        productsByPriceData.push({ name: "<10", value: 1 });
      } else {
        productsByPriceData.push({ name: ">10", value: 1 });
      }
    });
    return productsByPriceData;
  }
}
