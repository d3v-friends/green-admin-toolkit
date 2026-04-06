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
    getImage: (maxSizeMb = 5) => {
        return new Promise((resolve, reject) => {
            const input = document.createElement("input");
            input.setAttribute("hidden", "true");
            input.setAttribute("type", "file");
            input.setAttribute("accept", "image/*");
            input.setAttribute("multiple", "false");
            input.onchange = () => {
                if (input.files == null)
                    return;
                if (input.files.length === 0)
                    return;
                if (1024 * 1024 * maxSizeMb < input.files[0].size) {
                    reject("over_max_size");
                    return;
                }
                const reader = new FileReader();
                reader.onload = () => {
                    resolve(reader.result);
                    input.remove();
                };
                reader.onerror = (error) => reject(JSON.stringify(error));
                reader.readAsDataURL(input.files[0]);
            };
            input.click();
        });
    },
};
export default fnInput;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50c3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLEdBQUc7SUFDZixjQUFjLEVBQUUsQ0FBQyxDQUFzQyxFQUFVLEVBQUU7UUFDbEUsSUFBSSxZQUFZLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLO2FBQy9CLE9BQU8sQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDO2FBRXZCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFHN0IsSUFBSSxZQUFZLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUM7WUFDbEMsWUFBWSxHQUFHLEdBQUcsR0FBRyxZQUFZLENBQUM7UUFDbkMsQ0FBQztRQUlELE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDOUMsQ0FBQztJQUNELFFBQVEsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQW1CLEVBQUU7UUFDNUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsRUFBRTtZQUN0QyxNQUFNLEtBQUssR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzlDLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ25DLEtBQUssQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ3hDLEtBQUssQ0FBQyxRQUFRLEdBQUcsR0FBRyxFQUFFO2dCQUNyQixJQUFJLEtBQUssQ0FBQyxLQUFLLElBQUksSUFBSTtvQkFBRSxPQUFPO2dCQUNoQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUM7b0JBQUUsT0FBTztnQkFDckMsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLFNBQVMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUNuRCxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7b0JBQ3hCLE9BQU87Z0JBQ1IsQ0FBQztnQkFFRCxNQUFNLE1BQU0sR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO2dCQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRTtvQkFDcEIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFnQixDQUFDLENBQUM7b0JBQ2pDLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztnQkFDaEIsQ0FBQyxDQUFDO2dCQUNGLE1BQU0sQ0FBQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzFELE1BQU0sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3RDLENBQUMsQ0FBQztZQUVGLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztDQUNELENBQUM7QUFJRixlQUFlLE9BQU8sQ0FBQyJ9