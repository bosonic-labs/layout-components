(function () {
    var BLinearLayoutPrototype = Object.create(HTMLElement.prototype, {});
    window.BLinearLayout = document.registerElement('b-linear-layout', { prototype: BLinearLayoutPrototype });
}());