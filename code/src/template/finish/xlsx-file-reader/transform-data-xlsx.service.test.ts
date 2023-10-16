import TransformDataXlsxService from "./transform-data-xlsx.service";

describe('TransformDataXlsxService', function () {
    it('should read xlsx file correctly.', function () {
        const fileName = "../user.xlsx";

        const service = new TransformDataXlsxService();

        expect(service.readFile(fileName)).toEqual(
            [
                {
                    "data": [
                        ["username", "number", "job"],
                        ["Mawin", 1, "Developer"],
                        ["Mawae", 2, "Quality Assurance"]
                    ],
                    "name": "Sheet1"
                }
            ])
    });

    it('should transform to object successfully', function () {
        const service = new TransformDataXlsxService();
        const rawXlsx = service.readFile("../user.xlsx")
        const result = service.transformDataToObject(rawXlsx[0].data)

        expect(result).toEqual([
            {
                username: "Mawin",
                role: "Developer",
                number: 1,
            },
            {
                username: "Mawae",
                role: "Quality Assurance",
                number: 2,
            }
        ])
    });
});
