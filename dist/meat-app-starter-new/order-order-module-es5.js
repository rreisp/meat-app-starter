(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-order-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/order/delivery-costs/delivery-costs.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order/delivery-costs/delivery-costs.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n        <table class=\"table\">\n                <tbody>\n                        <tr>\n                                <th style=\"width:50%\">Itens:</th>\n                                <td class=\"text-right\">{{itemsValue | currency: 'BRL': true}}</td>\n                        </tr>\n                        <tr>\n                                <th>Frete:</th>\n                                <td class=\"text-right\">{{delivery | currency: 'BRL': true}}</td>\n                        </tr>\n                        <tr>\n                                <th>Total:</th>\n                                <td class=\"text-right\">{{total() | currency: 'BRL': true}}</td>\n                        </tr>\n                </tbody>\n        </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order/order-items/order-items.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order/order-items/order-items.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-xs-12\" *ngIf=\"items.length === 0\">\n        <p>\n                Não há itens no seu carrinho. Que tal começar por <a [routerLink]=\"['/restaurants']\">aqui</a>?\n        </p>\n</div>\n<div class=\"col-xs-12 table-responsive\" *ngIf=\"items.length > 0\">\n        <table class=\"table table-striped\">\n                <thead>\n                        <tr>\n                                <th class=\"text-center\">Quantidade</th>\n                                <th>Item</th>\n                                <th>Descrição</th>\n                                <th class=\"text-right\">Subtotal</th>\n                                <th class=\"text-right\"></th>\n                        </tr>\n                </thead>\n                <tbody *ngFor=\"let item of items\">\n                        <tr>\n                                <td class=\"text-center\">\n                                        <a (click)=\"emitDecreaseQty(item)\" class=\"btn btn-sm\"><i\n                                                        class=\"fa fa-minus\"></i></a>\n                                        {{item.quantity}}\n                                        <a (click)=\"emitIncreaseQty(item)\" class=\"btn btn-sm\"><i\n                                                        class=\"fa fa-plus\"></i></a>\n                                </td>\n                                <td>{{item.menuItem.name}}</td>\n\n                                <td>{{item.menuItem.description}}</td>\n                                <td class=\"text-right\">{{item.value() | currency: 'BRL': true}}</td>\n                                <td class=\"text-right\">\n                                        <a (click)=\"emitRemove(item)\" class=\"btn btn-sm danger\"><i\n                                                        class=\"fa fa-remove\"></i></a>\n                                </td>\n                        </tr>\n                </tbody>\n        </table>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/order/order.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--INICIO DO CONTEUDO-->\n<section class=\"content-header\">\n</section>\n\n<section class=\"content\">\n        <section class=\"invoice\">\n                <form [formGroup]=\"orderForm\" novalidate>\n                        <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                        <h2 class=\"page-header\">\n                                                <i class=\"fa fa-shopping-cart\"></i> Finalize o seu pedido\n                                        </h2>\n                                </div>\n                        </div>\n\n                        <div class=\"row\">\n                                <div class=\"col-xs-12 col-sm-9\">\n                                        <p class=\"lead\">Seus dados:</p>\n                                </div>\n                                <div class=\"col-xs-12 col-sm-3\">\n                                        <span class=\"help-block pull-right has-error-block\"\n                                                *ngIf=\"orderForm.hasError('emailsNotMatch')\"><i class=\"fa fa-remove\"></i> E-mails não conferem</span>\n                                </div>\n                                <div class=\"col-sm-6 col-xs-12\">\n                                        <mt-input-container errorMessage=\"Campo obrigatório e com 5 caracteres\"\n                                                label=\"Nome\">\n                                                <input class=\"form-control\" formControlName=\"name\" placeholder=\"Nome\"\n                                                        autocomplete=\"off\" />\n                                        </mt-input-container>\n                                </div>\n                                <div class=\"col-sm-3 col-xs-6\">\n                                        <mt-input-container errorMessage=\"E-mail inválido\" label=\"E-mail\">\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"email\"\n                                                        placeholder=\"E-mail\" autocomplete=\"off\" />\n                                        </mt-input-container>\n                                </div>\n                                <div class=\"col-sm-3 col-xs-6\">\n                                        <mt-input-container errorMessage=\"E-mail inválido\" label=\"E-mail\">\n                                                <input type=\"text\" class=\"form-control\"\n                                                        formControlName=\"emailConfirmation\" placeholder=\"E-mail\"\n                                                        autocomplete=\"off\" />\n                                        </mt-input-container>\n                                </div>\n                        </div>\n\n                        <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                        <p class=\"lead\">Endereço de Entrega:</p>\n                                </div>\n                                <div class=\"col-sm-6 col-xs-12\">\n                                        <mt-input-container errorMessage=\"Campo obrigatório e com 5 caracteres\"\n                                                label=\"Endereço\">\n                                                <input class=\"form-control\" formControlName=\"address\"\n                                                        placeholder=\"Endereço\" autocomplete=\"off\" />\n                                        </mt-input-container>\n                                </div>\n                                <div class=\"col-sm-3 col-xs-6\">\n                                        <mt-input-container errorMessage=\"Obrigatório e somente números\" label=\"Número\">\n                                                <input type=\"text\" class=\"form-control\" formControlName=\"number\"\n                                                        placeholder=\"Número\" pattern=\"^[0-9]*$\" autocomplete=\"off\" />\n                                        </mt-input-container>\n                                </div>\n                                <div class=\"col-sm-3 col-xs-6\">\n                                        <mt-input-container>\n                                                <input type=\"text\" class=\"form-control\"\n                                                        formControlName=\"optionalAddress\" placeholder=\"Complemento\" />\n                                        </mt-input-container>\n                                </div>\n                                <!-- /.col -->\n                        </div>\n                        <!-- /.row -->\n\n                        <!-- Table row -->\n                        <div class=\"row\">\n                                <div class=\"col-xs-12\">\n                                        <p class=\"lead\">Itens do Pedido:</p>\n                                </div>\n                                <mt-order-items [items]=\"cartItems()\" (increaseQty)=\"increaseQty($event)\"\n                                        (decreaseQty)=\"decreaseQty($event)\" (remove)=\"remove($event)\"></mt-order-items>\n                                <!-- /.col -->\n                        </div>\n                        <!-- /.row -->\n\n                        <div class=\"row\">\n                                <!-- accepted payments column -->\n                                <div class=\"col-sm-6 col-xs-12\">\n                                        <p class=\"lead\">Formas de Pagamento:</p>\n\n                                        <div class=\"form-group\">\n                                                <mt-radio [options]=\"paymentOptions\" formControlName=\"paymentOption\">\n                                                </mt-radio>\n                                        </div>\n\n                                </div>\n                                <!-- /.col -->\n                                <div class=\"col-sm-6 col-xs-12\">\n                                        <p class=\"lead\">Frete e Total:</p>\n                                        <mt-delivery-costs [delivery]=\"delivery\" [itemsValue]=\"itemsValue()\">\n                                        </mt-delivery-costs>\n                                </div>\n                                <!-- /.col -->\n                        </div>\n\n                </form>\n\n                <div class=\"row\">\n                        <div class=\"col-xs-12\">\n                                <button (click)=\"checkOrder(orderForm.value)\" class=\"btn btn-success pull-right\"\n                                        [disabled]=\"!orderForm.valid || cartItems().length === 0\"><i\n                                                class=\"fa fa-credit-card\"></i> Concluir Pedido\n                                </button>\n                        </div>\n                </div>\n\n        </section>\n</section>\n<!-- FIM DO CONTEUDO-->"

/***/ }),

