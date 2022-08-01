/** @format */

// /** @format */

// import { useState } from "react";

// const { json } = require("express");
// const express = require("express");

// const { google } = require("googleapis");

// const app = express();

// export default function Fetcher() {
//   const [data, setData] = useState({});
//   app.get("/", async (req, res) => {
//     const auth = new google.auth.GoogleAuth({
//       keyFile: "credentials.json",
//       scopes: "https://www.googleapis.com/auth/spreadsheets",
//     });

//     const client = await auth.getClient();

//     const googleSheets = google.sheets({ version: "v4", auth: client });

//     const spreadsheetId = "16OYFPmE3hMa9rGh2AhzeBlhEzjCtN-G1L6uJUgyaLMw";

//     const metaData = await googleSheets.spreadsheets.get({
//       auth,
//       spreadsheetId,
//     });

//     //read rows from spreadsheet

//     //   const getRows = await googleSheets.spreadsheets.values.get({
//     //     auth,
//     //     spreadsheetId,
//     //     range: "Esiti!B5:T",
//     //   });

//     //   res.send(getRows.data);
//     // });
//     let jsonBuffer = [];
//     const getSimbol = await googleSheets.spreadsheets.values.get({
//       auth,
//       spreadsheetId,
//       range: "Esiti!B6:B22",
//     });

//     const getLabels = await googleSheets.spreadsheets.values.get({
//       auth,
//       spreadsheetId,
//       range: "Esiti!C5:T6",
//     });

//     const getValues = await googleSheets.spreadsheets.values.get({
//       auth,
//       spreadsheetId,
//       range: "Esiti!C6:T14",
//     });

//     createJson(
//       getSimbol.data.values,
//       getLabels.data.values,
//       getValues.data.values
//     );

//     function createJson(simbols, labels, values) {
//       let baseObject = {
//         opInProf: "",
//         varPrezzoIeri: "",
//         varPrezzoLivIngr: "",
//         entrareAMercato: "",
//         direzioneDaily: "",
//         direzioneWeekly: "",
//         confermaIngressoDW: "",
//         concordanzaSBS: "",
//         probDiProfitto: "",
//         ROI: "",
//         ingressoMedio: "",
//         ingressoIntraday: "",
//         levaMax: "",
//         ingressoEstremo: "",
//         uscita: "",
//         margineMedio: "",
//         margineMassimo: "",
//         chiusura: "",
//       };

//       let baseJson = {
//         1: "",
//         2: "",
//         3: "",
//         4: "",
//         5: "",
//         6: "",
//         7: "",
//         8: "",
//         9: "",
//         10: "",
//       };

//       simbols.map((s, i) => {
//         let currentObject = Object.fromEntries(
//           // convert prices to array, map each key/value pair into another pair
//           // and then fromEntries gives back the object
//           Object.entries(baseObject).map((entry, j) => {
//             return [entry[0], values[i][j]];
//           })
//         );
//         jsonBuffer.push(currentObject);
//         //jsonBuffer.map((e, ind) => )
//       });

//       let finalObject = Object.fromEntries(
//         // convert prices to array, map each key/value pair into another pair
//         // and then fromEntries gives back the object
//         Object.entries(baseJson).map((entry, j) => {
//           return [simbols[j], jsonBuffer[j]];
//           //return [entry[0], values[i][j]];
//         })
//       );

//       setData(finalObject);
//     }
//   });

//   return data;
// }
