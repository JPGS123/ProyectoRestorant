import { Injectable } from '@angular/core';
import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';

export interface User {
  id: number;
  email: string;
  password: string;
}

const DB_USERS = 'my_database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private sqlite: SQLiteConnection = new SQLiteConnection(CapacitorSQLite);
  db: SQLiteDBConnection | null = null;

  async initDatabase() {
    try {
      this.db = await this.sqlite.createConnection(DB_USERS, false, 'no-encryption', 1, false);

      if (this.db) {
        await this.db.open();
        console.log('Database connection opened');
        await this.createTables();
      } else {
        console.error('Failed to create a database connection');
      }
    } catch (error) {
      console.error('Error initializing database:', error);
    }
  }

  async createTables() {
    try {
      const createTableSQL = `
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;
      await this.db?.execute(createTableSQL);
      console.log('Tables created');
    } catch (error) {
      console.error('Error creating tables:', error);
    }
  }

  async addUser(email: string, password: string) {
    try {
      const insertUserSQL = `INSERT INTO users (email, password) VALUES (?, ?)`;
      const values = [email, password];
      const result = await this.db?.run(insertUserSQL, values);
      
      if (result && result.changes) {
        console.log('User added with ID:', result.changes.lastId);
      } else {
        console.error('Error adding user: result or result.changes is undefined');
      }
    } catch (error) {
      console.error('Error adding user:', error);
    }
  }

  async getUserByEmail(email: string): Promise<User | null> {
    try {
      const query = `SELECT * FROM users WHERE email = ?`;
      const values = [email];
      const result = await this.db?.query(query, values);
      if (result && result.values && result.values.length > 0) {
        return result.values[0] as User;
      } else {
        return null;
      }
    } catch (error) {
      console.error('Error fetching user by email:', error);
      return null;
    }
  }

  async getUsers(): Promise<User[]> {
    try {
      const query = `SELECT * FROM users`;
      const result = await this.db?.query(query);
      if (result && result.values) {
        return result.values as User[];
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching users:', error);
      return [];
    }
  }

  async deleteUser(email: string) {
    try {
      if (this.db) {
        const deleteSQL = `DELETE FROM users WHERE email = ?`;
        const values = [email];
        const result = await this.db.run(deleteSQL, values);
        
        if (result && result.changes) {
          console.log(`User with email ${email} deleted successfully.`);
        } else {
          console.error(`Error deleting user with email ${email}: result or result.changes is undefined`);
        }
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }
  
}
