import { MongoClient, Db, ServerApiVersion } from 'mongodb';

class Database {
  private static instance: Database;
  private url: string;
  private client: MongoClient;
  private db: Db | undefined;

  private constructor() {
    this.url = "mongodb+srv://killa-maria:killa-maria-db@cluster0.rhpbn25.mongodb.net/";
    this.client = new MongoClient(this.url, { serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    } });
  }

  public static async getInstance(): Promise<Database> {
    if (!Database.instance) {
      Database.instance = new Database();
      await Database.instance.connect();
    }
    return Database.instance;
  }

  private async connect() {
    try {
      // Connect to the MongoDB cluster
      await this.client.connect();

      // Make the appropriate DB calls
      this.db = this.client.db('books');
    } catch (e) {
      console.error(e);
    }
  }

  public async close() {
    try {
      // Close the connection to the MongoDB cluster
      await this.client.close();
    } catch (e) {
      console.error(e);
    }
  }

  public getDb(): Db | undefined {
    return this.db;
  }
}

export default Database;