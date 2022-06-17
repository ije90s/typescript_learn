interface Hero {
  name: string;
  skill: string;
}

// const capt: Hero = {
//     name: 'capt',
//     skill: 'shield',
// }

//onst capt: Hero = {};
const capt = {} as Hero;
// capt.name = 'capt';
// capt.skill = 'shield';

const a: string | null;
a!; //non-null type assertion
