import { pre } from './check/precondition/Pre.js';
import { asyncProperty, IAsyncProperty } from './check/property/AsyncProperty.js';
import { property, IProperty } from './check/property/Property.js';
import { IRawProperty } from './check/property/IRawProperty.js';
import { Parameters } from './check/runner/configuration/Parameters.js';
import { RunDetails } from './check/runner/reporter/RunDetails.js';
import { assert, check } from './check/runner/Runner.js';
import { sample, statistics } from './check/runner/Sampler.js';

import { array } from './check/arbitrary/ArrayArbitrary.js';
import { bigInt, bigIntN, bigUint, bigUintN } from './check/arbitrary/BigIntArbitrary.js';
import { boolean } from './check/arbitrary/BooleanArbitrary.js';
import { ascii, base64, char, char16bits, fullUnicode, hexa, unicode } from './check/arbitrary/CharacterArbitrary.js';
import { clonedConstant, constant, constantFrom } from './check/arbitrary/ConstantArbitrary.js';
import { context, Context } from './check/arbitrary/ContextArbitrary.js';
import { date } from './check/arbitrary/DateArbitrary.js';
import { dedup } from './check/arbitrary/DedupArbitrary.js';
import { Arbitrary } from './check/arbitrary/definition/Arbitrary.js';
import { Shrinkable } from './check/arbitrary/definition/Shrinkable.js';
import { dictionary } from './check/arbitrary/DictionaryArbitrary.js';
import { emailAddress } from './check/arbitrary/EmailArbitrary.js';
import { double, float } from './check/arbitrary/FloatingPointArbitrary.js';
import { frequency, WeightedArbitrary } from './check/arbitrary/FrequencyArbitrary.js';
import { compareBooleanFunc, compareFunc, func } from './check/arbitrary/FunctionArbitrary.js';
import { domain } from './check/arbitrary/HostArbitrary.js';
import { integer, maxSafeInteger, maxSafeNat, nat } from './check/arbitrary/IntegerArbitrary.js';
import { ipV4, ipV4Extended, ipV6 } from './check/arbitrary/IpArbitrary.js';
import { letrec } from './check/arbitrary/LetRecArbitrary.js';
import { lorem } from './check/arbitrary/LoremArbitrary.js';
import { mapToConstant } from './check/arbitrary/MapToConstantArbitrary.js';
import { memo, Memo } from './check/arbitrary/MemoArbitrary.js';
import { mixedCase, MixedCaseConstraints } from './check/arbitrary/MixedCaseArbitrary.js';
import {
  anything,
  json,
  jsonObject,
  object,
  ObjectConstraints,
  unicodeJson,
  unicodeJsonObject
} from './check/arbitrary/ObjectArbitrary.js';
import { oneof } from './check/arbitrary/OneOfArbitrary.js';
import { option } from './check/arbitrary/OptionArbitrary.js';
import { record, RecordConstraints } from './check/arbitrary/RecordArbitrary.js';
import { set } from './check/arbitrary/SetArbitrary.js';
import { infiniteStream } from './check/arbitrary/StreamArbitrary.js';
import {
  asciiString,
  base64String,
  fullUnicodeString,
  hexaString,
  string,
  string16bits,
  stringOf,
  unicodeString
} from './check/arbitrary/StringArbitrary.js';
import { shuffledSubarray, subarray } from './check/arbitrary/SubarrayArbitrary.js';
import { genericTuple, tuple } from './check/arbitrary/TupleArbitrary.js';
import { uuid, uuidV } from './check/arbitrary/UuidArbitrary.js';
import {
  webAuthority,
  WebAuthorityConstraints,
  webFragments,
  webQueryParameters,
  webSegment,
  webUrl,
  WebUrlConstraints
} from './check/arbitrary/WebArbitrary.js';

import { AsyncCommand } from './check/model/command/AsyncCommand.js';
import { Command } from './check/model/command/Command.js';
import { ICommand } from './check/model/command/ICommand.js';
import { commands } from './check/model/commands/CommandsArbitrary.js';
import { asyncModelRun, modelRun } from './check/model/ModelRunner.js';

import { Random } from './random/generator/Random.js';

import {
  configureGlobal,
  GlobalParameters,
  readConfigureGlobal,
  resetConfigureGlobal
} from './check/runner/configuration/GlobalParameters.js';
import { VerbosityLevel } from './check/runner/configuration/VerbosityLevel.js';
import { ExecutionStatus } from './check/runner/reporter/ExecutionStatus.js';
import { ExecutionTree } from './check/runner/reporter/ExecutionTree.js';
import { cloneMethod } from './check/symbols.js';
import { Stream, stream } from './stream/Stream.js';
import { stringify } from './utils/stringify.js';
import { scheduler, Scheduler, SchedulerSequenceItem } from './check/arbitrary/AsyncSchedulerArbitrary.js';

// boolean
// floating point types
// integer types
// single character
// strings
// combination of others
// complex combinations
export {
  // assess the property
  sample,
  statistics,
  // check the property
  check,
  assert,
  // pre conditions
  pre,
  // property definition
  property,
  asyncProperty,
  IRawProperty,
  IProperty,
  IAsyncProperty,
  // pre-built arbitraries
  boolean,
  float,
  double,
  integer,
  nat,
  maxSafeInteger,
  maxSafeNat,
  bigIntN,
  bigUintN,
  bigInt,
  bigUint,
  char,
  ascii,
  char16bits,
  unicode,
  fullUnicode,
  hexa,
  base64,
  mixedCase,
  string,
  asciiString,
  string16bits,
  stringOf,
  unicodeString,
  fullUnicodeString,
  hexaString,
  base64String,
  lorem,
  constant,
  constantFrom,
  clonedConstant,
  mapToConstant,
  option,
  oneof,
  frequency,
  dedup,
  shuffledSubarray,
  subarray,
  array,
  infiniteStream,
  set,
  tuple,
  genericTuple,
  record,
  dictionary,
  anything,
  object,
  json,
  jsonObject,
  unicodeJson,
  unicodeJsonObject,
  letrec,
  memo,
  compareBooleanFunc,
  compareFunc,
  func,
  context,
  date,
  // web
  ipV4,
  ipV4Extended,
  ipV6,
  domain,
  webAuthority,
  webSegment,
  webFragments,
  webQueryParameters,
  webUrl,
  emailAddress,
  uuid,
  uuidV,
  // model-based
  AsyncCommand,
  Command,
  ICommand,
  asyncModelRun,
  modelRun,
  commands,
  // scheduler
  scheduler,
  Scheduler,
  SchedulerSequenceItem,
  // extend the framework
  Arbitrary,
  Shrinkable,
  cloneMethod,
  // print values
  stringify,
  // interfaces
  Context,
  ExecutionStatus,
  ExecutionTree,
  GlobalParameters,
  Memo,
  MixedCaseConstraints,
  ObjectConstraints,
  Parameters,
  RecordConstraints,
  WebAuthorityConstraints,
  WebUrlConstraints,
  RunDetails,
  Random,
  Stream,
  stream,
  VerbosityLevel,
  WeightedArbitrary,
  // global configuration
  configureGlobal,
  readConfigureGlobal,
  resetConfigureGlobal
};
