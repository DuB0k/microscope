/**
 * Created by dubok on 10/5/15.
 */
Template.postItem.helpers({
    domain: function() {
        var a = document.createElement('a'); a.href = this.url;
        return a.hostname;
    }
});