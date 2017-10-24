import { helper } from '@ember/component/helper';

const forwards = [
  'Small Forward',
  'Power Forward',
  'Center'
];

export function positionType([position]) {
  if (forwards.includes(position)) {
    return 'Forward';
  }
  return 'Guard';
}

export default helper(positionType);
