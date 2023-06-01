import merge from "../src/merge";

describe("merge", () => {
  test("should merge two sorted arrays", () => {
    const collection_1 = [0, 2, 4, 6];
    const collection_2 = [1, 3, 5, 7];
    const expectedResult = [0, 1, 2, 3, 4, 5, 6, 7];

    expect(merge(collection_1, collection_2)).toEqual(expectedResult);
  });

  test("should handle empty arrays", () => {
    const collection_1 = [] as number[];
    const collection_2 = [2, 4, 6, 8];

    expect(merge(collection_1, collection_2)).toEqual(collection_2);
  });

  test("should handle singleton arrays", () => {
    const collection_1 = [1];
    const collection_2 = [0, 2, 4, 6];

    expect(merge(collection_1, collection_2)).toEqual([0, 1, 2, 4, 6]);
  });
});