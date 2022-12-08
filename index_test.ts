
import { assertEquals, assertIsError, fail } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { ErrorObject, getTheData, IndexedObject } from "./index.ts"

Deno.test("Is data retrievable?", async () => {
    const data = await getTheData('pokemon');

    if (data?.err) {
        fail("Error was found when retrieving the data: " + (data as ErrorObject).err.message)
    }

    return assertEquals('Bulbasaur', data?.default && (data.default as IndexedObject[])[0]?.name);
});

Deno.test("Handles missing files properly", async () => {
    const data = await getTheData('IDontExist') as ErrorObject;

    assertIsError(data.err)
});
