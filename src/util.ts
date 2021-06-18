export function gonicCasedName(name: string): string {
    let newStr: string[] = [];
    for (let i = 0; i < name.length; i++) {
        let chr = name.charAt(i);
        if (isASCIIUpper(chr) && i > 0) {
            if (!isASCIIUpper(newStr[newStr.length - 1])) {
                newStr.push('_');
            }
        }

        if (!isASCIIUpper(chr) && i > 1) {
            let l = newStr.length;
            if (isASCIIUpper(newStr[l - 1]) && isASCIIUpper(newStr[l - 2])) {
                newStr.push(newStr[l - 1]);
                newStr[l - 1] = '_';
            }
        }
        newStr.push(chr);
    }

    return newStr.join("").toLowerCase();
}

export function camelCasedName(name: string): string {
    let newStr: string[] = [];
    for (let i = 0; i < name.length; i++) {
        let chr = name.charAt(i);
        if (isASCIIUpper(chr) && i === 0) {
            newStr.push(chr.toLowerCase());
            continue;
        }
        newStr.push(chr);
    }

    return newStr.join("");
}

export function isASCIIUpper(c: string): boolean {
    return 'A' <= c && c <= 'Z';
}

export function countUpper(s: string): number {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        if (isASCIIUpper(s[i])) {
            count++;
        }
    }
    return count;
}