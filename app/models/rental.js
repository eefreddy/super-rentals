import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  position: DS.attr(),
  age: DS.attr(),
  star: DS.attr(),
  defenderating: DS.attr(),
  playmakerating: DS.attr(),
  shootingrating: DS.attr(),
  image: DS.attr(),
  description: DS.attr()
});
