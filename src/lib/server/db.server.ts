import { PrismaClient } from '@prisma/client'
import Database from "better-sqlite3";
import type { Database as Dbtype } from 'better-sqlite3';

class Memdb {
    db: Dbtype;
    
    constructor() {
        this.db=new Database(':memory:');
        this.db.prepare(`CREATE TABLE "session" (
            "id" TEXT NOT NULL PRIMARY KEY,
            "creationDate" int not null default current_timestamp,
            "lastAccess" int not null default current_timestamp
        )`).run();
        this.db.pragma('journal_mode=WAL')
        this.session="0"
    }

    async getSessionbyId(id:string){
        const data=this.db.prepare('select * from "session" where id=?').get(id);
        if(!this.db.inTransaction){
            this.db.prepare('update session set lastAccess=current_timestamp where id=?').run(id)
        }
        if(!data){
            const data=await db.session.findFirst({
                where:{
                    id
                }
            })
            if(!data){
                throw new Error('could not find data');
            }
            this.session=id;
            return data;
        }
        return data;
    }

    cleanSession(timeout:Date){
        this.db.prepare('delete from session where strftime(%s,lastAccess)<=?').run(timeout.getTime())
        return true;
    }

    backupSession(){
        const rows=this.sessionAll
        if(rows){
            for (const row of rows) {
                db.session.create({
                    data:{
                        id:row.id,
                        creatimetime:row.creationDate
                    }
                });
            }
        }
    }

    set session(id:string){
        this.db.prepare('insert into "session" ("id") values (?)').run(id)
    }

    get sessionAll(){
        return this.db.prepare('select * from session').all() as {id:string,token:string,creationDate: string}[];
    }

    close(){
        this.db.close();
    }
}

export const memdb=new Memdb();

export const db = new PrismaClient();