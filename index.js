exports.and=function(v){var i=v.length,r='',x,l;while(i--){x=v[i];r=r?x===' '&&l===' '?r:x+' '+r:x+r;l=x}return r}

exports.plus=function(v){var i=v.length,r='',x,l;while(i--){x=v[i];r=r?x+l==='  '?r:x+' '+r:x+r;l=x}return r}

exports.equal=function(v){var i=v.length,r='',x,l;while(i--){x=v[i];r=r?x===l===' '?r:x+' '+r:x+r;l=x}return r}
