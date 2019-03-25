const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

let repoSchema = mongoose.Schema({
  _id: Number,
  name: String,
  owner_login: String,
  html_url: String,
  description: String,
  stargazers_count: Number,
  forks_count: Number,
  archived_at: { type: Date, default: Date.now }
});

let Repo = mongoose.model('Repo', repoSchema);

let save = repo => {
  var doc = new Repo({
    _id: repo.id,
    name: repo.name,
    owner_login: repo.owner.login,
    html_url: repo.html_url,
    description: repo.description,
    stargazers_count: repo.stargazers_count,
    forks_count: repo.forks_count
  })
  doc.save(err => { if (err) return console.log(err) });
}

let fetch = callback => {
  let cb = (err, repos) => { callback(repos) };
  Repo.find(cb).sort('-stargazers_count').limit(25);
}

module.exports.save = save;
module.exports.fetch = fetch;