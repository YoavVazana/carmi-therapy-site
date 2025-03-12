const { MongoClient, ServerApiVersion } = require('mongodb');

// כתובת החיבור ל-MongoDB (וודא להכניס סיסמה נכונה)
const uri = "mongodb+srv://yoav_vazana:omerIdoVazana@cluster0.mqzsg.mongodb.net/therapy_bd?retryWrites=true&w=majority&appName=Cluster0";

// יצירת אובייקט לקוח של MongoDB
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // חיבור לשרת
    await client.connect();

    // פינג לשרת כדי לוודא שהחיבור עובד
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // סגירת חיבור לשרת
    await client.close();
  }
}

// הרצת הפונקציה
run().catch(console.dir);
