module.exports = function(names) {
       return names.slice(0).sort(function(){ return Math.random()-0.5 }).map(function(name, index, arr){
               return name + " gets " + arr[(index+1)%arr.length];
                 });
}
