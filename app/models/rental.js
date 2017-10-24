import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  position: DS.attr(),
  strengths: DS.attr(),
  weaknesses: DS.attr(),
  age: DS.attr(),
  image: DS.attr(),
  description: DS.attr()
});
