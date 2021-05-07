  $(document).ready(function() {
   var qsRegex; // quick search regex
   var filters = {};
   var selectFilter; // filter value from <select>s

   var $grid = $('.grid').isotope({
      itemSelector: '.item',
      masonry: {
         columnWidth: '.grid-sizer',
         horizontalOrder: true,
         gutter: 30
      },
      filter: function() {
         // combine search & select filters
         var $this = $(this);
         var searchResult = qsRegex ? $this.text().match(qsRegex) : true;
         var selectResult = selectFilter ? $this.is(selectFilter) : true;
         return searchResult && selectResult;
      }
   });
   
// filter buttons
   $('select').change(function() {
      var $this = $(this);

      // store filter value in object
      // i.e. filters.color = 'red'
      var group = $this.attr('data-filter-group');

      filters[group] = $this.find(':selected').attr('data-filter-value');
      // convert object into array
      var filterValues = getObjectValues(filters);
      selectFilter = filterValues.join('');
      // console.log( selectFilter );
      $grid.isotope();
   });

   // use value of search field to filter
   var $quicksearch = $('.quicksearch').keyup(debounce(function() {
      qsRegex = new RegExp($quicksearch.val(), 'gi');
      $grid.isotope();
   }, 200));

   // fill-in for Object.values
   function getObjectValues(obj) {
      var values = [];
      for (var key in obj) {
         values.push(obj[key]);
      }
      return values;
   }

   // debounce so filtering doesn't happen every millisecond
   function debounce(fn, threshold) {
      var timeout;
      threshold = threshold || 100;
      return function debounced() {
         clearTimeout(timeout);
         var args = arguments;
         var _this = this;

         function delayed() {
            fn.apply(_this, args);
         }
         timeout = setTimeout(delayed, threshold);
      };
   }
});
