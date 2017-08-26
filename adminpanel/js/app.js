function cool() {
    
        var a = 100;
        var b = 00;
        
        try {
        
            if(b == 0) {
                throw('first');        
            } 
            else 
            {
            var c = a / b;
                alert('c = ' + c );
            }
        }
        
        catch (e) {
            alert("Error : " + e);
        }
        
        finally {
            alert("last");
        }
      
    
    
    
    
    };
    