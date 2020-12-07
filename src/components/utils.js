// general utilities

export function uniqueId(prefix) {
    return (prefix+Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10))
}

