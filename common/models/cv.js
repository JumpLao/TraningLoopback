'use strict';

module.exports = function(Cv) {
  Cv.observe('before save', function(ctx,next){
    if(ctx.instance.name == "" ) ctx.instance.name = "Unknown"
    next()
  })
};
