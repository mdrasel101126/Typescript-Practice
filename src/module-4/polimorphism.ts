class Shape{
    getArea():number{
        return 0;
    }
}

class Circle extends Shape{
    radius :number;
    constructor(radius:number){
        super();
        this.radius=radius;
        
    }
    getArea(): number {
        return Math.PI*this.radius*this.radius;
    }
}

class Rectangle extends Shape{
    height:number;
    width:number;
    constructor(height:number,width:number){
        super();
        this.height=height;
        this.width=width;
    }
    getArea(): number {
        return this.height*this.width;
    }
}

function getAreaOfShape(param:Shape){
    console.log(param.getArea())
}
getAreaOfShape(new Circle(10));
getAreaOfShape(new Rectangle(10,12));