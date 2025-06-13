const fnInput = {
    onChangeNumber: (e) => {
        let numericValue = e.target.value
            .replace(/[^0-9.]/g, "")
            .replace(/(\..*)\./g, "$1");
        if (numericValue.startsWith(".")) {
            numericValue = "0" + numericValue;
        }
        return numericValue.replace(/^0+(?=\d)/, "");
    },
};
export default fnInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZm4vaW5wdXQvaW5kZXgudHN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sT0FBTyxHQUFHO0lBQ2YsY0FBYyxFQUFFLENBQUMsQ0FBc0MsRUFBVSxFQUFFO1FBQ2xFLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSzthQUMvQixPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQzthQUV2QixPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRzdCLElBQUksWUFBWSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO1lBQ2xDLFlBQVksR0FBRyxHQUFHLEdBQUcsWUFBWSxDQUFDO1FBQ25DLENBQUM7UUFJRCxPQUFPLFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLENBQUM7Q0FDRCxDQUFDO0FBSUYsZUFBZSxPQUFPLENBQUMifQ==