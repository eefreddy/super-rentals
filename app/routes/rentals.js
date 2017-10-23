import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return [{
      id: 'lbj',
      title: 'Lebron James',
      position: 'Small Forward',
      strengths: 'Playmaking, Finishing at the Rim, everything but three point shooting and free throws ',
      weaknesses: 'Free throws, three point shooting',
      age: 32,
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/LeBron_James.jpg',
      description: 'Turns teams into Championship contenders overnight'
    }, {
      id: 'pg13',
      title: 'Paul George',
      position: 'Small Forward',
      strengths: 'Good offensive game, special on defense',
      weaknesses: 'Blames teams for team failures',
      age: 27,
      image: 'https://upload.wikimedia.org/wikipedia/commons/d/d6/Paul_George_Pacers.jpg',
      description: 'Good secondary piece, hope he stays with OKC'
    }, {
      id: 'cp3',
      title: 'Chris Paul',
      position: 'Point Guard',
      strengths: 'Playmaking, Point GOD, Good offensive game, good on defense',
      weaknesses: 'Doesnt like people touching his head',
      age: 31,
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/ac/Chris_Paul_%2831585840292%29.jpg',
      description: 'Injury prone at this stage, frankly kinda bossy'

    }]
  }
});
