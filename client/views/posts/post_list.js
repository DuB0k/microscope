/**
 * Created by dubok on 10/5/15.
 */
var postData = [
    {
        title: 'Introducing Telescope',
        author: 'Sacha Greif',
        url: 'http://sachagreif.com/introducing-telescope/'
    },
    {
        title: 'Meteor',
        author: 'Tom Coleman', url: 'http://meteor.com'
    },
    {
        title: 'The Meteor Book', author: 'Tom Coleman',
        url: 'http://themeteorbook.com'
    }
];

Template.postsList.helpers({
   posts: postData
});
