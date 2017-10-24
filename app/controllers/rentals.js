import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    filterByShooting(param) {
      if (param !== '') {
        return this.get('store').query('rental', { shootingrating: param });
      } else {
        return this.get('store').findAll('rental');
      }
    }
  }
});
