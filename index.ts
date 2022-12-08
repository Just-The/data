import { ensureFile } from "https://deno.land/std@0.167.0/fs/ensure_file.ts";



export type IndexedObject = {
    [key: string]: string|boolean|number|IndexedObject
}

export type ErrorObject = {
    default: boolean;
    err: Error;
}

export type ReturnValue = Promise<IndexedObject|IndexedObject[]|ErrorObject>;

const getTheData = async (fileName: string):ReturnValue => {
    // const fileExists = await ensureFile(`./data/${fileName}.json`);
    let output:IndexedObject[]|IndexedObject|ErrorObject;
    try {
        output = await import(`./data/${fileName}.json`, {
            assert: {
                type: 'json'
            }
        });
    } catch (err) {
        output = {
            default: false,
            err
        }
    }
    return output;
}


export { getTheData }