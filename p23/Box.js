class Box
{
    //constructor is called automaically when we create object of the class
    constructor(x, y, width, height)
    {
        var options = 
        {
            isStatic: false
        }
    
        //this is keyword
        //this is automatically replaced by the object which we create
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);

        this.width = width;
        this.height = height;
    }

    display()
    {
        var pos = this.body.position; //{x:100, y: 100}

        rectMode(CENTER);
        fill("red");
        rect(pos.x, pos.y, this.width, this.height);
    }
}