export default function() {
  this.namespace = '/api';

  let rentals = [{
        type: 'rentals',
        id: 'lbj',
        attributes: {
          title: 'Lebron James',
          position: 'Small Forward',
          age: 32,
          star: true,
          defenderating: 10,
          playmakerating: 10,
          shootingrating: '9',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/LeBron_James.jpg',
          description: 'Turns teams into Championship contenders overnight'
        }
      }, {
        type: 'rentals',
        id: 'pg13',
        attributes: {
          title: 'Paul George',
          position: 'Small Forward',
          age: 27,
          star: true,
          defenderating: 9,
          playmakerating: 5,
          shootingrating: '7',
          image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Paul_George_Pacers.jpg',
          description: 'Good secondary piece, hope he stays with OKC'
        }
      }, {
        type: 'rentals',
        id: 'cp3',
        attributes: {
          title: 'Chris Paul',
          position: 'Point Guard',
          age: 31,
          star: true,
          defenderating: 8,
          playmakerating: 9,
          shootingrating: '8',
          image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Chris_Paul_%2831585840292%29.jpg',
          description: 'Injury prone at this stage, frankly kinda bossy'
        }
      }];

  this.get('/rentals', function(db, request) {
    if(request.queryParams.shootingrating !== undefined) {
      let filteredRentals = rentals.filter(function(i) {
        return i.attributes.shootingrating.indexOf(request.queryParams.shootingrating) !== -1;
      });
      return { data: filteredRentals };
    } else {
      return { data: rentals };
    }
  });
}

