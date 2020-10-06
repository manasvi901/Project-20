function isTouching(o1,o2){
    if (o1.x-o2.x<o2.width/2+o1.width/2&&o2.x-o1.x<o2.width/2+o1.width/2&&o1.y-o2.y<o2.height/2+o1.height/2&&o2.y-o1.y<o2.height/2+o1.height/2){
      return true;
    }
    else {
      return false;
      }
  }

  if (f.x-mr.x<(mr.width+f.width)/2){
    mr.velocityX=0;
    var d = 0.5*w*s*s/22509;
    
    if (d>180)
    {
  mr.shapeColor = color(255,0,0);
    }
    
    if (d<180 && d>100)
  {
  mr.shapeColor = color(230,230,0);
  }
  
  if (d<100)
  {
  mr.shapeColor = color(0,255,0);
  }
  
  }