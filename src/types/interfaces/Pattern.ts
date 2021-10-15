import { PatternBindings } from "./PatternBinding";
import { PatternDetails } from "./PatternDetails";

export interface Pattern {
  details: PatternDetails,
  bindings: PatternBindings,
  innerCargo: number,
}
