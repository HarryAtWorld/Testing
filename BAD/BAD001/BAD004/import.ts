import dotenv from "dotenv";
dotenv.config();

import xlsx from "../node_modules/xlsx";
import pg from "pg";
import path from "path";

interface xlsxData {
    username: string;
    password: string;
    level: string;

}

interface xlsxData_category {
    name: string;
}

interface xlsxData_file {
    name: string;
    content:string;
    is_file:boolean;
    category:string;
    owner:string;
}

export async function main1() {
    const client = new pg.Client({
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    });

    await client.connect();

    try {
        const wb = xlsx.readFile(path.join(__dirname, "data", "users.csv"));
        const userData = xlsx.utils.sheet_to_json<xlsxData>(wb.Sheets["Sheet1"]);


        let sqlQuery = "INSERT INTO users (username, password, level) VALUES ";
        const sqlParams: Array<number | string> = [];
        let counter = 1;
        for (let i = 0; i < userData.length; i++) {
            const { username: username, password: password, level: level } = userData[i];


            if (counter !== 1) {
                sqlQuery += ", ";
            }

            sqlQuery += `($${counter++}, $${counter++}, $${counter++})`;
            sqlParams.push(username);
            sqlParams.push(password);
            sqlParams.push(level);
        }

        // await client.query(/*sql */ `DELETE FROM users`);
        await client.query(sqlQuery, sqlParams);
    } catch (err) {
        console.error(err.message);
    } finally {
        await client.end();
    }


    // await client.query('select * from users');

}

export async function main2() {
    const client = new pg.Client({
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    });

    await client.connect();

    try {
        const wb = xlsx.readFile(path.join(__dirname, "data", "category.csv"));
        const categoryData = xlsx.utils.sheet_to_json<xlsxData_category>(wb.Sheets["Sheet1"]);


        let sqlQuery = "INSERT INTO category (name) VALUES ";
        const sqlParams: Array<number | string> = [];
        let counter = 1;
        for (let i = 0; i < categoryData.length; i++) {
            const { name: name } = categoryData[i];


            if (counter !== 1) {
                sqlQuery += ", ";
            }

            sqlQuery += `($${counter++})`;
            sqlParams.push(name);

        }

        // await client.query(/*sql */ `DELETE FROM users`);
        await client.query(sqlQuery, sqlParams);
    } catch (err) {
        console.error(err.message);
    } finally {
        await client.end();
    }


    // await client.query('select * from users');

}




export async function main3() {
    const client = new pg.Client({
        database: process.env.DB_NAME,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
    });

    await client.connect();

    try {
        const wb = xlsx.readFile(path.join(__dirname, "data", "files.csv"));
        const fileData = xlsx.utils.sheet_to_json<xlsxData_file>(wb.Sheets["Sheet1"]);


        let sqlQuery = "INSERT INTO files (name, content, is_file, category, owner) VALUES ";
        const sqlParams: Array<number | string|boolean> = [];
        let counter = 1;
        for (let i = 0; i < fileData.length; i++) {
            const { name: name, content:content,is_file:is_file,category:category,owner:owner } = fileData[i];


            if (counter !== 1) {
                sqlQuery += ", ";
            }

            sqlQuery += `($${counter++},$${counter++},$${counter++},$${counter++},$${counter++})`;
            sqlParams.push(name);
            sqlParams.push(content);
            sqlParams.push(is_file);
            sqlParams.push(category);
            sqlParams.push(owner);

        }

        // await client.query(/*sql */ `DELETE FROM users`);
        await client.query(sqlQuery, sqlParams);
    } catch (err) {
        console.error(err.message);
    } finally {
        await client.end();
    }


    // await client.query('select * from users');

}

main3()

