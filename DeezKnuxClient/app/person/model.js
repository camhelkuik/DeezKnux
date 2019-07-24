import DS from 'ember-data';

const { attr, hasMany } = DS;

export default DS.Model.extend({
    firstName: attr('string'),
    lastName: attr('string'),
    knuxPhrases: hasMany('knux-phrase')
});
