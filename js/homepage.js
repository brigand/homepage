function SearchEngine(e) {
    var self = this;
    self.name = e[0];
    self.url = e[1];

    self.search = function (me) {
        var url = self.url + self.$parent.$data.searchText();
        console.log("searching...")
    };
}

function HomepageViewModel() {
    var self = this;
    self.searchText = ko.observable("");

    // Return the first letter in _name that's not in self.shortcuts
    self.requestShortcut = function (name) {
        for (var i=0; i<name.length; i++) {
            var c = name[i].toLowerCase();

        }
    };

    self.shortcuts = ko.observableArray();
    self.mode = ko.observable('initial');

    self.mapping = ko.observableArray(_.map(
        mapping_array,
        function(e){ return new SearchEngine(e) },
        self
    ));
    //self.mapping = ko.observable(mapping);


    self.html = ko.observable($('#onhtmledit').html());
    self.edithtml = function(){

    }
}
var hp;
ko.applyBindings(hp = new HomepageViewModel());

function executeSearch(search_engine) {

}

$('#buttonBox').on('click', '.searchField', null, function(){
    console.log(ko.contextFor(this));
});

$('#searchBox').on("submit", function(event) {
    var query = $(this).find("#search").val();

    var re_url = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    if (query.match(re_url)) {
        window.location.href = "//" + query;
        return false;
    }
});
