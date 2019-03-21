(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pricelist-add-pricelist-add-module"],{

/***/ "./src/app/pricelist-add/pricelist-add.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pricelist-add/pricelist-add.module.ts ***!
  \*******************************************************/
/*! exports provided: PricelistAddPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricelistAddPageModule", function() { return PricelistAddPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pricelist_add_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pricelist-add.page */ "./src/app/pricelist-add/pricelist-add.page.ts");







var routes = [
    {
        path: '',
        component: _pricelist_add_page__WEBPACK_IMPORTED_MODULE_6__["PricelistAddPage"]
    }
];
var PricelistAddPageModule = /** @class */ (function () {
    function PricelistAddPageModule() {
    }
    PricelistAddPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pricelist_add_page__WEBPACK_IMPORTED_MODULE_6__["PricelistAddPage"]]
        })
    ], PricelistAddPageModule);
    return PricelistAddPageModule;
}());



/***/ }),

/***/ "./src/app/pricelist-add/pricelist-add.page.html":
/*!*******************************************************!*\
  !*** ./src/app/pricelist-add/pricelist-add.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pricelist-add</ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item>\n      <ion-label>Kategori</ion-label>\n      <ion-select [(ngModel)]=\"obj.category\" placeholder=\"Kategori\" interface=\"popover\" (ionChange)=\"populateServices()\">\n        <ion-select-option *ngFor=\"let category of categories\" value=\"{{category.name}}\">\n          {{category.name}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nama Layanan:</ion-label>\n      <ion-select [(ngModel)]=\"obj.servicename\" placeholder=\"Nama Layanan\" interface=\"popover\">\n          <ion-select-option *ngFor=\"let service of servicenames\" value=\"{{service.name}}\">\n              {{service.name}}\n          </ion-select-option>\n        </ion-select>\n      </ion-item>\n    <ion-item>\n      <ion-label>Media:</ion-label>\n      <ion-select [(ngModel)]=\"obj.media\" placeholder=\"Media\" interface=\"popover\">\n        <ion-select-option value=\"wireless\">\n          Wireless\n        </ion-select-option>\n        <ion-select-option value=\"FO\">\n          FO\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n        <ion-label>Kapasitas:</ion-label>\n      <ion-input [(ngModel)]=\"obj.capacity\" placeholder=\"Kapasitas\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Kompetisi:</ion-label>\n      <ion-input [(ngModel)]=\"obj.basicprice\" placeholder=\"Kompetisi\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Harga Pricelist:</ion-label>\n      <ion-input [(ngModel)]=\"obj.normalprice\" placeholder=\"Harga Pricelist\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Harga Nego Pertama:</ion-label>\n      <ion-input [(ngModel)]=\"obj.bottomprice\" placeholder=\"Harga Nego Pertama\"></ion-input>\n    </ion-item>\n    <ion-item>\n        <ion-label>Harga Nego Kedua:</ion-label>\n      <ion-input [(ngModel)]=\"obj.upperprice\" placeholder=\"Harga Nego Kedua\"></ion-input>\n    </ion-item>\n  </ion-list>\n  <ion-button (click)=\"save(obj)\">Simpan</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pricelist-add/pricelist-add.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pricelist-add/pricelist-add.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlbGlzdC1hZGQvcHJpY2VsaXN0LWFkZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/pricelist-add/pricelist-add.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pricelist-add/pricelist-add.page.ts ***!
  \*****************************************************/
/*! exports provided: PricelistAddPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricelistAddPage", function() { return PricelistAddPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pricelist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pricelist.service */ "./src/app/pricelist.service.ts");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");




var PricelistAddPage = /** @class */ (function () {
    function PricelistAddPage(priceList, category) {
        var _this = this;
        this.priceList = priceList;
        this.category = category;
        this.obj = {
            category_id: 0,
            category: '', price: 0,
            servicename_id: 0,
            servicename: '',
            capacity_id: 0,
            capacity: '',
            media_id: 0
        };
        this.category.gets(function (result) {
            _this.categories = result;
        });
    }
    PricelistAddPage.prototype.populateServices = function () {
        switch (this.obj.category) {
            case 'Dedicated':
                this.servicenames = [
                    { name: 'IIX' }, { name: 'Local Loop' }, { name: 'Padi Mix' }, { name: 'Enterprise' }
                ];
                break;
            case 'Broadband':
                this.servicenames = [
                    { name: 'IBB' }, { name: 'Cluster' }, { name: 'Oryza' }, { name: 'SBI' }
                ];
                break;
        }
    };
    PricelistAddPage.prototype.getCapacities = function () {
        var _this = this;
        this.priceList.getcapacities({
            category_id: this.obj.category,
            servicename_id: this.obj.servicename_id,
            media_id: this.obj.media_id
        }, function (result) {
            _this.capactities = result;
        });
    };
    PricelistAddPage.prototype.save = function (obj) {
        this.priceList.save(obj, function (result) {
            console.log("Result", result);
            window.location.href = "/pricelists";
        });
    };
    PricelistAddPage.prototype.ngOnInit = function () {
    };
    PricelistAddPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricelist-add',
            template: __webpack_require__(/*! ./pricelist-add.page.html */ "./src/app/pricelist-add/pricelist-add.page.html"),
            styles: [__webpack_require__(/*! ./pricelist-add.page.scss */ "./src/app/pricelist-add/pricelist-add.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pricelist_service__WEBPACK_IMPORTED_MODULE_2__["PricelistService"],
            _category_service__WEBPACK_IMPORTED_MODULE_3__["CategoryService"]])
    ], PricelistAddPage);
    return PricelistAddPage;
}());



/***/ })

}]);
//# sourceMappingURL=pricelist-add-pricelist-add-module.js.map