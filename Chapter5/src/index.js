var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function Debug(Class) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        class_1.prototype.debug = function () {
            var Name = Class.constructor.name;
            var value = this.getDebugValue();
            return Name + JSON.stringify(value);
        };
        return class_1;
    }(Class));
}
var DebugUser = /** @class */ (function () {
    function DebugUser(id, firsName, lastName) {
        this.id = id;
        this.firsName = firsName;
        this.lastName = lastName;
    }
    DebugUser.prototype.getDebugValue = function () {
        return {
            id: this.id,
            name: this.firsName + ' ' + this.lastName
        };
    };
    return DebugUser;
}());
var User = Debug(DebugUser);
var user = new User(1, 'Long', 'Bui');
console.log(user);
var BalletFlat = /** @class */ (function () {
    function BalletFlat() {
        this.purpose = 'dancing';
    }
    return BalletFlat;
}());
var Boot = /** @class */ (function () {
    function Boot() {
        this.purpose = 'woodcutting';
    }
    return Boot;
}());
var Sneaker = /** @class */ (function () {
    function Sneaker() {
        this.purpose = 'walking';
    }
    return Sneaker;
}());
var Shoe = {
    create: function (type) {
        switch (type) {
            case 'balletFlat':
                return new BalletFlat;
            case 'boot':
                return new Boot;
            case 'sneaker':
                return new Sneaker;
        }
    }
};
console.log(Shoe.create('boot'));