/***/ "./src/app/order/delivery-costs/delivery-costs.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/order/delivery-costs/delivery-costs.component.ts ***!
  \******************************************************************/
/*! exports provided: DeliveryCostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeliveryCostsComponent", function() { return DeliveryCostsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DeliveryCostsComponent = /** @class */ (function () {
    function DeliveryCostsComponent() {
    }
    DeliveryCostsComponent.prototype.ngOnInit = function () {
    };
    DeliveryCostsComponent.prototype.total = function () {
        return this.delivery + this.itemsValue;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DeliveryCostsComponent.prototype, "delivery", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DeliveryCostsComponent.prototype, "itemsValue", void 0);
    DeliveryCostsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mt-delivery-costs',
            template: __webpack_require__(/*! raw-loader!./delivery-costs.component.html */ "./node_modules/raw-loader/index.js!./src/app/order/delivery-costs/delivery-costs.component.html")
        })
    ], DeliveryCostsComponent);
    return DeliveryCostsComponent;
}());



/***/ }),

/***/ "./src/app/order/order-items/order-items.component.ts":
/*!************************************************************!*\
  !*** ./src/app/order/order-items/order-items.component.ts ***!
  \************************************************************/
/*! exports provided: OrderItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItemsComponent", function() { return OrderItemsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OrderItemsComponent = /** @class */ (function () {
    function OrderItemsComponent() {
        this.increaseQty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.decreaseQty = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.remove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    OrderItemsComponent.prototype.ngOnInit = function () {
    };
    OrderItemsComponent.prototype.emitIncreaseQty = function (item) {
        this.increaseQty.emit(item);
    };
    OrderItemsComponent.prototype.emitDecreaseQty = function (item) {
        this.decreaseQty.emit(item);
    };
    OrderItemsComponent.prototype.emitRemove = function (item) {
        this.remove.emit(item);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], OrderItemsComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], OrderItemsComponent.prototype, "increaseQty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], OrderItemsComponent.prototype, "decreaseQty", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], OrderItemsComponent.prototype, "remove", void 0);
    OrderItemsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mt-order-items',
            template: __webpack_require__(/*! raw-loader!./order-items.component.html */ "./node_modules/raw-loader/index.js!./src/app/order/order-items/order-items.component.html")
        })
    ], OrderItemsComponent);
    return OrderItemsComponent;
}());



