import { LANGUAGE_COLOR } from "./constants"

export const getLanguageColor = (name: keyof typeof LANGUAGE_COLOR): string => {
    if (LANGUAGE_COLOR[name]) {
        return LANGUAGE_COLOR[name]
    }

    return "red"
}