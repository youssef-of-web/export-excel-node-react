const excelJs = require("exceljs");
const workbook = new excelJs.Workbook(); //Create a new workbook
const worksheet = workbook.addWorksheet("list of users");
const $users = require("../data/users");

const header = [
  {
    header: "Email",
    key: "email",
    width: 20,
  },
  {
    header: "Name",
    key: "name",
    width: 20,
  },
  {
    header: "Given name",
    key: "given_name",
    width: 20,
  },
  {
    header: "Family name",
    key: "family_name",
    width: 20,
  },
  {
    header: "LastIp",
    key: "last_ip",
    width: 20,
  },
];

worksheet.columns = header;

module.exports = {
  GetExport: (req, res) => {
    $users.forEach((user) => {
      worksheet.addRow(user); //add row
    });

    //option
    worksheet.getRow(1).eachCell((cell) => {
      cell.font = { bold: true };
    });

    return workbook.xlsx.write(res).then(() => {
      res.status(200).end();
    });
  },
};
