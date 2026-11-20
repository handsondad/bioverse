import { autumnLeaves } from './autumn-leaves';
import { bacteriaVsVirus } from './bacteria-vs-virus';
import { beePollination } from './bee-pollination';
import { birdMigration } from './bird-migration';
import { bloodSugarInsulin } from './blood-sugar-insulin';
import { breadSweetChew } from './bread-sweet-chew';
import { cactusSpinesDesert } from './cactus-spines-desert';
import { calicoSexChromosome } from './calico-sex-chromosome';
import { camoMimicry } from './camo-mimicry';
import { caterpillarButterfly } from './caterpillar-butterfly';
import { cellBuildingBlocks } from './cell-building-blocks';
import { cellRespiration } from './cell-respiration';
import { coralSymbiosisBleach } from './coral-symbiosis-bleach';
import { decomposerCycle } from './decomposer-cycle';
import { dizzyEarSpin } from './dizzy-ear-spin';
import { dnaBlueprint } from './dna-blueprint';
import { energyPyramidTiger } from './energy-pyramid-tiger';
import { enzymeStep } from './enzyme-step';
import { evolutionGiraffe } from './evolution-giraffe';
import { fatBreathedOut } from './fat-breathed-out';
import { feverImmune } from './fever-immune';
import { fireflyColdLight } from './firefly-cold-light';
import { fishGillsWater } from './fish-gills-water';
import { flemingPenicillin } from './fleming-penicillin';
import { foodWebBalance } from './food-web-balance';
import { gutMicrobiome } from './gut-microbiome';
import { hibernationSleep } from './hibernation-sleep';
import { hookeCorkCell } from './hooke-cork-cell';
import { hotHandReflex } from './hot-hand-reflex';
import { impulseStep } from './impulse-step';
import { lookLikeParents } from './look-like-parents';
import { mendelPeaRatio } from './mendel-pea-ratio';
import { milkPasteurization } from './milk-pasteurization';
import { mimosaFoldTouch } from './mimosa-fold-touch';
import { mitosisStep } from './mitosis-step';
import { mutationDiversity } from './mutation-diversity';
import { parameciumSingleCell } from './paramecium-single-cell';
import { penguinIcyFeet } from './penguin-icy-feet';
import { photosynthesisFood } from './photosynthesis-food';
import { pineappleTingleEnzyme } from './pineapple-tingle-enzyme';
import { plantWaterUp } from './plant-water-up';
import { plasmolysisStep } from './plasmolysis-step';
import { seedGerminationDark } from './seed-germination-dark';
import { sunflowerFollowSun } from './sunflower-follow-sun';
import { tadpoleTailApoptosis } from './tadpole-tail-apoptosis';
import { transportStep } from './transport-step';
import { tuArtemisininMalaria } from './tu-artemisinin-malaria';
import type { Story } from './types';
import { vaccineMemory } from './vaccine-memory';
import { yeastBreadYogurt } from './yeast-bread-yogurt';
import { yuanHybridRice } from './yuan-hybrid-rice';

export type { Film, FilmScene, ShowFrame, Story, StoryShow, StorySource, StoryTurn } from './types';

export const stories: readonly Story[] = [
  cellBuildingBlocks,
  hookeCorkCell,
  parameciumSingleCell,
  tadpoleTailApoptosis,
  plasmolysisStep,
  transportStep,
  mitosisStep,
  breadSweetChew,
  fireflyColdLight,
  cellRespiration,
  pineappleTingleEnzyme,
  fatBreathedOut,
  enzymeStep,
  photosynthesisFood,
  seedGerminationDark,
  autumnLeaves,
  mimosaFoldTouch,
  plantWaterUp,
  sunflowerFollowSun,
  cactusSpinesDesert,
  camoMimicry,
  fishGillsWater,
  caterpillarButterfly,
  hibernationSleep,
  birdMigration,
  penguinIcyFeet,
  hotHandReflex,
  dizzyEarSpin,
  feverImmune,
  bloodSugarInsulin,
  vaccineMemory,
  impulseStep,
  lookLikeParents,
  mendelPeaRatio,
  dnaBlueprint,
  calicoSexChromosome,
  mutationDiversity,
  yuanHybridRice,
  yeastBreadYogurt,
  milkPasteurization,
  bacteriaVsVirus,
  flemingPenicillin,
  gutMicrobiome,
  tuArtemisininMalaria,
  foodWebBalance,
  decomposerCycle,
  beePollination,
  evolutionGiraffe,
  energyPyramidTiger,
  coralSymbiosisBleach,
];

export function findStory(slug: string): Story | undefined {
  return stories.find(story => story.slug === slug);
}
