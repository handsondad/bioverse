import { autumnLeaves } from './autumn-leaves';
import { bacteriaVsVirus } from './bacteria-vs-virus';
import { birdMigration } from './bird-migration';
import { breadSweetChew } from './bread-sweet-chew';
import { camoMimicry } from './camo-mimicry';
import { cellBuildingBlocks } from './cell-building-blocks';
import { cellRespiration } from './cell-respiration';
import { decomposerCycle } from './decomposer-cycle';
import { dnaBlueprint } from './dna-blueprint';
import { enzymeStep } from './enzyme-step';
import { evolutionGiraffe } from './evolution-giraffe';
import { feverImmune } from './fever-immune';
import { foodWebBalance } from './food-web-balance';
import { gutMicrobiome } from './gut-microbiome';
import { hibernationSleep } from './hibernation-sleep';
import { hotHandReflex } from './hot-hand-reflex';
import { impulseStep } from './impulse-step';
import { lookLikeParents } from './look-like-parents';
import { mitosisStep } from './mitosis-step';
import { mutationDiversity } from './mutation-diversity';
import { photosynthesisFood } from './photosynthesis-food';
import { plantWaterUp } from './plant-water-up';
import { plasmolysisStep } from './plasmolysis-step';
import { transportStep } from './transport-step';
import type { Story } from './types';
import { yeastBreadYogurt } from './yeast-bread-yogurt';

export type { Film, FilmScene, ShowFrame, Story, StoryShow, StorySource, StoryTurn } from './types';

export const stories: readonly Story[] = [
  cellBuildingBlocks,
  plasmolysisStep,
  transportStep,
  mitosisStep,
  breadSweetChew,
  cellRespiration,
  enzymeStep,
  photosynthesisFood,
  autumnLeaves,
  plantWaterUp,
  hibernationSleep,
  camoMimicry,
  birdMigration,
  hotHandReflex,
  feverImmune,
  impulseStep,
  lookLikeParents,
  dnaBlueprint,
  mutationDiversity,
  yeastBreadYogurt,
  bacteriaVsVirus,
  gutMicrobiome,
  foodWebBalance,
  decomposerCycle,
  evolutionGiraffe,
];

export function findStory(slug: string): Story | undefined {
  return stories.find(story => story.slug === slug);
}
