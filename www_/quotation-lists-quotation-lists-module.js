(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quotation-lists-quotation-lists-module"],{

/***/ "./src/app/quotation-lists/quotation-lists.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/quotation-lists/quotation-lists.module.ts ***!
  \***********************************************************/
/*! exports provided: QuotationListsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationListsPageModule", function() { return QuotationListsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quotation_lists_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./quotation-lists.page */ "./src/app/quotation-lists/quotation-lists.page.ts");







var routes = [
    {
        path: '',
        component: _quotation_lists_page__WEBPACK_IMPORTED_MODULE_6__["QuotationListsPage"]
    }
];
var QuotationListsPageModule = /** @class */ (function () {
    function QuotationListsPageModule() {
    }
    QuotationListsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_quotation_lists_page__WEBPACK_IMPORTED_MODULE_6__["QuotationListsPage"]]
        })
    ], QuotationListsPageModule);
    return QuotationListsPageModule;
}());



/***/ }),

/***/ "./src/app/quotation-lists/quotation-lists.page.html":
/*!***********************************************************!*\
  !*** ./src/app/quotation-lists/quotation-lists.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n      <ion-label>Daftar Penawaran Di bawah harga nego 2</ion-label>\n      <ion-datetime display-format=\"MM YYYY\" slot=\"secondary\" value=\"2019-3-1\" placeholder=\"Filter Bulan\" (ionChange)=\"monthChange($event)\">\n\n      </ion-datetime>\n      <ion-buttons slot=\"secondary\">\n        <ion-button (click)=\"showModal()\">Login</ion-button>\n      </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n<ion-list>\n  <ion-item-group *ngFor=\"let quotation of quotations\">\n    <ion-item class=\"custom-list-header\" color=\"primary\">\n        <ion-label>\n          <h2>{{quotation.branch|uppercase}}</h2>\n        </ion-label>\n        <ion-label>\n          <h3 color=\"warning\">{{quotation.clientname|uppercase}}</h3>\n          <h3>{{quotation.clientaddress}}</h3>\n        </ion-label>\n        <ion-button (click)=\"showDetail(quotation)\">\n          <ion-icon name=\"more\"></ion-icon>\n        </ion-button>\n    </ion-item>\n      <ion-item>\n        <ion-label>\n          <h2>PIC</h2>\n        </ion-label>\n        <ion-label>\n          <h3>{{quotation.clientpic}}</h3>\n          <h3>{{quotation.clienttlp}}</h3>\n          <h3>{{quotation.clientpichp}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Layanan</ion-label>\n        <ion-label>\n          <h2>{{quotation.category}}</h2>\n          <h3>{{quotation.servicename}}</h3>\n          <h3>{{quotation.media}}</h3>\n          <h3>{{quotation.capacity}}</h3>\n        </ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>Target Aktivasi</ion-label>\n        <ion-label>{{quotation.activationtarget}}</ion-label>\n      </ion-item>\n  </ion-item-group>\n</ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/quotation-lists/quotation-lists.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/quotation-lists/quotation-lists.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-list-header {\n  font-weight: bold;\n  background-color: burlywood;\n  color: gold; }\n\n.item-native {\n  background-color: cornsilk; }\n\n.input-wrapper {\n  background-color: cornsilk; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmRldi9qc3dvcmtzcGFjZS9wYWRpbmV0LXByaWNlbGlzdC9zcmMvYXBwL3F1b3RhdGlvbi1saXN0cy9xdW90YXRpb24tbGlzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixXQUFXLEVBQUE7O0FBRWY7RUFDSSwwQkFBMEIsRUFBQTs7QUFHOUI7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3F1b3RhdGlvbi1saXN0cy9xdW90YXRpb24tbGlzdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1saXN0LWhlYWRlcntcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBidXJseXdvb2Q7XG4gICAgY29sb3I6IGdvbGQ7XG59XG4uaXRlbS1uYXRpdmV7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogY29ybnNpbGs7XG59XG5cbi5pbnB1dC13cmFwcGVye1xuICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5zaWxrO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/quotation-lists/quotation-lists.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/quotation-lists/quotation-lists.page.ts ***!
  \*********************************************************/
/*! exports provided: QuotationListsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotationListsPage", function() { return QuotationListsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _customs_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../customs.service */ "./src/app/customs.service.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _quot_detail_quot_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../quot-detail/quot-detail.component */ "./src/app/quot-detail/quot-detail.component.ts");






var QuotationListsPage = /** @class */ (function () {
    function QuotationListsPage(custom, modalController) {
        var _this = this;
        this.custom = custom;
        this.modalController = modalController;
        var email = localStorage.getItem("email");
        console.log("Email", email);
        this.custom.gets(function (result) {
            _this.quotations = result;
        });
    }
    QuotationListsPage.prototype.ngOnInit = function () {
    };
    QuotationListsPage.prototype.handleModalDismiss = function (d) {
        console.log("D", d);
    };
    QuotationListsPage.prototype.showModal = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var obj, modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        obj = {
                            email: 'puji@padi.net.id'
                        };
                        return [4 /*yield*/, this.modalController.create({
                                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                                componentProps: {
                                    email: obj.email,
                                    password: obj.email
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) { return _this.handleModalDismiss(d); });
                        return [4 /*yield*/, modal.present()];
                    case 2: 
                    //const {data} = await modal.onDidDismiss()
                    //console.log("Data",data)
                    return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuotationListsPage.prototype.monthChange = function (event) {
        var _this = this;
        console.log("Month already changed", event.target.value);
        var monthyear = event.target.value;
        this.custom.getByMonth({ monthyear: monthyear }, function (result) {
            _this.quotations = result;
        });
    };
    QuotationListsPage.prototype.showDetail = function (obj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("OBJ", obj);
                        return [4 /*yield*/, this.modalController.create({
                                component: _quot_detail_quot_detail_component__WEBPACK_IMPORTED_MODULE_5__["QuotDetailComponent"],
                                componentProps: {
                                    obj: obj
                                }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss().then(function (d) { return _this.handleModalDismiss(d); });
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    QuotationListsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quotation-lists',
            template: __webpack_require__(/*! ./quotation-lists.page.html */ "./src/app/quotation-lists/quotation-lists.page.html"),
            styles: [__webpack_require__(/*! ./quotation-lists.page.scss */ "./src/app/quotation-lists/quotation-lists.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_customs_service__WEBPACK_IMPORTED_MODULE_2__["CustomsService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])
    ], QuotationListsPage);
    return QuotationListsPage;
}());



/***/ })

}]);
//# sourceMappingURL=quotation-lists-quotation-lists-module.js.map