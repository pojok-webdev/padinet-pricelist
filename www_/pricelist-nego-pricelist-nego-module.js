(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pricelist-nego-pricelist-nego-module"],{

/***/ "./src/app/pricelist-nego/pricelist-nego.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pricelist-nego/pricelist-nego.module.ts ***!
  \*********************************************************/
/*! exports provided: PricelistNegoPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricelistNegoPageModule", function() { return PricelistNegoPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pricelist_nego_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pricelist-nego.page */ "./src/app/pricelist-nego/pricelist-nego.page.ts");







var routes = [
    {
        path: '',
        component: _pricelist_nego_page__WEBPACK_IMPORTED_MODULE_6__["PricelistNegoPage"]
    }
];
var PricelistNegoPageModule = /** @class */ (function () {
    function PricelistNegoPageModule() {
    }
    PricelistNegoPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pricelist_nego_page__WEBPACK_IMPORTED_MODULE_6__["PricelistNegoPage"]]
        })
    ], PricelistNegoPageModule);
    return PricelistNegoPageModule;
}());



/***/ }),

/***/ "./src/app/pricelist-nego/pricelist-nego.page.html":
/*!*********************************************************!*\
  !*** ./src/app/pricelist-nego/pricelist-nego.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>pricelist-nego {{obj.normalprice}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n    <ion-label>Tanggal Penawaran</ion-label>\n    <ion-datetime [(ngModel)]=\"obj.quotation_date\" display-format=\"YYYY-MM-DD\" picker-format=\"DD MMMM YYYY\" placeholder=\"Pilih Tanggal Penawaran\">\n\n    </ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label>Area Cabang</ion-label>\n    <ion-select [(ngModel)]=\"obj.branch_id\" placeholder=\"Pilih Area\" interface=\"popover\">\n      <ion-select-option value=\"1\">Surabaya</ion-select-option>\n      <ion-select-option value=\"2\">Jakarta</ion-select-option>\n      <ion-select-option value=\"3\">Malang</ion-select-option>\n      <ion-select-option value=\"4\">Bali</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Nama Pelanggan</ion-label>\n    <ion-input placeholder=\"Nama Pelanggan\" [(ngModel)]=\"obj.clientname\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>Alasan</ion-label>\n  <ion-input placeholder=\"Alasan Penawaran\" [(ngModel)]=\"obj.reason\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>Nama PIC</ion-label>\n  <ion-input placeholder=\"Nama PIC\" [(ngModel)]=\"obj.clientpic\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>Telepon</ion-label>\n  <ion-input placeholder=\"Telepon\" [(ngModel)]=\"obj.clienttlp\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>HP</ion-label>\n  <ion-input placeholder=\"HP\" [(ngModel)]=\"obj.clientpichp\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>Email</ion-label>\n  <ion-input placeholder=\"Email\" [(ngModel)]=\"obj.clientemail\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>Alamat</ion-label>\n  <ion-input placeholder=\"Alamat\" [(ngModel)]=\"obj.clientaddress\"></ion-input>\n</ion-item>\n<ion-item>\n  <ion-label>Target Aktifasi</ion-label>\n  <ion-datetime placeholder=\"Target Aktifasi\" [(ngModel)]=\"obj.activationtarget\" display-format=\"YYYY-MM-DD\" picker-format=\"DD MMMM YYYY\"></ion-datetime>\n</ion-item>\n<ion-item>\n  <ion-label>Image</ion-label>\n  <ion-input [(ngModel)]=\"obj.img\" type=\"hidden\"></ion-input>\n  <ion-input type=\"file\" placeholder=\"Pilih FIle\" (change)=\"openFile($event,obj)\"></ion-input>\n  <img [src]=\"uploadImage\" alt=\"\" id=\"img\" width=\"200\">\n</ion-item>\n<ion-item>\n    <ion-label>Kategori</ion-label>\n    <ion-select [(ngModel)]=\"obj.category_id\" placeholder=\"Pilih Kategori\" interface=\"popover\" (ionChange)=\"changeCategory(obj)\">\n      <ion-select-option value=\"1\">Broadband</ion-select-option>\n      <ion-select-option value=\"2\">Dedicated</ion-select-option>\n      <ion-select-option value=\"3\">Enterprise</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n      <ion-label>Layanan</ion-label>\n      <ion-select [(ngModel)]=\"obj.servicename_id\" placeholder=\"Pilih Layanan\" interface=\"popover\" (ionChange)=\"changeCapacity(obj)\">\n        <ion-select-option value=\"{{service.id}}\" *ngFor=\"let service of services\">{{service.name}}</ion-select-option>\n      </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Media</ion-label>\n    <ion-select [(ngModel)]=\"obj.media_id\" placeholder=\"Pilih Media\" interface=\"popover\" (ionChange)=\"changeCapacity(obj)\">\n      <ion-select-option value=\"1\">Wireless</ion-select-option>\n      <ion-select-option value=\"2\">FO</ion-select-option>\n    </ion-select>\n  </ion-item>\n  <ion-item>\n    <ion-label>Kapasitas</ion-label>\n    <ion-select [(ngModel)]=\"obj.capacity\" placeholder=\"Pilih Kapasitas\" interface=\"popover\">\n      <ion-select-option value=\"{{capacity.capacity}}\" *ngFor=\"let capacity of capacities\">\n        {{capacity.capacity}}\n      </ion-select-option>\n    </ion-select>\n  </ion-item>  \n  <ion-item>\n    <ion-label>Harga Pengajuan Custom</ion-label>\n    <ion-input [(ngModel)]=\"obj.customprice\" placeholder=\"Harga Yang diajukan\"></ion-input>\n  </ion-item>\n  <ion-button (click)=\"save(obj)\">Simpan</ion-button>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pricelist-nego/pricelist-nego.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pricelist-nego/pricelist-nego.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaWNlbGlzdC1uZWdvL3ByaWNlbGlzdC1uZWdvLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/pricelist-nego/pricelist-nego.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pricelist-nego/pricelist-nego.page.ts ***!
  \*******************************************************/