/***/ }),

/***/ "./src/app/order/order.component.ts":
/*!******************************************!*\
  !*** ./src/app/order/order.component.ts ***!
  \******************************************/
/*! exports provided: OrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderComponent", function() { return OrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.service */ "./src/app/order/order.service.ts");
/* harmony import */ var _order_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order.model */ "./src/app/order/order.model.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var OrderComponent = /** @class */ (function () {
    function OrderComponent(orderService, router, formBuilder) {
        this.orderService = orderService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        this.numberPattern = /^[0-9]*$/;
        // tslint:disable-next-line:no-inferrable-types
        this.delivery = 8;
        this.paymentOptions = [
            { label: 'Dinheiro', value: 'MON' },
            { label: 'Cartão de Débito', value: 'DEB' },
            { label: 'Cartão Refeição', value: 'REF' },
        ];
    }
    OrderComponent_1 = OrderComponent;
    OrderComponent.equalsTo = function (group) {
        var email = group.get('email');
        var emailConfirmation = group.get('emailConfirmation');
        if (!email || !emailConfirmation) {
            return undefined;
        }
        if (email.value !== emailConfirmation.value) {
            return { emailsNotMatch: true };
        }
        return undefined;
    };
    OrderComponent.prototype.ngOnInit = function () {
        this.orderForm = this.formBuilder.group({
            name: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]),
            email: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.emailPattern)]),
            emailConfirmation: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.emailPattern)]),
            address: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(5)]),
            number: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(this.numberPattern)]),
            optionalAddress: this.formBuilder.control(''),
            paymentOption: this.formBuilder.control('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])
        }, { validator: OrderComponent_1.equalsTo });
    };
    OrderComponent.prototype.itemsValue = function () {
        return this.orderService.itemsValue();
    };
    OrderComponent.prototype.cartItems = function () {
        return this.orderService.cartItems();
    };
    OrderComponent.prototype.increaseQty = function (item) {
        this.orderService.increaseQty(item);
    };
    OrderComponent.prototype.decreaseQty = function (item) {
        this.orderService.decreaseQty(item);
    };
    OrderComponent.prototype.remove = function (item) {
        this.orderService.remove(item);
    };
    OrderComponent.prototype.checkOrder = function (order) {
        var _this = this;
        order.orderItems = this.cartItems()
            .map(function (item) { return new _order_model__WEBPACK_IMPORTED_MODULE_3__["OrderItem"](item.quantity, item.menuItem.id); });
        this.orderService.checkOrder(order)
            .subscribe(function (orderId) {
            _this.router.navigate(['/order-summary']);
            _this.orderService.clear();
        });
        console.log(order);
    };
    var OrderComponent_1;
    OrderComponent.ctorParameters = function () { return [
        { type: _order_service__WEBPACK_IMPORTED_MODULE_2__["OrderService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    OrderComponent = OrderComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'mt-order',
            template: __webpack_require__(/*! raw-loader!./order.component.html */ "./node_modules/raw-loader/index.js!./src/app/order/order.component.html")
        })
    ], OrderComponent);
    return OrderComponent;
}());



