(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pricelists-pricelists-module"],{

/***/ "./src/app/pricelists/pricelists.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pricelists/pricelists.module.ts ***!
  \*************************************************/
/*! exports provided: PricelistsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricelistsPageModule", function() { return PricelistsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pricelists_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pricelists.page */ "./src/app/pricelists/pricelists.page.ts");







var routes = [
    {
        path: '',
        component: _pricelists_page__WEBPACK_IMPORTED_MODULE_6__["PricelistsPage"]
    }
];
var PricelistsPageModule = /** @class */ (function () {
    function PricelistsPageModule() {
    }
    PricelistsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_pricelists_page__WEBPACK_IMPORTED_MODULE_6__["PricelistsPage"]]
        })
    ], PricelistsPageModule);
    return PricelistsPageModule;
}());



/***/ }),

/***/ "./src/app/pricelists/pricelists.page.html":
/*!*************************************************!*\
  !*** ./src/app/pricelists/pricelists.page.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Daftar Harga Layanan</ion-title>\n    </ion-toolbar>\n    <ion-toolbar>\n      <ion-buttons>\n        <ion-button color=\"primary\" (click)=\"showAddPage()\">\n          Penambahan Layanan\n        </ion-button>\n      </ion-buttons>\n      </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n  <ion-list >\n    <ion-list-header color=\"medium\">\n      <ion-label>Nama</ion-label>\n      <ion-label>Kapasitas</ion-label>\n      <ion-label>Media</ion-label>\n      <ion-label>Harga</ion-label>\n      <ion-label>Nego 1</ion-label>\n      <ion-label>Nego 2</ion-label>\n      <ion-label>Pricelist</ion-label>\n      <ion-label>Aksi</ion-label>\n    </ion-list-header>\n    <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let obj of objs\">\n      <ion-item>\n        <ion-label>\n            {{obj.servicename}}\n        </ion-label>\n        <ion-label>{{obj.capacity}}</ion-label>\n        <ion-label>{{obj.media}}</ion-label>\n        <ion-label>{{obj.basicprice}}</ion-label>\n        <ion-label>{{obj.bottomprice}}</ion-label>\n        <ion-label>{{obj.upperprice}}</ion-label>\n        <ion-label>{{obj.normalprice}}</ion-label>\n        <ion-buttons>\n          <ion-button (click)=\"doEdit(obj)\">Edit</ion-button>\n          <ion-button (click)=\"doNego(obj)\">Nego</ion-button>\n          <ion-button (click)=\"doRemove(obj)\">Hapus</ion-button>\n        </ion-buttons>\n      </ion-item>\n    </ion-menu-toggle>\n  </ion-list>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/pricelists/pricelists.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pricelists/pricelists.page.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hydrated {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3dlYmRldi9qc3dvcmtzcGFjZS9wYWRpbmV0LXByaWNlbGlzdC9zcmMvYXBwL3ByaWNlbGlzdHMvcHJpY2VsaXN0cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ByaWNlbGlzdHMvcHJpY2VsaXN0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaHlkcmF0ZWR7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/pricelists/pricelists.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pricelists/pricelists.page.ts ***!
  \***********************************************/
/*! exports provided: PricelistsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricelistsPage", function() { return PricelistsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _pricelist_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pricelist.service */ "./src/app/pricelist.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _pricelist_update_pricelist_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pricelist-update/pricelist-update.component */ "./src/app/pricelist-update/pricelist-update.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");






var PricelistsPage = /** @class */ (function () {
    function PricelistsPage(priceList, modalcontroller, user) {
        var _this = this;
        this.priceList = priceList;
        this.modalcontroller = modalcontroller;
        this.user = user;
        var email = localStorage.getItem("email");
        var password = localStorage.getItem("password");
        console.log("Email", email, "Passw", password);
        this.priceList.gets(function (result) {
            console.log("Result", result);
            _this.objs = result;
        });
    }
    PricelistsPage.prototype.showAddPage = function () {
        window.location.href = '/pricelist-add';
    };
    PricelistsPage.prototype.ngOnInit = function () {
    };
    PricelistsPage.prototype.doAction = function (obj, evt) {
        console.log("Change", evt.detail.value);
        this.showModal(obj);
        switch (evt.detail.value) {
            case 'Hapus':
                this.showModal(obj);
                break;
        }
    };
    PricelistsPage.prototype.handleModalDismiss = function (d) {
        var _this = this;
        console.log("D", d);
        this.priceList.gets(function (result) {
            console.log("Result", result);
            _this.objs = result;
        });
    };
    PricelistsPage.prototype.showModal = function (obj) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalcontroller.create({
                            component: _pricelist_update_pricelist_update_component__WEBPACK_IMPORTED_MODULE_4__["PricelistUpdateComponent"],
                            componentProps: {
                                id: obj.id,
                                category_id: obj.category_id,
                                servicename_id: obj.servicename_id,
                                media_id: obj.media_id,
                                servicename: obj.servicename,
                                basicprice: obj.basicprice,
                                bottomprice: obj.bottomprice,
                                normalprice: obj.normalprice,
                                upperprice: obj.upperprice,
                                capacity: obj.capacity
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
    PricelistsPage.prototype.doEdit = function (obj) {
        console.log("Edit Obj", obj);
        this.showModal(obj);
    };
    PricelistsPage.prototype.doRemove = function (obj) {
        console.log("Remove Obj", obj);
    };
    PricelistsPage.prototype.doNego = function (obj) {
        window.location.href = '/pricelist-nego/' + obj.id;
    };
    PricelistsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricelists',
            template: __webpack_require__(/*! ./pricelists.page.html */ "./src/app/pricelists/pricelists.page.html"),
            styles: [__webpack_require__(/*! ./pricelists.page.scss */ "./src/app/pricelists/pricelists.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_pricelist_service__WEBPACK_IMPORTED_MODULE_2__["PricelistService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
            _user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], PricelistsPage);
    return PricelistsPage;
}());



/***/ })

}]);
//# sourceMappingURL=pricelists-pricelists-module.js.map