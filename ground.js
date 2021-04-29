// class Ground{
//     constructor(){

//         var options={
//             isStatic:true
//         }

//         this.body=Bodies.rectangle(200,380,400,20,options)
//         World.add(world,this.body)
//     }
//     display(){
//         var P = this.body.position;
//         rectMode(CENTER);
//         rect(P.x,P.y,this.width,this.height)
//         fill("blue");
//     }
// }
class Ground {
    constructor(x, y, width, height) {
      var options = {
          "isStatic":true,
          "friction":0.7,
          "density":0.5
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
  