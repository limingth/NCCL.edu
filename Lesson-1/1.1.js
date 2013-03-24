


function OnLoad()
{
	   vid = document.getElementById( "video1" );
   addEvent( vid, "click", divClickHandler );
	
		
}



   var toc1     = null;
   var toc2     = null;
   var vid      = null;
     
   //adds and event listener across major browser versions
   function addEvent( obj, type, fn )
   {
	   if ( obj.addEventListener )
	   {
		   obj.addEventListener( type, fn, true );
	   }
	   else if ( obj.attachEvent )
	   {
		   obj.attachEvent( "on" + type, fn );
	   }
	   else
	   {
		   obj["on" + type] = fn;
	   }
   }

   //removes event listeners across major browser versions
   function removeEvent( obj, type, fn )
   {
      if ( obj.removeEventListener )
	   {
	      obj.removeEventListener( type, fn, true );	
	   }
	   else if ( obj.detachEvent )
	   {
	     obj.detachEvent( "on" + type, fn );
	   }
	   else
	   {
		   delete obj["on" + type];	
	   }
   }
   
   function divClickHandler()
   {
      SwitchPlayer( "video1", "video2", "1.1.avi", "800", "645", "./", "./", "mediaPlayer", "application/x-oleobject", "CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6", "http://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=5,1,52,701", "Loading Microsoft Windows Media Player components...", "EmbedmediaPlayer", "false", "true", "full", toc1, toc2 );
      
      removeEvent( vid, 'click', divClickHandler );
   } 

