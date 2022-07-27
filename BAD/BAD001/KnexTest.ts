import Knex from "knex"
import dotenv from "dotenv"
import * as knexConfigs from "./knexfile"



// const knexConfigs = require("./knexfile");
const configMode = process.env.NODE_ENV || "development";
const knexConfig = knexConfigs[configMode];
const knex = Knex(knexConfig);


dotenv.config();



let add = async () => {
    const ids = await knex
        .insert([
            {
                name: "Ken",
                date_of_birth: "1962-01-02",
            },
            {
                name: "Ben",
                date_of_birth: "1971-01-02",
            },
        ])
        .into("teachers")
        .returning("id");

    knex.destroy()

    console.log('this is printing======add=======', ids)
}

add()


// let remove = async () => {
//     const ids = await knex('teachers').where("id",">=",3).del().returning("id")
       

//     knex.destroy()

//     console.log('this is printing=============', ids)
// }

// remove()

let select = async ()=>{

    const ids = await knex('teachers').where("id",">=",3).returning("id")
       

    knex.destroy()

    console.log('this is printing======select=======', ids)
}

select()
// let F2 = async () => {
//     return await knex
//         .insert([
//             {
//                 name: "Ken",
//                 date_of_birth: "1962-01-02",
//             },
//             {
//                 name: "Ben",
//                 date_of_birth: "1971-01-02",
//             },
//         ])
//         .into("teachers")
//         .returning("id");
// }

// async function print() {
//     console.log('kkkkkkkkkkkkkkkkkkkk', await F2())
//     knex.destroy()
// }

// print()