/***/ }),

/***/ "./src/app/order/order.model.ts":
/*!**************************************!*\
  !*** ./src/app/order/order.model.ts ***!
  \**************************************/
/*! exports provided: Order, OrderItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Order", function() { return Order; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderItem", function() { return OrderItem; });
var Order = /** @class */ (function () {
    function Order(address, 
    // tslint:disable-next-line:variable-name
    number, optionalAddress, paymentOption, orderItems, id) {
        if (orderItems === void 0) { orderItems = []; }
        this.address = address;
        this.number = number;
        this.optionalAddress = optionalAddress;
        this.paymentOption = paymentOption;
        this.orderItems = orderItems;
        this.id = id;
    }
    Order.ctorParameters = function () { return [
        { type: String },
        { type: Number },
        { type: String },
        { type: String },
        { type: Array },
        { type: String }
    ]; };
    return Order;
}());
var OrderItem = /** @class */ (function () {
    function OrderItem(quantity, menuId) {
        this.quantity = quantity;
        this.menuId = menuId;
    }
    OrderItem.ctorParameters = function () { return [
        { type: Number },
        { type: String }
    ]; };
    return OrderItem;
}());



/***/ }),

/***/ "./src/app/order/order.module.ts":
/*!***************************************!*\
  !*** ./src/app/order/order.module.ts ***!
  \***************************************/
/*! exports provided: OrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderModule", function() { return OrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order.component */ "./src/app/order/order.component.ts");
/* harmony import */ var _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-items/order-items.component */ "./src/app/order/order-items/order-items.component.ts");
/* harmony import */ var _delivery_costs_delivery_costs_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./delivery-costs/delivery-costs.component */ "./src/app/order/delivery-costs/delivery-costs.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");







var ROUTES = [
    { path: '', component: _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"] }
];
var OrderModule = /** @class */ (function () {
    function OrderModule() {
    }
    OrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _order_component__WEBPACK_IMPORTED_MODULE_2__["OrderComponent"], _order_items_order_items_component__WEBPACK_IMPORTED_MODULE_3__["OrderItemsComponent"], _delivery_costs_delivery_costs_component__WEBPACK_IMPORTED_MODULE_4__["DeliveryCostsComponent"]
            ],
            imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(ROUTES)]
        })
    ], OrderModule);
    return OrderModule;
}());



/***/ })

}]);
//# sourceMappingURL=order-order-module-es5.js.map