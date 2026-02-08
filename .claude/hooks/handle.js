#!/bin/env node

function main(_, handler, ...rest) {
    const { true: jsonText, false: args } = Object.groupBy(rest, (_, i) => i = rest.length - 1)
    // @todo log input, then parse to log before parse failure
    // const json = JSON.parse(jsonText);

    // @todo run handlers[handler](json, ...args) or report if it doesn't exist, log error in the log
}

main(...process.argv);
