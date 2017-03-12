
module.exports = {
   dataTypes: function (value) {
       if (value === null || value === undefined) {
         return 'no value';
      }
      else if (typeof value === 'string') {
         return value.length;
      }
      else if (typeof value === 'boolean') {
         return value;
      }

      else if (typeof value === 'number' && value < 100) {
         return 'less than 100';
      }

      else if (typeof value === 'number' && value > 100) {
         return 'more than 100';
      }
      else if (typeof value === 'number' && value === 100) {
         return 'equal to 100';
      }

      else if (value instanceof Array && value.length > 2) {
         return value[2];
      }

      else if (typeof value === 'function'){
         return 'called callback';
      }
   }


}

