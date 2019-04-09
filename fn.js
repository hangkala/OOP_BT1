let Rectangle = function(dai, rong) {
    this.height = dai;
    this.width = rong;

    this.getArea = function () {
        return (this.height + this.width) * 2;
    };

    this.getSquare = function () {
        return (this.height*this.width);
    };
    this.setRectangle = function (dai, rong) {
        this.width = rong;
        this.height = dai;
    };
    this.creatOnCanvas = function () {
        let r = document.getElementById("demo");
        let ctx = r.getContext('2d');
        ctx.fillStyle = "#FF0000";
        ctx.fillRect(0,0,this.width,this.height);
    };
};