import type { PageServerLoad } from "./$types";
import { data } from "./ws.store";
import type { Actions } from "./$types";

export const load = (() => {
    console.log("here");
    return {};
}) satisfies PageServerLoad;


export const actions = {
    default: async () => {
        data.set(1);
        data.subscribe((value)=>{
            console.log(value);
        })
    }
} satisfies Actions;