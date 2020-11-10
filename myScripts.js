const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./mydomains.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the mydomains database.');
});

document.getElementById('domainstable').innerHTML = "<table><thead><tr><th>ID</th><th>Domain IP</th></tr></thead><tbody>";
db.serialize(() => {
  db.each(`SELECT *
           FROM domains`, (err, row) => {
    if (err) {
      console.error(err.message);
    }
    console.log(row.id + "\t" + row.ip_txt);
    document.getElementById('domainstable').innerHTML = document.getElementById('domainstable').innerHTML + "<tr><td>"+row.id+"</td><td>"+row.ip_txt+"</td></tr>";
  });
});

document.getElementById('domainstable').innerHTML = document.getElementById('domainstable').innerHTML + "</tbody></table>";
