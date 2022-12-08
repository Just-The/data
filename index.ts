export type IndexedObject = {
    [key: string]: string|boolean|number|IndexedObject
}

export type ErrorObject = {
    default: boolean;
    err: Error;
}


export type FunctionReturnValue = {
    default: IndexedObject|IndexedObject[]|boolean;
    err?: Error;
}

export type ReturnValue = Promise<FunctionReturnValue>;

const getTheData = async (fileName: string):ReturnValue => {
    // const fileExists = await ensureFile(`./data/${fileName}.json`);
    let output:FunctionReturnValue;
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