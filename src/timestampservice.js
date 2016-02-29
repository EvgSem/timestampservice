module.exports = {
  format: function(stringDate){
    var result = {
      natural:'',
      unix:''
    };
    if (isUnix(stringDate)){
      result.unix=stringDate;
      result.natural = unixConverterToNatural(result.unix);
    }
    else if (isNature(stringDate)){
      result.natural=stringDate;
      result.unix = naturalConverterToUnix(result.natural);
    }
    
    else {
      result.unix=null;
      result.natural = null;
        
    }
    console.log('natural: '+result.natural +" \nunix: "+result.unix);
    return result;
  }
};

function unixConverterToNatural(UNIX_timestamp) {
  var a = new Date(UNIX_timestamp * 1000);
  var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var day = a.getDate();
  var date = month + ' '+ day + ',  ' + year;
  return date;
}

function naturalConverterToUnix(Natural_timestamp) {
  var dateObj = new Date(Natural_timestamp);
  var date = dateObj.getTime()/1000;
  return date;
}

function isNature(stringDate){
  var dateObj = new Date(stringDate);
    if (dateObj!="Invalid Date") {
        return true;
    }
    return false;
}

function isUnix(stringDate){
  if ( Number(stringDate) % 1 === 0){
    return true;
  }
  return false;
}
