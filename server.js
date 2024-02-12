const express = require("express");
const basicAuth = require("express-basic-auth");

const app = express();

const users = {
  Büşra: "SeliminBüşrası",
  Selim: "BüşranınSelimi",
  1: "1"
};

const authOptions = {
  users,
  challenge: true,
  unauthorizedResponse: `<html><head>
  <title>401 Yetkilendirme Gerekli</title>
  <style type="text/css" id="operaUserStyle"></style></head>
  <body>
  <h1>Yetkilendirme Gerekli</h1>
  <p>Bu sunucu, istenen belgeye erişim yetkiniz olduğunu doğrulayamadı. Ya yanlış kimlik bilgilerini verdiniz (örneğin, hatalı parola) ya da tarayıcınız gerekli kimlik bilgilerini nasıl vereceğinizi anlamıyor.</p>
  <hr>
  <address>
  Web Sunucusu busra-selim.tech
  </address>
  </body></html>`,
};

// Basic Authentication Middleware
app.use(basicAuth(authOptions));

app.use(express.static("views"));

// Korumalı bir endpoint örneği
const currentDate = new Date();
const targetDate = new Date("2024-02-13T21:00:00.000Z");

if (currentDate < targetDate) {
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/html/secret.html");
  });
} else {
  app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/html/index.html");
  });
}

// Sunucuyu dinle
const port = 3000;
app.listen(process.env.PORT || port, () => {
  console.log(`Server listening on port http://localhost:${port}`);
});
