var EnterFrameManager = {

  $window : null,

  _length : 0,
  _functions : [],
  _timer : null,
  _time : 0,
  _ftp : 60,

  scrollTop : 0,

  //---------------------------------------------------------
  //  initialize
  //---------------------------------------------------------
  init : function() {

    EnterFrameManager.$window = $( window );

    EnterFrameManager._time = 1000 / EnterFrameManager._ftp;
    this.update();

  },

  //---------------------------------------------------------
  //  EnterFrame
  //---------------------------------------------------------
  update : function() {

    EnterFrameManager.scrollTop = EnterFrameManager.$window.scrollTop();

    for( var i = 0; i < EnterFrameManager._length; i++ ) {

      var func = EnterFrameManager._functions[i];
      func();

    }

    EnterFrameManager._timer = setTimeout( EnterFrameManager.update, EnterFrameManager._time );

  },

  //---------------------------------------------------------
  //  add event
  //---------------------------------------------------------
  add : function( i_func ) {

    EnterFrameManager._functions.push( i_func );
    EnterFrameManager._length = EnterFrameManager._functions.length;

  }

}
