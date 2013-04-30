WHA.Sprite = function( element )
{
    this.element = element;

    var _x = 0,
        _y = 0,
        _alpha = 1;
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
    },

    get alpha()
    {
        return this._alpha || 1;
    },

    set alpha(val)
    {
        this._alpha = (!isNaN(parseFloat(val)) && isFinite(val)) ?  val : this._alpha;
        this._alpha = this._alpha < 0 ? 0 : this._alpha > 1 ? 1 : this._alpha;
        this.element.style.filter = "alpha(opacity="+ this._alpha * 100 + ")";
        this.element.style.opacity = this._alpha;
        this.element.style.zoom = 1;
    }
}