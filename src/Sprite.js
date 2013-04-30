WHA.Sprite = function( element )
{
    this.element = element;

    var _x = 0,
        _y = 0;
}

WHA.Sprite.prototype =
{

    get x()
    {
        return this._x || 0;
    },

    set x(val)
    {
        this._x = (!isNaN(parseFloat(val)) && isFinite(val)) ?  val : this._x;
        this.element.style.left = this._x + "px";
    },

    get y()
    {
        return this._y || 0;
    },

    set y(val)
    {
        this._y = (!isNaN(parseFloat(val)) && isFinite(val)) ?  val : this._y;
        this.element.style.top = this._y + "px";
    }
}