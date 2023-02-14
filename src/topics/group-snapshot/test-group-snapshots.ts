import {
  GroupSnapshot,
  ResolvedGroupSnapshotWithData,
} from "topics/group-snapshot/group-snapshot.types";
import { AccountSource, Tags, ValueType } from "topics/group/group.types";

const exampleGroupGenerator = "test-generator";
const timestamp = 1657955315;
export const exampleData = {
  "0x411C16b4688093C81db91e192aeB5945dCA6B785": 1,
  "0xFd247FF5380d7DA60E9018d1D29d529664839Af2": 3,
  "test:sismo": 5,
};

export const exampleResolvedIdentifierData = {
  "0x411c16b4688093c81db91e192aeb5945dca6b785": 1,
  "0xfd247ff5380d7da60e9018d1d29d529664839af2": 3,
  "0x5151000000000000000000000000000000000001": 5,
};

export const testGroupSnapshots: {
  [name: string]: ResolvedGroupSnapshotWithData;
} = {
  groupSnapshot1_0: {
    id: "1",
    name: "test-group1",
    timestamp: timestamp,
    generatedBy: exampleGroupGenerator + "-1",
    data: exampleData,
    resolvedIdentifierData: exampleResolvedIdentifierData,
    accountSources: [AccountSource.ETHEREUM, AccountSource.TEST],
    properties: { accountsNumber: 0, valueDistribution: { "1": 0 } },
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
    dataMD5: "59d0a82f0d74f1335b2488092dd709ec",
    resolvedIdentifierDataMD5: "36b7427e667183a28e49ff4c07eae262",
  },
  groupSnapshot1_1: {
    id: "1",
    name: "test-group1",
    timestamp: timestamp + 60,
    generatedBy: exampleGroupGenerator + "-1",
    data: exampleData,
    resolvedIdentifierData: exampleResolvedIdentifierData,
    accountSources: [AccountSource.TEST],
    properties: { accountsNumber: 0, valueDistribution: { "1": 0 } },
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
    dataMD5: "59d0a82f0d74f1335b2488092dd709ec",
    resolvedIdentifierDataMD5: "36b7427e667183a28e49ff4c07eae262",
  },
  groupSnapshot2_0: {
    id: "2",
    name: "test-group2",
    timestamp: timestamp + 120,
    generatedBy: exampleGroupGenerator + "-2",
    data: exampleData,
    resolvedIdentifierData: exampleResolvedIdentifierData,
    accountSources: [AccountSource.ETHEREUM, AccountSource.TEST],
    properties: { accountsNumber: 0, valueDistribution: { "1": 0 } },
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
    dataMD5: "59d0a82f0d74f1335b2488092dd709ec",
    resolvedIdentifierDataMD5: "36b7427e667183a28e49ff4c07eae262",
  },
  groupSnapshot3_0: {
    id: "3",
    name: "non-valid-account-source-group",
    timestamp: timestamp + 160,
    generatedBy: exampleGroupGenerator + "-3",
    data: exampleData,
    resolvedIdentifierData: exampleResolvedIdentifierData,
    // AccountSource.DEV has no resolver implemented
    accountSources: [AccountSource.DEV],
    properties: { accountsNumber: 0, valueDistribution: { "1": 0 } },
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
    dataMD5: "59d0a82f0d74f1335b2488092dd709ec",
    resolvedIdentifierDataMD5: "36b7427e667183a28e49ff4c07eae262",
  },
  groupSnapshot4_0: {
    id: "4",
    name: "non-valid-group-properties-missing",
    timestamp: timestamp + 160,
    generatedBy: exampleGroupGenerator + "-4",
    data: { ...exampleData, "fake:testing": "2" },
    resolvedIdentifierData: exampleResolvedIdentifierData,
    // missing group properties
    accountSources: [AccountSource.DEV],
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
  },
  groupSnapshot5_0: {
    id: "5",
    name: "non-valid-group-generator-missing",
    timestamp: timestamp + 160,
    // missing group generator
    data: { ...exampleData, "fake:testing": "2" },
    resolvedIdentifierData: exampleResolvedIdentifierData,
    properties: { accountsNumber: 0, valueDistribution: { "1": 0 } },
    accountSources: [AccountSource.DEV],
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
  },
  groupSnapshot6_0: {
    id: "6",
    name: "non-valid-group-generator-missing",
    timestamp: timestamp + 160,
    generatedBy: exampleGroupGenerator + "-6",
    data: { ...exampleData, "fake:testing": "2" },
    resolvedIdentifierData: exampleResolvedIdentifierData,
    properties: { accountsNumber: 0, valueDistribution: { "1": 0 } },
    // missing account sources
    valueType: ValueType.Info,
    tags: [Tags.Vote, Tags.Mainnet],
  },
};

/* istanbul ignore next */
export const testGroupSnapshot: GroupSnapshot = {
  id: "1",
  name: "test-group",
  timestamp: 1,
  data: async () => ({
    "0x1": 1,
    "0x2": 1,
  }),
  resolvedIdentifierData: async (data = { "0x1": 1, "0x2": 1 }) => {
    return data;
  },
  properties: { accountsNumber: 0, valueDistribution: { "1": 0 } },
  accountSources: [AccountSource.ETHEREUM],
  tags: [],
  valueType: ValueType.Info,
};
