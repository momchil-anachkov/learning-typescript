var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Character = /** @class */ (function () {
    function Character() {
        this.health = 100;
    }
    return Character;
}());
var Druid = /** @class */ (function (_super) {
    __extends(Druid, _super);
    function Druid() {
        var _this = _super.call(this) || this;
        _this.health = 90;
        return _this;
    }
    Druid.prototype.takeDamage = function (damageToTake) {
        damageToTake *= 0.9;
        this.health -= damageToTake;
        return this.health;
    };
    return Druid;
}(Character));
var Warrior = /** @class */ (function (_super) {
    __extends(Warrior, _super);
    function Warrior() {
        var _this = _super.call(this) || this;
        _this.health = 110;
        _this.armor = 3;
        return _this;
    }
    Warrior.prototype.takeDamage = function (damageToTake) {
        damageToTake -= this.armor;
        this.health -= damageToTake;
        return this.health;
    };
    return Warrior;
}(Character));
var Rogue = /** @class */ (function (_super) {
    __extends(Rogue, _super);
    function Rogue() {
        return _super.call(this) || this;
    }
    Rogue.prototype.takeDamage = function (damageToTake) {
        var chance = Math.random() * 100;
        if (chance > 75) {
            this.health -= damageToTake;
        }
        return this.health;
    };
    return Rogue;
}(Character));
function doDamage(target, damageToDo) {
    var healthLeft = target.takeDamage(damageToDo);
    console.log("Ouch, I only have " + healthLeft + " health left.");
}
var druid = new Druid();
var warrior = new Warrior();
var rogue = new Rogue();
doDamage(druid, 10);
doDamage(warrior, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
doDamage(rogue, 10);