/*! exports provided: PricelistNegoPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricelistNegoPage", function() { return PricelistNegoPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../category.service */ "./src/app/category.service.ts");
/* harmony import */ var _customs_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customs.service */ "./src/app/customs.service.ts");
/* harmony import */ var _image_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../image.service */ "./src/app/image.service.ts");





var PricelistNegoPage = /** @class */ (function () {
    function PricelistNegoPage(categoryservice, custom, imageService) {
        this.categoryservice = categoryservice;
        this.custom = custom;
        this.imageService = imageService;
        this.obj = {
            branch: '',
            category: '',
            service: '',
            media: '',
            capacity: '',
            customprice: 0,
            clientpic: '',
            clienttlp: '',
            clientpichp: '',
            clientemail: '',
            clientaddress: '',
            activationtarget: '',
            img: ''
        };
    }
    PricelistNegoPage.prototype.ngOnInit = function () {
    };
    PricelistNegoPage.prototype.changeCategory = function (obj) {
        var _this = this;
        this.categoryservice.servicenamegetbycatgory(obj, function (result) {
            _this.services = result;
        });
    };
    PricelistNegoPage.prototype.changeCapacity = function (obj) {
        var _this = this;
        this.categoryservice.getcapacities(obj, function (result) {
            console.log("getcapacities", result);
            _this.capacities = result;
        });
    };
    PricelistNegoPage.prototype.getPrices = function (obj) {
        var _this = this;
        this.categoryservice.getprices(obj, function (result) {
            _this.prices = result;
        });
    };
    PricelistNegoPage.prototype.save = function (obj) {
        console.log("OBJ to save", obj);
        this.custom.save(obj, function (result) {
            console.log("Result", result);
            window.location.href = '/quotation-lists';
        });
    };
    PricelistNegoPage.prototype.openFile = function (event, obj) {
        console.log("Data", event.target);
        var that = this;
        var input = event.target;
        var myElement = document.getElementById("img");
        //myElement.attributes["src"] = 
        var filereader = new FileReader();
        filereader.onload = function () {
            that.imageService.resizeImage(filereader.result, 1600, function (res) {
                //myElement.attributes["src"] = res
                that.uploadImage = res;
                obj.img = res;
                console.log("Res", res);
            });
        };
        filereader.readAsDataURL(input.files[0]);
    };
    PricelistNegoPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricelist-nego',
            template: __webpack_require__(/*! ./pricelist-nego.page.html */ "./src/app/pricelist-nego/pricelist-nego.page.html"),
            styles: [__webpack_require__(/*! ./pricelist-nego.page.scss */ "./src/app/pricelist-nego/pricelist-nego.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"],
            _customs_service__WEBPACK_IMPORTED_MODULE_3__["CustomsService"],
            _image_service__WEBPACK_IMPORTED_MODULE_4__["ImageService"]])
    ], PricelistNegoPage);
    return PricelistNegoPage;
}());



/***/ })

}]);
//# sourceMappingURL=pricelist-nego-pricelist-nego-module.js.map