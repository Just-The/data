
import { assertEquals, assertIsError, fail } from "https://deno.land/std@0.167.0/testing/asserts.ts";
import { ErrorObject, getTheData, IndexedObject } from "./index.ts"

Deno.test("Is data retrievable?", async () => {
    let data = await getTheData('pokemon');

    if ((data as ErrorObject).err) {
        fail("Error was found when retrieving the data: " + (data as ErrorObject).err.message)
    }
    console.log((data as IndexedObject[])[0], typeof data);
    if ((data as IndexedObject).default) {
        data = (data as IndexedObject).default as unknown as IndexedObject[];
    }
    return assertEquals('Bulbasaur', (data as IndexedObject[])[0]?.name);
});

Deno.test("Handles missing files properly", async () => {
    const data = await getTheData('IDontExist') as ErrorObject;

    assertIsError(data.err)
});
